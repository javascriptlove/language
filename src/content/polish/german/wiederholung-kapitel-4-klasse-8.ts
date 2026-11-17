import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-4",
  chapter: 4,
  number: 4,
  title: "Wiederholung – Kapitel 4",
  titlePl: "Powtórka z rozdziału 4",
  intro:
    "Pocztówki wiszą już na ścianie – czas na powtórkę! Zrób ją dzień lub dwa po skończeniu rozdziału 4: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: Perfekt z haben („Was hast du in den Ferien gemacht?”), Perfekt z sein i czasowniki rozdzielnie złożone („Wir sind nach Hamburg gefahren”) albo war, hatte i pocztówka („Urlaub am Meer”).",
  blocks: [
    {
      type: "goals",
      items: [
        "opowiedzieć, co robiłeś w ferie i na wakacjach, w czasie Perfekt,",
        "wybrać właściwy czasownik posiłkowy: haben czy sein,",
        "utworzyć imiesłów czasowników regularnych, nieregularnych i rozdzielnie złożonych,",
        "używać form war i hatte,",
        "napisać pocztówkę z wakacji.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: Perfekt",
      paragraphs: [
        "Perfekt = **haben / sein** na **2. miejscu** + **imiesłów na końcu**: Ich **habe** Fußball **gespielt**. Wir **sind** nach Hamburg **gefahren**. Pytanie: **Was hast du gemacht?** → lekcja „Was hast du in den Ferien gemacht?”",
        "Imiesłów regularny: **ge- … -t** (gemacht, gekauft). Nieregularny: **ge- … -en**, często z inną samogłoską (gegessen, getroffen, geschrieben, gefunden). Bez **ge-**: czasowniki na **be-, ver-** (besucht, vergessen, verloren) i na **-ieren** (trainiert, fotografiert).",
        "**sein** – ruch z A do B i zmiana stanu (gefahren, gegangen, gekommen, geflogen, geschwommen, aufgestanden) oraz **gewesen, geblieben, passiert**. Wszystko inne – **haben**. Czasowniki rozdzielnie złożone: **-ge-** w środku: an**ge**kommen, ein**ge**stiegen, mit**ge**bracht. → lekcja „Wir sind nach Hamburg gefahren”",
      ],
      table: {
        headers: ["typ", "bezokolicznik", "Perfekt"],
        rows: [
          { cells: ["regularny", "spielen", "hat gespielt"], speak: "spielen, hat gespielt" },
          { cells: ["bez ge-", "besuchen", "hat besucht"], speak: "besuchen, hat besucht" },
          { cells: ["-ieren", "fotografieren", "hat fotografiert"], speak: "fotografieren, hat fotografiert" },
          { cells: ["nieregularny", "essen", "hat gegessen"], speak: "essen, hat gegessen" },
          { cells: ["ruch → sein", "fahren", "ist gefahren"], speak: "fahren, ist gefahren" },
          { cells: ["rozdzielny", "ankommen", "ist angekommen"], speak: "ankommen, ist angekommen" },
          { cells: ["rozdzielny", "mitbringen", "hat mitgebracht"], speak: "mitbringen, hat mitgebracht" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: war i hatte",
      paragraphs: [
        "Przy **sein** i **haben** zamiast Perfektu używamy zwykle **Präteritum**: **Ich war** in Sopot. **Wir hatten** ein Ferienhaus. **Das Wetter war** super. **Ich hatte** einen Sonnenbrand.",
        "W opowiadaniu łączysz oba czasy: Ich **war** in Italien. Wir **sind** jeden Tag **geschwommen** und **hatten** viel Sonne. → lekcja „Urlaub am Meer”",
      ],
      table: {
        headers: ["osoba", "sein", "haben"],
        rows: [
          { cells: ["ich", "war", "hatte"], speak: "ich war, ich hatte" },
          { cells: ["du", "warst", "hattest"], speak: "du warst, du hattest" },
          { cells: ["er / sie / es", "war", "hatte"], speak: "er war, sie hatte" },
          { cells: ["wir", "waren", "hatten"], speak: "wir waren, wir hatten" },
          { cells: ["ihr", "wart", "hattet"], speak: "ihr wart, ihr hattet" },
          { cells: ["sie / Sie", "waren", "hatten"], speak: "sie waren, Sie hatten" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Was hast du in den Ferien gemacht?",
          items: [
            { text: "die Ferien, die Herbstferien, die Sommerferien", pl: "ferie, ferie jesienne, wakacje letnie" },
            { text: "der Urlaub, die Überraschung", pl: "urlop / wakacje, niespodzianka" },
            { text: "die Burg, der Drache, das Foto", pl: "zamek, smok, zdjęcie" },
            { text: "gestern, letzte Woche, nächste Woche", pl: "wczoraj, w zeszłym tygodniu, w przyszłym tygodniu" },
            { text: "Wie war's? – Es war super!", pl: "Jak było? – Było super!" },
          ],
        },
        {
          title: "Wir sind nach Hamburg gefahren",
          items: [
            { text: "die Reise, die Klassenfahrt, die Jugendherberge", pl: "podróż, wycieczka klasowa, schronisko młodzieżowe" },
            { text: "das Schiff, der Hafen, die Hafenrundfahrt", pl: "statek, port, rejs po porcie" },
            { text: "die Station, die Aussicht", pl: "stacja, widok" },
            { text: "einsteigen, aussteigen, umsteigen, ankommen", pl: "wsiąść, wysiąść, przesiąść się, przyjechać" },
            { text: "Was ist passiert? – Keine Panik!", pl: "Co się stało? – Bez paniki!" },
          ],
        },
        {
          title: "Urlaub am Meer",
          items: [
            { text: "das Meer, die Ostsee, die Nordsee, die Insel", pl: "morze, Bałtyk, Morze Północne, wyspa" },
            { text: "der Strand, die Welle, die Muschel", pl: "plaża, fala, muszla" },
            { text: "das Ferienhaus, der Campingplatz, das Zelt", pl: "domek letniskowy, kemping, namiot" },
            { text: "die Sonnencreme, der Sonnenbrand", pl: "krem z filtrem, oparzenie słoneczne" },
            { text: "Liebe Anna, … Liebe Grüße, deine Julia", pl: "Droga Anno, … Serdeczne pozdrowienia, twoja Julia" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Lukas' Postkarte",
      titlePl: "Pocztówka Lukasa",
      context: "Przerwa w klasie. Na ścianie wiszą pocztówki i zdjęcia z Hamburga. Lukas właśnie przypiął swoją pocztówkę z Włoch.",
      cast: { Anna: "f", Julia: "f", Lukas: "m", Paul: "m" },
      lines: [
        { speaker: "Anna", text: "Schaut mal, unsere Wand! Alle Postkarten und die Fotos aus Hamburg.", pl: "Patrzcie, nasza ściana! Wszystkie pocztówki i zdjęcia z Hamburga." },
        { speaker: "Julia", text: "Hier ist die U-Bahn-Station Landungsbrücken. Wisst ihr noch? Lukas ist zu weit gefahren!", pl: "Tu jest stacja metra Landungsbrücken. Pamiętacie? Lukas pojechał za daleko!" },
        { speaker: "Lukas", text: "Ja, ja. Lest lieber meine Postkarte!", pl: "Tak, tak. Lepiej przeczytajcie moją pocztówkę!" },
        { speaker: "Paul", text: "„Ich habe nach Italien gefahren …“ Lukas, das ist falsch! Fahren geht mit sein: Ich bin gefahren.", pl: "„Ich habe nach Italien gefahren…” Lukas, to jest źle! Fahren łączy się z sein: Ich bin gefahren." },
        { speaker: "Lukas", text: "Oh. Und der Rest?", pl: "Aha. A reszta?" },
        { speaker: "Julia", text: "„Mein Vater hat die Heringe vergessen“ – richtig! Aber „wir haben im Auto geschlaft“ – nein, geschlafen!", pl: "„Mein Vater hat die Heringe vergessen” – dobrze! Ale „wir haben im Auto geschlaft” – nie, geschlafen!" },
        { speaker: "Lukas", text: "Hm. Und „ich habe einen Sonnenbrand gehabt“?", pl: "Hm. A „ich habe einen Sonnenbrand gehabt”?" },
        { speaker: "Anna", text: "Das ist nicht falsch, aber man sagt lieber: Ich hatte einen Sonnenbrand.", pl: "To nie jest błąd, ale lepiej się mówi: Ich hatte einen Sonnenbrand." },
        { speaker: "Lukas", text: "Okay, okay. Ich schreibe die Karte noch einmal.", pl: "Dobra, dobra. Napiszę tę kartkę jeszcze raz." },
        { speaker: "Paul", text: "Und wohin fährst du nächsten Sommer?", pl: "A dokąd jedziesz następnego lata?" },
        { speaker: "Lukas", text: "In ein Hotel! Kein Zelt mehr – nie wieder!", pl: "Do hotelu! Żadnego namiotu – nigdy więcej!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-4-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Na ścianie w klasie",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Co wisi na ścianie w klasie?", options: ["mapy i plakaty", "pocztówki i zdjęcia z Hamburga", "dyplomy sportowe"], answer: 1 },
          { prompt: "Jaki błąd zrobił Lukas w pierwszym zdaniu?", options: ["użył haben zamiast sein", "napisał zły imiesłów", "zapomniał imiesłowu"], answer: 0 },
          { prompt: "Jak poprawnie brzmi „geschlaft”?", options: ["geschlafen", "schlafte", "geschlaften"], answer: 0 },
          { prompt: "Co radzi Anna zamiast „ich habe gehabt”?", options: ["ich bin gewesen", "ich hatte", "ich habe gehattet"], answer: 1 },
          { prompt: "Gdzie Lukas chce spędzić następne wakacje?", options: ["na kempingu", "w hotelu", "w domku letniskowym"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-4-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Was hast du am Wochenende gemacht?", options: ["Co robisz w weekend?", "Co robiłeś w weekend?", "Co będziesz robić w weekend?"], answer: 1 },
          { audio: "Wir sind um sieben Uhr aufgestanden.", options: ["Wstaliśmy o siódmej.", "Przyjechaliśmy o siódmej.", "Wyszliśmy o siódmej."], answer: 0 },
          { audio: "Am Hauptbahnhof sind wir umgestiegen.", options: ["Na dworcu głównym wysiedliśmy.", "Na dworcu głównym się przesiedliśmy.", "Na dworcu głównym wsiedliśmy."], answer: 1 },
          { audio: "Ich habe meinen Koffer verloren.", options: ["Zapomniałem walizki.", "Spakowałem walizkę.", "Zgubiłem walizkę."], answer: 2 },
          { audio: "Wir hatten jeden Tag Sonne.", options: ["Codziennie mieliśmy słońce.", "Codziennie będzie słońce.", "Codziennie leżeliśmy na słońcu."], answer: 0 },
          { audio: "Paul ist zu Hause geblieben.", options: ["Paul poszedł do domu.", "Paul został w domu.", "Paul był w domu wcześnie."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-4-4-fill",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij",
        instruction: "Uzupełnij brakujące słowo.",
        items: [
          { before: "In den Ferien", after: "ich meine Oma besucht.", answers: ["habe"], hint: "haben, ich" },
          { before: "Wir", after: "mit dem Zug nach Hamburg gefahren.", answers: ["sind"], hint: "sein, wir" },
          { before: "Julia hat die Burg", after: ".", answers: ["fotografiert"], hint: "fotografieren" },
          { before: "Ich habe zwanzig Piroggen", after: ".", answers: ["gegessen"], hint: "essen" },
          { before: "Um zehn Uhr sind wir", after: ".", answers: ["angekommen"], hint: "ankommen" },
          { before: "Lukas hat die Brille", after: ".", answers: ["gefunden"], hint: "finden" },
          { before: "Im Sommer", after: "Anna auf Rügen.", answers: ["war"], hint: "sein, Präteritum" },
          { before: "", after: "ihr gutes Wetter?", answers: ["Hattet"], hint: "haben, ihr, Präteritum" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-4-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Pojechałem do Włoch.", options: ["Ich habe nach Italien gefahren.", "Ich bin nach Italien gefahren.", "Ich bin gefahren nach Italien."], answer: 1, explanation: "Ruch z A do B – sein, a imiesłów na końcu." },
          { prompt: "Odwiedziliśmy dziadka.", options: ["Wir haben Opa gebesucht.", "Wir haben Opa besucht.", "Wir sind Opa besucht."], answer: 1, explanation: "be- bez ge-." },
          { prompt: "Spałem w samochodzie.", options: ["Ich habe im Auto geschlaft.", "Ich habe im Auto geschlafen.", "Ich bin im Auto geschlafen."], answer: 1 },
          { prompt: "Wsiadłam do metra.", options: ["Ich bin in die U-Bahn eingestiegen.", "Ich bin in die U-Bahn geeinstiegen.", "Ich habe in die U-Bahn eingestiegen."], answer: 0, explanation: "-ge- w środku: ein·ge·stiegen, z sein." },
          { prompt: "Gdzie byłeś latem?", options: ["Wo bist du im Sommer?", "Wo warst du im Sommer?", "Wo wart du im Sommer?"], answer: 1 },
          { prompt: "Zapomniałem kremu z filtrem.", options: ["Ich habe die Sonnencreme vergessen.", "Ich habe die Sonnencreme gevergessen.", "Ich habe die Sonnencreme vergesst."], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-4-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["in den Ferien", "du", "gemacht", "Was", "hast"], answer: "Was hast du in den Ferien gemacht?", pl: "Co robiłeś w ferie?" },
          { words: ["ausgestiegen", "Wir", "am Baumwall", "sind"], answer: "Wir sind am Baumwall ausgestiegen.", pl: "Wysiedliśmy na Baumwall." },
          { words: ["mitgebracht", "dir", "Ich", "etwas", "habe"], answer: "Ich habe dir etwas mitgebracht.", pl: "Przywiozłam ci coś." },
          { words: ["sehr kalt", "war", "Das Wasser"], answer: "Das Wasser war sehr kalt.", pl: "Woda była bardzo zimna." },
          { words: ["ich", "geschwommen", "Gestern", "im Meer", "bin"], answer: "Gestern bin ich im Meer geschwommen.", pl: "Wczoraj pływałam w morzu." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-4-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 4",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 4 jest zaliczony!",
        items: [
          { prompt: "**die Jugendherberge** to …", options: ["schronisko młodzieżowe", "wycieczka klasowa", "dworzec"], answer: 0 },
          { prompt: "Imiesłów od **kaufen**:", options: ["gekaufen", "gekauft", "kauft"], answer: 1 },
          { prompt: "Imiesłów od **trainieren**:", options: ["getrainiert", "trainiert", "getrainieren"], answer: 1 },
          { prompt: "Wir ___ nach Wien geflogen.", options: ["haben", "sind", "waren"], answer: 1 },
          { prompt: "Paul ___ einen Film gesehen.", options: ["hat", "ist", "war"], answer: 0 },
          { prompt: "Imiesłów od **aufstehen**:", options: ["geaufstanden", "aufgestehen", "aufgestanden"], answer: 2 },
          { prompt: "Was ___ passiert?", options: ["hat", "ist", "habt"], answer: 1 },
          { prompt: "Wo ___ du gestern?", options: ["warst", "wart", "hattest"], answer: 0 },
          { prompt: "Wir ___ ein Ferienhaus am Strand.", options: ["waren", "hatten", "hattet"], answer: 1 },
          { prompt: "Jak zaczniesz pocztówkę do Paula?", options: ["Liebe Paul,", "Lieber Paul,", "Lieben Paul,"], answer: 1, speakOptions: true, explanation: "Do chłopaka: Lieber …, do dziewczyny: Liebe …" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-4-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Moja najlepsza podróż",
        instruction:
          "Opowiedz o swojej najlepszej (albo najbardziej pechowej) podróży (8–10 zdań). Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "napisz, gdzie byłeś/byłaś, z kim i jak było: Ich war …, Es war …",
          "opisz podróż z sein: gefahren, angekommen, umgestiegen…",
          "opisz, co robiłeś/robiłaś, z haben: gesehen, gegessen, fotografiert…",
          "użyj hatte co najmniej raz",
          "opowiedz o jednej niespodziance albo pechu: Was ist passiert?",
        ],
        placeholder: "Meine beste Reise war …",
        model:
          "Meine beste Reise war im Sommer. Ich war mit meinen Eltern und meiner Schwester in Wien. Wir sind am Morgen in Krakau in den Zug eingestiegen und am Nachmittag angekommen. Wir hatten ein kleines Hotel im Zentrum. Am ersten Tag haben wir das Schloss Schönbrunn besichtigt und ich habe viele Fotos gemacht. Am Abend haben wir ein Wiener Schnitzel gegessen. Am zweiten Tag ist etwas passiert: Meine Schwester hat ihr Handy im Café vergessen! Wir sind zurückgegangen und zum Glück war es noch da. Wien war wunderschön!",
        modelPl:
          "Moja najlepsza podróż była latem. Byłem z rodzicami i siostrą w Wiedniu. Rano wsiedliśmy w Krakowie do pociągu i po południu przyjechaliśmy. Mieliśmy mały hotel w centrum. Pierwszego dnia zwiedziliśmy pałac Schönbrunn i zrobiłem dużo zdjęć. Wieczorem jedliśmy sznycel wiedeński. Drugiego dnia coś się stało: siostra zostawiła telefon w kawiarni! Wróciliśmy i na szczęście jeszcze tam był. Wiedeń był przepiękny!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem, gdy ktoś opowiada o feriach, podróży i wakacjach w czasie przeszłym.",
        "Mówienie: umiem opowiedzieć, co robiłem/robiłam, dokąd pojechałem/pojechałam i jak było.",
        "Czytanie: rozumiem dziennik z ferii, relację z wycieczki i pocztówkę.",
        "Pisanie: umiem napisać pocztówkę z wakacji.",
        "Gramatyka: znam Perfekt z haben i z sein, imiesłowy regularne, nieregularne i rozdzielnie złożone oraz war i hatte.",
        "Słownictwo: znam słowa o feriach, podróży, morzu i noclegach.",
      ],
    },
  ],
};
