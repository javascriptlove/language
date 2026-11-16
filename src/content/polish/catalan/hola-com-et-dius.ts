import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "hola-com-et-dius",
  chapter: 1,
  number: 1,
  title: "Hola! Com et dius?",
  titlePl: "Cześć! Jak masz na imię?",
  intro:
    "Carla z Krakowa właśnie przeprowadziła się z rodziną do Barcelony. Pierwszy dzień w nowej szkole: Jordi i Núria witają się na przerwie, a Carla poznaje swoją wychowawczynię, panią Puig.",
  blocks: [
    {
      type: "goals",
      items: [
        "przywitać się i pożegnać o różnych porach dnia,",
        "przedstawić się i zapytać kogoś o imię,",
        "zapytać, jak ktoś się czuje, i odpowiedzieć,",
        "wybrać formę tu (do kolegi) lub vostè (do dorosłego).",
      ],
    },
    {
      type: "dialogue",
      title: "Al pati",
      titlePl: "Na szkolnym podwórku",
      context: "Na szkolnym podwórku. Jordi i Núria chodzą do tej samej szkoły, ale jeszcze się nie znają.",
      cast: { Jordi: "m", "Núria": "f" },
      lines: [
        { speaker: "Jordi", text: "Hola! Em dic Jordi. I tu, com et dius?", pl: "Cześć! Mam na imię Jordi. A ty, jak masz na imię?" },
        { speaker: "Núria", text: "Hola, Jordi! Em dic Núria. Encantada.", pl: "Cześć, Jordi! Mam na imię Núria. Miło mi." },
        { speaker: "Jordi", text: "Encantat! Què tal, Núria?", pl: "Miło mi! Co słychać, Núrio?" },
        { speaker: "Núria", text: "Molt bé, gràcies. I tu?", pl: "Bardzo dobrze, dzięki. A ty?" },
        { speaker: "Jordi", text: "Bé, gràcies. Fins després!", pl: "Dobrze, dzięki. Na razie!" },
        { speaker: "Núria", text: "Adéu! Fins demà!", pl: "Cześć! Do jutra!" },
      ],
    },
    {
      type: "dialogue",
      title: "A classe",
      titlePl: "W klasie",
      context: "W klasie. Pani Puig jest wychowawczynią Carli i uczy katalońskiego.",
      cast: { "Senyora Puig": "f", Carla: "f" },
      lines: [
        { speaker: "Senyora Puig", text: "Bon dia! Soc la senyora Puig. Com et dius?", pl: "Dzień dobry! Jestem pani Puig. Jak masz na imię?" },
        { speaker: "Carla", text: "Bon dia. Em dic Carla.", pl: "Dzień dobry. Mam na imię Carla." },
        { speaker: "Senyora Puig", text: "Molt de gust, Carla. Com estàs?", pl: "Miło mi, Carlo. Jak się masz?" },
        { speaker: "Carla", text: "Estic molt bé, gràcies. I vostè?", pl: "Bardzo dobrze, dziękuję. A pani?" },
        { speaker: "Senyora Puig", text: "Molt bé, gràcies. Benvinguda a l'escola!", pl: "Bardzo dobrze, dziękuję. Witaj w szkole!" },
        { speaker: "Carla", text: "Moltes gràcies!", pl: "Bardzo dziękuję!" },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Powitania",
          items: [
            { text: "Hola!", pl: "Cześć! (o każdej porze)" },
            { text: "Bon dia!", pl: "Dzień dobry! (rano, do obiadu ok. 14:00)" },
            { text: "Bona tarda!", pl: "Dzień dobry! (po południu, do zmroku)" },
            { text: "Bon vespre!", pl: "Dobry wieczór! (wczesnym wieczorem)" },
            { text: "Bona nit!", pl: "Dobry wieczór! / Dobranoc!" },
          ],
        },
        {
          title: "Pożegnania",
          items: [
            { text: "Adéu!", pl: "Cześć! / Do widzenia!" },
            { text: "A reveure!", pl: "Do widzenia! Do zobaczenia!" },
            { text: "Fins després!", pl: "Na razie! (zobaczymy się jeszcze dziś)" },
            { text: "Fins aviat!", pl: "Do zobaczenia wkrótce!" },
            { text: "Fins demà!", pl: "Do jutra!" },
          ],
        },
        {
          title: "Przedstawianie się",
          items: [
            { text: "Com et dius?", pl: "Jak masz na imię? (do kolegi)" },
            { text: "Com es diu vostè?", pl: "Jak się pan/pani nazywa?" },
            { text: "Em dic …", pl: "Mam na imię … / Nazywam się …" },
            { text: "Soc …", pl: "Jestem …" },
            { text: "Encantat.", pl: "Miło mi. (mówi chłopak / mężczyzna)" },
            { text: "Encantada.", pl: "Miło mi. (mówi dziewczyna / kobieta)" },
            { text: "Molt de gust.", pl: "Miło mi. (mówi każdy)" },
            { text: "Benvingut! / Benvinguda!", pl: "Witaj! (do chłopaka / do dziewczyny)" },
          ],
        },
        {
          title: "Samopoczucie",
          items: [
            { text: "Què tal?", pl: "Co słychać?" },
            { text: "Com va?", pl: "Jak leci?" },
            { text: "Com estàs?", pl: "Jak się masz? (do kolegi)" },
            { text: "Com està vostè?", pl: "Jak się pan/pani miewa?" },
            { text: "(Estic) molt bé.", pl: "(Mam się) bardzo dobrze." },
            { text: "bé", pl: "dobrze" },
            { text: "més o menys", pl: "tak sobie" },
            { text: "malament", pl: "źle" },
            { text: "gràcies / moltes gràcies", pl: "dziękuję, dzięki / bardzo dziękuję" },
            { text: "I tu? / I vostè?", pl: "A ty? / A pan/pani?" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "Czasownik dir-se – nazywać się",
      paragraphs: [
        "**Dir-se** to czasownik zwrotny – tak jak polskie „nazywać **się**”. Słówko „się” zmienia się razem z osobą i stoi **przed** czasownikiem: **em** dic, **et** dius, **es** diu.",
        "Po katalońsku zwykle **nie mówimy** zaimka „jo” (ja) ani „tu” (ty) – końcówka czasownika wystarczy. Mówimy po prostu **Em dic Carla**, tak jak po polsku „Mam na imię Carla”. Zaimek dodajemy tylko wtedy, gdy chcemy coś podkreślić: **I tu**, com et dius? – A **ty**, jak masz na imię?",
      ],
      table: {
        headers: ["osoba", "dir-se", "po polsku"],
        rows: [
          { cells: ["(jo)", "em dic", "ja nazywam się"], speak: "em dic" },
          { cells: ["(tu)", "et dius", "ty nazywasz się"], speak: "et dius" },
          { cells: ["(ell / ella)", "es diu", "on / ona nazywa się"], speak: "es diu" },
          { cells: ["(vostè)", "es diu", "pan / pani nazywa się"], speak: "vostè es diu" },
        ],
      },
      examples: [
        { text: "Em dic Carla.", pl: "Mam na imię Carla." },
        { text: "Com et dius?", pl: "Jak masz na imię?" },
        { text: "Ell es diu Jordi.", pl: "On ma na imię Jordi." },
        { text: "Com es diu vostè?", pl: "Jak się pan/pani nazywa?" },
      ],
      tip: "Jeśli znasz hiszpański: po katalońsku **nie ma** odwróconych znaków ¿ i ¡. Piszemy tak jak po polsku: **Com et dius?** **Hola!**",
    },
    {
      type: "grammar",
      title: "tu czy vostè?",
      paragraphs: [
        "**tu** (ty) mówimy do kolegów, rodziny i dzieci. W Katalonii młodzi ludzie bardzo szybko przechodzą na „ty”.",
        "**vostè** (pan / pani) mówimy do starszych, nieznajomych dorosłych i w sytuacjach oficjalnych. Uwaga: z **vostè** czasownik ma formę jak dla „on / ona” – tak samo jak po polsku „pani **jest**”, „pan **ma**”: Com **es diu** vostè? Com **està** vostè?",
        "Gdy nie wiesz, którą formę wybrać w rozmowie z dorosłym, zacznij od **vostè** – to zawsze uprzejme.",
      ],
      table: {
        headers: ["", "do kolegi (tu)", "do dorosłego (vostè)"],
        rows: [
          { cells: ["imię", "Com et dius?", "Com es diu vostè?"], speak: "Com et dius? Com es diu vostè?" },
          { cells: ["samopoczucie", "Com estàs?", "Com està vostè?"], speak: "Com estàs? Com està vostè?" },
          { cells: ["„a ty?”", "I tu?", "I vostè?"], speak: "I tu? I vostè?" },
        ],
      },
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "Kataloński nie zawsze czyta się tak, jak się pisze – szczególnie samogłoski bez akcentu. Zapamiętaj te zasady (dotyczą wymowy z Barcelony). Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        {
          sound: "a, e (bez akcentu)",
          explanation: "nieakcentowane **a** i **e** brzmią tak samo – jak krótki, niewyraźny dźwięk **pośredni między a i e** (tzw. samogłoska neutralna)",
          examples: ["Barcelona", "senyora", "Bona tarda"],
        },
        { sound: "o (bez akcentu)", explanation: "nieakcentowane **o** czytamy jak **u**", examples: ["polonès", "Montserrat", "Josep"] },
        { sound: "ny", explanation: "czytamy jak polskie **ń**", examples: ["senyora", "Catalunya", "Espanya"] },
        { sound: "j, g (+e, i)", explanation: "czytamy jak polskie **ż**", examples: ["Jordi", "Girona", "Josep"] },
        {
          sound: "x, ix, -ig",
          explanation: "**x** i **ix** czytamy jak **sz**, a **-ig** na końcu słowa – jak **cz**",
          examples: ["Mixa", "Xavi", "Puig"],
        },
        { sound: "l·l", explanation: "„l z kropką” to po prostu **długie l** – trochę dłuższe niż zwykle", examples: ["col·legi", "il·lusió"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Escolta i entén – Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj wyrażenia i wybierz jego polskie znaczenie.",
        items: [
          { audio: "Bona tarda!", options: ["Dobranoc!", "Dzień dobry! (po południu)", "Dzień dobry! (rano)"], answer: 1 },
          { audio: "Com et dius?", options: ["Jak masz na imię?", "Jak się masz?", "Skąd jesteś?"], answer: 0 },
          { audio: "Fins demà!", options: ["Na razie!", "Dzień dobry!", "Do jutra!"], answer: 2 },
          { audio: "Més o menys.", options: ["Bardzo dobrze.", "Tak sobie.", "Źle."], answer: 1 },
          { audio: "Encantada.", options: ["Dziękuję.", "Do widzenia.", "Miło mi."], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-1-situations",
        kind: "choice",
        skill: "Słownictwo",
        title: "Què dius? – Co powiesz?",
        instruction: "Przeczytaj sytuację i wybierz właściwe wyrażenie.",
        items: [
          {
            prompt: "Jest 9:00 rano. Wchodzisz do klasy i witasz się z nauczycielką.",
            options: ["Bona nit!", "Fins després!", "Bon dia!"],
            answer: 2,
            speakOptions: true,
          },
          {
            prompt: "Jest 17:00. Wchodzisz do sklepu.",
            options: ["Bona tarda!", "Bon dia!", "Fins demà!"],
            answer: 0,
            speakOptions: true,
            explanation: "W Katalonii „bon dia” mówi się do obiadu (ok. 14:00). Potem – „bona tarda”.",
          },
          {
            prompt: "Idziesz spać. Co mówisz mamie?",
            options: ["Hola!", "Bona nit!", "Bona tarda!"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Kolega pyta: **Què tal?** Co odpowiesz?",
            speak: "Què tal?",
            options: ["Em dic Pau.", "Molt bé, gràcies.", "Adéu!"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Jesteś chłopakiem. Ktoś się przedstawia, a ty chcesz powiedzieć „Miło mi”.",
            options: ["Encantat.", "Encantada."],
            answer: 0,
            speakOptions: true,
            explanation: "Chłopak mówi „encantat”, dziewczyna – „encantada” (końcówka -a). „Molt de gust” może powiedzieć każdy.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-1-tu-voste",
        kind: "choice",
        skill: "Gramatyka",
        title: "tu o vostè?",
        instruction: "Do kogo mówisz? Wybierz właściwe pytanie.",
        items: [
          { prompt: "Pytasz nowego kolegę z klasy o imię.", options: ["Com es diu vostè?", "Com et dius?"], answer: 1, speakOptions: true },
          { prompt: "Pytasz starszą panią w autobusie o nazwisko.", options: ["Com es diu vostè?", "Com et dius?"], answer: 0, speakOptions: true },
          { prompt: "Pytasz dyrektora szkoły, jak się miewa.", options: ["Com estàs?", "Com està vostè?"], answer: 1, speakOptions: true },
          { prompt: "Pytasz kuzynkę, jak się ma.", options: ["Com estàs?", "Com està vostè?"], answer: 0, speakOptions: true },
          {
            prompt: "Pani Puig pyta, jak się masz. Odpowiadasz i chcesz zapytać: „A pani?”",
            options: ["I tu?", "I vostè?"],
            answer: 1,
            speakOptions: true,
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-1-dir-se",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij formy czasownika dir-se",
        instruction: "Wpisz brakujące słowa (em / et / es + forma czasownika). Brak akcentów zaliczymy, ale przypomnimy o nich.",
        items: [
          { before: "Hola,", after: "Núria.", answers: ["em dic"], hint: "(jo) →" },
          { before: "I tu, com", after: "?", answers: ["et dius"], hint: "(tu) →" },
          { before: "Ell", after: "Jordi.", answers: ["es diu"], hint: "(ell) →" },
          { before: "Bon dia, senyor. Com", after: "vostè?", answers: ["es diu"], hint: "(vostè) →" },
          { before: "Ella", after: "Carla.", answers: ["es diu"], hint: "(ella) →" },
          { before: "Jo", after: "Pau. I tu?", answers: ["em dic"], hint: "(jo) →" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["dius", "Com", "et"], answer: "Com et dius?", pl: "Jak masz na imię?" },
          { words: ["Carla", "dic", "Em"], answer: "Em dic Carla.", pl: "Mam na imię Carla." },
          { words: ["vostè", "Com", "està"], answer: "Com està vostè?", pl: "Jak się pan/pani miewa?" },
          { words: ["bé,", "gràcies", "Molt"], answer: "Molt bé, gràcies.", pl: "Bardzo dobrze, dziękuję." },
        ],
      },
    },
    {
      type: "culture",
      title: "Cultura – dos petons i dues llengües",
      paragraphs: [
        "W Katalonii, gdy poznajesz nową osobę (zwłaszcza dziewczynę lub kobietę), witasz się **dwoma pocałunkami w policzek** (dos petons). Chłopcy między sobą zwykle podają sobie rękę.",
        "Obiad je się tu późno (ok. 14:00–15:00), dlatego **bon dia** mówi się aż do obiadu, a **bona tarda** – do zmroku.",
        "Kataloński to **osobny język romański**, a nie dialekt hiszpańskiego. W Katalonii są **dwa języki urzędowe**: kataloński (**català**) i hiszpański, który tutaj nazywa się **castellà** (kastylijski). Większość ludzi mówi w obu i swobodnie przechodzi z jednego na drugi. W szkołach w Katalonii większość lekcji odbywa się po katalońsku – dlatego Carla uczy się go od pierwszego dnia.",
      ],
      examples: [
        { text: "dos petons", pl: "dwa pocałunki (w policzek)" },
        { text: "el català", pl: "język kataloński" },
        { text: "el castellà", pl: "język hiszpański (kastylijski)" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "Ara tu! Przedstaw się",
        instruction:
          "Napisz krótką wypowiedź (3–4 zdania). Potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "przywitaj się",
          "powiedz, jak masz na imię",
          "zapytaj kolegę o imię",
          "zapytaj, co słychać, i pożegnaj się",
        ],
        placeholder: "Hola! Em dic …",
        model: "Hola! Em dic Carla. I tu, com et dius? Què tal? Fins demà!",
        modelPl: "Cześć! Mam na imię Carla. A ty, jak masz na imię? Co słychać? Do jutra!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem przywitać się rano, po południu i wieczorem.",
        "Umiem pożegnać się na kilka sposobów.",
        "Umiem powiedzieć, jak mam na imię, i zapytać o imię.",
        "Umiem zapytać, co słychać, i odpowiedzieć.",
        "Wiem, kiedy mówić tu, a kiedy vostè.",
      ],
    },
  ],
};
