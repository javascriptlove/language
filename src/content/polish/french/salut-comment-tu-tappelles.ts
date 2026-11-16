import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "salut-comment-tu-tappelles",
  chapter: 1,
  number: 1,
  title: "Salut ! Comment tu t'appelles ?",
  titlePl: "Cześć! Jak masz na imię?",
  intro:
    "Pierwszy dzień w paryskim collège. Léa i Hugo poznają się na szkolnym dziedzińcu, a Carla z Polski poznaje swoją nową nauczycielkę.",
  blocks: [
    {
      type: "goals",
      items: [
        "przywitać się i pożegnać o różnych porach dnia,",
        "przedstawić się i zapytać kogoś o imię,",
        "zapytać, jak ktoś się czuje, i odpowiedzieć,",
        "wybrać formę tu (do kolegi) lub vous (do dorosłego).",
      ],
    },
    {
      type: "dialogue",
      title: "Dans la cour",
      titlePl: "Na szkolnym podwórku",
      context: "Na szkolnym dziedzińcu. Léa i Hugo chodzą do tej samej szkoły.",
      cast: { "Léa": "f", Hugo: "m" },
      lines: [
        { speaker: "Léa", text: "Salut ! Je suis Léa. Comment tu t'appelles ?", pl: "Cześć! Jestem Léa. Jak masz na imię?" },
        { speaker: "Hugo", text: "Salut ! Je m'appelle Hugo.", pl: "Cześć! Mam na imię Hugo." },
        { speaker: "Léa", text: "Ça va, Hugo ?", pl: "Jak leci, Hugo?" },
        { speaker: "Hugo", text: "Ça va bien, merci. Et toi ?", pl: "Dobrze, dzięki. A ty?" },
        { speaker: "Léa", text: "Très bien ! Salut, Hugo, à demain !", pl: "Bardzo dobrze! Cześć, Hugo, do jutra!" },
        { speaker: "Hugo", text: "À demain, Léa !", pl: "Do jutra, Léa!" },
      ],
    },
    {
      type: "dialogue",
      title: "En classe",
      titlePl: "W klasie",
      context: "W klasie. Pani Martin to nowa nauczycielka francuskiego.",
      cast: { "Madame Martin": "f", Carla: "f" },
      lines: [
        {
          speaker: "Madame Martin",
          text: "Bonjour ! Je suis Madame Martin, votre professeure de français. Comment tu t'appelles ?",
          pl: "Dzień dobry! Jestem pani Martin, wasza nauczycielka francuskiego. Jak masz na imię?",
        },
        { speaker: "Carla", text: "Bonjour, madame ! Je m'appelle Carla.", pl: "Dzień dobry pani! Mam na imię Carla." },
        { speaker: "Madame Martin", text: "Enchantée, Carla ! Comment vas-tu ?", pl: "Miło mi, Carlo! Jak się masz?" },
        { speaker: "Carla", text: "Très bien, merci. Et vous ?", pl: "Bardzo dobrze, dziękuję. A pani?" },
        { speaker: "Madame Martin", text: "Bien, merci.", pl: "Dobrze, dziękuję." },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Powitania",
          items: [
            { text: "Salut !", pl: "Cześć! (na powitanie i pożegnanie)" },
            { text: "Coucou !", pl: "Hej! (bardzo potocznie)" },
            { text: "Bonjour !", pl: "Dzień dobry! (rano i w ciągu dnia)" },
            { text: "Bonsoir !", pl: "Dobry wieczór! (od ok. 18:00)" },
          ],
        },
        {
          title: "Pożegnania",
          items: [
            { text: "Au revoir !", pl: "Do widzenia!" },
            { text: "À demain !", pl: "Do jutra!" },
            { text: "À bientôt !", pl: "Do zobaczenia wkrótce!" },
            { text: "Bonne nuit !", pl: "Dobranoc!" },
          ],
        },
        {
          title: "Przedstawianie się",
          items: [
            { text: "Comment tu t'appelles ?", pl: "Jak masz na imię? (do kolegi)" },
            { text: "Comment vous vous appelez ?", pl: "Jak się pan/pani nazywa?" },
            { text: "Je m'appelle …", pl: "Mam na imię … / Nazywam się …" },
            { text: "Je suis …", pl: "Jestem …" },
            { text: "Enchanté.", pl: "Miło mi. (mówi chłopak / mężczyzna)" },
            { text: "Enchantée.", pl: "Miło mi. (mówi dziewczyna / kobieta)" },
            { text: "madame / monsieur", pl: "pani / pan" },
          ],
        },
        {
          title: "Samopoczucie",
          items: [
            { text: "Ça va ?", pl: "Jak leci? Co słychać?" },
            { text: "Comment vas-tu ?", pl: "Jak się masz? (do kolegi)" },
            { text: "Comment allez-vous ?", pl: "Jak się pan/pani miewa?" },
            { text: "très bien", pl: "bardzo dobrze" },
            { text: "bien", pl: "dobrze" },
            { text: "pas mal", pl: "nieźle" },
            { text: "comme ci, comme ça", pl: "tak sobie" },
            { text: "mal", pl: "źle" },
            { text: "merci", pl: "dziękuję, dzięki" },
            { text: "Et toi ?", pl: "A ty?" },
            { text: "Et vous ?", pl: "A pan/pani?" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "Czasownik s'appeler – nazywać się",
      paragraphs: [
        "**S'appeler** to czasownik zwrotny – tak jak polskie „nazywać **się**”. Słówko „się” zmienia się razem z osobą: je **m'**appelle, tu **t'**appelles, il **s'**appelle.",
        "Uwaga: po francusku – inaczej niż po polsku – **zawsze** mówimy, kto wykonuje czynność: **je** m'appelle, **tu** t'appelles. Nie można opuścić „je” ani „tu”.",
        "Przed samogłoską **me, te, se** tracą „e” i dostają apostrof: me + appelle = **m'appelle**.",
      ],
      table: {
        headers: ["osoba", "s'appeler", "po polsku"],
        rows: [
          { cells: ["je", "je m'appelle", "ja nazywam się"], speak: "je m'appelle" },
          { cells: ["tu", "tu t'appelles", "ty nazywasz się"], speak: "tu t'appelles" },
          { cells: ["il / elle", "il s'appelle", "on / ona nazywa się"], speak: "il s'appelle, elle s'appelle" },
          { cells: ["vous", "vous vous appelez", "pan / pani nazywa się"], speak: "vous vous appelez" },
        ],
      },
      examples: [
        { text: "Je m'appelle Carla.", pl: "Mam na imię Carla." },
        { text: "Comment tu t'appelles ?", pl: "Jak masz na imię?" },
        { text: "C'est Hugo. Il s'appelle Hugo.", pl: "To Hugo. On ma na imię Hugo." },
        { text: "Comment vous vous appelez, monsieur ?", pl: "Jak pan się nazywa?" },
      ],
      tip: "Francuskie końcówki często się **pisze, ale nie czyta**: appelle i appelles brzmią **identycznie**. Dlatego tak ważne jest słuchanie lektora!",
    },
    {
      type: "grammar",
      title: "tu czy vous?",
      paragraphs: [
        "**tu** (ty) mówimy do kolegów, rodziny i dzieci.",
        "**vous** (pan / pani) mówimy do dorosłych, których nie znamy dobrze: nauczycieli, sprzedawców, sąsiadów. To samo słowo **vous** znaczy też „wy” – do kilku osób.",
        "Francuzi bardzo często dodają **madame** albo **monsieur** – bez nazwiska: **Bonjour, madame !** To podstawa grzeczności.",
      ],
      table: {
        headers: ["", "do kolegi (tu)", "do dorosłego (vous)"],
        rows: [
          { cells: ["imię", "Comment tu t'appelles ?", "Comment vous vous appelez ?"], speak: "Comment tu t'appelles ? Comment vous vous appelez ?" },
          { cells: ["samopoczucie", "Ça va ? / Comment vas-tu ?", "Comment allez-vous ?"], speak: "Comment vas-tu ? Comment allez-vous ?" },
          { cells: ["„a ty?”", "Et toi ?", "Et vous ?"], speak: "Et toi ? Et vous ?" },
          { cells: ["pożegnanie", "Salut !", "Au revoir, madame !"], speak: "Salut ! Au revoir, madame !" },
        ],
      },
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "Francuska wymowa różni się od pisowni bardziej niż w innych językach – ale rządzi się prostymi zasadami. Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "ou", explanation: "czytamy jak polskie **u**", examples: ["bonjour", "vous", "coucou"] },
        { sound: "oi", explanation: "czytamy jak **ła**", examples: ["toi", "bonsoir", "au revoir"] },
        { sound: "au, eau", explanation: "czytamy jak **o**", examples: ["au revoir", "beau", "aussi"] },
        { sound: "on, an, en", explanation: "samogłoski **nosowe** – podobnie jak polskie ą, ę", examples: ["bonjour", "comment", "enchanté"] },
        { sound: "ç", explanation: "czytamy jak **s**", examples: ["ça va", "français", "garçon"] },
        { sound: "-s, -t, -x", explanation: "na końcu słowa zwykle **nie czytamy**", examples: ["salut", "très", "vous"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-1-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj wyrażenia i wybierz jego polskie znaczenie.",
        items: [
          { audio: "Bonsoir !", options: ["Dzień dobry!", "Dobry wieczór!", "Dobranoc!"], answer: 1 },
          { audio: "Comment tu t'appelles ?", options: ["Jak się masz?", "Skąd jesteś?", "Jak masz na imię?"], answer: 2 },
          { audio: "À demain !", options: ["Do jutra!", "Dzień dobry!", "Do widzenia!"], answer: 0 },
          { audio: "Comme ci, comme ça.", options: ["Bardzo dobrze.", "Tak sobie.", "Źle."], answer: 1 },
          { audio: "Enchanté.", options: ["Dziękuję.", "Proszę.", "Miło mi."], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-1-1-situations",
        kind: "choice",
        skill: "Słownictwo",
        title: "Qu'est-ce que tu dis ? – Co powiesz?",
        instruction: "Przeczytaj sytuację i wybierz właściwe wyrażenie.",
        items: [
          { prompt: "Jest 8:00 rano. Wchodzisz do klasy i witasz się z nauczycielką.", options: ["Bonne nuit !", "Bonjour, madame !", "Salut !"], answer: 1, speakOptions: true, explanation: "Do nauczycielki nie mówimy „Salut” – to tylko do kolegów." },
          { prompt: "Idziesz spać. Co mówisz mamie?", options: ["Bonne nuit !", "Bonjour !", "Bonsoir !"], answer: 0, speakOptions: true },
          {
            prompt: "Jest 19:00. Wchodzisz do sklepu.",
            options: ["Bonne nuit !", "Bonsoir !", "Coucou !"],
            answer: 1,
            speakOptions: true,
            explanation: "„Bonne nuit” mówimy tylko przed snem. Wieczorem na powitanie – „Bonsoir”.",
          },
          { prompt: "Wychodzisz ze szkoły. Żegnasz się z kolegą, którego zobaczysz jutro.", options: ["À demain !", "Enchanté !", "Ça va ?"], answer: 0, speakOptions: true },
          { prompt: "Kolega pyta: **Ça va ?** Co odpowiesz?", speak: "Ça va ?", options: ["Je m'appelle Hugo.", "Ça va bien, merci !", "Au revoir !"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-1-1-tu-vous",
        kind: "choice",
        skill: "Gramatyka",
        title: "tu czy vous?",
        instruction: "Do kogo mówisz? Wybierz właściwe pytanie.",
        items: [
          { prompt: "Pytasz nowego kolegę z klasy o imię.", options: ["Comment tu t'appelles ?", "Comment vous vous appelez ?"], answer: 0, speakOptions: true },
          { prompt: "Pytasz starszą panią w autobusie o nazwisko.", options: ["Comment tu t'appelles ?", "Comment vous vous appelez ?"], answer: 1, speakOptions: true },
          { prompt: "Pytasz panią Martin, jak się miewa.", options: ["Comment vas-tu ?", "Comment allez-vous ?"], answer: 1, speakOptions: true },
          { prompt: "Pytasz kuzynkę, jak się ma.", options: ["Comment vas-tu ?", "Comment allez-vous ?"], answer: 0, speakOptions: true },
          { prompt: "Żegnasz się z dyrektorem szkoły.", options: ["Salut !", "Au revoir, monsieur !"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-1-1-sappeler",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij formy czasownika s'appeler",
        instruction: "Wpisz brakującą formę (z m' / t' / s' albo vous). Apostrof możesz wpisać jako ' lub ’.",
        items: [
          { before: "Salut ! Je", after: "Léa.", answers: ["m'appelle"], hint: "(je) →" },
          { before: "Comment tu", after: "?", answers: ["t'appelles"], hint: "(tu) →" },
          { before: "C'est Hugo. Il", after: "Hugo.", answers: ["s'appelle"], hint: "(il) →" },
          { before: "Bonjour, madame. Comment vous", after: "?", answers: ["vous appelez"], hint: "(vous) →" },
          { before: "C'est mon amie. Elle", after: "Chloé.", answers: ["s'appelle"], hint: "(elle) →" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-1-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["t'appelles", "Comment", "tu"], answer: "Comment tu t'appelles ?", pl: "Jak masz na imię?" },
          { words: ["Carla", "m'appelle", "Je"], answer: "Je m'appelle Carla.", pl: "Mam na imię Carla." },
          { words: ["merci", "bien,", "Très"], answer: "Très bien, merci.", pl: "Bardzo dobrze, dziękuję." },
          { words: ["vous", "Comment", "allez"], answer: "Comment allez-vous ?", pl: "Jak się pan/pani miewa?" },
        ],
      },
    },
    {
      type: "culture",
      title: "Culture – la bise i magiczne „Bonjour”",
      paragraphs: [
        "Francuzi, którzy się znają, witają się **la bise** – całusami w policzek. Ile? To zależy od regionu: w Paryżu zwykle **dwa**, ale na południu Francji bywają **trzy**, a w niektórych regionach nawet **cztery**!",
        "Najważniejsze słowo we Francji to **Bonjour**. Wchodząc do sklepu, piekarni czy autobusu, zawsze mówimy „Bonjour, madame / monsieur”. Kto tego nie zrobi, uchodzi za niegrzecznego – nawet jeśli potem powie „s'il vous plaît”.",
      ],
      examples: [
        { text: "faire la bise", pl: "witać się całusem w policzek" },
        { text: "Bonjour, madame !", pl: "Dzień dobry pani!" },
        { text: "Coucou !", pl: "Hej! (do bliskich)" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-1-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "À toi ! Przedstaw się",
        instruction:
          "Napisz krótką wypowiedź (3–4 zdania). Potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: ["przywitaj się", "powiedz, jak masz na imię", "zapytaj kolegę o imię", "zapytaj, co słychać, i pożegnaj się"],
        placeholder: "Salut ! Je m'appelle …",
        model: "Salut ! Je m'appelle Carla. Comment tu t'appelles ? Ça va ? À demain !",
        modelPl: "Cześć! Mam na imię Carla. Jak masz na imię? Co słychać? Do jutra!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem przywitać się rano, w ciągu dnia i wieczorem.",
        "Umiem pożegnać się z kolegą i z dorosłym.",
        "Umiem powiedzieć, jak mam na imię, i zapytać o imię.",
        "Umiem zapytać, jak ktoś się czuje, i odpowiedzieć.",
        "Wiem, kiedy mówić tu, a kiedy vous.",
      ],
    },
  ],
};
