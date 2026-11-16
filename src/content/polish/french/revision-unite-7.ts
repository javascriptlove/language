import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "revision-unite-7",
  chapter: 7,
  number: 4,
  title: "Révision – Unité 7",
  titlePl: "Powtórka z rozdziału 7",
  intro:
    "To lekcja powtórkowa – zrób ją dzień lub dwa po skończeniu rozdziału 7. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na końcu napisz test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: ubrania, kolory i porter – lekcja 1 („Qu'est-ce que tu portes ?”), zakupy, ceny, ce / cette i je voudrais – lekcja 2 („Ça coûte combien ?”), quel, porównania i acheter – lekcja 3 („Un cadeau pour Léa”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać, co ktoś ma na sobie – z kolorami we właściwej formie,",
        "zrobić zakupy: poprosić, przymierzyć, zapytać o cenę i rozmiar,",
        "wskazać rzecz: ce, cet, cette, ces,",
        "zapytać z quel / quelle i porównać rzeczy: plus … que, moins … que.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: kolory i porter",
      paragraphs: [
        "Kolor stoi **po rzeczowniku** i pasuje do niego: un pull vert, une veste vert**e**, des pulls vert**s**, des vestes vert**es**. Na -e – bez zmian w rodzaju żeńskim (rouge, jaune, rose). **blanc → blanche**, **violet → violette**. **marron, orange** – nigdy się nie zmieniają. → lekcja 1",
        "**porter** (nosić, mieć na sobie) – zwykły czasownik na -er. **un jean, un pantalon** to liczba pojedyncza: Mon jean **est** noir. → lekcja 1",
        "Pytanie o kolor: **De quelle couleur est** ton sac ? → lekcja 1",
      ],
      table: {
        headers: ["on", "ona", "oni", "one"],
        rows: [
          { cells: ["noir", "noire", "noirs", "noires"], speak: "noir, noire" },
          { cells: ["gris", "grise", "gris", "grises"], speak: "gris, grise" },
          { cells: ["blanc", "blanche", "blancs", "blanches"], speak: "blanc, blanche" },
          { cells: ["rouge", "rouge", "rouges", "rouges"], speak: "rouge" },
          { cells: ["marron", "marron", "marron", "marron"], speak: "marron" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: w sklepie – ce / cette, je voudrais, ceny",
      paragraphs: [
        "**ce** pull, **cet** anorak (męski przed samogłoską), **cette** veste, **ces** baskets. → lekcja 2",
        "Grzecznie: **Je voudrais** + rzeczownik / bezokolicznik. **Je peux essayer ?** Rozmiar: **Vous faites quelle taille ? – Je fais du 38.** Buty: **la pointure**. → lekcja 2",
        "Cena: **Ça coûte combien ?** / **Combien coûte** ce pull ? – Il **coûte** 29,90 € (vingt-neuf euros quatre-vingt-dix). Za …: **trop** grand / petit / cher. → lekcja 2",
      ],
      table: {
        headers: ["", "liczba pojedyncza", "liczba mnoga"],
        rows: [
          { cells: ["męski", "ce pull / cet anorak", "ces pulls"], speak: "ce pull, cet anorak, ces pulls" },
          { cells: ["żeński", "cette robe", "ces robes"], speak: "cette robe, ces robes" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: quel i porównania",
      paragraphs: [
        "**quel** cadeau, **quelle** taille, **quels** vêtements, **quelles** chaussures – wszystkie brzmią „kel”. → lekcja 3",
        "Porównania: **plus** … **que** (bardziej niż), **moins** … **que** (mniej niż), **aussi** … **que** (tak samo jak). Przymiotnik pasuje do rzeczownika. **bon → meilleur**. → lekcja 3",
        "**acheter**: j'ach**è**te, tu ach**è**tes, il ach**è**te, nous achetons, vous achetez, ils ach**è**tent. → lekcja 3",
      ],
      table: {
        headers: ["", "przykład"],
        rows: [
          { cells: ["plus … que", "La veste est plus chère que le pull."], speak: "La veste est plus chère que le pull." },
          { cells: ["moins … que", "Les puces sont moins chères que les boutiques."], speak: "Les puces sont moins chères que les boutiques." },
          { cells: ["aussi … que", "Hugo est aussi grand que Lucas."], speak: "Hugo est aussi grand que Lucas." },
          { cells: ["meilleur", "C'est le meilleur cadeau !"], speak: "C'est le meilleur cadeau !" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Ubrania i kolory (lekcja 1)",
          items: [
            { text: "un t-shirt / un pull / un sweat", pl: "koszulka / sweter / bluza" },
            { text: "une chemise / une robe / une jupe", pl: "koszula / sukienka / spódnica" },
            { text: "un jean / un pantalon", pl: "dżinsy / spodnie" },
            { text: "une veste / un manteau", pl: "kurtka / płaszcz" },
            { text: "des chaussures / des baskets / des bottes", pl: "buty / buty sportowe / kozaki" },
            { text: "un bonnet / une écharpe / une casquette", pl: "czapka / szalik / czapka z daszkiem" },
            { text: "noir, blanc, gris, bleu, vert", pl: "czarny, biały, szary, niebieski, zielony" },
            { text: "rouge, jaune, rose, violet, marron, orange", pl: "czerwony, żółty, różowy, fioletowy, brązowy, pomarańczowy" },
            { text: "porter", pl: "nosić, mieć na sobie" },
          ],
        },
        {
          title: "W sklepie (lekcja 2)",
          items: [
            { text: "le vendeur / la vendeuse", pl: "sprzedawca / sprzedawczyni" },
            { text: "la taille / la pointure", pl: "rozmiar / rozmiar buta" },
            { text: "essayer / la cabine", pl: "przymierzyć / przymierzalnia" },
            { text: "Je voudrais …", pl: "Chciałbym / Chciałabym …" },
            { text: "Ça coûte combien ?", pl: "Ile to kosztuje?" },
            { text: "trop cher / trop grand / trop petit", pl: "za drogi / za duży / za mały" },
            { text: "Je prends ce pull.", pl: "Biorę ten sweter." },
            { text: "les soldes", pl: "wyprzedaż" },
          ],
        },
        {
          title: "Prezenty i porównania (lekcja 3)",
          items: [
            { text: "un cadeau / l'anniversaire", pl: "prezent / urodziny" },
            { text: "acheter / offrir", pl: "kupować / dawać w prezencie" },
            { text: "C'est pour qui ? – C'est pour toi !", pl: "Dla kogo to? – Dla ciebie!" },
            { text: "plus … que / moins … que", pl: "bardziej … niż / mniej … niż" },
            { text: "aussi … que", pl: "tak samo … jak" },
            { text: "meilleur / le meilleur", pl: "lepszy / najlepszy" },
            { text: "les puces / le marchand", pl: "pchli targ / handlarz" },
            { text: "Vous faites un prix ?", pl: "Opuści pan cenę?" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Un bonnet pour Cracovie",
      titlePl: "Czapka na Kraków",
      context: "Środa po południu. Carla na Święta jedzie do dziadków w Krakowie i potrzebuje ciepłych rzeczy. Amira idzie z nią do sklepu.",
      cast: { Carla: "f", Amira: "f", Vendeuse: "f" },
      lines: [
        { speaker: "Amira", text: "Alors, Carla, qu'est-ce que tu cherches ?", pl: "No to, Carlo, czego szukasz?" },
        { speaker: "Carla", text: "Un bonnet et une écharpe. À Cracovie, en décembre, il y a de la neige !", pl: "Czapki i szalika. W Krakowie w grudniu jest śnieg!" },
        { speaker: "Vendeuse", text: "Bonjour, mesdemoiselles ! Je peux vous aider ?", pl: "Dzień dobry paniom! Mogę pomóc?" },
        { speaker: "Carla", text: "Bonjour, madame. Je voudrais un bonnet, s'il vous plaît.", pl: "Dzień dobry pani. Chciałabym czapkę, poproszę." },
        { speaker: "Vendeuse", text: "Quelle couleur ? Nous avons ce bonnet rouge et ce bonnet gris.", pl: "Jaki kolor? Mamy tę czerwoną czapkę i tę szarą." },
        { speaker: "Amira", text: "Le bonnet rouge est plus joli que le bonnet gris !", pl: "Czerwona czapka jest ładniejsza niż szara!" },
        { speaker: "Carla", text: "Oui, mais il est plus cher. Il coûte combien ?", pl: "Tak, ale droższa. Ile kosztuje?" },
        { speaker: "Vendeuse", text: "Le rouge coûte dix-neuf euros et le gris, quatorze euros.", pl: "Czerwona kosztuje dziewiętnaście euro, a szara czternaście." },
        { speaker: "Carla", text: "Je prends le bonnet rouge. Et cette écharpe blanche, elle coûte combien ?", pl: "Biorę czerwoną czapkę. A ten biały szalik, ile kosztuje?" },
        { speaker: "Vendeuse", text: "Elle est en promotion : neuf euros quatre-vingt-dix.", pl: "Jest w promocji: dziewięć euro dziewięćdziesiąt." },
        { speaker: "Amira", text: "Rouge et blanc… Ce sont les couleurs de la Pologne !", pl: "Czerwony i biały… To barwy Polski!" },
        { speaker: "Carla", text: "C'est vrai ! Parfait pour Cracovie. Je prends aussi l'écharpe !", pl: "To prawda! Idealne do Krakowa. Biorę też szalik!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-7-4-dialogue",
        kind: "choice",
        skill: "Słuchanie",
        title: "Tu as compris ? – Zrozumiałeś/-aś?",
        instruction: "Odpowiedz na pytania do dialogu „Un bonnet pour Cracovie”.",
        items: [
          { prompt: "Qu'est-ce que Carla cherche ?", speak: "Qu'est-ce que Carla cherche ?", options: ["un manteau et des bottes", "un bonnet et une écharpe", "un pull et un jean"], answer: 1, speakOptions: true },
          { prompt: "Combien coûte le bonnet gris ?", speak: "Combien coûte le bonnet gris ?", options: ["14 €", "19 €", "9,90 €"], answer: 0 },
          { prompt: "Quel bonnet est-ce que Carla achète ?", speak: "Quel bonnet est-ce que Carla achète ?", options: ["le bonnet gris", "le bonnet blanc", "le bonnet rouge"], answer: 2, speakOptions: true },
          { prompt: "De quelle couleur est l'écharpe ?", speak: "De quelle couleur est l'écharpe ?", options: ["blanche", "rouge", "grise"], answer: 0, speakOptions: true },
          { prompt: "Ile Carla płaci w sumie?", options: ["23,90 €", "28,90 €", "33,90 €"], answer: 1, explanation: "19 € + 9,90 € = 28,90 €." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-7-4-colors",
        kind: "fill",
        skill: "Gramatyka",
        title: "Kolory we właściwej formie",
        instruction: "Wpisz kolor z nawiasu w poprawnej formie.",
        items: [
          { before: "Carla porte une robe", after: ".", answers: ["verte"], hint: "(vert)" },
          { before: "J'ai des baskets", after: ".", answers: ["blanches"], hint: "(blanc)" },
          { before: "Madame Martin porte une jupe", after: ".", answers: ["grise"], hint: "(gris)" },
          { before: "Amira a des bottes", after: ".", answers: ["marron"], hint: "(marron)" },
          { before: "Hugo porte une casquette", after: ".", answers: ["noire"], hint: "(noir)" },
          { before: "Léa a un sweat", after: ".", answers: ["violet"], hint: "(violet)" },
          { before: "Ce sont des chaussettes", after: ".", answers: ["bleues"], hint: "(bleu)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-7-4-shop",
        kind: "choice",
        skill: "Gramatyka",
        title: "ce / cette, quel / quelle, porównania",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "Combien coûte ___ veste ?", options: ["ce", "cette", "cet"], answer: 1 },
          { prompt: "Je voudrais ___ anorak.", options: ["cet", "ce", "cette"], answer: 0 },
          { prompt: "___ baskets sont trop chères.", options: ["Cette", "Ce", "Ces"], answer: 2 },
          { prompt: "___ taille ?", options: ["Quel", "Quelle", "Quels"], answer: 1 },
          { prompt: "Le t-shirt (10 €) est ___ cher que le pull (30 €).", options: ["plus", "moins", "aussi"], answer: 1 },
          { prompt: "C'est le ___ cadeau !", options: ["plus bon", "meilleur", "bon que"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-7-4-prices",
        kind: "listen",
        skill: "Słuchanie",
        title: "Ceny",
        instruction: "Kliknij ▶, posłuchaj i wybierz właściwą cenę.",
        items: [
          { audio: "Ça coûte dix-neuf euros.", options: ["9 €", "19 €", "90 €"], answer: 1 },
          { audio: "Il coûte quatorze euros cinquante.", options: ["14,50 €", "40,50 €", "4,50 €"], answer: 0 },
          { audio: "Elles coûtent soixante-dix euros.", options: ["60 €", "17 €", "70 €"], answer: 2 },
          { audio: "Ça coûte cent cinquante euros.", options: ["105 €", "150 €", "115 €"], answer: 1 },
          { audio: "Elle coûte quatre-vingt-quinze euros.", options: ["95 €", "85 €", "75 €"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-7-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["porte", "blanche", "Il", "chemise", "une"], answer: "Il porte une chemise blanche.", pl: "On ma na sobie białą koszulę." },
          { words: ["voudrais", "cette", "essayer", "Je", "robe"], answer: "Je voudrais essayer cette robe.", pl: "Chciałabym przymierzyć tę sukienkę." },
          { words: ["combien", "coûte", "Ça"], answer: "Ça coûte combien ?", pl: "Ile to kosztuje?" },
          { words: ["moins", "La", "chère", "jupe", "est", "que", "robe", "la"], answer: "La jupe est moins chère que la robe.", pl: "Spódnica jest tańsza niż sukienka." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-7-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 7",
        instruction: "10 pytań z całego rozdziału. 8 dobrych odpowiedzi na 10 = rozdział zaliczony!",
        items: [
          { prompt: "„czerwona sukienka”", options: ["une rouge robe", "une robe rouge", "une robe rougee"], answer: 1, speakOptions: true },
          { prompt: "„białe buty sportowe”", options: ["des baskets blancs", "des baskets blanches", "des blanches baskets"], answer: 1, speakOptions: true },
          { prompt: "„brązowe kozaki”", options: ["des bottes marron", "des bottes marronnes", "des bottes marrons"], answer: 0, speakOptions: true },
          { prompt: "Mon jean ___ noir.", options: ["sont", "est", "es"], answer: 1, explanation: "un jean – liczba pojedyncza." },
          { prompt: "Grzecznie w sklepie: „Chciałbym ten sweter.”", options: ["Je veux ce pull !", "Je voudrais ce pull, s'il vous plaît.", "Donne ce pull."], answer: 1, speakOptions: true },
          { prompt: "___ anorak est parfait.", options: ["Ce", "Cette", "Cet"], answer: 2 },
          { prompt: "29,90 € to …", options: ["vingt-neuf euros quatre-vingt-dix", "vingt-neuf euros neuf", "quatre-vingt-dix euros vingt-neuf"], answer: 0, speakOptions: true },
          { prompt: "___ chaussures est-ce que tu préfères ?", options: ["Quels", "Quelles", "Quelle"], answer: 1 },
          { prompt: "„Ten prezent jest lepszy.”", options: ["Ce cadeau est plus bon.", "Ce cadeau est meilleur.", "Ce cadeau est aussi bon."], answer: 1, speakOptions: true },
          { prompt: "We Francji wyprzedaże (les soldes) …", options: ["są, kiedy sklep chce", "mają terminy ustalone przez państwo", "są tylko w niedzielę"], answer: 1, explanation: "Lekcja 2 – Culture." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "fr-7-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "À toi ! Moje zakupy – wiadomość do Pauli",
        instruction:
          "Napisz wiadomość do Pauli (8–10 zdań) o dzisiejszych zakupach: co kupujesz, w jakim kolorze, ile to kosztuje i co jest lepsze. Potem kliknij „Posłuchaj mojego tekstu” i przeczytaj go na głos.",
        checklist: [
          "napisz, gdzie jesteś i co kupujesz (aujourd'hui, j'achète …)",
          "opisz co najmniej trzy ubrania z kolorami w poprawnej formie",
          "podaj ceny słowami",
          "użyj ce / cette / ces i trop",
          "porównaj dwie rzeczy (plus … que / moins … que) i zapytaj Paulę z quel / quelle",
        ],
        placeholder: "Salut Paula ! Aujourd'hui, je suis …",
        model:
          "Salut Paula ! Aujourd'hui, je suis dans une boutique avec Amira. J'achète un bonnet rouge et une écharpe blanche pour Cracovie ! Le bonnet coûte dix-neuf euros. Il y a aussi un bonnet gris, il est moins cher, mais le rouge est plus joli. L'écharpe coûte neuf euros quatre-vingt-dix : elle est en promotion. Amira essaye une veste violette, mais elle est trop grande. Ces vêtements sont parfaits pour l'hiver polonais ! Et toi, quelle est ta couleur préférée ? Bisous, Carla",
        modelPl:
          "Cześć, Paulo! Dzisiaj jestem w sklepie z Amirą. Kupuję czerwoną czapkę i biały szalik do Krakowa! Czapka kosztuje dziewiętnaście euro. Jest też szara czapka, tańsza, ale czerwona jest ładniejsza. Szalik kosztuje dziewięć euro dziewięćdziesiąt: jest w promocji. Amira przymierza fioletową kurtkę, ale jest za duża. Te ubrania są idealne na polską zimę! A ty, jaki jest twój ulubiony kolor? Buziaki, Carla",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem opisać, co ktoś ma na sobie – z kolorami w poprawnej formie.",
        "Umiem zrobić zakupy: je voudrais, je peux essayer, je fais du …, ça coûte combien ?",
        "Umiem przeczytać ceny w euro.",
        "Umiem użyć ce, cet, cette, ces i quel, quelle, quels, quelles.",
        "Umiem porównać rzeczy: plus … que, moins … que, aussi … que, meilleur.",
      ],
    },
  ],
};
