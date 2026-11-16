import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "esta-e-a-mina-familia",
  chapter: 2,
  number: 1,
  title: "Esta é a miña familia",
  titlePl: "To jest moja rodzina",
  intro:
    "Carla przyniosła do szkoły w Santiago zdjęcie swojej rodziny. Brais i Antía chcą wiedzieć, kto jest kim – a po lekcjach Carla poznaje ciocię i kuzynostwo Braisa.",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać członków rodziny (mama, tata, rodzeństwo, dziadkowie, kuzyni…),",
        "przedstawić rodzinę na zdjęciu: este é…, esta é…, estes son…,",
        "używać słówek o meu / a miña (mój) i o teu / a túa (twój) – razem z rodzajnikiem,",
        "odróżnić **é** (jest) od **e** (i).",
      ],
    },
    {
      type: "dialogue",
      title: "A foto de Carla",
      titlePl: "Zdjęcie Carli",
      context: "Przerwa w klasie. Carla pokazuje Braisowi i Antíi zdjęcie z telefonu.",
      cast: { Carla: "f", "Antía": "f", Brais: "m" },
      lines: [
        { speaker: "Carla", text: "Mirade, esta é a miña familia.", pl: "Patrzcie, to jest moja rodzina." },
        { speaker: "Antía", text: "Que foto tan bonita! Quen é este señor?", pl: "Jakie ładne zdjęcie! Kim jest ten pan?" },
        { speaker: "Carla", text: "Este é o meu pai, Adam. E esta é a miña nai, Eva.", pl: "To jest mój tata, Adam. A to jest moja mama, Eva." },
        { speaker: "Brais", text: "E este neno? É o teu irmán?", pl: "A ten chłopczyk? To twój brat?" },
        { speaker: "Carla", text: "Si, é o meu irmán, Daniel.", pl: "Tak, to mój brat, Daniel." },
        { speaker: "Antía", text: "E quen son estes señores?", pl: "A kim są ci państwo?" },
        { speaker: "Carla", text: "Son os meus avós, Jan e Zofia. Viven en Cracovia.", pl: "To moi dziadkowie, Jan i Zofia. Mieszkają w Krakowie." },
        { speaker: "Brais", text: "E este é o teu can! Como se chama?", pl: "A to jest twój pies! Jak się wabi?" },
        { speaker: "Carla", text: "Chámase Burek.", pl: "Wabi się Burek." },
      ],
    },
    {
      type: "dialogue",
      title: "A tía de Brais",
      titlePl: "Ciocia Braisa",
      context: "Po lekcjach przed szkołą na Braisa czeka kobieta z dwójką dzieci.",
      cast: { Carla: "f", Brais: "m", "Tía Marta": "f" },
      lines: [
        { speaker: "Carla", text: "Brais, esta é a túa nai?", pl: "Braisie, to twoja mama?" },
        { speaker: "Brais", text: "Non, é a miña tía Marta. E estes son os meus curmáns, Iago e Noa.", pl: "Nie, to moja ciocia Marta. A to moje kuzynostwo, Iago i Noa." },
        { speaker: "Carla", text: "E os teus pais?", pl: "A twoi rodzice?" },
        { speaker: "Brais", text: "Os meus pais traballan ata tarde. Tía, esta é Carla, a miña amiga de Polonia.", pl: "Moi rodzice pracują do późna. Ciociu, to jest Carla, moja koleżanka z Polski." },
        { speaker: "Tía Marta", text: "Ola, Carla! Encantada. A túa familia vive aquí, en Santiago?", pl: "Cześć, Carlo! Miło mi. Twoja rodzina mieszka tutaj, w Santiago?" },
        { speaker: "Carla", text: "Os meus pais e o meu irmán, si. Os meus avós viven en Polonia.", pl: "Moi rodzice i mój brat tak. Dziadkowie mieszkają w Polsce." },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Rodzice i dzieci",
          items: [
            { text: "a familia", pl: "rodzina" },
            { text: "a nai / a mamá", pl: "matka / mama" },
            { text: "o pai / o papá", pl: "ojciec / tata" },
            { text: "os pais", pl: "rodzice (tata + mama)" },
            { text: "o fillo / a filla", pl: "syn / córka" },
            { text: "os fillos", pl: "dzieci (czyjeś: synowie i córki)" },
          ],
        },
        {
          title: "Rodzeństwo",
          items: [
            { text: "o irmán", pl: "brat" },
            { text: "a irmá", pl: "siostra" },
            { text: "os irmáns", pl: "rodzeństwo; bracia" },
          ],
        },
        {
          title: "Dalsza rodzina",
          items: [
            { text: "o avó / a avoa", pl: "dziadek / babcia" },
            { text: "os avós", pl: "dziadkowie (dziadek + babcia)" },
            { text: "o tío / a tía", pl: "wujek / ciocia" },
            { text: "os tíos", pl: "wujostwo (wujek + ciocia); wujkowie" },
            { text: "o curmán / a curmá", pl: "kuzyn / kuzynka", note: "spotkasz też: o primo / a prima" },
            { text: "os curmáns", pl: "kuzynostwo; kuzyni" },
          ],
        },
        {
          title: "Zwierzęta i przydatne słowa",
          items: [
            { text: "o can", pl: "pies" },
            { text: "o gato / a gata", pl: "kot / kotka" },
            { text: "a foto", pl: "zdjęcie" },
            { text: "Mira! / Mirade!", pl: "Patrz! / Patrzcie!" },
            { text: "Quen é?", pl: "Kto to jest? (jedna osoba)" },
            { text: "Quen son?", pl: "Kto to jest? Kim oni są? (kilka osób)" },
            { text: "o señor / a señora", pl: "pan / pani" },
            { text: "o neno / a nena", pl: "chłopczyk / dziewczynka (dziecko)" },
            { text: "o rapaz / a rapaza", pl: "chłopak / dziewczyna (nastolatek)" },
            { text: "o meu amigo / a miña amiga", pl: "mój kolega / moja koleżanka" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "o meu / a miña, o teu / a túa – mój, twój",
      paragraphs: [
        "Po polsku mówimy „mój tata”, ale „moja mama”. Po galicyjsku jest podobnie: słówko „mój” zmienia się zależnie od tego, **o kim** mówimy – **o meu** pai, **a miña** nai, **os meus** avós, **as miñas** tías. Liczy się osoba, o której mowa, a nie ten, kto mówi: Brais też powie **a miña nai**.",
        "Największa różnica: przed „mój” i „twój” stoi **rodzajnik** – **o, a, os, as**. Dosłownie mówimy „ten mój tata”: **o meu pai**. W zwykłym zdaniu rodzajnik jest potrzebny – nie zapominaj o nim!",
        "„Twój” działa tak samo: **o teu** irmán, **a túa** irmá, **os teus** pais, **as túas** curmás. Uwaga na kreskę w **túa** i **túas**.",
      ],
      table: {
        headers: ["", "on (r. męski)", "ona (r. żeński)", "oni (l. mnoga)", "one (l. mnoga)"],
        rows: [
          { cells: ["mój", "o meu pai", "a miña nai", "os meus avós", "as miñas tías"], speak: "o meu pai, a miña nai, os meus avós, as miñas tías" },
          { cells: ["twój", "o teu irmán", "a túa irmá", "os teus pais", "as túas curmás"], speak: "o teu irmán, a túa irmá, os teus pais, as túas curmás" },
        ],
      },
      examples: [
        { text: "O meu irmán chámase Daniel.", pl: "Mój brat ma na imię Daniel." },
        { text: "Os meus avós viven en Cracovia.", pl: "Moi dziadkowie mieszkają w Krakowie." },
        { text: "Como se chama o teu can?", pl: "Jak się wabi twój pies?" },
        { text: "Os teus pais son de Santiago?", pl: "Twoi rodzice są z Santiago?" },
      ],
      tip: "Liczba mnoga w formie męskiej obejmuje **całą grupę**, w której jest choć jeden chłopak lub mężczyzna: **os pais** = tata + mama (rodzice), **os irmáns** = rodzeństwo, **os avós** = dziadek + babcia, **os tíos** = wujek + ciocia, **os curmáns** = kuzyni i kuzynki. Formy żeńskiej (**as curmás**) używamy tylko wtedy, gdy w grupie są same dziewczyny. Jeśli znasz hiszpański: tam mówi się „mi madre” bez rodzajnika, a po galicyjsku – **a miña nai**.",
    },
    {
      type: "grammar",
      title: "este é…, esta é…, estes son… – to jest…, to są…",
      paragraphs: [
        "Kiedy przedstawiamy kogoś albo pokazujemy osoby na zdjęciu, mówimy „to jest…”. Po galicyjsku słówko „to” zmienia się zależnie od tego, **o kim** mówimy: o chłopaku – **este**, o dziewczynie – **esta**, o kilku osobach – **estes** (grupa mieszana lub sami chłopcy) albo **estas** (same dziewczyny).",
        "Czasownik też się zmienia: o jednej osobie mówimy **é** (jest), o kilku – **son** (są). Pytamy: **Quen é?** (o jedną osobę) albo **Quen son?** (o kilka). Słówko **quen** (kto) się nie zmienia.",
        "Uwaga na kreskę! **é** (z kreską) = jest, **e** (bez kreski) = i. Porównaj: **Este é o meu pai e esta é a miña nai.** – To jest mój tata, a to jest moja mama.",
      ],
      table: {
        headers: ["o kim?", "po galicyjsku", "po polsku"],
        rows: [
          { cells: ["on", "Este é o meu pai.", "To jest mój tata."], speak: "Este é o meu pai." },
          { cells: ["ona", "Esta é a miña nai.", "To jest moja mama."], speak: "Esta é a miña nai." },
          { cells: ["oni (też grupa mieszana)", "Estes son os meus avós.", "To są moi dziadkowie."], speak: "Estes son os meus avós." },
          { cells: ["one (same dziewczyny)", "Estas son as miñas curmás.", "To są moje kuzynki."], speak: "Estas son as miñas curmás." },
        ],
      },
      examples: [
        { text: "Quen é este rapaz? – É o meu curmán Iago.", pl: "Kim jest ten chłopak? – To mój kuzyn Iago." },
        { text: "Quen son estes señores? – Son os meus avós.", pl: "Kim są ci państwo? – To moi dziadkowie." },
      ],
      tip: "Gdy już wiadomo, o kim mowa, „to” często po prostu znika: **É a miña tía Marta.** (To moja ciocia Marta.) **Son os meus avós.** (To moi dziadkowie.)",
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "W nazwach członków rodziny kryje się kilka galicyjskich dźwięków. Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "ll", explanation: "czytamy jak miękkie **l'** – podobnie jak polskie „li” w słowie „liść”, ale bez „i”: **fi-l'o**", examples: ["fillo", "filla", "fillos"] },
        { sound: "ai, eu", explanation: "dwie samogłoski w jednej sylabie: **ai** jak „aj” (pai = „paj”), **eu** – e i krótkie u razem", examples: ["pai", "nai", "o meu", "o teu"] },
        { sound: "ñ", explanation: "czytamy jak polskie **ń**: **mi-ńa**", examples: ["a miña", "as miñas", "a señora"] },
        { sound: "-n na końcu", explanation: "jak **n** w polskim „bank” – z tyłu, trochę przez nos", examples: ["irmán", "curmán", "can", "quen"] },
        { sound: "é i e", explanation: "**é** (jest) – akcentowane, otwarte, jak polskie e; **e** (i) – krótkie, bardziej zamknięte", examples: ["é", "e", "Este é o meu pai e esta é a miña nai."] },
        { sound: "avó, avoa", explanation: "akcent pada na **ó**: a-**vó**. **avoa** ma trzy sylaby: a-**vo**-a", examples: ["o avó", "a avoa", "os avós"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "gl-2-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj zdania i wybierz jego polskie znaczenie.",
        items: [
          { audio: "Esta é a miña avoa.", options: ["To jest moja ciocia.", "To jest moja babcia.", "To jest moja mama."], answer: 1 },
          { audio: "Estes son os meus pais.", options: ["To są moi rodzice.", "To są moi bracia.", "To są moi dziadkowie."], answer: 0 },
          { audio: "Quen é este rapaz?", options: ["Kim jest ta dziewczyna?", "Gdzie jest ten chłopak?", "Kim jest ten chłopak?"], answer: 2 },
          { audio: "O meu curmán vive en Vigo.", options: ["Mój wujek mieszka w Vigo.", "Mój kuzyn mieszka w Vigo.", "Mój brat jest z Vigo."], answer: 1 },
          { audio: "Son os teus irmáns?", options: ["To twoi kuzyni?", "To twoi rodzice?", "To twoje rodzeństwo?"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "gl-2-1-relations",
        kind: "choice",
        skill: "Słownictwo",
        title: "Quen é? – Kto to jest?",
        instruction:
          "Rozwiąż rodzinną zagadkę. Podpowiedź: **do** = de + o, **da** = de + a i oznacza tu „czyj?” – o pai **do** meu pai = tata mojego taty.",
        items: [
          { prompt: "O pai do meu pai é o meu …", speak: "O pai do meu pai é o meu…", options: ["tío", "avó", "curmán"], answer: 1, speakOptions: true },
          { prompt: "A irmá da miña nai é a miña …", speak: "A irmá da miña nai é a miña…", options: ["tía", "curmá", "avoa"], answer: 0, speakOptions: true },
          { prompt: "O fillo do meu tío é o meu …", speak: "O fillo do meu tío é o meu…", options: ["irmán", "fillo", "curmán"], answer: 2, speakOptions: true },
          { prompt: "Os pais da miña nai son os meus …", speak: "Os pais da miña nai son os meus…", options: ["tíos", "avós", "pais"], answer: 1, speakOptions: true },
          {
            prompt: "Carla é a … de Adam e Eva.",
            speak: "Carla é a… de Adam e Eva.",
            options: ["nai", "irmá", "filla"],
            answer: 2,
            speakOptions: true,
            explanation: "Adam i Eva to rodzice Carli, więc Carla jest ich córką – a filla.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "gl-2-1-possessives",
        kind: "choice",
        skill: "Gramatyka",
        title: "o meu, a miña, os meus…?",
        instruction: "Wybierz brakujące słowa. Sprawdź, o kim mowa: o nim, o niej, czy o kilku osobach?",
        items: [
          { prompt: "___ avós viven en Cracovia. (moi)", options: ["O meu", "Os meus", "As miñas"], answer: 1 },
          { prompt: "É ___ irmá? (twoja)", options: ["o teu", "as túas", "a túa"], answer: 2 },
          { prompt: "Estes son ___ curmáns. (moi)", options: ["os meus", "o meu"], answer: 0 },
          { prompt: "___ nai chámase Eva. (moja)", options: ["O meu", "A miña"], answer: 1 },
          {
            prompt: "Como se chaman ___ pais? (twoi)",
            options: ["os teus", "o teu", "as túas"],
            answer: 0,
            explanation: "Rodzice to os pais – liczba mnoga, rodzaj męski – więc os teus.",
          },
          {
            prompt: "Estas son ___ tías. (moje)",
            options: ["os meus", "as miñas"],
            answer: 1,
            explanation: "Same ciocie, czyli same kobiety – forma żeńska w liczbie mnogiej: as miñas.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "gl-2-1-este",
        kind: "fill",
        skill: "Gramatyka",
        title: "este, esta, estes, estas – é czy son?",
        instruction: "Wpisz brakujące słowo. Podpowiedź w nawiasie mówi, o kim jest mowa.",
        items: [
          { before: "Mira,", after: "é a miña tía Marta.", answers: ["esta"], hint: "(ona)" },
          { before: "Mira,", after: "son os meus avós.", answers: ["estes"], hint: "(oni)" },
          { before: "E", after: "é o meu can, Burek.", answers: ["este"], hint: "(on)" },
          { before: "E", after: "son as miñas curmás, Sara e Noa.", answers: ["estas"], hint: "(one)" },
          { before: "Estes", after: "os meus pais.", answers: ["son"], hint: "ser – są" },
          { before: "Esta", after: "a miña nai.", answers: ["é"], hint: "ser – jest" },
          { before: "Quen", after: "estes rapaces?", answers: ["son"], hint: "ser – są" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "gl-2-1-plural",
        kind: "choice",
        skill: "Słownictwo",
        title: "Toda a familia",
        instruction: "Jak nazwać całą grupę? Pamiętaj: forma męska w liczbie mnogiej obejmuje też dziewczyny i kobiety.",
        items: [
          { prompt: "Tata + mama = …", options: ["os pais", "as nais", "o pai"], answer: 0, speakOptions: true },
          {
            prompt: "Masz brata i siostrę. To twoje rodzeństwo, czyli …",
            options: ["as miñas irmás", "os meus irmáns", "o meu irmáns"],
            answer: 1,
            speakOptions: true,
            explanation: "W grupie jest chłopak, więc forma męska: os meus irmáns.",
          },
          { prompt: "Dziadek + babcia = …", options: ["as avoas", "os avó", "os avós"], answer: 2, speakOptions: true },
          {
            prompt: "Masz dwie kuzynki i żadnego kuzyna. To …",
            options: ["as miñas curmás", "os meus curmáns"],
            answer: 0,
            speakOptions: true,
            explanation: "Same dziewczyny – wtedy forma żeńska: as miñas curmás.",
          },
          { prompt: "Wujek + ciocia = …", options: ["as tías", "os tío", "os tíos"], answer: 2, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "gl-2-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["familia", "miña", "é", "Esta", "a"], answer: "Esta é a miña familia.", pl: "To jest moja rodzina." },
          { words: ["os", "Estes", "avós", "son", "meus"], answer: "Estes son os meus avós.", pl: "To są moi dziadkowie." },
          { words: ["é", "Quen", "rapaza?", "esta"], answer: "Quen é esta rapaza?", pl: "Kim jest ta dziewczyna?" },
          { words: ["curmáns", "viven", "Os", "Vigo", "meus", "en"], answer: "Os meus curmáns viven en Vigo.", pl: "Moi kuzyni mieszkają w Vigo." },
        ],
      },
    },
    {
      type: "culture",
      title: "Cultura – apelidos e diminutivos",
      paragraphs: [
        "W Galicji, jak w całej Hiszpanii, każdy ma **dwa nazwiska** (dous apelidos): zwykle pierwsze po tacie, a drugie po mamie. Jeśli tata Braisa nazywa się Pereira, a mama Souto, to Brais nazywa się **Brais Pereira Souto**. Kobiety po ślubie **nie zmieniają nazwiska**.",
        "Wiele galicyjskich nazwisk pochodzi od drzew i miejsc: **Carballo** to po galicyjsku „dąb”, **Pereira** – „grusza”, **Souto** – „gaj kasztanowy”, a **Castro** – dawna osada na wzgórzu, otoczona murami (w Galicji zachowało się ich bardzo dużo).",
        "Galicyjczycy uwielbiają zdrobnienia z końcówką **-iño / -iña**: **avoíña** (babunia), **avoíño** (dziadziuś), **gatiño** (kotek), **pequeniño** (malutki). Tę końcówkę od razu rozpoznasz jako typowo galicyjską!",
      ],
      examples: [
        { text: "o apelido", pl: "nazwisko" },
        { text: "Chámome Brais Pereira Souto.", pl: "Nazywam się Brais Pereira Souto." },
        { text: "avoíño / avoíña", pl: "dziadziuś / babunia" },
        { text: "o gatiño", pl: "kotek" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "gl-2-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "Agora ti! Pokaż swoją rodzinę",
        instruction:
          "Wyobraź sobie, że pokazujesz koledze z Galicji zdjęcie swojej rodziny. Napisz 4–5 zdań, potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "zacznij od „Mira, esta é a miña familia”",
          "przedstaw jedną osobę: este é… / esta é…",
          "przedstaw kilka osób: estes son os meus…",
          "pamiętaj o rodzajniku: o meu, a miña, os meus",
          "napisz, jak ktoś ma na imię albo gdzie mieszka",
        ],
        placeholder: "Mira, esta é a miña familia. Este é …",
        model:
          "Mira, esta é a miña familia. Este é o meu pai, Adam, e esta é a miña nai, Eva. Este neno é o meu irmán, Daniel. Os meus avós viven en Cracovia. E este é o meu can, Burek.",
        modelPl:
          "Patrz, to jest moja rodzina. To jest mój tata, Adam, a to jest moja mama, Eva. Ten chłopczyk to mój brat, Daniel. Moi dziadkowie mieszkają w Krakowie. A to jest mój pies, Burek.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem nazwać po galicyjsku członków mojej rodziny.",
        "Wiem, że os pais to rodzice, a os irmáns to rodzeństwo.",
        "Umiem użyć o meu / a miña / os meus / as miñas i o teu / a túa – z rodzajnikiem.",
        "Umiem przedstawić kogoś: este é…, esta é…, estes son…",
        "Nie mylę é (jest) z e (i).",
        "Wiem, skąd biorą się galicyjskie nazwiska, i znam zdrobnienia na -iño / -iña.",
      ],
    },
  ],
};
