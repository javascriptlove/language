import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-5",
  chapter: 5,
  number: 4,
  title: "Wiederholung – Kapitel 5",
  titlePl: "Powtórka z rozdziału 5",
  intro:
    "Czas na powtórkę o twoim dniu! Zrób ją dzień lub dwa po skończeniu rozdziału 5: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: poranek i czasowniki rozdzielne – „Wann stehst du auf?”, szyk przestawny – „Wie sieht dein Tag aus?”, godziny oficjalne i Wie lange? – „Mein Lieblingstag”.",
  blocks: [
    {
      type: "goals",
      items: [
        "opowiedzieć o swoim dniu od rana do wieczora,",
        "używać czasowników rozdzielnie złożonych: Ich stehe um sieben auf.,",
        "stawiać czasownik na 2. miejscu także po zuerst, dann, danach i po godzinie,",
        "rozróżniać morgens, am Morgen i morgen,",
        "podawać godziny potocznie i oficjalnie oraz mówić, jak długo coś trwa.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: czasowniki rozdzielnie złożone",
      paragraphs: [
        "Odmieniona część stoi na 2. miejscu, przedrostek ucieka na **sam koniec**: auf|stehen → Ich **stehe** um sieben **auf**. W pytaniu tak/nie czasownik idzie na początek: **Kommst** du **mit**? → lekcja „Wann stehst du auf?”",
        "Zmiana samogłoski zostaje: du **siehst** fern, er **fängt** an, du **schläfst** aus / ein. **frühstücken** się nie rozpada. → lekcje „Wann stehst du auf?” i „Mein Lieblingstag”",
      ],
      table: {
        headers: ["bezokolicznik", "w zdaniu", "po polsku"],
        rows: [
          { cells: ["aufwachen", "Ich wache um halb sieben auf.", "Budzę się o 6:30."], speak: "Ich wache um halb sieben auf." },
          { cells: ["aufstehen", "Wann stehst du auf?", "O której wstajesz?"], speak: "Wann stehst du auf?" },
          { cells: ["anfangen", "Der Unterricht fängt um acht an.", "Lekcje zaczynają się o ósmej."], speak: "Der Unterricht fängt um acht an." },
          { cells: ["fernsehen", "Paul sieht abends fern.", "Paul wieczorem ogląda telewizję."], speak: "Paul sieht abends fern." },
          { cells: ["aufräumen", "Ich räume mein Zimmer auf.", "Sprzątam swój pokój."], speak: "Ich räume mein Zimmer auf." },
          { cells: ["ausschlafen", "Am Samstag schläft Anna aus.", "W sobotę Anna się wysypia."], speak: "Am Samstag schläft Anna aus." },
          { cells: ["anrufen", "Ich rufe dich später an.", "Zadzwonię do ciebie później."], speak: "Ich rufe dich später an." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: szyk przestawny i pory dnia",
      paragraphs: [
        "Czasownik **zawsze na 2. miejscu**. Gdy na 1. miejscu stoi coś innego niż podmiot (zuerst, dann, danach, später, um sieben, abends…), podmiot idzie **za czasownik**: **Dann esse ich** zu Mittag. ❌ Dann ich esse. → lekcja „Wie sieht dein Tag aus?”",
        "**und, aber, oder, denn** stoją na miejscu zero – nie zmieniają szyku: … **und ich** lese. Ale: … **und dann lese ich**. → lekcja „Wie sieht dein Tag aus?”",
        "**morgens / am Morgen** = rano, **abends / am Abend** = wieczorem, **in der Nacht** = w nocy. **morgen** = jutro! → lekcja „Wann stehst du auf?”",
      ],
      table: {
        headers: ["1.", "2. (czasownik)", "3.", "reszta"],
        rows: [
          { cells: ["Zuerst", "stehe", "ich", "um sieben auf."], speak: "Zuerst stehe ich um sieben auf." },
          { cells: ["Um halb zwei", "komme", "ich", "nach Hause."], speak: "Um halb zwei komme ich nach Hause." },
          { cells: ["Danach", "macht", "Anna", "Hausaufgaben."], speak: "Danach macht Anna Hausaufgaben." },
          { cells: ["Abends", "sieht", "Paul", "fern."], speak: "Abends sieht Paul fern." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: godziny i Wie lange?",
      paragraphs: [
        "Potocznie: **halb drei** = 2:30 (!), **Viertel nach / vor**. Oficjalnie (kino, dworzec, telewizja): godzina + **Uhr** + minuty: 14:30 → **vierzehn Uhr dreißig**. → lekcja „Mein Lieblingstag”",
        "**Wann?** → **um** drei. **Wie lange?** → **zwei Stunden**, **von** drei **bis** fünf (bez um!). Trwać = **dauern**: Der Film **dauert** zwei Stunden. → lekcja „Mein Lieblingstag”",
      ],
      table: {
        headers: ["pytanie", "odpowiedź", "po polsku"],
        rows: [
          { cells: ["Wann beginnt der Film?", "Um 15:45 Uhr.", "O 15:45."], speak: "Wann beginnt der Film? Um fünfzehn Uhr fünfundvierzig." },
          { cells: ["Wie lange dauert die Pause?", "Zwanzig Minuten.", "Dwadzieścia minut."], speak: "Wie lange dauert die Pause? Zwanzig Minuten." },
          { cells: ["Wann hast du Training?", "Von vier bis sechs.", "Od czwartej do szóstej."], speak: "Wann hast du Training? Von vier bis sechs." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Wann stehst du auf?",
          items: [
            { text: "aufwachen / aufstehen", pl: "budzić się / wstawać" },
            { text: "duschen", pl: "brać prysznic" },
            { text: "Ich putze mir die Zähne.", pl: "Myję zęby." },
            { text: "frühstücken", pl: "jeść śniadanie" },
            { text: "mit dem Bus zur Schule fahren", pl: "jechać autobusem do szkoły" },
            { text: "anfangen", pl: "zaczynać się" },
            { text: "früh / spät / müde", pl: "wcześnie / późno / zmęczony" },
            { text: "morgens, mittags, nachmittags, abends, nachts", pl: "rano, w południe, po południu, wieczorem, w nocy" },
          ],
        },
        {
          title: "Wie sieht dein Tag aus?",
          items: [
            { text: "zuerst, dann, danach, später, zum Schluss", pl: "najpierw, potem, następnie, później, na koniec" },
            { text: "nach Hause kommen", pl: "wracać do domu" },
            { text: "zu Mittag essen / zu Abend essen", pl: "jeść obiad / kolację" },
            { text: "Hausaufgaben machen", pl: "odrabiać lekcje" },
            { text: "spazieren gehen", pl: "iść na spacer" },
            { text: "ins Bett gehen", pl: "iść spać" },
          ],
        },
        {
          title: "Mein Lieblingstag",
          items: [
            { text: "ausschlafen", pl: "wysypiać się" },
            { text: "anrufen / mitkommen / einkaufen", pl: "dzwonić / iść z kimś / robić zakupy" },
            { text: "Wie lange? – dauern", pl: "Jak długo? – trwać" },
            { text: "die Stunde / die Minute", pl: "godzina (czas trwania) / minuta" },
            { text: "von … bis …", pl: "od … do …" },
            { text: "den ganzen Tag", pl: "cały dzień" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Morgen ist Projekttag",
      titlePl: "Jutro dzień projektów",
      context: "Niedziela wieczorem. Lukas, Julia i Anna rozmawiają na czacie wideo o poniedziałku – mają razem robić projekt.",
      cast: { Anna: "f", Lukas: "m", Julia: "f" },
      lines: [
        { speaker: "Anna", text: "Morgen haben wir Projekttag. Wir treffen uns um 7:45 Uhr vor der Schule, okay?", pl: "Jutro mamy dzień projektowy. Spotykamy się o 7:45 przed szkołą, dobrze?" },
        { speaker: "Lukas", text: "Um Viertel vor acht? Oh nein! Ich stehe nie so früh auf!", pl: "Za kwadrans ósma? O nie! Ja nigdy nie wstaję tak wcześnie!" },
        { speaker: "Julia", text: "Lukas, du gehst einfach früher ins Bett. Um zehn, nicht um elf!", pl: "Lukas, po prostu wcześniej pójdziesz spać. O dziesiątej, a nie o jedenastej!" },
        { speaker: "Lukas", text: "Na gut. Wie lange dauert der Projekttag?", pl: "No dobrze. Jak długo trwa dzień projektowy?" },
        { speaker: "Anna", text: "Von acht bis eins. Danach essen wir zusammen in der Mensa zu Mittag.", pl: "Od ósmej do pierwszej. Potem jemy razem obiad na stołówce." },
        { speaker: "Julia", text: "Und am Nachmittag? Ich gehe zuerst mit Bruno spazieren und dann habe ich Zeit.", pl: "A po południu? Najpierw idę na spacer z Bruno, a potem mam czas." },
        { speaker: "Lukas", text: "Ich auch. Ruft ihr mich um vier an?", pl: "Ja też. Zadzwonicie do mnie o czwartej?" },
        { speaker: "Anna", text: "Klar! Und jetzt: gute Nacht, Lukas!", pl: "Jasne! A teraz: dobranoc, Lukas!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-5-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Dzień projektowy",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "O której spotykają się przed szkołą?", options: ["o 8:15", "o 7:45", "o 7:15"], answer: 1 },
          { prompt: "Co radzi Julia Lukasowi?", options: ["żeby wcześniej poszedł spać", "żeby nastawił dwa budziki", "żeby przyjechał autobusem"], answer: 0 },
          { prompt: "Jak długo trwa dzień projektowy?", options: ["od 7:45 do 12:00", "od 8:00 do 13:00", "od 8:00 do 16:00"], answer: 1 },
          { prompt: "Gdzie jedzą obiad?", options: ["w domu u Anny", "na stołówce", "w kawiarni"], answer: 1 },
          { prompt: "Co Julia robi najpierw po południu?", options: ["dzwoni do Lukasa", "odrabia lekcje", "idzie na spacer z psem"], answer: 2 },
          { prompt: "O której Lukas chce, żeby do niego zadzwonić?", options: ["o czwartej", "o dziesiątej", "o pierwszej"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-5-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Morgen stehe ich um sechs auf.", options: ["Rano wstaję o szóstej.", "Jutro wstaję o szóstej.", "Jutro budzę się o siódmej."], answer: 1 },
          { audio: "Danach räume ich mein Zimmer auf.", options: ["Potem sprzątam swój pokój.", "Najpierw sprzątam swój pokój.", "Potem wychodzę z pokoju."], answer: 0 },
          { audio: "Der Zug fährt um siebzehn Uhr zwanzig ab.", options: ["Pociąg odjeżdża o 7:20.", "Pociąg odjeżdża o 17:02.", "Pociąg odjeżdża o 17:20."], answer: 2 },
          { audio: "Die Pause dauert eine halbe Stunde.", options: ["Przerwa trwa pół godziny.", "Przerwa jest o wpół do.", "Przerwa trwa godzinę."], answer: 0 },
          { audio: "Am Sonntag schläft Paul aus.", options: ["W niedzielę Paul wcześnie wstaje.", "W niedzielę Paul się wysypia.", "W niedzielę Paul zasypia w kinie."], answer: 1 },
          { audio: "Um halb neun gehe ich ins Bett.", options: ["O 9:30 idę spać.", "O 8:30 idę do domu.", "O 8:30 idę spać."], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-5-4-separable",
        kind: "fill",
        skill: "Gramatyka",
        title: "Czasowniki rozdzielne",
        instruction: "Wpisz brakującą część czasownika: formę odmienioną albo przedrostek.",
        items: [
          { before: "Wann", after: "du auf?", answers: ["stehst"], hint: "aufstehen" },
          { before: "Der Unterricht fängt um acht", after: ".", answers: ["an"], hint: "anfangen" },
          { before: "Lukas", after: "abends lange fern.", answers: ["sieht"], hint: "fernsehen" },
          { before: "Am Samstag schläft Anna", after: ".", answers: ["aus"], hint: "ausschlafen" },
          { before: "Julia ruft Oma und Opa", after: ".", answers: ["an"], hint: "anrufen" },
          { before: "Wir gehen ins Kino.", after: "du mit?", answers: ["Kommst"], hint: "mitkommen" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-5-4-word-order",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Potem jem obiad.", options: ["Dann ich esse zu Mittag.", "Dann esse ich zu Mittag.", "Dann esse zu Mittag ich."], answer: 1, speakOptions: true },
          { prompt: "Wstaję o siódmej.", options: ["Ich aufstehe um sieben.", "Ich stehe auf um sieben.", "Ich stehe um sieben auf."], answer: 2, speakOptions: true },
          { prompt: "Jutro mam test.", options: ["Morgen habe ich einen Test.", "Morgens habe ich einen Test.", "Morgen ich habe einen Test."], answer: 0, explanation: "morgen = jutro, a po nim czasownik na 2. miejscu.", speakOptions: true },
          { prompt: "Wracam do domu, a potem odrabiam lekcje.", options: ["Ich komme nach Hause und dann ich mache Hausaufgaben.", "Ich komme nach Hause und dann mache ich Hausaufgaben.", "Ich komme nach Hause und mache ich dann Hausaufgaben."], answer: 1, speakOptions: true },
          { prompt: "Film trwa dwie godziny.", options: ["Der Film dauert zwei Uhr.", "Der Film dauert um zwei Stunden.", "Der Film dauert zwei Stunden."], answer: 2, speakOptions: true },
          { prompt: "Jan zasypia o dziewiątej.", options: ["Jan schläft um neun ein.", "Jan schlaft um neun ein.", "Jan einschläft um neun."], answer: 0, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-5-4-times",
        kind: "choice",
        skill: "Słownictwo",
        title: "Godziny",
        instruction: "Wybierz godzinę zapisaną cyframi.",
        items: [
          { prompt: "halb sieben", speak: "halb sieben", options: ["7:30", "6:30", "6:00"], answer: 1 },
          { prompt: "Viertel vor acht", speak: "Viertel vor acht", options: ["7:45", "8:15", "8:45"], answer: 0 },
          { prompt: "dreizehn Uhr dreißig", speak: "dreizehn Uhr dreißig", options: ["3:30", "13:13", "13:30"], answer: 2 },
          { prompt: "zwanzig Uhr fünfzehn", speak: "zwanzig Uhr fünfzehn", options: ["20:15", "20:50", "15:20"], answer: 0 },
          { prompt: "Viertel nach zehn", speak: "Viertel nach zehn", options: ["9:45", "10:15", "10:45"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-5-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["auf", "Um", "ich", "sieben", "stehe"], answer: "Um sieben stehe ich auf.", pl: "O siódmej wstaję." },
          { words: ["Mittag", "wir", "zu", "Dann", "essen"], answer: "Dann essen wir zu Mittag.", pl: "Potem jemy obiad." },
          { words: ["fern", "Lukas", "Abends", "sieht"], answer: "Abends sieht Lukas fern.", pl: "Wieczorem Lukas ogląda telewizję." },
          { words: ["Stunde", "Pause", "Die", "halbe", "eine", "dauert"], answer: "Die Pause dauert eine halbe Stunde.", pl: "Przerwa trwa pół godziny." },
          { words: ["an", "Ich", "Oma", "rufe", "morgen"], answer: "Ich rufe morgen Oma an.", pl: "Jutro zadzwonię do babci." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-5-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 5",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 5 jest zaliczony!",
        items: [
          { prompt: "**aufwachen** to po polsku …", options: ["wstawać", "budzić się", "zasypiać"], answer: 1 },
          { prompt: "Ich ___ um sieben ___. (wstaję)", options: ["aufstehe … –", "stehe … auf", "steht … auf"], answer: 1 },
          { prompt: "Paul ___ abends fern.", options: ["seht", "sieht", "fernsieht"], answer: 1 },
          { prompt: "Der Unterricht ___ um acht an.", options: ["fängt", "fangt", "anfängt"], answer: 0 },
          { prompt: "Zuerst dusche ich. Dann ___ .", options: ["ich frühstücke", "frühstücke ich", "frühstückt ich"], answer: 1 },
          { prompt: "**morgen** znaczy …", options: ["rano", "jutro", "wieczorem"], answer: 1 },
          { prompt: "**halb drei** to …", options: ["3:30", "2:30", "2:15"], answer: 1 },
          { prompt: "Jak powiesz oficjalnie 18:20?", options: ["achtzehn Uhr zwanzig", "zwanzig nach achtzehn", "acht Uhr zwanzig"], answer: 0, speakOptions: true },
          { prompt: "Der Film dauert zwei ___ .", options: ["Uhr", "Stunden", "Uhren"], answer: 1 },
          { prompt: "Co to jest **das Pausenbrot**?", options: ["kanapka na przerwę", "przerwa obiadowa", "chleb na kolację"], answer: 0, explanation: "Das Pausenbrot – kanapka na przerwę (lekcja „Wann stehst du auf?”)." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-5-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Mój poniedziałek i moja sobota",
        instruction:
          "Porównaj swój zwykły poniedziałek z sobotą (8–10 zdań). Potem posłuchaj tekstu i przeczytaj go na głos.",
        checklist: [
          "napisz, o której wstajesz w poniedziałek, a o której w sobotę (aufstehen / ausschlafen)",
          "opisz poniedziałek po kolei: zuerst, dann, danach – czasownik na 2. miejscu",
          "użyj co najmniej dwóch pór dnia (morgens, nachmittags, abends…)",
          "napisz, jak długo coś trwa (von … bis …, eine Stunde)",
          "napisz, o której idziesz spać w oba dni",
        ],
        placeholder: "Am Montag stehe ich um … auf. Am Samstag …",
        model:
          "Am Montag stehe ich um Viertel vor sieben auf. Zuerst dusche ich, dann frühstücke ich mit Mama und Jan. Der Unterricht fängt um acht Uhr an und dauert bis halb zwei. Nachmittags gehe ich mit Bruno spazieren und danach mache ich Hausaufgaben. Abends lese ich und um halb zehn gehe ich ins Bett. Am Samstag schlafe ich aus – bis zehn! Dann rufe ich Oma und Opa an. Am Nachmittag treffe ich Anna. Am Samstag gehe ich spät ins Bett.",
        modelPl:
          "W poniedziałek wstaję za kwadrans siódma. Najpierw biorę prysznic, potem jem śniadanie z mamą i Janem. Lekcje zaczynają się o ósmej i trwają do wpół do drugiej. Po południu idę na spacer z Bruno, a potem odrabiam lekcje. Wieczorem czytam, a o wpół do dziesiątej idę spać. W sobotę się wysypiam – do dziesiątej! Potem dzwonię do babci i dziadka. Po południu spotykam się z Anną. W sobotę idę późno spać.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem, gdy ktoś mówi o swoim dniu i podaje godziny – także oficjalne.",
        "Mówienie: umiem opowiedzieć o swoim dniu po kolei i zapytać kolegę o jego dzień.",
        "Czytanie: rozumiem krótki tekst lub dialog o planie dnia.",
        "Pisanie: umiem opisać swój dzień i ulubiony dzień w kilku zdaniach.",
        "Gramatyka: znam czasowniki rozdzielne, szyk przestawny (Dann esse ich…) i und / aber bez zmiany szyku.",
        "Słownictwo: znam czynności dnia, pory dnia, zuerst / dann / danach i Wie lange? – dauern.",
      ],
    },
  ],
};
