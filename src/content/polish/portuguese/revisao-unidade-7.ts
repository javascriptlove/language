import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "revisao-unidade-7",
  chapter: 7,
  number: 4,
  title: "Revisão – Unidade 7",
  titlePl: "Powtórka z rozdziału 7",
  intro:
    "Powtarzamy wszystko o ubraniach i zakupach! Zrób tę lekcję dzień lub dwa po skończeniu rozdziału 7. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na koniec napisz test. Jeśli coś pójdzie słabo, wróć do lekcji: ubrania i kolory – „O que vestes hoje?”, ceny, este / esse / aquele i queria – „Quanto custa?”, porównania i preferir – „Um presente para o Tiago”.",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać ubrania i kolory – i zgodzić kolor z rzeczownikiem,",
        "zrobić zakupy: Queria… Quanto custa? Posso experimentar?,",
        "użyć este, esse, aquele,",
        "podać cenę od 1 do 1000 euro,",
        "porównać rzeczy i powiedzieć, co wolisz.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: ubrania i kolory",
      paragraphs: [
        "Kolor stoi **za** rzeczownikiem i się zgadza: um casaco branc**o**, uma saia branc**a**, uns sapatos branc**os**, umas meias branc**as**. Na -e / -l – jedna forma dla obu rodzajów: verde → verde**s**, azul → **azuis**. **cor-de-rosa** i **cor de laranja** – bez zmian. (Lekcja „O que vestes hoje?”)",
        "**vestir** – mieć na sobie, wkładać (**visto**, vestes, veste…): Hoje **visto** uma camisola. **usar** – nosić (zwykle): A Inês **usa** sempre preto.",
      ],
      table: {
        headers: ["po portugalsku", "po polsku"],
        rows: [
          { cells: ["Hoje visto umas calças pretas.", "Dziś mam na sobie czarne spodnie."], speak: "Hoje visto umas calças pretas." },
          { cells: ["As luvas azuis são novas.", "Niebieskie rękawiczki są nowe."], speak: "As luvas azuis são novas." },
          { cells: ["Uso meias cor de laranja.", "Noszę pomarańczowe skarpetki."], speak: "Uso meias cor de laranja." },
          { cells: ["Qual é a tua cor preferida?", "Jaki jest twój ulubiony kolor?"], speak: "Qual é a tua cor preferida?" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: w sklepie",
      paragraphs: [
        "**este / esta** – przy mnie, **esse / essa** – przy tobie, **aquele / aquela** – daleko. Liczba mnoga: estes, estas, esses, essas, aqueles, aquelas. de + este = **deste**, em + esta = **nesta**. (Lekcja „Quanto custa?”)",
        "Grzecznie: **Queria**… **Posso experimentar?** Cena: **Quanto custa?** (jedna rzecz) / **Quanto custam?** (kilka). **cem** (100), **cento e** vinte (120), duzentos, trezentos, **quinhentos**, mil. 9,99 € = nove euros **e** noventa e nove.",
      ],
      table: {
        headers: ["po portugalsku", "po polsku"],
        rows: [
          { cells: ["Queria experimentar estas botas.", "Chciałabym przymierzyć te kozaki."], speak: "Queria experimentar estas botas." },
          { cells: ["Quanto custa aquele casaco?", "Ile kosztuje tamta kurtka?"], speak: "Quanto custa aquele casaco?" },
          { cells: ["Custa cento e vinte euros.", "Kosztuje sto dwadzieścia euro."], speak: "Custa cento e vinte euros." },
          { cells: ["É demasiado caro. Levo este.", "To za drogie. Biorę ten."], speak: "É demasiado caro. Levo este." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: porównania i preferir",
      paragraphs: [
        "**mais … do que** (bardziej niż), **menos … do que** (mniej niż), **tão … como** (tak samo jak). Formy specjalne: **melhor**, **pior**, **maior** – a „mniejszy” w Portugalii to **mais pequeno**. (Lekcja „Um presente para o Tiago”)",
        "**Qual?** – jedna rzecz, **Quais?** – kilka. **preferir**: **prefiro**, preferes, prefere, preferimos, preferem.",
      ],
      table: {
        headers: ["po portugalsku", "po polsku"],
        rows: [
          { cells: ["A camisola é mais cara do que o boné.", "Koszulka jest droższa niż czapka."], speak: "A camisola é mais cara do que o boné." },
          { cells: ["O gorro é tão caro como as luvas.", "Czapka jest tak samo droga jak rękawiczki."], speak: "O gorro é tão caro como as luvas." },
          { cells: ["Esta loja é melhor.", "Ten sklep jest lepszy."], speak: "Esta loja é melhor." },
          { cells: ["Qual preferes? – Prefiro a vermelha.", "Którą wolisz? – Wolę czerwoną."], speak: "Qual preferes? Prefiro a vermelha." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słówka rozdziału 7",
      groups: [
        {
          title: "Ubrania",
          items: [
            { text: "a camisola / a t-shirt / a camisa", pl: "sweter, bluza / koszulka / koszula" },
            { text: "as calças (de ganga)", pl: "spodnie (dżinsy)" },
            { text: "a saia / o vestido", pl: "spódnica / sukienka" },
            { text: "o casaco / o fato de treino", pl: "kurtka / dres" },
            { text: "as sapatilhas / as botas", pl: "trampki / kozaki" },
            { text: "o gorro / o boné", pl: "czapka zimowa / z daszkiem" },
            { text: "o cachecol / as luvas / as meias", pl: "szalik / rękawiczki / skarpetki" },
          ],
        },
        {
          title: "Kolory",
          items: [
            { text: "branco / preto / cinzento", pl: "biały / czarny / szary" },
            { text: "vermelho / amarelo / azul", pl: "czerwony / żółty / niebieski" },
            { text: "verde / castanho / roxo", pl: "zielony / brązowy / fioletowy" },
            { text: "cor-de-rosa / cor de laranja", pl: "różowy / pomarańczowy" },
          ],
        },
        {
          title: "Zakupy i porównania",
          items: [
            { text: "a loja / a feira", pl: "sklep / targ" },
            { text: "Queria… / Posso experimentar?", pl: "Chciałbym… / Mogę przymierzyć?" },
            { text: "o tamanho / o provador", pl: "rozmiar / przymierzalnia" },
            { text: "Quanto custa? / Quanto custam?", pl: "Ile kosztuje? / Ile kosztują?" },
            { text: "caro / barato / demasiado caro", pl: "drogi / tani / za drogi" },
            { text: "os saldos", pl: "wyprzedaż" },
            { text: "mais … do que / tão … como", pl: "bardziej … niż / tak samo … jak" },
            { text: "melhor / pior / maior", pl: "lepszy / gorszy / większy" },
            { text: "o presente / fazer anos", pl: "prezent / mieć urodziny" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Gorro e luvas para Cracóvia",
      titlePl: "Czapka i rękawiczki na Kraków",
      context: "Sobota. Carla i Inês idą do Loja Fixe – sklepu z ulotki o wyprzedaży. Carla potrzebuje czapki i rękawiczek na święta w Krakowie.",
      cast: { Carla: "f", "Inês": "f", Vendedor: "m" },
      lines: [
        { speaker: "Vendedor", text: "Boa tarde! Posso ajudar?", pl: "Dzień dobry! W czym mogę pomóc?" },
        { speaker: "Carla", text: "Boa tarde. Queria um gorro e umas luvas. Quanto custam?", pl: "Dzień dobry. Chciałabym czapkę i rękawiczki. Ile kosztują?" },
        { speaker: "Vendedor", text: "Estão em saldos: dez euros cada.", pl: "Są na wyprzedaży: po dziesięć euro." },
        { speaker: "Inês", text: "Olha, Carla: este gorro branco e aquele cinzento, ali. Qual preferes?", pl: "Patrz, Carlo: ta biała czapka i tamta szara, tam. Którą wolisz?" },
        { speaker: "Carla", text: "Prefiro o branco. É mais bonito do que o cinzento.", pl: "Wolę białą. Jest ładniejsza niż szara." },
        { speaker: "Inês", text: "Mas o cinzento é maior e mais quente. Em Cracóvia está muito frio!", pl: "Ale szara jest większa i cieplejsza. W Krakowie jest bardzo zimno!" },
        { speaker: "Carla", text: "Tens razão. E as luvas? Essas vermelhas são lindas!", pl: "Masz rację. A rękawiczki? Te czerwone są śliczne!" },
        { speaker: "Inês", text: "São da mesma cor que o teu casaco novo!", pl: "Są tego samego koloru co twoja nowa kurtka!" },
        { speaker: "Carla", text: "Perfeito! Levo o gorro cinzento e as luvas vermelhas. São vinte euros, não é?", pl: "Idealnie! Biorę szarą czapkę i czerwone rękawiczki. To dwadzieścia euro, prawda?" },
        { speaker: "Vendedor", text: "Exatamente. A caixa é ali. Boas festas!", pl: "Dokładnie. Kasa jest tam. Wesołych świąt!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-7-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Verdadeiro ou falso?",
        instruction: "Na podstawie dialogu zdecyduj: zdanie jest prawdziwe (verdadeiro) czy fałszywe (falso)?",
        items: [
          { prompt: "O gorro e as luvas custam dez euros cada.", speak: "O gorro e as luvas custam dez euros cada.", options: ["verdadeiro", "falso"], answer: 0 },
          { prompt: "A Carla prefere o gorro cinzento.", speak: "A Carla prefere o gorro cinzento.", options: ["verdadeiro", "falso"], answer: 1, explanation: "Woli białą, ale kupuje szarą, bo jest cieplejsza." },
          { prompt: "O gorro cinzento é maior do que o branco.", speak: "O gorro cinzento é maior do que o branco.", options: ["verdadeiro", "falso"], answer: 0 },
          { prompt: "As luvas são da mesma cor que o casaco da Carla.", speak: "As luvas são da mesma cor que o casaco da Carla.", options: ["verdadeiro", "falso"], answer: 0, explanation: "Kurtka z lekcji „Quanto custa?” jest czerwona – rękawiczki też." },
          { prompt: "A Carla paga trinta euros.", speak: "A Carla paga trinta euros.", options: ["verdadeiro", "falso"], answer: 1, explanation: "Płaci dwadzieścia euro – dwie rzeczy po dziesięć." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-7-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj i wybierz właściwą odpowiedź.",
        items: [
          { audio: "Hoje visto um vestido amarelo.", options: ["Dziś mam na sobie żółtą sukienkę.", "Dziś mam na sobie żółtą spódnicę.", "Dziś kupuję żółtą sukienkę."], answer: 0 },
          { audio: "Quanto custam essas botas?", options: ["Ile kosztują tamte buty?", "Ile kosztują te kozaki (przy tobie)?", "Ile kosztuje ten but?"], answer: 1 },
          { audio: "Custa trezentos euros.", options: ["30 €", "3000 €", "300 €"], answer: 2 },
          { audio: "Posso experimentar?", options: ["Mogę przymierzyć?", "Mogę zapłacić?", "Mogę pomóc?"], answer: 0 },
          { audio: "O cachecol é mais barato do que o gorro.", options: ["Szalik jest droższy niż czapka.", "Szalik jest tańszy niż czapka.", "Szalik jest tak samo drogi jak czapka."], answer: 1 },
          { audio: "Prefiro as sapatilhas brancas.", options: ["Mam białe trampki.", "Wolę białe skarpetki.", "Wolę białe trampki."], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-7-4-grammar",
        kind: "choice",
        skill: "Gramatyka",
        title: "Escolhe bem!",
        instruction: "Wybierz poprawne zdanie.",
        items: [
          { prompt: "„Mam niebieskie spodnie.”", options: ["Tenho umas calças azul.", "Tenho umas calças azuis.", "Tenho umas calças azules."], answer: 1, speakOptions: true },
          { prompt: "„Różowa sukienka”", options: ["um vestido cor-de-rosa", "um vestido cor-de-rosas", "um vestido rosado"], answer: 0, speakOptions: true },
          { prompt: "Trzymasz but: „Quanto custa ___ sapato?”", options: ["aquele", "esse", "este"], answer: 2, speakOptions: true },
          { prompt: "„Chciałabym czapkę.” (grzecznie)", options: ["Queria um gorro.", "Quero gorro.", "Queres um gorro."], answer: 0, speakOptions: true },
          { prompt: "„Ten sklep jest większy niż tamten.”", options: ["Esta loja é mais grande do que aquela.", "Esta loja é maior do que aquela.", "Esta loja é maior como aquela."], answer: 1, speakOptions: true },
          { prompt: "„Wolę szalik.”", options: ["Prefero o cachecol.", "Prefere o cachecol.", "Prefiro o cachecol."], answer: 2, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-7-4-fill",
        kind: "fill",
        skill: "Pisanie",
        title: "Brakujące słowa",
        instruction: "Wpisz brakujące słowo. Podpowiedź jest w nawiasie.",
        items: [
          { before: "uma camisola", after: "", answers: ["branca"], hint: "(branco)" },
          { before: "uns ténis", after: "", answers: ["pretos"], hint: "(preto)" },
          { before: "Quanto", after: "estas meias?", answers: ["custam"], hint: "(kosztują)" },
          { before: "O casaco custa", after: "euros.", answers: ["cem"], hint: "(100)" },
          { before: "As botas são mais caras do", after: "as sapatilhas.", answers: ["que"], hint: "(niż)" },
          { before: "A saia é", after: "bonita como o vestido.", answers: ["tão"], hint: "(tak samo)" },
          { before: "", after: "preferes, o azul ou o verde?", answers: ["Qual", "qual"], hint: "(który)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-7-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["vermelhas", "luvas", "umas", "Queria"], answer: "Queria umas luvas vermelhas.", pl: "Chciałabym czerwone rękawiczki." },
          { words: ["aquela", "Quanto", "saia?", "custa"], answer: "Quanto custa aquela saia?", pl: "Ile kosztuje tamta spódnica?" },
          { words: ["é", "Este", "do", "aquele", "melhor", "que"], answer: "Este é melhor do que aquele.", pl: "Ten jest lepszy niż tamten." },
          { words: ["preto", "visto", "Hoje", "fato", "de", "um", "treino"], answer: "Hoje visto um fato de treino preto.", pl: "Dziś mam na sobie czarny dres." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-7-4-test",
        kind: "choice",
        skill: "Słownictwo",
        title: "Test: rozdział 7",
        instruction: "10 pytań z całego rozdziału. Jeśli odpowiesz dobrze na co najmniej 8 – rozdział 7 zaliczony!",
        items: [
          { prompt: "**as sapatilhas** to…", options: ["skarpetki", "trampki", "kapcie"], answer: 1 },
          { prompt: "**cinzento** to…", options: ["szary", "brązowy", "fioletowy"], answer: 0 },
          { prompt: "umas meias ___", options: ["amarelo", "amarelas", "amarela"], answer: 1, speakOptions: true },
          { prompt: "Rzecz daleko od nas obu:", options: ["esta", "essa", "aquela"], answer: 2, speakOptions: true },
          { prompt: "120 € to…", options: ["cem e vinte euros", "cento e vinte euros", "cento vinte euros"], answer: 1, speakOptions: true },
          { prompt: "Co znaczy **É demasiado caro**?", options: ["To za drogie.", "To bardzo tanie.", "To na wyprzedaży."], answer: 0 },
          { prompt: "„Lepszy niż” to…", options: ["mais bom do que", "melhor do que", "mais melhor que"], answer: 1, speakOptions: true },
          { prompt: "Jak jest „wolę”?", options: ["prefiro", "prefero", "preferes"], answer: 0, speakOptions: true },
          {
            prompt: "Czym jest **a Feira da Ladra**?",
            options: ["sklepem Benfiki", "najstarszym pchlim targiem Lizbony", "wyprzedażą po świętach"],
            answer: 1,
            explanation: "Odbywa się we wtorki i soboty na Campo de Santa Clara.",
          },
          {
            prompt: "Co Portugalczyk odpowie na **Que número calças?**",
            options: ["Calço o 38.", "Visto o M.", "Custa trinta e oito."],
            answer: 0,
            explanation: "To pytanie o rozmiar butów – czasownik calçar.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-7-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Agora tu! Moje zakupy",
        instruction:
          "Napisz wiadomość do kolegi lub koleżanki z Portugalii (7–9 zdań): co dziś masz na sobie i co kupiłeś/kupiłaś (albo chcesz kupić) – z cenami i porównaniami. Potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "napisz, co masz dziś na sobie – z kolorami (Hoje visto…)",
          "napisz, czego potrzebujesz albo co chcesz kupić (Queria…)",
          "podaj co najmniej dwie ceny (custa… / custam…)",
          "porównaj dwie rzeczy (mais … do que, melhor, tão … como)",
          "napisz, co wolisz (Prefiro…)",
        ],
        placeholder: "Olá! Hoje visto…",
        model:
          "Olá, Inês! Hoje visto umas calças de ganga, uma camisola verde e as minhas botas castanhas. Amanhã vou às compras com a minha mãe. Queria um casaco novo para o inverno. Na loja perto de casa há dois casacos bonitos: um azul e um preto. O azul custa oitenta euros e o preto custa cento e dez. O preto é mais quente, mas é mais caro. Prefiro o azul – é a minha cor preferida! Beijinhos!",
        modelPl:
          "Cześć, Inês! Dziś mam na sobie dżinsy, zieloną bluzę i moje brązowe kozaki. Jutro idę z mamą na zakupy. Chciałabym nową kurtkę na zimę. W sklepie niedaleko domu są dwie ładne kurtki: niebieska i czarna. Niebieska kosztuje osiemdziesiąt euro, a czarna sto dziesięć. Czarna jest cieplejsza, ale droższa. Wolę niebieską – to mój ulubiony kolor! Buziaki!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Nazywam ubrania i kolory i zgadzam kolor z rzeczownikiem: umas luvas azuis.",
        "Robię zakupy: Queria… Quanto custa? Posso experimentar?",
        "Używam este, esse, aquele.",
        "Podaję ceny do 1000 euro: cem, cento e vinte, quinhentos.",
        "Porównuję: mais … do que, tão … como, melhor, maior.",
        "Mówię, co wolę: Prefiro…",
      ],
    },
  ],
};
