import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "numeri-0-20",
  chapter: 1,
  number: 3,
  title: "I numeri 0–20",
  titlePl: "Liczby 0–20",
  intro:
    "Laura wymienia się numerem telefonu z Marco, a na matematyce pani Rossi sprawdza, kto umie liczyć po włosku. Avanti – uno, due, tre!",
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
            { text: "zero", pl: "0" },
            { text: "uno", pl: "1" },
            { text: "due", pl: "2" },
            { text: "tre", pl: "3" },
            { text: "quattro", pl: "4" },
            { text: "cinque", pl: "5" },
            { text: "sei", pl: "6" },
            { text: "sette", pl: "7" },
            { text: "otto", pl: "8" },
            { text: "nove", pl: "9" },
            { text: "dieci", pl: "10" },
          ],
        },
        {
          title: "11–20",
          items: [
            { text: "undici", pl: "11" },
            { text: "dodici", pl: "12" },
            { text: "tredici", pl: "13" },
            { text: "quattordici", pl: "14" },
            { text: "quindici", pl: "15" },
            { text: "sedici", pl: "16" },
            { text: "diciassette", pl: "17" },
            { text: "diciotto", pl: "18" },
            { text: "diciannove", pl: "19" },
            { text: "venti", pl: "20" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Quanti anni hai?",
      titlePl: "Ile masz lat?",
      context: "Po lekcjach. Marco i Laura chcą się umówić na naukę włoskiego.",
      cast: { Marco: "m", Laura: "f" },
      lines: [
        { speaker: "Marco", text: "Laura, quanti anni hai?", pl: "Lauro, ile masz lat?" },
        { speaker: "Laura", text: "Ho tredici anni. E tu?", pl: "Mam trzynaście lat. A ty?" },
        { speaker: "Marco", text: "Io ho quattordici anni.", pl: "Ja mam czternaście lat." },
        { speaker: "Laura", text: "Qual è il tuo numero di cellulare?", pl: "Jaki jest twój numer komórki?" },
        {
          speaker: "Marco",
          text: "Il mio numero è tre, quattro, sette – dodici, quindici, diciannove.",
          pl: "Mój numer to trzy, cztery, siedem – dwanaście, piętnaście, dziewiętnaście.",
        },
        { speaker: "Laura", text: "Più piano, per favore! Puoi ripetere?", pl: "Wolniej, proszę! Możesz powtórzyć?" },
        {
          speaker: "Marco",
          text: "Tre, quattro, sette – dodici, quindici, diciannove.",
          pl: "Trzy, cztery, siedem – dwanaście, piętnaście, dziewiętnaście.",
        },
        { speaker: "Laura", text: "Grazie! Ciao, Marco!", pl: "Dzięki! Cześć, Marco!" },
      ],
    },
    {
      type: "dialogue",
      title: "Lezione di matematica",
      titlePl: "Lekcja matematyki",
      context: "Lekcja matematyki. Pani Rossi zadaje pytania.",
      cast: { "Professoressa Rossi": "f", Luca: "m", Giulia: "f" },
      lines: [
        { speaker: "Professoressa Rossi", text: "Luca, quanto fa sette più otto?", pl: "Luca, ile to jest siedem plus osiem?" },
        { speaker: "Luca", text: "Sette più otto fa quindici.", pl: "Siedem plus osiem to piętnaście." },
        { speaker: "Professoressa Rossi", text: "Giusto! Giulia, quanto fa venti meno undici?", pl: "Dobrze! Giulio, ile to jest dwadzieścia minus jedenaście?" },
        { speaker: "Giulia", text: "Venti meno undici fa … nove!", pl: "Dwadzieścia minus jedenaście to… dziewięć!" },
        { speaker: "Professoressa Rossi", text: "Brava, Giulia! È giusto.", pl: "Brawo, Giulio! To jest dobrze." },
      ],
    },
    {
      type: "vocab",
      title: "Przydatne zwroty",
      groups: [
        {
          title: "Wiek i telefon",
          items: [
            { text: "Quanti anni hai?", pl: "Ile masz lat?" },
            { text: "Ho tredici anni.", pl: "Mam trzynaście lat." },
            { text: "Quanti anni ha?", pl: "Ile pan/pani ma lat?" },
            { text: "Qual è il tuo numero?", pl: "Jaki jest twój numer?" },
            { text: "Il mio numero è …", pl: "Mój numer to …" },
            { text: "il cellulare", pl: "komórka, telefon komórkowy" },
          ],
        },
        {
          title: "Na lekcji",
          items: [
            { text: "Più piano, per favore!", pl: "Wolniej, proszę!" },
            { text: "Puoi ripetere?", pl: "Możesz powtórzyć?" },
            { text: "Quanto fa …?", pl: "Ile to jest …?" },
            { text: "più / meno", pl: "plus / minus" },
            { text: "giusto", pl: "dobrze, prawidłowo" },
            { text: "sbagliato", pl: "źle, błędnie" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "Jak tworzymy liczby 11–19?",
      paragraphs: [
        "Od 11 do 16 liczba kończy się na **-dici** (od dieci – dziesięć): un**dici**, do**dici**, tre**dici**, quattor**dici**, quin**dici**, se**dici**. Uwaga: początek nie zawsze wygląda jak jedności (quindici, a nie „cinquedici”).",
        "Od 17 do 19 jest **odwrotnie**: najpierw **dici-**, potem jedności: **dici**assette (10 + 7), **dici**otto (10 + 8), **dici**annove (10 + 9).",
      ],
      table: {
        headers: ["liczba", "po włosku", "jak powstaje"],
        rows: [
          { cells: ["11", "undici", "un + dici"], speak: "undici" },
          { cells: ["12", "dodici", "do + dici"], speak: "dodici" },
          { cells: ["13", "tredici", "tre + dici"], speak: "tredici" },
          { cells: ["14", "quattordici", "quattor + dici"], speak: "quattordici" },
          { cells: ["15", "quindici", "quin + dici (!)"], speak: "quindici" },
          { cells: ["16", "sedici", "se + dici"], speak: "sedici" },
          { cells: ["17", "diciassette", "dici + a + sette"], speak: "diciassette" },
          { cells: ["18", "diciotto", "dici + otto"], speak: "diciotto" },
          { cells: ["19", "diciannove", "dici + a + nove"], speak: "diciannove" },
        ],
      },
      tip: "Dobra wiadomość: wiek podajemy tak jak po polsku – z czasownikiem „mieć” (**avere**): **Ho tredici anni** = Mam trzynaście lat. Nie mów „Sono tredici anni”!",
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro: "W liczbach łatwo pomylić podobne dźwięki – a jedna pomyłka to inny numer telefonu! Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "ci, ce", explanation: "czytamy jak **czi**, **cze**", examples: ["cinque", "dieci", "undici"] },
        { sound: "qu", explanation: "czytamy jak **kw**", examples: ["quattro", "quindici", "quattordici"] },
        { sound: "tt", explanation: "podwójne **t** wymawiamy dłużej, z krótką pauzą", examples: ["sette", "otto", "diciotto"] },
        { sound: "z", explanation: "w „zero” czytamy jak **dz**", examples: ["zero"] },
        { sound: "sei / se-", explanation: "**sei** (6) to „sej”, a w **sedici** (16) zostaje samo **se**", examples: ["sei", "sedici"] },
        { sound: "gi", explanation: "czytamy jak **dżi**", examples: ["giusto", "oggi"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-3-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Che numero è?",
        instruction: "Kliknij ▶, posłuchaj i wybierz liczbę, którą słyszysz.",
        items: [
          { audio: "tre", options: ["3", "13", "12"], answer: 0 },
          { audio: "dodici", options: ["2", "12", "20"], answer: 1 },
          { audio: "sedici", options: ["6", "7", "16"], answer: 2 },
          { audio: "sei", options: ["6", "7", "16"], answer: 0 },
          { audio: "diciannove", options: ["9", "19", "17"], answer: 1 },
          { audio: "venti", options: ["2", "12", "20"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-3-spelling",
        kind: "choice",
        skill: "Słownictwo",
        title: "Uwaga na pisownię!",
        instruction: "Wybierz poprawny zapis liczby.",
        items: [
          { prompt: "**11**", options: ["unodici", "undici", "dodici"], answer: 1, speakOptions: true },
          { prompt: "**15**", options: ["quindici", "cinquedici", "quattordici"], answer: 0, speakOptions: true, explanation: "15 to quindici – początek nie przypomina „cinque”." },
          { prompt: "**16**", options: ["seidici", "sedici", "dicisei"], answer: 1, speakOptions: true },
          { prompt: "**17**", options: ["settedici", "diciasette", "diciassette"], answer: 2, speakOptions: true, explanation: "Od 17 najpierw dici-, potem jedności – i podwójne ss: diciassette." },
          { prompt: "**19**", options: ["diciannove", "novedici", "dicianove"], answer: 0, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-3-math",
        kind: "fill",
        skill: "Pisanie",
        title: "Policz i napisz słowem",
        instruction: "Rozwiąż działanie i wpisz wynik słowem (nie cyfrą!).",
        items: [
          { before: "tre più quattro fa", after: ".", answers: ["sette"] },
          { before: "dieci meno due fa", after: ".", answers: ["otto"] },
          { before: "sei più sei fa", after: ".", answers: ["dodici"] },
          { before: "nove più otto fa", after: ".", answers: ["diciassette"] },
          { before: "venti meno cinque fa", after: ".", answers: ["quindici"] },
          { before: "undici più cinque fa", after: ".", answers: ["sedici"] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-3-phone",
        kind: "listen",
        skill: "Słuchanie",
        title: "Zapisz numer telefonu",
        instruction:
          "Posłuchaj numeru telefonu i wybierz, który został zapisany poprawnie. Jeśli mówi za szybko – włącz wolne tempo lektora w górnym menu.",
        items: [
          { audio: "tre, quattro, sette – dodici, quindici, diciannove", options: ["347 12 15 19", "374 12 15 19", "347 20 15 19"], answer: 0 },
          { audio: "tre, tre, otto – tredici, quattordici, diciotto", options: ["383 13 14 18", "338 13 14 18", "338 3 14 18"], answer: 1 },
          { audio: "tre, due, zero – undici, sedici, venti", options: ["320 11 16 20", "320 12 16 20", "320 11 6 20"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-3-phrases",
        kind: "choice",
        skill: "Mówienie",
        title: "Cosa dici? – Co powiesz?",
        instruction: "Przeczytaj sytuację i wybierz właściwą reakcję.",
        items: [
          { prompt: "Ktoś podaje ci numer telefonu, ale mówi za szybko.", options: ["Più piano, per favore!", "Giusto!", "Buonanotte!"], answer: 0, speakOptions: true },
          { prompt: "Nie usłyszałeś/-aś. Prosisz, żeby kolega powtórzył.", options: ["Quanti anni hai?", "Puoi ripetere?", "Sono nuova."], answer: 1, speakOptions: true },
          {
            prompt: "Chcesz powiedzieć, że masz 13 lat.",
            options: ["Sono tredici anni.", "Ho tredici anni."],
            answer: 1,
            speakOptions: true,
            explanation: "Po włosku, tak jak po polsku, wiek „się ma”: Ho tredici anni.",
          },
          { prompt: "Kolega mówi: „Otto più quattro fa dodici.” Co odpowiesz?", speak: "Otto più quattro fa dodici.", options: ["Sbagliato!", "Giusto!"], answer: 1, speakOptions: true },
          { prompt: "Chcesz zapytać nauczyciela, ile ma lat (choć to niegrzeczne 😉).", options: ["Quanti anni hai?", "Quanti anni ha?"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-3-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["anni", "hai", "Quanti"], answer: "Quanti anni hai?", pl: "Ile masz lat?" },
          { words: ["anni", "quattordici", "Ho"], answer: "Ho quattordici anni.", pl: "Mam czternaście lat." },
          { words: ["ha", "Quanti", "Marco", "anni"], answer: "Quanti anni ha Marco?", pl: "Ile lat ma Marco?" },
          { words: ["il", "numero", "è", "Qual", "tuo"], answer: "Qual è il tuo numero?", pl: "Jaki jest twój numer?" },
        ],
      },
    },
    {
      type: "culture",
      title: "Cultura – pechowa siedemnastka",
      paragraphs: [
        "We Włoszech pechowa jest nie trzynastka, tylko **siedemnastka**! Liczba 17 zapisana po rzymsku to **XVII** – a po przestawieniu liter wychodzi **VIXI**, po łacinie „żyłem”, czyli… „już nie żyję”. Dlatego **venerdì diciassette** (piątek siedemnastego) to dla Włochów najbardziej pechowy dzień.",
        "We włoskich szkołach oceny są w skali **od 1 do 10**. **Sei** (6) to ocena dostateczna – wystarczy, żeby zdać. **Dieci** (10) to ocena najlepsza.",
      ],
      examples: [
        { text: "venerdì diciassette", pl: "piątek siedemnastego (pechowy dzień)" },
        { text: "Ho preso dieci!", pl: "Dostałem/-am dziesiątkę! (najlepsza ocena)" },
        { text: "Ho preso sei.", pl: "Dostałem/-am szóstkę. (= zdane, ale tylko na dostateczny)" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "it-1-3-write",
        kind: "write",
        skill: "Mówienie",
        title: "Adesso tu! Przedstaw się – wersja rozszerzona",
        instruction:
          "Połącz wszystko, czego nauczyłeś/-aś się w rozdziale 1. Napisz kilka zdań o sobie, posłuchaj ich i przeczytaj na głos. Numer telefonu możesz wymyślić!",
        checklist: ["przywitaj się i podaj imię", "napisz, skąd jesteś", "napisz, ile masz lat", "podaj (wymyślony) numer telefonu"],
        placeholder: "Ciao! Mi chiamo … Ho … anni.",
        model: "Ciao! Mi chiamo Laura. Sono polacca, di Cracovia. Ho tredici anni. Il mio numero è tre, quattro, sette – dodici, quindici, diciannove.",
        modelPl:
          "Cześć! Mam na imię Laura. Jestem Polką, z Krakowa. Mam trzynaście lat. Mój numer to trzy, cztery, siedem – dwanaście, piętnaście, dziewiętnaście.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem policzyć od 0 do 20 bez patrzenia w tabelkę.",
        "Wiem, że 11–16 kończą się na -dici, a 17–19 zaczynają się od dici-.",
        "Umiem powiedzieć, ile mam lat (Ho … anni).",
        "Umiem podać i zrozumieć numer telefonu.",
        "Umiem poprosić: Più piano, per favore! / Puoi ripetere?",
      ],
    },
  ],
};
