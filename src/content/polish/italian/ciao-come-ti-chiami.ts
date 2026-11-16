import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "ciao-come-ti-chiami",
  chapter: 1,
  number: 1,
  title: "Ciao! Come ti chiami?",
  titlePl: "Cześć! Jak masz na imię?",
  intro:
    "Pierwszy dzień w szkole w Rzymie. Giulia i Marco poznają się na szkolnym dziedzińcu, a Laura z Polski poznaje swoją nową nauczycielkę.",
  blocks: [
    {
      type: "goals",
      items: [
        "przywitać się i pożegnać o różnych porach dnia,",
        "przedstawić się i zapytać kogoś o imię,",
        "zapytać, jak ktoś się czuje, i odpowiedzieć,",
        "wybrać formę tu (do kolegi) lub Lei (do dorosłego).",
      ],
    },
    {
      type: "dialogue",
      title: "Nel cortile",
      titlePl: "Na szkolnym podwórku",
      context: "Na szkolnym dziedzińcu. Giulia i Marco chodzą do tej samej szkoły.",
      cast: { Giulia: "f", Marco: "m" },
      lines: [
        { speaker: "Giulia", text: "Ciao! Io sono Giulia. Come ti chiami?", pl: "Cześć! Jestem Giulia. Jak masz na imię?" },
        { speaker: "Marco", text: "Ciao! Mi chiamo Marco.", pl: "Cześć! Mam na imię Marco." },
        { speaker: "Giulia", text: "Come stai, Marco?", pl: "Jak się masz, Marco?" },
        { speaker: "Marco", text: "Bene, grazie. E tu?", pl: "Dobrze, dzięki. A ty?" },
        { speaker: "Giulia", text: "Benissimo! Ciao, Marco, a domani!", pl: "Świetnie! Cześć, Marco, do jutra!" },
        { speaker: "Marco", text: "A domani, Giulia!", pl: "Do jutra, Giulio!" },
      ],
    },
    {
      type: "dialogue",
      title: "In classe",
      titlePl: "W klasie",
      context: "W klasie. Pani Rossi to nowa nauczycielka włoskiego.",
      cast: { "Professoressa Rossi": "f", Laura: "f" },
      lines: [
        { speaker: "Professoressa Rossi", text: "Buongiorno! Sono la professoressa Rossi. Come ti chiami?", pl: "Dzień dobry! Jestem profesor Rossi. Jak masz na imię?" },
        { speaker: "Laura", text: "Buongiorno, professoressa! Mi chiamo Laura.", pl: "Dzień dobry, pani profesor! Mam na imię Laura." },
        { speaker: "Professoressa Rossi", text: "Piacere, Laura! Come stai?", pl: "Miło mi, Lauro! Jak się masz?" },
        { speaker: "Laura", text: "Molto bene, grazie. E Lei?", pl: "Bardzo dobrze, dziękuję. A pani?" },
        { speaker: "Professoressa Rossi", text: "Bene, grazie.", pl: "Dobrze, dziękuję." },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Powitania",
          items: [
            { text: "Ciao!", pl: "Cześć! (na powitanie i pożegnanie)" },
            { text: "Salve!", pl: "Dzień dobry! (neutralnie, o każdej porze)" },
            { text: "Buongiorno!", pl: "Dzień dobry! (rano i w ciągu dnia)" },
            { text: "Buonasera!", pl: "Dobry wieczór! (od popołudnia)" },
          ],
        },
        {
          title: "Pożegnania",
          items: [
            { text: "Arrivederci!", pl: "Do widzenia!" },
            { text: "A domani!", pl: "Do jutra!" },
            { text: "A presto!", pl: "Do zobaczenia wkrótce!" },
            { text: "Buonanotte!", pl: "Dobranoc!" },
          ],
        },
        {
          title: "Przedstawianie się",
          items: [
            { text: "Come ti chiami?", pl: "Jak masz na imię? (do kolegi)" },
            { text: "Come si chiama?", pl: "Jak się pan/pani nazywa?" },
            { text: "Mi chiamo …", pl: "Mam na imię … / Nazywam się …" },
            { text: "Sono …", pl: "Jestem …" },
            { text: "Piacere!", pl: "Miło mi!" },
            { text: "la professoressa", pl: "pani profesor (nauczycielka)" },
            { text: "il professore", pl: "pan profesor (nauczyciel)" },
          ],
        },
        {
          title: "Samopoczucie",
          items: [
            { text: "Come stai?", pl: "Jak się masz? (do kolegi)" },
            { text: "Come sta?", pl: "Jak się pan/pani miewa?" },
            { text: "benissimo", pl: "świetnie" },
            { text: "molto bene", pl: "bardzo dobrze" },
            { text: "bene", pl: "dobrze" },
            { text: "così così", pl: "tak sobie" },
            { text: "male", pl: "źle" },
            { text: "grazie", pl: "dziękuję, dzięki" },
            { text: "E tu?", pl: "A ty?" },
            { text: "E Lei?", pl: "A pan/pani?" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "Czasownik chiamarsi – nazywać się",
      paragraphs: [
        "**Chiamarsi** to czasownik zwrotny – tak jak polskie „nazywać **się**”. Słówko „się” zmienia się razem z osobą: **mi** chiamo, **ti** chiami, **si** chiama.",
        "Po włosku zwykle **nie mówimy** zaimka „io” (ja) ani „tu” (ty) – końcówka czasownika wystarczy. Mówimy po prostu **Mi chiamo Laura**, tak jak po polsku „Mam na imię Laura”.",
      ],
      table: {
        headers: ["osoba", "chiamarsi", "po polsku"],
        rows: [
          { cells: ["(io)", "mi chiamo", "ja nazywam się"], speak: "mi chiamo" },
          { cells: ["(tu)", "ti chiami", "ty nazywasz się"], speak: "ti chiami" },
          { cells: ["(lui / lei)", "si chiama", "on / ona nazywa się"], speak: "si chiama" },
          { cells: ["(Lei)", "si chiama", "pan / pani nazywa się"], speak: "Lei si chiama" },
        ],
      },
      examples: [
        { text: "Mi chiamo Laura.", pl: "Mam na imię Laura." },
        { text: "Come ti chiami?", pl: "Jak masz na imię?" },
        { text: "Lui è Marco. Si chiama Marco.", pl: "To jest Marco. Ma na imię Marco." },
        { text: "Come si chiama, signora?", pl: "Jak pani się nazywa?" },
      ],
      tip: "Uwaga na wymowę: **ch** czytamy jak **k** – chiamo = „kiamo”. A **c** przed i, e czytamy jak **cz** – ciao = „czao”.",
    },
    {
      type: "grammar",
      title: "tu czy Lei?",
      paragraphs: [
        "**tu** (ty) mówimy do kolegów, rodziny i dzieci.",
        "**Lei** (pan / pani) mówimy do dorosłych, których nie znamy dobrze, np. do nauczycieli i sprzedawców. W tym znaczeniu często piszemy je wielką literą. Uwaga: z **Lei** czasownik ma formę jak dla „on / ona” (si chiama, sta).",
        "Do nauczycielki mówimy **professoressa**, a do nauczyciela **professore** – także bez nazwiska.",
      ],
      table: {
        headers: ["", "do kolegi (tu)", "do dorosłego (Lei)"],
        rows: [
          { cells: ["imię", "Come ti chiami?", "Come si chiama?"], speak: "Come ti chiami? Come si chiama?" },
          { cells: ["samopoczucie", "Come stai?", "Come sta?"], speak: "Come stai? Come sta?" },
          { cells: ["„a ty?”", "E tu?", "E Lei?"], speak: "E tu? E Lei?" },
          { cells: ["pożegnanie", "Ciao!", "Arrivederci!"], speak: "Ciao! Arrivederci!" },
        ],
      },
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "Włoski czyta się prawie tak, jak się pisze. Zapamiętaj kilka połączeń liter, które brzmią inaczej niż po polsku. Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "ci, ce", explanation: "czytamy jak **czi**, **cze**", examples: ["ciao", "piacere", "cinque"] },
        { sound: "chi, che", explanation: "czytamy jak **ki**, **ke**", examples: ["chiamo", "che", "anche"] },
        { sound: "gi, ge", explanation: "czytamy jak **dżi**, **dże**", examples: ["Giulia", "gelato", "buongiorno"] },
        { sound: "gn", explanation: "czytamy jak polskie **ń**", examples: ["signora", "Bologna", "gnocchi"] },
        { sound: "gli", explanation: "czytamy jak miękkie **li**", examples: ["famiglia", "figlio", "luglio"] },
        { sound: "tt, nn, ss", explanation: "podwójne spółgłoski wymawiamy **dłużej**", examples: ["buonanotte", "anno", "professoressa"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj wyrażenia i wybierz jego polskie znaczenie.",
        items: [
          { audio: "Buonasera!", options: ["Dzień dobry!", "Dobry wieczór!", "Dobranoc!"], answer: 1 },
          { audio: "Come ti chiami?", options: ["Jak się masz?", "Skąd jesteś?", "Jak masz na imię?"], answer: 2 },
          { audio: "A domani!", options: ["Do jutra!", "Dzień dobry!", "Do widzenia!"], answer: 0 },
          { audio: "Così così.", options: ["Bardzo dobrze.", "Tak sobie.", "Źle."], answer: 1 },
          { audio: "Piacere!", options: ["Dziękuję!", "Proszę!", "Miło mi!"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-1-situations",
        kind: "choice",
        skill: "Słownictwo",
        title: "Cosa dici? – Co powiesz?",
        instruction: "Przeczytaj sytuację i wybierz właściwe wyrażenie.",
        items: [
          { prompt: "Jest 8:00 rano. Wchodzisz do klasy i witasz się z nauczycielką.", options: ["Buonanotte!", "Buongiorno!", "A domani!"], answer: 1, speakOptions: true },
          { prompt: "Idziesz spać. Co mówisz mamie?", options: ["Buonanotte!", "Buongiorno!", "Salve!"], answer: 0, speakOptions: true },
          {
            prompt: "Jest 19:00. Wchodzisz do sklepu.",
            options: ["Buonanotte!", "Buonasera!", "Ciao!"],
            answer: 1,
            speakOptions: true,
            explanation: "„Buonanotte” mówimy tylko przed snem. Wieczorem na powitanie – „Buonasera”. A „Ciao” mówimy tylko do znajomych.",
          },
          { prompt: "Wychodzisz ze szkoły. Żegnasz się z kolegą, którego zobaczysz jutro.", options: ["A domani!", "Piacere!", "Come stai?"], answer: 0, speakOptions: true },
          { prompt: "Kolega pyta: **Come stai?** Co odpowiesz?", speak: "Come stai?", options: ["Mi chiamo Luca.", "Bene, grazie!", "Arrivederci!"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-1-tu-lei",
        kind: "choice",
        skill: "Gramatyka",
        title: "tu czy Lei?",
        instruction: "Do kogo mówisz? Wybierz właściwe pytanie.",
        items: [
          { prompt: "Pytasz nowego kolegę z klasy o imię.", options: ["Come ti chiami?", "Come si chiama?"], answer: 0, speakOptions: true },
          { prompt: "Pytasz starszą panią w autobusie o nazwisko.", options: ["Come ti chiami?", "Come si chiama?"], answer: 1, speakOptions: true },
          { prompt: "Pytasz panią profesor, jak się miewa.", options: ["Come stai?", "Come sta?"], answer: 1, speakOptions: true },
          { prompt: "Pytasz kuzynkę, jak się ma.", options: ["Come stai?", "Come sta?"], answer: 0, speakOptions: true },
          { prompt: "Żegnasz się z dyrektorem szkoły.", options: ["Ciao!", "Arrivederci!"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-1-chiamarsi",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij formy czasownika chiamarsi",
        instruction: "Wpisz brakujące słowa (mi / ti / si + forma czasownika).",
        items: [
          { before: "Ciao,", after: "Giulia.", answers: ["mi chiamo"], hint: "(io) →" },
          { before: "Come", after: "?", answers: ["ti chiami"], hint: "(tu) →" },
          { before: "Lui è Marco.", after: "Marco.", answers: ["si chiama"], hint: "(lui) →" },
          { before: "Buongiorno, signora. Come", after: "?", answers: ["si chiama"], hint: "(Lei) →" },
          { before: "Lei è la mia amica.", after: "Anna.", answers: ["si chiama"], hint: "(lei) →" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["chiami", "Come", "ti"], answer: "Come ti chiami?", pl: "Jak masz na imię?" },
          { words: ["Laura", "chiamo", "Mi"], answer: "Mi chiamo Laura.", pl: "Mam na imię Laura." },
          { words: ["grazie", "bene,", "Molto"], answer: "Molto bene, grazie.", pl: "Bardzo dobrze, dziękuję." },
          { words: ["professoressa", "Buongiorno,"], answer: "Buongiorno, professoressa!", pl: "Dzień dobry, pani profesor!" },
        ],
      },
    },
    {
      type: "culture",
      title: "Cultura – skąd się wzięło „ciao”?",
      paragraphs: [
        "„Ciao” to dziś najsłynniejsze włoskie słowo na świecie – mówi się je i na powitanie, i na pożegnanie. Pochodzi z dialektu weneckiego: **s-ciào vostro** znaczyło „wasz sługa”. Z grzecznej formułki zrobiło się najbardziej swobodne pozdrowienie!",
        "Pamiętaj: **ciao** mówimy tylko do osób, z którymi jesteśmy na „ty”. Do dorosłych lepiej powiedzieć **buongiorno**, **buonasera** albo neutralne **salve**.",
        "Włosi, którzy dobrze się znają, witają się często **dwoma pocałunkami w policzek**. Przy pierwszym spotkaniu zwykle podaje się rękę.",
      ],
      examples: [
        { text: "Ciao!", pl: "Cześć! (powitanie i pożegnanie)" },
        { text: "Salve!", pl: "Dzień dobry! (neutralnie)" },
        { text: "Ci vediamo!", pl: "Do zobaczenia!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "Adesso tu! Przedstaw się",
        instruction:
          "Napisz krótką wypowiedź (3–4 zdania). Potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: ["przywitaj się", "powiedz, jak masz na imię", "zapytaj kolegę o imię", "zapytaj, jak się czuje, i pożegnaj się"],
        placeholder: "Ciao! Mi chiamo …",
        model: "Ciao! Mi chiamo Laura. Come ti chiami? Come stai? A domani!",
        modelPl: "Cześć! Mam na imię Laura. Jak masz na imię? Jak się masz? Do jutra!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem przywitać się rano, w ciągu dnia i wieczorem.",
        "Umiem pożegnać się z kolegą i z dorosłym.",
        "Umiem powiedzieć, jak mam na imię, i zapytać o imię.",
        "Umiem zapytać, jak ktoś się czuje, i odpowiedzieć.",
        "Wiem, kiedy mówić tu, a kiedy Lei.",
      ],
    },
  ],
};
