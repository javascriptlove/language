"use client";

import type { Block, Phrase } from "@/content/types";
import { useLesson } from "../LessonContext";
import { RichText } from "../RichText";
import { Section } from "../Section";
import { SpeakButton } from "../SpeakButton";

type Of<T extends Block["type"]> = Extract<Block, { type: T }>;

export function Goals({ items }: Omit<Of<"goals">, "type">) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-(--accent)/40 bg-(--accent-soft) p-5">
      <h2 className="mb-2 font-display text-lg font-bold text-(--accent-ink)">🎯 Na tej lekcji nauczysz się:</h2>
      <ul className="list-inside list-disc space-y-1 text-zinc-800">
        {items.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

function PhraseList({ items }: { items: Phrase[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((e) => (
        <li key={e.text} className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 ring-1 ring-zinc-200">
          <SpeakButton text={e.text} />
          <div>
            <div className="font-target font-semibold">{e.text}</div>
            <div className="text-sm text-zinc-500">{e.pl}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Grammar({ title, paragraphs, table, examples, tip }: Omit<Of<"grammar">, "type">) {
  return (
    <Section label="Gramatyka" tone="grammar" title={title}>
      <div className="space-y-3 leading-relaxed text-zinc-800">
        {paragraphs.map((p) => (
          <p key={p}>
            <RichText text={p} />
          </p>
        ))}
      </div>
      {table && (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse overflow-hidden rounded-xl text-left ring-1 ring-sky-200">
            <thead className="bg-sky-50 text-sm text-sky-900">
              <tr>
                {table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-2 font-bold">
                    {h}
                  </th>
                ))}
                <th className="w-12 px-2" aria-label="Posłuchaj" />
              </tr>
            </thead>
            <tbody className="bg-white">
              {table.rows.map((r, i) => (
                <tr key={i} className="border-t border-sky-100">
                  {r.cells.map((c, j) => (
                    <td key={j} className={`px-4 py-2 ${j === 0 ? "text-zinc-500" : j === 1 ? "font-target font-semibold" : ""}`}>
                      {c}
                    </td>
                  ))}
                  <td className="px-2 py-1">{r.speak && <SpeakButton text={r.speak} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {examples && (
        <div className="mt-5">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-sky-800">Przykłady</h3>
          <PhraseList items={examples} />
        </div>
      )}
      {tip && (
        <p className="mt-5 rounded-lg border-l-4 border-sky-500 bg-sky-50 px-4 py-3 text-sm text-sky-950">
          📌 <RichText text={tip} />
        </p>
      )}
    </Section>
  );
}

export function Pronunciation({ title, intro, items }: Omit<Of<"pronunciation">, "type">) {
  return (
    <Section label="Wymowa" tone="sound" title={title}>
      <p className="mb-5 text-zinc-700">{intro}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.sound} className="rounded-xl bg-violet-50 p-4 ring-1 ring-violet-100">
            <div className="mb-2 flex items-baseline gap-3">
              <span className="font-target text-3xl font-black text-violet-700">{it.sound}</span>
              <span className="text-sm text-zinc-700">
                <RichText text={it.explanation} />
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {it.examples.map((ex) => (
                <span key={ex} className="inline-flex items-center gap-1.5 rounded-full bg-white py-1 pl-1 pr-3 ring-1 ring-violet-200">
                  <SpeakButton text={ex} />
                  <span className="font-target font-semibold">{ex}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Culture({ title, paragraphs, examples }: Omit<Of<"culture">, "type">) {
  return (
    <Section label="Ciekawostka" tone="culture" title={title}>
      <div className="space-y-3 leading-relaxed text-zinc-800">
        {paragraphs.map((p) => (
          <p key={p}>
            <RichText text={p} />
          </p>
        ))}
      </div>
      {examples && (
        <div className="mt-5">
          <PhraseList items={examples} />
        </div>
      )}
    </Section>
  );
}

export function SelfCheck({ items }: Omit<Of<"selfcheck">, "type">) {
  const { progress, toggleSelfcheck } = useLesson();
  const done = items.filter((_, i) => progress.selfcheck[i]).length;
  return (
    <Section
      label="Sprawdź się"
      tone="check"
      title="Co już umiem?"
      badge={<span className="pb-1 text-sm font-semibold text-zinc-500">{done}/{items.length}</span>}
    >
      <p className="mb-4 text-zinc-700">
        Zaznacz to, co naprawdę potrafisz. Jeśli czegoś nie jesteś pewien/pewna – wróć do odpowiedniej części lekcji.
      </p>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={it}>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-amber-50 px-4 py-3 ring-1 ring-amber-200 hover:bg-amber-100">
              <input
                type="checkbox"
                checked={!!progress.selfcheck[i]}
                onChange={() => toggleSelfcheck(i)}
                className="h-5 w-5 accent-amber-500"
              />
              <span>{it}</span>
            </label>
          </li>
        ))}
      </ul>
    </Section>
  );
}
