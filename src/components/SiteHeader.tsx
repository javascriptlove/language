"use client";

import Link from "next/link";
import { useSpeech } from "@/lib/speech";

export function SiteHeader() {
  const { rate, setRate, supported } = useSpeech();
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-[#fbf8f1]/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm text-white">JS</span>
          <span>
            Językowy <span className="text-rose-600">Sprint</span>
          </span>
        </Link>
        {supported && (
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="hidden text-zinc-500 sm:inline">Tempo lektora:</span>
            <div className="flex rounded-full bg-zinc-200/70 p-0.5">
              {(["normal", "slow"] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRate(r)}
                  className={`rounded-full px-3 py-1 font-semibold transition ${
                    rate === r ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {r === "normal" ? "Normalne" : "🐢 Wolne"}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
