import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "aquesta-es-la-meva-familia",
  chapter: 2,
  number: 1,
  title: "Aquesta és la meva família",
  titlePl: "To jest moja rodzina",
  intro:
    "Carla przyniosła do szkoły w Barcelonie zdjęcie swojej rodziny. Jordi i Núria chcą wiedzieć, kto jest kim – a po lekcjach Carla poznaje starszą siostrę Jordiego.",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać członków rodziny (mama, tata, rodzeństwo, dziadkowie, kuzyni…),",
        "przedstawić rodzinę na zdjęciu: aquest és…, aquesta és…, aquests són…,",
        "używać el meu / la meva (mój, moja) i el teu / la teva (twój, twoja) – razem z rodzajnikiem,",
        "zrozumieć, dlaczego els pares to „rodzice”, a nie „ojcowie”.",
      ],
    },
    {
      type: "dialogue",
      title: "La foto de la Carla",
      titlePl: "Zdjęcie Carli",
      context: "Przerwa w klasie. Carla pokazuje Jordiemu i Núrii zdjęcie z telefonu.",
      cast: { Carla: "f", "Núria": "f", Jordi: "m" },
      lines: [
        { speaker: "Carla", text: "Mira, aquesta és la meva família.", pl: "Patrz, to jest moja rodzina." },
        { speaker: "Núria", text: "Quina foto més bonica! Qui és aquest senyor?", pl: "Jakie ładne zdjęcie! Kim jest ten pan?" },
        { speaker: "Carla", text: "Aquest és el meu pare, el Adam. I aquesta és la meva mare, l'Eva.", pl: "To jest mój tata, Adam. A to jest moja mama, Eva." },
        { speaker: "Jordi", text: "I aquest noi? És el teu germà?", pl: "A ten chłopiec? To twój brat?" },
        { speaker: "Carla", text: "Sí, és el meu germà, el Daniel.", pl: "Tak, to mój brat, Daniel." },
        { speaker: "Núria", text: "I qui són aquests senyors?", pl: "A kim są ci państwo?" },
        { speaker: "Carla", text: "Són els meus avis, el Jan i la Zofia. Viuen a Cracòvia.", pl: "To moi dziadkowie, Jan i Zofia. Mieszkają w Krakowie." },
        { speaker: "Jordi", text: "I aquest és el teu gos! Com es diu?", pl: "A to jest twój pies! Jak się wabi?" },
        { speaker: "Carla", text: "Es diu Burek.", pl: "Wabi się Burek." },
      ],
    },
    {
      type: "dialogue",
      title: "La germana del Jordi",
      titlePl: "Siostra Jordiego",
      context: "Po lekcjach przed szkołą na Jordiego czeka wysoka dziewczyna.",
      cast: { Carla: "f", Jordi: "m", Laia: "f" },
      lines: [
        { speaker: "Carla", text: "Jordi, aquesta noia és la teva cosina?", pl: "Jordi, ta dziewczyna to twoja kuzynka?" },
        { speaker: "Jordi", text: "No, és la meva germana, la Laia. Laia, aquesta és la Carla, la meva amiga de Polònia.", pl: "Nie, to moja siostra, Laia. Laio, to jest Carla, moja koleżanka z Polski." },
        { speaker: "Laia", text: "Hola, Carla! Encantada. La teva família viu aquí, a Barcelona?", pl: "Cześć, Carlo! Miło mi. Twoja rodzina mieszka tutaj, w Barcelonie?" },
        { speaker: "Carla", text: "Els meus pares i el meu germà, sí. Els meus avis viuen a Polònia.", pl: "Moi rodzice i mój brat tak. Moi dziadkowie mieszkają w Polsce." },
        { speaker: "Laia", text: "I els teus oncles i els teus cosins?", pl: "A twoje wujostwo i kuzyni?" },
        { speaker: "Carla", text: "També viuen a Polònia.", pl: "Też mieszkają w Polsce." },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Rodzice i dzieci",
          items: [
            { text: "la família", pl: "rodzina" },
            { text: "la mare / la mama", pl: "matka / mama" },
            { text: "el pare / el papa", pl: "ojciec / tata" },
            { text: "els pares", pl: "rodzice (tata + mama)" },
            { text: "el fill / la filla", pl: "syn / córka" },
            { text: "els fills", pl: "dzieci (czyjeś: synowie i córki)" },
          ],
        },
        {
          title: "Rodzeństwo",
          items: [
            { text: "el germà", pl: "brat" },
            { text: "la germana", pl: "siostra" },
            { text: "els germans", pl: "rodzeństwo; bracia" },
          ],
        },
        {
          title: "Dalsza rodzina",
          items: [
            { text: "l'avi / l'àvia", pl: "dziadek / babcia" },
            { text: "els avis", pl: "dziadkowie (dziadek + babcia)" },
            { text: "l'oncle / la tia", pl: "wujek / ciocia" },
            { text: "els oncles", pl: "wujostwo (wujek + ciocia); wujkowie" },
            { text: "el cosí / la cosina", pl: "kuzyn / kuzynka" },
            { text: "els cosins", pl: "kuzynostwo; kuzyni" },
          ],
        },
        {
          title: "Zwierzęta i przydatne słowa",
          items: [
            { text: "el gos", pl: "pies" },
            { text: "el gat / la gata", pl: "kot / kotka" },
            { text: "la foto", pl: "zdjęcie" },
            { text: "Mira!", pl: "Patrz! Zobacz!" },
            { text: "Qui és?", pl: "Kto to jest? (jedna osoba)" },
            { text: "Qui són?", pl: "Kto to jest? Kim oni są? (kilka osób)" },
            { text: "el senyor / la senyora", pl: "pan / pani" },
            { text: "el noi / la noia", pl: "chłopak / dziewczyna" },
            { text: "el meu amic / la meva amiga", pl: "mój kolega / moja koleżanka" },
            { text: "Com es diu?", pl: "Jak się nazywa? Jak ma na imię?" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "el meu, la meva, el teu, la teva – mój, twój",
      paragraphs: [
        "Po katalońsku „mój” zmienia się jak po polsku: o nim **el meu**, o niej **la meva**, o kilku **els meus** / **les meves**. Najważniejsza różnica: przed „mój” stoi **rodzajnik** (el, la, els, les). Mówimy więc dosłownie „ten mój tata”: **el meu pare**, **la meva mare**. Bez rodzajnika to błąd!",
        "Tak samo działa „twój”: **el teu** germà, **la teva** germana, **els teus** avis, **les teves** cosines.",
        "Forma zależy od osoby, **którą** się ma – nie od tego, kto mówi. Jordi też powie **la meva germana**, a Carla też powie **el meu germà**.",
      ],
      table: {
        headers: ["", "on", "ona", "oni / one"],
        rows: [
          { cells: ["mój", "el meu pare", "la meva mare", "els meus avis / les meves cosines"], speak: "el meu pare, la meva mare, els meus avis, les meves cosines" },
          { cells: ["twój", "el teu germà", "la teva germana", "els teus cosins / les teves ties"], speak: "el teu germà, la teva germana, els teus cosins, les teves ties" },
        ],
      },
      examples: [
        { text: "La meva mare es diu Eva.", pl: "Moja mama ma na imię Eva." },
        { text: "Els meus avis viuen a Cracòvia.", pl: "Moi dziadkowie mieszkają w Krakowie." },
        { text: "Com es diu el teu gos?", pl: "Jak się wabi twój pies?" },
        { text: "Les teves cosines són de Girona?", pl: "Twoje kuzynki są z Girony?" },
      ],
      tip: "Liczba mnoga w formie męskiej obejmuje **całą grupę**, w której jest choć jeden chłopak lub mężczyzna: **els pares** = tata + mama (rodzice), **els germans** = rodzeństwo, **els avis** = dziadek + babcia, **els oncles** = wujek + ciocia, **els cosins** = kuzyni i kuzynki. Formy żeńskiej (**les cosines**) używamy tylko wtedy, gdy w grupie są same dziewczyny. Jeśli znasz hiszpański: tam mówi się „mi padre”, a po katalońsku zawsze z rodzajnikiem – **el meu pare**.",
    },
    {
      type: "grammar",
      title: "aquest és…, aquesta és…, aquests són… – to jest…, to są…",
      paragraphs: [
        "Kiedy przedstawiamy kogoś albo pokazujemy osoby na zdjęciu, mówimy „to jest…”. Po katalońsku słówko „to” zmienia się zależnie od tego, **o kim** mówimy: o chłopaku – **aquest**, o dziewczynie – **aquesta**, o kilku osobach – **aquests** (grupa mieszana lub sami chłopcy) albo **aquestes** (same dziewczyny).",
        "Czasownik też się zmienia: o jednej osobie **és** (jest), o kilku **són** (są). Pytamy: **Qui és?** (o jedną osobę) albo **Qui són?** (o kilka). Słówko **qui** (kto) się nie zmienia.",
        "Uwaga na akcent! **és** (z akcentem) = jest. **es** (bez akcentu) = się – jak w **Com es diu?** (Jak się nazywa?). Tak samo **són** (są) piszemy z akcentem.",
      ],
      table: {
        headers: ["o kim?", "po katalońsku", "po polsku"],
        rows: [
          { cells: ["on", "Aquest és el meu pare.", "To jest mój tata."], speak: "Aquest és el meu pare." },
          { cells: ["ona", "Aquesta és la meva mare.", "To jest moja mama."], speak: "Aquesta és la meva mare." },
          { cells: ["oni (też grupa mieszana)", "Aquests són els meus avis.", "To są moi dziadkowie."], speak: "Aquests són els meus avis." },
          { cells: ["one (same dziewczyny)", "Aquestes són les meves cosines.", "To są moje kuzynki."], speak: "Aquestes són les meves cosines." },
        ],
      },
      examples: [
        { text: "Qui és aquest noi? – És el meu cosí.", pl: "Kim jest ten chłopak? – To mój kuzyn." },
        { text: "Qui són aquests senyors? – Són els meus avis.", pl: "Kim są ci państwo? – To moi dziadkowie." },
      ],
      tip: "Pamiętasz z rozdziału 1? Mówiąc o kimś, Katalończycy stawiają przed imieniem rodzajnik: **el** Jordi, **el** Adam (o chłopaku), **la** Núria, **la** Carla (o dziewczynie), a przed samogłoską **l'**: **l'**Eva. (W bardziej oficjalnym języku usłyszysz też **en** Jordi.) Z de tworzy się **del**: la germana **del** Jordi. Nie robimy tego, gdy zwracamy się do kogoś bezpośrednio: **Jordi**, tens germans? Zauważ też: **l'avi**, **l'àvia**, **l'oncle** (l' przed samogłoską), ale **el meu avi**, **la meva àvia** – bo po rodzajniku stoi meu / meva.",
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "W nazwach członków rodziny kryje się kilka katalońskich pułapek. Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "a, e bez akcentu", explanation: "brzmią tak samo: jak krótki, niewyraźny dźwięk pomiędzy polskim **a** i **e** (tzw. samogłoska neutralna). Dlatego końcówki w **pare** i **germana** brzmią identycznie", examples: ["pare", "mare", "germana"] },
        { sound: "g przed e, i oraz j", explanation: "czytamy jak polskie **ż**: **g**ermà ≈ „żerma”", examples: ["germà", "germana", "germans"] },
        { sound: "o bez akcentu, s między samogłoskami", explanation: "nieakcentowane **o** brzmi jak **u**, a **s** między samogłoskami jak **z**: cosí ≈ „kuzi”", examples: ["cosí", "cosina", "cosins"] },
        { sound: "v", explanation: "w Barcelonie czytamy jak **b**: avi ≈ „abi”, meva ≈ „meba”", examples: ["avi", "àvia", "la meva"] },
        { sound: "ll", explanation: "czytamy jak miękkie **l’** – trochę jak „li” w słowie „lis”", examples: ["fill", "filla", "fills"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-2-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Escolta i entén – Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj zdania i wybierz jego polskie znaczenie.",
        items: [
          { audio: "Aquesta és la meva àvia.", options: ["To jest moja ciocia.", "To jest moja babcia.", "To jest moja mama."], answer: 1 },
          { audio: "Aquests són els meus pares.", options: ["To są moi rodzice.", "To są moi bracia.", "To są moi dziadkowie."], answer: 0 },
          { audio: "Qui és aquest noi?", options: ["Kim jest ta dziewczyna?", "Gdzie jest ten chłopak?", "Kim jest ten chłopak?"], answer: 2 },
          { audio: "El meu cosí viu a Girona.", options: ["Mój wujek mieszka w Gironie.", "Mój kuzyn mieszka w Gironie.", "Mój brat jest z Girony."], answer: 1 },
          { audio: "Són els teus germans?", options: ["To twoi kuzyni?", "To twoi rodzice?", "To twoje rodzeństwo?"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-2-1-relations",
        kind: "choice",
        skill: "Słownictwo",
        title: "Qui és? – Kto to jest?",
        instruction:
          "Rozwiąż rodzinną zagadkę. Podpowiedź: **de** oznacza tu „czyj?” – el pare **de** la meva mare = tata mojej mamy.",
        items: [
          { prompt: "El pare del meu pare és el meu …", speak: "El pare del meu pare és el meu…", options: ["oncle", "avi", "cosí"], answer: 1, speakOptions: true },
          { prompt: "La germana de la meva mare és la meva …", speak: "La germana de la meva mare és la meva…", options: ["tia", "cosina", "àvia"], answer: 0, speakOptions: true },
          { prompt: "El fill del meu oncle és el meu …", speak: "El fill del meu oncle és el meu…", options: ["germà", "fill", "cosí"], answer: 2, speakOptions: true },
          { prompt: "Els pares de la meva mare són els meus …", speak: "Els pares de la meva mare són els meus…", options: ["oncles", "avis", "pares"], answer: 1, speakOptions: true },
          {
            prompt: "La Carla és la … del Adam i l'Eva.",
            speak: "La Carla és la… del Adam i l'Eva.",
            options: ["mare", "germana", "filla"],
            answer: 2,
            speakOptions: true,
            explanation: "Adam i Eva to rodzice Carli, więc Carla jest ich córką – la filla.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-2-1-possessives",
        kind: "choice",
        skill: "Gramatyka",
        title: "el meu, la meva, els meus, les meves?",
        instruction: "Wybierz brakujące słowa. Sprawdź, czy chodzi o niego, o nią, czy o kilka osób.",
        items: [
          { prompt: "___ avis viuen a Cracòvia. (moi)", options: ["Els meus", "Les meves", "El meu"], answer: 0 },
          { prompt: "És ___ germana? (twoja)", options: ["el teu", "la teva", "teva"], answer: 1, explanation: "germana to ona, więc la teva – i koniecznie z rodzajnikiem." },
          { prompt: "Aquestes són ___ cosines. (moje)", options: ["els meus", "la meva", "les meves"], answer: 2 },
          { prompt: "___ mare es diu Eva. (moja)", options: ["La meva", "Meva", "El meu"], answer: 0 },
          {
            prompt: "Com es diuen ___ pares? (twoi)",
            options: ["els teus", "les teves", "el teu"],
            answer: 0,
            explanation: "els pares (rodzice) to grupa mieszana, więc forma męska w liczbie mnogiej: els teus.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-2-1-aquest",
        kind: "fill",
        skill: "Gramatyka",
        title: "aquest, aquesta, aquests, aquestes – és czy són?",
        instruction: "Wpisz brakujące słowo. Podpowiedź w nawiasie mówi, o kim jest mowa.",
        items: [
          { before: "Mira,", after: "és la meva tia Marta.", answers: ["aquesta"], hint: "(ona)" },
          { before: "Mira,", after: "són els meus avis.", answers: ["aquests"], hint: "(oni)" },
          { before: "I", after: "és el meu gos, el Burek.", answers: ["aquest"], hint: "(on)" },
          { before: "I", after: "són les meves cosines, l'Anna i la Clara.", answers: ["aquestes"], hint: "(one)" },
          { before: "Núria,", after: "és el meu germà Daniel.", answers: ["aquest"], hint: "(on)" },
          { before: "Aquests", after: "els meus pares.", answers: ["són"], hint: "ser – są" },
          { before: "Aquesta", after: "la meva germana Laia.", answers: ["és"], hint: "ser – jest" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-2-1-plural",
        kind: "choice",
        skill: "Słownictwo",
        title: "Tota la família – Cała rodzina razem",
        instruction: "Jak nazwać całą grupę? Pamiętaj: forma męska w liczbie mnogiej obejmuje też dziewczyny i kobiety.",
        items: [
          { prompt: "Tata + mama = …", options: ["els pares", "les mares", "el pare"], answer: 0, speakOptions: true },
          {
            prompt: "Masz brata i siostrę. To twoje rodzeństwo, czyli …",
            options: ["les meves germanes", "els meus germans", "el meu germans"],
            answer: 1,
            speakOptions: true,
            explanation: "W grupie jest chłopak, więc forma męska: els meus germans.",
          },
          { prompt: "Dziadek + babcia = …", options: ["les àvies", "els avi", "els avis"], answer: 2, speakOptions: true },
          {
            prompt: "Masz dwie kuzynki i żadnego kuzyna. To …",
            options: ["les meves cosines", "els meus cosins"],
            answer: 0,
            speakOptions: true,
            explanation: "Same dziewczyny – wtedy forma żeńska: les meves cosines.",
          },
          { prompt: "Wujek + ciocia = …", options: ["les ties", "els oncle", "els oncles"], answer: 2, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-2-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ordena les frases – Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["família", "meva", "és", "Aquesta", "la"], answer: "Aquesta és la meva família.", pl: "To jest moja rodzina." },
          { words: ["meus", "Aquests", "avis", "els", "són"], answer: "Aquests són els meus avis.", pl: "To są moi dziadkowie." },
          { words: ["és", "Qui", "noia?", "aquesta"], answer: "Qui és aquesta noia?", pl: "Kim jest ta dziewczyna?" },
          { words: ["cosins", "viuen", "Els", "Girona", "a", "meus"], answer: "Els meus cosins viuen a Girona.", pl: "Moi kuzyni mieszkają w Gironie." },
        ],
      },
    },
    {
      type: "culture",
      title: "Cultura – dos cognoms i la iaia",
      paragraphs: [
        "W Katalonii, jak w całej Hiszpanii, każdy ma **dwa nazwiska** (dos cognoms): zwykle pierwsze po tacie, a drugie po mamie. Po katalońsku często łączy się je spójnikiem **i** (i, oraz): jeśli tata nazywa się Vila, a mama Soler, ich syn Jordi to **Jordi Vila i Soler**.",
        "Kobiety po ślubie **nie zmieniają nazwiska** – mama Jordiego wciąż nazywa się Soler.",
        "W domu do dziadków w Barcelonie mówi się często czule **iaio** i **iaia** (dziadziuś, babcia) – usłyszysz to częściej niż avi i àvia. Do wujka i cioci dzieci mówią **tiet** i **tieta**, a do rodziców po prostu **papa** i **mama**.",
      ],
      examples: [
        { text: "el cognom", pl: "nazwisko" },
        { text: "Em dic Jordi Vila i Soler.", pl: "Nazywam się Jordi Vila i Soler." },
        { text: "el iaio / la iaia", pl: "dziadziuś / babcia (czule)" },
        { text: "el tiet / la tieta", pl: "wujek / ciocia (czule)" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "ca-2-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "Ara tu! Pokaż swoją rodzinę",
        instruction:
          "Wyobraź sobie, że pokazujesz koledze z Barcelony zdjęcie swojej rodziny. Napisz 4–5 zdań, potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "zacznij od „Mira, aquesta és la meva família”",
          "przedstaw jedną osobę: aquest és… / aquesta és…",
          "przedstaw kilka osób: aquests són els meus…",
          "nie zapomnij o rodzajniku: el meu, la meva",
          "napisz, jak ktoś ma na imię albo gdzie mieszka",
        ],
        placeholder: "Mira, aquesta és la meva família. Aquest és …",
        model:
          "Mira, aquesta és la meva família. Aquest és el meu pare, el Adam, i aquesta és la meva mare, l'Eva. Aquest és el meu germà, el Daniel. Els meus avis viuen a Cracòvia. I aquest és el meu gos, el Burek.",
        modelPl:
          "Patrz, to jest moja rodzina. To jest mój tata, Adam, a to jest moja mama, Eva. To jest mój brat, Daniel. Moi dziadkowie mieszkają w Krakowie. A to jest mój pies, Burek.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem nazwać po katalońsku członków mojej rodziny.",
        "Wiem, że els pares to rodzice, a els germans to rodzeństwo.",
        "Mówię el meu pare, la meva mare – zawsze z rodzajnikiem.",
        "Umiem przedstawić kogoś: aquest és…, aquesta és…, aquests són…",
        "Nie mylę és (jest) z es (się).",
        "Wiem, dlaczego Katalończycy mają dwa nazwiska połączone przez i.",
      ],
    },
  ],
};
