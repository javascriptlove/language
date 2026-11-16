import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-2",
  chapter: 2,
  number: 4,
  title: "Wiederholung – Kapitel 2",
  titlePl: "Powtórka z rozdziału 2",
  intro:
    "Tydzień Mai w Berlinie dobiegł końca – czas na powtórkę! Zrób ją dzień lub dwa po skończeniu rozdziału 2: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: miejsca w mieście („Was gibt es in der Stadt?”), pytanie o drogę („Wie komme ich zum Bahnhof?”) albo transport („Mit dem Bus oder mit dem Rad?”).",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać miejsca w mieście i powiedzieć, co jest w okolicy: Es gibt …,",
        "odpowiedzieć na pytania Wo? i Wohin?: im Park – zum Park,",
        "zapytać o drogę i ją wskazać, także w trybie rozkazującym,",
        "powiedzieć, czym jeździsz i jak długo trwa podróż,",
        "używać przyimków z celownikiem: aus, bei, mit, nach, von, zu.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: es gibt, Wo? i Wohin?",
      paragraphs: [
        "**Es gibt** + biernik: Es gibt **einen** Park, **eine** Apotheke, **ein** Kino – albo **keinen / keine / kein**. Pytanie: **Gibt es** hier …? → lekcja „Was gibt es in der Stadt?”",
        "**Wo?** (gdzie?) – **in** + celownik: **im** Park, **im** Kino, **in der** Bibliothek; **auf dem** Sportplatz, **auf der** Post. **Wohin?** (dokąd?) – **zu** + celownik: **zum** Bahnhof, **zur** Post; do miast – **nach** Berlin; do domu – **nach Hause**. → lekcja „Wie komme ich zum Bahnhof?”",
      ],
      table: {
        headers: ["miejsce", "Wo?", "Wohin?"],
        rows: [
          { cells: ["der Park", "im Park", "zum Park"], speak: "im Park, zum Park" },
          { cells: ["das Kino", "im Kino", "zum Kino"], speak: "im Kino, zum Kino" },
          { cells: ["die Bibliothek", "in der Bibliothek", "zur Bibliothek"], speak: "in der Bibliothek, zur Bibliothek" },
          { cells: ["die Schule", "in der Schule", "zur Schule"], speak: "in der Schule, zur Schule" },
          { cells: ["Berlin", "in Berlin", "nach Berlin"], speak: "in Berlin, nach Berlin" },
          { cells: ["das Zuhause", "zu Hause", "nach Hause"], speak: "zu Hause, nach Hause" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: tryb rozkazujący i drogowskazy",
      paragraphs: [
        "**Sie**: czasownik + Sie na początku – **Gehen Sie** geradeaus! **du**: forma du bez -st i bez du – **Geh! Komm! Nimm!** (e → i zostaje). **ihr**: forma ihr bez zaimka – **Geht! Kommt!** Czasownik **sein**: Seien Sie! Sei! Seid! → lekcja „Wie komme ich zum Bahnhof?”",
        "Drogowskazy: **geradeaus**, **nach links / rechts**, **bis zur Ampel**, **an der Kreuzung**, **die erste Straße links**, **über die Straße**, **an … vorbei**, **auf der linken Seite**.",
      ],
      table: {
        headers: ["Sie", "du", "po polsku"],
        rows: [
          { cells: ["Gehen Sie geradeaus!", "Geh geradeaus!", "Idź / proszę iść prosto!"], speak: "Gehen Sie geradeaus! Geh geradeaus!" },
          { cells: ["Nehmen Sie die erste Straße links!", "Nimm die erste Straße links!", "Skręć w pierwszą w lewo!"], speak: "Nehmen Sie die erste Straße links! Nimm die erste Straße links!" },
          { cells: ["Gehen Sie über die Straße!", "Geh über die Straße!", "Przejdź przez ulicę!"], speak: "Gehen Sie über die Straße! Geh über die Straße!" },
          { cells: ["Steigen Sie hier aus!", "Steig hier aus!", "Wysiądź tutaj!"], speak: "Steigen Sie hier aus! Steig hier aus!" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: transport i przyimki z celownikiem",
      paragraphs: [
        "Czym? **mit dem** Bus / Zug / Rad / Auto, **mit der** U-Bahn / S-Bahn / Straßenbahn, ale **zu Fuß**. **fahren**: du **fährst**, er **fährt**. Czasowniki rozdzielne: Ich **steige** am Bahnhof **ein / aus / um**. Czas: **Wie lange dauert** die Fahrt? → lekcja „Mit dem Bus oder mit dem Rad?”",
        "Zawsze z celownikiem: **aus, bei, mit, nach, von, zu** (+ gegenüber). Ściągnięcia: **zum, zur, beim, vom**.",
      ],
      table: {
        headers: ["przyimek", "przykład", "po polsku"],
        rows: [
          { cells: ["aus", "Maja kommt aus Polen.", "Maja jest z Polski."], speak: "Maja kommt aus Polen." },
          { cells: ["bei", "Sie wohnt bei Julia.", "Mieszka u Julii."], speak: "Sie wohnt bei Julia." },
          { cells: ["mit", "Wir fahren mit dem Zug.", "Jedziemy pociągiem."], speak: "Wir fahren mit dem Zug." },
          { cells: ["von … nach", "von Berlin nach Krakau", "z Berlina do Krakowa"], speak: "von Berlin nach Krakau" },
          { cells: ["zu", "Wir gehen zum Bahnhof.", "Idziemy na dworzec."], speak: "Wir gehen zum Bahnhof." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Was gibt es in der Stadt?",
          items: [
            { text: "der Bahnhof, der Park, der Platz, der Sportplatz", pl: "dworzec, park, plac, boisko" },
            { text: "das Kino, das Museum, das Schwimmbad, das Rathaus", pl: "kino, muzeum, basen, ratusz" },
            { text: "die Bibliothek, die Apotheke, die Post, die Kirche", pl: "biblioteka, apteka, poczta, kościół" },
            { text: "das Viertel, das Zentrum, die Altstadt", pl: "dzielnica, centrum, stare miasto" },
            { text: "laut / ruhig, alt / modern, nah / weit", pl: "głośny / spokojny, stary / nowoczesny, blisko / daleko" },
          ],
        },
        {
          title: "Wie komme ich zum Bahnhof?",
          items: [
            { text: "Entschuldigung, wie komme ich zum / zur …?", pl: "Przepraszam, jak dojdę do …?" },
            { text: "geradeaus, (nach) links, (nach) rechts", pl: "prosto, w lewo, w prawo" },
            { text: "die Ampel, die Kreuzung, die Ecke", pl: "światła, skrzyżowanie, róg" },
            { text: "Ist das weit? – Nur fünf Minuten zu Fuß.", pl: "Czy to daleko? – Tylko pięć minut pieszo." },
            { text: "Ich kenne mich hier nicht aus.", pl: "Nie znam tej okolicy." },
          ],
        },
        {
          title: "Mit dem Bus oder mit dem Rad?",
          items: [
            { text: "der Bus, der Zug, das Auto, das Fahrrad", pl: "autobus, pociąg, samochód, rower" },
            { text: "die U-Bahn, die S-Bahn, die Straßenbahn", pl: "metro, kolejka, tramwaj" },
            { text: "einsteigen, aussteigen, umsteigen", pl: "wsiadać, wysiadać, przesiadać się" },
            { text: "die Fahrkarte, die Tageskarte, ermäßigt", pl: "bilet, bilet dobowy, ulgowy" },
            { text: "das Gleis, die Haltestelle, die Fahrt", pl: "peron, przystanek, jazda" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Tschüss, Berlin!",
      titlePl: "Do widzenia, Berlinie!",
      context: "Sobota, dworzec główny. Maja wraca do Krakowa. Odprowadzają ją Julia, Lukas, Anna i Paul.",
      cast: { Paul: "m", Maja: "f", Anna: "f", Julia: "f", Lukas: "m" },
      lines: [
        { speaker: "Paul", text: "Von welchem Gleis fährt dein Zug?", pl: "Z którego peronu odjeżdża twój pociąg?" },
        { speaker: "Maja", text: "Von Gleis vierzehn. Aber wo ist das? Der Bahnhof ist so groß!", pl: "Z peronu czternastego. Ale gdzie to jest? Ten dworzec jest taki duży!" },
        { speaker: "Anna", text: "Da ist eine Information. Ich frage mal. Entschuldigung, wie kommen wir zu Gleis vierzehn?", pl: "Tam jest informacja. Zapytam. Przepraszam, jak dojdziemy na peron czternasty?" },
        { speaker: "Julia", text: "Ist das unten, oder?", pl: "To na dole, prawda?" },
        { speaker: "Anna", text: "Ja! Die Treppe da rechts, dann geradeaus.", pl: "Tak! Tymi schodami po prawej, a potem prosto." },
        { speaker: "Lukas", text: "Und, Maja? Was ist dein Lieblingsort in Berlin?", pl: "No i, Maja? Jakie jest twoje ulubione miejsce w Berlinie?" },
        { speaker: "Maja", text: "Das Technikmuseum! Und der Park neben Julias Haus – da ist es so ruhig.", pl: "Muzeum Techniki! I park obok domu Julii – tam jest tak spokojnie." },
        { speaker: "Paul", text: "Wie lange dauert die Fahrt nach Krakau?", pl: "Jak długo trwa jazda do Krakowa?" },
        { speaker: "Maja", text: "Ungefähr acht Stunden. Ich steige in Breslau nicht um – der Zug fährt direkt.", pl: "Mniej więcej osiem godzin. Nie przesiadam się we Wrocławiu – pociąg jedzie bezpośrednio." },
        { speaker: "Julia", text: "Gute Fahrt! Und schreib mir aus dem Zug!", pl: "Szerokiej drogi! I napisz do mnie z pociągu!" },
        { speaker: "Maja", text: "Mach ich! Und im Sommer kommt ihr alle zu mir nach Krakau!", pl: "Jasne! A latem wszyscy przyjeżdżacie do mnie do Krakowa!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-2-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Pożegnanie na dworcu",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Z którego peronu odjeżdża pociąg Mai?", options: ["z 4", "z 14", "z 40"], answer: 1 },
          { prompt: "Kto pyta w informacji o drogę?", options: ["Paul", "Anna", "Lukas"], answer: 1 },
          { prompt: "Jakie jest ulubione miejsce Mai w Berlinie?", options: ["wieża telewizyjna", "Muzeum Techniki", "Brama Brandenburska"], answer: 1 },
          { prompt: "Jak długo jedzie się do Krakowa?", options: ["około 4 godzin", "około 8 godzin", "około 12 godzin"], answer: 1 },
          { prompt: "Gdzie Maja się przesiada?", options: ["we Wrocławiu", "w Poznaniu", "nigdzie – pociąg jest bezpośredni"], answer: 2 },
          { prompt: "Co Maja proponuje na lato?", options: ["przyjazd przyjaciół do Krakowa", "kolejną wizytę w Berlinie", "wspólną podróż nad morze"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-2-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "In meinem Viertel gibt es keine Apotheke.", options: ["W mojej okolicy jest apteka.", "W mojej okolicy nie ma apteki.", "W mojej okolicy nie ma biblioteki."], answer: 1 },
          { audio: "Nehmen Sie die zweite Straße rechts.", options: ["Proszę skręcić w drugą ulicę w prawo.", "Proszę skręcić w pierwszą ulicę w prawo.", "Proszę skręcić w drugą ulicę w lewo."], answer: 0 },
          { audio: "Das Museum ist gegenüber dem Rathaus.", options: ["Muzeum jest obok ratusza.", "Muzeum jest za ratuszem.", "Muzeum jest naprzeciwko ratusza."], answer: 2 },
          { audio: "Ich fahre mit der Straßenbahn.", options: ["Jadę tramwajem.", "Jadę metrem.", "Idę ulicą."], answer: 0 },
          { audio: "Am Alexanderplatz steigen wir aus.", options: ["Na Alexanderplatz wsiadamy.", "Na Alexanderplatz wysiadamy.", "Na Alexanderplatz się przesiadamy."], answer: 1 },
          { audio: "Die Fahrt dauert eine halbe Stunde.", options: ["Jazda trwa półtorej godziny.", "Jazda trwa pół godziny.", "Pociąg odjeżdża o wpół do."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-2-4-fill",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij",
        instruction: "Uzupełnij brakujące słowo.",
        items: [
          { before: "Hier gibt es", after: "Kino.", answers: ["kein"], hint: "das Kino, nie ma" },
          { before: "Lukas spielt Fußball", after: "Park.", answers: ["im"], hint: "gdzie? der Park" },
          { before: "Wie komme ich", after: "Post?", answers: ["zur"], hint: "dokąd? die Post" },
          { before: "", after: "Sie hier geradeaus!", answers: ["Gehen"], hint: "gehen, Sie" },
          { before: "", after: "die erste Straße links, Maja!", answers: ["Nimm"], hint: "nehmen, du" },
          { before: "Julia fährt mit", after: "Bus.", answers: ["dem"], hint: "der Bus" },
          { before: "Maja fährt von Berlin", after: "Krakau.", answers: ["nach"], hint: "do miasta" },
          { before: "Nach der Schule gehe ich", after: "Hause.", answers: ["nach"], hint: "do domu" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-2-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Jest tu park?", options: ["Ist es hier einen Park?", "Gibt es hier einen Park?", "Gibt es hier ein Park?"], answer: 1, explanation: "„Jest” w sensie „istnieje” – es gibt + biernik: einen Park." },
          { prompt: "Jak dojdę do szkoły?", options: ["Wie komme ich zum Schule?", "Wie komme ich zur Schule?", "Wie komme ich nach Schule?"], answer: 1, explanation: "die Schule → zu der → zur." },
          { prompt: "Idź prosto! (do kolegi)", options: ["Gehst geradeaus!", "Gehe du geradeaus!", "Geh geradeaus!"], answer: 2 },
          { prompt: "Weź autobus! (do koleżanki)", options: ["Nehm den Bus!", "Nimm den Bus!", "Nimmst den Bus!"], answer: 1, explanation: "nehmen: du nimmst → Nimm!" },
          { prompt: "Jeżdżę metrem.", options: ["Ich fahre mit die U-Bahn.", "Ich fahre mit der U-Bahn.", "Ich fahre U-Bahn mit."], answer: 1, explanation: "mit + celownik: die → der." },
          { prompt: "Jadę do Krakowa.", options: ["Ich fahre zu Krakau.", "Ich fahre nach Krakau.", "Ich fahre in Krakau."], answer: 1, explanation: "Do miast – nach." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-2-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["es", "Gibt", "Schwimmbad", "hier", "ein"], answer: "Gibt es hier ein Schwimmbad?", pl: "Jest tu basen?" },
          { words: ["zur", "komme", "Wie", "Apotheke", "ich"], answer: "Wie komme ich zur Apotheke?", pl: "Jak dojdę do apteki?" },
          { words: ["Ampel", "Gehen", "bis", "Sie", "zur"], answer: "Gehen Sie bis zur Ampel.", pl: "Proszę iść do świateł." },
          { words: ["Rad", "fährt", "dem", "mit", "Lukas"], answer: "Lukas fährt mit dem Rad.", pl: "Lukas jeździ rowerem." },
          { words: ["wir", "Bahnhof", "Am", "um", "steigen"], answer: "Am Bahnhof steigen wir um.", pl: "Na dworcu się przesiadamy." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-2-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 2",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 2 jest zaliczony!",
        items: [
          { prompt: "**die Apotheke** to …", options: ["biblioteka", "apteka", "poczta"], answer: 1 },
          { prompt: "Gdzie kupisz bilet?", options: ["am Fahrkartenautomaten", "in der Kirche", "im Schwimmbad"], answer: 0, speakOptions: true },
          { prompt: "In unserem Dorf gibt es ___ Supermarkt.", options: ["kein", "keinen", "keine"], answer: 1 },
          { prompt: "Wir sehen einen Film ___ Kino.", options: ["im", "zum", "in der"], answer: 0 },
          { prompt: "Wie komme ich ___ Museum?", options: ["zur", "zum", "nach"], answer: 1 },
          { prompt: "**geradeaus** znaczy …", options: ["w prawo", "z powrotem", "prosto"], answer: 2 },
          { prompt: "___ Sie bitte über die Straße!", options: ["Geh", "Gehen", "Geht"], answer: 1 },
          { prompt: "Paul ___ mit dem Zug nach Wien.", options: ["fahrt", "fährt", "fährst"], answer: 1 },
          { prompt: "Ich steige am Bahnhof ___ . (przesiadam się)", options: ["ein", "aus", "um"], answer: 2 },
          { prompt: "Który przyimek NIE łączy się z celownikiem?", options: ["mit", "für", "bei"], answer: 1, explanation: "für łączy się z biernikiem (für dich). aus, bei, mit, nach, von, zu – z celownikiem." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-2-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Zaproszenie do mojego miasta",
        instruction:
          "Zaproś kolegę z Niemiec do swojego miasta (8–10 zdań): opisz, co tam jest, jak do ciebie dojechać i co razem zobaczycie. Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "opisz miasto: Es gibt … / Es gibt keinen / keine / kein …",
          "napisz, jak przyjechać: mit dem Zug / Bus von … nach …, die Fahrt dauert …",
          "opisz drogę od dworca lub przystanku w trybie rozkazującym (du)",
          "napisz, dokąd razem pójdziecie: zum Park, zur Altstadt, ins Kino …",
        ],
        placeholder: "Hallo …! Komm mich doch in … besuchen!",
        model:
          "Hallo Lukas! Komm im Sommer zu mir nach Krakau! Krakau ist alt und sehr schön. Im Zentrum gibt es einen großen Marktplatz und viele Cafés. Es gibt auch ein Schwimmbad und einen Zoo. Von Berlin nach Krakau fährst du mit dem Zug – die Fahrt dauert acht Stunden. Am Bahnhof steig in die Straßenbahn Nummer vier. Steig an der Haltestelle „Park“ aus. Geh dann geradeaus und nimm die erste Straße links. Unser Haus ist neben der Bäckerei. Wir gehen zusammen zum Schloss und in die Altstadt. Bis bald! Maja",
        modelPl:
          "Cześć, Lukas! Przyjedź do mnie latem do Krakowa! Kraków jest stary i bardzo piękny. W centrum jest duży Rynek i mnóstwo kawiarni. Jest też basen i zoo. Z Berlina do Krakowa jedziesz pociągiem – podróż trwa osiem godzin. Na dworcu wsiądź do tramwaju numer cztery. Wysiądź na przystanku „Park”. Potem idź prosto i skręć w pierwszą ulicę w lewo. Nasz dom jest obok piekarni. Razem pójdziemy na Wawel i na Stare Miasto. Do zobaczenia! Maja",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem wskazówki, jak dojść do celu, i komunikaty o transporcie.",
        "Mówienie: umiem zapytać o drogę, wskazać ją i powiedzieć, czym jeżdżę.",
        "Czytanie: rozumiem opis miasta, opis drogi i krótką ankietę.",
        "Pisanie: umiem opisać swoją okolicę i drogę do mojego domu.",
        "Gramatyka: znam es gibt, Wo? / Wohin?, zum / zur, tryb rozkazujący i przyimki z celownikiem.",
        "Słownictwo: znam miejsca w mieście, drogowskazy, środki transportu i bilety.",
      ],
    },
  ],
};
