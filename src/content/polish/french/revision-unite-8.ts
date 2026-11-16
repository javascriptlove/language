import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "revision-unite-8",
  chapter: 8,
  number: 4,
  title: "Révision – Unité 8",
  titlePl: "Powtórka z rozdziału 8",
  intro:
    "To ostatnia lekcja powtórkowa w klasie 7! Zrób ją dzień lub dwa po skończeniu rozdziału 8. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na końcu napisz test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: pogoda, miesiące i pory roku – lekcja 1 („Quel temps fait-il ?”), daty, urodziny i futur proche – lekcja 2 („C'est quand, ton anniversaire ?”), święta, życzenia i plany – lekcja 3 („Joyeux Noël !”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać pogodę i podać temperaturę,",
        "nazwać miesiące i pory roku – z en i au,",
        "podać datę i zapytać o urodziny,",
        "powiedzieć, co zrobisz: je vais + bezokolicznik,",
        "złożyć życzenia na różne okazje.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: pogoda, miesiące i pory roku",
      paragraphs: [
        "Pogoda z **faire**: Il fait beau / mauvais / chaud / froid / gris. Il fait dix degrés / moins deux. Osobne czasowniki: **il pleut**, **il neige**. Z **il y a**: il y a du soleil / du vent / des nuages. → lekcja 1",
        "Miesiące małą literą: **en** janvier, **au mois de** mai. Pory roku: **au printemps** – ale **en** été, **en** automne, **en** hiver. → lekcja 1",
        "Pogoda jako warunek: **Quand il pleut**, je lis. **Quand il fait beau**, je fais du vélo. → lekcja 1",
      ],
      table: {
        headers: ["pora roku", "miesiące", "pogoda"],
        rows: [
          { cells: ["au printemps", "mars, avril, mai", "Il pleut souvent."], speak: "Au printemps, il pleut souvent." },
          { cells: ["en été", "juin, juillet, août", "Il fait chaud."], speak: "En été, il fait chaud." },
          { cells: ["en automne", "septembre, octobre, novembre", "Il y a du vent."], speak: "En automne, il y a du vent." },
          { cells: ["en hiver", "décembre, janvier, février", "Il fait froid. Il neige."], speak: "En hiver, il fait froid. Il neige." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: daty i futur proche",
      paragraphs: [
        "Data = **le + zwykła liczba + miesiąc**: le trois mars, le vingt-cinq décembre. Wyjątek: **le premier** (1.). Bez skrótu przed huit i onze: **le huit**, **le onze**. → lekcja 2",
        "Pytania: **Quelle est la date aujourd'hui ? / On est le combien ?** – On est le … **C'est quand, ton anniversaire ?** – C'est le … Rok: deux **mille** vingt-six. → lekcja 2",
        "**futur proche** = **aller + bezokolicznik**: je vais fêter, tu vas venir, on va danser, nous allons manger, vous allez jouer, ils vont partir. Przeczenie: je **ne** vais **pas** danser. → lekcja 2",
      ],
      table: {
        headers: ["", "przykład", "po polsku"],
        rows: [
          { cells: ["data", "le premier janvier", "pierwszego stycznia"], speak: "le premier janvier" },
          { cells: ["data", "le samedi douze décembre", "w sobotę dwunastego grudnia"], speak: "le samedi douze décembre" },
          { cells: ["futur proche", "Je vais avoir quatorze ans.", "Skończę czternaście lat."], speak: "Je vais avoir quatorze ans." },
          { cells: ["przeczenie", "On ne va pas danser.", "Nie będziemy tańczyć."], speak: "On ne va pas danser." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: święta i życzenia",
      paragraphs: [
        "Życzenia – przymiotnik pasuje do rzeczownika: **Joyeux** Noël, **Joyeux** anniversaire, **Bonne** année, **Bonne** santé, **Bonnes** vacances, **Joyeuses** Pâques, **Meilleurs** vœux. → lekcje 2–3",
        "Kiedy? **à** Noël, **à** Pâques – ale **le** 25 décembre, **en** décembre. → lekcja 3",
        "Plany: **pendant les vacances**, **demain**, **la semaine prochaine** + futur proche. Gdzie: **chez** mes grands-parents, **à** Lyon, **en** Pologne. → lekcja 3",
      ],
      table: {
        headers: ["okazja", "życzenia"],
        rows: [
          { cells: ["urodziny", "Joyeux anniversaire !"], speak: "Joyeux anniversaire !" },
          { cells: ["25.12", "Joyeux Noël !"], speak: "Joyeux Noël !" },
          { cells: ["1.01", "Bonne année et bonne santé !"], speak: "Bonne année et bonne santé !" },
          { cells: ["Wielkanoc", "Joyeuses Pâques !"], speak: "Joyeuses Pâques !" },
          { cells: ["ferie", "Bonnes vacances !"], speak: "Bonnes vacances !" },
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
            { text: "Quel temps fait-il ?", pl: "Jaka jest pogoda?" },
            { text: "Il fait beau / mauvais.", pl: "Jest ładnie / brzydko." },
            { text: "Il fait chaud / froid.", pl: "Jest gorąco / zimno." },
            { text: "Il pleut. / Il neige.", pl: "Pada deszcz. / Pada śnieg." },
            { text: "Il y a du soleil / du vent.", pl: "Świeci słońce. / Wieje wiatr." },
            { text: "Il fait dix degrés.", pl: "Jest dziesięć stopni." },
            { text: "le printemps, l'été, l'automne, l'hiver", pl: "wiosna, lato, jesień, zima" },
            { text: "janvier … décembre", pl: "styczeń … grudzień" },
          ],
        },
        {
          title: "Daty i urodziny (lekcja 2)",
          items: [
            { text: "Quelle est la date aujourd'hui ?", pl: "Jaka jest dzisiaj data?" },
            { text: "On est le combien ?", pl: "Którego dzisiaj?" },
            { text: "C'est quand, ton anniversaire ?", pl: "Kiedy masz urodziny?" },
            { text: "le premier / le deux / le trois …", pl: "pierwszego / drugiego / trzeciego …" },
            { text: "Joyeux anniversaire !", pl: "Wszystkiego najlepszego!" },
            { text: "fêter / une fête / inviter", pl: "świętować / impreza / zapraszać" },
            { text: "Je vais avoir … ans.", pl: "Skończę … lat." },
          ],
        },
        {
          title: "Święta (lekcja 3)",
          items: [
            { text: "Noël / le réveillon", pl: "Boże Narodzenie / uroczysta kolacja" },
            { text: "le Nouvel An / la Saint-Sylvestre", pl: "Nowy Rok / sylwester" },
            { text: "Pâques / la fête nationale", pl: "Wielkanoc / święto narodowe" },
            { text: "le sapin / le Père Noël / les cadeaux", pl: "choinka / Święty Mikołaj / prezenty" },
            { text: "Joyeux Noël ! / Bonne année !", pl: "Wesołych Świąt! / Szczęśliwego Nowego Roku!" },
            { text: "Meilleurs vœux ! / Bonne santé !", pl: "Najlepsze życzenia! / Dużo zdrowia!" },
            { text: "pendant les vacances", pl: "w czasie ferii" },
            { text: "chez mes grands-parents", pl: "u dziadków" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Bonne année !",
      titlePl: "Szczęśliwego Nowego Roku!",
      context: "1 stycznia 2027, południe. Carla z Krakowa łączy się przez wideo z Hugo w Lyonie i Lucasem w Alpach.",
      cast: { Carla: "f", Hugo: "m", Lucas: "m" },
      lines: [
        { speaker: "Carla", text: "Bonne année, les garçons ! Bonne année et bonne santé !", pl: "Szczęśliwego Nowego Roku, chłopaki! Szczęśliwego Nowego Roku i dużo zdrowia!" },
        { speaker: "Hugo", text: "Bonne année, Carla ! Meilleurs vœux de Lyon ! Quel temps fait-il à Cracovie ?", pl: "Szczęśliwego Nowego Roku, Carlo! Najlepsze życzenia z Lyonu! Jaka pogoda w Krakowie?" },
        { speaker: "Carla", text: "Il neige ! Il fait moins cinq degrés. Et à Lyon ?", pl: "Pada śnieg! Jest minus pięć stopni. A w Lyonie?" },
        { speaker: "Hugo", text: "À Lyon, il fait gris, mais il ne pleut pas. Il fait trois degrés. Et papi fait du vélo… le premier janvier !", pl: "W Lyonie jest szaro, ale nie pada. Są trzy stopnie. A dziadek jeździ na rowerze… pierwszego stycznia!" },
        { speaker: "Lucas", text: "Et ici, dans les Alpes, il y a du soleil ! Il fait froid, mais c'est magnifique.", pl: "A tutaj, w Alpach, świeci słońce! Jest zimno, ale przepięknie." },
        { speaker: "Carla", text: "Tu fais du ski aujourd'hui ?", pl: "Jeździsz dziś na nartach?" },
        { speaker: "Lucas", text: "Non, aujourd'hui, je me repose. Mais demain, je vais faire du ski avec Karim.", pl: "Nie, dziś odpoczywam. Ale jutro będę jeździć na nartach z Karimem." },
        { speaker: "Hugo", text: "Et toi, Carla, quand est-ce que tu rentres à Paris ?", pl: "A ty, Carlo, kiedy wracasz do Paryża?" },
        { speaker: "Carla", text: "Le trois janvier. Et le quatre, c'est la rentrée !", pl: "Trzeciego stycznia. A czwartego wracamy do szkoły!" },
        { speaker: "Hugo", text: "Déjà ? Oh non… Et le six janvier, on va manger la galette des rois chez Léa !", pl: "Już? O nie… A szóstego stycznia będziemy jeść ciasto królów u Léi!" },
        { speaker: "Lucas", text: "Super ! Cette année, c'est moi le roi !", pl: "Super! W tym roku to ja będę królem!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-8-4-dialogue",
        kind: "choice",
        skill: "Słuchanie",
        title: "Tu as compris ? – Zrozumiałeś/-aś?",
        instruction: "Odpowiedz na pytania do rozmowy „Bonne année !”.",
        items: [
          { prompt: "Quel temps fait-il à Cracovie ?", speak: "Quel temps fait-il à Cracovie ?", options: ["Il neige.", "Il pleut.", "Il y a du soleil."], answer: 0, speakOptions: true },
          { prompt: "Il fait combien à Lyon ?", speak: "Il fait combien à Lyon ?", options: ["moins cinq degrés", "trois degrés", "treize degrés"], answer: 1 },
          { prompt: "Qu'est-ce que Lucas va faire demain ?", speak: "Qu'est-ce que Lucas va faire demain ?", options: ["Il va se reposer.", "Il va rentrer à Paris.", "Il va faire du ski."], answer: 2, speakOptions: true },
          { prompt: "Quand est-ce que Carla rentre à Paris ?", speak: "Quand est-ce que Carla rentre à Paris ?", options: ["le trois janvier", "le quatre janvier", "le six janvier"], answer: 0, speakOptions: true },
          { prompt: "Qu'est-ce qu'ils vont faire le six janvier ?", speak: "Qu'est-ce qu'ils vont faire le six janvier ?", options: ["faire du vélo", "manger la galette des rois", "faire une fête d'anniversaire"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-8-4-weather",
        kind: "fill",
        skill: "Słownictwo",
        title: "Pogoda i pory roku",
        instruction: "Uzupełnij zdania. Polskie podpowiedzi są w nawiasach.",
        items: [
          { before: "Quel temps", after: "-il ?", answers: ["fait"], hint: "(jaka pogoda)" },
          { before: "En hiver, il", after: "à la montagne.", answers: ["neige"], hint: "(pada śnieg)" },
          { before: "Il y a du", after: "; prends ton écharpe !", answers: ["vent"], hint: "(wiatr)" },
          { before: "", after: "printemps, il pleut souvent.", answers: ["Au"], hint: "(wiosną)" },
          { before: "Mon mois préféré, c'est", after: ", parce que c'est les vacances.", answers: ["juillet"], hint: "(lipiec)" },
          { before: "Il fait moins trois", after: ".", answers: ["degrés", "degres"], hint: "(stopnie)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-8-4-dates",
        kind: "choice",
        skill: "Gramatyka",
        title: "Daty i futur proche",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "1 kwietnia", options: ["le un avril", "le premier avril", "l'un avril"], answer: 1, speakOptions: true },
          { prompt: "14 lipca", options: ["le quatorze juillet", "le quatorzième juillet", "le quatorze Juillet"], answer: 0, speakOptions: true },
          { prompt: "Samedi, nous ___ fêter l'anniversaire de Hugo.", options: ["allez", "vont", "allons"], answer: 2 },
          { prompt: "„Skończę czternaście lat.”", options: ["Je vais être quatorze ans.", "Je vais avoir quatorze ans.", "J'ai aller quatorze ans."], answer: 1, speakOptions: true },
          { prompt: "„Nie będę tańczyć.”", options: ["Je ne vais pas danser.", "Je vais ne danser pas.", "Je ne danser vais pas."], answer: 0, speakOptions: true },
          { prompt: "On est ___ ? – On est le vingt.", options: ["quelle heure", "le combien", "quel temps"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-8-4-wishes",
        kind: "choice",
        skill: "Mówienie",
        title: "Życzenia",
        instruction: "Wybierz życzenia, które pasują do sytuacji.",
        items: [
          { prompt: "Twój kolega ma dziś urodziny.", options: ["Joyeux Noël !", "Joyeux anniversaire !", "Bonne année !"], answer: 1, speakOptions: true },
          { prompt: "Jest 2 stycznia. Spotykasz panią Martin.", options: ["Bonne année, madame !", "Bonnes vacances, madame !", "Joyeuses Pâques, madame !"], answer: 0, speakOptions: true },
          { prompt: "Koleżanka wyjeżdża na wakacje.", options: ["Bonne nuit !", "Bonne santé !", "Bonnes vacances !"], answer: 2, speakOptions: true },
          { prompt: "Poprawna forma (Pâques – f, l. mnoga):", options: ["Joyeux Pâques !", "Joyeuses Pâques !", "Joyeuse Pâques !"], answer: 1, speakOptions: true },
          { prompt: "Kiedy składa się życzenia urodzinowe we Francji?", options: ["dzień wcześniej", "w dniu urodzin (nie wcześniej!)", "tydzień wcześniej"], answer: 1, explanation: "Ça porte malheur – życzenia z wyprzedzeniem przynoszą pecha. Lekcja 2 – Culture." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-8-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["froid", "fait", "il", "En", "hiver,"], answer: "En hiver, il fait froid.", pl: "Zimą jest zimno." },
          { words: ["le", "anniversaire,", "Mon", "c'est", "mai", "huit"], answer: "Mon anniversaire, c'est le huit mai.", pl: "Moje urodziny są ósmego maja." },
          { words: ["vacances,", "Pendant", "faire", "vais", "les", "je", "ski", "du"], answer: "Pendant les vacances, je vais faire du ski.", pl: "W ferie będę jeździć na nartach." },
          { words: ["santé", "Bonne", "bonne", "année", "et"], answer: "Bonne année et bonne santé !", pl: "Szczęśliwego Nowego Roku i dużo zdrowia!" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-8-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 8",
        instruction: "10 pytań z całego rozdziału. 8 dobrych odpowiedzi na 10 = rozdział zaliczony – i cały materiał klasy 7 za tobą. Félicitations !",
        items: [
          { prompt: "„Jest zimno” (pogoda):", options: ["Il est froid.", "Il fait froid.", "Il a froid."], answer: 1, speakOptions: true },
          { prompt: "„Pada deszcz.”", options: ["Il pleut.", "Il fait pluie.", "Il y a pleut."], answer: 0, speakOptions: true },
          { prompt: "___ printemps", options: ["En", "Au", "À la"], answer: 1 },
          { prompt: "___ automne", options: ["En", "Au", "À l'"], answer: 0 },
          { prompt: "Który miesiąc jest zapisany poprawnie?", options: ["Août", "août", "Aout"], answer: 1, explanation: "Miesiące piszemy małą literą: août." },
          { prompt: "25.12 słowami:", options: ["le vingt-cinq décembre", "le vingt-cinquième décembre", "les vingt-cinq décembre"], answer: 0, speakOptions: true },
          { prompt: "Ils ___ partir en vacances.", options: ["vont", "va", "allons"], answer: 0 },
          { prompt: "___ Noël, on ouvre les cadeaux.", options: ["Le", "En", "À"], answer: 2 },
          { prompt: "„Szczęśliwego Nowego Roku!”", options: ["Bon année !", "Bonne année !", "Joyeux année !"], answer: 1, speakOptions: true },
          { prompt: "Co Francuzi jedzą 6 stycznia?", options: ["la bûche de Noël", "des crêpes", "la galette des rois"], answer: 2, explanation: "L'Épiphanie – la galette des rois z figurką (la fève). Lekcja 3." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-8-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "À toi ! Mój rok",
        instruction:
          "Na koniec klasy 7: opisz swój rok (8–10 zdań). Ulubiona pora roku i pogoda, twoje urodziny, ulubione święto i twoje plany na najbliższe ferie lub wakacje. Potem kliknij „Posłuchaj mojego tekstu” i przeczytaj go na głos.",
        checklist: [
          "opisz ulubioną porę roku i pogodę (ma saison préférée, c'est … ; il fait …)",
          "podaj datę swoich urodzin słowami i jak je świętujesz",
          "opisz ulubione święto (à Noël / à Pâques, on …)",
          "napisz co najmniej trzy zdania w futur proche o swoich planach",
          "użyj co najmniej jednych życzeń",
        ],
        placeholder: "Ma saison préférée, c'est …",
        model:
          "Ma saison préférée, c'est l'été, parce qu'il fait chaud et il y a du soleil. En juillet et en août, c'est les vacances ! Je n'aime pas novembre : il fait gris et il pleut. Mon anniversaire, c'est le trois mars. Je vais avoir quatorze ans et je vais faire une fête chez moi. Ma fête préférée, c'est Noël. Chez nous, en Pologne, on fête Noël le vingt-quatre décembre, le soir. Pendant les vacances d'hiver, je vais aller chez mes grands-parents, à Cracovie. Nous allons faire un bonhomme de neige ! Et toi ? Bonne année et bonne santé !",
        modelPl:
          "Moja ulubiona pora roku to lato, bo jest gorąco i świeci słońce. W lipcu i sierpniu są wakacje! Nie lubię listopada: jest szaro i pada. Moje urodziny są trzeciego marca. Skończę czternaście lat i zrobię imprezę u siebie. Moje ulubione święto to Boże Narodzenie. U nas, w Polsce, świętujemy Boże Narodzenie dwudziestego czwartego grudnia wieczorem. W ferie zimowe pojadę do dziadków, do Krakowa. Ulepimy bałwana! A ty? Szczęśliwego Nowego Roku i dużo zdrowia!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem opisać pogodę i podać temperaturę.",
        "Znam miesiące i pory roku – i wiem, że mówimy au printemps, ale en été.",
        "Umiem podać datę i zapytać o urodziny.",
        "Umiem mówić o planach z futur proche: je vais + bezokolicznik.",
        "Umiem złożyć życzenia na urodziny, Boże Narodzenie, Nowy Rok i wakacje.",
      ],
    },
  ],
};
