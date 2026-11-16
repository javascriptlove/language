import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "revision-unite-6",
  chapter: 6,
  number: 4,
  title: "Révision – Unité 6",
  titlePl: "Powtórka z rozdziału 6",
  intro:
    "To lekcja powtórkowa – zrób ją dzień lub dwa po skończeniu rozdziału 6. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na końcu napisz test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: pomieszczenia, piętra i miejsce przymiotnika – lekcja 1 („J'habite dans un appartement”), meble i przyimki miejsca – lekcja 2 („Dans ma chambre”), Où est … ?, il / elle i tryb rozkazujący – lekcja 3 („Où est mon portable ?”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać swój dom lub mieszkanie: pomieszczenia, piętro, czego nie ma,",
        "opisać pokój i powiedzieć, gdzie co stoi,",
        "zapytać, gdzie coś jest, i odpowiedzieć z il, elle, ils, elles,",
        "wydać polecenie: Range ! Mets ! Cherche ! Va !",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: dom, piętra i przymiotniki",
      paragraphs: [
        "Opis mieszkania: **Il y a** une cuisine, deux chambres … **Il n'y a pas de** jardin / **d'**ascenseur. → lekcja 1",
        "Piętra: **au rez-de-chaussée** (parter), **au premier étage**, **au deuxième étage** … Liczebnik porządkowy = liczba + **-ième** (quatr**ième**, cinq**u**ième, neu**v**ième); 1. = **premier / première**. → lekcja 1",
        "Przymiotnik stoi zwykle **po** rzeczowniku (un salon **moderne**), ale **petit, grand, joli, beau / belle** – **przed** (une **petite** cuisine, un **beau** jardin). → lekcja 1",
      ],
      table: {
        headers: ["", "przykład", "po polsku"],
        rows: [
          { cells: ["il y a", "Il y a trois chambres.", "Są trzy sypialnie."], speak: "Il y a trois chambres." },
          { cells: ["il n'y a pas de", "Il n'y a pas d'ascenseur.", "Nie ma windy."], speak: "Il n'y a pas d'ascenseur." },
          { cells: ["piętro", "J'habite au quatrième étage.", "Mieszkam na czwartym piętrze."], speak: "J'habite au quatrième étage." },
          { cells: ["przed", "une petite salle de bains", "mała łazienka"], speak: "une petite salle de bains" },
          { cells: ["po", "un appartement clair", "jasne mieszkanie"], speak: "un appartement clair" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: przyimki miejsca",
      paragraphs: [
        "**dans** (w), **sur** (na), **sous** (pod), **devant** (przed), **derrière** (za), **entre … et …** (między … a …). Rzeczownik po przyimku się nie zmienia: sous **le lit**. → lekcja 2",
        "**à côté de, en face de, à gauche de, à droite de** łączą się z rodzajnikiem: **de + le = du**, **de + les = des**; de la i de l' bez zmian. → lekcja 2",
        "Nie myl: **sur** („sür”, na) i **sous** („su”, pod)! → lekcja 2",
      ],
      table: {
        headers: ["", "+ le", "+ la", "+ l'", "+ les"],
        rows: [
          { cells: ["à côté de", "à côté du lit", "à côté de la porte", "à côté de l'armoire", "à côté des livres"], speak: "à côté du lit, à côté de la porte, à côté de l'armoire, à côté des livres" },
          { cells: ["en face de", "en face du bureau", "en face de la fenêtre", "en face de l'étagère", "en face des lits"], speak: "en face du bureau, en face de la fenêtre, en face de l'étagère, en face des lits" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: Où est … ? i tryb rozkazujący",
      paragraphs: [
        "**Où est** + jedna rzecz? **Où sont** + kilka? Odpowiedź z zaimkiem według **rodzaju francuskiego**: le portable → **il**, la veste → **elle**, les livres → **ils**, les clés → **elles**. Gdy coś się znajdzie: **Le / La / Les voilà !** → lekcja 3",
        "Tryb rozkazujący: forma **tu** bez tu (Prends ! Fais !), a w czasownikach na -er i w aller bez **-s**: **Cherche ! Range ! Va !** Do kilku osób: **Cherchez ! Rangez ! Prenez !** → lekcja 3",
      ],
      table: {
        headers: ["bezokolicznik", "tu", "vous"],
        rows: [
          { cells: ["chercher", "Cherche !", "Cherchez !"], speak: "Cherche ! Cherchez !" },
          { cells: ["ranger", "Range !", "Rangez !"], speak: "Range ! Rangez !" },
          { cells: ["aller", "Va !", "Allez !"], speak: "Va ! Allez !" },
          { cells: ["prendre", "Prends !", "Prenez !"], speak: "Prends ! Prenez !" },
          { cells: ["mettre", "Mets !", "Mettez !"], speak: "Mets ! Mettez !" },
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
            { text: "une maison / un appartement", pl: "dom / mieszkanie" },
            { text: "un immeuble / un étage", pl: "budynek / piętro" },
            { text: "le rez-de-chaussée", pl: "parter" },
            { text: "un ascenseur / un escalier", pl: "winda / schody" },
            { text: "la cuisine / le salon", pl: "kuchnia / salon" },
            { text: "la chambre / la salle de bains", pl: "sypialnia / łazienka" },
            { text: "les toilettes / l'entrée", pl: "toaleta / przedpokój" },
            { text: "le jardin / le balcon / le garage", pl: "ogród / balkon / garaż" },
            { text: "à gauche / à droite", pl: "na lewo / na prawo" },
          ],
        },
        {
          title: "Meble i przyimki (lekcja 2)",
          items: [
            { text: "le lit / le bureau / la chaise", pl: "łóżko / biurko / krzesło" },
            { text: "l'armoire / l'étagère", pl: "szafa / półka" },
            { text: "la fenêtre / la porte / le mur", pl: "okno / drzwi / ściana" },
            { text: "le tapis / la lampe / l'affiche", pl: "dywan / lampa / plakat" },
            { text: "dans / sur / sous", pl: "w / na / pod" },
            { text: "devant / derrière / entre", pl: "przed / za / między" },
            { text: "à côté de / en face de", pl: "obok / naprzeciwko" },
          ],
        },
        {
          title: "Szukamy (lekcja 3)",
          items: [
            { text: "chercher / trouver", pl: "szukać / znaleźć" },
            { text: "ranger / mettre", pl: "sprzątać / kłaść" },
            { text: "le portable / les clés", pl: "telefon / klucze" },
            { text: "les lunettes / la veste", pl: "okulary / kurtka" },
            { text: "par terre / partout", pl: "na podłodze / wszędzie" },
            { text: "Où est … ? / Où sont … ?", pl: "Gdzie jest …? / Gdzie są …?" },
            { text: "Le voilà ! / La voilà !", pl: "Tu jest!" },
            { text: "Range ta chambre !", pl: "Posprzątaj pokój!" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "La nouvelle chambre d'Amira",
      titlePl: "Nowy pokój Amiry",
      context: "Rodzina Amiry właśnie przeprowadziła się do nowego mieszkania. W środę po południu Carla i Hugo pomagają jej urządzić pokój. Wszędzie stoją kartony.",
      cast: { Amira: "f", Carla: "f", Hugo: "m" },
      lines: [
        { speaker: "Amira", text: "Bienvenue chez moi ! Nous habitons au deuxième étage maintenant. Et il y a un ascenseur !", pl: "Witajcie u mnie! Teraz mieszkamy na drugim piętrze. I jest winda!" },
        { speaker: "Carla", text: "Super ! Elle est grande, ta nouvelle chambre !", pl: "Super! Duży ten twój nowy pokój!" },
        { speaker: "Amira", text: "Oui, mais c'est le bazar ! Hugo, mets le bureau devant la fenêtre, s'il te plaît.", pl: "Tak, ale co za bałagan! Hugo, postaw biurko przed oknem, proszę." },
        { speaker: "Hugo", text: "D'accord. Et le lit ? Je mets le lit à côté du bureau ?", pl: "Dobra. A łóżko? Postawić łóżko obok biurka?" },
        { speaker: "Amira", text: "Non, mets le lit en face de la porte. Et l'étagère entre le lit et l'armoire.", pl: "Nie, postaw łóżko naprzeciwko drzwi. A półkę między łóżkiem a szafą." },
        { speaker: "Carla", text: "Amira, où est ta lampe ?", pl: "Amira, gdzie jest twoja lampa?" },
        { speaker: "Amira", text: "Elle est dans le grand carton. Cherche sous les livres !", pl: "Jest w dużym kartonie. Szukaj pod książkami!" },
        { speaker: "Carla", text: "La voilà ! Je mets la lampe sur le bureau ?", pl: "Jest! Postawić lampę na biurku?" },
        { speaker: "Amira", text: "Oui, parfait ! Et mes affiches ? Où sont mes affiches ?", pl: "Tak, idealnie! A moje plakaty? Gdzie są moje plakaty?" },
        { speaker: "Hugo", text: "Euh… Elles sont sous mes pieds. Désolé !", pl: "Eee… Są pod moimi stopami. Przepraszam!" },
        { speaker: "Amira", text: "Hugo ! Tu es vraiment tête en l'air !", pl: "Hugo! Naprawdę jesteś roztrzepany!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-6-4-dialogue",
        kind: "choice",
        skill: "Słuchanie",
        title: "Tu as compris ? – Zrozumiałeś/-aś?",
        instruction: "Odpowiedz na pytania do dialogu „La nouvelle chambre d'Amira”.",
        items: [
          { prompt: "Amira habite au …", options: ["rez-de-chaussée.", "deuxième étage.", "quatrième étage."], answer: 1, speakOptions: true },
          { prompt: "Dans l'immeuble d'Amira, il y a …", options: ["un ascenseur.", "un jardin.", "une cave."], answer: 0, speakOptions: true },
          { prompt: "Où est le bureau ?", speak: "Où est le bureau ?", options: ["à côté du lit", "devant la fenêtre", "en face de la porte"], answer: 1, speakOptions: true },
          { prompt: "Gdzie na początku jest lampa?", options: ["sur le bureau", "sous le lit", "dans le grand carton"], answer: 2 },
          { prompt: "Où sont les affiches ?", speak: "Où sont les affiches ?", options: ["sous les pieds de Hugo", "sur le mur", "dans l'armoire"], answer: 0, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-6-4-house",
        kind: "fill",
        skill: "Słownictwo",
        title: "Mój dom",
        instruction: "Uzupełnij zdania. Polskie podpowiedzi są w nawiasach.",
        items: [
          { before: "J'habite dans un", after: "au troisième étage.", answers: ["appartement"], hint: "(mieszkanie)" },
          { before: "La cuisine est au", after: ".", answers: ["rez-de-chaussée", "rez-de-chaussee"], hint: "(parter)" },
          { before: "Il n'y a pas de", after: ", mais il y a un balcon.", answers: ["jardin"], hint: "(ogród)" },
          { before: "Je me douche dans la salle de", after: ".", answers: ["bains"], hint: "(łazienka)" },
          { before: "Mes livres sont sur l'", after: ".", answers: ["étagère", "etagere"], hint: "(półka)" },
          { before: "Lucas habite au", after: "étage.", answers: ["cinquième", "cinquieme"], hint: "(5.)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-6-4-prepositions",
        kind: "choice",
        skill: "Gramatyka",
        title: "Przyimki i du / de la / des",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "Fafik dort ___ le lit. (pod)", options: ["sur", "sous", "dans"], answer: 1 },
          { prompt: "La lampe est à côté ___ ordinateur.", options: ["du", "de la", "de l'"], answer: 2 },
          { prompt: "Le lit est en face ___ bureau.", options: ["de le", "du", "des"], answer: 1 },
          { prompt: "La table de nuit est ___ les deux lits.", options: ["entre", "devant", "en face"], answer: 0 },
          { prompt: "Le miroir est à droite ___ fenêtres.", options: ["de les", "du", "des"], answer: 2 },
          { prompt: "„piękny ogród”", options: ["un jardin beau", "un beau jardin", "une belle jardin"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-6-4-where",
        kind: "choice",
        skill: "Gramatyka",
        title: "Où est … ? Le voilà !",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "Où est ma veste ? – ___ est sur la chaise.", options: ["Il", "Elle", "Elles"], answer: 1 },
          { prompt: "Où sont tes baskets ? – ___ sont sous le banc.", options: ["Ils", "Elle", "Elles"], answer: 2 },
          { prompt: "___ sont mes clés ?", options: ["Où est", "Où sont", "Où"], answer: 1 },
          { prompt: "Mon portable ? ___ voilà !", options: ["Le", "La", "Les"], answer: 0 },
          { prompt: "Powiedz koledze: „Szukaj w kuchni!”", options: ["Cherches dans la cuisine !", "Cherche dans la cuisine !", "Tu cherche dans la cuisine !"], answer: 1, speakOptions: true },
          { prompt: "Powiedz do całej klasy: „Weźcie książki!”", options: ["Prenez vos livres !", "Prends vos livres !", "Prenons vos livres !"], answer: 0, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-6-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["troisième", "habite", "au", "J'", "étage"], answer: "J'habite au troisième étage.", pl: "Mieszkam na trzecim piętrze." },
          { words: ["de", "Il", "jardin", "pas", "n'y", "a"], answer: "Il n'y a pas de jardin.", pl: "Nie ma ogrodu." },
          { words: ["la", "côté", "Mon", "fenêtre", "lit", "est", "de", "à"], answer: "Mon lit est à côté de la fenêtre.", pl: "Moje łóżko jest obok okna." },
          { words: ["sur", "livres", "Mets", "l'étagère", "les"], answer: "Mets les livres sur l'étagère !", pl: "Połóż książki na półce!" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-6-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 6",
        instruction: "10 pytań z całego rozdziału. 8 dobrych odpowiedzi na 10 = rozdział zaliczony!",
        items: [
          { prompt: "„Mieszkam na parterze.”", options: ["J'habite au premier étage.", "J'habite au rez-de-chaussée.", "J'habite à la cave."], answer: 1, speakOptions: true },
          { prompt: "5. piętro to …", options: ["le cinqième étage", "le cinquième étage", "le cinquème étage"], answer: 1 },
          { prompt: "„Nie ma balkonu.”", options: ["Il n'y a pas de balcon.", "Il n'y a pas un balcon.", "Il y a pas balcon."], answer: 0, speakOptions: true },
          { prompt: "„mała kuchnia”", options: ["une cuisine petite", "un petit cuisine", "une petite cuisine"], answer: 2, speakOptions: true },
          { prompt: "„Kot jest pod łóżkiem.”", options: ["Le chat est sur le lit.", "Le chat est sous le lit.", "Le chat est dans le lit."], answer: 1, speakOptions: true },
          { prompt: "Le bureau est à côté ___ lit.", options: ["du", "de le", "des"], answer: 0 },
          { prompt: "Où est le lit ? – ___ est sous la fenêtre.", options: ["Elle", "Il", "Ils"], answer: 1, explanation: "le lit → il (choć po polsku „łóżko” to ono)." },
          { prompt: "„Posprzątaj pokój!”", options: ["Ranges ta chambre !", "Range ta chambre !", "Tu ranges ta chambre !"], answer: 1, speakOptions: true },
          { prompt: "„Idź do swojego pokoju!”", options: ["Va dans ta chambre !", "Vas dans ta chambre !", "Allez dans ta chambre !"], answer: 0, speakOptions: true },
          { prompt: "We Francji toaleta w mieszkaniu jest zwykle …", options: ["w łazience", "osobno (WC séparés)", "na balkonie"], answer: 1, explanation: "Lekcja 1 – Culture." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-6-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "À toi ! Mój dom – e-mail do Chloé",
        instruction:
          "Chloé z Genewy opisała swój dom w górach. Odpisz jej (8–10 zdań): opisz swój dom lub mieszkanie i swój pokój. Na końcu zapytaj o jej pokój. Potem kliknij „Posłuchaj mojego tekstu” i przeczytaj go na głos.",
        checklist: [
          "napisz, gdzie mieszkasz i na którym piętrze",
          "wymień pomieszczenia (il y a …) i napisz, czego nie ma (il n'y a pas de …)",
          "opisz pokój z co najmniej pięcioma przyimkami",
          "użyj przymiotników przed i po rzeczowniku",
          "zapytaj Chloé o jej pokój (Où est … ? Qu'est-ce qu'il y a … ?)",
        ],
        placeholder: "Salut Chloé ! J'habite …",
        model:
          "Salut Chloé ! Merci pour ton message. Moi, j'habite à Paris, dans un immeuble haussmannien, au quatrième étage. Il n'y a pas d'ascenseur ! Dans notre appartement, il y a une petite cuisine, un salon, trois chambres et une salle de bains. Il n'y a pas de jardin, mais il y a un joli balcon. Ma chambre est petite, mais claire. Mon lit est sous la fenêtre et à côté du lit, il y a mon bureau. Entre l'armoire et le bureau, il y a une étagère avec mes BD. Sur le mur, il y a une affiche d'Iga Swiatek. Et Fafik dort toujours sous mon lit ! Et toi ? Qu'est-ce qu'il y a dans ta chambre à Genève ? Bisous, Carla",
        modelPl:
          "Cześć, Chloé! Dzięki za wiadomość. Ja mieszkam w Paryżu, w starej kamienicy, na czwartym piętrze. Nie ma windy! W naszym mieszkaniu jest mała kuchnia, salon, trzy sypialnie i łazienka. Nie ma ogrodu, ale jest ładny balkon. Mój pokój jest mały, ale jasny. Moje łóżko stoi pod oknem, a obok łóżka jest moje biurko. Między szafą a biurkiem jest półka z komiksami. Na ścianie wisi plakat Igi Świątek. A Fafik zawsze śpi pod moim łóżkiem! A ty? Co jest w twoim pokoju w Genewie? Buziaki, Carla",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem opisać dom lub mieszkanie: pomieszczenia, piętro, il y a / il n'y a pas de.",
        "Umiem użyć liczebników porządkowych i postawić przymiotnik przed albo po rzeczowniku.",
        "Umiem opisać pokój z przyimkami i z du / de la / des.",
        "Umiem zapytać Où est … ? Où sont … ? i odpowiedzieć z il / elle / ils / elles.",
        "Umiem wydać polecenie w trybie rozkazującym.",
      ],
    },
  ],
};
