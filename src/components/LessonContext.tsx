"use client";

import { createContext, useContext } from "react";
import { useLessonProgress } from "@/lib/progress";

type LessonCtx = ReturnType<typeof useLessonProgress> & {
  lessonKey: string;
  ttsLang: string;
};

const Ctx = createContext<LessonCtx | null>(null);

export function LessonProvider({
  lessonKey,
  ttsLang,
  children,
}: {
  lessonKey: string;
  ttsLang: string;
  children: React.ReactNode;
}) {
  const store = useLessonProgress(lessonKey);
  return <Ctx.Provider value={{ ...store, lessonKey, ttsLang }}>{children}</Ctx.Provider>;
}

export function useLesson() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLesson must be used inside <LessonProvider>");
  return ctx;
}
