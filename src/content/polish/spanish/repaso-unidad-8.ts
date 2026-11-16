import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "repaso-unidad-8",
  chapter: 8,
  number: 4,
  title: "Repaso – Unidad 8",
  titlePl: "Powtórka z rozdziału 8",
  intro:
    "To ostatnia lekcja powtórkowa w klasie 7! Zrób ją dzień lub dwa po skończeniu rozdziału 8. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na koniec napisz test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: pogoda, miesiące i pory roku – lekcja 1 („¿Qué tiempo hace?”), daty, urodziny i ir a + bezokolicznik – lekcja 2 („¿Cuándo es tu cumpleaños?”), święta, życzenia i plany – lekcja 3 („¡Feliz Navidad!”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać pogodę i podać temperaturę,",
        "nazwać miesiące i pory roku,",
        "podać datę i zapytać o urodziny,",
        "powiedzieć, co zrobisz: voy a + bezokolicznik,",
        "złożyć życzenia na różne okazje.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: pogoda, miesiące i pory roku",
      paragraphs: [
        "Pogoda z **hacer**: hace sol / frío / calor / viento / buen tiempo / mal tiempo. Osobne czasowniki: **llueve**, **nieva**. **Está** nublado. **Hay** tormenta / niebla. Temperatura: **estamos a** diez grados, tres grados **bajo cero**. → lekcja 1",
        "**Hace frío** = jest zimno; **tengo frío** = jest mi zimno. **Mucho** frío, **mucho** calor (nie „muy”). → lekcja 1",
        "Miesiące małą literą: **en** enero. Pory roku zawsze z **en**: en primavera, en verano, en otoño, en invierno. **Cuando** llueve, … / **Si** hace sol, … → lekcja 1",
      ],
      table: {
        headers: ["pora roku", "miesiące", "pogoda"],
        rows: [
          { cells: ["en primavera", "marzo, abril, mayo", "Llueve a veces."], speak: "En primavera llueve a veces." },
          { cells: ["en verano", "junio, julio, agosto", "Hace mucho calor."], speak: "En verano hace mucho calor." },
          { cells: ["en otoño", "septiembre, octubre, noviembre", "Hace viento."], speak: "En otoño hace viento." },
          { cells: ["en invierno", "diciembre, enero, febrero", "Hace frío. Nieva."], speak: "En invierno hace frío. Nieva." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: daty i ir a + bezokolicznik",
      paragraphs: [
        "Data = **el + zwykła liczba + de + miesiąc**: el tres de marzo, el veinticinco de diciembre. Pierwszy: **el uno** (albo el primero) de enero. → lekcja 2",
        "Pytania: **¿Qué fecha es hoy? / ¿A qué estamos?** – Estamos a… **¿Cuándo es tu cumpleaños?** – Es el… Rok: dos **mil** veintiséis. → lekcja 2",
        "**ir a + bezokolicznik** = co zrobisz: voy a celebrar, vas a venir, va a llover, vamos a bailar, vais a jugar, van a traer. Przeczenie: **no voy a** bailar. → lekcja 2",
      ],
      table: {
        headers: ["", "przykład", "po polsku"],
        rows: [
          { cells: ["data", "el uno de enero", "pierwszego stycznia"], speak: "el uno de enero" },
          { cells: ["data", "el sábado veintiocho de noviembre", "w sobotę dwudziestego ósmego listopada"], speak: "el sábado veintiocho de noviembre" },
          { cells: ["ir a", "Voy a cumplir catorce años.", "Skończę czternaście lat."], speak: "Voy a cumplir catorce años." },
          { cells: ["przeczenie", "No vamos a bailar.", "Nie będziemy tańczyć."], speak: "No vamos a bailar." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: święta i życzenia",
      paragraphs: [
        "Życzenia: **¡Feliz** cumpleaños / Navidad / Año Nuevo! **¡Felices** fiestas / Reyes / vacaciones! Zawsze pasuje: **¡Felicidades!** → lekcje 2–3",
        "Kiedy? **en** Navidad, **en** Nochebuena – ale **el** veinticinco **de** diciembre, **en** diciembre. → lekcja 3",
        "Plany: **durante las vacaciones**, **mañana**, **la semana que viene** + ir a. U kogoś: **en casa de** mis abuelos; do kogoś: **a casa de** mi abuela. → lekcja 3",
      ],
      table: {
        headers: ["okazja", "życzenia"],
        rows: [
          { cells: ["urodziny", "¡Feliz cumpleaños!"], speak: "¡Feliz cumpleaños!" },
          { cells: ["25.12", "¡Feliz Navidad!"], speak: "¡Feliz Navidad!" },
          { cells: ["1.01", "¡Feliz Año Nuevo!"], speak: "¡Feliz Año Nuevo!" },
          { cells: ["6.01", "¡Felices Reyes!"], speak: "¡Felices Reyes!" },
          { cells: ["ferie", "¡Felices vacaciones!"], speak: "¡Felices vacaciones!" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słówka rozdziału 8",
      groups: [
        {
          title: "Pogoda",
          items: [
            { text: "¿Qué tiempo hace?", pl: "Jaka jest pogoda?" },
            { text: "Hace buen tiempo / mal tiempo.", pl: "Jest ładna / brzydka pogoda." },
            { text: "Hace calor / frío / sol / viento.", pl: "Jest gorąco / zimno / słonecznie / wietrznie." },
            { text: "Llueve. / Nieva.", pl: "Pada deszcz. / Pada śnieg." },
            { text: "Está nublado.", pl: "Jest pochmurno." },
            { text: "Estamos a diez grados.", pl: "Jest dziesięć stopni." },
            { text: "la primavera, el verano, el otoño, el invierno", pl: "wiosna, lato, jesień, zima" },
            { text: "enero … diciembre", pl: "styczeń … grudzień" },
          ],
        },
        {
          title: "Daty i urodziny",
          items: [
            { text: "¿Qué fecha es hoy?", pl: "Jaka jest dzisiaj data?" },
            { text: "¿A qué estamos?", pl: "Którego dzisiaj?" },
            { text: "¿Cuándo es tu cumpleaños?", pl: "Kiedy masz urodziny?" },
            { text: "el uno / el dos / el tres de…", pl: "pierwszego / drugiego / trzeciego…" },
            { text: "¡Feliz cumpleaños! / ¡Felicidades!", pl: "Wszystkiego najlepszego!" },
            { text: "celebrar / una fiesta / invitar", pl: "świętować / impreza / zapraszać" },
            { text: "Voy a cumplir… años.", pl: "Skończę… lat." },
          ],
        },
        {
          title: "Święta",
          items: [
            { text: "la Nochebuena / la Navidad", pl: "Wigilia / Boże Narodzenie" },
            { text: "la Nochevieja / el Año Nuevo", pl: "sylwester / Nowy Rok" },
            { text: "los Reyes Magos / el roscón", pl: "Trzej Królowie / ciasto Trzech Króli" },
            { text: "el árbol de Navidad / el belén", pl: "choinka / szopka" },
            { text: "las doce uvas", pl: "dwanaście winogron (w sylwestra)" },
            { text: "¡Feliz Navidad! / ¡Feliz Año Nuevo!", pl: "Wesołych Świąt! / Szczęśliwego Nowego Roku!" },
            { text: "durante las vacaciones", pl: "w czasie ferii" },
            { text: "en casa de mis abuelos", pl: "u dziadków" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "¡Feliz Año Nuevo!",
      titlePl: "Szczęśliwego Nowego Roku!",
      context: "1 stycznia 2027, południe. Carla z Krakowa łączy się przez wideo z Marcosem w Sewilli i Emmą w Londynie.",
      cast: { Carla: "f", Marcos: "m", Emma: "f" },
      lines: [
        { speaker: "Carla", text: "¡Feliz Año Nuevo, chicos! ¿Qué tal las uvas, Marcos?", pl: "Szczęśliwego Nowego Roku! Jak tam winogrona, Marcos?" },
        { speaker: "Marcos", text: "¡Feliz Año Nuevo! Las doce uvas, sin problema. ¡Pero mi abuela Rosa come más rápido que yo!", pl: "Szczęśliwego Nowego Roku! Dwanaście winogron, bez problemu. Ale babcia Rosa je szybciej niż ja!" },
        { speaker: "Emma", text: "¡Feliz Año Nuevo! Carla, ¿qué tiempo hace en Cracovia?", pl: "Szczęśliwego Nowego Roku! Carlo, jaka pogoda w Krakowie?" },
        { speaker: "Carla", text: "¡Nieva! Estamos a cinco grados bajo cero. ¿Y en Londres?", pl: "Pada śnieg! Jest minus pięć stopni. A w Londynie?" },
        { speaker: "Emma", text: "En Londres llueve, como siempre. Estamos a seis grados.", pl: "W Londynie pada, jak zawsze. Jest sześć stopni." },
        { speaker: "Marcos", text: "Y en Sevilla hace sol. ¡Estamos a dieciséis grados!", pl: "A w Sewilli świeci słońce. Jest szesnaście stopni!" },
        { speaker: "Carla", text: "¡Dieciséis grados en enero! ¿Qué vais a hacer hoy?", pl: "Szesnaście stopni w styczniu! Co dziś będziecie robić?" },
        { speaker: "Marcos", text: "Hoy no voy a hacer nada. Voy a descansar en casa de mi abuela.", pl: "Dzisiaj nic nie będę robić. Będę odpoczywać u babci." },
        { speaker: "Emma", text: "Yo vuelvo a Madrid el día cuatro. ¿Y tú, Carla?", pl: "Ja wracam do Madrytu czwartego. A ty, Carlo?" },
        { speaker: "Carla", text: "El cinco. Y el seis vamos a casa de Lucía: ¡Reyes, su cumpleaños y roscón!", pl: "Piątego. A szóstego idziemy do Lucíi: Trzej Królowie, jej urodziny i roscón!" },
        { speaker: "Marcos", text: "¡Genial! Este año, la figurita del roscón es para mí.", pl: "Super! W tym roku figurka z roscón będzie moja." },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "es-8-4-dialogue",
        kind: "choice",
        skill: "Słuchanie",
        title: "¿Lo has entendido? – Zrozumiałeś/-aś?",
        instruction: "Odpowiedz na pytania do rozmowy „¡Feliz Año Nuevo!”.",
        items: [
          { prompt: "¿Qué tiempo hace en Cracovia?", speak: "¿Qué tiempo hace en Cracovia?", options: ["Nieva.", "Llueve.", "Hace sol."], answer: 0, speakOptions: true },
          { prompt: "¿A cuántos grados están en Sevilla?", speak: "¿A cuántos grados están en Sevilla?", options: ["a seis grados", "a dieciséis grados", "a cinco grados bajo cero"], answer: 1 },
          { prompt: "¿Qué va a hacer Marcos hoy?", speak: "¿Qué va a hacer Marcos hoy?", options: ["Va a esquiar.", "Va a volver a Madrid.", "Va a descansar."], answer: 2, speakOptions: true },
          { prompt: "¿Cuándo vuelve Carla a Madrid?", speak: "¿Cuándo vuelve Carla a Madrid?", options: ["el día cinco", "el día cuatro", "el día seis"], answer: 0, speakOptions: true },
          { prompt: "¿Qué van a hacer el seis de enero?", speak: "¿Qué van a hacer el seis de enero?", options: ["comer uvas", "ir a casa de Lucía", "ir al Rastro"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-8-4-weather",
        kind: "fill",
        skill: "Słownictwo",
        title: "Pogoda i pory roku",
        instruction: "Uzupełnij zdania. Polskie podpowiedzi są w nawiasach.",
        items: [
          { before: "¿Qué tiempo", after: "?", answers: ["hace"], hint: "(jaka pogoda)" },
          { before: "En invierno", after: "en la sierra.", answers: ["nieva"], hint: "(pada śnieg)" },
          { before: "Hace mucho", after: "; ¡lleva una bufanda!", answers: ["frío", "frio"], hint: "(zimno)" },
          { before: "En", after: "llueve a veces.", answers: ["primavera"], hint: "(wiosną)" },
          { before: "Mi mes favorito es", after: ", porque hay vacaciones.", answers: ["julio"], hint: "(lipiec)" },
          { before: "Estamos a tres grados bajo", after: ".", answers: ["cero"], hint: "(zero)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-8-4-dates",
        kind: "choice",
        skill: "Gramatyka",
        title: "Daty i ir a",
        instruction: "Wybierz poprawną odpowiedź.",
        items: [
          { prompt: "6 stycznia", options: ["el seis enero", "el seis de enero", "el sexto de enero"], answer: 1, speakOptions: true },
          { prompt: "28 grudnia", options: ["el veintiocho de diciembre", "el veinte ocho de diciembre", "el veintiocho de Diciembre"], answer: 0, speakOptions: true },
          { prompt: "El sábado nosotros ___ a celebrar el cumpleaños de Marcos.", options: ["vais", "van", "vamos"], answer: 2 },
          { prompt: "„Skończę czternaście lat.”", options: ["Voy a cumplir catorce años.", "Voy a ser catorce años.", "Voy cumplir catorce años."], answer: 0, speakOptions: true },
          { prompt: "„Nie będę tańczyć.”", options: ["No voy a bailar.", "Voy a no bailar.", "No voy bailar."], answer: 0, speakOptions: true },
          { prompt: "¿Qué ___ es hoy? – Es el veinte de mayo.", options: ["hora", "fecha", "tiempo"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-8-4-wishes",
        kind: "choice",
        skill: "Mówienie",
        title: "Życzenia",
        instruction: "Wybierz życzenia, które pasują do sytuacji.",
        items: [
          { prompt: "Twój kolega ma dziś urodziny.", options: ["¡Feliz Navidad!", "¡Feliz cumpleaños!", "¡Feliz Año Nuevo!"], answer: 1, speakOptions: true },
          { prompt: "Jest 2 stycznia. Spotykasz profesorę García.", options: ["¡Feliz Año Nuevo, profesora!", "¡Felices vacaciones, profesora!", "¡Feliz cumpleaños, profesora!"], answer: 0, speakOptions: true },
          { prompt: "Koleżanka wyjeżdża na wakacje.", options: ["¡Buenas noches!", "¡Que aproveche!", "¡Felices vacaciones!"], answer: 2, speakOptions: true },
          { prompt: "Poprawna forma (fiestas – l. mnoga):", options: ["¡Feliz fiestas!", "¡Felices fiestas!", "¡Felice fiestas!"], answer: 1, speakOptions: true },
          { prompt: "Kto przynosi prezenty w Hiszpanii 6 stycznia?", options: ["Papá Noel", "los Reyes Magos", "el Gordo"], answer: 1, explanation: "Lekcja 3 – los Reyes Magos." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-8-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["frío", "hace", "En", "invierno"], answer: "En invierno hace frío.", pl: "Zimą jest zimno." },
          { words: ["de", "cumpleaños", "Mi", "es", "el", "mayo", "ocho"], answer: "Mi cumpleaños es el ocho de mayo.", pl: "Moje urodziny są ósmego maja." },
          { words: ["vacaciones", "Durante", "voy", "esquiar", "las", "a"], answer: "Durante las vacaciones voy a esquiar.", pl: "W ferie będę jeździć na nartach." },
          { words: ["Nuevo", "¡Feliz", "Año"], answer: "¡Feliz Año Nuevo!", pl: "Szczęśliwego Nowego Roku!" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-8-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 8",
        instruction: "10 pytań z całego rozdziału. Jeśli odpowiesz dobrze na co najmniej 8 – rozdział 8 zaliczony, a cały materiał klasy 7 za tobą. ¡Enhorabuena!",
        items: [
          { prompt: "„Jest zimno” (pogoda):", options: ["Tengo frío.", "Hace frío.", "Es frío."], answer: 1, speakOptions: true },
          { prompt: "„Pada deszcz.”", options: ["Llueve.", "Hace lluvia.", "Está lluvia."], answer: 0, speakOptions: true },
          { prompt: "„Jest mi zimno.”", options: ["Hace frío.", "Estoy frío.", "Tengo frío."], answer: 2, speakOptions: true },
          { prompt: "___ invierno nieva en la sierra.", options: ["Al", "En", "El"], answer: 1 },
          { prompt: "Który miesiąc jest zapisany poprawnie w zdaniu?", options: ["en Agosto", "en agosto", "en Agost"], answer: 1, explanation: "Miesiące piszemy małą literą." },
          { prompt: "25.12 słowami:", options: ["el veinticinco de diciembre", "el veinticinco diciembre", "los veinticinco de diciembre"], answer: 0, speakOptions: true },
          { prompt: "Ellos ___ a viajar en Navidad.", options: ["van", "va", "vamos"], answer: 0 },
          { prompt: "„Spędzę Święta u dziadków.”", options: ["Voy a pasar la Navidad en casa de mis abuelos.", "Voy pasar la Navidad a mis abuelos.", "Paso la Navidad en mis abuelos."], answer: 0, speakOptions: true },
          { prompt: "„Szczęśliwego Nowego Roku!”", options: ["¡Feliz Año Nuevo!", "¡Felices Año Nuevo!", "¡Feliz Nuevo Año!"], answer: 0, speakOptions: true },
          { prompt: "Co Hiszpanie jedzą w sylwestra o północy?", options: ["turrón", "doce uvas", "el roscón"], answer: 1, explanation: "Las doce uvas de la suerte – lekcja 3." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es-8-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "¡Ahora tú! Mój rok",
        instruction:
          "Na koniec klasy 7: opisz swój rok (8–10 zdań). Ulubiona pora roku i pogoda, twoje urodziny, ulubione święto i twoje plany na najbliższe ferie lub wakacje. Potem kliknij „Posłuchaj mojego tekstu” i przeczytaj go na głos.",
        checklist: [
          "opisz ulubioną porę roku i pogodę (mi estación favorita es… ; hace…)",
          "podaj datę swoich urodzin słowami i jak je świętujesz",
          "opisz ulubione święto (en Navidad…, en Nochevieja…)",
          "napisz co najmniej trzy zdania z ir a + bezokolicznik o swoich planach",
          "użyj co najmniej jednych życzeń",
        ],
        placeholder: "Mi estación favorita es…",
        model:
          "Mi estación favorita es el verano, porque hace calor y hace sol. En julio y en agosto hay vacaciones. No me gusta noviembre: está nublado y llueve. Mi cumpleaños es el tres de marzo. Voy a cumplir catorce años y voy a hacer una fiesta en mi casa. Mi fiesta favorita es la Navidad. En Polonia celebramos la Navidad el veinticuatro de diciembre, por la noche. Durante las vacaciones de invierno voy a ir a casa de mis abuelos, en Cracovia. ¡Vamos a hacer un muñeco de nieve! ¡Feliz Año Nuevo a todos!",
        modelPl:
          "Moja ulubiona pora roku to lato, bo jest gorąco i świeci słońce. W lipcu i sierpniu są wakacje. Nie lubię listopada: jest pochmurno i pada. Moje urodziny są trzeciego marca. Skończę czternaście lat i zrobię imprezę u siebie. Moje ulubione święto to Boże Narodzenie. W Polsce świętujemy dwudziestego czwartego grudnia wieczorem. W ferie zimowe pojadę do dziadków, do Krakowa. Ulepimy bałwana! Szczęśliwego Nowego Roku wszystkim!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem opisać pogodę i podać temperaturę.",
        "Znam miesiące i pory roku – i wiem, że mówimy en primavera, en verano….",
        "Umiem podać datę i zapytać o urodziny.",
        "Umiem mówić o planach z ir a + bezokolicznik.",
        "Umiem złożyć życzenia na urodziny, Boże Narodzenie, Nowy Rok i wakacje.",
      ],
    },
  ],
};
