import type { Grade } from "@/content/types";

/**
 * "Poziom A1 ⓘ" – the ⓘ opens a small explainer about CEFR levels and how they map to Polish school years.
 * Uses the native Popover API (light-dismiss, Esc, focus handling) so it needs no client JS.
 */
export function LevelHint({ grade, className = "" }: { grade: Pick<Grade, "slug" | "name" | "level">; className?: string }) {
  const id = `level-hint-${grade.slug}`;
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      Poziom {grade.level}
      <button
        type="button"
        popoverTarget={id}
        aria-label={`Co oznacza poziom ${grade.level}?`}
        className="inline-flex h-6 w-6 cursor-help items-center justify-center rounded-full bg-(--accent,#18181b) font-sans text-sm font-bold leading-none text-white opacity-80 transition hover:opacity-100"
      >
        i
      </button>
      <span
        id={id}
        popover="auto"
        className="m-auto w-[min(28rem,calc(100vw-2rem))] rounded-2xl border border-zinc-200 bg-white p-6 text-left text-base font-normal normal-case tracking-normal text-zinc-700 shadow-2xl backdrop:bg-black/30"
      >
        <span className="mb-3 block font-display text-xl font-extrabold text-zinc-900">Co oznacza poziom {grade.level}?</span>
        <span className="mb-3 block">
          <strong>A1, A2, B1…</strong> to poziomy z europejskiej skali biegłości językowej (CEFR, po polsku ESOKJ).
          Tej samej skali używają szkoły, certyfikaty i kursy w całej Europie. <strong>A1</strong> to pierwszy poziom –
          start od zera.
        </span>
        <span className="mb-1 block">
          <strong>A1</strong> – przedstawiasz się, mówisz o rodzinie, szkole i swoim dniu prostymi zdaniami, rozumiesz
          kogoś, kto mówi wolno i wyraźnie.
        </span>
        <span className="mb-3 block">
          <strong>A2</strong> – radzisz sobie w prostych codziennych sytuacjach: zakupy, pytanie o drogę, opowiadanie o
          tym, co się wydarzyło.
        </span>
        <span className="block rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900 ring-1 ring-amber-200">
          🏫 <strong>A szkoła?</strong> Drugi język obcy zaczyna się zwykle w klasie 7, a po klasie 8 celem jest mniej
          więcej poziom A1.
        </span>
      </span>
    </span>
  );
}
