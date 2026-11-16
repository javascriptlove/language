import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "repaso-unidad-5",
  chapter: 5,
  number: 4,
  title: "Repaso – Unidad 5",
  titlePl: "Powtórka z rozdziału 5",
  intro:
    "Powtarzamy cały dzień – od budzika do snu! Zrób tę lekcję dzień lub dwa po skończeniu rozdziału 5. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na koniec napisz test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: czasowniki zwrotne i pory dnia – lekcja 1 („Me levanto a las siete”), ir, salir, transport i primero / luego – lekcja 2 („¿Cómo vas al instituto?”), przeczenie, posiłki i antes de / después de – lekcja 3 („Los fines de semana, descanso”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opowiedzieć o swoim dniu od rana do wieczora z godzinami i czasownikami zwrotnymi,",
        "powiedzieć, jak dojeżdżasz do szkoły – z ir i tardar,",
        "ułożyć czynności po kolei: primero, luego, después, al final,",
        "zaprzeczyć z czasownikiem zwrotnym i nazwać hiszpańskie posiłki.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: czasowniki zwrotne i pory dnia",
      paragraphs: [
        "Czasownik zwrotny ma przed sobą zaimek: **me, te, se, nos, os, se** – me levanto, te duchas, se viste… W bezokoliczniku „się” jest na końcu: levantar**se**. → lekcja 1",
        "Zmiany w temacie (oprócz nosotros i vosotros): **e→ie** me desp**ie**rto, **o→ue** me ac**ue**sto, d**ue**rmo, **e→i** me v**i**sto. → lekcja 1",
        "Godzina: **a las** siete, **a la** una, **sobre las** diez (około). Pory dnia: **por la mañana / por la tarde / por la noche**; przy godzinie: a las siete **de la mañana**. → lekcja 1",
      ],
      table: {
        headers: ["osoba", "levantarse", "acostarse", "vestirse"],
        rows: [
          { cells: ["yo", "me levanto", "me acuesto", "me visto"], speak: "me levanto, me acuesto, me visto" },
          { cells: ["tú", "te levantas", "te acuestas", "te vistes"], speak: "te levantas, te acuestas, te vistes" },
          { cells: ["él / ella", "se levanta", "se acuesta", "se viste"], speak: "se levanta, se acuesta, se viste" },
          { cells: ["nosotros", "nos levantamos", "nos acostamos", "nos vestimos"], speak: "nos levantamos, nos acostamos, nos vestimos" },
          { cells: ["vosotros", "os levantáis", "os acostáis", "os vestís"], speak: "os levantáis, os acostáis, os vestís" },
          { cells: ["ellos / ellas", "se levantan", "se acuestan", "se visten"], speak: "se levantan, se acuestan, se visten" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: ir, salir, tardar i po kolei",
      paragraphs: [
        "**ir** (iść, jechać): voy, vas, va, vamos, vais, van. Po ir: **a + miejsce** (al instituto, a la piscina). Jak? **en** autobús / metro / coche / bici – ale **a pie**. → lekcja 2",
        "**salir**: **salgo**, sales, sale… – Salgo de casa a las ocho. **tardar**: ¿Cuánto tardas? – Tardo veinte minutos. → lekcja 2",
        "Po kolei: **primero** → **luego / después** → **al final**. → lekcja 2",
      ],
      table: {
        headers: ["osoba", "ir", "salir"],
        rows: [
          { cells: ["yo", "voy", "salgo"], speak: "voy, salgo" },
          { cells: ["tú", "vas", "sales"], speak: "vas, sales" },
          { cells: ["él / ella", "va", "sale"], speak: "va, sale" },
          { cells: ["nosotros", "vamos", "salimos"], speak: "vamos, salimos" },
          { cells: ["vosotros", "vais", "salís"], speak: "vais, salís" },
          { cells: ["ellos / ellas", "van", "salen"], speak: "van, salen" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: przeczenie, posiłki, antes de / después de",
      paragraphs: [
        "Przeczenie: **no** + zaimek + czasownik: **No me** levanto pronto. Z nunca przed czasownikiem – bez no: **Nunca me** acuesto tarde. → lekcja 3",
        "Pięć posiłków: **el desayuno** (rano) → **el almuerzo** (ok. 11:00) → **la comida** (ok. 14:00–15:00) → **la merienda** (ok. 18:00) → **la cena** (ok. 21:00–22:00). Czasowniki: desayunar, comer, merendar (meriendo), cenar. → lekcja 3",
        "**antes de / después de** + bezokolicznik: antes de cenar, después de comer, antes de salir. → lekcja 3",
      ],
      table: {
        headers: ["", "przykład", "po polsku"],
        rows: [
          { cells: ["no", "No me ducho por la noche.", "Nie biorę prysznica wieczorem."], speak: "No me ducho por la noche." },
          { cells: ["nunca", "Nunca me levanto antes de las diez.", "Nigdy nie wstaję przed dziesiątą."], speak: "Nunca me levanto antes de las diez." },
          { cells: ["antes de", "Antes de cenar, hago los deberes.", "Przed kolacją odrabiam lekcje."], speak: "Antes de cenar, hago los deberes." },
          { cells: ["después de", "Después de comer, descanso.", "Po obiedzie odpoczywam."], speak: "Después de comer, descanso." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słówka rozdziału 5",
      groups: [
        {
          title: "Codzienne czynności",
          items: [
            { text: "despertarse / levantarse", pl: "budzić się / wstawać" },
            { text: "ducharse / lavarse", pl: "brać prysznic / myć się" },
            { text: "lavarse los dientes", pl: "myć zęby" },
            { text: "vestirse / peinarse", pl: "ubierać się / czesać się" },
            { text: "descansar / acostarse / dormir", pl: "odpoczywać / kłaść się spać / spać" },
            { text: "por la mañana / por la tarde / por la noche", pl: "rano / po południu / wieczorem" },
            { text: "pronto / tarde / sobre las diez", pl: "wcześnie / późno / około dziesiątej" },
            { text: "llegar tarde", pl: "spóźnić się" },
          ],
        },
        {
          title: "Droga do szkoły",
          items: [
            { text: "a pie / en bici / en patinete", pl: "pieszo / rowerem / na hulajnodze" },
            { text: "en autobús / en metro / en coche", pl: "autobusem / metrem / samochodem" },
            { text: "salir de casa", pl: "wychodzić z domu" },
            { text: "la parada / la estación de metro", pl: "przystanek / stacja metra" },
            { text: "¿Cuánto tardas? – Tardo…", pl: "Ile ci to zajmuje? – Zajmuje mi…" },
            { text: "primero / luego / después / al final", pl: "najpierw / potem / później / na koniec" },
            { text: "cerca / lejos", pl: "blisko / daleko" },
          ],
        },
        {
          title: "Posiłki i weekend",
          items: [
            { text: "el desayuno / el almuerzo / la comida", pl: "śniadanie / drugie śniadanie / obiad" },
            { text: "la merienda / la cena", pl: "podwieczorek / kolacja" },
            { text: "desayunar / comer / merendar / cenar", pl: "jeść śniadanie / obiad / podwieczorek / kolację" },
            { text: "entre semana / los fines de semana", pl: "w tygodniu / w weekendy" },
            { text: "antes de / después de", pl: "przed / po" },
            { text: "¡Que aproveche!", pl: "Smacznego!" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Un día de la profesora García",
      titlePl: "Dzień nauczycielki, pani García",
      context: "Lucía i Emma przeprowadzają wywiad z profesorą García do szkolnej gazetki. Uwaga: do nauczycielki mówią usted!",
      cast: { "Lucía": "f", Emma: "f", "Profesora García": "f" },
      lines: [
        { speaker: "Lucía", text: "Profesora, ¿a qué hora se levanta usted?", pl: "Pani profesor, o której pani wstaje?" },
        { speaker: "Profesora García", text: "Muy pronto. Me levanto a las seis menos cuarto.", pl: "Bardzo wcześnie. Wstaję za kwadrans szósta." },
        { speaker: "Emma", text: "¡Qué pronto! ¿Y luego?", pl: "Jak wcześnie! A potem?" },
        { speaker: "Profesora García", text: "Primero me ducho. Luego desayuno con mis hijos. Después salgo de casa a las siete y cuarto.", pl: "Najpierw biorę prysznic. Potem jem śniadanie z dziećmi. Następnie wychodzę z domu kwadrans po siódmej." },
        { speaker: "Lucía", text: "¿Cómo va usted al instituto?", pl: "Jak pani dojeżdża do szkoły?" },
        { speaker: "Profesora García", text: "Voy en tren. Tardo cuarenta minutos. Siempre leo en el tren.", pl: "Jeżdżę pociągiem. Zajmuje mi to czterdzieści minut. W pociągu zawsze czytam." },
        { speaker: "Emma", text: "¿Y a qué hora se acuesta?", pl: "A o której pani się kładzie?" },
        { speaker: "Profesora García", text: "Sobre las doce. Después de cenar, corrijo vuestros exámenes.", pl: "Około dwunastej. Po kolacji poprawiam wasze sprawdziany." },
        { speaker: "Lucía", text: "¿Y los fines de semana descansa?", pl: "A w weekendy pani odpoczywa?" },
        { speaker: "Profesora García", text: "¡Sí! Los domingos nunca me levanto antes de las diez. Y no corrijo exámenes.", pl: "Tak! W niedziele nigdy nie wstaję przed dziesiątą. I nie poprawiam sprawdzianów." },
        { speaker: "Emma", text: "¡Muchas gracias, profesora! ¡Buen fin de semana!", pl: "Bardzo dziękujemy, pani profesor! Miłego weekendu!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "es-5-4-dialogue",
        kind: "choice",
        skill: "Słuchanie",
        title: "¿Lo has entendido? – Zrozumiałeś/-aś?",
        instruction: "Odpowiedz na pytania do wywiadu „Un día de la profesora García”.",
        items: [
          { prompt: "La profesora se levanta a las…", options: ["6:15", "5:45", "6:45"], answer: 1, explanation: "seis menos cuarto = za kwadrans szósta." },
          { prompt: "¿Cómo va la profesora al instituto?", speak: "¿Cómo va la profesora al instituto?", options: ["en coche", "en autobús", "en tren"], answer: 2 },
          { prompt: "¿Cuánto tarda?", speak: "¿Cuánto tarda?", options: ["cuarenta minutos", "catorce minutos", "cuatro minutos"], answer: 0 },
          { prompt: "¿Qué hace en el tren?", speak: "¿Qué hace en el tren?", options: ["Duerme.", "Lee.", "Corrige exámenes."], answer: 1 },
          { prompt: "Los domingos, la profesora…", options: ["se levanta a las seis.", "corrige exámenes.", "nunca se levanta antes de las diez."], answer: 2, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-5-4-reflexive",
        kind: "fill",
        skill: "Gramatyka",
        title: "Czasowniki zwrotne",
        instruction: "Wpisz zaimek (me, te, se, nos, os) albo formę czasownika z nawiasu.",
        items: [
          { before: "Por la mañana, yo me", after: "rápido.", answers: ["visto"], hint: "(vestirse)" },
          { before: "¿Tú", after: "duchas por la noche?", answers: ["te"], hint: "(zaimek)" },
          { before: "Nosotros nos", after: "a las siete.", answers: ["levantamos"], hint: "(levantarse)" },
          { before: "Mis padres se", after: "a las doce.", answers: ["acuestan"], hint: "(acostarse)" },
          { before: "¿Vosotros", after: "despertáis pronto?", answers: ["os"], hint: "(zaimek)" },
          { before: "Yo me", after: "a las seis y media.", answers: ["despierto"], hint: "(despertarse)" },
          { before: "Marcos no", after: "levanta antes de las doce.", answers: ["se"], hint: "(zaimek)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-5-4-ir",
        kind: "choice",
        skill: "Gramatyka",
        title: "ir, salir i transport",
        instruction: "Wybierz poprawną formę.",
        items: [
          { prompt: "Nosotros ___ al instituto a pie.", options: ["vais", "vamos", "van"], answer: 1 },
          { prompt: "Emma y Pablo ___ en bici.", options: ["van", "vamos", "va"], answer: 0 },
          { prompt: "Yo ___ de casa a las ocho.", options: ["salo", "sale", "salgo"], answer: 2 },
          { prompt: "Voy al instituto ___ metro.", options: ["a", "en", "al"], answer: 1 },
          { prompt: "Paula va al colegio ___ pie.", options: ["a", "en", "al"], answer: 0 },
          { prompt: "¿Cuánto ___? – Veinte minutos.", options: ["tarde", "tardas", "tienes"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-5-4-meals",
        kind: "choice",
        skill: "Słownictwo",
        title: "¿Qué comida es?",
        instruction: "Popatrz na godzinę i wybierz hiszpański posiłek.",
        items: [
          { prompt: "🥐 7:15", options: ["la cena", "el desayuno", "la merienda"], answer: 1, speakOptions: true },
          { prompt: "🍲 14:30", options: ["la comida", "la cena", "el desayuno"], answer: 0, speakOptions: true },
          { prompt: "🍫 18:00", options: ["el almuerzo", "la merienda", "la comida"], answer: 1, speakOptions: true },
          { prompt: "🍳 21:30", options: ["la merienda", "la comida", "la cena"], answer: 2, speakOptions: true },
          { prompt: "„Przed kolacją” to…", options: ["después de cenar", "antes de cenar", "antes cenar"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-5-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["visto", "me", "Primero"], answer: "Primero me visto.", pl: "Najpierw się ubieram." },
          { words: ["al", "en", "Van", "instituto", "metro"], answer: "Van al instituto en metro.", pl: "Jeżdżą do szkoły metrem." },
          { words: ["tarde", "me", "No", "acuesto"], answer: "No me acuesto tarde.", pl: "Nie kładę się późno." },
          { words: ["salir", "de", "Desayuno", "antes"], answer: "Desayuno antes de salir.", pl: "Jem śniadanie przed wyjściem." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-5-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 5",
        instruction: "10 pytań z całego rozdziału. Jeśli odpowiesz dobrze na co najmniej 8 – rozdział 5 zaliczony!",
        items: [
          { prompt: "„Budzę się o siódmej.”", options: ["Me levanto a las siete.", "Me despierto a las siete.", "Me acuesto a las siete."], answer: 1, speakOptions: true },
          { prompt: "Yo me ___ a las once.", options: ["acosto", "acuesto", "acuesta"], answer: 1 },
          { prompt: "Nosotros nos ___ rápido.", options: ["vestimos", "vistimos", "visten"], answer: 0, explanation: "W nosotros nie ma zmiany tematu." },
          { prompt: "„Około dziesiątej” to…", options: ["a las diez", "sobre las diez", "las diez y media"], answer: 1, speakOptions: true },
          { prompt: "¿Tú ___ al instituto en autobús?", options: ["voy", "va", "vas"], answer: 2 },
          { prompt: "„Jeżdżę do szkoły rowerem.”", options: ["Voy al instituto a bici.", "Voy al instituto en bici.", "Voy en el instituto en bici."], answer: 1, speakOptions: true },
          { prompt: "Yo ___ de casa a las ocho.", options: ["salgo", "salo", "sale"], answer: 0 },
          { prompt: "„Nigdy nie wstaję wcześnie.”", options: ["Nunca no me levanto pronto.", "Nunca me levanto pronto.", "Me nunca levanto pronto."], answer: 1, speakOptions: true },
          { prompt: "Posiłek około 18:00 to…", options: ["la merienda", "la comida", "el desayuno"], answer: 0 },
          { prompt: "Rozmowa przy stole po obiedzie to w Hiszpanii…", options: ["la siesta", "la sobremesa", "el almuerzo"], answer: 1, explanation: "Lekcja 3 – Cultura." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-5-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "¡Ahora tú! Mój dzień – wiadomość do Emmy",
        instruction:
          "Emma chce wiedzieć, jak wygląda dzień ucznia w Polsce. Napisz do niej wiadomość (8–10 zdań): od budzika aż do snu. Na końcu zapytaj ją o jej dzień. Potem kliknij „Posłuchaj mojego tekstu” i przeczytaj go na głos.",
        checklist: [
          "opisz poranek po kolei z czasownikami zwrotnymi i godzinami (primero, me levanto a las…)",
          "napisz, jak dojeżdżasz do szkoły i ile czasu ci to zajmuje",
          "nazwij posiłki i godziny (como a las…, ceno a las…)",
          "napisz, czego nie robisz w weekend (no me levanto…, nunca…)",
          "zadaj Emmie co najmniej dwa pytania (¿A qué hora…? ¿Cómo vas…?)",
        ],
        placeholder: "¡Hola, Emma! Este es mi día…",
        model:
          "¡Hola, Emma! Este es mi día en Polonia. Primero me despierto a las seis y cuarto y me levanto a las seis y media. Luego me ducho, me visto y desayuno con mi hermano: tostadas y un cacao. Después salgo de casa a las siete y media. Voy al colegio en autobús y tardo veinte minutos. Como en casa a las tres y ceno a las siete. Antes de dormir, leo un poco. Me acuesto sobre las diez. Los fines de semana nunca me levanto antes de las nueve. Y tú, ¿a qué hora te levantas? ¿Cómo vas al instituto? ¡Un beso!",
        modelPl:
          "Cześć, Emmo! Oto mój dzień w Polsce. Najpierw budzę się kwadrans po szóstej i wstaję o wpół do siódmej. Potem biorę prysznic, ubieram się i jem śniadanie z bratem: tosty i kakao. Następnie wychodzę z domu o wpół do ósmej. Jeżdżę do szkoły autobusem i zajmuje mi to dwadzieścia minut. Obiad jem w domu o trzeciej, a kolację o siódmej. Przed snem trochę czytam. Kładę się około dziesiątej. W weekendy nigdy nie wstaję przed dziewiątą. A ty, o której wstajesz? Jak dojeżdżasz do szkoły? Buziaki!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem opowiedzieć o swoim dniu z czasownikami zwrotnymi i godzinami.",
        "Umiem odmienić ir i powiedzieć, jak dojeżdżam do szkoły (a pie, en metro…).",
        "Umiem ułożyć czynności po kolei: primero, luego, después, al final.",
        "Umiem zaprzeczyć z czasownikiem zwrotnym: no me levanto, nunca me acuesto.",
        "Znam pięć hiszpańskich posiłków i wiem, o której się je jada.",
      ],
    },
  ],
};
