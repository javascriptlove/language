import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "repaso-unidad-6",
  chapter: 6,
  number: 4,
  title: "Repaso – Unidad 6",
  titlePl: "Powtórka z rozdziału 6",
  intro:
    "Powtarzamy wszystko o domu! Zrób tę lekcję dzień lub dwa po skończeniu rozdziału 6. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na koniec napisz test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: pomieszczenia, piętra i przymiotniki – lekcja 1 („Vivo en un piso”), meble, estar i przyimki – lekcja 2 („En mi habitación”), hay czy está i tryb rozkazujący – lekcja 3 („¿Dónde está mi móvil?”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać swój dom lub mieszkanie: pomieszczenia, piętro, czego nie ma,",
        "opisać pokój i powiedzieć, gdzie co stoi – z estar i przyimkami,",
        "odróżnić hay od está / están,",
        "wydać polecenie: ¡Busca! ¡Pon! ¡Ordena!",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: dom, piętra i przymiotniki",
      paragraphs: [
        "Opis mieszkania: **Hay** una cocina, dos dormitorios… **No hay** jardín. → lekcja 1",
        "Piętra: **la planta baja** (parter), **el primer piso**, el segundo, **el tercer piso**, el cuarto… (primero i tercero tracą -o przed rzeczownikiem męskim). → lekcja 1",
        "Przymiotnik po rzeczowniku i pasuje do niego: un salón luminos**o**, una cocina pequeñ**a**, dos baños modern**os**. Zachwyt: **¡Qué** casa **tan** bonita! → lekcja 1",
      ],
      table: {
        headers: ["", "przykład", "po polsku"],
        rows: [
          { cells: ["hay", "Hay tres dormitorios.", "Są trzy sypialnie."], speak: "Hay tres dormitorios." },
          { cells: ["no hay", "No hay ascensor.", "Nie ma windy."], speak: "No hay ascensor." },
          { cells: ["piętro", "Vivo en el tercer piso.", "Mieszkam na trzecim piętrze."], speak: "Vivo en el tercer piso." },
          { cells: ["przymiotnik", "una cocina pequeña", "mała kuchnia"], speak: "una cocina pequeña" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: estar i przyimki miejsca",
      paragraphs: [
        "**estar**: estoy, estás, está, estamos, estáis, están. Używamy go, mówiąc, **gdzie coś jest**: El gato **está** debajo de la cama. → lekcja 2",
        "Przyimki: **encima de, debajo de, delante de, detrás de, al lado de, enfrente de, entre … y …, en**. **de + el = del**: al lado **del** armario. → lekcja 2",
      ],
      table: {
        headers: ["przyimek", "przykład"],
        rows: [
          { cells: ["encima de", "El ordenador está encima del escritorio."], speak: "El ordenador está encima del escritorio." },
          { cells: ["debajo de", "Las zapatillas están debajo de la cama."], speak: "Las zapatillas están debajo de la cama." },
          { cells: ["delante de / detrás de", "La silla está delante del escritorio."], speak: "La silla está delante del escritorio." },
          { cells: ["al lado de", "La cama está al lado de la ventana."], speak: "La cama está al lado de la ventana." },
          { cells: ["entre … y …", "El póster está entre la ventana y el armario."], speak: "El póster está entre la ventana y el armario." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: hay czy está? i tryb rozkazujący",
      paragraphs: [
        "**hay** + un / una / liczba / bez rodzajnika = jest **jakiś** (coś nowego): En la mochila **hay una** toalla. **está / están** + el / la / mi / imię = jest **ten konkretny**: **Mi** móvil **está** en la zapatilla. → lekcja 3",
        "Tryb rozkazujący (tú) = forma él/ella: **¡Busca! ¡Mira! ¡Ordena! ¡Come!** Nieregularne: **¡Pon! ¡Ven! ¡Haz! ¡Sal!** Gdy coś się znajdzie: **¡Aquí está! / ¡Aquí están!** → lekcja 3",
      ],
      table: {
        headers: ["hay", "está / están"],
        rows: [
          { cells: ["Hay un libro en la mesa.", "El libro está en la mesa."], speak: "Hay un libro en la mesa. El libro está en la mesa." },
          { cells: ["Hay dos calcetines en el suelo.", "Mis calcetines están en el suelo."], speak: "Hay dos calcetines en el suelo. Mis calcetines están en el suelo." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słówka rozdziału 6",
      groups: [
        {
          title: "Dom i pomieszczenia",
          items: [
            { text: "una casa / un piso / un edificio", pl: "dom / mieszkanie / budynek" },
            { text: "la planta baja / el ascensor", pl: "parter / winda" },
            { text: "la cocina / el salón / el comedor", pl: "kuchnia / salon / jadalnia" },
            { text: "el dormitorio / la habitación / el baño", pl: "sypialnia / pokój / łazienka" },
            { text: "el pasillo / la entrada", pl: "korytarz / przedpokój" },
            { text: "la terraza / el balcón / el jardín", pl: "taras / balkon / ogród" },
            { text: "a la izquierda / a la derecha", pl: "po lewej / po prawej" },
          ],
        },
        {
          title: "Meble i przyimki",
          items: [
            { text: "la cama / el escritorio / la silla", pl: "łóżko / biurko / krzesło" },
            { text: "el armario / la estantería", pl: "szafa / regał" },
            { text: "la ventana / la puerta / la pared", pl: "okno / drzwi / ściana" },
            { text: "la alfombra / la lámpara / el espejo", pl: "dywan / lampa / lustro" },
            { text: "encima de / debajo de", pl: "na / pod" },
            { text: "delante de / detrás de", pl: "przed / za" },
            { text: "al lado de / enfrente de / entre", pl: "obok / naprzeciwko / między" },
          ],
        },
        {
          title: "Szukamy",
          items: [
            { text: "buscar / encontrar", pl: "szukać / znaleźć" },
            { text: "ordenar / poner", pl: "sprzątać / kłaść" },
            { text: "el móvil / las llaves / las gafas", pl: "telefon / klucze / okulary" },
            { text: "en el suelo / por todas partes", pl: "na podłodze / wszędzie" },
            { text: "¡Aquí está!", pl: "Tu jest!" },
            { text: "¡Ordena tu habitación!", pl: "Posprzątaj pokój!" },
            { text: "despistado / despistada", pl: "roztrzepany / roztrzepana" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "La nueva habitación de Emma",
      titlePl: "Nowy pokój Emmy",
      context: "Rodzina Emmy przeprowadza się do większego mieszkania. W środę po południu Carla i Marcos pomagają jej urządzić pokój. Wszędzie stoją kartony.",
      cast: { Emma: "f", Carla: "f", Marcos: "m" },
      lines: [
        { speaker: "Emma", text: "¡Bienvenidos a mi nuevo piso! Ahora vivimos en el quinto piso. ¡Y hay una terraza grande!", pl: "Witajcie w moim nowym mieszkaniu! Teraz mieszkamy na piątym piętrze. I jest duży taras!" },
        { speaker: "Carla", text: "¡Qué habitación tan grande! Pero… ¡cuántas cajas!", pl: "Jaki duży pokój! Ale… ile pudeł!" },
        { speaker: "Emma", text: "Sí, es un desastre. Marcos, pon el escritorio delante de la ventana, por favor.", pl: "Tak, katastrofa. Marcos, postaw biurko przed oknem, proszę." },
        { speaker: "Marcos", text: "Vale. ¿Y la cama? ¿La pongo al lado del escritorio?", pl: "Dobra. A łóżko? Postawić je obok biurka?" },
        { speaker: "Emma", text: "No, pon la cama enfrente de la puerta. Y la estantería, entre la cama y el armario.", pl: "Nie, postaw łóżko naprzeciwko drzwi. A regał między łóżkiem a szafą." },
        { speaker: "Carla", text: "Emma, ¿dónde está tu lámpara?", pl: "Emmo, gdzie jest twoja lampa?" },
        { speaker: "Emma", text: "Está en la caja grande. Busca debajo de los libros.", pl: "Jest w dużym pudle. Szukaj pod książkami." },
        { speaker: "Carla", text: "En esta caja hay libros, un paraguas, una taza de té… ¡Aquí está! ¿La pongo encima del escritorio?", pl: "W tym pudle są książki, parasol, kubek do herbaty… Tu jest! Postawić ją na biurku?" },
        { speaker: "Emma", text: "¡Perfecto! Y mis pósteres… ¿Dónde están mis pósteres?", pl: "Idealnie! A moje plakaty… Gdzie są moje plakaty?" },
        { speaker: "Marcos", text: "Eh… Están debajo de mis pies. ¡Lo siento!", pl: "Eee… Są pod moimi stopami. Przepraszam!" },
        { speaker: "Emma", text: "¡Marcos! ¡Eres un despistado!", pl: "Marcos! Ale z ciebie roztrzepaniec!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "es-6-4-dialogue",
        kind: "choice",
        skill: "Słuchanie",
        title: "¿Lo has entendido? – Zrozumiałeś/-aś?",
        instruction: "Odpowiedz na pytania do dialogu „La nueva habitación de Emma”.",
        items: [
          { prompt: "¿En qué piso vive Emma ahora?", speak: "¿En qué piso vive Emma ahora?", options: ["en el segundo", "en el quinto", "en la planta baja"], answer: 1, speakOptions: true },
          { prompt: "¿Dónde está el escritorio?", speak: "¿Dónde está el escritorio?", options: ["al lado de la cama", "delante de la ventana", "enfrente de la puerta"], answer: 1, speakOptions: true },
          { prompt: "¿Dónde está la cama?", speak: "¿Dónde está la cama?", options: ["enfrente de la puerta", "debajo de la ventana", "al lado del armario"], answer: 0, speakOptions: true },
          { prompt: "¿Qué hay en la caja grande?", speak: "¿Qué hay en la caja grande?", options: ["ropa y zapatos", "libros, un paraguas, una taza y la lámpara", "pósteres"], answer: 1, speakOptions: true },
          { prompt: "¿Dónde están los pósteres?", speak: "¿Dónde están los pósteres?", options: ["en la pared", "debajo de los pies de Marcos", "en el armario"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-6-4-house",
        kind: "fill",
        skill: "Słownictwo",
        title: "Mi casa",
        instruction: "Uzupełnij zdania. Polskie podpowiedzi są w nawiasach.",
        items: [
          { before: "Vivo en un", after: "en el tercer piso.", answers: ["piso"], hint: "(mieszkanie)" },
          { before: "La cocina está en la planta", after: ".", answers: ["baja"], hint: "(parter)" },
          { before: "No", after: "ascensor.", answers: ["hay"], hint: "(nie ma)" },
          { before: "Me ducho en el", after: ".", answers: ["baño"], hint: "(łazienka)" },
          { before: "Mis libros están en la", after: ".", answers: ["estantería", "estanteria"], hint: "(regał)" },
          { before: "Vivo en el", after: "piso.", answers: ["primer"], hint: "(1.)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-6-4-prepositions",
        kind: "choice",
        skill: "Gramatyka",
        title: "estar, przyimki i del",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "Burek duerme ___ de la cama. (pod)", options: ["encima", "debajo", "delante"], answer: 1 },
          { prompt: "La lámpara está al lado ___ ordenador.", options: ["del", "de el", "de la"], answer: 0 },
          { prompt: "Yo ___ en mi habitación.", options: ["soy", "estoy", "hay"], answer: 1 },
          { prompt: "Los libros ___ en la estantería.", options: ["está", "hay", "están"], answer: 2 },
          { prompt: "La mesilla está ___ las dos camas.", options: ["entre", "delante", "enfrente"], answer: 0 },
          { prompt: "„jasny salon”", options: ["un luminoso salón", "un salón luminosa", "un salón luminoso"], answer: 2, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-6-4-hay",
        kind: "choice",
        skill: "Gramatyka",
        title: "¿hay o está? ¡Imperativo!",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "En el salón ___ un sofá grande.", options: ["hay", "está", "es"], answer: 0 },
          { prompt: "Mi móvil ___ en la mochila.", options: ["hay", "está", "están"], answer: 1 },
          { prompt: "¿___ un baño en el primer piso?", options: ["Está", "Hay", "Es"], answer: 1 },
          { prompt: "Powiedz koledze: „Szukaj w kuchni!”", options: ["¡Buscas en la cocina!", "¡Busca en la cocina!", "¡Buscar en la cocina!"], answer: 1, speakOptions: true },
          { prompt: "Powiedz psu: „Chodź tutaj!”", options: ["¡Ven aquí!", "¡Vienes aquí!", "¡Venir aquí!"], answer: 0, speakOptions: true },
          { prompt: "„Połóż książki na regale!”", options: ["¡Pone los libros en la estantería!", "¡Pon los libros en la estantería!", "¡Pones los libros en la estantería!"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-6-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["tercer", "Vivo", "el", "piso", "en"], answer: "Vivo en el tercer piso.", pl: "Mieszkam na trzecim piętrze." },
          { words: ["jardín", "hay", "No"], answer: "No hay jardín.", pl: "Nie ma ogrodu." },
          { words: ["ventana", "Mi", "al", "la", "de", "está", "cama", "lado"], answer: "Mi cama está al lado de la ventana.", pl: "Moje łóżko jest obok okna." },
          { words: ["la", "libros", "Pon", "en", "estantería", "los"], answer: "Pon los libros en la estantería.", pl: "Połóż książki na regale." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-6-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 6",
        instruction: "10 pytań z całego rozdziału. Jeśli odpowiesz dobrze na co najmniej 8 – rozdział 6 zaliczony!",
        items: [
          { prompt: "„Mieszkam na parterze.”", options: ["Vivo en el primer piso.", "Vivo en la planta baja.", "Vivo en el bajo piso."], answer: 1, speakOptions: true },
          { prompt: "3. piętro to…", options: ["el tercero piso", "el tercer piso", "el tres piso"], answer: 1 },
          { prompt: "„Nie ma balkonu.”", options: ["No hay balcón.", "No está balcón.", "No hay un el balcón."], answer: 0, speakOptions: true },
          { prompt: "„mała kuchnia”", options: ["una pequeña cocina", "una cocina pequeño", "una cocina pequeña"], answer: 2, speakOptions: true },
          { prompt: "„Kot jest pod łóżkiem.”", options: ["El gato está encima de la cama.", "El gato está debajo de la cama.", "El gato hay debajo de la cama."], answer: 1, speakOptions: true },
          { prompt: "La silla está delante ___ escritorio.", options: ["del", "de el", "de"], answer: 0 },
          { prompt: "Nosotros ___ en el salón.", options: ["somos", "estamos", "hay"], answer: 1 },
          { prompt: "En la mesa ___ dos vasos.", options: ["están", "hay", "son"], answer: 1 },
          { prompt: "„Posprzątaj pokój!”", options: ["¡Ordenas tu habitación!", "¡Ordena tu habitación!", "¡Ordenar tu habitación!"], answer: 1, speakOptions: true },
          { prompt: "Wewnętrzny dziedziniec w andaluzyjskim domu to…", options: ["el patio", "el portero", "la persiana"], answer: 0, explanation: "Lekcja 1 – Cultura." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-6-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "¡Ahora tú! Mój dom – e-mail do Emmy",
        instruction:
          "Emma opisała swój dom w Londynie. Odpisz jej (8–10 zdań): opisz swój dom lub mieszkanie i swój pokój. Na końcu zapytaj ją o jej nowy pokój. Potem kliknij „Posłuchaj mojego tekstu” i przeczytaj go na głos.",
        checklist: [
          "napisz, gdzie mieszkasz i na którym piętrze",
          "wymień pomieszczenia (hay…) i napisz, czego nie ma (no hay…)",
          "opisz pokój z co najmniej pięcioma przyimkami i estar",
          "użyj co najmniej trzech przymiotników w poprawnej formie",
          "zapytaj Emmę o jej pokój (¿Dónde está…? ¿Qué hay…?)",
        ],
        placeholder: "¡Hola, Emma! Vivo en…",
        model:
          "¡Hola, Emma! Gracias por tu mensaje. Yo vivo en Madrid, en un piso moderno, en el sexto piso. Hay ascensor y una terraza pequeña. En el piso hay una cocina, un salón luminoso, tres dormitorios y dos baños. No hay jardín. Comparto mi habitación con Paula. Mi cama está a la izquierda, al lado de la ventana. El escritorio está delante de la ventana y la estantería está al lado del escritorio. En la pared hay un póster de Lewandowski. ¡Y Burek duerme detrás de la puerta! ¿Y tu habitación nueva? ¿Dónde está tu cama? Un beso, Carla",
        modelPl:
          "Cześć, Emmo! Dzięki za wiadomość. Ja mieszkam w Madrycie, w nowoczesnym mieszkaniu, na szóstym piętrze. Jest winda i mały taras. W mieszkaniu jest kuchnia, jasny salon, trzy sypialnie i dwie łazienki. Nie ma ogrodu. Dzielę pokój z Paulą. Moje łóżko jest po lewej, obok okna. Biurko stoi przed oknem, a regał obok biurka. Na ścianie wisi plakat Lewandowskiego. A Burek śpi za drzwiami! A twój nowy pokój? Gdzie stoi twoje łóżko? Buziaki, Carla",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem opisać dom lub mieszkanie: pomieszczenia, piętro, hay / no hay.",
        "Umiem użyć liczebników porządkowych (el primer piso) i przymiotników w poprawnej formie.",
        "Umiem opisać pokój z estar i przyimkami (encima de, debajo de, al lado del…).",
        "Wiem, kiedy mówię hay, a kiedy está / están.",
        "Umiem wydać polecenie w trybie rozkazującym.",
      ],
    },
  ],
};
