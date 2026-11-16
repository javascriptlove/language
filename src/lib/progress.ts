"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

/**
 * Lesson progress lives in localStorage – no accounts needed.
 * Shape: { [exerciseId]: { score, total } }, plus a "selfcheck" map.
 */
export type ExerciseResult = { score: number; total: number };
export type LessonProgress = {
  exercises: Record<string, ExerciseResult>;
  selfcheck: Record<number, boolean>;
};

const EMPTY = "{}";
const listeners = new Set<() => void>();

const storageKey = (lessonKey: string) => `progress:${lessonKey}`;

function read(lessonKey: string): string {
  try {
    return localStorage.getItem(storageKey(lessonKey)) ?? EMPTY;
  } catch {
    return EMPTY;
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function parse(raw: string): LessonProgress {
  try {
    const p = JSON.parse(raw) as Partial<LessonProgress>;
    return { exercises: p.exercises ?? {}, selfcheck: p.selfcheck ?? {} };
  } catch {
    return { exercises: {}, selfcheck: {} };
  }
}

function update(lessonKey: string, fn: (p: LessonProgress) => LessonProgress) {
  const next = fn(parse(read(lessonKey)));
  try {
    localStorage.setItem(storageKey(lessonKey), JSON.stringify(next));
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export function useLessonProgress(lessonKey: string) {
  const raw = useSyncExternalStore(
    subscribe,
    () => read(lessonKey),
    () => EMPTY,
  );
  const progress = useMemo(() => parse(raw), [raw]);

  const saveExercise = useCallback(
    (id: string, result: ExerciseResult) =>
      update(lessonKey, (p) => {
        // Keep the best attempt.
        const prev = p.exercises[id];
        if (prev && prev.score >= result.score) return p;
        return { ...p, exercises: { ...p.exercises, [id]: result } };
      }),
    [lessonKey],
  );

  const toggleSelfcheck = useCallback(
    (i: number) =>
      update(lessonKey, (p) => ({
        ...p,
        selfcheck: { ...p.selfcheck, [i]: !p.selfcheck[i] },
      })),
    [lessonKey],
  );

  const reset = useCallback(
    () => update(lessonKey, () => ({ exercises: {}, selfcheck: {} })),
    [lessonKey],
  );

  return { progress, saveExercise, toggleSelfcheck, reset };
}

/** Exercises count as passed at 80% or more. */
export const isPassed = (r?: ExerciseResult) => !!r && r.total > 0 && r.score / r.total >= 0.8;
