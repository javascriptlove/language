import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "revisao-unidade-8",
  chapter: 8,
  number: 4,
  title: "Revisão – Unidade 8",
  titlePl: "Powtórka z rozdziału 8",
  intro:
    "Powtarzamy wszystko o świętach i porach roku – i kończymy pierwszy rok portugalskiego! Zrób tę lekcję dzień lub dwa po skończeniu rozdziału 8. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na koniec napisz test. Jeśli coś pójdzie słabo, wróć do lekcji: pogoda i estar a – „Que tempo faz?”, daty, fazer anos i ir + bezokolicznik – „Quando é o teu aniversário?”, życzenia i tradycje – „Feliz Natal!”.",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać pogodę i pory roku, podać temperaturę,",
        "powiedzieć, co dzieje się teraz: está a nevar, estou a jantar,",
        "podać datę i powiedzieć, kiedy masz urodziny,",
        "mówić o planach: vou fazer, vamos comer,",
        "złożyć życzenia i opowiedzieć, gdzie spędzasz święta.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: pogoda",
      paragraphs: [
        "**Que tempo faz?** – **Está** sol / calor / frio / vento / nublado. **Está** bom tempo / mau tempo. **Chove**, **neva**. Temperatura: **Estão** quinze graus, **estão menos** dois graus. Ty: **tenho** frio / **tenho** calor. (Lekcja „Que tempo faz?”)",
        "Teraz, w tej chwili: **estar a** + bezokolicznik: **Está a chover.** **Estou a ler.** Zwykle: czas teraźniejszy: No inverno **chove** muito. W Brazylii: está chove**ndo**.",
        "Pory roku: **a primavera, o verão, o outono, o inverno** – **na** primavera, **no** verão.",
      ],
      table: {
        headers: ["po portugalsku", "po polsku"],
        rows: [
          { cells: ["Hoje está sol, mas está frio.", "Dziś świeci słońce, ale jest zimno."], speak: "Hoje está sol, mas está frio." },
          { cells: ["Olha, está a nevar!", "Patrz, pada śnieg!"], speak: "Olha, está a nevar!" },
          { cells: ["Estão menos cinco graus. Tenho frio!", "Jest minus pięć stopni. Zimno mi!"], speak: "Estão menos cinco graus. Tenho frio!" },
          { cells: ["No verão está muito calor.", "Latem jest bardzo gorąco."], speak: "No verão está muito calor." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: daty, urodziny i plany",
      paragraphs: [
        "Miesiące małą literą: janeiro … dezembro. Data: **dia** + liczba + **de** + miesiąc: Hoje é **dia um de janeiro**. Kiedy? **a** três de março / **no dia** três de março; **em** maio. (Lekcja „Quando é o teu aniversário?”)",
        "Urodziny: **Quando fazes anos?** – **Faço anos** a… **Vou fazer** catorze anos. Życzenia: **Parabéns!**",
        "Plany: **ir** + bezokolicznik: **vou** fazer, **vais** ver, **vai** chover, **vamos** comer, **vão** dar.",
      ],
      table: {
        headers: ["po portugalsku", "po polsku"],
        rows: [
          { cells: ["Que dia é hoje? – É dia um de janeiro.", "Którego dziś jest? – Pierwszego stycznia."], speak: "Que dia é hoje? É dia um de janeiro." },
          { cells: ["Faço anos a vinte e quatro de junho.", "Mam urodziny dwudziestego czwartego czerwca."], speak: "Faço anos a vinte e quatro de junho." },
          { cells: ["Amanhã vai chover.", "Jutro będzie padać."], speak: "Amanhã vai chover." },
          { cells: ["Vamos comer bolo-rei.", "Zjemy bolo-rei."], speak: "Vamos comer bolo-rei." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: święta",
      paragraphs: [
        "Życzenia: **Feliz** Natal! (l. mn. **felizes**) **Bom** Natal! **Bom** ano! **Boas** festas! **Boa** viagem! Odpowiedź: **Igualmente!** (Lekcja „Feliz Natal!”)",
        "U kogoś: **em casa de**: Estou **em casa da** avó. Do kogoś: **a casa de**: Vou **a casa dos** avós. **ficar** – zostawać: **fico**, ficas, fica, ficamos, ficam. **passar** o Natal – spędzać święta.",
      ],
      table: {
        headers: ["po portugalsku", "po polsku"],
        rows: [
          { cells: ["Passo o Natal em casa dos avós.", "Spędzam święta u dziadków."], speak: "Passo o Natal em casa dos avós." },
          { cells: ["Vou a casa da Inês.", "Idę do Inês."], speak: "Vou a casa da Inês." },
          { cells: ["Fico em Lisboa.", "Zostaję w Lizbonie."], speak: "Fico em Lisboa." },
          { cells: ["Boas festas! – Igualmente!", "Wesołych świąt! – Nawzajem!"], speak: "Boas festas! Igualmente!" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słówka rozdziału 8",
      groups: [
        {
          title: "Pogoda i pory roku",
          items: [
            { text: "Que tempo faz?", pl: "Jaka jest pogoda?" },
            { text: "Está sol / calor / frio / vento.", pl: "Świeci słońce / jest gorąco / zimno / wieje." },
            { text: "Está nublado. / Há nevoeiro.", pl: "Jest pochmurno. / Jest mgła." },
            { text: "Chove. / Neva.", pl: "Pada deszcz. / Pada śnieg." },
            { text: "Estão dez graus.", pl: "Jest dziesięć stopni." },
            { text: "Tenho frio. / Tenho calor.", pl: "Zimno mi. / Gorąco mi." },
            { text: "o guarda-chuva", pl: "parasol" },
            { text: "a primavera / o verão", pl: "wiosna / lato" },
            { text: "o outono / o inverno", pl: "jesień / zima" },
          ],
        },
        {
          title: "Daty i urodziny",
          items: [
            { text: "janeiro, fevereiro, março, abril", pl: "styczeń, luty, marzec, kwiecień" },
            { text: "maio, junho, julho, agosto", pl: "maj, czerwiec, lipiec, sierpień" },
            { text: "setembro, outubro, novembro, dezembro", pl: "wrzesień, październik, listopad, grudzień" },
            { text: "Que dia é hoje?", pl: "Którego dziś jest?" },
            { text: "fazer anos / o aniversário", pl: "mieć urodziny / urodziny" },
            { text: "a festa / o convite / o bolo", pl: "przyjęcie / zaproszenie / tort" },
            { text: "Parabéns!", pl: "Wszystkiego najlepszego!" },
          ],
        },
        {
          title: "Święta",
          items: [
            { text: "o Natal / a Consoada", pl: "Boże Narodzenie / kolacja wigilijna" },
            { text: "o Pai Natal / os presentes", pl: "Święty Mikołaj / prezenty" },
            { text: "a árvore de Natal / o presépio", pl: "choinka / szopka" },
            { text: "a passagem de ano / as passas", pl: "sylwester / rodzynki" },
            { text: "o Dia de Reis / o bolo-rei", pl: "Trzech Króli / bolo-rei" },
            { text: "Feliz Natal! / Boas festas! / Bom ano!", pl: "Wesołych Świąt! / Wesołych świąt! / Szczęśliwego Nowego Roku!" },
            { text: "Igualmente!", pl: "Nawzajem!" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Bom ano!",
      titlePl: "Szczęśliwego Nowego Roku!",
      context: "Piątek, 1 stycznia 2027, południe. Wideorozmowa: Carla w Krakowie, Inês w Porto, Tiago i Rafael w Lizbonie.",
      cast: { Tiago: "m", Carla: "f", "Inês": "f", Rafael: "m" },
      lines: [
        { speaker: "Tiago", text: "Bom ano, pessoal! Feliz dois mil e vinte e sete!", pl: "Szczęśliwego Nowego Roku, ludzie! Szczęśliwego 2027!" },
        { speaker: "Carla", text: "Bom ano! Olhem pela janela: aqui em Cracóvia está a nevar. Estão menos cinco graus!", pl: "Szczęśliwego Nowego Roku! Popatrzcie przez okno: tu w Krakowie pada śnieg. Jest minus pięć stopni!" },
        { speaker: "Inês", text: "No Porto está a chover, como sempre. E em Lisboa?", pl: "W Porto pada, jak zawsze. A w Lizbonie?" },
        { speaker: "Rafael", text: "Em Lisboa está sol e estão catorze graus. Para mim, é frio! Mas os meus avós adoram.", pl: "W Lizbonie świeci słońce i jest czternaście stopni. Dla mnie to zimno! Ale moi dziadkowie są zachwyceni." },
        { speaker: "Tiago", text: "Na passagem de ano, vocês comem as doze passas à meia-noite?", pl: "Jecie w sylwestra o północy dwanaście rodzynek?" },
        { speaker: "Inês", text: "Claro! E a avó Rosa sobe sempre a uma cadeira com o pé direito!", pl: "Jasne! A babcia Rosa zawsze wchodzi na krzesło prawą nogą!" },
        { speaker: "Carla", text: "Na Polónia não há passas, mas há fogo de artifício. Muito bonito!", pl: "W Polsce nie ma rodzynek, ale są fajerwerki. Bardzo piękne!" },
        { speaker: "Tiago", text: "Quando chegas a Lisboa, Carla?", pl: "Kiedy przylatujesz do Lizbony, Carlo?" },
        { speaker: "Carla", text: "No domingo, dia três. E na quarta-feira, dia seis, é o Dia de Reis, não é?", pl: "W niedzielę, trzeciego. A w środę, szóstego, jest Trzech Króli, prawda?" },
        { speaker: "Inês", text: "É! Vamos comer bolo-rei em minha casa. E quem encontra a fava paga o próximo!", pl: "Tak! Zjemy bolo-rei u mnie w domu. A kto znajdzie fasolkę, płaci za następne!" },
        { speaker: "Rafael", text: "Combinado! Até quarta-feira!", pl: "Umowa stoi! Do środy!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-8-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Verdadeiro ou falso?",
        instruction: "Na podstawie wideorozmowy zdecyduj: zdanie jest prawdziwe (verdadeiro) czy fałszywe (falso)?",
        items: [
          { prompt: "Em Cracóvia está a nevar.", speak: "Em Cracóvia está a nevar.", options: ["verdadeiro", "falso"], answer: 0 },
          { prompt: "Em Lisboa está a chover.", speak: "Em Lisboa está a chover.", options: ["verdadeiro", "falso"], answer: 1, explanation: "Pada w Porto. W Lizbonie świeci słońce i jest czternaście stopni." },
          { prompt: "A avó Rosa sobe a uma cadeira na passagem de ano.", speak: "A avó Rosa sobe a uma cadeira na passagem de ano.", options: ["verdadeiro", "falso"], answer: 0 },
          { prompt: "A Carla chega a Lisboa no dia seis.", speak: "A Carla chega a Lisboa no dia seis.", options: ["verdadeiro", "falso"], answer: 1, explanation: "Przylatuje w niedzielę, trzeciego. Szóstego jest Trzech Króli." },
          { prompt: "Vão comer bolo-rei em casa da Inês.", speak: "Vão comer bolo-rei em casa da Inês.", options: ["verdadeiro", "falso"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-8-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Kliknij ▶, posłuchaj i wybierz właściwą odpowiedź.",
        items: [
          { audio: "Está vento e está nublado.", options: ["Wieje i jest pochmurno.", "Pada i jest pochmurno.", "Wieje i świeci słońce."], answer: 0 },
          { audio: "Estou a jantar.", options: ["Jem obiad.", "Właśnie jem kolację.", "Zjem kolację."], answer: 1 },
          { audio: "Faço anos a doze de outubro.", options: ["12.08", "2.10", "12.10"], answer: 2 },
          { audio: "Vamos ver o fogo de artifício.", options: ["Obejrzymy fajerwerki.", "Oglądamy film.", "Idziemy na mecz."], answer: 0 },
          { audio: "Fico em casa no Natal.", options: ["Jadę do domu na święta.", "Zostaję w domu na święta.", "Spędzam święta u babci."], answer: 1 },
          { audio: "Boa viagem!", options: ["Wesołych świąt!", "Dobranoc!", "Szczęśliwej podróży!"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-8-4-grammar",
        kind: "choice",
        skill: "Gramatyka",
        title: "Escolhe bem!",
        instruction: "Wybierz poprawne zdanie.",
        items: [
          { prompt: "„Jest mi zimno.”", options: ["Está frio.", "Tenho frio.", "Sou frio."], answer: 1, speakOptions: true },
          { prompt: "„Właśnie pada śnieg.” (Portugalia)", options: ["Está nevando.", "Está a nevar.", "Neva-se."], answer: 1, speakOptions: true },
          { prompt: "„Jest osiem stopni.”", options: ["Estão oito graus.", "Está oito graus.", "Há oito graus de frio."], answer: 0, speakOptions: true },
          { prompt: "„Mam urodziny w kwietniu.”", options: ["Faço anos em abril.", "Faço anos no Abril.", "Tenho anos em abril."], answer: 0, speakOptions: true },
          { prompt: "„Upiekę tort.”", options: ["Vou a fazer um bolo.", "Vou fazer um bolo.", "Vou faço um bolo."], answer: 1, speakOptions: true },
          { prompt: "„Spędzam święta u dziadków.”", options: ["Passo o Natal a casa dos avós.", "Passo o Natal em casa dos avós.", "Passo o Natal de casa dos avós."], answer: 1, speakOptions: true, explanation: "Gdzie? → em casa de." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-8-4-fill",
        kind: "fill",
        skill: "Pisanie",
        title: "Brakujące słowa",
        instruction: "Wpisz brakujące słowo. Podpowiedź jest w nawiasie.",
        items: [
          { before: "No inverno", after: "muito em Lisboa.", answers: ["chove"], hint: "(pada deszcz)" },
          { before: "Hoje", after: "vinte graus.", answers: ["estão"], hint: "(estar)" },
          { before: "O que estás", after: "fazer?", answers: ["a"] },
          { before: "Hoje é dia trinta e um de", after: ".", answers: ["dezembro"], hint: "(grudnia)" },
          { before: "Amanhã nós", after: "comer bolo-rei.", answers: ["vamos"], hint: "(ir)" },
          { before: "Eu", after: "em Lisboa nas férias.", answers: ["fico"], hint: "(ficar)" },
          { before: "", after: "festas! – Igualmente!", answers: ["Boas", "boas"], hint: "(wesołych)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-8-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["está", "Hoje", "sol", "frio", "mas", "está"], answer: "Hoje está sol mas está frio.", pl: "Dziś świeci słońce, ale jest zimno." },
          { words: ["de", "anos", "Faço", "a", "julho", "dois"], answer: "Faço anos a dois de julho.", pl: "Mam urodziny drugiego lipca." },
          { words: ["praia", "Vamos", "à", "verão", "no"], answer: "Vamos à praia no verão.", pl: "Latem pojedziemy na plażę." },
          { words: ["Natal", "a", "Feliz", "todos"], answer: "Feliz Natal a todos!", pl: "Wesołych Świąt wszystkim!" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-8-4-test",
        kind: "choice",
        skill: "Słownictwo",
        title: "Test: rozdział 8",
        instruction: "10 pytań z całego rozdziału. Jeśli odpowiesz dobrze na co najmniej 8 – rozdział 8 zaliczony!",
        items: [
          { prompt: "**Está nublado.** to…", options: ["Jest pochmurno.", "Jest mgła.", "Wieje."], answer: 0 },
          { prompt: "**o guarda-chuva** to…", options: ["kurtka", "parasol", "kalosze"], answer: 1 },
          { prompt: "„Lato” to…", options: ["a primavera", "o outono", "o verão"], answer: 2, speakOptions: true },
          { prompt: "Estão menos dois ___.", options: ["graus", "grados", "gradas"], answer: 0, speakOptions: true },
          { prompt: "Który miesiąc jest po **outubro**?", options: ["setembro", "novembro", "dezembro"], answer: 1, speakOptions: true },
          { prompt: "Co znaczy **Quando fazes anos?**", options: ["Ile masz lat?", "Kiedy masz urodziny?", "Co robisz w tym roku?"], answer: 1 },
          { prompt: "Odpowiedź na **Boas festas!**:", options: ["Igualmente!", "Parabéns!", "De nada!"], answer: 0, speakOptions: true },
          { prompt: "„Zostaję w domu.”", options: ["Fico em casa.", "Fico a casa.", "Vou em casa."], answer: 0, speakOptions: true },
          {
            prompt: "Co Portugalczycy jedzą o północy w sylwestra?",
            options: ["dwanaście winogron", "dwanaście rodzynek", "kawałek bolo-rei"],
            answer: 1,
            explanation: "As doze passas – i wypowiadają dwanaście życzeń.",
          },
          {
            prompt: "Czym jest **o verão de São Martinho**?",
            options: ["listopadowym ciepłem wokół 11 listopada", "letnim świętem w Porto", "brazylijskim Bożym Narodzeniem"],
            answer: 0,
            explanation: "To portugalskie „babie lato” – czas pieczonych kasztanów.",
          },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "pt-8-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Agora tu! Mój rok",
        instruction:
          "Napisz e-mail noworoczny do kolegi lub koleżanki z Portugalii (7–9 zdań): jaka jest dziś pogoda, jak spędziłeś/spędziłaś święta (w czasie teraźniejszym: passo o Natal…), kiedy masz urodziny i jakie masz plany na nowy rok. Potem kliknij „Posłuchaj mojego tekstu”, przeczytaj go na głos razem z lektorem i porównaj z przykładem.",
        checklist: [
          "zacznij od życzeń (Bom ano! Feliz Ano Novo!)",
          "opisz pogodę i podaj temperaturę, użyj estar a (está a nevar…)",
          "napisz, gdzie i z kim spędzasz święta (passo o Natal em casa de…)",
          "napisz, kiedy masz urodziny (faço anos a…)",
          "napisz co najmniej trzy plany z ir + bezokolicznik (vou aprender, vamos visitar…)",
        ],
        placeholder: "Olá! Bom ano! Hoje…",
        model:
          "Olá, Tiago! Bom ano! Hoje é dia um de janeiro. Aqui em Zakopane está a nevar e estão menos oito graus. Tenho muito frio! Passo o Natal e a passagem de ano em casa dos meus tios, nas montanhas. Faço anos a dezassete de fevereiro e vou fazer catorze anos. Este ano vou aprender a esquiar e vou estudar muito português. No verão vamos visitar Portugal com os meus pais! Abraço e boas festas!",
        modelPl:
          "Cześć, Tiago! Szczęśliwego Nowego Roku! Dziś jest pierwszy stycznia. Tu w Zakopanem pada śnieg i jest minus osiem stopni. Bardzo mi zimno! Święta i sylwestra spędzam u wujostwa, w górach. Mam urodziny siedemnastego lutego i skończę czternaście lat. W tym roku nauczę się jeździć na nartach i będę dużo uczyć się portugalskiego. Latem odwiedzimy z rodzicami Portugalię! Ściskam i wesołych świąt!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Opisuję pogodę i pory roku: Está sol. Chove. Estão dez graus.",
        "Mówię, co dzieje się teraz: está a nevar, estou a ler.",
        "Podaję datę i mówię, kiedy mam urodziny: Faço anos a três de março.",
        "Mówię o planach: vou fazer, vamos comer.",
        "Składam życzenia i mówię, gdzie spędzam święta.",
        "Ukończyłem / ukończyłam pierwszy rok portugalskiego – Parabéns!",
      ],
    },
  ],
};
