import { sources } from "@/content";
import { CourseCard } from "@/components/CourseCard";
import { Flag } from "@/components/Flag";

/** Entry point: every available "I speak X → I learn Y" pair, one click to the course. */
export default function PairPicker() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16">
      <section className="py-12 text-center sm:py-16">
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
          Językowy <span className="text-rose-600">Sprint</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
          Choose your language pair · Wybierz parę językową
        </p>
      </section>

      <div className="space-y-12">
        {sources.map((source) => (
          <section key={source.slug} aria-labelledby={`from-${source.slug}`} lang={source.htmlLang}>
            <h2 id={`from-${source.slug}`} className="mb-5 flex items-center gap-3 font-display text-2xl font-bold">
              <Flag code={source.flag} className="h-8 w-8" />
              {source.iSpeak}
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2">
              {source.courses.map((c) => (
                <li key={c.slug}>
                  <CourseCard href={`/${source.slug}/${c.slug}`} sourceName={source.name} course={c} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
