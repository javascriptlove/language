import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "hola-como-te-llamas",
  chapter: 1,
  number: 1,
  title: "¡Hola! ¿Cómo te llamas?",
  titlePl: "Cześć! Jak masz na imię?",
  intro:
    "Pierwszy dzień w szkole w Madrycie. Lucía i Marcos poznają się na przerwie, a Carla z Polski poznaje swoją nauczycielkę.",
  blocks: [
    {
      type: "goals",
      items: [
        "przywitać się i pożegnać o różnych porach dnia,",
        "przedstawić się i zapytać kogoś o imię,",
        "zapytać, jak ktoś się czuje, i odpowiedzieć,",
        "wybrać formę tú (do kolegi) lub usted (do dorosłego).",
      ],
    },
    {
      type: "dialogue",
      title: "En el patio",
      titlePl: "Na szkolnym podwórku",
      context: "Na szkolnym dziedzińcu. Lucía i Marcos chodzą do tej samej szkoły.",
      cast: { "Lucía": "f", Marcos: "m" },
      lines: [
        { speaker: "Lucía", text: "¡Hola! Me llamo Lucía. ¿Cómo te llamas?", pl: "Cześć! Mam na imię Lucía. Jak masz na imię?" },
        { speaker: "Marcos", text: "Hola, Lucía. Me llamo Marcos.", pl: "Cześć, Lucía. Mam na imię Marcos." },
        { speaker: "Lucía", text: "¿Qué tal, Marcos?", pl: "Co słychać, Marcos?" },
        { speaker: "Marcos", text: "Muy bien, gracias. ¿Y tú?", pl: "Bardzo dobrze, dzięki. A ty?" },
        { speaker: "Lucía", text: "Bien, gracias. ¡Hasta luego!", pl: "Dobrze, dzięki. Na razie!" },
        { speaker: "Marcos", text: "¡Adiós! ¡Hasta mañana!", pl: "Cześć! Do jutra!" },
      ],
    },
    {
      type: "dialogue",
      title: "En clase",
      titlePl: "W klasie",
      context: "W klasie. Pani García to nowa nauczycielka hiszpańskiego.",
      cast: { "Profesora García": "f", Carla: "f" },
      lines: [
        { speaker: "Profesora García", text: "¡Buenos días! Soy la profesora García. ¿Cómo te llamas?", pl: "Dzień dobry! Jestem profesor García. Jak masz na imię?" },
        { speaker: "Carla", text: "Buenos días. Me llamo Carla.", pl: "Dzień dobry. Mam na imię Carla." },
        { speaker: "Profesora García", text: "Encantada, Carla. ¿Cómo estás?", pl: "Miło mi, Carlo. Jak się masz?" },
        { speaker: "Carla", text: "Estoy muy bien, gracias. ¿Y usted?", pl: "Bardzo dobrze, dziękuję. A pani?" },
        { speaker: "Profesora García", text: "Bien, gracias.", pl: "Dobrze, dziękuję." },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Powitania",
          items: [
            { text: "¡Hola!", pl: "Cześć!" },
            { text: "¡Buenos días!", pl: "Dzień dobry! (rano, do obiadu ok. 14:00)" },
            { text: "¡Buenas tardes!", pl: "Dzień dobry! (po południu, do zmroku)" },
            { text: "¡Buenas noches!", pl: "Dobry wieczór! / Dobranoc!" },
          ],
        },
        {
          title: "Pożegnania",
          items: [
            { text: "¡Adiós!", pl: "Do widzenia! / Cześć!" },
            { text: "¡Hasta luego!", pl: "Na razie! Do zobaczenia!" },
            { text: "¡Hasta mañana!", pl: "Do jutra!" },
          ],
        },
        {
          title: "Przedstawianie się",
          items: [
            { text: "¿Cómo te llamas?", pl: "Jak masz na imię? (do kolegi)" },
            { text: "¿Cómo se llama usted?", pl: "Jak się pan/pani nazywa?" },
            { text: "Me llamo …", pl: "Mam na imię … / Nazywam się …" },
            { text: "Soy …", pl: "Jestem …" },
            { text: "Encantado.", pl: "Miło mi. (mówi chłopak / mężczyzna)" },
            { text: "Encantada.", pl: "Miło mi. (mówi dziewczyna / kobieta)" },
          ],
        },
        {
          title: "Samopoczucie",
          items: [
            { text: "¿Qué tal?", pl: "Co słychać? Jak leci?" },
            { text: "¿Cómo estás?", pl: "Jak się masz? (do kolegi)" },
            { text: "¿Cómo está usted?", pl: "Jak się pan/pani miewa?" },
            { text: "muy bien", pl: "bardzo dobrze" },
            { text: "bien", pl: "dobrze" },
            { text: "regular", pl: "tak sobie" },
            { text: "mal", pl: "źle" },
            { text: "gracias", pl: "dziękuję, dzięki" },
            { text: "¿Y tú?", pl: "A ty?" },
            { text: "¿Y usted?", pl: "A pan/pani?" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "Czasownik llamarse – nazywać się",
      paragraphs: [
        "**Llamarse** to czasownik zwrotny – tak jak polskie „nazywać **się**”. Słówko „się” zmienia się razem z osobą: **me** llamo, **te** llamas, **se** llama.",
        "Po hiszpańsku zwykle **nie mówimy** zaimka „yo” (ja) ani „tú” (ty) – końcówka czasownika wystarczy. Mówimy po prostu **Me llamo Carla**, tak jak po polsku „Mam na imię Carla”.",
      ],
      table: {
        headers: ["osoba", "llamarse", "po polsku"],
        rows: [
          { cells: ["(yo)", "me llamo", "ja nazywam się"], speak: "me llamo" },
          { cells: ["(tú)", "te llamas", "ty nazywasz się"], speak: "te llamas" },
          { cells: ["(él / ella)", "se llama", "on / ona nazywa się"], speak: "se llama" },
          { cells: ["(usted)", "se llama", "pan / pani nazywa się"], speak: "usted se llama" },
        ],
      },
      examples: [
        { text: "Me llamo Carla.", pl: "Mam na imię Carla." },
        { text: "¿Cómo te llamas?", pl: "Jak masz na imię?" },
        { text: "Es Marcos. Se llama Marcos.", pl: "To Marcos. Ma na imię Marcos." },
        { text: "¿Cómo se llama usted?", pl: "Jak się pan/pani nazywa?" },
      ],
      tip: "Pytania i wykrzyknienia po hiszpańsku mają znak na początku i na końcu: **¿Cómo te llamas?** **¡Hola!** Znak początkowy jest odwrócony.",
    },
    {
      type: "grammar",
      title: "tú czy usted?",
      paragraphs: [
        "**tú** (ty) mówimy do kolegów, rodziny i dzieci. W Hiszpanii młodzi ludzie bardzo szybko przechodzą na „ty”.",
        "**usted** (pan / pani) mówimy do starszych osób i w sytuacjach oficjalnych. Uwaga: z **usted** czasownik ma formę jak dla „on / ona” (se llama, está).",
        "Do nauczycielki często mówi się **profesora** lub po imieniu – w hiszpańskich szkołach to normalne.",
      ],
      table: {
        headers: ["", "do kolegi (tú)", "do dorosłego (usted)"],
        rows: [
          { cells: ["imię", "¿Cómo te llamas?", "¿Cómo se llama usted?"], speak: "¿Cómo te llamas? ¿Cómo se llama usted?" },
          { cells: ["samopoczucie", "¿Cómo estás?", "¿Cómo está usted?"], speak: "¿Cómo estás? ¿Cómo está usted?" },
          { cells: ["„a ty?”", "¿Y tú?", "¿Y usted?"], speak: "¿Y tú? ¿Y usted?" },
        ],
      },
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "Hiszpański czyta się prawie tak, jak się pisze. Zapamiętaj tylko kilka liter, które brzmią inaczej niż po polsku. Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "h", explanation: "jest **nieme** – nie czytamy go wcale", examples: ["hola", "hasta luego", "hoy"] },
        { sound: "ll", explanation: "czytamy jak polskie **j**", examples: ["me llamo", "Sevilla", "calle"] },
        { sound: "ñ", explanation: "czytamy jak polskie **ń**", examples: ["mañana", "España", "niño"] },
        { sound: "j", explanation: "czytamy jak mocne polskie **ch**", examples: ["Juan", "jamón", "hijo"] },
        { sound: "qu", explanation: "czytamy jak **k** (u jest nieme)", examples: ["¿Qué tal?", "queso", "Quique"] },
        { sound: "c (+e, i), z", explanation: "w Hiszpanii jak angielskie **th**, w Ameryce Łacińskiej jak **s**", examples: ["gracias", "Barcelona", "zumo"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "es-1-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj wyrażenia i wybierz jego polskie znaczenie.",
        items: [
          { audio: "¡Buenas tardes!", options: ["Dobranoc!", "Dzień dobry! (po południu)", "Dzień dobry! (rano)"], answer: 1 },
          { audio: "¿Cómo te llamas?", options: ["Jak się masz?", "Jak masz na imię?", "Skąd jesteś?"], answer: 1 },
          { audio: "¡Hasta mañana!", options: ["Do jutra!", "Na razie!", "Dzień dobry!"], answer: 0 },
          { audio: "Regular.", options: ["Bardzo dobrze.", "Źle.", "Tak sobie."], answer: 2 },
          { audio: "Encantada.", options: ["Dziękuję.", "Miło mi.", "Do widzenia."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-1-1-situations",
        kind: "choice",
        skill: "Słownictwo",
        title: "¿Qué dices? – Co powiesz?",
        instruction: "Przeczytaj sytuację i wybierz właściwe wyrażenie.",
        items: [
          {
            prompt: "Jest 9:00 rano. Wchodzisz do klasy i witasz się z nauczycielką.",
            options: ["¡Buenas noches!", "¡Buenos días!", "¡Hasta luego!"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Jest 17:00. Wchodzisz do sklepu.",
            options: ["¡Buenas tardes!", "¡Buenos días!", "¡Hasta mañana!"],
            answer: 0,
            speakOptions: true,
            explanation: "W Hiszpanii „buenos días” mówi się do obiadu (ok. 14:00). Potem – „buenas tardes”.",
          },
          {
            prompt: "Idziesz spać. Co mówisz mamie?",
            options: ["¡Hola!", "¡Buenas tardes!", "¡Buenas noches!"],
            answer: 2,
            speakOptions: true,
          },
          {
            prompt: "Kolega pyta: **¿Qué tal?** Co odpowiesz?",
            speak: "¿Qué tal?",
            options: ["Me llamo Pablo.", "Muy bien, gracias.", "¡Adiós!"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Jesteś dziewczyną. Ktoś się przedstawia, a ty chcesz powiedzieć „Miło mi”.",
            options: ["Encantado.", "Encantada."],
            answer: 1,
            speakOptions: true,
            explanation: "Dziewczyna mówi „encantada” (końcówka -a), chłopak – „encantado” (końcówka -o).",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-1-1-tu-usted",
        kind: "choice",
        skill: "Gramatyka",
        title: "tú czy usted?",
        instruction: "Do kogo mówisz? Wybierz właściwe pytanie.",
        items: [
          {
            prompt: "Pytasz nowego kolegę z klasy o imię.",
            options: ["¿Cómo te llamas?", "¿Cómo se llama usted?"],
            answer: 0,
            speakOptions: true,
          },
          {
            prompt: "Pytasz starszą panią w autobusie o nazwisko.",
            options: ["¿Cómo te llamas?", "¿Cómo se llama usted?"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Pytasz dyrektora szkoły, jak się miewa.",
            options: ["¿Cómo estás?", "¿Cómo está usted?"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Pytasz kuzynkę, jak się ma.",
            options: ["¿Cómo estás?", "¿Cómo está usted?"],
            answer: 0,
            speakOptions: true,
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-1-1-llamarse",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij formy czasownika llamarse",
        instruction:
          "Wpisz brakujące słowa (me / te / se + forma czasownika). Brak akcentów zaliczymy, ale przypomnimy o nich.",
        items: [
          { before: "Hola, ", after: "Lucía.", answers: ["me llamo"], hint: "(yo) →" },
          { before: "¿Cómo", after: "?", answers: ["te llamas"], hint: "(tú) →" },
          { before: "Es Marcos.", after: "Marcos.", answers: ["se llama"], hint: "(él) →" },
          { before: "Buenos días, señora. ¿Cómo", after: "usted?", answers: ["se llama"], hint: "(usted) →" },
          { before: "Es mi amiga. ", after: "Ana.", answers: ["se llama"], hint: "(ella) →" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-1-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["llamas", "¿Cómo", "te"], answer: "¿Cómo te llamas?", pl: "Jak masz na imię?" },
          { words: ["Carla", "llamo", "Me"], answer: "Me llamo Carla.", pl: "Mam na imię Carla." },
          { words: ["usted", "¿Cómo", "está"], answer: "¿Cómo está usted?", pl: "Jak się pan/pani miewa?" },
          { words: ["bien,", "gracias", "Muy"], answer: "Muy bien, gracias.", pl: "Bardzo dobrze, dziękuję." },
        ],
      },
    },
    {
      type: "culture",
      title: "Cultura – dos besos",
      paragraphs: [
        "W Hiszpanii, gdy poznajesz nową osobę (zwłaszcza dziewczynę lub kobietę), witasz się **dwoma pocałunkami w policzek** (dos besos) – najpierw w prawy, potem w lewy. Chłopcy między sobą zwykle podają sobie rękę.",
        "Hiszpanie jedzą obiad późno (ok. 14:00–15:00), dlatego **buenos días** mówi się aż do obiadu, a **buenas tardes** – do zmroku, nawet o 20:00 latem.",
        "Bardzo popularne jest krótkie, potoczne **¡Buenas!** – pasuje o każdej porze dnia.",
      ],
      examples: [
        { text: "¡Buenas!", pl: "Dzień dobry! / Cześć! (potocznie)" },
        { text: "dos besos", pl: "dwa pocałunki (w policzek)" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "es-1-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "¡Ahora tú! Przedstaw się",
        instruction:
          "Napisz krótką wypowiedź (3–4 zdania). Potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "przywitaj się",
          "powiedz, jak masz na imię",
          "zapytaj kolegę o imię",
          "zapytaj, co słychać, i pożegnaj się",
        ],
        placeholder: "¡Hola! Me llamo …",
        model: "¡Hola! Me llamo Carla. ¿Cómo te llamas? ¿Qué tal? ¡Hasta mañana!",
        modelPl: "Cześć! Mam na imię Carla. Jak masz na imię? Co słychać? Do jutra!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem przywitać się rano, po południu i wieczorem.",
        "Umiem pożegnać się na kilka sposobów.",
        "Umiem powiedzieć, jak mam na imię, i zapytać o imię.",
        "Umiem zapytać, co słychać, i odpowiedzieć.",
        "Wiem, kiedy mówić tú, a kiedy usted.",
      ],
    },
  ],
};
