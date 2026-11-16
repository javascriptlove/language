import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "els-nombres-0-20",
  chapter: 1,
  number: 3,
  title: "Els nombres del 0 al 20",
  titlePl: "Liczby od 0 do 20",
  intro:
    "Carla wymienia się numerem telefonu z Jordim, a na matematyce pan Ferrer sprawdza, kto umie liczyć po katalońsku. Som-hi – u, dos, tres!",
  blocks: [
    {
      type: "goals",
      items: [
        "liczyć od 0 do 20,",
        "wybrać formę un / una i dos / dues,",
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
            { text: "u / un / una", pl: "1 (przy liczeniu / przed rzeczownikiem rodzaju męskiego / żeńskiego)" },
            { text: "dos / dues", pl: "2 (rodzaj męski / żeński)" },
            { text: "tres", pl: "3" },
            { text: "quatre", pl: "4" },
            { text: "cinc", pl: "5" },
            { text: "sis", pl: "6" },
            { text: "set", pl: "7" },
            { text: "vuit", pl: "8" },
            { text: "nou", pl: "9" },
            { text: "deu", pl: "10" },
          ],
        },
        {
          title: "11–20",
          items: [
            { text: "onze", pl: "11" },
            { text: "dotze", pl: "12" },
            { text: "tretze", pl: "13" },
            { text: "catorze", pl: "14" },
            { text: "quinze", pl: "15" },
            { text: "setze", pl: "16" },
            { text: "disset", pl: "17" },
            { text: "divuit", pl: "18" },
            { text: "dinou", pl: "19" },
            { text: "vint", pl: "20" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Quants anys tens?",
      titlePl: "Ile masz lat?",
      context: "Po lekcjach. Jordi i Carla chcą się umówić na wspólną naukę.",
      cast: { Jordi: "m", Carla: "f" },
      lines: [
        { speaker: "Jordi", text: "Carla, quants anys tens?", pl: "Carlo, ile masz lat?" },
        { speaker: "Carla", text: "Tinc tretze anys. I tu?", pl: "Mam trzynaście lat. A ty?" },
        { speaker: "Jordi", text: "Jo també tinc tretze anys. El Pau té catorze anys.", pl: "Ja też mam trzynaście lat. Pau ma czternaście lat." },
        { speaker: "Carla", text: "Quin és el teu número de mòbil?", pl: "Jaki jest twój numer komórki?" },
        { speaker: "Jordi", text: "Sis, u, nou – dotze, disset – zero, vuit.", pl: "Sześć, jeden, dziewięć – dwanaście, siedemnaście – zero, osiem." },
        { speaker: "Carla", text: "Més a poc a poc, si us plau! Pots repetir-ho?", pl: "Wolniej, proszę! Możesz powtórzyć?" },
        { speaker: "Jordi", text: "Sis, u, nou – dotze, disset – zero, vuit.", pl: "Sześć, jeden, dziewięć – dwanaście, siedemnaście – zero, osiem." },
        { speaker: "Carla", text: "Gràcies! Fins després, Jordi!", pl: "Dzięki! Na razie, Jordi!" },
      ],
    },
    {
      type: "dialogue",
      title: "Classe de matemàtiques",
      titlePl: "Lekcja matematyki",
      context: "Lekcja matematyki. Pan Ferrer zadaje pytania.",
      cast: { "Senyor Ferrer": "m", Pau: "m", "Núria": "f", Carla: "f" },
      lines: [
        { speaker: "Senyor Ferrer", text: "Pau, quant fan set més vuit?", pl: "Pau, ile to jest siedem plus osiem?" },
        { speaker: "Pau", text: "Set més vuit fan quinze.", pl: "Siedem plus osiem to piętnaście." },
        { speaker: "Senyor Ferrer", text: "Correcte! Núria, quant fan vint menys onze?", pl: "Dobrze! Núrio, ile to jest dwadzieścia minus jedenaście?" },
        { speaker: "Núria", text: "Vint menys onze fan… nou!", pl: "Dwadzieścia minus jedenaście to… dziewięć!" },
        { speaker: "Senyor Ferrer", text: "Molt bé! I tu, Carla? Quantes llengües parles?", pl: "Bardzo dobrze! A ty, Carlo? Iloma językami mówisz?" },
        { speaker: "Carla", text: "Parlo dues llengües: polonès i anglès. I ara una mica de català!", pl: "Mówię dwoma językami: po polsku i po angielsku. A teraz trochę po katalońsku!" },
      ],
    },
    {
      type: "vocab",
      title: "Przydatne zwroty",
      groups: [
        {
          title: "Wiek i telefon",
          items: [
            { text: "Quants anys tens?", pl: "Ile masz lat?" },
            { text: "Tinc tretze anys.", pl: "Mam trzynaście lat." },
            { text: "Quants anys té vostè?", pl: "Ile pan/pani ma lat?" },
            { text: "Quin és el teu número?", pl: "Jaki jest twój numer?" },
            { text: "El meu número és …", pl: "Mój numer to …" },
            { text: "el mòbil", pl: "komórka" },
          ],
        },
        {
          title: "Na lekcji",
          items: [
            { text: "Més a poc a poc, si us plau!", pl: "Wolniej, proszę!" },
            { text: "Pots repetir-ho?", pl: "Możesz powtórzyć?" },
            { text: "si us plau", pl: "proszę (gdy o coś prosisz)" },
            { text: "Quant fan …?", pl: "Ile to jest …?" },
            { text: "més / menys", pl: "plus / minus" },
            { text: "Correcte!", pl: "Dobrze! Prawidłowo!" },
            { text: "No és correcte.", pl: "Źle. To nie jest dobrze." },
          ],
        },
        {
          title: "Kto?",
          items: [
            { text: "un noi / dos nois", pl: "chłopak / dwóch chłopaków" },
            { text: "una noia / dues noies", pl: "dziewczyna / dwie dziewczyny" },
            { text: "un amic / una amiga", pl: "kolega / koleżanka" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "Liczby 11–20 i dwie formy „jeden” i „dwa”",
      paragraphs: [
        "Liczby od 11 do 16 to **osobne słowa** zakończone na **-ze**: on**ze**, dot**ze**, tret**ze**, cator**ze**, quin**ze**, set**ze**. Trzeba je zapamiętać.",
        "17, 18 i 19 tworzymy z **di-** (od deu) i jedności, razem w jednym słowie: **dis-set** → **disset**, **di-vuit** → **divuit**, **di-nou** → **dinou**. Uwaga: w disset piszemy **podwójne s**!",
        "Liczby 1 i 2 mają – jak po polsku – **formę męską i żeńską**: **un** noi, **una** noia; **dos** nois, **dues** noies. Gdy po prostu liczymy (u, dos, tres…) albo podajemy numer telefonu, mówimy **u** i **dos**.",
      ],
      table: {
        headers: ["", "rodzaj męski", "rodzaj żeński"],
        rows: [
          { cells: ["1", "un noi, un amic", "una noia, una amiga"], speak: "un noi, una noia" },
          { cells: ["2", "dos nois, dos amics", "dues noies, dues llengües"], speak: "dos nois, dues noies" },
          { cells: ["3–20", "tres nois", "tres noies"], speak: "tres nois, tres noies" },
        ],
      },
      examples: [
        { text: "Parlo dues llengües.", pl: "Mówię dwoma językami." },
        { text: "Tinc tretze anys.", pl: "Mam trzynaście lat." },
        { text: "Set més vuit fan quinze.", pl: "Siedem plus osiem to piętnaście." },
      ],
      tip: "Wiek podajemy jak po polsku – z czasownikiem „mieć” (**tenir**): **Tinc tretze anys** = Mam trzynaście lat. Nie mów „Soc tretze anys”! Pytanie też dopasowuje się do rodzaju: **Quants** anys? (any – rodzaj męski), ale **Quantes** llengües? (llengua – rodzaj żeński).",
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro: "W liczbach łatwo pomylić podobne dźwięki – a jedna pomyłka to inny numer telefonu! Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "tz", explanation: "czytamy jak polskie **dz**", examples: ["dotze", "tretze", "setze"] },
        { sound: "z", explanation: "czytamy jak polskie **z** (nie jak hiszpańskie th!)", examples: ["zero", "onze", "quinze"] },
        { sound: "-u po samogłosce", explanation: "czytamy jak **ł**", examples: ["deu", "nou", "dinou"] },
        { sound: "v, ui", explanation: "**v** brzmi jak **b**, a **ui** jak **uj**", examples: ["vuit", "divuit", "vint"] },
        { sound: "qua", explanation: "czytamy jak **kła**", examples: ["quatre", "quants", "quant"] },
        { sound: "-nt na końcu", explanation: "w Barcelonie końcowe **t** po **n** jest nieme", examples: ["vint", "quant"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-3-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Quin número és?",
        instruction: "Kliknij ▶, posłuchaj i wybierz liczbę, którą słyszysz.",
        items: [
          { audio: "tres", options: ["3", "13", "12"], answer: 0 },
          { audio: "dotze", options: ["2", "12", "20"], answer: 1 },
          { audio: "setze", options: ["6", "7", "16"], answer: 2 },
          { audio: "set", options: ["6", "7", "17"], answer: 1 },
          { audio: "dinou", options: ["9", "19", "17"], answer: 1 },
          { audio: "vint", options: ["2", "12", "20"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-3-gender",
        kind: "choice",
        skill: "Gramatyka",
        title: "Un o una? Dos o dues?",
        instruction: "Wybierz właściwą formę. Pamiętaj: noi, amic, any – rodzaj męski; noia, amiga, llengua – rodzaj żeński.",
        items: [
          { prompt: "___ noia", options: ["un", "una"], answer: 1, speakOptions: true },
          { prompt: "___ noies", options: ["dos", "dues"], answer: 1, speakOptions: true },
          { prompt: "___ nois", options: ["dos", "dues"], answer: 0, speakOptions: true },
          { prompt: "___ amic", options: ["un", "una"], answer: 0, speakOptions: true },
          {
            prompt: "Parlo ___ llengües: polonès i anglès.",
            options: ["dues", "dos"],
            answer: 0,
            speakOptions: true,
            explanation: "llengua (język) jest rodzaju żeńskiego, więc: dues llengües.",
          },
          {
            prompt: "___ anys tens?",
            options: ["Quantes", "Quants"],
            answer: 1,
            speakOptions: true,
            explanation: "any (rok) jest rodzaju męskiego: Quants anys tens?",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-3-math",
        kind: "fill",
        skill: "Pisanie",
        title: "Policz i napisz słowem",
        instruction: "Rozwiąż działanie i wpisz wynik słowem (nie cyfrą!).",
        items: [
          { before: "Tres més quatre fan", after: ".", answers: ["set"] },
          { before: "Deu menys dos fan", after: ".", answers: ["vuit"] },
          { before: "Sis més sis fan", after: ".", answers: ["dotze"] },
          { before: "Nou més vuit fan", after: ".", answers: ["disset"] },
          { before: "Vint menys cinc fan", after: ".", answers: ["quinze"] },
          { before: "Onze més cinc fan", after: ".", answers: ["setze"] },
          { before: "Deu més nou fan", after: ".", answers: ["dinou"] },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-3-phone",
        kind: "listen",
        skill: "Słuchanie",
        title: "Zapisz numer telefonu",
        instruction:
          "Posłuchaj numeru telefonu i wybierz, który został zapisany poprawnie. Jeśli lektor mówi za szybko – włącz wolne tempo w górnym menu.",
        items: [
          { audio: "sis, u, nou – dotze, disset – zero, vuit", options: ["619 12 17 08", "691 12 17 08", "619 12 70 08"], answer: 0 },
          { audio: "sis, tres, zero – tretze, catorze – divuit", options: ["603 13 14 18", "630 13 14 18", "630 13 40 18"], answer: 1 },
          { audio: "sis, cinc, zero – onze, setze – vint", options: ["650 12 16 20", "650 11 06 20", "650 11 16 20"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-3-phrases",
        kind: "choice",
        skill: "Mówienie",
        title: "Què dius? – Co powiesz?",
        instruction: "Przeczytaj sytuację i wybierz właściwą reakcję.",
        items: [
          { prompt: "Ktoś podaje ci numer telefonu, ale mówi za szybko.", options: ["Més a poc a poc, si us plau!", "Correcte!", "Bona nit!"], answer: 0, speakOptions: true },
          { prompt: "Nie usłyszałeś/-aś. Prosisz, żeby kolega powtórzył.", options: ["Quants anys tens?", "Pots repetir-ho?", "Soc nova."], answer: 1, speakOptions: true },
          {
            prompt: "Chcesz powiedzieć, że masz 13 lat.",
            options: ["Soc tretze anys.", "Tinc tretze anys."],
            answer: 1,
            speakOptions: true,
            explanation: "Po katalońsku, tak jak po polsku, wiek się „ma”: Tinc tretze anys.",
          },
          {
            prompt: "Kolega mówi: „Set més cinc fan dotze.” Co odpowiesz?",
            speak: "Set més cinc fan dotze.",
            options: ["No és correcte.", "Correcte!"],
            answer: 1,
            speakOptions: true,
          },
          {
            prompt: "Chcesz zapytać pana Ferrera, ile ma lat (choć to niegrzeczne 😉).",
            options: ["Quants anys tens?", "Quants anys té vostè?"],
            answer: 1,
            speakOptions: true,
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-3-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["anys", "tens?", "Quants"], answer: "Quants anys tens?", pl: "Ile masz lat?" },
          { words: ["anys", "catorze", "Tinc"], answer: "Tinc catorze anys.", pl: "Mam czternaście lat." },
          { words: ["té", "Quants", "Pau?", "anys", "el"], answer: "Quants anys té el Pau?", pl: "Ile lat ma Pau?" },
          { words: ["el", "número?", "és", "Quin", "teu"], answer: "Quin és el teu número?", pl: "Jaki jest twój numer?" },
        ],
      },
    },
    {
      type: "culture",
      title: "Cultura – castells i números",
      paragraphs: [
        "**Castells** to katalońskie **wieże z ludzi** – ustawiają się jedni na ramionach drugich, a na sam szczyt wspina się małe dziecko (**l'enxaneta**) i podnosi rękę. Od 2010 roku castells są na liście niematerialnego dziedzictwa ludzkości UNESCO.",
        "Nazwa każdej wieży to… dwie liczby! **Un quatre de vuit** to wieża, w której na każdym poziomie stoją **4** osoby, a poziomów jest **8**. Dół wieży, czyli tłum podtrzymujących ją ludzi, to **la pinya**.",
        "A telefony? Hiszpańskie numery komórkowe mają 9 cyfr i zaczynają się od **6** albo **7**. Telefony stacjonarne w Barcelonie zaczynają się od **93**. Numer alarmowy to – jak w Polsce – **112** (u, u, dos).",
      ],
      examples: [
        { text: "un castell", pl: "wieża z ludzi (dosłownie: zamek)" },
        { text: "un quatre de vuit", pl: "wieża 4 × 8 (4 osoby, 8 poziomów)" },
        { text: "l'enxaneta", pl: "dziecko na szczycie wieży" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-1-3-write",
        kind: "write",
        skill: "Mówienie",
        title: "Ara tu! Przedstaw się – wersja rozszerzona",
        instruction:
          "Połącz wszystko, czego nauczyłeś/-aś się w rozdziale 1. Napisz kilka zdań o sobie, posłuchaj ich i przeczytaj na głos. Numer telefonu możesz wymyślić!",
        checklist: ["przywitaj się i podaj imię", "napisz, skąd jesteś", "napisz, ile masz lat i iloma językami mówisz", "podaj (wymyślony) numer telefonu"],
        placeholder: "Hola! Em dic … Tinc … anys.",
        model:
          "Hola! Em dic Carla. Soc polonesa, de Cracòvia. Tinc tretze anys. Parlo dues llengües: polonès i anglès. El meu número és sis, u, nou – dotze, disset – zero, vuit.",
        modelPl:
          "Cześć! Mam na imię Carla. Jestem Polką, z Krakowa. Mam trzynaście lat. Mówię dwoma językami: po polsku i po angielsku. Mój numer to sześć, jeden, dziewięć – dwanaście, siedemnaście – zero, osiem.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem policzyć od 0 do 20 bez patrzenia w tabelkę.",
        "Wiem, kiedy mówić un / una i dos / dues.",
        "Umiem powiedzieć, ile mam lat (Tinc … anys).",
        "Umiem podać i zrozumieć numer telefonu.",
        "Umiem poprosić: Més a poc a poc, si us plau! / Pots repetir-ho?",
      ],
    },
  ],
};
