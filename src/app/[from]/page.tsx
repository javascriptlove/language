import { notFound } from "next/navigation";
import { Suspense } from "react";
import { allSourceParams, getSource } from "@/content";
import { CourseCard } from "@/components/CourseCard";

const STEPS = [
  {
    icon: "🎧",
    title: "Słuchaj",
    text: "Każde słowo, zdanie i dialog ma przycisk z lektorem. Możesz zwolnić tempo i słuchać do skutku.",
  },
  {
    icon: "📖",
    title: "Zrozum",
    text: "Gramatyka wyjaśniona po polsku, prostymi słowami, z tabelkami i przykładami.",
  },
  {
    icon: "✏️",
    title: "Ćwicz",
    text: "Zadania sprawdzają się same: od razu widzisz błędy, wskazówki i poprawne odpowiedzi.",
  },
  {
    icon: "🗣️",
    title: "Mów",
    text: "Na koniec lekcji piszesz i czytasz na głos własną wypowiedź – jak przy tablicy, tylko bez stresu.",
  },
];

export function generateStaticParams() {
  return allSourceParams();
}

export default function SourceHome({ params }: PageProps<"/[from]">) {
  return (
    <Suspense fallback={<main className="mx-auto min-h-screen max-w-5xl" />}>
      <Home params={params} />
    </Suspense>
  );
}

async function Home({ params }: Pick<PageProps<"/[from]">, "params">) {
  const { from } = await params;
  const source = getSource(from);
  if (!source) notFound();
  const { courses } = source;
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16">
      <section className="py-12 text-center sm:py-16">
        <p className="mb-3 inline-block rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
          Drugi język obcy · od zera do A2
        </p>
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
          Cały podręcznik.
          <br />
          <span className="text-rose-600">W szybkim tempie.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-600">
          Zeszyt ćwiczeń online do samodzielnej nauki – lekcja po lekcji, tak jak w szkole, ale bez nauczyciela.
          Cały materiał szkolny, krok po kroku, w wersji „speedrun”.
        </p>
      </section>

      <section aria-labelledby="pick" className="mb-16">
        <h2 id="pick" className="mb-5 text-center font-display text-2xl font-bold">
          Wybierz język
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {courses.map((c) => (
            <CourseCard key={c.slug} href={`/${from}/${c.slug}`} sourceName={source.name} course={c} />
          ))}
        </div>
      </section>

      <section aria-labelledby="how">
        <h2 id="how" className="mb-2 text-center font-display text-2xl font-bold">
          Jak uczyć się bez nauczyciela?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center text-zinc-600">
          Każda lekcja ma ten sam układ. Przechodź ją od góry do dołu – zajmie Ci to ok. 30–45 minut.
        </p>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="paper-card rounded-2xl p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-3xl">{s.icon}</span>
                <span className="font-display text-sm font-bold text-zinc-400">KROK {i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-8 max-w-2xl rounded-2xl bg-amber-50 px-5 py-4 text-center text-sm text-amber-900 ring-1 ring-amber-200">
          💡 <strong>Złota zasada:</strong> zawsze powtarzaj na głos. Język to nie tylko czytanie – im więcej mówisz,
          tym szybciej zapamiętujesz. Twoje postępy zapisują się w tej przeglądarce.
        </p>
      </section>
    </main>
  );
}
