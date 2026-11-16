import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "ripasso-unita-8",
  chapter: 8,
  number: 4,
  title: "Ripasso – Unità 8",
  titlePl: "Powtórka z rozdziału 8",
  intro:
    "To ostatnia lekcja powtórkowa w klasie 7! Zrób ją dzień lub dwa po skończeniu rozdziału 8. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na końcu napisz test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: pogoda, miesiące i pory roku – lekcja 1 („Che tempo fa?”), daty, urodziny i venire – lekcja 2 („Quand'è il tuo compleanno?”), święta, życzenia i plany – lekcja 3 („Buon Natale!”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać pogodę i podać temperaturę,",
        "nazwać miesiące i pory roku,",
        "podać datę i zapytać o urodziny,",
        "zaprosić kogoś i mówić o planach,",
        "złożyć życzenia na różne okazje.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: pogoda, miesiące i pory roku",
      paragraphs: [
        "Pogoda z **fare**: fa bello / brutto / caldo / freddo, fa bel tempo. Osobne czasowniki: **piove**, **nevica**. Z **c'è**: c'è il sole / vento / la nebbia. **È** nuvoloso. Temperatura: **ci sono** dieci gradi, tre gradi **sotto zero**. → lekcja 1",
        "**Fa freddo** = jest zimno; **ho freddo** = jest mi zimno. → lekcja 1",
        "Miesiące małą literą: **a** gennaio, **ad** agosto. Pory roku z **in**: in primavera, in estate, in autunno, in inverno. **Quando** piove, … / **Se** c'è il sole, … → lekcja 1",
      ],
      table: {
        headers: ["pora roku", "miesiące", "pogoda"],
        rows: [
          { cells: ["in primavera", "marzo, aprile, maggio", "Piove spesso."], speak: "In primavera piove spesso." },
          { cells: ["in estate", "giugno, luglio, agosto", "Fa molto caldo."], speak: "In estate fa molto caldo." },
          { cells: ["in autunno", "settembre, ottobre, novembre", "C'è vento."], speak: "In autunno c'è vento." },
          { cells: ["in inverno", "dicembre, gennaio, febbraio", "Fa freddo. Nevica."], speak: "In inverno fa freddo. Nevica." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: daty, venire i plany",
      paragraphs: [
        "Data = **il + zwykła liczba + miesiąc** (bez di!): il tre marzo, il venticinque dicembre. Wyjątek: **il primo**. Przed otto i undici: **l'otto**, **l'undici**. → lekcja 2",
        "Pytania: **Che giorno è oggi? / Quanti ne abbiamo?** – Ne abbiamo… **Quand'è il tuo compleanno?** – È il… Rok: **duemilaventisei**. → lekcja 2",
        "**venire**: vengo, vieni, viene, veniamo, venite, vengono. **Vieni alla mia festa?** O planach – czas teraźniejszy + określenie czasu: **Sabato faccio** una festa. **Compio** quattordici anni. → lekcja 2",
      ],
      table: {
        headers: ["", "przykład", "po polsku"],
        rows: [
          { cells: ["data", "il primo gennaio", "pierwszego stycznia"], speak: "il primo gennaio" },
          { cells: ["data", "sabato ventotto novembre", "w sobotę dwudziestego ósmego listopada"], speak: "sabato ventotto novembre" },
          { cells: ["venire", "Vieni alla mia festa?", "Przyjdziesz na moją imprezę?"], speak: "Vieni alla mia festa?" },
          { cells: ["plan", "Fra una settimana compio quattordici anni.", "Za tydzień kończę czternaście lat."], speak: "Fra una settimana compio quattordici anni." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: święta i życzenia",
      paragraphs: [
        "Życzenia: **Buon** compleanno / Natale / anno! **Buona** Pasqua / Befana! **Buone** feste / vacanze! Zawsze pasuje: **Auguri!** → lekcje 2–3",
        "Kiedy? **a** Natale, **a** Capodanno – ale **il** venticinque dicembre, **a** dicembre. → lekcja 3",
        "Plany: **durante le vacanze**, **domani**, **la settimana prossima** + czas teraźniejszy. U kogoś / do kogoś: **da** + osoba: **dai** nonni, **dalla** zia. → lekcja 3",
      ],
      table: {
        headers: ["okazja", "życzenia"],
        rows: [
          { cells: ["urodziny", "Buon compleanno! Tanti auguri!"], speak: "Buon compleanno! Tanti auguri!" },
          { cells: ["25.12", "Buon Natale!"], speak: "Buon Natale!" },
          { cells: ["1.01", "Buon anno! Felice anno nuovo!"], speak: "Buon anno! Felice anno nuovo!" },
          { cells: ["6.01", "Buona Befana!"], speak: "Buona Befana!" },
          { cells: ["ferie", "Buone vacanze!"], speak: "Buone vacanze!" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Pogoda (lekcja 1)",
          items: [
            { text: "Che tempo fa?", pl: "Jaka jest pogoda?" },
            { text: "Fa bel tempo / brutto tempo.", pl: "Jest ładna / brzydka pogoda." },
            { text: "Fa caldo / freddo.", pl: "Jest gorąco / zimno." },
            { text: "Piove. / Nevica.", pl: "Pada deszcz. / Pada śnieg." },
            { text: "C'è il sole / vento / la nebbia.", pl: "Świeci słońce / wieje wiatr / jest mgła." },
            { text: "Ci sono dieci gradi.", pl: "Jest dziesięć stopni." },
            { text: "la primavera, l'estate, l'autunno, l'inverno", pl: "wiosna, lato, jesień, zima" },
            { text: "gennaio … dicembre", pl: "styczeń … grudzień" },
          ],
        },
        {
          title: "Daty i urodziny (lekcja 2)",
          items: [
            { text: "Che giorno è oggi?", pl: "Jaki dzisiaj jest dzień?" },
            { text: "Quanti ne abbiamo?", pl: "Którego dzisiaj?" },
            { text: "Quand'è il tuo compleanno?", pl: "Kiedy masz urodziny?" },
            { text: "il primo / il due / il tre…", pl: "pierwszego / drugiego / trzeciego…" },
            { text: "Buon compleanno! / Tanti auguri!", pl: "Wszystkiego najlepszego!" },
            { text: "festeggiare / la festa", pl: "świętować / impreza" },
            { text: "Compio … anni.", pl: "Kończę … lat." },
            { text: "Vieni alla mia festa?", pl: "Przyjdziesz na moją imprezę?" },
          ],
        },
        {
          title: "Święta (lekcja 3)",
          items: [
            { text: "la Vigilia / Natale", pl: "Wigilia / Boże Narodzenie" },
            { text: "San Silvestro / Capodanno", pl: "sylwester / Nowy Rok" },
            { text: "l'Epifania / la Befana", pl: "Trzech Króli / Befana" },
            { text: "l'albero di Natale / il presepe", pl: "choinka / szopka" },
            { text: "il panettone / il pandoro", pl: "świąteczne ciasta" },
            { text: "Buon Natale! / Buon anno!", pl: "Wesołych Świąt! / Szczęśliwego Nowego Roku!" },
            { text: "durante le vacanze", pl: "w czasie ferii" },
            { text: "dai nonni", pl: "u dziadków / do dziadków" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Buon anno!",
      titlePl: "Szczęśliwego Nowego Roku!",
      context: "1 stycznia 2027, południe. Laura z Krakowa łączy się przez wideo z Marco w Castelli Romani i Giulią w Dolomitach.",
      cast: { Laura: "f", Marco: "m", Giulia: "f" },
      lines: [
        { speaker: "Laura", text: "Buon anno, ragazzi! Marco, com'è il Capodanno dai nonni?", pl: "Szczęśliwego Nowego Roku! Marco, jak tam Nowy Rok u dziadków?" },
        { speaker: "Marco", text: "Buon anno! Bellissimo! Le lenticchie della nonna sono buonissime. E il nonno Franco ne mangia due piatti!", pl: "Szczęśliwego Nowego Roku! Super! Soczewica babci jest pyszna. A dziadek Franco je dwa talerze!" },
        { speaker: "Giulia", text: "Felice anno nuovo! Laura, che tempo fa a Cracovia?", pl: "Szczęśliwego Nowego Roku! Lauro, jaka pogoda w Krakowie?" },
        { speaker: "Laura", text: "Nevica! Ci sono cinque gradi sotto zero. E nelle Dolomiti?", pl: "Pada śnieg! Jest minus pięć stopni. A w Dolomitach?" },
        { speaker: "Giulia", text: "Qui c'è il sole e c'è tanta neve. Ci sono otto gradi sotto zero!", pl: "Tutaj świeci słońce i jest dużo śniegu. Jest minus osiem stopni!" },
        { speaker: "Marco", text: "E ai Castelli fa bel tempo: ci sono dodici gradi!", pl: "A w Castelli jest ładna pogoda: dwanaście stopni!" },
        { speaker: "Laura", text: "Dodici gradi a gennaio! Cosa fate oggi?", pl: "Dwanaście stopni w styczniu! Co dziś robicie?" },
        { speaker: "Marco", text: "Oggi non faccio niente. Mi riposo dai nonni.", pl: "Dzisiaj nic nie robię. Odpoczywam u dziadków." },
        { speaker: "Giulia", text: "Io scio con Davide. E torno a Roma il quattro. E tu, Laura?", pl: "Ja jeżdżę na nartach z Davidem. A do Rzymu wracam czwartego. A ty, Lauro?" },
        { speaker: "Laura", text: "Torno il cinque. E il sei andiamo tutti da Luca: la Befana e la pizza di suo padre!", pl: "Wracam piątego. A szóstego idziemy wszyscy do Luki: Befana i pizza jego taty!" },
        { speaker: "Marco", text: "Perfetto! E per me la Befana porta le caramelle… non il carbone, spero!", pl: "Super! A mnie Befana przyniesie cukierki… a nie węgiel, mam nadzieję!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "it-8-4-dialogue",
        kind: "choice",
        skill: "Słuchanie",
        title: "Hai capito? – Zrozumiałeś/-aś?",
        instruction: "Odpowiedz na pytania do rozmowy „Buon anno!”.",
        items: [
          { prompt: "Che tempo fa a Cracovia?", speak: "Che tempo fa a Cracovia?", options: ["Nevica.", "Piove.", "C'è il sole."], answer: 0, speakOptions: true },
          { prompt: "Quanti gradi ci sono ai Castelli Romani?", speak: "Quanti gradi ci sono ai Castelli Romani?", options: ["otto gradi sotto zero", "dodici gradi", "cinque gradi sotto zero"], answer: 1 },
          { prompt: "Cosa fa Giulia oggi?", speak: "Cosa fa Giulia oggi?", options: ["Si riposa.", "Torna a Roma.", "Scia con Davide."], answer: 2, speakOptions: true },
          { prompt: "Quando torna Laura a Roma?", speak: "Quando torna Laura a Roma?", options: ["il cinque", "il quattro", "il sei"], answer: 0, speakOptions: true },
          { prompt: "Cosa fanno il sei gennaio?", speak: "Cosa fanno il sei gennaio?", options: ["Mangiano le lenticchie.", "Vanno da Luca.", "Vanno a Porta Portese."], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-8-4-weather",
        kind: "fill",
        skill: "Słownictwo",
        title: "Pogoda i pory roku",
        instruction: "Uzupełnij zdania. Polskie podpowiedzi są w nawiasach.",
        items: [
          { before: "Che tempo", after: "?", answers: ["fa"], hint: "(jaka pogoda)" },
          { before: "In inverno", after: "in montagna.", answers: ["nevica"], hint: "(pada śnieg)" },
          { before: "Fa molto", after: "; prendi la sciarpa!", answers: ["freddo"], hint: "(zimno)" },
          { before: "In", after: "piove spesso.", answers: ["primavera"], hint: "(wiosną)" },
          { before: "Il mio mese preferito è", after: ", perché ci sono le vacanze.", answers: ["luglio"], hint: "(lipiec)" },
          { before: "Ci sono tre gradi sotto", after: ".", answers: ["zero"], hint: "(zero)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-8-4-dates",
        kind: "choice",
        skill: "Gramatyka",
        title: "Daty i venire",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "6 stycznia", options: ["il sei di gennaio", "il sei gennaio", "il sesto gennaio"], answer: 1, speakOptions: true },
          { prompt: "1 maja", options: ["il uno maggio", "il primo maggio", "l'uno maggio"], answer: 1, speakOptions: true },
          { prompt: "Sabato noi ___ alla festa di Luca.", options: ["venite", "vengono", "veniamo"], answer: 2 },
          { prompt: "„Kończę czternaście lat.”", options: ["Compio quattordici anni.", "Sono quattordici anni.", "Faccio quattordici."], answer: 0, speakOptions: true },
          { prompt: "Tu ___ alla mia festa?", options: ["vieni", "vengo", "viene"], answer: 0 },
          { prompt: "Che ___ è oggi? – È il venti maggio.", options: ["ora", "giorno", "tempo"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-8-4-wishes",
        kind: "choice",
        skill: "Mówienie",
        title: "Życzenia",
        instruction: "Wybierz życzenia, które pasują do sytuacji.",
        items: [
          { prompt: "Twój kolega ma dziś urodziny.", options: ["Buon Natale!", "Buon compleanno!", "Buon anno!"], answer: 1, speakOptions: true },
          { prompt: "Jest 2 stycznia. Spotykasz panią Rossi.", options: ["Buon anno, professoressa!", "Buone vacanze, professoressa!", "Buona Pasqua, professoressa!"], answer: 0, speakOptions: true },
          { prompt: "Koleżanka wyjeżdża na wakacje.", options: ["Buonanotte!", "Buon appetito!", "Buone vacanze!"], answer: 2, speakOptions: true },
          { prompt: "Poprawna forma (feste – l. mnoga):", options: ["Buon feste!", "Buone feste!", "Buona feste!"], answer: 1, speakOptions: true },
          { prompt: "Kto przynosi dzieciom cukierki 6 stycznia?", options: ["Babbo Natale", "la Befana", "il nonno Franco"], answer: 1, explanation: "Lekcja 3 – la Befana." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-8-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["freddo", "fa", "In", "inverno"], answer: "In inverno fa freddo.", pl: "Zimą jest zimno." },
          { words: ["compleanno", "Il", "è", "mio", "l'otto", "maggio"], answer: "Il mio compleanno è l'otto maggio.", pl: "Moje urodziny są ósmego maja." },
          { words: ["vacanze", "Durante", "vado", "nonni", "le", "dai"], answer: "Durante le vacanze vado dai nonni.", pl: "W ferie jadę do dziadków." },
          { words: ["nuovo", "Felice", "anno"], answer: "Felice anno nuovo!", pl: "Szczęśliwego Nowego Roku!" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-8-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 8",
        instruction: "10 pytań z całego rozdziału: słówka, gramatyka i kultura. 8 dobrych odpowiedzi na 10 = rozdział zaliczony – i cały materiał klasy 7 za tobą. Complimenti!",
        items: [
          { prompt: "„Jest zimno” (pogoda):", options: ["Ho freddo.", "Fa freddo.", "È freddo."], answer: 1, speakOptions: true },
          { prompt: "„Pada deszcz.”", options: ["Piove.", "Fa pioggia.", "C'è piove."], answer: 0, speakOptions: true },
          { prompt: "„Jest mi zimno.”", options: ["Fa freddo.", "Sono freddo.", "Ho freddo."], answer: 2, speakOptions: true },
          { prompt: "___ estate fa caldo.", options: ["A", "In", "Al"], answer: 1 },
          { prompt: "„W sierpniu”", options: ["a agosto", "ad agosto", "al agosto"], answer: 1, explanation: "Przed samogłoską a → ad." },
          { prompt: "25.12 słowami:", options: ["il venticinque dicembre", "il venticinque di dicembre", "i venticinque dicembre"], answer: 0, speakOptions: true },
          { prompt: "Loro ___ alla festa.", options: ["vengono", "viene", "veniamo"], answer: 0 },
          { prompt: "„Spędzam Święta u dziadków.”", options: ["Passo il Natale dai nonni.", "Passo il Natale ai nonni.", "Passo il Natale in nonni."], answer: 0, speakOptions: true },
          { prompt: "„Szczęśliwego Nowego Roku!”", options: ["Buona anno!", "Buon anno!", "Buone anno!"], answer: 1, speakOptions: true },
          { prompt: "Co Włosi jedzą o północy w sylwestra?", options: ["il panettone", "le lenticchie", "il pandoro"], answer: 1, explanation: "Soczewica – na pieniądze w nowym roku. Lekcja 3." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "it-8-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Adesso tu! Mój rok",
        instruction:
          "Na koniec klasy 7: opisz swój rok (8–10 zdań). Ulubiona pora roku i pogoda, twoje urodziny, ulubione święto i twoje plany na najbliższe ferie lub wakacje. Potem kliknij „Posłuchaj mojego tekstu” i przeczytaj go na głos.",
        checklist: [
          "opisz ulubioną porę roku i pogodę (la mia stagione preferita è… ; fa…)",
          "podaj datę swoich urodzin słowami i jak je świętujesz",
          "opisz ulubione święto (a Natale…, a Capodanno…)",
          "napisz co najmniej trzy zdania o swoich planach (durante le vacanze vado…)",
          "użyj co najmniej jednych życzeń",
        ],
        placeholder: "La mia stagione preferita è…",
        model:
          "La mia stagione preferita è l'estate, perché fa caldo e c'è il sole. A luglio e ad agosto ci sono le vacanze. Non mi piace novembre: è nuvoloso e piove. Il mio compleanno è il tre marzo. Compio quattordici anni e faccio una festa a casa mia. La mia festa preferita è il Natale. In Polonia festeggiamo il Natale il ventiquattro dicembre, la sera. Durante le vacanze d'inverno vado dai nonni a Cracovia. Facciamo un pupazzo di neve! Buon anno a tutti!",
        modelPl:
          "Moja ulubiona pora roku to lato, bo jest gorąco i świeci słońce. W lipcu i sierpniu są wakacje. Nie lubię listopada: jest pochmurno i pada. Moje urodziny są trzeciego marca. Kończę czternaście lat i robię imprezę u siebie. Moje ulubione święto to Boże Narodzenie. W Polsce świętujemy dwudziestego czwartego grudnia wieczorem. W ferie zimowe jadę do dziadków do Krakowa. Ulepimy bałwana! Szczęśliwego Nowego Roku wszystkim!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem opisać pogodę i podać temperaturę.",
        "Znam miesiące i pory roku – i wiem, że mówimy in primavera, ad agosto.",
        "Umiem podać datę i zapytać o urodziny.",
        "Umiem zaprosić kogoś (Vieni…?) i mówić o planach czasem teraźniejszym.",
        "Umiem złożyć życzenia na urodziny, Boże Narodzenie, Nowy Rok i wakacje.",
      ],
    },
  ],
};
