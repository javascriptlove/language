import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "esta-es-mi-familia",
  chapter: 2,
  number: 1,
  title: "Esta es mi familia",
  titlePl: "To jest moja rodzina",
  intro:
    "Carla przyniosła do szkoły zdjęcie swojej rodziny. Lucía i Marcos chcą wiedzieć, kto jest kim – a po lekcjach Carla poznaje ciocię i kuzynów Lucíi.",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać członków rodziny (mama, tata, rodzeństwo, dziadkowie, kuzyni…),",
        "przedstawić rodzinę na zdjęciu: este es…, esta es…, estos son…,",
        "używać słówek mi / mis (mój) i tu / tus (twój),",
        "zrozumieć, dlaczego los padres to „rodzice”, a nie „ojcowie”.",
      ],
    },
    {
      type: "dialogue",
      title: "La foto de Carla",
      titlePl: "Zdjęcie Carli",
      context: "Przerwa w klasie. Carla pokazuje Lucíi i Marcosowi zdjęcie z telefonu.",
      cast: { Carla: "f", "Lucía": "f", Marcos: "m" },
      lines: [
        { speaker: "Carla", text: "Mira, esta es mi familia.", pl: "Patrz, to jest moja rodzina." },
        { speaker: "Lucía", text: "¡Qué foto tan bonita! ¿Quién es este señor?", pl: "Jakie ładne zdjęcie! Kim jest ten pan?" },
        { speaker: "Carla", text: "Este es mi padre, Tomasz. Y esta es mi madre, Eva.", pl: "To jest mój tata, Tomasz. A to jest moja mama, Eva." },
        { speaker: "Marcos", text: "¿Y estos chicos? ¿Son tus hermanos?", pl: "A te dzieciaki? To twoje rodzeństwo?" },
        { speaker: "Carla", text: "Sí, estos son mis hermanos, Igor y Paula.", pl: "Tak, to moje rodzeństwo, Igor i Paula." },
        { speaker: "Lucía", text: "¿Y quiénes son estos señores?", pl: "A kim są ci państwo?" },
        { speaker: "Carla", text: "Son mis abuelos, Jan y Zofia. Viven en Cracovia.", pl: "To moi dziadkowie, Jan i Zofia. Mieszkają w Krakowie." },
        { speaker: "Marcos", text: "¡Y este es tu perro! ¿Cómo se llama?", pl: "A to jest twój pies! Jak się wabi?" },
        { speaker: "Carla", text: "Se llama Burek.", pl: "Wabi się Burek." },
      ],
    },
    {
      type: "dialogue",
      title: "La tía de Lucía",
      titlePl: "Ciocia Lucíi",
      context: "Po lekcjach przed szkołą na Lucíę czeka kobieta z dwoma chłopcami.",
      cast: { Carla: "f", "Lucía": "f", "Tía Carmen": "f" },
      lines: [
        { speaker: "Carla", text: "Lucía, ¿esta es tu madre?", pl: "Lucío, to twoja mama?" },
        { speaker: "Lucía", text: "No, es mi tía Carmen. Y estos son mis primos, Dani y Leo.", pl: "Nie, to moja ciocia Carmen. A to moi kuzyni, Dani i Leo." },
        { speaker: "Carla", text: "¿Y tus padres?", pl: "A twoi rodzice?" },
        { speaker: "Lucía", text: "Mis padres trabajan hasta tarde. Tía, esta es Carla, mi amiga de Polonia.", pl: "Moi rodzice pracują do późna. Ciociu, to jest Carla, moja koleżanka z Polski." },
        { speaker: "Tía Carmen", text: "¡Hola, Carla! Encantada. ¿Tu familia vive aquí, en Madrid?", pl: "Cześć, Carlo! Miło mi. Twoja rodzina mieszka tutaj, w Madrycie?" },
        { speaker: "Carla", text: "Mis padres y mis hermanos, sí. Mis abuelos viven en Polonia.", pl: "Rodzice i rodzeństwo tak. Dziadkowie mieszkają w Polsce." },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Rodzice i dzieci",
          items: [
            { text: "la familia", pl: "rodzina" },
            { text: "la madre / la mamá", pl: "matka / mama" },
            { text: "el padre / el papá", pl: "ojciec / tata" },
            { text: "los padres", pl: "rodzice (tata + mama)" },
            { text: "el hijo / la hija", pl: "syn / córka" },
            { text: "los hijos", pl: "dzieci (czyjeś: synowie i córki)" },
          ],
        },
        {
          title: "Rodzeństwo",
          items: [
            { text: "el hermano", pl: "brat" },
            { text: "la hermana", pl: "siostra" },
            { text: "los hermanos", pl: "rodzeństwo; bracia" },
          ],
        },
        {
          title: "Dalsza rodzina",
          items: [
            { text: "el abuelo / la abuela", pl: "dziadek / babcia" },
            { text: "los abuelos", pl: "dziadkowie (dziadek + babcia)" },
            { text: "el tío / la tía", pl: "wujek / ciocia" },
            { text: "los tíos", pl: "wujostwo (wujek + ciocia); wujkowie" },
            { text: "el primo / la prima", pl: "kuzyn / kuzynka" },
            { text: "los primos", pl: "kuzynostwo; kuzyni" },
          ],
        },
        {
          title: "Zwierzęta i przydatne słowa",
          items: [
            { text: "el perro", pl: "pies" },
            { text: "el gato", pl: "kot" },
            { text: "la foto", pl: "zdjęcie" },
            { text: "¡Mira!", pl: "Patrz! Zobacz!" },
            { text: "¿Quién es?", pl: "Kto to jest? (jedna osoba)" },
            { text: "¿Quiénes son?", pl: "Kto to jest? Kim oni są? (kilka osób)" },
            { text: "el señor / la señora", pl: "pan / pani" },
            { text: "el chico / la chica", pl: "chłopak / dziewczyna" },
            { text: "mi amigo / mi amiga", pl: "mój kolega / moja koleżanka" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "mi / mis, tu / tus – mój, twój",
      paragraphs: [
        "Po polsku mówimy „mój tata”, ale „moja mama”. Po hiszpańsku jest prościej: **mi** pasuje i do chłopaka, i do dziewczyny – **mi** padre, **mi** madre. Słówko zmienia się tylko wtedy, gdy osób (rzeczy) jest **więcej**: wtedy dodajemy **-s** – **mis** abuelos, **mis** primas.",
        "Tak samo działa „twój”: **tu** hermano, **tu** hermana, ale **tus** hermanos.",
        "Uwaga na akcent! **tu** (bez akcentu) = twój, twoja. **tú** (z akcentem) = ty. Porównaj: **¿Y tú?** (A ty?) – **¿Y tu hermano?** (A twój brat?).",
      ],
      table: {
        headers: ["", "jedna osoba", "kilka osób", "po polsku"],
        rows: [
          { cells: ["(yo)", "mi padre, mi madre", "mis padres, mis hermanas", "mój, moja / moi, moje"], speak: "mi padre, mi madre, mis padres, mis hermanas" },
          { cells: ["(tú)", "tu tío, tu tía", "tus abuelos, tus primas", "twój, twoja / twoi, twoje"], speak: "tu tío, tu tía, tus abuelos, tus primas" },
        ],
      },
      examples: [
        { text: "Mi hermana se llama Paula.", pl: "Moja siostra ma na imię Paula." },
        { text: "Mis abuelos viven en Cracovia.", pl: "Moi dziadkowie mieszkają w Krakowie." },
        { text: "¿Cómo se llama tu perro?", pl: "Jak się wabi twój pies?" },
        { text: "¿Tus padres son de Madrid?", pl: "Twoi rodzice są z Madrytu?" },
      ],
      tip: "Liczba mnoga w formie męskiej obejmuje **całą grupę**, w której jest choć jeden chłopak lub mężczyzna: **los padres** = tata + mama (rodzice), **los hermanos** = rodzeństwo, **los abuelos** = dziadek + babcia, **los tíos** = wujek + ciocia, **los primos** = kuzyni i kuzynki. Formy żeńskiej (**las primas**) używamy tylko wtedy, gdy w grupie są same dziewczyny.",
    },
    {
      type: "grammar",
      title: "este es…, esta es…, estos son… – to jest…, to są…",
      paragraphs: [
        "Kiedy przedstawiamy kogoś albo pokazujemy osoby na zdjęciu, mówimy „to jest…”. Po hiszpańsku słówko „to” zmienia się zależnie od tego, **o kim** mówimy: o chłopaku – **este**, o dziewczynie – **esta**, o kilku osobach – **estos** (grupa mieszana lub sami chłopcy) albo **estas** (same dziewczyny).",
        "Czasownik też się zmienia: o jednej osobie mówimy **es** (jest), o kilku – **son** (są). Pytamy: **¿Quién es?** (o jedną osobę) albo **¿Quiénes son?** (o kilka).",
      ],
      table: {
        headers: ["o kim?", "po hiszpańsku", "po polsku"],
        rows: [
          { cells: ["on", "Este es mi padre.", "To jest mój tata."], speak: "Este es mi padre." },
          { cells: ["ona", "Esta es mi madre.", "To jest moja mama."], speak: "Esta es mi madre." },
          { cells: ["oni (też grupa mieszana)", "Estos son mis abuelos.", "To są moi dziadkowie."], speak: "Estos son mis abuelos." },
          { cells: ["one (same dziewczyny)", "Estas son mis primas.", "To są moje kuzynki."], speak: "Estas son mis primas." },
        ],
      },
      examples: [
        { text: "¿Quién es este chico? – Es mi primo Leo.", pl: "Kim jest ten chłopak? – To mój kuzyn Leo." },
        { text: "¿Quiénes son estos señores? – Son mis abuelos.", pl: "Kim są ci państwo? – To moi dziadkowie." },
      ],
      tip: "Gdy już wiadomo, o kim mowa, „to” często po prostu znika: **Es mi tía Carmen.** (To moja ciocia Carmen.) **Son mis abuelos.** (To moi dziadkowie.)",
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "W nazwach członków rodziny kryje się kilka hiszpańskich pułapek. Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "h", explanation: "jest **nieme** – czytamy „ermano”, „iho”", examples: ["hermano", "hermana", "hijo"] },
        { sound: "j", explanation: "czytamy jak mocne polskie **ch**", examples: ["hijo", "hija", "hijos"] },
        { sound: "ue", explanation: "czytamy jak **łe** – w jednej sylabie: a-**bue**-lo", examples: ["abuelo", "abuela", "abuelos"] },
        { sound: "ío, ía", explanation: "akcent na **í** – czytamy dwie sylaby: **tí-o**, a nie „tjo”", examples: ["tío", "tía", "tíos"] },
        { sound: "r i rr", explanation: "pojedyncze **r** w środku słowa – krótkie, jedno uderzenie języka; **rr** – mocno wibrujące. Uwaga: **pero** (ale) to nie **perro** (pies)!", examples: ["padre", "primo", "pero", "perro"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "es-2-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj zdania i wybierz jego polskie znaczenie.",
        items: [
          { audio: "Esta es mi abuela.", options: ["To jest moja ciocia.", "To jest moja babcia.", "To jest moja mama."], answer: 1 },
          { audio: "Estos son mis padres.", options: ["To są moi rodzice.", "To są moi bracia.", "To są moi dziadkowie."], answer: 0 },
          { audio: "¿Quién es este chico?", options: ["Kim jest ta dziewczyna?", "Gdzie jest ten chłopak?", "Kim jest ten chłopak?"], answer: 2 },
          { audio: "Mi primo vive en Sevilla.", options: ["Mój wujek mieszka w Sewilli.", "Mój kuzyn mieszka w Sewilli.", "Mój brat jest z Sewilli."], answer: 1 },
          { audio: "¿Son tus hermanos?", options: ["To twoi kuzyni?", "To twoi rodzice?", "To twoje rodzeństwo?"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-2-1-relations",
        kind: "choice",
        skill: "Słownictwo",
        title: "¿Quién es? – Kto to jest?",
        instruction:
          "Rozwiąż rodzinną zagadkę. Podpowiedź: **de** oznacza tu „czyj?” – el padre **de** mi padre = tata mojego taty.",
        items: [
          { prompt: "El padre de mi padre es mi …", speak: "El padre de mi padre es mi…", options: ["tío", "abuelo", "primo"], answer: 1, speakOptions: true },
          { prompt: "La hermana de mi madre es mi …", speak: "La hermana de mi madre es mi…", options: ["tía", "prima", "abuela"], answer: 0, speakOptions: true },
          { prompt: "El hijo de mi tío es mi …", speak: "El hijo de mi tío es mi…", options: ["hermano", "hijo", "primo"], answer: 2, speakOptions: true },
          { prompt: "Los padres de mi madre son mis …", speak: "Los padres de mi madre son mis…", options: ["tíos", "abuelos", "padres"], answer: 1, speakOptions: true },
          {
            prompt: "Carla es la … de Tomasz y Eva.",
            speak: "Carla es la… de Tomasz y Eva.",
            options: ["madre", "hermana", "hija"],
            answer: 2,
            speakOptions: true,
            explanation: "Tomasz i Eva to rodzice Carli, więc Carla jest ich córką – la hija.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-2-1-mi-tu",
        kind: "choice",
        skill: "Gramatyka",
        title: "mi czy mis? tu czy tus?",
        instruction: "Wybierz brakujące słowo. Sprawdź, czy chodzi o jedną osobę, czy o kilka.",
        items: [
          { prompt: "___ abuelos viven en Cracovia. (moi)", options: ["Mi", "Mis"], answer: 1 },
          { prompt: "¿Es ___ hermana? (twoja)", options: ["tu", "tus"], answer: 0 },
          { prompt: "Estos son ___ primos. (moi)", options: ["mi", "mis"], answer: 1 },
          { prompt: "___ madre se llama Eva. (moja)", options: ["Mi", "Mis"], answer: 0 },
          {
            prompt: "¿Cómo se llaman ___ padres? (twoi)",
            options: ["tu", "tú", "tus"],
            answer: 2,
            explanation: "Rodziców jest dwoje, więc tus. A tú z akcentem znaczy „ty”, nie „twój”.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-2-1-este",
        kind: "fill",
        skill: "Gramatyka",
        title: "este, esta, estos, estas – es czy son?",
        instruction: "Wpisz brakujące słowo. Podpowiedź w nawiasie mówi, o kim jest mowa.",
        items: [
          { before: "Mira,", after: "es mi tía Carmen.", answers: ["esta"], hint: "(ona)" },
          { before: "Mira,", after: "son mis abuelos.", answers: ["estos"], hint: "(oni)" },
          { before: "Y", after: "es mi perro, Burek.", answers: ["este"], hint: "(on)" },
          { before: "Y", after: "son mis primas, Ana y Sara.", answers: ["estas"], hint: "(one)" },
          { before: "Lucía,", after: "es mi hermano Igor.", answers: ["este"], hint: "(on)" },
          { before: "Estos", after: "mis padres.", answers: ["son"], hint: "ser" },
          { before: "Esta", after: "mi hermana Paula.", answers: ["es"], hint: "ser" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-2-1-plural",
        kind: "choice",
        skill: "Słownictwo",
        title: "Cała rodzina razem",
        instruction: "Jak nazwać całą grupę? Pamiętaj: forma męska w liczbie mnogiej obejmuje też dziewczyny i kobiety.",
        items: [
          { prompt: "Tata + mama = …", options: ["los padres", "las madres", "el padre"], answer: 0, speakOptions: true },
          {
            prompt: "Masz brata i siostrę. To twoje rodzeństwo, czyli …",
            options: ["mis hermanas", "mis hermanos", "mi hermanos"],
            answer: 1,
            speakOptions: true,
            explanation: "W grupie jest chłopak, więc forma męska: mis hermanos.",
          },
          { prompt: "Dziadek + babcia = …", options: ["las abuelas", "los abuelo", "los abuelos"], answer: 2, speakOptions: true },
          {
            prompt: "Masz dwie kuzynki i żadnego kuzyna. To …",
            options: ["mis primas", "mis primos"],
            answer: 0,
            speakOptions: true,
            explanation: "Same dziewczyny – wtedy forma żeńska: mis primas.",
          },
          { prompt: "Wujek + ciocia = …", options: ["las tías", "los tío", "los tíos"], answer: 2, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-2-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["familia", "mi", "es", "Esta"], answer: "Esta es mi familia.", pl: "To jest moja rodzina." },
          { words: ["mis", "Estos", "abuelos", "son"], answer: "Estos son mis abuelos.", pl: "To są moi dziadkowie." },
          { words: ["es", "¿Quién", "chica?", "esta"], answer: "¿Quién es esta chica?", pl: "Kim jest ta dziewczyna?" },
          { words: ["primos", "viven", "Mis", "Sevilla", "en"], answer: "Mis primos viven en Sevilla.", pl: "Moi kuzyni mieszkają w Sewilli." },
        ],
      },
    },
    {
      type: "culture",
      title: "Cultura – dos apellidos",
      paragraphs: [
        "W Hiszpanii każdy ma **dwa nazwiska** (dos apellidos): zwykle pierwsze po tacie, a drugie po mamie. Jeśli tata Lucíi nazywa się Martín, a mama López, to Lucía nazywa się **Lucía Martín López**. Od kilku lat rodzice mogą też sami wybrać, które nazwisko będzie pierwsze.",
        "Kobiety w Hiszpanii po ślubie **nie zmieniają nazwiska** – mama Lucíi wciąż nazywa się López.",
        "Słynny przykład: malarz **Pablo Ruiz Picasso**. Ruiz to nazwisko jego taty, a Picasso – mamy. Artysta podpisywał się nazwiskiem mamy!",
        "Do rodziny mówi się czule: **mamá**, **papá**, a do dziadków często **abuelito** i **abuelita** (dziadziuś, babunia). Końcówka **-ito / -ita** działa jak polskie zdrobnienie.",
      ],
      examples: [
        { text: "el apellido", pl: "nazwisko" },
        { text: "Me llamo Lucía Martín López.", pl: "Nazywam się Lucía Martín López." },
        { text: "abuelito / abuelita", pl: "dziadziuś / babunia" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "es-2-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "¡Ahora tú! Pokaż swoją rodzinę",
        instruction:
          "Wyobraź sobie, że pokazujesz koledze z Hiszpanii zdjęcie swojej rodziny. Napisz 4–5 zdań, potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "zacznij od „Mira, esta es mi familia”",
          "przedstaw jedną osobę: este es… / esta es…",
          "przedstaw kilka osób: estos son mis…",
          "napisz, jak ktoś ma na imię albo gdzie mieszka",
        ],
        placeholder: "Mira, esta es mi familia. Este es …",
        model:
          "Mira, esta es mi familia. Este es mi padre, Tomasz, y esta es mi madre, Eva. Estos son mis hermanos, Igor y Paula. Mis abuelos viven en Cracovia. Y este es mi perro, Burek.",
        modelPl:
          "Patrz, to jest moja rodzina. To jest mój tata, Tomasz, a to jest moja mama, Eva. To moje rodzeństwo, Igor i Paula. Moi dziadkowie mieszkają w Krakowie. A to jest mój pies, Burek.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem nazwać po hiszpańsku członków mojej rodziny.",
        "Wiem, że los padres to rodzice, a los hermanos to rodzeństwo.",
        "Umiem użyć mi / mis i tu / tus – i nie mylę tu z tú.",
        "Umiem przedstawić kogoś: este es…, esta es…, estos son…",
        "Wiem, dlaczego Hiszpanie mają dwa nazwiska.",
      ],
    },
  ],
};
