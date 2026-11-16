/** A phrase in the target language with its Polish meaning. */
export type Phrase = {
  text: string;
  pl: string;
  note?: string;
};

export type Gender = "f" | "m";

export type DialogueLine = {
  speaker: string;
  text: string;
  pl: string;
};

export type Block =
  | { type: "goals"; items: string[] }
  | {
      type: "dialogue";
      /** Target-language title (read aloud), with its Polish translation. */
      title: string;
      titlePl: string;
      context: string;
      /** Every speaker's gender, so they are read with a matching voice. */
      cast: Record<string, Gender>;
      lines: DialogueLine[];
    }
  | {
      type: "vocab";
      title: string;
      groups: { title: string; items: Phrase[] }[];
    }
  | {
      type: "grammar";
      title: string;
      /** Polish explanation. Supports **bold**. */
      paragraphs: string[];
      table?: {
        headers: string[];
        /** `speak` is the target-language text read aloud for the row. */
        rows: { cells: string[]; speak?: string }[];
      };
      examples?: Phrase[];
      tip?: string;
    }
  | {
      type: "pronunciation";
      title: string;
      intro: string;
      items: { sound: string; explanation: string; examples: string[] }[];
    }
  | {
      type: "culture";
      title: string;
      paragraphs: string[];
      examples?: Phrase[];
    }
  | {
      /** A short text to read (and listen to), sentence by sentence. */
      type: "reading";
      /** Target-language title (read aloud), with its Polish translation. */
      title: string;
      titlePl: string;
      /** Polish instruction shown above the text. */
      intro: string;
      sentences: Phrase[];
    }
  | { type: "exercise"; exercise: Exercise }
  | { type: "selfcheck"; items: string[] };

export type ExerciseSkill =
  | "Słuchanie"
  | "Czytanie"
  | "Pisanie"
  | "Mówienie"
  | "Gramatyka"
  | "Słownictwo";

type ExerciseBase = {
  id: string;
  title: string;
  instruction: string;
  skill: ExerciseSkill;
};

export type ChoiceItem = {
  /** Polish or target-language prompt. Supports **bold**. */
  prompt: string;
  /** Optional target-language text that can be played for the prompt. */
  speak?: string;
  options: string[];
  answer: number;
  /** Shown after checking, in Polish. */
  explanation?: string;
  /** If true, options are target-language text and get a speaker button after checking. */
  speakOptions?: boolean;
};

export type FillItem = {
  before: string;
  after: string;
  /** Accepted answers. The first one is shown as the correct answer. */
  answers: string[];
  hint?: string;
};

export type OrderItem = {
  /** Words in a fixed, scrambled order (kept static to avoid hydration mismatches). */
  words: string[];
  answer: string;
  pl: string;
};

export type Exercise = ExerciseBase &
  (
    | { kind: "choice"; items: ChoiceItem[] }
    | {
        kind: "listen";
        items: { audio: string; options: string[]; answer: number }[];
      }
    | { kind: "fill"; items: FillItem[] }
    | { kind: "order"; items: OrderItem[] }
    | {
        kind: "write";
        checklist: string[];
        placeholder: string;
        model: string;
        modelPl: string;
      }
  );

export type Lesson = {
  slug: string;
  chapter: number;
  number: number;
  /** Title in the target language, e.g. "Hallo! Wie heißt du?" */
  title: string;
  titlePl: string;
  intro: string;
  blocks: Block[];
};

export type ChapterOutline = {
  number: number;
  title: string;
  titlePl: string;
  topics: string[];
  lessons: { slug: string; title: string }[];
};

export type Grade = {
  slug: "grade-7" | "grade-8";
  name: string;
  level: string;
  description: string;
  chapters: ChapterOutline[];
};

export type Course = {
  slug: string;
  /** BCP-47 language tag used for speech synthesis. */
  ttsLang: string;
  namePl: string;
  nameNative: string;
  greeting: string;
  tagline: string;
  /** Round flag icon in `public/flags/<flag>.svg` (circle-flags code, e.g. "de", "es-ct"). */
  flag: string;
  accent: string;
  accentSoft: string;
  accentInk: string;
  grades: Grade[];
};

export type SourceLanguage = {
  /** URL segment, e.g. "polish". */
  slug: string;
  /** BCP-47 tag of the explanation language, e.g. "pl". */
  htmlLang: string;
  /** Name in its own language, e.g. "Polski". */
  name: string;
  /** "I speak …" in that language, used as a heading on the pair picker. */
  iSpeak: string;
  /** Round flag icon code, see `Course.flag`. */
  flag: string;
  courses: Course[];
  /** Written lessons, keyed by `${course}/${grade}/${lesson}`. */
  lessons: Record<string, Lesson>;
};
