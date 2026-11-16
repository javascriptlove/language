import Link from "next/link";
import type { Course } from "@/content/types";
import { courseStyle, Flag } from "@/components/Flag";

/** Big, colourful card linking to one language course. */
export function CourseCard({ href, sourceName, course: c }: { href: string; sourceName: string; course: Course }) {
  return (
    <Link
      href={href}
      prefetch
      style={courseStyle(c)}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white py-5 pl-7 pr-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="absolute inset-y-0 left-0 w-2 bg-(--accent)" />
      <div className="flex items-center gap-4">
        <Flag code={c.flag} className="h-12 w-12" />
        <div className="min-w-0">
          <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">Język {c.namePl.toLowerCase()}</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {sourceName} → {c.nameNative}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-zinc-600">{c.tagline}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
        {c.grades.map((g) => (
          <span key={g.slug} className="rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-semibold text-(--accent-ink)">
            Poziom {g.level}
          </span>
        ))}
        <span className="ml-auto inline-flex items-center gap-2 font-bold text-(--accent) transition-all group-hover:gap-3">
          Zaczynam →
        </span>
      </div>
    </Link>
  );
}
