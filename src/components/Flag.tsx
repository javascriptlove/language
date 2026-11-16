import type { CSSProperties } from "react";
import type { Course } from "@/content/types";

/** Round flag icon (self-hosted circle-flags SVG from `public/flags`). Decorative – the name is always next to it. */
export function Flag({ code, className = "h-8 w-8" }: { code: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny static SVG, nothing for next/image to optimise
    <img src={`/flags/${code}.svg`} alt="" aria-hidden className={`inline-block shrink-0 rounded-full shadow ring-1 ring-black/10 ${className}`} />
  );
}

/** CSS variables that theme a page in the course colours. */
export function courseStyle(course: Course): CSSProperties {
  return {
    "--accent": course.accent,
    "--accent-soft": course.accentSoft,
    "--accent-ink": course.accentInk,
  } as CSSProperties;
}
