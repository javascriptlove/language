import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "ripasso-unita-6",
  chapter: 6,
  number: 4,
  title: "Ripasso – Unità 6",
  titlePl: "Powtórka z rozdziału 6",
  intro:
    "To lekcja powtórkowa – zrób ją dzień lub dwa po skończeniu rozdziału 6. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na końcu napisz test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: pomieszczenia, piętra i przymiotniki – lekcja 1 („Abito in un appartamento”), meble, przyimki i sul / nella – lekcja 2 („Nella mia camera”), c'è czy è i tryb rozkazujący – lekcja 3 („Dov'è il mio telefono?”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać swój dom lub mieszkanie: pomieszczenia, piętro, czego nie ma,",
        "opisać pokój i powiedzieć, gdzie co stoi – z przyimkami i sul / nella / alla,",
        "odróżnić c'è od è,",
        "wydać polecenie: Cerca! Metti! Prendi! Vieni!",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: dom, piętra i przymiotniki",
      paragraphs: [
        "Opis mieszkania: **C'è** una cucina, **ci sono** due camere… **Non c'è** il giardino. → lekcja 1",
        "Piętra: **al piano terra** (parter), **al primo piano**, al secondo, al terzo, al quarto… → lekcja 1",
        "Przymiotnik po rzeczowniku i pasuje do niego: un soggiorno luminos**o**, una cucina piccol**a**, due bagni modern**i**. **grande** – grande / grandi. Bardzo: **-issimo** (piccolissimo). → lekcja 1",
      ],
      table: {
        headers: ["", "przykład", "po polsku"],
        rows: [
          { cells: ["c'è", "C'è un balcone.", "Jest balkon."], speak: "C'è un balcone." },
          { cells: ["ci sono", "Ci sono tre camere.", "Są trzy sypialnie."], speak: "Ci sono tre camere." },
          { cells: ["non c'è", "Non c'è l'ascensore.", "Nie ma windy."], speak: "Non c'è l'ascensore." },
          { cells: ["piętro", "Abito al quarto piano.", "Mieszkam na czwartym piętrze."], speak: "Abito al quarto piano." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: przyimki i sul / nella / alla",
      paragraphs: [
        "Przyimki: **su** (na), **sotto** (pod), **sopra** (nad), **in** (w), **davanti a** (przed), **dietro** (za), **accanto a** (obok), **di fronte a** (naprzeciwko), **tra … e …** (między). → lekcja 2",
        "**su, in, a** łączą się z rodzajnikiem: **sul, sulla, sull', sui, sulle** / **nel, nella, nell', nei, nelle** / **al, alla, all', ai, alle**. → lekcja 2",
      ],
      table: {
        headers: ["", "+ il", "+ la", "+ l'"],
        rows: [
          { cells: ["su", "sul letto", "sulla sedia", "sull'armadio"], speak: "sul letto, sulla sedia, sull'armadio" },
          { cells: ["in", "nel cassetto", "nella scatola", "nell'armadio"], speak: "nel cassetto, nella scatola, nell'armadio" },
          { cells: ["a", "accanto al letto", "accanto alla porta", "accanto all'armadio"], speak: "accanto al letto, accanto alla porta, accanto all'armadio" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: c'è czy è? i tryb rozkazujący",
      paragraphs: [
        "**c'è / ci sono** + un / una / liczba = jest **jakiś** (coś nowego): Nello zaino **c'è un** panino. **è / sono** + il / la / mio / imię = jest **ten konkretny**: **Il mio** telefono **è** nella tasca. → lekcja 3",
        "Tryb rozkazujący (tu): **-are → -a** (Cerca! Guarda! Aspetta!), **-ere / -ire** = forma tu (Prendi! Metti! Senti!). Nieregularne: **Vieni! Vai! Fai!** Gdy coś się znajdzie: **Eccolo! Eccola!** → lekcja 3",
      ],
      table: {
        headers: ["c'è / ci sono", "è / sono"],
        rows: [
          { cells: ["C'è un libro sul tavolo.", "Il libro è sul tavolo."], speak: "C'è un libro sul tavolo. Il libro è sul tavolo." },
          { cells: ["Ci sono due calzini per terra.", "I miei calzini sono per terra."], speak: "Ci sono due calzini per terra. I miei calzini sono per terra." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Dom i pomieszczenia (lekcja 1)",
          items: [
            { text: "una casa / un appartamento / un palazzo", pl: "dom / mieszkanie / kamienica" },
            { text: "il piano terra / l'ascensore", pl: "parter / winda" },
            { text: "la cucina / il soggiorno / la sala da pranzo", pl: "kuchnia / salon / jadalnia" },
            { text: "la camera / il bagno / l'ingresso", pl: "sypialnia / łazienka / przedpokój" },
            { text: "il balcone / la terrazza / il giardino", pl: "balkon / taras / ogród" },
            { text: "a sinistra / a destra", pl: "po lewej / po prawej" },
          ],
        },
        {
          title: "Meble i przyimki (lekcja 2)",
          items: [
            { text: "il letto / la scrivania / la sedia", pl: "łóżko / biurko / krzesło" },
            { text: "l'armadio / la libreria", pl: "szafa / regał" },
            { text: "la finestra / la porta / il muro", pl: "okno / drzwi / ściana" },
            { text: "il tappeto / la lampada / lo specchio", pl: "dywan / lampa / lustro" },
            { text: "su / sotto / sopra", pl: "na / pod / nad" },
            { text: "davanti a / dietro", pl: "przed / za" },
            { text: "accanto a / di fronte a / tra", pl: "obok / naprzeciwko / między" },
          ],
        },
        {
          title: "Szukamy (lekcja 3)",
          items: [
            { text: "cercare / trovare", pl: "szukać / znaleźć" },
            { text: "mettere / mettere in ordine", pl: "kłaść / sprzątać" },
            { text: "il telefono / le chiavi / gli occhiali", pl: "telefon / klucze / okulary" },
            { text: "per terra / dappertutto", pl: "na podłodze / wszędzie" },
            { text: "Eccolo! / Eccola!", pl: "Jest!" },
            { text: "Che disordine!", pl: "Co za bałagan!" },
            { text: "avere la testa fra le nuvole", pl: "być roztrzepanym" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "La nuova camera di Olena",
      titlePl: "Nowy pokój Oleny",
      context: "Rodzina Oleny przeprowadza się do większego mieszkania. W środę po południu Laura i Marco pomagają jej urządzić pokój. Wszędzie stoją kartony.",
      cast: { Olena: "f", Laura: "f", Marco: "m" },
      lines: [
        { speaker: "Olena", text: "Benvenuti nella mia nuova casa! Adesso abitiamo al quinto piano. E c'è una terrazza grande!", pl: "Witajcie w moim nowym mieszkaniu! Teraz mieszkamy na piątym piętrze. I jest duży taras!" },
        { speaker: "Laura", text: "Che bella camera! Ma… quante scatole!", pl: "Jaki ładny pokój! Ale… ile pudeł!" },
        { speaker: "Olena", text: "Sì, che disordine! Marco, metti la scrivania davanti alla finestra, per favore.", pl: "Tak, co za bałagan! Marco, postaw biurko przed oknem, proszę." },
        { speaker: "Marco", text: "Va bene. E il letto? Lo metto accanto alla scrivania?", pl: "Dobra. A łóżko? Postawić je obok biurka?" },
        { speaker: "Olena", text: "No, metti il letto di fronte alla porta. E la libreria tra il letto e l'armadio.", pl: "Nie, postaw łóżko naprzeciwko drzwi. A regał między łóżkiem a szafą." },
        { speaker: "Laura", text: "Olena, dov'è la tua lampada?", pl: "Oleno, gdzie jest twoja lampa?" },
        { speaker: "Olena", text: "È nella scatola grande. Cerca sotto i libri.", pl: "Jest w dużym pudle. Szukaj pod książkami." },
        { speaker: "Laura", text: "In questa scatola ci sono libri, un ombrello, una tazza… Eccola! La metto sulla scrivania?", pl: "W tym pudle są książki, parasol, kubek… Jest! Postawić ją na biurku?" },
        { speaker: "Olena", text: "Perfetto! E i miei poster? Dove sono i miei poster?", pl: "Idealnie! A moje plakaty? Gdzie są moje plakaty?" },
        { speaker: "Marco", text: "Ehm… Sono sotto i miei piedi. Scusa!", pl: "Eee… Są pod moimi stopami. Przepraszam!" },
        { speaker: "Olena", text: "Marco! Hai proprio la testa fra le nuvole!", pl: "Marco! Naprawdę masz głowę w chmurach!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "it-6-4-dialogue",
        kind: "choice",
        skill: "Słuchanie",
        title: "Hai capito? – Zrozumiałeś/-aś?",
        instruction: "Odpowiedz na pytania do dialogu „La nuova camera di Olena”.",
        items: [
          { prompt: "A che piano abita Olena adesso?", speak: "A che piano abita Olena adesso?", options: ["al secondo piano", "al quinto piano", "al piano terra"], answer: 1, speakOptions: true },
          { prompt: "Dov'è la scrivania?", speak: "Dov'è la scrivania?", options: ["accanto al letto", "davanti alla finestra", "di fronte alla porta"], answer: 1, speakOptions: true },
          { prompt: "Dov'è il letto?", speak: "Dov'è il letto?", options: ["di fronte alla porta", "sotto la finestra", "accanto all'armadio"], answer: 0, speakOptions: true },
          { prompt: "Cosa c'è nella scatola grande?", speak: "Cosa c'è nella scatola grande?", options: ["vestiti e scarpe", "libri, un ombrello, una tazza e la lampada", "i poster"], answer: 1, speakOptions: true },
          { prompt: "Dove sono i poster?", speak: "Dove sono i poster?", options: ["sul muro", "sotto i piedi di Marco", "nell'armadio"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-6-4-house",
        kind: "fill",
        skill: "Słownictwo",
        title: "La mia casa",
        instruction: "Uzupełnij zdania. Polskie podpowiedzi są w nawiasach.",
        items: [
          { before: "Abito in un", after: "al terzo piano.", answers: ["appartamento"], hint: "(mieszkanie)" },
          { before: "La cucina è al piano", after: ".", answers: ["terra"], hint: "(parter)" },
          { before: "Non c'è l'", after: ".", answers: ["ascensore"], hint: "(winda)" },
          { before: "Mi faccio la doccia in", after: ".", answers: ["bagno"], hint: "(łazienka)" },
          { before: "I miei libri sono sulla", after: ".", answers: ["libreria"], hint: "(regał)" },
          { before: "Abito al", after: "piano.", answers: ["primo"], hint: "(1.)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-6-4-prepositions",
        kind: "choice",
        skill: "Gramatyka",
        title: "Przyimki i sul / nella",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "Burek dorme ___ il letto. (pod)", options: ["sopra", "sotto", "davanti"], answer: 1 },
          { prompt: "La lampada è accanto ___ computer.", options: ["al", "alla", "a il"], answer: 0 },
          { prompt: "Il telefono è ___ tasca.", options: ["nel", "nella", "in la"], answer: 1 },
          { prompt: "I libri sono ___ scrivania.", options: ["sul", "sulla", "su la"], answer: 1 },
          { prompt: "Il comodino è ___ i due letti.", options: ["tra", "davanti", "di fronte"], answer: 0 },
          { prompt: "„jasny salon”", options: ["un luminoso soggiorno", "un soggiorno luminosa", "un soggiorno luminoso"], answer: 2, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-6-4-ce",
        kind: "choice",
        skill: "Gramatyka",
        title: "c'è o è? L'imperativo!",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "Nel soggiorno ___ un divano grande.", options: ["c'è", "è", "sono"], answer: 0 },
          { prompt: "Il mio telefono ___ nello zaino.", options: ["c'è", "è", "ci sono"], answer: 1 },
          { prompt: "___ un bagno al primo piano?", options: ["È", "C'è", "Sono"], answer: 1 },
          { prompt: "Powiedz koledze: „Szukaj w kuchni!”", options: ["Cerchi in cucina!", "Cerca in cucina!", "Cercare in cucina!"], answer: 1, speakOptions: true },
          { prompt: "Powiedz psu: „Chodź tutaj!”", options: ["Vieni qui!", "Viene qui!", "Venire qui!"], answer: 0, speakOptions: true },
          { prompt: "„Weź kurtkę!”", options: ["Prenda la giacca!", "Prendi la giacca!", "Prendere la giacca!"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-6-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["terzo", "Abito", "piano", "al"], answer: "Abito al terzo piano.", pl: "Mieszkam na trzecim piętrze." },
          { words: ["giardino", "c'è", "Non", "il"], answer: "Non c'è il giardino.", pl: "Nie ma ogrodu." },
          { words: ["finestra", "Il", "accanto", "è", "mio", "alla", "letto"], answer: "Il mio letto è accanto alla finestra.", pl: "Moje łóżko jest obok okna." },
          { words: ["sulla", "libri", "Metti", "libreria", "i"], answer: "Metti i libri sulla libreria.", pl: "Połóż książki na regale." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-6-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 6",
        instruction: "10 pytań z całego rozdziału: słówka, gramatyka i kultura. 8 dobrych odpowiedzi na 10 = rozdział zaliczony!",
        items: [
          { prompt: "„Mieszkam na parterze.”", options: ["Abito al primo piano.", "Abito al piano terra.", "Abito al piano basso."], answer: 1, speakOptions: true },
          { prompt: "3. piętro to…", options: ["il tre piano", "il terzo piano", "la terza piano"], answer: 1 },
          { prompt: "„Nie ma balkonu.”", options: ["Non c'è il balcone.", "Non è il balcone.", "Non ci sono balcone."], answer: 0, speakOptions: true },
          { prompt: "„mała kuchnia”", options: ["una piccola cucino", "una cucina piccolo", "una cucina piccola"], answer: 2, speakOptions: true },
          { prompt: "„Kot jest pod łóżkiem.”", options: ["Il gatto è sul letto.", "Il gatto è sotto il letto.", "Il gatto c'è sotto il letto."], answer: 1, speakOptions: true },
          { prompt: "Il computer è ___ scrivania.", options: ["sulla", "sul", "su la"], answer: 0 },
          { prompt: "I vestiti sono ___ armadio.", options: ["nel", "nell'", "in l'"], answer: 1 },
          { prompt: "Sul tavolo ___ due bicchieri.", options: ["è", "ci sono", "sono"], answer: 1 },
          { prompt: "„Posprzątaj pokój!”", options: ["Metti in ordine la camera!", "Metta in ordine la camera!", "Mettere in ordine la camera!"], answer: 0, speakOptions: true },
          { prompt: "Taras na dachu, ulubione miejsce Rzymian, to…", options: ["la terrazza", "la cantina", "il portiere"], answer: 0, explanation: "Lekcja 1 – Cultura." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-6-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Adesso tu! Mój dom – e-mail do Oleny",
        instruction:
          "Olena opisała swój dom w Kijowie i w Rzymie. Odpisz jej (8–10 zdań): opisz swój dom lub mieszkanie i swój pokój. Na końcu zapytaj ją o jej nowy pokój. Potem kliknij „Posłuchaj mojego tekstu” i przeczytaj go na głos.",
        checklist: [
          "napisz, gdzie mieszkasz i na którym piętrze",
          "wymień pomieszczenia (c'è / ci sono) i napisz, czego nie ma (non c'è…)",
          "opisz pokój z co najmniej pięcioma przyimkami",
          "użyj co najmniej dwóch połączeń sul / nella / alla…",
          "zapytaj Olenę o jej pokój (Dov'è…? Cosa c'è…?)",
        ],
        placeholder: "Ciao Olena! Abito…",
        model:
          "Ciao Olena! Grazie per il tuo messaggio. Io abito a Roma, in un palazzo antico, al quarto piano. C'è l'ascensore, ma è piccolissimo! Nell'appartamento ci sono una cucina, un soggiorno luminoso, tre camere e un bagno. Non c'è il giardino, ma c'è un balcone con i fiori. Divido la camera con Paula. Il mio letto è a sinistra, accanto alla finestra. La scrivania è davanti alla finestra e la libreria è accanto alla scrivania. Sul muro c'è un poster di Iga Swiatek. E Burek dorme dietro la porta! E la tua nuova camera? Dov'è il tuo letto? Un abbraccio, Laura",
        modelPl:
          "Cześć, Oleno! Dzięki za wiadomość. Ja mieszkam w Rzymie, w starej kamienicy, na czwartym piętrze. Jest winda, ale malutka! W mieszkaniu jest kuchnia, jasny salon, trzy sypialnie i łazienka. Nie ma ogrodu, ale jest balkon z kwiatami. Dzielę pokój z Paulą. Moje łóżko jest po lewej, obok okna. Biurko stoi przed oknem, a regał obok biurka. Na ścianie wisi plakat Igi Świątek. A Burek śpi za drzwiami! A twój nowy pokój? Gdzie stoi twoje łóżko? Ściskam, Laura",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem opisać dom lub mieszkanie: pomieszczenia, piętro, c'è / non c'è.",
        "Umiem użyć liczebników porządkowych (al terzo piano) i przymiotników w poprawnej formie.",
        "Umiem opisać pokój z przyimkami i z sul, nella, alla….",
        "Wiem, kiedy mówię c'è, a kiedy è.",
        "Umiem wydać polecenie w trybie rozkazującym.",
      ],
    },
  ],
};
