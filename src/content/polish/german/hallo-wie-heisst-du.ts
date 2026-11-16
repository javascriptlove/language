import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "hallo-wie-heisst-du",
  chapter: 1,
  number: 1,
  title: "Hallo! Wie heißt du?",
  titlePl: "Cześć! Jak masz na imię?",
  intro:
    "Pierwszy dzień w niemieckiej szkole. Anna i Paul poznają się na korytarzu, a Julia z Polski spotyka swoją nową nauczycielkę.",
  blocks: [
    {
      type: "goals",
      items: [
        "przywitać się i pożegnać o różnych porach dnia,",
        "przedstawić się i zapytać kogoś o imię,",
        "zapytać, jak ktoś się czuje, i odpowiedzieć,",
        "wybrać formę du (do kolegi) lub Sie (do dorosłego).",
      ],
    },
    {
      type: "dialogue",
      title: "Auf dem Schulhof",
      titlePl: "Na szkolnym podwórku",
      context: "Na szkolnym podwórku. Anna i Paul chodzą do tej samej szkoły.",
      cast: { Anna: "f", Paul: "m" },
      lines: [
        { speaker: "Anna", text: "Hallo! Ich bin Anna. Wie heißt du?", pl: "Cześć! Jestem Anna. Jak masz na imię?" },
        { speaker: "Paul", text: "Hi! Ich heiße Paul.", pl: "Hej! Mam na imię Paul." },
        { speaker: "Anna", text: "Wie geht's, Paul?", pl: "Jak się masz, Paul?" },
        { speaker: "Paul", text: "Danke, gut. Und dir?", pl: "Dzięki, dobrze. A ty?" },
        { speaker: "Anna", text: "Super! Tschüss, Paul!", pl: "Super! Cześć (na razie), Paul!" },
        { speaker: "Paul", text: "Tschüss, Anna! Bis morgen!", pl: "Cześć, Anna! Do jutra!" },
      ],
    },
    {
      type: "dialogue",
      title: "Im Klassenzimmer",
      titlePl: "W klasie",
      context: "W klasie. Pani Weber to nowa nauczycielka niemieckiego.",
      cast: { "Frau Weber": "f", Julia: "f" },
      lines: [
        { speaker: "Frau Weber", text: "Guten Morgen! Ich bin Frau Weber. Wie heißt du?", pl: "Dzień dobry! Jestem pani Weber. Jak masz na imię?" },
        { speaker: "Julia", text: "Guten Morgen, Frau Weber! Ich heiße Julia.", pl: "Dzień dobry, pani Weber! Mam na imię Julia." },
        { speaker: "Frau Weber", text: "Wie geht es dir, Julia?", pl: "Jak się masz, Julio?" },
        { speaker: "Julia", text: "Sehr gut, danke. Und Ihnen?", pl: "Bardzo dobrze, dziękuję. A pani?" },
        { speaker: "Frau Weber", text: "Auch gut, danke.", pl: "Też dobrze, dziękuję." },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Powitania",
          items: [
            { text: "Hallo!", pl: "Cześć! (na powitanie)" },
            { text: "Guten Morgen!", pl: "Dzień dobry! (rano, do ok. 10–11)" },
            { text: "Guten Tag!", pl: "Dzień dobry! (w ciągu dnia)" },
            { text: "Guten Abend!", pl: "Dobry wieczór!" },
          ],
        },
        {
          title: "Pożegnania",
          items: [
            { text: "Tschüss!", pl: "Cześć! Na razie! (na pożegnanie)" },
            { text: "Auf Wiedersehen!", pl: "Do widzenia!" },
            { text: "Bis morgen!", pl: "Do jutra!" },
            { text: "Gute Nacht!", pl: "Dobranoc!" },
          ],
        },
        {
          title: "Przedstawianie się",
          items: [
            { text: "Wie heißt du?", pl: "Jak masz na imię? (do kolegi)" },
            { text: "Wie heißen Sie?", pl: "Jak się pan/pani nazywa?" },
            { text: "Ich heiße …", pl: "Mam na imię … / Nazywam się …" },
            { text: "Ich bin …", pl: "Jestem …" },
            { text: "Frau Weber", pl: "pani Weber" },
            { text: "Herr Braun", pl: "pan Braun" },
          ],
        },
        {
          title: "Samopoczucie",
          items: [
            { text: "Wie geht's?", pl: "Jak się masz? Co słychać?" },
            { text: "Wie geht es Ihnen?", pl: "Jak się pan/pani miewa?" },
            { text: "sehr gut", pl: "bardzo dobrze" },
            { text: "gut", pl: "dobrze" },
            { text: "es geht", pl: "tak sobie" },
            { text: "schlecht", pl: "źle" },
            { text: "danke", pl: "dziękuję, dzięki" },
            { text: "Und dir?", pl: "A tobie? A ty?" },
            { text: "Und Ihnen?", pl: "A panu/pani?" },
            { text: "auch", pl: "też, także" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "Czasownik heißen – nazywać się",
      paragraphs: [
        "Po niemiecku czasownik zmienia końcówkę w zależności od osoby – tak samo jak po polsku (ja się nazywam, ty się nazywasz).",
        "Uwaga: po niemiecku **zawsze** trzeba powiedzieć, kto wykonuje czynność. Nie mówimy samego „Heiße Paul”, tylko **Ich heiße Paul**.",
      ],
      table: {
        headers: ["osoba", "heißen", "po polsku"],
        rows: [
          { cells: ["ich", "heiße", "ja nazywam się"], speak: "ich heiße" },
          { cells: ["du", "heißt", "ty nazywasz się"], speak: "du heißt" },
          { cells: ["er / sie", "heißt", "on / ona nazywa się"], speak: "er heißt, sie heißt" },
          { cells: ["Sie", "heißen", "pan / pani nazywa się"], speak: "Sie heißen" },
        ],
      },
      examples: [
        { text: "Ich heiße Julia.", pl: "Mam na imię Julia." },
        { text: "Wie heißt du?", pl: "Jak masz na imię?" },
        { text: "Das ist Paul. Er heißt Paul.", pl: "To jest Paul. On ma na imię Paul." },
        { text: "Wie heißen Sie?", pl: "Jak się pan/pani nazywa?" },
      ],
      tip: "W pytaniu czasownik stoi na drugim miejscu, zaraz po słowie pytającym: **Wie heißt du?**",
    },
    {
      type: "grammar",
      title: "du czy Sie?",
      paragraphs: [
        "**du** (ty) mówimy do kolegów, rodziny, dzieci i zwierząt.",
        "**Sie** (pan / pani / państwo) mówimy do dorosłych, których nie znamy dobrze: nauczycieli, sprzedawców, sąsiadów. **Sie** w tym znaczeniu piszemy zawsze wielką literą.",
        "Do nauczyciela mówimy **Herr** + nazwisko (Herr Braun), a do nauczycielki **Frau** + nazwisko (Frau Weber). Nie mówimy samego „Frau!” ani „Lehrerin!”.",
      ],
      table: {
        headers: ["", "do kolegi (du)", "do dorosłego (Sie)"],
        rows: [
          { cells: ["imię", "Wie heißt du?", "Wie heißen Sie?"], speak: "Wie heißt du? Wie heißen Sie?" },
          { cells: ["samopoczucie", "Wie geht's? / Wie geht es dir?", "Wie geht es Ihnen?"], speak: "Wie geht es dir? Wie geht es Ihnen?" },
          { cells: ["„a ty?”", "Und dir?", "Und Ihnen?"], speak: "Und dir? Und Ihnen?" },
          { cells: ["pożegnanie", "Tschüss!", "Auf Wiedersehen!"], speak: "Tschüss! Auf Wiedersehen!" },
        ],
      },
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "Niemiecki czyta się w dużej mierze tak, jak się pisze – trzeba tylko znać kilka połączeń liter. Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "ei", explanation: "czytamy jak polskie **aj**", examples: ["heißen", "nein", "eins"] },
        { sound: "ie", explanation: "czytamy jak długie **i**", examples: ["wie", "Sie", "vier"] },
        { sound: "eu", explanation: "czytamy jak **oj**", examples: ["Deutsch", "neun", "Freund"] },
        { sound: "ß", explanation: "„ostre s”, czytamy jak **ss**", examples: ["heißen", "Grüß Gott", "Straße"] },
        { sound: "ü", explanation: "układamy usta jak do **u**, a mówimy **i**", examples: ["Tschüss", "müde", "Grüß Gott"] },
        { sound: "ch", explanation: "po i, e – miękko, podobnie jak polskie **ś** / **ch’**", examples: ["ich", "nicht", "sprechen"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj wyrażenia i wybierz jego polskie znaczenie.",
        items: [
          { audio: "Guten Abend!", options: ["Dzień dobry!", "Dobry wieczór!", "Dobranoc!"], answer: 1 },
          { audio: "Wie heißt du?", options: ["Jak się masz?", "Skąd jesteś?", "Jak masz na imię?"], answer: 2 },
          { audio: "Bis morgen!", options: ["Do jutra!", "Dzień dobry!", "Do widzenia!"], answer: 0 },
          { audio: "Es geht.", options: ["Bardzo dobrze.", "Tak sobie.", "Źle."], answer: 1 },
          { audio: "Auf Wiedersehen!", options: ["Dobranoc!", "Cześć!", "Do widzenia!"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-1-situations",
        kind: "choice",
        skill: "Słownictwo",
        title: "Co powiesz?",
        instruction: "Przeczytaj sytuację i wybierz właściwe wyrażenie.",
        items: [
          {
            prompt: "Jest 8:00 rano. Wchodzisz do klasy i witasz się z nauczycielką.",
            options: ["Gute Nacht!", "Guten Morgen!", "Guten Abend!"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Idziesz spać. Co mówisz mamie?",
            options: ["Gute Nacht!", "Guten Tag!", "Hallo!"],
            answer: 0,
            speakOptions: true,
          },
          {
            prompt: "Wychodzisz ze szkoły. Żegnasz się z kolegą, którego zobaczysz jutro.",
            options: ["Guten Morgen!", "Bis morgen!", "Wie geht's?"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Jest 19:00. Wchodzisz do sklepu.",
            options: ["Guten Abend!", "Gute Nacht!", "Tschüss!"],
            answer: 0,
            speakOptions: true,
            explanation: "„Gute Nacht” mówimy tylko na pożegnanie, przed snem. Na powitanie wieczorem – „Guten Abend”.",
          },
          {
            prompt: "Kolega pyta: **Wie geht's?** Co odpowiesz?",
            speak: "Wie geht's?",
            options: ["Ich heiße Tom.", "Danke, gut!", "Auf Wiedersehen!"],
            answer: 1,
            speakOptions: true,
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-1-du-sie",
        kind: "choice",
        skill: "Gramatyka",
        title: "du czy Sie?",
        instruction: "Do kogo mówisz? Wybierz właściwe pytanie.",
        items: [
          {
            prompt: "Pytasz nowego kolegę z klasy o imię.",
            options: ["Wie heißt du?", "Wie heißen Sie?"],
            answer: 0,
            speakOptions: true,
          },
          {
            prompt: "Pytasz nowego sąsiada (starszego pana) o nazwisko.",
            options: ["Wie heißt du?", "Wie heißen Sie?"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Pytasz panią Weber, jak się czuje.",
            options: ["Wie geht es dir?", "Wie geht es Ihnen?"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Pytasz młodszego brata kolegi, jak się czuje.",
            options: ["Wie geht es dir?", "Wie geht es Ihnen?"],
            answer: 0,
            speakOptions: true,
          },
          {
            prompt: "Żegnasz się z dyrektorem szkoły.",
            options: ["Tschüss!", "Auf Wiedersehen!"],
            answer: 1,
            speakOptions: true,
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-1-heissen",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij formy czasownika heißen",
        instruction:
          "Wpisz właściwą formę czasownika heißen. Jeśli nie masz na klawiaturze litery ß, możesz napisać ss – zaliczymy, ale przypomnimy o ß.",
        items: [
          { before: "Ich", after: "Paul.", answers: ["heiße"], hint: "ich →" },
          { before: "Wie", after: "du?", answers: ["heißt"], hint: "du →" },
          { before: "Das ist Anna. Sie", after: "Anna.", answers: ["heißt"], hint: "sie (ona) →" },
          { before: "Guten Tag! Wie", after: "Sie?", answers: ["heißen"], hint: "Sie (pan/pani) →" },
          { before: "Das ist Tom. Er", after: "Tom.", answers: ["heißt"], hint: "er →" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["du", "heißt", "Wie"], answer: "Wie heißt du?", pl: "Jak masz na imię?" },
          { words: ["Julia", "heiße", "Ich"], answer: "Ich heiße Julia.", pl: "Mam na imię Julia." },
          { words: ["es", "Ihnen", "Wie", "geht"], answer: "Wie geht es Ihnen?", pl: "Jak się pan/pani miewa?" },
          { words: ["Weber", "Morgen", "Frau", "Guten"], answer: "Guten Morgen, Frau Weber!", pl: "Dzień dobry, pani Weber!" },
        ],
      },
    },
    {
      type: "culture",
      title: "Landeskunde – jak się witają w krajach niemieckojęzycznych?",
      paragraphs: [
        "Po niemiecku mówi się nie tylko w Niemczech, ale też w Austrii i Szwajcarii. „Hallo” zrozumie każdy, ale w różnych regionach usłyszysz inne powitania.",
        "W Bawarii i Austrii ludzie mówią **Grüß Gott!** (dzień dobry) albo **Servus!** (cześć – na powitanie i pożegnanie). W Szwajcarii – **Grüezi!**, a na północy Niemiec – **Moin!** (o każdej porze dnia!).",
        "Przy pierwszym spotkaniu, zwłaszcza z dorosłymi, Niemcy często podają sobie rękę.",
      ],
      examples: [
        { text: "Grüß Gott!", pl: "Dzień dobry! (Bawaria, Austria)" },
        { text: "Servus!", pl: "Cześć! (Bawaria, Austria)" },
        { text: "Grüezi!", pl: "Dzień dobry! (Szwajcaria)" },
        { text: "Moin!", pl: "Cześć! / Dzień dobry! (północne Niemcy)" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Przedstaw się",
        instruction:
          "Napisz krótką wypowiedź (3–4 zdania). Potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "przywitaj się",
          "powiedz, jak masz na imię",
          "zapytaj kolegę o imię",
          "zapytaj, jak się czuje, i pożegnaj się",
        ],
        placeholder: "Hallo! Ich heiße …",
        model: "Hallo! Ich heiße Julia. Wie heißt du? Wie geht's? Tschüss, bis morgen!",
        modelPl: "Cześć! Mam na imię Julia. Jak masz na imię? Jak się masz? Cześć, do jutra!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem przywitać się rano, w ciągu dnia i wieczorem.",
        "Umiem pożegnać się z kolegą i z dorosłym.",
        "Umiem powiedzieć, jak mam na imię, i zapytać o imię.",
        "Umiem zapytać, jak ktoś się czuje, i odpowiedzieć.",
        "Wiem, kiedy mówić du, a kiedy Sie.",
      ],
    },
  ],
};
