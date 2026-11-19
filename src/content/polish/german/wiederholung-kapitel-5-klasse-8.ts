import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-5",
  chapter: 5,
  number: 4,
  title: "Wiederholung – Kapitel 5",
  titlePl: "Powtórka z rozdziału 5",
  intro:
    "Paul i Lukas znowu są przyjaciółmi, a Leon należy już do paczki – czas na powtórkę! Zrób ją dzień lub dwa po skończeniu rozdziału 5: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: wygląd i zaimki w bierniku („Wie sieht er aus?”), charakter i czasowniki zwrotne („Ein echter Freund”) albo przeprosiny i zaimki w celowniku („Wir vertragen uns wieder”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać wygląd i charakter: Er ist groß, hat kurze Haare und ist sehr hilfsbereit,",
        "używać zaimków w bierniku: mich, dich, ihn, sie, uns, euch,",
        "odmieniać czasowniki zwrotne: ich freue mich, er ärgert sich,",
        "używać zaimków w celowniku: mir, dir, ihm, ihr, uns, euch, ihnen,",
        "przeprosić i pogodzić się z przyjacielem.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: wygląd i charakter",
      paragraphs: [
        "Wygląd opisujesz trzema czasownikami: **Er ist** groß und schlank. **Er hat** kurze, schwarze Haare und braune Augen. **Er trägt** eine Brille. Pytanie: **Wie sieht er aus?** (aussehen – czasownik rozdzielny). Charakter: **Wie ist er?** – Er ist ehrlich und witzig. → lekcja „Wie sieht er aus?”",
        "Przymiotnik przed rzeczownikiem w liczbie mnogiej bez rodzajnika dostaje **-e**: kurz**e** Haare, blau**e** Augen, lockig**e** Haare. Po **ist** – bez końcówki: Seine Haare sind kurz.",
        "Charakter: ehrlich, hilfsbereit, zuverlässig, witzig, sympathisch, geduldig / ungeduldig, schüchtern, neugierig, fleißig / faul, egoistisch, eifersüchtig. → lekcja „Ein echter Freund”",
      ],
      table: {
        headers: ["czasownik", "przykład", "po polsku"],
        rows: [
          { cells: ["sein", "Leon ist groß und schlank.", "Leon jest wysoki i szczupły."], speak: "Leon ist groß und schlank." },
          { cells: ["haben", "Paul hat rote Haare und Sommersprossen.", "Paul ma rude włosy i piegi."], speak: "Paul hat rote Haare und Sommersprossen." },
          { cells: ["tragen", "Lukas trägt immer eine Kappe.", "Lukas zawsze nosi czapkę."], speak: "Lukas trägt immer eine Kappe." },
          { cells: ["aussehen", "Du siehst müde aus.", "Wyglądasz na zmęczonego."], speak: "Du siehst müde aus." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: czasowniki zwrotne",
      paragraphs: [
        "Zaimek zwrotny zmienia się z osobą: ich freue **mich**, du freust **dich**, er / sie freut **sich**, wir freuen **uns**, ihr freut **euch**, sie / Sie freuen **sich**. Stoi tuż za czasownikiem: Wir **treffen uns** um zwei. W Perfekcie za haben: Ich **habe mich** gefreut.",
        "Czasowniki ze stałym przyimkiem (+ biernik): **sich interessieren für**, **sich freuen auf**, **sich ärgern über**, **sich konzentrieren auf**. Pytanie: **Wofür? Worauf? Worüber?** → lekcja „Ein echter Freund”",
        "Kłótnia i zgoda: Wir **streiten uns**. Wir **vertragen uns** wieder. Ich **entschuldige mich bei** dir. → lekcja „Wir vertragen uns wieder”",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: zaimki – kogo? i komu?",
      paragraphs: [
        "**Biernik (kogo? co?)** – po większości czasowników (sehen, kennen, finden, mögen, besuchen, anrufen, abholen) i po **für**: Ich kenne **ihn**. Das ist für **dich**. → lekcja „Wie sieht er aus?”",
        "**Celownik (komu? czemu?)** – po **helfen, danken, gefallen, gehören, gratulieren, glauben, antworten, fehlen, zuhören** i w zwrotach **Es tut mir leid**, **Wie geht es dir?** Uwaga: Hör **mir** zu! = Posłuchaj **mnie**! → lekcja „Wir vertragen uns wieder”",
      ],
      table: {
        headers: ["mianownik", "biernik", "celownik"],
        rows: [
          { cells: ["ich", "mich", "mir"], speak: "ich, mich, mir" },
          { cells: ["du", "dich", "dir"], speak: "du, dich, dir" },
          { cells: ["er", "ihn", "ihm"], speak: "er, ihn, ihm" },
          { cells: ["sie", "sie", "ihr"], speak: "sie, sie, ihr" },
          { cells: ["es", "es", "ihm"], speak: "es, es, ihm" },
          { cells: ["wir", "uns", "uns"], speak: "wir, uns, uns" },
          { cells: ["ihr", "euch", "euch"], speak: "ihr, euch, euch" },
          { cells: ["sie / Sie", "sie / Sie", "ihnen / Ihnen"], speak: "sie, sie, ihnen" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Wie sieht er aus?",
          items: [
            { text: "kurze / lange, glatte / lockige Haare", pl: "krótkie / długie, proste / kręcone włosy" },
            { text: "blonde / braune / schwarze / rote Haare", pl: "jasne / brązowe / czarne / rude włosy" },
            { text: "blaue / braune / grüne Augen", pl: "niebieskie / brązowe / zielone oczy" },
            { text: "groß / klein / mittelgroß, schlank", pl: "wysoki / niski / średniego wzrostu, szczupły" },
            { text: "die Brille, die Kappe, die Sommersprossen, der Bart", pl: "okulary, czapka z daszkiem, piegi, broda" },
          ],
        },
        {
          title: "Ein echter Freund",
          items: [
            { text: "ehrlich, hilfsbereit, zuverlässig", pl: "szczery, pomocny, słowny" },
            { text: "witzig, schüchtern, neugierig, eifersüchtig", pl: "dowcipny, nieśmiały, ciekawski, zazdrosny" },
            { text: "sich treffen, sich freuen, sich ärgern", pl: "spotykać się, cieszyć się, złościć się" },
            { text: "sich verstehen, sich fühlen, sich langweilen", pl: "dogadywać się, czuć się, nudzić się" },
            { text: "der beste Freund / die beste Freundin", pl: "najlepszy przyjaciel / najlepsza przyjaciółka" },
          ],
        },
        {
          title: "Wir vertragen uns wieder",
          items: [
            { text: "der Streit, sich streiten, sich vertragen", pl: "kłótnia, kłócić się, godzić się" },
            { text: "versprechen – versprochen, vergessen – vergessen", pl: "obiecać – obiecał, zapomnieć – zapomniał" },
            { text: "Es tut mir leid. – Schon okay.", pl: "Przykro mi. – Nic się nie stało." },
            { text: "Lass mich in Ruhe! – Schwamm drüber!", pl: "Daj mi spokój! – Zapomnijmy o tym!" },
            { text: "helfen, danken, gefallen, gehören, zuhören", pl: "pomagać, dziękować, podobać się, należeć, słuchać (kogoś)" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Fünf Freunde, ein Foto",
      titlePl: "Pięcioro przyjaciół, jedno zdjęcie",
      context: "Sobota, kolejny mecz Paula. Tym razem przyszli wszyscy – tylko Julia spóźnia się i dzwoni do Lukasa, bo nie może znaleźć przyjaciół na trybunach.",
      cast: { Julia: "f", Lukas: "m", Anna: "f", Leon: "m", Paul: "m" },
      lines: [
        { speaker: "Julia", text: "Lukas, ich bin am Fußballplatz, aber ich sehe euch nicht! Wo seid ihr?", pl: "Lukas, jestem na boisku, ale was nie widzę! Gdzie jesteście?" },
        { speaker: "Lukas", text: "Wir sitzen ganz oben. Ich trage meine rote Kappe – wie immer.", pl: "Siedzimy na samej górze. Mam na głowie moją czerwoną czapkę – jak zawsze." },
        { speaker: "Julia", text: "Hier tragen viele Leute Kappen! Was hat Leon an?", pl: "Tu dużo ludzi nosi czapki! Co ma na sobie Leon?" },
        { speaker: "Lukas", text: "Eine blaue Jacke. Er ist groß und hat eine Brille. Er sitzt neben mir.", pl: "Niebieską kurtkę. Jest wysoki i ma okulary. Siedzi obok mnie." },
        { speaker: "Julia", text: "Ah, jetzt sehe ich euch! Ich komme.", pl: "A, teraz was widzę! Już idę." },
        { speaker: "Anna", text: "Julia, endlich! Schau mal, Paul hat den Ball!", pl: "Julia, nareszcie! Zobacz, Paul ma piłkę!" },
        { speaker: "Leon", text: "Toooor! Super, Paul!", pl: "Gooool! Super, Paul!" },
        { speaker: "Paul", text: "Ihr seid alle gekommen! Ich freue mich so!", pl: "Przyszliście wszyscy! Tak się cieszę!" },
        { speaker: "Lukas", text: "Versprochen ist versprochen. Wir gratulieren dir!", pl: "Co obiecane, to obiecane. Gratulujemy ci!" },
        { speaker: "Paul", text: "Danke! Und Leon, wie gefällt dir Fußball?", pl: "Dzięki! A tobie, Leon, jak się podoba piłka nożna?" },
        { speaker: "Leon", text: "Gut! Aber du musst mir die Regeln noch erklären.", pl: "Dobrze! Ale musisz mi jeszcze wytłumaczyć zasady." },
        { speaker: "Julia", text: "Kommt, wir machen ein Foto im Fotoautomaten. Für unsere Wand in der Klasse!", pl: "Chodźcie, zrobimy sobie zdjęcie w fotobudce. Na naszą ścianę w klasie!" },
        { speaker: "Anna", text: "Gute Idee! Fünf Freunde, ein Foto!", pl: "Dobry pomysł! Pięcioro przyjaciół, jedno zdjęcie!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-5-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Na meczu Paula",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Dlaczego Julia dzwoni do Lukasa?", options: ["bo się spóźni", "bo nie widzi przyjaciół na trybunach", "bo zgubiła bilet"], answer: 1 },
          { prompt: "Po czym Julia ma rozpoznać Lukasa?", options: ["po czerwonej czapce", "po niebieskiej kurtce", "po okularach"], answer: 0 },
          { prompt: "Jak wygląda Leon?", options: ["niski, z rudymi włosami", "wysoki, w okularach i niebieskiej kurtce", "ma kręcone włosy i czapkę"], answer: 1 },
          { prompt: "Co znaczy „Versprochen ist versprochen”?", options: ["Obietnice są głupie.", "Co obiecane, to obiecane.", "Zapomniałem obietnicy."], answer: 1, explanation: "Lukas tym razem dotrzymał słowa – w lekcji 3 obiecał przyjść na mecz." },
          { prompt: "Co Paul musi jeszcze zrobić dla Leona?", options: ["kupić mu bilet", "wytłumaczyć mu zasady piłki nożnej", "pokazać mu szkołę"], answer: 1 },
          { prompt: "Co proponuje Julia?", options: ["pójść na lody", "zrobić wspólne zdjęcie w fotobudce", "zagrać w koszykówkę"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-5-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Sie hat lange, lockige Haare.", options: ["Ma długie, kręcone włosy.", "Ma krótkie, proste włosy.", "Ma długie, jasne włosy."], answer: 0 },
          { audio: "Wie sieht dein Bruder aus?", options: ["Jaki jest twój brat?", "Jak wygląda twój brat?", "Gdzie jest twój brat?"], answer: 1 },
          { audio: "Wir treffen uns am Samstag.", options: ["Spotkaliśmy się w sobotę.", "Spotykamy się w sobotę.", "Dzwonimy do siebie w sobotę."], answer: 1 },
          { audio: "Worüber ärgerst du dich?", options: ["Z czego się cieszysz?", "Czym się interesujesz?", "O co się złościsz?"], answer: 2 },
          { audio: "Ich rufe dich morgen an.", options: ["Zadzwonię do ciebie jutro.", "Zadzwonisz do mnie jutro?", "Odbiorę cię jutro."], answer: 0 },
          { audio: "Du fehlst mir.", options: ["Mylisz się.", "Brakuje mi ciebie.", "Przeszkadzasz mi."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-5-4-fill",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij",
        instruction: "Uzupełnij brakujące słowo.",
        items: [
          { before: "Anna hat", after: "blonde Haare.", answers: ["kurze"], hint: "kurz + końcówka przymiotnika" },
          { before: "Wie", after: "Leon aus?", answers: ["sieht"], hint: "aussehen, er" },
          { before: "Kennst du Leon? – Ja, ich kenne", after: "gut.", answers: ["ihn"], hint: "er, biernik" },
          { before: "Ich freue", after: "auf das Wochenende.", answers: ["mich"], hint: "ich, zaimek zwrotny" },
          { before: "Lukas und Paul vertragen", after: "wieder.", answers: ["sich"], hint: "sie (oni), zaimek zwrotny" },
          { before: "Wofür interessiert ihr", after: "?", answers: ["euch"], hint: "ihr, zaimek zwrotny" },
          { before: "Julia, ich danke", after: "!", answers: ["dir"], hint: "du, celownik" },
          { before: "Leon ist neu. Wir helfen", after: ".", answers: ["ihm"], hint: "er, celownik" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-5-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Ona ma niebieskie oczy.", options: ["Sie hat blau Augen.", "Sie hat blaue Augen.", "Sie ist blaue Augen."], answer: 1, explanation: "Przed rzeczownikiem w liczbie mnogiej bez rodzajnika: -e." },
          { prompt: "Pomagam mu.", options: ["Ich helfe ihn.", "Ich helfe ihm.", "Ich helfe er."], answer: 1, explanation: "helfen + celownik: ihm." },
          { prompt: "Lubię go.", options: ["Ich mag ihn.", "Ich mag ihm.", "Ich mag er."], answer: 0, explanation: "mögen + biernik: ihn." },
          { prompt: "Uczę się niemieckiego.", options: ["Ich lerne mich Deutsch.", "Ich lerne Deutsch.", "Ich lerne sich Deutsch."], answer: 1, explanation: "uczyć się = lernen – bez sich!" },
          { prompt: "Posłuchaj mnie!", options: ["Hör mich zu!", "Hör mir zu!", "Hör zu mich!"], answer: 1, explanation: "zuhören + celownik: mir." },
          { prompt: "Cieszę się na ferie.", options: ["Ich freue mich auf die Ferien.", "Ich freue auf die Ferien.", "Ich freue mich für die Ferien."], answer: 0, explanation: "sich freuen **auf** – na coś, co dopiero będzie." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-5-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["aus", "dein Freund", "Wie", "sieht"], answer: "Wie sieht dein Freund aus?", pl: "Jak wygląda twój przyjaciel?" },
          { words: ["um drei Uhr", "ab", "Ich", "dich", "hole"], answer: "Ich hole dich um drei Uhr ab.", pl: "Odbiorę cię o trzeciej." },
          { words: ["sich", "für Basketball", "interessiert", "Leon"], answer: "Leon interessiert sich für Basketball.", pl: "Leon interesuje się koszykówką." },
          { words: ["leid", "wirklich", "Es", "mir", "tut"], answer: "Es tut mir wirklich leid.", pl: "Naprawdę mi przykro." },
          { words: ["gestritten", "Wir", "uns", "haben"], answer: "Wir haben uns gestritten.", pl: "Pokłóciliśmy się." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-5-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 5",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 5 jest zaliczony!",
        items: [
          { prompt: "**die Sommersprossen** to …", options: ["piegi", "okulary", "kręcone włosy"], answer: 0 },
          { prompt: "**zuverlässig** to …", options: ["zazdrosny", "słowny, niezawodny", "nieśmiały"], answer: 1 },
          { prompt: "Er ___ eine Brille.", options: ["hat an", "trägt", "sieht"], answer: 1 },
          { prompt: "Das Geschenk ist für ___ . (du)", options: ["dich", "dir", "du"], answer: 0 },
          { prompt: "Wann treffen wir ___ ?", options: ["sich", "uns", "euch"], answer: 1 },
          { prompt: "Paul ärgert sich ___ Lukas.", options: ["für", "auf", "über"], answer: 2 },
          { prompt: "___ interessierst du dich? – Für Musik.", options: ["Wofür", "Worauf", "Worüber"], answer: 0 },
          { prompt: "Gehört die Kappe ___ ? (er)", options: ["ihn", "ihm", "sein"], answer: 1 },
          { prompt: "Julia hat Geburtstag. Ich gratuliere ___ .", options: ["sie", "ihr", "ihnen"], answer: 1 },
          { prompt: "Jak przyjmiesz przeprosiny?", options: ["Lass mich in Ruhe!", "Schon okay. Schwamm drüber!", "Das ist es ja!"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-5-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Mój przyjaciel – portret",
        instruction:
          "Opowiedz o przyjacielu albo przyjaciółce (8–10 zdań): jak wygląda, jaki ma charakter, co robicie razem i czy kiedyś się pokłóciliście. Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "opisz wygląd: Er / Sie ist …, hat … Haare, trägt …",
          "opisz charakter co najmniej trzema przymiotnikami",
          "użyj co najmniej trzech czasowników zwrotnych (sich treffen, sich interessieren für…)",
          "użyj zaimków w bierniku i w celowniku: ich besuche ihn / ich helfe ihm",
          "opowiedz o kłótni i zgodzie: Wir haben uns gestritten, aber …",
        ],
        placeholder: "Mein Freund heißt …",
        model:
          "Mein Freund heißt Ben. Er ist mittelgroß und sportlich, hat kurze, blonde Haare und blaue Augen. Er trägt fast immer einen Hoodie. Ben ist witzig und hilfsbereit, aber manchmal ein bisschen ungeduldig. Er interessiert sich für Computer, und ich helfe ihm oft bei Englisch. Wir treffen uns jeden Freitag und spielen zusammen. Letzten Monat haben wir uns gestritten, denn ich habe seinen Geburtstag vergessen. Ich habe mich bei ihm entschuldigt und ihm ein Geschenk gekauft. Jetzt verstehen wir uns wieder super!",
        modelPl:
          "Mój przyjaciel ma na imię Ben. Jest średniego wzrostu i wysportowany, ma krótkie, jasne włosy i niebieskie oczy. Prawie zawsze nosi bluzę z kapturem. Ben jest dowcipny i pomocny, ale czasem trochę niecierpliwy. Interesuje się komputerami, a ja często pomagam mu z angielskiego. Spotykamy się w każdy piątek i razem gramy. W zeszłym miesiącu się pokłóciliśmy, bo zapomniałem o jego urodzinach. Przeprosiłem go i kupiłem mu prezent. Teraz znowu świetnie się dogadujemy!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem, gdy ktoś opisuje wygląd i charakter albo opowiada o kłótni.",
        "Mówienie: umiem opisać przyjaciela, przeprosić i przyjąć przeprosiny.",
        "Czytanie: rozumiem wiadomość o nowej klasie, ankietę o przyjaźni i list do gazetki.",
        "Pisanie: umiem napisać wiadomość z przeprosinami.",
        "Gramatyka: znam zaimki w bierniku i celowniku, czasowniki zwrotne i czasowniki z celownikiem.",
        "Słownictwo: znam słowa o wyglądzie, charakterze, przyjaźni i kłótni.",
      ],
    },
  ],
};
