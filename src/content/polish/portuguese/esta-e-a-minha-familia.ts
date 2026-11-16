import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "esta-e-a-minha-familia",
  chapter: 2,
  number: 1,
  title: "Esta é a minha família",
  titlePl: "To jest moja rodzina",
  intro:
    "Carla pokazuje Tiagowi i Inês zdjęcie swojej rodziny z Krakowa, a po lekcjach poznaje siostrę, ciocię i kuzynów Tiaga. Uczymy się nazw członków rodziny i słówek „mój” i „twój” – które po portugalsku lubią mieć przed sobą rodzajnik.",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać członków rodziny (mãe, pai, irmão, avó, primos…),",
        "przedstawić rodzinę na zdjęciu: este é…, esta é…, estes são…,",
        "używać o meu / a minha (mój, moja) i o teu / a tua (twój, twoja) – razem z rodzajnikiem,",
        "odróżnić na ucho avô (dziadek) od avó (babcia).",
      ],
    },
    {
      type: "dialogue",
      title: "A fotografia da Carla",
      titlePl: "Zdjęcie Carli",
      context: "Przerwa w szkole w Lizbonie. Carla pokazuje Inês i Tiagowi zdjęcie w telefonie.",
      cast: { Carla: "f", "Inês": "f", Tiago: "m" },
      lines: [
        { speaker: "Carla", text: "Olha, esta é a minha família.", pl: "Patrz, to jest moja rodzina." },
        { speaker: "Inês", text: "Que fotografia tão gira! Quem é este senhor?", pl: "Jakie fajne zdjęcie! Kim jest ten pan?" },
        { speaker: "Carla", text: "Este é o meu pai, Adam. E esta é a minha mãe, Eva.", pl: "To jest mój tata, Adam. A to jest moja mama, Eva." },
        { speaker: "Tiago", text: "E este rapaz? É o teu irmão?", pl: "A ten chłopak? To twój brat?" },
        { speaker: "Carla", text: "Sim, é o meu irmão, o Daniel. Tem oito anos.", pl: "Tak, to mój brat, Daniel. Ma osiem lat." },
        { speaker: "Inês", text: "E quem são estes senhores?", pl: "A kim są ci państwo?" },
        { speaker: "Carla", text: "São os meus avós, Jan e Zofia. Moram em Cracóvia.", pl: "To moi dziadkowie, Jan i Zofia. Mieszkają w Krakowie." },
        { speaker: "Tiago", text: "E este é o teu cão! Como se chama?", pl: "A to jest twój pies! Jak się wabi?" },
        { speaker: "Carla", text: "Chama-se Burek. Agora mora connosco em Lisboa.", pl: "Wabi się Burek. Teraz mieszka z nami w Lizbonie." },
      ],
    },
    {
      type: "dialogue",
      title: "A tia do Tiago",
      titlePl: "Ciocia Tiaga",
      context: "Po lekcjach przed szkołą na Tiaga czekają jakaś pani, dwoje dzieci i jego starsza siostra Beatriz.",
      cast: { Carla: "f", Tiago: "m", Beatriz: "f" },
      lines: [
        { speaker: "Carla", text: "Tiago, esta senhora é a tua mãe?", pl: "Tiago, ta pani to twoja mama?" },
        { speaker: "Tiago", text: "Não, é a minha tia Ana. E estes são os meus primos, o Duarte e a Leonor.", pl: "Nie, to moja ciocia Ana. A to moi kuzyni, Duarte i Leonor." },
        { speaker: "Carla", text: "E os teus pais?", pl: "A twoi rodzice?" },
        { speaker: "Tiago", text: "Os meus pais trabalham até tarde. Olha, esta é a minha irmã, a Beatriz.", pl: "Moi rodzice pracują do późna. Patrz, to moja siostra, Beatriz." },
        { speaker: "Beatriz", text: "Olá! Tu és a Carla, a amiga polaca do Tiago?", pl: "Cześć! Ty jesteś Carla, ta koleżanka Tiaga z Polski?" },
        { speaker: "Carla", text: "Sim, sou eu! Muito prazer.", pl: "Tak, to ja! Bardzo mi miło." },
        { speaker: "Beatriz", text: "Igualmente! A tua família mora aqui, em Lisboa?", pl: "Mnie również! Twoja rodzina mieszka tutaj, w Lizbonie?" },
        { speaker: "Carla", text: "Os meus pais e o meu irmão, sim. Os meus avós moram na Polónia.", pl: "Moi rodzice i mój brat tak. Moi dziadkowie mieszkają w Polsce." },
      ],
    },
    {
      type: "vocab",
      title: "Słowniczek",
      groups: [
        {
          title: "Rodzice i dzieci",
          items: [
            { text: "a família", pl: "rodzina" },
            { text: "a mãe / a mamã", pl: "matka / mama" },
            { text: "o pai / o papá", pl: "ojciec / tata" },
            { text: "os pais", pl: "rodzice (tata + mama)" },
            { text: "o filho / a filha", pl: "syn / córka" },
            { text: "os filhos", pl: "dzieci (czyjeś: synowie i córki)" },
          ],
        },
        {
          title: "Rodzeństwo",
          items: [
            { text: "o irmão", pl: "brat" },
            { text: "a irmã", pl: "siostra" },
            { text: "os irmãos", pl: "rodzeństwo; bracia" },
          ],
        },
        {
          title: "Dalsza rodzina",
          items: [
            { text: "o avô", pl: "dziadek", note: "zamknięte, wąskie ô" },
            { text: "a avó", pl: "babcia", note: "otwarte, szerokie ó" },
            { text: "os avós", pl: "dziadkowie (dziadek + babcia)" },
            { text: "o tio / a tia", pl: "wujek / ciocia" },
            { text: "os tios", pl: "wujostwo (wujek + ciocia); wujkowie" },
            { text: "o primo / a prima", pl: "kuzyn / kuzynka" },
            { text: "os primos", pl: "kuzynostwo; kuzyni" },
          ],
        },
        {
          title: "Zwierzęta i przydatne słowa",
          items: [
            { text: "o cão", pl: "pies" },
            { text: "o gato", pl: "kot" },
            { text: "a fotografia / a foto", pl: "zdjęcie" },
            { text: "Olha!", pl: "Patrz! Zobacz!" },
            { text: "Quem é?", pl: "Kto to jest? (jedna osoba)" },
            { text: "Quem são?", pl: "Kim oni są? (kilka osób)" },
            { text: "o senhor / a senhora", pl: "pan / pani" },
            { text: "o rapaz / a rapariga", pl: "chłopak / dziewczyna" },
            { text: "o meu amigo / a minha amiga", pl: "mój kolega / moja koleżanka" },
            { text: "giro / gira", pl: "fajny, ładny / fajna, ładna (potocznie)" },
          ],
        },
      ],
    },
    {
      type: "grammar",
      title: "o meu / a minha, o teu / a tua – mój, twój",
      paragraphs: [
        "Po portugalsku „mój” i „twój” mają **cztery formy** – tak jak po polsku zależą od tego, **o czym** mówimy: o kimś rodzaju męskiego (**meu**, **teu**), żeńskiego (**minha**, **tua**), a w liczbie mnogiej dostają **-s**.",
        "Najważniejsza różnica: w Portugalii przed „mój / twój” stawiamy zwykle **rodzajnik** – **o**, **a**, **os**, **as**. Dosłownie mówimy więc „ten mój tata”: **o meu pai**, **a minha mãe**, **os meus avós**, **as minhas primas**.",
        "Uwaga: forma zależy od osoby, **o której mówimy**, a nie od tego, kto mówi. Tiago też powie **a minha mãe**, a Carla – **o meu pai**.",
      ],
      table: {
        headers: ["", "on (jeden)", "ona (jedna)", "oni (kilku)", "one (kilka)"],
        rows: [
          { cells: ["mój", "o meu pai", "a minha mãe", "os meus avós", "as minhas primas"], speak: "o meu pai, a minha mãe, os meus avós, as minhas primas" },
          { cells: ["twój", "o teu tio", "a tua tia", "os teus irmãos", "as tuas irmãs"], speak: "o teu tio, a tua tia, os teus irmãos, as tuas irmãs" },
        ],
      },
      examples: [
        { text: "A minha mãe chama-se Eva.", pl: "Moja mama ma na imię Eva." },
        { text: "Os meus avós moram em Cracóvia.", pl: "Moi dziadkowie mieszkają w Krakowie." },
        { text: "Como se chama o teu cão?", pl: "Jak się wabi twój pies?" },
        { text: "As tuas primas são de Lisboa?", pl: "Twoje kuzynki są z Lizbony?" },
      ],
      tip: "Liczba mnoga w formie męskiej obejmuje **całą grupę**, w której jest choć jeden chłopak lub mężczyzna: **os pais** = tata + mama, **os irmãos** = rodzeństwo, **os avós** = dziadek + babcia, **os tios** = wujek + ciocia. W Brazylii rodzajnik przed „mój” często się pomija (**minha mãe**) – w Portugalii mów **a minha mãe**.",
    },
    {
      type: "grammar",
      title: "este é…, esta é…, estes são… – to jest…, to są…",
      paragraphs: [
        "Kiedy przedstawiamy kogoś albo pokazujemy osoby na zdjęciu, mówimy „to jest…”. Słówko „ten / ta” zmienia się zależnie od tego, **o kim** mówimy: o nim – **este**, o niej – **esta**, o kilku osobach – **estes** (grupa mieszana albo sami chłopcy) lub **estas** (same dziewczyny).",
        "Czasownik **ser** też się zmienia: o jednej osobie – **é** (jest), o kilku – **são** (są). Pytamy: **Quem é?** (o jedną osobę) albo **Quem são?** (o kilka).",
      ],
      table: {
        headers: ["o kim?", "po portugalsku", "po polsku"],
        rows: [
          { cells: ["on", "Este é o meu pai.", "To jest mój tata."], speak: "Este é o meu pai." },
          { cells: ["ona", "Esta é a minha mãe.", "To jest moja mama."], speak: "Esta é a minha mãe." },
          { cells: ["oni (też grupa mieszana)", "Estes são os meus avós.", "To są moi dziadkowie."], speak: "Estes são os meus avós." },
          { cells: ["one (same dziewczyny)", "Estas são as minhas primas.", "To są moje kuzynki."], speak: "Estas são as minhas primas." },
        ],
      },
      examples: [
        { text: "Quem é este rapaz? – É o meu primo Duarte.", pl: "Kim jest ten chłopak? – To mój kuzyn Duarte." },
        { text: "Quem são estes senhores? – São os meus avós.", pl: "Kim są ci państwo? – To moi dziadkowie." },
      ],
      tip: "Gdy już wiadomo, o kim mowa, „to” po prostu znika: **É a minha tia Ana.** (To moja ciocia Ana.) **São os meus avós.** (To moi dziadkowie.) Zauważ też, że Portugalczycy często mówią o znajomych z rodzajnikiem: **o Daniel**, **a Beatriz** – to normalne i brzmi przyjaźnie.",
    },
    {
      type: "pronunciation",
      title: "Wymowa",
      intro:
        "W nazwach członków rodziny kryje się kilka portugalskich pułapek. Kliknij przykład i powtórz go na głos 3 razy.",
      items: [
        { sound: "ão", explanation: "nosowe **ał** – coś pomiędzy polskim „ą” a „ał”; powietrze idzie też przez nos", examples: ["irmão", "cão", "são"] },
        { sound: "ãe", explanation: "nosowe **aj** – jedna sylaba: **mãe** brzmi mniej więcej jak „mãj”", examples: ["mãe", "a minha mãe"] },
        { sound: "ô / ó", explanation: "**avô** (dziadek) ma zamknięte, wąskie **o**, bliskie „u”; **avó** (babcia) – otwarte, szerokie, jak polskie **o**. To jedyna różnica między tymi słowami!", examples: ["o avô", "a avó", "os avós"] },
        { sound: "lh", explanation: "czytamy jak miękkie **li** w słowie „lilia”", examples: ["filho", "filha", "olha"] },
        { sound: "nh", explanation: "czytamy jak polskie **ń**", examples: ["minha", "senhor", "senhora"] },
        { sound: "s na końcu / przed spółgłoską", explanation: "czytamy jak **sz**: **os meus pais** ≈ „usz meusz pajsz”", examples: ["este", "estes", "os meus pais"] },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-2-1-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj zdania i wybierz jego polskie znaczenie. Uważaj na avô i avó!",
        items: [
          { audio: "Esta é a minha avó.", options: ["To jest moja ciocia.", "To jest mój dziadek.", "To jest moja babcia."], answer: 2 },
          { audio: "Estes são os meus pais.", options: ["To są moi rodzice.", "To są moi bracia.", "To są moi dziadkowie."], answer: 0 },
          { audio: "Quem é este rapaz?", options: ["Kim jest ta dziewczyna?", "Kim jest ten chłopak?", "Gdzie jest ten chłopak?"], answer: 1 },
          { audio: "O meu avô mora no Porto.", options: ["Mój dziadek mieszka w Porto.", "Moja babcia mieszka w Porto.", "Mój wujek jest z Porto."], answer: 0 },
          { audio: "São os teus irmãos?", options: ["To twoi kuzyni?", "To twoi rodzice?", "To twoje rodzeństwo?"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-2-1-relations",
        kind: "choice",
        skill: "Słownictwo",
        title: "Quem é? – Kto to jest?",
        instruction:
          "Rozwiąż rodzinną zagadkę. Podpowiedź: **do** / **da** (= de + o / de + a) oznacza tu „czyj?” – o pai **do** meu pai = tata mojego taty.",
        items: [
          { prompt: "O pai do meu pai é o meu …", speak: "O pai do meu pai é o meu…", options: ["tio", "avô", "primo"], answer: 1, speakOptions: true },
          { prompt: "A irmã da minha mãe é a minha …", speak: "A irmã da minha mãe é a minha…", options: ["tia", "prima", "avó"], answer: 0, speakOptions: true },
          { prompt: "O filho do meu tio é o meu …", speak: "O filho do meu tio é o meu…", options: ["irmão", "filho", "primo"], answer: 2, speakOptions: true },
          { prompt: "A mãe da minha mãe é a minha …", speak: "A mãe da minha mãe é a minha…", options: ["avó", "tia", "mãe"], answer: 0, speakOptions: true },
          {
            prompt: "A Carla é a … do Adam e da Eva.",
            speak: "A Carla é a… do Adam e da Eva.",
            options: ["mãe", "irmã", "filha"],
            answer: 2,
            speakOptions: true,
            explanation: "Adam i Eva to rodzice Carli, więc Carla jest ich córką – a filha.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-2-1-meu-minha",
        kind: "choice",
        skill: "Gramatyka",
        title: "o meu, a minha, os meus czy as minhas?",
        instruction: "Wybierz brakujące słowa. Sprawdź, o kim mowa: o nim, o niej, o kilku osobach?",
        items: [
          { prompt: "___ avós moram em Cracóvia. (moi)", options: ["O meu", "Os meus", "As minhas"], answer: 1 },
          { prompt: "Esta é ___ irmã? (twoja)", options: ["a tua", "o teu", "as tuas"], answer: 0 },
          { prompt: "Estas são ___ primas. (moje)", options: ["os meus", "a minha", "as minhas"], answer: 2 },
          { prompt: "___ pai chama-se Adam. (mój)", options: ["A minha", "O meu", "Os meus"], answer: 1 },
          {
            prompt: "Como se chamam ___ pais? (twoi)",
            options: ["os teus", "as tuas", "o teu"],
            answer: 0,
            explanation: "os pais = tata + mama, grupa mieszana, więc forma męska w liczbie mnogiej: os teus pais.",
          },
          {
            prompt: "Tiago: „Esta é ___ mãe.” (moja)",
            options: ["o meu", "a minha"],
            answer: 1,
            explanation: "Forma zależy od mamy (ona), a nie od Tiaga – więc a minha mãe.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-2-1-este",
        kind: "fill",
        skill: "Gramatyka",
        title: "este, esta, estes, estas – é czy são?",
        instruction: "Wpisz brakujące słowo. Podpowiedź w nawiasie mówi, o kim jest mowa.",
        items: [
          { before: "Olha,", after: "é a minha tia Ana.", answers: ["esta"], hint: "(ona)" },
          { before: "Olha,", after: "são os meus avós.", answers: ["estes"], hint: "(oni)" },
          { before: "E", after: "é o meu cão, o Burek.", answers: ["este"], hint: "(on)" },
          { before: "E", after: "são as minhas primas.", answers: ["estas"], hint: "(one)" },
          { before: "Inês,", after: "é o meu irmão Daniel.", answers: ["este"], hint: "(on)" },
          { before: "Estes", after: "os meus pais.", answers: ["são"], hint: "ser" },
          { before: "Esta", after: "a minha mãe.", answers: ["é"], hint: "ser" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-2-1-plural",
        kind: "choice",
        skill: "Słownictwo",
        title: "Cała rodzina razem",
        instruction: "Jak nazwać całą grupę? Pamiętaj: forma męska w liczbie mnogiej obejmuje też dziewczyny i kobiety.",
        items: [
          { prompt: "Tata + mama = …", options: ["as mães", "os pais", "o pai"], answer: 1, speakOptions: true },
          {
            prompt: "Masz brata i siostrę. To twoje rodzeństwo, czyli …",
            options: ["os meus irmãos", "as minhas irmãs", "o meu irmãos"],
            answer: 0,
            speakOptions: true,
            explanation: "W grupie jest chłopak, więc forma męska: os meus irmãos.",
          },
          {
            prompt: "Dziadek + babcia = …",
            options: ["as avós", "o avô", "os avós"],
            answer: 2,
            speakOptions: true,
            explanation: "os avós (z otwartym ó) to dziadek i babcia razem.",
          },
          {
            prompt: "Masz dwie kuzynki i żadnego kuzyna. To …",
            options: ["os meus primos", "as minhas primas"],
            answer: 1,
            speakOptions: true,
            explanation: "Same dziewczyny – wtedy forma żeńska: as minhas primas.",
          },
          { prompt: "Wujek + ciocia = …", options: ["os tios", "as tias", "os tio"], answer: 0, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-2-1-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["família", "minha", "é", "Esta", "a"], answer: "Esta é a minha família.", pl: "To jest moja rodzina." },
          { words: ["meus", "Estes", "avós", "os", "são"], answer: "Estes são os meus avós.", pl: "To są moi dziadkowie." },
          { words: ["é", "Quem", "rapariga?", "esta"], answer: "Quem é esta rapariga?", pl: "Kim jest ta dziewczyna?" },
          { words: ["primos", "moram", "Os", "Lisboa", "em", "meus"], answer: "Os meus primos moram em Lisboa.", pl: "Moi kuzyni mieszkają w Lizbonie." },
        ],
      },
    },
    {
      type: "culture",
      title: "Cultura – nomes e apelidos",
      paragraphs: [
        "Portugalczycy mają często **dwa, a nawet więcej nazwisk** (apelidos). Zwykle najpierw stoi nazwisko po **mamie**, a na końcu – po **tacie**. To odwrotnie niż w Hiszpanii! Na co dzień używa się najczęściej ostatniego nazwiska.",
        "Najsłynniejszy przykład: **Cristiano Ronaldo dos Santos Aveiro** – „dos Santos” to nazwisko po mamie, a „Aveiro” po tacie.",
        "Uwaga, pułapka: po portugalsku nazwisko to **o apelido**, a słowo **o nome** znaczy po prostu „imię” albo „nazwa”.",
        "W Portugalii dzieci mówią do rodziców **mamã** i **papá**, a w Brazylii – **mamãe** i **papai**. Inna różnica: słowo **rapariga** (dziewczyna) jest w Portugalii zupełnie zwyczajne, ale w Brazylii bywa obraźliwe – tam mówi się **menina** albo **moça**.",
      ],
      examples: [
        { text: "o apelido", pl: "nazwisko" },
        { text: "o nome", pl: "imię" },
        { text: "a mamã / o papá", pl: "mama / tata (w Portugalii)" },
        { text: "a mamãe / o papai", pl: "mama / tata (w Brazylii)" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-2-1-write",
        kind: "write",
        skill: "Mówienie",
        title: "Agora tu! Pokaż swoją rodzinę",
        instruction:
          "Wyobraź sobie, że pokazujesz koledze z Portugalii zdjęcie swojej rodziny. Napisz 4–5 zdań, potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "zacznij od „Olha, esta é a minha família”",
          "przedstaw jedną osobę: este é… / esta é…",
          "przedstaw kilka osób: estes são os meus…",
          "nie zapomnij o rodzajniku: o meu, a minha, os meus…",
          "napisz, jak ktoś ma na imię albo gdzie mieszka",
        ],
        placeholder: "Olha, esta é a minha família. Este é o meu …",
        model:
          "Olha, esta é a minha família. Este é o meu pai, Adam, e esta é a minha mãe, Eva. Este é o meu irmão, o Daniel. Os meus avós moram em Cracóvia. E este é o meu cão, o Burek.",
        modelPl:
          "Patrz, to jest moja rodzina. To jest mój tata, Adam, a to jest moja mama, Eva. To jest mój brat, Daniel. Moi dziadkowie mieszkają w Krakowie. A to jest mój pies, Burek.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem nazwać po portugalsku członków mojej rodziny.",
        "Wiem, że os pais to rodzice, os irmãos to rodzeństwo, a os avós to dziadkowie.",
        "Pamiętam o rodzajniku: o meu pai, a minha mãe, os teus avós.",
        "Umiem przedstawić kogoś: este é…, esta é…, estes são…",
        "Słyszę i wymawiam różnicę między avô a avó.",
        "Wiem, jak Portugalczycy łączą nazwiska mamy i taty.",
      ],
    },
  ],
};
