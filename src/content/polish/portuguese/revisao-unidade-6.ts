import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "revisao-unidade-6",
  chapter: 6,
  number: 4,
  title: "Revisão – Unidade 6",
  titlePl: "Powtórka z rozdziału 6",
  intro:
    "Powtarzamy wszystko o domu! Zrób tę lekcję dzień lub dwa po skończeniu rozdziału 6. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na koniec napisz test. Jeśli coś pójdzie słabo, wróć do lekcji: pomieszczenia, piętra i num / numa – „Moro num apartamento”, meble, estar i przyimki – „No meu quarto”, há czy está i polecenia – „Onde está o meu telemóvel?”.",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać dom lub mieszkanie: pomieszczenia, piętro, przymiotniki,",
        "użyć num / numa / no / na i liczebników porządkowych,",
        "powiedzieć, gdzie coś jest: estar + em cima de, debaixo de, ao lado de …,",
        "odróżnić há i está,",
        "wydać polecenie: Procura! Põe! Vem!",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: dom, piętra, num / numa",
      paragraphs: [
        "em + um = **num**, em + uma = **numa**, em + o = **no**, em + a = **na**: Moro **num** apartamento, **no** terceiro andar. A avó mora **numa** casa antiga. (Lekcja „Moro num apartamento”)",
        "Piętra: **o rés-do-chão** (parter), **o primeiro andar**, segundo, terceiro, **quarto** (czwarte – i pokój!), quinto, sexto, sétimo, oitavo, nono, décimo. Adres: **4.º Dto.** = czwarte piętro, prawe drzwi; **Esq.** = lewe.",
        "Dom **ma**: A casa **tem** três quartos. O prédio **não tem** elevador. Przymiotnik stoi za rzeczownikiem i się zgadza: uma casa **antiga**, dois quartos **pequenos**.",
      ],
      table: {
        headers: ["po portugalsku", "po polsku"],
        rows: [
          { cells: ["Moro num apartamento no sexto andar.", "Mieszkam w mieszkaniu na szóstym piętrze."], speak: "Moro num apartamento no sexto andar." },
          { cells: ["A casa tem um jardim grande.", "Dom ma duży ogród."], speak: "A casa tem um jardim grande." },
          { cells: ["O prédio não tem elevador.", "Budynek nie ma windy."], speak: "O prédio não tem elevador." },
          { cells: ["A cozinha é pequena, mas luminosa.", "Kuchnia jest mała, ale jasna."], speak: "A cozinha é pequena, mas luminosa." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: estar i przyimki",
      paragraphs: [
        "**estar**: estou, estás, está, estamos, estão – mówi, **gdzie coś jest**: Onde **está** o gato? – **Está** em cima do armário. (Lekcja „No meu quarto”)",
        "Przyimki z **de**: em cima de, debaixo de, ao lado de, atrás de, em frente de, dentro de. de + o = **do**, de + a = **da**, de + os = **dos**, de + as = **das**: debaixo **da** cama, ao lado **do** sofá. **entre … e …** – bez de.",
      ],
      table: {
        headers: ["po portugalsku", "po polsku"],
        rows: [
          { cells: ["O Tareco está em cima do armário.", "Tareco jest na szafie."], speak: "O Tareco está em cima do armário." },
          { cells: ["A bola está debaixo da cama.", "Piłka jest pod łóżkiem."], speak: "A bola está debaixo da cama." },
          { cells: ["A guitarra está entre a secretária e o armário.", "Gitara stoi między biurkiem a szafą."], speak: "A guitarra está entre a secretária e o armário." },
          { cells: ["Os livros estão na estante.", "Książki są na regale."], speak: "Os livros estão na estante." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: há czy está? Polecenia",
      paragraphs: [
        "**há** + um / uma / liczba / bez rodzajnika – coś **w ogóle jest**: **Há** um sofá na sala. **Há** livros no chão. **está / estão** + o / a / o meu / imię – **gdzie jest** konkretna rzecz: **O** sofá **está** na sala. (Lekcja „Onde está o meu telemóvel?”)",
        "Polecenie do kolegi (tu) = forma ele / ela: **Procura! Abre! Arruma! Fecha!** Nieregularne: **Põe!** (pôr), **Vem!** (vir), **Faz!** (fazer), **Diz!** (dizer), **Vai!** (ir). Zwrotne: **Despacha-te!**",
      ],
      table: {
        headers: ["há", "está / estão"],
        rows: [
          { cells: ["Há uma cama no quarto.", "A cama está ao lado da janela."], speak: "Há uma cama no quarto. A cama está ao lado da janela." },
          { cells: ["Há três cadeiras na cozinha.", "As cadeiras estão na cozinha."], speak: "Há três cadeiras na cozinha. As cadeiras estão na cozinha." },
          { cells: ["Não há leite.", "O leite não está aqui."], speak: "Não há leite. O leite não está aqui." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słówka rozdziału 6",
      groups: [
        {
          title: "Dom",
          items: [
            { text: "a casa / o apartamento / o prédio", pl: "dom / mieszkanie / budynek" },
            { text: "o andar / o rés-do-chão", pl: "piętro / parter" },
            { text: "o elevador / as escadas", pl: "winda / schody" },
            { text: "a sala / a cozinha", pl: "salon / kuchnia" },
            { text: "o quarto / a casa de banho", pl: "pokój / łazienka" },
            { text: "a varanda / o jardim / a garagem", pl: "balkon / ogród / garaż" },
            { text: "grande / pequeno / luminoso", pl: "duży / mały / jasny" },
            { text: "novo / antigo / moderno", pl: "nowy / stary / nowoczesny" },
          ],
        },
        {
          title: "Pokój",
          items: [
            { text: "a cama / o armário", pl: "łóżko / szafa" },
            { text: "a secretária / a cadeira", pl: "biurko / krzesło" },
            { text: "a estante / o candeeiro", pl: "regał / lampa" },
            { text: "o tapete / o espelho", pl: "dywan / lustro" },
            { text: "a parede / o chão", pl: "ściana / podłoga" },
            { text: "a gaveta / o frigorífico", pl: "szuflada / lodówka" },
          ],
        },
        {
          title: "Gdzie? Polecenia",
          items: [
            { text: "em cima de / debaixo de", pl: "na / pod" },
            { text: "ao lado de / entre … e …", pl: "obok / między … a …" },
            { text: "atrás de / em frente de", pl: "za / naprzeciwko" },
            { text: "dentro de", pl: "w środku" },
            { text: "procurar / encontrar / perder", pl: "szukać / znaleźć / zgubić" },
            { text: "Arruma o quarto!", pl: "Posprzątaj pokój!" },
            { text: "Põe… / Vem cá!", pl: "Połóż… / Chodź tu!" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "O novo quarto do Rafael",
      titlePl: "Nowy pokój Rafaela",
      context: "Sobota. Rodzina Rafaela dostała nowe meble do lizbońskiego mieszkania. Carla i Tiago pomagają mu urządzić pokój.",
      cast: { Rafael: "m", Carla: "f", Tiago: "m" },
      lines: [
        { speaker: "Rafael", text: "Bem-vindos! O meu quarto é aqui, ao lado da casa de banho.", pl: "Witajcie! Mój pokój jest tutaj, obok łazienki." },
        { speaker: "Carla", text: "É grande! E há uma janela enorme.", pl: "Jest duży! I jest ogromne okno." },
        { speaker: "Rafael", text: "Pois é. Mas a cama ainda está no corredor.", pl: "No właśnie. Ale łóżko jest jeszcze na korytarzu." },
        { speaker: "Tiago", text: "Então vamos! Rafael, abre a porta. Carla, ajuda aqui!", pl: "To do dzieła! Rafael, otwórz drzwi. Carlo, pomóż tutaj!" },
        { speaker: "Carla", text: "Onde pomos a cama? Ao lado da janela?", pl: "Gdzie stawiamy łóżko? Obok okna?" },
        { speaker: "Rafael", text: "Sim, ao lado da janela. E a secretária em frente da cama.", pl: "Tak, obok okna. A biurko naprzeciwko łóżka." },
        { speaker: "Tiago", text: "E a estante? Há espaço entre o armário e a porta.", pl: "A regał? Jest miejsce między szafą a drzwiami." },
        { speaker: "Rafael", text: "Perfeito! Põe a estante aí, Tiago. Eu ponho os livros.", pl: "Idealnie! Postaw tam regał, Tiago. Ja ułożę książki." },
        { speaker: "Carla", text: "E o póster do São Paulo Futebol Clube? Onde está?", pl: "A plakat São Paulo Futebol Clube? Gdzie jest?" },
        { speaker: "Rafael", text: "Está dentro da caixa grande, debaixo da secretária.", pl: "Jest w dużym pudle, pod biurkiem." },
        { speaker: "Tiago", text: "Um póster que não é do Benfica… Tudo bem, põe na parede!", pl: "Plakat, który nie jest Benfiki… No dobra, powieś na ścianie!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-6-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Verdadeiro ou falso?",
        instruction: "Na podstawie dialogu zdecyduj: zdanie jest prawdziwe (verdadeiro) czy fałszywe (falso)?",
        items: [
          { prompt: "O quarto do Rafael está ao lado da cozinha.", speak: "O quarto do Rafael está ao lado da cozinha.", options: ["verdadeiro", "falso"], answer: 1, explanation: "Jest obok łazienki – ao lado da casa de banho." },
          { prompt: "No quarto há uma janela enorme.", speak: "No quarto há uma janela enorme.", options: ["verdadeiro", "falso"], answer: 0 },
          { prompt: "A cama está ao lado da janela.", speak: "A cama está ao lado da janela.", options: ["verdadeiro", "falso"], answer: 0 },
          { prompt: "A estante está entre a cama e a janela.", speak: "A estante está entre a cama e a janela.", options: ["verdadeiro", "falso"], answer: 1, explanation: "Regał stoi między szafą a drzwiami." },
          { prompt: "O póster está debaixo da cama.", speak: "O póster está debaixo da cama.", options: ["verdadeiro", "falso"], answer: 1, explanation: "Jest w pudle pod biurkiem – debaixo da secretária." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-6-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj i wybierz właściwą odpowiedź.",
        items: [
          { audio: "Moramos no rés-do-chão.", options: ["Mieszkamy na parterze.", "Mieszkamy na pierwszym piętrze.", "Mieszkamy w domu z ogrodem."], answer: 0 },
          { audio: "A casa de banho é pequena.", options: ["Kuchnia jest mała.", "Łazienka jest mała.", "Łazienka jest duża."], answer: 1 },
          { audio: "O candeeiro está atrás do sofá.", options: ["Lampa jest obok kanapy.", "Lampa jest na kanapie.", "Lampa jest za kanapą."], answer: 2 },
          { audio: "Há muitos livros na estante.", options: ["Na regale jest dużo książek.", "Książki są na podłodze.", "Na regale nie ma książek."], answer: 0 },
          { audio: "Fecha a janela, por favor.", options: ["Otwórz okno, proszę.", "Zamknij okno, proszę.", "Zamknij drzwi, proszę."], answer: 1 },
          { audio: "Moro no oitavo andar.", options: ["Mieszkam na szóstym piętrze.", "Mieszkam na czwartym piętrze.", "Mieszkam na ósmym piętrze."], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-6-4-grammar",
        kind: "choice",
        skill: "Gramatyka",
        title: "Escolhe bem!",
        instruction: "Wybierz poprawne zdanie.",
        items: [
          { prompt: "„Mieszkam w starym domu.”", options: ["Moro numa casa antiga.", "Moro num casa antiga.", "Moro na casa antigo."], answer: 0, speakOptions: true },
          { prompt: "„Kot jest pod łóżkiem.”", options: ["O gato está debaixo de cama.", "O gato está debaixo da cama.", "O gato há debaixo da cama."], answer: 1, speakOptions: true },
          { prompt: "„W kuchni są dwa krzesła.”", options: ["Na cozinha estão duas cadeiras.", "Na cozinha há duas cadeiras.", "Na cozinha hão duas cadeiras."], answer: 1, speakOptions: true, explanation: "Z liczebnikiem – há. Forma się nie zmienia." },
          { prompt: "„Moje klucze są w szufladzie.”", options: ["As minhas chaves há na gaveta.", "As minhas chaves está na gaveta.", "As minhas chaves estão na gaveta."], answer: 2, speakOptions: true },
          { prompt: "„Połóż plecak na krześle!”", options: ["Põe a mochila na cadeira!", "Pões a mochila na cadeira!", "Pôr a mochila na cadeira!"], answer: 0, speakOptions: true },
          { prompt: "„Mieszkamy na czwartym piętrze.”", options: ["Moramos no quatro andar.", "Moramos no quarto andar.", "Moramos na quarta andar."], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-6-4-fill",
        kind: "fill",
        skill: "Pisanie",
        title: "Brakujące słowa",
        instruction: "Wpisz brakujące słowo. Podpowiedź jest w nawiasie.",
        items: [
          { before: "A minha família mora", after: "apartamento.", answers: ["num"], hint: "(em + um)" },
          { before: "Onde", after: "os meus ténis?", answers: ["estão"], hint: "(estar)" },
          { before: "Eu", after: "no meu quarto.", answers: ["estou"], hint: "(estar)" },
          { before: "A mochila está ao lado", after: "porta.", answers: ["da"], hint: "(de + a)" },
          { before: "", after: "cá, Burek!", answers: ["Vem", "vem"], hint: "(vir – polecenie)" },
          { before: "", after: "o teu quarto, por favor!", answers: ["Arruma", "arruma"], hint: "(arrumar – polecenie)" },
          { before: "Na sala", after: "um sofá grande.", answers: ["há"], hint: "(jest)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-6-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["segundo", "Moro", "andar", "no"], answer: "Moro no segundo andar.", pl: "Mieszkam na drugim piętrze." },
          { words: ["tem", "A", "varanda", "casa", "uma"], answer: "A casa tem uma varanda.", pl: "Dom ma balkon." },
          { words: ["janela", "da", "lado", "está", "A", "ao", "cama"], answer: "A cama está ao lado da janela.", pl: "Łóżko stoi obok okna." },
          { words: ["estante", "os", "Põe", "livros", "na"], answer: "Põe os livros na estante.", pl: "Połóż książki na regale." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-6-4-test",
        kind: "choice",
        skill: "Słownictwo",
        title: "Test: rozdział 6",
        instruction: "10 pytań z całego rozdziału. Jeśli odpowiesz dobrze na co najmniej 8 – rozdział 6 zaliczony!",
        items: [
          { prompt: "**a casa de banho** to…", options: ["kuchnia", "łazienka", "salon"], answer: 1 },
          { prompt: "**o rés-do-chão** to…", options: ["parter", "piwnica", "dach"], answer: 0 },
          { prompt: "Co znaczy **3.º Esq.** w adresie?", options: ["trzecie piętro, prawe drzwi", "trzecie piętro, lewe drzwi", "trzy pokoje, łazienka"], answer: 1 },
          { prompt: "Moro ___ casa grande.", options: ["num", "numa", "no"], answer: 1, speakOptions: true },
          { prompt: "Os pósteres ___ na parede.", options: ["está", "estão", "há"], answer: 1, speakOptions: true },
          { prompt: "„Pod szafą” to…", options: ["debaixo do armário", "debaixo da armário", "em cima do armário"], answer: 0, speakOptions: true },
          { prompt: "No frigorífico ___ sopa.", options: ["está", "estão", "há"], answer: 2, speakOptions: true },
          { prompt: "Polecenie od **pôr**:", options: ["Pões!", "Põe!", "Pôr!"], answer: 1, speakOptions: true },
          {
            prompt: "Czym są **azulejos**?",
            options: ["malowane płytki ceramiczne", "stare kamienice bez windy", "lizbońskie tramwaje"],
            answer: 0,
            explanation: "Azulejos zdobią fasady, kościoły i stacje metra.",
          },
          {
            prompt: "Co znaczy **a secretária** w zdaniu „O computador está em cima da secretária”?",
            options: ["sekretarka", "biurko", "szafka"],
            answer: 1,
            explanation: "a secretária to i biurko, i sekretarka – tu oczywiście biurko.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-6-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Agora tu! Mój dom i mój pokój",
        instruction:
          "Napisz e-mail do kolegi lub koleżanki z Portugalii (7–9 zdań): opisz swój dom albo mieszkanie i swój pokój, a na koniec napisz, co musisz dziś zrobić w domu. Potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "napisz, gdzie mieszkasz i na którym piętrze (moro num… no… andar)",
          "wymień pomieszczenia i opisz je przymiotnikami",
          "opisz, gdzie stoją meble w twoim pokoju (está / estão + przyimki)",
          "użyj há co najmniej raz",
          "zacytuj polecenie, które często słyszysz od rodziców (A minha mãe diz: „Arruma…!”)",
        ],
        placeholder: "Olá! Moro num…",
        model:
          "Olá, Rafael! Moro num apartamento em Wroclaw, no terceiro andar. O prédio é novo e tem elevador. O apartamento tem uma sala grande, uma cozinha, uma casa de banho e dois quartos. O meu quarto é pequeno, mas luminoso. A cama está ao lado da janela e a secretária está em frente da cama. Na parede há um mapa de Portugal! Debaixo da cama estão os meus ténis. A minha mãe diz sempre: „Arruma o quarto!” Abraço!",
        modelPl:
          "Cześć, Rafael! Mieszkam w mieszkaniu we Wrocławiu, na trzecim piętrze. Budynek jest nowy i ma windę. Mieszkanie ma duży salon, kuchnię, łazienkę i dwa pokoje. Mój pokój jest mały, ale jasny. Łóżko stoi obok okna, a biurko naprzeciwko łóżka. Na ścianie wisi mapa Portugalii! Pod łóżkiem są moje buty sportowe. Mama zawsze mówi: „Posprzątaj pokój!” Pozdrawiam!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Opisuję dom: pomieszczenia, piętro, przymiotniki.",
        "Używam num / numa / no / na i liczebników od primeiro do décimo.",
        "Odmieniam estar i mówię, gdzie coś jest, z przyimkami miejsca.",
        "Odróżniam há i está.",
        "Wydaję polecenia, także nieregularne: Põe! Vem! Faz!",
        "Rozumiem portugalski adres: 4.º Dto., r/c.",
      ],
    },
  ],
};
