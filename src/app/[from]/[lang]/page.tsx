import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { allCourseParams, getCourse, getLesson } from "@/content";
import { courseStyle, Flag } from "@/components/Flag";
import { LessonStatus } from "@/components/LessonStatus";
import { LevelHint } from "@/components/LevelHint";

export function generateStaticParams() {
  return allCourseParams();
}

export async function generateMetadata({ params }: PageProps<"/[from]/[lang]">): Promise<Metadata> {
  const { from, lang } = await params;
  const course = getCourse(from, lang);
  return { title: course ? `Język ${course.namePl.toLowerCase()}` : undefined };
}

export default function CoursePage({ params }: PageProps<"/[from]/[lang]">) {
  return (
    <Suspense fallback={<main className="mx-auto h-96 max-w-5xl animate-pulse px-4 pt-14"><div className="h-full rounded-3xl bg-zinc-100" /></main>}>
      <CourseContent params={params} />
    </Suspense>
  );
}

async function CourseContent({ params }: Pick<PageProps<"/[from]/[lang]">, "params">) {
  const { from, lang } = await params;
  const course = getCourse(from, lang);
  if (!course) notFound();

  return (
    <main style={courseStyle(course)} className="mx-auto max-w-5xl px-4 pb-16">
      <nav className="pt-6 text-sm text-zinc-500">
        <Link href={`/${from}`} className="hover:underline">
          Strona główna
        </Link>{" "}
        / <span className="text-zinc-800">{course.namePl}</span>
      </nav>

      <header className="flex flex-wrap items-center gap-5 py-8">
        <Flag code={course.flag} className="h-16 w-16" />
        <div>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Język {course.namePl.toLowerCase()}</h1>
          <p className="text-zinc-600">{course.tagline}</p>
        </div>
      </header>

      <div className="mb-8 flex flex-wrap gap-3">
        {course.grades.map((g) => (
          <a
            key={g.slug}
            href={`#${g.slug}`}
            className="rounded-full border-2 border-(--accent) px-5 py-2 font-bold text-(--accent) hover:bg-(--accent) hover:text-white"
          >
            Poziom {g.level} →
          </a>
        ))}
      </div>

      <div className="space-y-14">
        {course.grades.map((grade) => (
          <section key={grade.slug} id={grade.slug} className="scroll-mt-20">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b-4 border-(--accent) pb-3">
              <div>
                <h2 className="font-display text-3xl font-extrabold">
                  <LevelHint grade={grade} />
                </h2>
                <p className="text-zinc-600">{grade.description}</p>
              </div>
            </div>

            <ol className="grid gap-4 md:grid-cols-2">
              {grade.chapters.map((ch) => {
                const hasContent = ch.lessons.some((l) => getLesson(from, course.slug, grade.slug, l.slug));
                return (
                  <li
                    key={ch.number}
                    className={`paper-card rounded-2xl p-5 ${hasContent ? "" : "opacity-70"}`}
                  >
                    <div className="mb-1 text-xs font-bold uppercase tracking-widest text-(--accent)">
                      Rozdział {ch.number}
                    </div>
                    <h3 className="font-display text-2xl font-bold leading-tight">{ch.title}</h3>
                    <p className="text-sm text-zinc-500">{ch.titlePl}</p>
                    <p className="mt-2 text-sm text-zinc-600">{ch.topics.join(" · ")}</p>

                    {ch.lessons.length > 0 ? (
                      <ul className="mt-4 space-y-2">
                        {ch.lessons.map((l, i) => {
                          const lesson = getLesson(from, course.slug, grade.slug, l.slug);
                          const label = (
                            <>
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--accent-soft) text-sm font-bold text-(--accent-ink)">
                                {i + 1}
                              </span>
                              <span className="font-target flex-1 font-semibold">{l.title}</span>
                            </>
                          );
                          if (!lesson) {
                            return (
                              <li key={l.slug} className="flex items-center gap-3 rounded-xl px-3 py-2 text-zinc-400">
                                {label}
                                <span className="text-xs">wkrótce</span>
                              </li>
                            );
                          }
                          const key = `${from}/${course.slug}/${grade.slug}/${l.slug}`;
                          return (
                            <li key={l.slug}>
                              <Link
                                href={`/${key}`}
                                className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 ring-1 ring-zinc-200 transition hover:ring-2 hover:ring-(--accent)"
                              >
                                {label}
                                <LessonStatus
                                  lessonKey={key}
                                  exerciseIds={lesson.blocks.flatMap((b) => (b.type === "exercise" ? [b.exercise.id] : []))}
                                />
                                <span className="text-(--accent)">→</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="mt-4 rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-400">Lekcje w przygotowaniu</p>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </main>
  );
}
