import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "zahlen-0-20",
  chapter: 1,
  number: 3,
  title: "Die Zahlen 0–20",
  titlePl: "Liczby 0–20",
  intro:
    "Julia wymienia się numerem telefonu z Paulem, a na matematyce pani Weber sprawdza, kto umie liczyć po niemiecku. Do dzieła – eins, zwei, drei!",
  blocks: [
    {
      type: "goals",
      items: [
        "liczyć od 0 do 20,",
        "powiedzieć, ile masz lat, i zapytać o wiek,",
        "podać i zapisać numer telefonu,",
        "poprosić, żeby ktoś mówił wolniej albo powtórzył.",
      ],
    },
    {
      type: "vocab",
      title: "Liczby 0–20",
      groups: [
        {
          title: "0–10",
          items: [
            { text: "null", pl: "0" },
            { text: "eins", pl: "1" },
            { text: "zwei", pl: "2" },
            { text: "drei", pl: "3" },
            { text: "vier", pl: "4" },
            { text: "fünf", pl: "5" },
            { text: "sechs", pl: "6" },
            { text: "sieben", pl: "7" },
            { text: "acht", pl: "8" },
            { text: "neun", pl: "9" },
            { text: "zehn", pl: "10" },
          ],
        },
        {
          title: "11–20",
          items: [
            { text: "elf", pl: "11" },
            { text: "zwölf", pl: "12" },
            { text: "dreizehn", pl: "13" },
            { text: "vierzehn", pl: "14" },
            { text: "fünfzehn", pl: "15" },
            { text: "sechzehn", pl: "16" },
            { text: "siebzehn", pl: "17" },
            { text: "achtzehn", pl: "18" },
            { text: "neunzehn", pl: "19" },
            { text: "zwanzig", pl: "20" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Wie alt bist du?",
      titlePl: "Ile masz lat?",
      context: "Po lekcjach. Paul i Julia chcą się umówić na naukę niemieckiego.",
      cast: { Paul: "m", Julia: "f" },
      lines: [
        { speaker: "Paul", text: "Julia, wie alt bist du?", pl: "Julio, ile masz lat?" },
        { speaker: "Julia", text: "Ich bin dreizehn. Und du?", pl: "Mam trzynaście. A ty?" },
        { speaker: "Paul", text: "Ich bin vierzehn Jahre alt.", pl: "Mam czternaście lat." },
        { speaker: "Julia", text: "Wie ist deine Handynummer?", pl: "Jaki jest twój numer komórki?" },
        {
          speaker: "Paul",
          text: "Meine Nummer ist null, eins, sieben, sechs – zwölf, fünfzehn, neunzehn.",
          pl: "Mój numer to zero, jeden, siedem, sześć – dwanaście, piętnaście, dziewiętnaście.",
        },
        { speaker: "Julia", text: "Langsam, bitte! Noch einmal, bitte.", pl: "Wolniej, proszę! Jeszcze raz, proszę." },
        {
          speaker: "Paul",
          text: "Null, eins, sieben, sechs – zwölf, fünfzehn, neunzehn.",
          pl: "Zero, jeden, siedem, sześć – dwanaście, piętnaście, dziewiętnaście.",
        },
        { speaker: "Julia", text: "Danke! Tschüss, Paul!", pl: "Dzięki! Cześć, Paul!" },
      ],
    },
    {
      type: "dialogue",
      title: "In der Mathestunde",
      titlePl: "Na lekcji matematyki",
      context: "Lekcja matematyki. Pani Weber zadaje pytania.",
      cast: { "Frau Weber": "f", Lukas: "m", Anna: "f" },
      lines: [
        { speaker: "Frau Weber", text: "Lukas, wie viel ist sieben plus acht?", pl: "Lukas, ile to jest siedem plus osiem?" },
        { speaker: "Lukas", text: "Sieben plus acht ist fünfzehn.", pl: "Siedem plus osiem to piętnaście." },
        { speaker: "Frau Weber", text: "Richtig! Anna, wie viel ist zwanzig minus elf?", pl: "Dobrze! Anno, ile to jest dwadzieścia minus jedenaście?" },
        { speaker: "Anna", text: "Zwanzig minus elf ist … neun!", pl: "Dwadzieścia minus jedenaście to… dziewięć!" },
        { speaker: "Frau Weber", text: "Super, Anna! Das ist richtig.", pl: "Super, Anno! To jest dobrze." },
      ],
    },
    {
      type: "vocab",
      title: "Przydatne zwroty",
      groups: [
        {
          title: "Wiek i telefon",
          items: [
            { text: "Wie alt bist du?", pl: "Ile masz lat?" },
            { text: "Ich bin dreizehn (Jahre alt).", pl: "Mam trzynaście lat." },
            { text: "Wie alt sind Sie?", pl: "Ile pan/pani ma lat?" },
            { text: "Wie ist deine Telefonnummer?", pl: "Jaki jest twój numer telefonu?" },
            { text: "Meine Nummer ist …", pl: "Mój numer to …" },
            { text: "das Handy", pl: "komórka, telefon komórkowy" },
          ],
        },
        {
          title: "Na lekcji",
          items: [
            { text: "Langsam, bitte!", pl: "Wolniej, proszę!" },
            { text: "Noch einmal, bitte.", pl: "Jeszcze raz, proszę." },
            { text: "Wie viel ist …?", pl: "Ile to jest …?" },
            { text: "plus / minus", pl: "plus / minus" },
            { text: "richtig", pl: "dobrze, prawidłowo" },
            { text: "falsch", pl: "źle, błędnie" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "Jak tworzymy liczby 13–19?",
      paragraphs: [
        "Liczby od 13 do 19 budujemy jak po polsku: **jedności + zehn** (dziesięć). Drei + zehn = **dreizehn**, tak jak „trzy-naście”.",
        "Wyjątki, na które trzeba uważać: **elf** (11) i **zwölf** (12) to zupełnie osobne słowa. W **sechzehn** (16) znika litera s, a w **siebzehn** (17) znika -en.",
      ],
      table: {
        headers: ["liczba", "po niemiecku", "jak powstaje"],
        rows: [
          { cells: ["11", "elf", "osobne słowo!"], speak: "elf" },
          { cells: ["12", "zwölf", "osobne słowo!"], speak: "zwölf" },
          { cells: ["13", "dreizehn", "drei + zehn"], speak: "dreizehn" },
          { cells: ["14", "vierzehn", "vier + zehn"], speak: "vierzehn" },
          { cells: ["15", "fünfzehn", "fünf + zehn"], speak: "fünfzehn" },
          { cells: ["16", "sechzehn", "sechs + zehn (bez s!)"], speak: "sechzehn" },
          { cells: ["17", "siebzehn", "sieben + zehn (bez -en!)"], speak: "siebzehn" },
          { cells: ["18", "achtzehn", "acht + zehn"], speak: "achtzehn" },
          { cells: ["19", "neunzehn", "neun + zehn"], speak: "neunzehn" },
        ],
      },
      tip: "Po polsku „**mam** 13 lat”, ale po niemiecku **jestem** 13 lat: **Ich bin dreizehn.** Nigdy nie mów „Ich habe dreizehn Jahre” – to typowy błąd Polaków!",
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "W liczbach łatwo pomylić podobne dźwięki – a jedna pomyłka to inny numer telefonu! Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "ei / ie", explanation: "**ei** = aj, **ie** = i. Nie myl: drei (3) i vier (4)!", examples: ["drei", "vier", "zwei", "sieben"] },
        { sound: "z", explanation: "czytamy jak polskie **c**", examples: ["zehn", "zwei", "zwanzig"] },
        { sound: "ü / ö", explanation: "usta jak do **u** / **o**, a mówimy **i** / **e**", examples: ["fünf", "zwölf", "fünfzehn"] },
        { sound: "chs", explanation: "czytamy jak **ks**", examples: ["sechs", "Fuchs"] },
        { sound: "v", explanation: "czytamy jak **f**", examples: ["vier", "vierzehn"] },
        { sound: "-ig", explanation: "na końcu słowa brzmi prawie jak **-ich**", examples: ["zwanzig", "richtig"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-3-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Jaka to liczba?",
        instruction: "Kliknij ▶, posłuchaj i wybierz liczbę, którą słyszysz.",
        items: [
          { audio: "drei", options: ["3", "4", "13"], answer: 0 },
          { audio: "zwölf", options: ["2", "12", "20"], answer: 1 },
          { audio: "sechzehn", options: ["6", "15", "16"], answer: 2 },
          { audio: "vier", options: ["4", "3", "14"], answer: 0 },
          { audio: "neunzehn", options: ["9", "19", "15"], answer: 1 },
          { audio: "zwanzig", options: ["2", "12", "20"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-3-spelling",
        kind: "choice",
        skill: "Słownictwo",
        title: "Uwaga na wyjątki!",
        instruction: "Wybierz poprawny zapis liczby.",
        items: [
          { prompt: "**11**", options: ["einzehn", "elf", "zwölf"], answer: 1, speakOptions: true },
          { prompt: "**12**", options: ["zwölf", "zweizehn", "zwanzig"], answer: 0, speakOptions: true },
          { prompt: "**16**", options: ["sechszehn", "sechzehn", "sechzig"], answer: 1, speakOptions: true, explanation: "W 16 znika litera s: sechs → sechzehn." },
          { prompt: "**17**", options: ["siebenzehn", "siebzig", "siebzehn"], answer: 2, speakOptions: true, explanation: "W 17 znika -en: sieben → siebzehn." },
          { prompt: "**20**", options: ["zweizehn", "zwanzig", "zwölf"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-3-math",
        kind: "fill",
        skill: "Pisanie",
        title: "Policz i napisz słowem",
        instruction:
          "Rozwiąż działanie i wpisz wynik słowem (nie cyfrą!). Brak umlautu (np. funf) zaliczymy, ale przypomnimy o ü.",
        items: [
          { before: "drei plus vier ist", after: ".", answers: ["sieben"] },
          { before: "zehn minus zwei ist", after: ".", answers: ["acht"] },
          { before: "sechs plus sechs ist", after: ".", answers: ["zwölf"] },
          { before: "neun plus acht ist", after: ".", answers: ["siebzehn"] },
          { before: "zwanzig minus fünf ist", after: ".", answers: ["fünfzehn"] },
          { before: "elf plus fünf ist", after: ".", answers: ["sechzehn"] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-3-phone",
        kind: "listen",
        skill: "Słuchanie",
        title: "Zapisz numer telefonu",
        instruction:
          "Posłuchaj numeru telefonu i wybierz, który został zapisany poprawnie. Jeśli mówi za szybko – włącz wolne tempo lektora w górnym menu.",
        items: [
          { audio: "null, eins, sieben, sechs – zwölf, fünfzehn, neunzehn", options: ["0176 12 15 19", "0167 12 15 19", "0176 20 15 19"], answer: 0 },
          { audio: "null, eins, fünf, zwei – drei, vier, achtzehn", options: ["0152 4 3 18", "0152 3 4 18", "0125 3 4 80"], answer: 1 },
          { audio: "null, eins, sechs, null – elf, sechzehn, zwanzig", options: ["0160 11 16 20", "0160 12 16 20", "0160 11 60 20"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-3-phrases",
        kind: "choice",
        skill: "Mówienie",
        title: "Co powiesz?",
        instruction: "Przeczytaj sytuację i wybierz właściwą reakcję.",
        items: [
          { prompt: "Ktoś podaje ci numer telefonu, ale mówi za szybko.", options: ["Langsam, bitte!", "Richtig!", "Gute Nacht!"], answer: 0, speakOptions: true },
          { prompt: "Nie usłyszałeś/-aś. Prosisz, żeby ktoś powtórzył.", options: ["Wie alt bist du?", "Noch einmal, bitte.", "Ich bin neu hier."], answer: 1, speakOptions: true },
          { prompt: "Chcesz powiedzieć, że masz 13 lat.", options: ["Ich habe dreizehn Jahre.", "Ich bin dreizehn.", "Ich bin dreißig."], answer: 1, speakOptions: true, explanation: "Po niemiecku wiek podajemy z czasownikiem sein: Ich bin dreizehn (Jahre alt)." },
          { prompt: "Kolega mówi: „Acht plus vier ist zwölf.” Co odpowiesz?", speak: "Acht plus vier ist zwölf.", options: ["Falsch!", "Richtig!"], answer: 1, speakOptions: true },
          { prompt: "Chcesz zapytać nauczyciela, ile ma lat (choć to niegrzeczne 😉).", options: ["Wie alt bist du?", "Wie alt sind Sie?"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-3-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["alt", "du", "Wie", "bist"], answer: "Wie alt bist du?", pl: "Ile masz lat?" },
          { words: ["vierzehn", "alt", "bin", "Jahre", "Ich"], answer: "Ich bin vierzehn Jahre alt.", pl: "Mam czternaście lat." },
          { words: ["ist", "Paul", "alt", "Wie"], answer: "Wie alt ist Paul?", pl: "Ile lat ma Paul?" },
          { words: ["deine", "ist", "Nummer", "Wie"], answer: "Wie ist deine Nummer?", pl: "Jaki jest twój numer?" },
        ],
      },
    },
    {
      type: "culture",
      title: "Landeskunde – szóstka to najgorsza ocena!",
      paragraphs: [
        "W niemieckich szkołach skala ocen jest **odwrotna** niż w Polsce. **Eine Eins** (jedynka) to najlepsza ocena, a **eine Sechs** (szóstka) – najgorsza! Gdy niemiecki kolega cieszy się z jedynki, to naprawdę jest powód do radości.",
        "Niemcy liczą też inaczej na palcach: zaczynają od **kciuka**. Pokazanie palca wskazującego oznacza dla nich „jeden”, a kciuk + palec wskazujący – „dwa”. Uważaj, zamawiając dwie gałki lodów!",
      ],
      examples: [
        { text: "Ich habe eine Eins!", pl: "Mam jedynkę! (= najlepszą ocenę)" },
        { text: "eine Sechs", pl: "szóstka (= najgorsza ocena)" },
        { text: "Zwei Kugeln Eis, bitte.", pl: "Dwie gałki lodów, proszę." },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-1-3-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Przedstaw się – wersja rozszerzona",
        instruction:
          "Połącz wszystko, czego nauczyłeś/-aś się w rozdziale 1. Napisz kilka zdań o sobie, posłuchaj ich i przeczytaj na głos. Numer telefonu możesz wymyślić!",
        checklist: [
          "przywitaj się i podaj imię",
          "napisz, skąd jesteś",
          "napisz, ile masz lat",
          "podaj (wymyślony) numer telefonu",
        ],
        placeholder: "Hallo! Ich heiße … Ich bin … Jahre alt.",
        model:
          "Hallo! Ich heiße Julia. Ich komme aus Polen. Ich bin dreizehn Jahre alt. Meine Nummer ist null, eins, sieben, sechs – zwölf, fünfzehn, neunzehn.",
        modelPl:
          "Cześć! Mam na imię Julia. Jestem z Polski. Mam trzynaście lat. Mój numer to zero, jeden, siedem, sześć – dwanaście, piętnaście, dziewiętnaście.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem policzyć od 0 do 20 bez patrzenia w tabelkę.",
        "Pamiętam wyjątki: elf, zwölf, sechzehn, siebzehn.",
        "Umiem powiedzieć, ile mam lat (Ich bin …, nie Ich habe …!).",
        "Umiem podać i zrozumieć numer telefonu.",
        "Umiem poprosić: Langsam, bitte! / Noch einmal, bitte.",
      ],
    },
  ],
};
