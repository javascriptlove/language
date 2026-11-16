"use client";

import { isPassed, useLessonProgress } from "@/lib/progress";

/** "3/7 zadań" badge for a lesson card, read from saved progress. */
export function LessonStatus({ lessonKey, exerciseIds }: { lessonKey: string; exerciseIds: string[] }) {
  const { progress } = useLessonProgress(lessonKey);
  const passed = exerciseIds.filter((id) => isPassed(progress.exercises[id])).length;
  if (passed === 0) return null;
  const done = passed === exerciseIds.length;
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
        done ? "bg-emerald-500 text-white" : "bg-(--accent-soft) text-(--accent-ink)"
      }`}
    >
      {done ? "✓ ukończona" : `${passed}/${exerciseIds.length} zadań`}
    </span>
  );
}
