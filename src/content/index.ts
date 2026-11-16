import type { Course, Lesson, SourceLanguage } from "./types";
import { polish } from "./polish";

/**
 * Source languages (the language the learner already speaks and the one
 * explanations are written in). Add e.g. `english` here later.
 */
export const sources: SourceLanguage[] = [polish];

export const DEFAULT_SOURCE = "polish";

export function getSource(from: string) {
  return sources.find((s) => s.slug === from);
}

export function getCourse(from: string, lang: string) {
  return getSource(from)?.courses.find((c) => c.slug === lang);
}

export function getGrade(course: Course, grade: string) {
  return course.grades.find((g) => g.slug === grade);
}

export function getLesson(from: string, lang: string, grade: string, lesson: string): Lesson | undefined {
  return getSource(from)?.lessons[`${lang}/${grade}/${lesson}`];
}

export function allSourceParams() {
  return sources.map((s) => ({ from: s.slug }));
}

export function allCourseParams() {
  return sources.flatMap((s) => s.courses.map((c) => ({ from: s.slug, lang: c.slug })));
}

export function allLessonParams() {
  return sources.flatMap((s) =>
    Object.keys(s.lessons).map((key) => {
      const [lang, grade, lesson] = key.split("/");
      return { from: s.slug, lang, grade, lesson };
    }),
  );
}
