import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "das-ist-meine-familie",
  chapter: 2,
  number: 1,
  title: "Das ist meine Familie",
  titlePl: "To jest moja rodzina",
  intro:
    "Julia przynosi do szkoły zdjęcie swojej rodziny. Anna, Paul i Lukas chcą wiedzieć, kto jest kim. Poznaj niemieckie nazwy członków rodziny i naucz się mówić „mój” i „twój”.",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać członków rodziny po niemiecku,",
        "przedstawić rodzinę: Das ist … / Das sind …,",
        "używać mein / meine (mój) i dein / deine (twój),",
        "zapamiętywać rzeczowniki razem z rodzajnikiem der / die / das.",
      ],
    },
    {
      type: "dialogue",
      title: "Das Familienfoto",
      titlePl: "Zdjęcie rodzinne",
      context: "Przerwa. Julia pokazuje Annie zdjęcie w telefonie.",
      cast: { Anna: "f", Julia: "f" },
      lines: [
        { speaker: "Anna", text: "Julia, was ist das?", pl: "Julio, co to jest?" },
        { speaker: "Julia", text: "Das ist meine Familie. Schau mal!", pl: "To jest moja rodzina. Popatrz!" },
        { speaker: "Anna", text: "Wer ist das?", pl: "Kto to jest?" },
        {
          speaker: "Julia",
          text: "Das ist meine Mutter. Sie heißt Eva. Und das ist mein Vater, Thomas.",
          pl: "To jest moja mama. Ma na imię Eva. A to jest mój tata, Thomas.",
        },
        { speaker: "Anna", text: "Und wer ist der Junge?", pl: "A kim jest ten chłopiec?" },
        { speaker: "Julia", text: "Das ist mein Bruder Jan. Er ist acht.", pl: "To jest mój brat Jan. Ma osiem lat." },
        { speaker: "Anna", text: "Und der Hund? Ist das dein Hund?", pl: "A pies? Czy to twój pies?" },
        { speaker: "Julia", text: "Ja, das ist mein Hund Bruno!", pl: "Tak, to jest mój pies Bruno!" },
      ],
    },
    {
      type: "dialogue",
      title: "Oma, Opa, Tante, Onkel …",
      titlePl: "Babcia, dziadek, ciocia, wujek…",
      context: "Paul i Lukas też chcą zobaczyć zdjęcia. Na kolejnym jest cała rodzina Julii.",
      cast: { Paul: "m", Julia: "f", Lukas: "m" },
      lines: [
        { speaker: "Paul", text: "Sind das deine Großeltern?", pl: "Czy to są twoi dziadkowie?" },
        {
          speaker: "Julia",
          text: "Ja, das sind meine Oma und mein Opa. Sie wohnen in Krakau.",
          pl: "Tak, to są moja babcia i mój dziadek. Mieszkają w Krakowie.",
        },
        { speaker: "Lukas", text: "Und wer ist die Frau hier?", pl: "A kim jest ta pani tutaj?" },
        {
          speaker: "Julia",
          text: "Das ist meine Tante Sandra. Und das ist mein Onkel Peter.",
          pl: "To jest moja ciocia Sandra. A to jest mój wujek Peter.",
        },
        { speaker: "Paul", text: "Und die Kinder?", pl: "A dzieci?" },
        {
          speaker: "Julia",
          text: "Das sind meine Cousine Lena und mein Cousin Felix.",
          pl: "To są moja kuzynka Lena i mój kuzyn Felix.",
        },
        { speaker: "Lukas", text: "Deine Familie ist groß!", pl: "Twoja rodzina jest duża!" },
        { speaker: "Julia", text: "Ja, und sehr nett!", pl: "Tak, i bardzo miła!" },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Rodzice i dzieci",
          items: [
            { text: "die Familie", pl: "rodzina" },
            { text: "die Eltern", pl: "rodzice", note: "tylko liczba mnoga" },
            { text: "der Vater", pl: "ojciec" },
            { text: "die Mutter", pl: "matka" },
            { text: "der Papa", pl: "tata" },
            { text: "die Mama", pl: "mama" },
            { text: "das Kind / die Kinder", pl: "dziecko / dzieci" },
            { text: "der Sohn", pl: "syn" },
            { text: "die Tochter", pl: "córka" },
          ],
        },
        {
          title: "Rodzeństwo",
          items: [
            { text: "die Geschwister", pl: "rodzeństwo", note: "tylko liczba mnoga" },
            { text: "der Bruder", pl: "brat" },
            { text: "die Schwester", pl: "siostra" },
          ],
        },
        {
          title: "Dalsza rodzina",
          items: [
            { text: "die Großeltern", pl: "dziadkowie", note: "tylko liczba mnoga" },
            { text: "die Oma / die Großmutter", pl: "babcia / babka" },
            { text: "der Opa / der Großvater", pl: "dziadek" },
            { text: "die Tante", pl: "ciocia" },
            { text: "der Onkel", pl: "wujek" },
            { text: "der Cousin", pl: "kuzyn", note: "słowo z francuskiego, czytaj mniej więcej „kuzę”" },
            { text: "die Cousine", pl: "kuzynka", note: "czytaj „kuzine”" },
          ],
        },
        {
          title: "Inne przydatne słowa",
          items: [
            { text: "der Junge", pl: "chłopiec" },
            { text: "das Mädchen", pl: "dziewczynka, dziewczyna" },
            { text: "der Hund", pl: "pies" },
            { text: "die Katze", pl: "kot" },
            { text: "Wer ist das?", pl: "Kto to jest?" },
            { text: "Was ist das?", pl: "Co to jest?" },
            { text: "Schau mal!", pl: "Popatrz! Zobacz!" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "mein / meine, dein / deine – mój, twój",
      paragraphs: [
        "Niemieckie rzeczowniki mają rodzaj, tak jak polskie: męski (**der**), żeński (**die**) i nijaki (**das**). W liczbie mnogiej zawsze jest **die**. Dlatego ucz się słówek **razem z rodzajnikiem**: der Vater, die Mutter, das Kind.",
        "Od rodzaju zależy forma słowa „mój”: przy **der** i **das** mówimy **mein**, a przy **die** i w liczbie mnogiej – **meine**. Tak samo działa **dein / deine** (twój).",
        "Uwaga: rodzaj nie zawsze jest taki jak po polsku! **das Mädchen** (dziewczynka) jest nijakie, a **die Eltern**, **die Geschwister** i **die Großeltern** występują tylko w liczbie mnogiej.",
      ],
      table: {
        headers: ["rodzaj", "mój", "twój", "przykład"],
        rows: [
          { cells: ["der (męski)", "mein", "dein", "mein Vater, dein Bruder"], speak: "mein Vater, dein Bruder" },
          { cells: ["die (żeński)", "meine", "deine", "meine Mutter, deine Schwester"], speak: "meine Mutter, deine Schwester" },
          { cells: ["das (nijaki)", "mein", "dein", "mein Kind, dein Foto"], speak: "mein Kind, dein Foto" },
          { cells: ["die (l. mnoga)", "meine", "deine", "meine Eltern, deine Großeltern"], speak: "meine Eltern, deine Großeltern" },
        ],
      },
      examples: [
        { text: "Das ist mein Opa.", pl: "To jest mój dziadek." },
        { text: "Das ist meine Oma.", pl: "To jest moja babcia." },
        { text: "Ist das dein Hund?", pl: "Czy to twój pies?" },
        { text: "Sind das deine Eltern?", pl: "Czy to twoi rodzice?" },
      ],
      tip: "Prosta zasada: jeśli rzeczownik ma **die** (rodzaj żeński albo liczba mnoga), dodaj **-e**: meine, deine.",
    },
    {
      type: "grammar",
      title: "Das ist … / Das sind … – to jest, to są",
      paragraphs: [
        "Gdy pokazujesz **jedną** osobę, mówisz **Das ist …** (to jest). Gdy pokazujesz **kilka** osób – **Das sind …** (to są). Słowo **das** się przy tym nie zmienia.",
        "Pytanie o osobę zaczynamy od **Wer?** (kto?), a o rzecz – od **Was?** (co?). Pytanie „tak/nie” zaczynamy od czasownika: **Ist das …? / Sind das …?**",
      ],
      table: {
        headers: ["", "po niemiecku", "po polsku"],
        rows: [
          { cells: ["jedna osoba", "Das ist meine Tante.", "To jest moja ciocia."], speak: "Das ist meine Tante." },
          { cells: ["kilka osób", "Das sind meine Eltern.", "To są moi rodzice."], speak: "Das sind meine Eltern." },
          { cells: ["pytanie", "Wer ist das?", "Kto to jest?"], speak: "Wer ist das?" },
          { cells: ["pytanie tak/nie", "Ist das deine Schwester?", "Czy to twoja siostra?"], speak: "Ist das deine Schwester?" },
        ],
      },
      examples: [
        { text: "Ist das deine Schwester? – Nein, das ist meine Cousine.", pl: "Czy to twoja siostra? – Nie, to moja kuzynka." },
        { text: "Das sind mein Onkel und meine Tante.", pl: "To są mój wujek i moja ciocia." },
      ],
      tip: "Dwie osoby połączone przez **und** to już liczba mnoga: Das **sind** meine Oma **und** mein Opa.",
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "Nazwy członków rodziny kryją kilka pułapek. Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "-er", explanation: "na końcu słowa brzmi prawie jak krótkie **a**", examples: ["Vater", "Mutter", "Bruder", "Schwester"] },
        { sound: "-e", explanation: "na końcu słowa **wymawiamy** – krótko i słabo, jak polskie **e**", examples: ["Tante", "Katze", "meine"] },
        { sound: "v", explanation: "czytamy jak **f**", examples: ["Vater", "vier"] },
        { sound: "sch", explanation: "czytamy jak polskie **sz**", examples: ["Schwester", "Geschwister", "Schau mal!"] },
        { sound: "ch", explanation: "po a, o, u – twardo, jak polskie **ch**", examples: ["Tochter", "acht", "auch"] },
        { sound: "Familie", explanation: "końcówkę **-ie** czytamy tu jako dwie sylaby: Fa-mi-li-e", examples: ["Familie"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-2-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj słowa i wybierz jego polskie znaczenie.",
        items: [
          { audio: "die Schwester", options: ["brat", "siostra", "kuzynka"], answer: 1 },
          { audio: "die Großeltern", options: ["rodzice", "rodzeństwo", "dziadkowie"], answer: 2 },
          { audio: "der Onkel", options: ["wujek", "ciocia", "dziadek"], answer: 0 },
          { audio: "die Geschwister", options: ["kuzyni", "rodzeństwo", "dzieci"], answer: 1 },
          { audio: "die Tochter", options: ["córka", "ciocia", "matka"], answer: 0 },
          { audio: "die Eltern", options: ["dziadkowie", "dzieci", "rodzice"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-2-1-who",
        kind: "choice",
        skill: "Słownictwo",
        title: "Kto to jest?",
        instruction: "Pomyśl o swojej rodzinie i wybierz właściwe słowo.",
        items: [
          { prompt: "Mama twojej mamy to twoja …", options: ["Tante", "Oma", "Cousine"], answer: 1, speakOptions: true },
          { prompt: "Brat twojego taty to twój …", options: ["Onkel", "Opa", "Bruder"], answer: 0, speakOptions: true },
          { prompt: "Córka twojej cioci to twoja …", options: ["Schwester", "Tochter", "Cousine"], answer: 2, speakOptions: true },
          { prompt: "Mama i tata razem to …", options: ["die Geschwister", "die Eltern", "die Großeltern"], answer: 1, speakOptions: true },
          { prompt: "Brat i siostra razem to …", options: ["die Geschwister", "die Eltern", "die Kinder"], answer: 0, speakOptions: true, explanation: "Rodzeństwo to die Geschwister. Die Kinder to po prostu „dzieci”." },
          { prompt: "Twoi rodzice mają syna i córkę. Córka to …", options: ["die Tante", "der Sohn", "die Tochter"], answer: 2, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-2-1-article",
        kind: "choice",
        skill: "Gramatyka",
        title: "der, die czy das?",
        instruction: "Wybierz właściwy rodzajnik. Jeśli nie pamiętasz, zajrzyj do słowniczka.",
        items: [
          { prompt: "**Vater**", options: ["der", "die", "das"], answer: 0 },
          { prompt: "**Schwester**", options: ["der", "die", "das"], answer: 1 },
          { prompt: "**Kind**", options: ["der", "die", "das"], answer: 2 },
          { prompt: "**Mädchen**", options: ["der", "die", "das"], answer: 2, explanation: "Das Mädchen jest nijakie – choć chodzi o dziewczynkę. Trzeba to po prostu zapamiętać." },
          { prompt: "**Eltern**", options: ["der", "die", "das"], answer: 1, explanation: "Eltern to liczba mnoga, a w liczbie mnogiej zawsze jest die." },
          { prompt: "**Hund**", options: ["der", "die", "das"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-2-1-mein",
        kind: "fill",
        skill: "Gramatyka",
        title: "mein czy meine? dein czy deine?",
        instruction: "Wpisz właściwą formę. Podpowiedź mówi, czy chodzi o „mój”, czy o „twój”.",
        items: [
          { before: "Das ist", after: "Mutter.", answers: ["meine"], hint: "moja" },
          { before: "Das ist", after: "Bruder.", answers: ["mein"], hint: "mój" },
          { before: "Das sind", after: "Eltern.", answers: ["meine"], hint: "moi" },
          { before: "Ist das", after: "Schwester?", answers: ["deine"], hint: "twoja" },
          { before: "Ist das", after: "Hund?", answers: ["dein"], hint: "twój" },
          { before: "Sind das", after: "Großeltern?", answers: ["deine"], hint: "twoi" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-2-1-ist-sind",
        kind: "choice",
        skill: "Gramatyka",
        title: "ist czy sind?",
        instruction: "Jedna osoba czy kilka? Wybierz ist albo sind.",
        items: [
          { prompt: "Das ___ meine Oma.", options: ["ist", "sind"], answer: 0 },
          { prompt: "Das ___ meine Großeltern.", options: ["ist", "sind"], answer: 1 },
          { prompt: "Das ___ mein Onkel und meine Tante.", options: ["ist", "sind"], answer: 1, explanation: "Dwie osoby (Onkel und Tante) – to liczba mnoga, więc sind." },
          { prompt: "Wer ___ das?", options: ["ist", "sind"], answer: 0 },
          { prompt: "___ das deine Geschwister?", options: ["Ist", "Sind"], answer: 1 },
          { prompt: "Das ___ mein Cousin Felix.", options: ["ist", "sind"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-2-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["meine", "Familie", "ist", "Das"], answer: "Das ist meine Familie.", pl: "To jest moja rodzina." },
          { words: ["das", "ist", "Wer"], answer: "Wer ist das?", pl: "Kto to jest?" },
          { words: ["Eltern", "sind", "meine", "Das"], answer: "Das sind meine Eltern.", pl: "To są moi rodzice." },
          { words: ["Bruder", "das", "dein", "Ist"], answer: "Ist das dein Bruder?", pl: "Czy to twój brat?" },
        ],
      },
    },
    {
      type: "culture",
      title: "Landeskunde – Mama, Mutti, Oma …",
      paragraphs: [
        "Niemieckie dzieci mówią do rodziców najczęściej **Mama** i **Papa**. Formy **Mutti** i **Vati** brzmią trochę staroświecko – usłyszysz je raczej u starszych osób. O dziadkach mówi się **Oma** i **Opa**, a **Großmutter** i **Großvater** brzmią bardziej oficjalnie.",
        "Po polsku mówimy pan Kowalski, ale pani Kowalska. Po niemiecku nazwisko się **nie zmienia**: Herr Weber i Frau Weber. Całą rodzinę nazywa się **Familie Weber** albo potocznie **die Webers**.",
        "Rodziny bywają różne. Słowo **die Patchworkfamilie** oznacza rodzinę, w której mieszkają razem dzieci z różnych związków rodziców.",
      ],
      examples: [
        { text: "Mama, Papa", pl: "mama, tata" },
        { text: "Mutti, Vati", pl: "mamusia, tatuś (trochę staroświecko)" },
        { text: "Herr Weber, Frau Weber", pl: "pan Weber, pani Weber" },
        { text: "Das ist Familie Weber.", pl: "To jest rodzina Weberów." },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-2-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Pokaż swoją rodzinę",
        instruction:
          "Wyobraź sobie, że pokazujesz koledze z Niemiec zdjęcie swojej rodziny. Napisz 4–6 zdań, posłuchaj ich i przeczytaj na głos. Możesz też wymyślić rodzinę!",
        checklist: [
          "zacznij od: Das ist meine Familie.",
          "przedstaw co najmniej 3 osoby (Das ist mein … / Das ist meine …)",
          "użyj raz Das sind …",
          "podaj imię co najmniej jednej osoby (Er heißt … / Sie heißt …)",
        ],
        placeholder: "Das ist meine Familie. Das ist …",
        model:
          "Das ist meine Familie. Das ist meine Mutter. Sie heißt Eva. Das ist mein Vater, Thomas. Das ist mein Bruder Jan. Und das sind meine Oma und mein Opa.",
        modelPl:
          "To jest moja rodzina. To jest moja mama. Ma na imię Eva. To jest mój tata, Thomas. To jest mój brat Jan. A to są moja babcia i mój dziadek.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem nazwać po niemiecku co najmniej 10 członków rodziny.",
        "Znam rodzajniki: der Vater, die Mutter, das Kind, die Eltern.",
        "Wiem, kiedy mówić mein / dein, a kiedy meine / deine.",
        "Umiem przedstawić rodzinę: Das ist … / Das sind …",
        "Umiem zapytać: Wer ist das? Ist das dein …?",
      ],
    },
  ],
};
