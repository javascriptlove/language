import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-8",
  chapter: 8,
  number: 4,
  title: "Wiederholung – Kapitel 8",
  titlePl: "Powtórka z rozdziału 8",
  intro:
    "Ostatnia powtórka w tym roku! Zrób ją dzień lub dwa po skończeniu rozdziału 8: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: pogoda, miesiące i im / am / um – „Wie ist das Wetter?”, daty, urodziny i zaproszenia – „Wann hast du Geburtstag?”, święta, życzenia i mit / bei – „Frohe Weihnachten!”.",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać pogodę i pory roku,",
        "podać datę i powiedzieć, kiedy masz urodziny,",
        "używać um / am / im i liczebników porządkowych,",
        "złożyć życzenia na urodziny i święta,",
        "opowiedzieć, jak i z kim świętujesz.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: pogoda, miesiące i im / am / um",
      paragraphs: [
        "Pogoda – zawsze z **es**: **Es regnet. Es schneit. Es ist kalt.** Po czasie lub miejscu es idzie za czasownik: Heute **regnet es**. Temperatura: **Es sind** zehn Grad. Ale: **Die Sonne scheint.** → lekcja „Wie ist das Wetter?”",
        "**um** + godzina, **am** + dzień / pora dnia / data, **im** + miesiąc / pora roku. Kolejność: am Freitag **um** neun. → lekcja „Wie ist das Wetter?”",
      ],
      table: {
        headers: ["przyimek", "przykład", "po polsku"],
        rows: [
          { cells: ["um", "um acht Uhr", "o ósmej"], speak: "um acht Uhr" },
          { cells: ["am", "am Montag, am Abend", "w poniedziałek, wieczorem"], speak: "am Montag, am Abend" },
          { cells: ["am", "am dritten März", "trzeciego marca"], speak: "am dritten März" },
          { cells: ["im", "im Juli, im Sommer", "w lipcu, latem"], speak: "im Juli, im Sommer" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: liczebniki porządkowe i daty",
      paragraphs: [
        "1–19: **-te**, od 20: **-ste**. Wyjątki: der **erste**, der **dritte**, der **siebte**, der **achte**. → lekcja „Wann hast du Geburtstag?”",
        "Jaki dzień? – **der** zwölf**te** November. Kiedy? – **am** zwölf**ten** November. Wiek w urodziny: Ich **werde** vierzehn (du **wirst**, er **wird**). Zapraszanie: Ich **lade** dich **ein** (er **lädt** … ein). → lekcja „Wann hast du Geburtstag?”",
      ],
      table: {
        headers: ["data", "Heute ist …", "Wann? – am …"],
        rows: [
          { cells: ["1.1.", "der erste Januar", "am ersten Januar"], speak: "der erste Januar, am ersten Januar" },
          { cells: ["3.3.", "der dritte März", "am dritten März"], speak: "der dritte März, am dritten März" },
          { cells: ["11.11.", "der elfte November", "am elften November"], speak: "der elfte November, am elften November" },
          { cells: ["24.12.", "der vierundzwanzigste Dezember", "am vierundzwanzigsten Dezember"], speak: "der vierundzwanzigste Dezember, am vierundzwanzigsten Dezember" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: święta, życzenia, mit i bei",
      paragraphs: [
        "Święta: **an** Weihnachten, **an** Ostern, **an** Silvester – ale **am** Heiligabend, **am** 24. Dezember. Życzenia uczysz się w całości: **Frohe Weihnachten! Guten Rutsch! Frohes neues Jahr! Frohe Ostern! Herzlichen Glückwunsch zum Geburtstag!** → lekcja „Frohe Weihnachten!”",
        "**mit** (z) i **bei** (u) + celownik: mit mein**em** Vater, mit mein**er** Familie, mit mein**en** Eltern, bei Oma, **bei uns in Polen**. → lekcja „Frohe Weihnachten!”",
      ],
      table: {
        headers: ["zdanie", "po polsku"],
        rows: [
          { cells: ["Ich feiere mit meiner Familie.", "Świętuję z rodziną."], speak: "Ich feiere mit meiner Familie." },
          { cells: ["Am Heiligabend sind wir bei Oma.", "W Wigilię jesteśmy u babci."], speak: "Am Heiligabend sind wir bei Oma." },
          { cells: ["Paul fliegt mit seinen Eltern nach Wien.", "Paul leci z rodzicami do Wiednia."], speak: "Paul fliegt mit seinen Eltern nach Wien." },
          { cells: ["Bei uns in Polen gibt es zwölf Gerichte.", "U nas w Polsce jest dwanaście potraw."], speak: "Bei uns in Polen gibt es zwölf Gerichte." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Wie ist das Wetter?",
          items: [
            { text: "der Frühling, der Sommer, der Herbst, der Winter", pl: "wiosna, lato, jesień, zima" },
            { text: "Januar, Februar, März, April, Mai, Juni", pl: "styczeń, luty, marzec, kwiecień, maj, czerwiec" },
            { text: "Juli, August, September, Oktober, November, Dezember", pl: "lipiec, sierpień, wrzesień, październik, listopad, grudzień" },
            { text: "Es regnet. / Es schneit. / Die Sonne scheint.", pl: "Pada deszcz. / Pada śnieg. / Świeci słońce." },
            { text: "sonnig, bewölkt, windig", pl: "słonecznie, pochmurno, wietrznie" },
            { text: "warm, heiß, kühl, kalt", pl: "ciepło, gorąco, chłodno, zimno" },
            { text: "Es sind 20 Grad.", pl: "Jest 20 stopni." },
          ],
        },
        {
          title: "Wann hast du Geburtstag?",
          items: [
            { text: "Wann hast du Geburtstag?", pl: "Kiedy masz urodziny?" },
            { text: "Der Wievielte ist heute?", pl: "Którego jest dzisiaj?" },
            { text: "Herzlichen Glückwunsch! / Alles Gute!", pl: "Wszystkiego najlepszego! / Wszystkiego dobrego!" },
            { text: "Wie alt wirst du? – Ich werde …", pl: "Ile lat kończysz? – Kończę …" },
            { text: "die Party, die Einladung, einladen", pl: "impreza, zaproszenie, zapraszać" },
            { text: "Darf ich …?", pl: "Czy mogę …?" },
          ],
        },
        {
          title: "Frohe Weihnachten!",
          items: [
            { text: "Weihnachten, Heiligabend, Silvester", pl: "Boże Narodzenie, Wigilia, sylwester" },
            { text: "Neujahr, Ostern, Karneval", pl: "Nowy Rok, Wielkanoc, karnawał" },
            { text: "Frohe Weihnachten! / Guten Rutsch!", pl: "Wesołych świąt! / Szczęśliwego Nowego Roku!" },
            { text: "der Weihnachtsbaum, das Feuerwerk", pl: "choinka, fajerwerki" },
            { text: "feiern, die Ferien", pl: "świętować, ferie" },
            { text: "mit meiner Familie / bei Oma", pl: "z rodziną / u babci" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Frohes neues Jahr!",
      titlePl: "Szczęśliwego Nowego Roku!",
      context: "Pierwszy stycznia. Przyjaciele łączą się na czacie wideo – każdy z innego miejsca.",
      cast: { Anna: "f", Julia: "f", Paul: "m", Lukas: "m" },
      lines: [
        { speaker: "Anna", text: "Hallo zusammen! Frohes neues Jahr!", pl: "Cześć wszystkim! Szczęśliwego Nowego Roku!" },
        { speaker: "Julia", text: "Frohes neues Jahr! Ich bin noch in Krakau. Hier schneit es den ganzen Tag!", pl: "Szczęśliwego Nowego Roku! Jestem jeszcze w Krakowie. Tu cały dzień pada śnieg!" },
        { speaker: "Paul", text: "In Wien ist es sonnig, aber sehr kalt – minus sechs Grad.", pl: "W Wiedniu jest słonecznie, ale bardzo zimno – minus sześć stopni." },
        { speaker: "Lukas", text: "Und in Berlin regnet es natürlich. Typisch!", pl: "A w Berlinie oczywiście pada. Typowe!" },
        { speaker: "Anna", text: "Julia, wie ist es bei Oma und Opa?", pl: "Julio, jak jest u babci i dziadka?" },
        { speaker: "Julia", text: "Super! Oma backt jeden Tag Kuchen. Ich esse zu viel!", pl: "Super! Babcia codziennie piecze ciasto. Jem za dużo!" },
        { speaker: "Paul", text: "Lukas, und Silvester am Brandenburger Tor?", pl: "Lukas, a sylwester pod Bramą Brandenburską?" },
        { speaker: "Lukas", text: "Toll! Mein Vater und ich sehen das Feuerwerk jedes Jahr. Aber um Mitternacht bin ich immer so müde…", pl: "Świetnie! Mój tata i ja co roku oglądamy fajerwerki. Ale o północy zawsze jestem taki zmęczony…" },
        { speaker: "Anna", text: "Wann fängt die Schule wieder an?", pl: "Kiedy znowu zaczyna się szkoła?" },
        { speaker: "Julia", text: "Am Montag, am vierten Januar. Bis dann!", pl: "W poniedziałek, czwartego stycznia. Do zobaczenia!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-8-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Nowy Rok",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Gdzie jest Julia?", options: ["w Berlinie", "w Krakowie", "w Wiedniu"], answer: 1 },
          { prompt: "Jaka jest pogoda w Wiedniu?", options: ["słonecznie, ale bardzo zimno", "pada śnieg", "pada deszcz"], answer: 0 },
          { prompt: "Jaka jest pogoda w Berlinie?", options: ["słonecznie", "pada deszcz", "pada śnieg"], answer: 1 },
          { prompt: "Co codziennie robi babcia Julii?", options: ["lepi bałwana", "piecze ciasto", "gotuje pierogi"], answer: 1 },
          { prompt: "Z kim Lukas co roku ogląda fajerwerki?", options: ["z Paulem", "z tatą", "z chomikami"], answer: 1 },
          { prompt: "Kiedy znowu zaczyna się szkoła?", options: ["w poniedziałek, 4 stycznia", "w środę, 6 stycznia", "w poniedziałek, 14 stycznia"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-8-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Im Oktober ist es oft windig.", options: ["W październiku często wieje.", "W sierpniu często pada.", "W październiku jest ciepło."], answer: 0 },
          { audio: "Heute ist der einunddreißigste Dezember.", options: ["Dziś jest 13 grudnia.", "Dziś jest 31 grudnia.", "Dziś jest 21 grudnia."], answer: 1 },
          { audio: "Ich habe am achten Mai Geburtstag.", options: ["Mam urodziny 18 maja.", "Mam urodziny 8 marca.", "Mam urodziny 8 maja."], answer: 2 },
          { audio: "Wie alt wirst du?", options: ["Ile lat kończysz?", "Ile masz lat?", "Kiedy masz urodziny?"], answer: 0 },
          { audio: "Wir feiern bei meinen Großeltern.", options: ["Świętujemy z dziadkami.", "Świętujemy u dziadków.", "Dziadkowie świętują u nas."], answer: 1 },
          { audio: "Es sind minus zehn Grad.", options: ["Jest dziesięć stopni.", "Jest minus dwa stopnie.", "Jest minus dziesięć stopni."], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-8-4-fill",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij",
        instruction: "Uzupełnij brakujące słowo (es, um, am, im, mit, bei…).",
        items: [
          { before: "Im Winter schneit", after: "oft.", answers: ["es"], hint: "pogoda" },
          { before: "Julia hat", after: "dritten März Geburtstag.", answers: ["am"], hint: "data" },
          { before: "", after: "Sommer ist es heiß.", answers: ["Im"], hint: "pora roku" },
          { before: "Die Party fängt", after: "vier Uhr an.", answers: ["um"], hint: "godzina" },
          { before: "Heute ist der", after: "Januar. (1.)", answers: ["erste"], hint: "jaki dzień?" },
          { before: "Ich feiere Silvester", after: "meinen Freunden.", answers: ["mit"], hint: "z kim?" },
          { before: "Am Heiligabend sind wir", after: "Oma.", answers: ["bei"], hint: "u kogo?" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-8-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Dziś pada.", options: ["Heute regnet.", "Heute regnet es.", "Heute es regnet."], answer: 1, explanation: "Pogoda zawsze z es – i es za czasownikiem, bo na 1. miejscu jest heute." },
          { prompt: "Jest dwadzieścia stopni.", options: ["Es ist zwanzig Grad.", "Es sind zwanzig Grad.", "Es hat zwanzig Grade."], answer: 1 },
          { prompt: "W maju mam urodziny.", options: ["Am Mai habe ich Geburtstag.", "Im Mai habe ich Geburtstag.", "Um Mai habe ich Geburtstag."], answer: 1 },
          { prompt: "Mam urodziny trzeciego kwietnia.", options: ["Ich habe am dritten April Geburtstag.", "Ich habe am dreiten April Geburtstag.", "Ich habe der dritte April Geburtstag."], answer: 0 },
          { prompt: "Świętuję z rodziną.", options: ["Ich feiere mit meine Familie.", "Ich feiere mit meiner Familie.", "Ich feiere bei meine Familie."], answer: 1, explanation: "mit + celownik: die Familie → meiner Familie." },
          { prompt: "Jest 29 grudnia. Życzysz koledze:", options: ["Frohes neues Jahr!", "Guten Rutsch!", "Frohe Ostern!"], answer: 1, explanation: "Przed sylwestrem – Guten Rutsch!" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-8-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["schneit", "Winter", "es", "Im", "oft"], answer: "Im Winter schneit es oft.", pl: "Zimą często pada śnieg." },
          { words: ["Wievielte", "heute", "Der", "ist"], answer: "Der Wievielte ist heute?", pl: "Którego jest dzisiaj?" },
          { words: ["Mai", "am", "Geburtstag", "habe", "ersten", "Ich"], answer: "Ich habe am ersten Mai Geburtstag.", pl: "Mam urodziny pierwszego maja.", },
          { words: ["Weihnachten", "Familie", "Wir", "mit", "feiern", "der"], answer: "Wir feiern Weihnachten mit der Familie.", pl: "Świętujemy Boże Narodzenie z rodziną." },
          { words: ["Jahr", "neues", "Frohes"], answer: "Frohes neues Jahr!", pl: "Szczęśliwego Nowego Roku!" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-8-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 8",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 8 jest zaliczony – a razem z nim cały materiał klasy 7!",
        items: [
          { prompt: "**der Herbst** to …", options: ["wiosna", "lato", "jesień"], answer: 2 },
          { prompt: "Który miesiąc jest po **Juni**?", options: ["Juli", "Mai", "August"], answer: 0, speakOptions: true },
          { prompt: "**Es ist bewölkt** znaczy …", options: ["jest wietrznie", "jest pochmurno", "pada śnieg"], answer: 1 },
          { prompt: "Wir fahren ___ Freitag ___ neun Uhr.", options: ["am … um", "im … am", "um … am"], answer: 0 },
          { prompt: "Heute ist der ___ Juli. (7.)", options: ["siebente", "siebte", "siebten"], answer: 1 },
          { prompt: "Ich habe am ___ Oktober Geburtstag. (20.)", options: ["zwanzigsten", "zwanzigten", "zwanzigste"], answer: 0 },
          { prompt: "Wie alt ___ du morgen?", options: ["wirst", "wird", "werdest"], answer: 0 },
          { prompt: "Anna ___ uns zur Party ___ .", options: ["ladet … ein", "lädt … ein", "einlädt … –"], answer: 1 },
          { prompt: "Ich fahre ___ meinen Eltern nach Krakau.", options: ["bei", "mit", "für"], answer: 1 },
          { prompt: "Co to jest **der Heiligabend**?", options: ["sylwester", "Wigilia", "Wielkanoc"], answer: 1, explanation: "Der Heiligabend – Wigilia, 24 grudnia (lekcja „Frohe Weihnachten!”)." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-8-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Mój rok",
        instruction:
          "Opowiedz o swoim roku (8–10 zdań): ulubiona pora roku i pogoda, twoje urodziny i ulubione święto. Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "napisz, jaka jest twoja ulubiona pora roku i jaka jest wtedy pogoda (im …, es …)",
          "napisz, kiedy masz urodziny (am … ) i ile lat kończysz",
          "napisz, jak świętujesz urodziny",
          "opisz swoje ulubione święto: kiedy, z kim, u kogo (mit, bei)",
          "użyj co najmniej raz um, am i im",
        ],
        placeholder: "Meine Lieblingsjahreszeit ist …",
        model:
          "Meine Lieblingsjahreszeit ist der Winter. Im Dezember und im Januar ist es kalt und manchmal schneit es. Dann baue ich mit Jan einen Schneemann. Ich habe am dritten März Geburtstag. Dieses Jahr werde ich vierzehn. Ich mache eine Party und lade meine Freunde ein – die Party fängt um drei Uhr an. Mein Lieblingsfest ist Weihnachten. Am vierundzwanzigsten Dezember sind wir bei Oma und Opa in Krakau. Wir essen zusammen und am Abend gibt es die Geschenke. An Silvester feiere ich mit meiner Familie und um Mitternacht sehen wir das Feuerwerk.",
        modelPl:
          "Moja ulubiona pora roku to zima. W grudniu i styczniu jest zimno, a czasem pada śnieg. Wtedy lepię z Janem bałwana. Mam urodziny trzeciego marca. W tym roku kończę czternaście lat. Robię imprezę i zapraszam przyjaciół – impreza zaczyna się o trzeciej. Moje ulubione święto to Boże Narodzenie. Dwudziestego czwartego grudnia jesteśmy u babci i dziadka w Krakowie. Jemy razem, a wieczorem są prezenty. W sylwestra świętuję z rodziną, a o północy oglądamy fajerwerki.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem prognozę pogody, daty i życzenia.",
        "Mówienie: umiem opisać pogodę, powiedzieć, kiedy mam urodziny, i złożyć życzenia.",
        "Czytanie: rozumiem zaproszenie i krótki tekst o świętach.",
        "Pisanie: umiem napisać zaproszenie i e-mail o tym, jak świętuję.",
        "Gramatyka: znam es przy pogodzie, um / am / im, liczebniki porządkowe, werden i mit / bei + celownik.",
        "Słownictwo: znam miesiące, pory roku, pogodę, święta i życzenia.",
      ],
    },
  ],
};
