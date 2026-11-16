import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { allLessonParams, getCourse, getGrade, getLesson } from "@/content";
import { courseStyle, Flag } from "@/components/Flag";
import { LessonBody } from "@/components/LessonBody";
import { LessonProvider } from "@/components/LessonContext";

export function generateStaticParams() {
  return allLessonParams();
}

type Props = PageProps<"/[from]/[lang]/[grade]/[lesson]">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { from, lang, grade, lesson } = await params;
  const l = getLesson(from, lang, grade, lesson);
  return { title: l ? `${l.title} – ${l.titlePl}` : undefined };
}

export default function LessonPage({ params }: Props) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <LessonContent params={params} />
    </Suspense>
  );
}

function PageSkeleton() {
  return (
    <main className="mx-auto max-w-4xl animate-pulse px-4 pt-14">
      <div className="h-56 rounded-3xl bg-zinc-200" />
      <div className="mt-8 h-14 rounded-2xl bg-zinc-100" />
      <div className="mt-8 h-72 rounded-2xl bg-zinc-100" />
    </main>
  );
}

async function LessonContent({ params }: Pick<Props, "params">) {
  const { from, lang, grade: gradeSlug, lesson: lessonSlug } = await params;
  const course = getCourse(from, lang);
  const grade = course && getGrade(course, gradeSlug);
  const lesson = getLesson(from, lang, gradeSlug, lessonSlug);
  if (!course || !grade || !lesson) notFound();

  const chapter = grade.chapters.find((c) => c.number === lesson.chapter);
  // The whole grade in reading order, so the last lesson of a chapter leads into the next chapter.
  const outline = grade.chapters.flatMap((c) => c.lessons.map((l) => ({ ...l, chapter: c.number })));
  const idx = outline.findIndex((l) => l.slug === lesson.slug);
  const next = idx >= 0 ? outline[idx + 1] : undefined;
  const nextLabel = next && next.chapter !== lesson.chapter ? `Rozdział ${next.chapter}` : "Następna lekcja";
  const base = `/${from}/${lang}`;
  const lessonKey = `${from}/${lang}/${gradeSlug}/${lessonSlug}`;

  return (
    <main style={courseStyle(course)} className="mx-auto max-w-4xl px-4 pb-20">
      <nav className="pt-6 text-sm text-zinc-500">
        <Link href={`/${from}`} className="hover:underline">
          Strona główna
        </Link>{" "}
        /{" "}
        <Link href={base} className="hover:underline">
          {course.namePl}
        </Link>{" "}
        /{" "}
        <Link href={`${base}#${grade.slug}`} className="hover:underline">
          Poziom {grade.level}
        </Link>
      </nav>

      <header className="relative my-8 overflow-hidden rounded-3xl bg-(--accent) px-6 py-8 text-white shadow-lg sm:px-10 sm:py-10">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 right-20 h-40 w-40 rounded-full bg-white/10" />
        <div className="relative">
          <div className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/80">
            <Flag code={course.flag} className="h-7 w-7" />
            Poziom {grade.level} · Rozdział {lesson.chapter}
            {chapter ? ` „${chapter.title}”` : ""} · Lekcja {lesson.number}
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">{lesson.title}</h1>
          <p className="mt-1 text-lg text-white/85">{lesson.titlePl}</p>
          <p className="mt-5 max-w-2xl text-white/95">{lesson.intro}</p>
        </div>
      </header>

      <LessonProvider lessonKey={lessonKey} ttsLang={course.ttsLang}>
        <LessonBody blocks={lesson.blocks} languageName={course.namePl} />
      </LessonProvider>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-zinc-200 bg-white p-5">
        <Link href={`${base}#${grade.slug}`} className="font-semibold text-zinc-600 hover:text-zinc-900">
          ← Spis treści
        </Link>
        {next &&
          (getLesson(from, lang, gradeSlug, next.slug) ? (
            <Link href={`${base}/${gradeSlug}/${next.slug}`} className="rounded-full bg-(--accent) px-5 py-2 font-bold text-white">
              {nextLabel}: {next.title} →
            </Link>
          ) : (
            <span className="text-sm text-zinc-400">
              {nextLabel}: <span className="font-semibold">{next.title}</span> – wkrótce
            </span>
          ))}
      </div>
    </main>
  );
}
