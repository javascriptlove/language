export type Verdict = "correct" | "almost" | "wrong";

/** Lowercase, drop punctuation and extra spaces. */
export function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[¿¡?!.,;:"„”'’…\-–]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Also forgive missing accents / umlauts / ß (common when typing on a Polish keyboard). */
function loose(s: string) {
  return normalize(s)
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function checkAnswer(input: string, accepted: string[]): Verdict {
  if (accepted.some((a) => normalize(a) === normalize(input))) return "correct";
  if (accepted.some((a) => loose(a) === loose(input))) return "almost";
  return "wrong";
}
