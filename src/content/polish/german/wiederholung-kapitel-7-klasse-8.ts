import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-7",
  chapter: 7,
  number: 4,
  title: "Wiederholung – Kapitel 7",
  titlePl: "Powtórka z rozdziału 7",
  intro:
    "Jabłoń rośnie na szkolnym podwórku, a park jest (prawie) czysty – czas na powtórkę! Zrób ją dzień lub dwa po skończeniu rozdziału 7: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: segregacja, welcher / dieser i man muss („Was kommt in welche Tonne?”), Wo? / Wohin? i liegen – legen („Ausflug in den Wald”) albo zdania z wenn („Wenn alle mitmachen …”).",
  blocks: [
    {
      type: "goals",
      items: [
        "powiedzieć, co wrzucamy do którego pojemnika, i mówić o zasadach: man muss, man darf nicht,",
        "używać welcher / welche / welches i dieser / diese / dieses,",
        "odróżniać Wo? + celownik od Wohin? + biernik i używać par liegen – legen, stehen – stellen,",
        "budować zdania z wenn i odróżniać wenn od wann,",
        "opowiedzieć, co robisz dla środowiska i przyrody.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: welcher, dieser i man muss",
      paragraphs: [
        "**welcher? / dieser** odmieniają się jak der / die / das: welch**er** / dies**er** Becher, welch**e** / dies**e** Tonne, welch**es** / dies**es** Glas, l. mnoga welch**e** / dies**e**. Biernik męski: welch**en** / dies**en**. → lekcja „Was kommt in welche Tonne?”",
        "Zasady: **man** + czasownik modalny (forma jak er / sie / es): **Man muss** Müll trennen. **Man darf** Glas **nicht** in den Restmüll werfen. **Man soll** weniger Plastik kaufen. **Man kann** Flaschen zurückbringen. Uwaga: **muss nicht** = nie trzeba, **darf nicht** = nie wolno.",
        "Pojemniki: **gelbe Tonne** – opakowania z plastiku i metalu, **blaue Tonne** – papier, **Biotonne** – resztki jedzenia, **Restmüll** – reszta, szkło – do **Glascontainer**, butelki z kaucją – do sklepu.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: Wo? czy Wohin?",
      paragraphs: [
        "Przyimki **in, an, auf, über, unter, vor, hinter, neben, zwischen**: **Wo?** (miejsce) → **celownik**, **Wohin?** (ruch do celu) → **biernik**. → lekcja „Ausflug in den Wald”",
        "Pary czasowników: **liegen / stehen / sitzen / hängen** (stan, Wo? + celownik) – **legen / stellen / sich setzen / hängen** (czynność, Wohin? + biernik).",
      ],
      table: {
        headers: ["rodzaj", "Wo? + celownik", "Wohin? + biernik"],
        rows: [
          { cells: ["der Wald", "im Wald", "in den Wald"], speak: "im Wald, in den Wald" },
          { cells: ["die Bank", "auf der Bank", "auf die Bank"], speak: "auf der Bank, auf die Bank" },
          { cells: ["das Wasser", "im Wasser", "ins Wasser"], speak: "im Wasser, ins Wasser" },
          { cells: ["der See", "am See", "an den See"], speak: "am See, an den See" },
          { cells: ["liegen – legen", "Die Decke liegt auf der Wiese.", "Ich lege die Decke auf die Wiese."], speak: "Die Decke liegt auf der Wiese. Ich lege die Decke auf die Wiese." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: wenn i wann",
      paragraphs: [
        "**wenn** = jeśli / kiedy (w danej sytuacji). Czasownik na **koniec**, jak po weil i dass: Wir bleiben drinnen, **wenn** es **regnet**. Gdy zdanie z wenn stoi na początku, po przecinku od razu czasownik: **Wenn** es **regnet, bleiben** wir drinnen. → lekcja „Wenn alle mitmachen …”",
        "**wann?** = kiedy? – pytanie o czas: **Wann** fangen wir an? Spójniki z czasownikiem na końcu znasz już trzy: **weil, dass, wenn**.",
      ],
      table: {
        headers: ["spójnik", "przykład", "po polsku"],
        rows: [
          { cells: ["weil", "…, weil es regnet.", "…, bo pada."], speak: "Wir bleiben zu Hause, weil es regnet." },
          { cells: ["dass", "…, dass es regnet.", "…, że pada."], speak: "Ich glaube, dass es regnet." },
          { cells: ["wenn", "…, wenn es regnet.", "…, jeśli pada."], speak: "Wir bleiben zu Hause, wenn es regnet." },
          { cells: ["wenn + początek", "Wenn es regnet, bleiben wir zu Hause.", "Jeśli pada, zostajemy w domu."], speak: "Wenn es regnet, bleiben wir zu Hause." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Was kommt in welche Tonne?",
          items: [
            { text: "der Müll, den Müll trennen", pl: "śmieci, segregować śmieci" },
            { text: "die gelbe / blaue Tonne, die Biotonne, der Restmüll", pl: "żółty / niebieski pojemnik, bioodpady, zmieszane" },
            { text: "die Verpackung, die Dose, die Tüte", pl: "opakowanie, puszka, torebka" },
            { text: "aus Plastik / Papier / Glas / Metall", pl: "z plastiku / papieru / szkła / metalu" },
            { text: "die Umwelt, umweltfreundlich, wegwerfen", pl: "środowisko, ekologiczny, wyrzucać" },
          ],
        },
        {
          title: "Ausflug in den Wald",
          items: [
            { text: "der Wald, der Baum, die Wiese, der See", pl: "las, drzewo, łąka, jezioro" },
            { text: "der Weg, das Gebüsch", pl: "ścieżka, zarośla" },
            { text: "das Eichhörnchen, das Wildschwein, der Vogel", pl: "wiewiórka, dzik, ptak" },
            { text: "die Decke, der Korb, die Bank", pl: "koc, kosz, ławka" },
            { text: "in der Sonne / im Schatten", pl: "na słońcu / w cieniu" },
          ],
        },
        {
          title: "Wenn alle mitmachen …",
          items: [
            { text: "die Aufräumaktion, aufräumen, mitmachen", pl: "akcja sprzątania, sprzątać, przyłączyć się" },
            { text: "sauber / schmutzig", pl: "czysty / brudny" },
            { text: "Energie / Wasser sparen, das Licht ausmachen", pl: "oszczędzać energię / wodę, wyłączać światło" },
            { text: "reparieren, gebraucht, die Stofftasche", pl: "naprawiać, używany, torba materiałowa" },
            { text: "einen Baum pflanzen", pl: "posadzić drzewo" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Die große Aufräumaktion",
      titlePl: "Wielkie sprzątanie",
      context: "Sobota, dziesiąta rano, park nad jeziorem. Przyjaciele mają rękawice, worki na śmieci – i koc na piknik.",
      cast: { Anna: "f", Lukas: "m", Julia: "f", Paul: "m", Leon: "m" },
      lines: [
        { speaker: "Anna", text: "So, wer nimmt welchen Sack? Der gelbe ist für Verpackungen, der blaue für Papier und der schwarze für Restmüll.", pl: "No dobra, kto bierze który worek? Żółty jest na opakowania, niebieski na papier, a czarny na zmieszane." },
        { speaker: "Lukas", text: "Ich nehme diesen hier. Wo fangen wir an?", pl: "Biorę ten. Gdzie zaczynamy?" },
        { speaker: "Julia", text: "Auf der Wiese neben den Bänken. Da liegt am meisten Müll.", pl: "Na łące obok ławek. Tam leży najwięcej śmieci." },
        { speaker: "Paul", text: "Igitt! Unter dieser Bank liegen zehn Dosen!", pl: "Fuj! Pod tą ławką leży dziesięć puszek!" },
        { speaker: "Leon", text: "Wirf sie in den gelben Sack. Oder warte – haben sie Pfand?", pl: "Wrzuć je do żółtego worka. Albo czekaj – jest na nie kaucja?" },
        { speaker: "Paul", text: "Ja! Dann kommen sie in diese Tüte. Lukas, das ist Geld für deinen nächsten Baum!", pl: "Tak! To idą do tej torby. Lukas, to pieniądze na twoje następne drzewo!" },
        { speaker: "Lukas", text: "Leute, schaut mal! Im Gebüsch liegt ein altes Handy.", pl: "Ludzie, patrzcie! W krzakach leży stary telefon." },
        { speaker: "Anna", text: "Das darf man nicht in den Restmüll werfen. Wir bringen es in den Supermarkt.", pl: "Tego nie wolno wyrzucać do zmieszanych. Zaniesiemy go do supermarketu." },
        { speaker: "Julia", text: "Wenn alle so fleißig sind wie wir, ist Berlin bald so sauber wie unser Klassenzimmer!", pl: "Jeśli wszyscy będą tak pracowici jak my, Berlin będzie wkrótce tak czysty jak nasza klasa!" },
        { speaker: "Lukas", text: "Wie unser Klassenzimmer? Das ist doch nie sauber!", pl: "Jak nasza klasa? Przecież ona nigdy nie jest czysta!" },
        { speaker: "Leon", text: "Die Wiese ist fast fertig. Wenn wir fertig sind, legen wir die Decke in die Sonne und essen.", pl: "Łąka jest prawie gotowa. Kiedy skończymy, rozłożymy koc na słońcu i zjemy." },
        { speaker: "Paul", text: "Und Lukas – wo ist dein Sandwich heute?", pl: "A Lukas – gdzie jest dziś twoja kanapka?" },
        { speaker: "Lukas", text: "In meiner Hand. Wie versprochen!", pl: "W mojej ręce. Jak obiecałem!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-7-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Im Park",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Na co jest czarny worek?", options: ["na papier", "na opakowania", "na odpady zmieszane"], answer: 2 },
          { prompt: "Gdzie leży najwięcej śmieci?", options: ["na łące obok ławek", "w jeziorze", "na parkingu"], answer: 0 },
          { prompt: "Co Paul znajduje pod ławką?", options: ["telefon", "dziesięć puszek", "kanapkę"], answer: 1 },
          { prompt: "Dlaczego puszki idą do osobnej torby?", options: ["bo są brudne", "bo jest na nie kaucja", "bo są ze szkła"], answer: 1 },
          { prompt: "Co zrobią ze starym telefonem?", options: ["wyrzucą go do zmieszanych", "zaniosą go do supermarketu", "zatrzymają go"], answer: 1 },
          { prompt: "Gdzie jest dziś kanapka Lukasa?", options: ["na ławce", "w koszu", "w jego ręce"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-7-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Welche Tonne ist für Glas?", options: ["Który pojemnik jest na szkło?", "Ten pojemnik jest na szkło.", "Gdzie jest szkło?"], answer: 0 },
          { audio: "Man muss nicht mit dem Auto fahren.", options: ["Nie wolno jeździć samochodem.", "Nie trzeba jeździć samochodem.", "Trzeba jeździć samochodem."], answer: 1 },
          { audio: "Die Kinder springen ins Wasser.", options: ["Dzieci są w wodzie.", "Dzieci skaczą do wody.", "Dzieci wychodzą z wody."], answer: 1 },
          { audio: "Stell den Korb neben den Baum!", options: ["Kosz stoi obok drzewa.", "Postaw kosz obok drzewa!", "Weź kosz spod drzewa!"], answer: 1 },
          { audio: "Wenn ich Zeit habe, helfe ich dir.", options: ["Jeśli będę mieć czas, pomogę ci.", "Kiedy miałem czas, pomogłem ci.", "Nie mam czasu ci pomóc."], answer: 0 },
          { audio: "Wann beginnt die Aufräumaktion?", options: ["Jeśli zacznie się sprzątanie…", "Kiedy zaczyna się akcja sprzątania?", "Sprzątanie już się zaczęło."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-7-4-fill",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij",
        instruction: "Uzupełnij brakujące słowo.",
        items: [
          { before: "", after: "Tonne ist für Papier?", answers: ["Welche"], hint: "welch-, die Tonne" },
          { before: "", after: "Joghurtbecher kommt in die gelbe Tonne.", answers: ["Dieser"], hint: "dies-, der Becher" },
          { before: "Man", after: "Glas nicht in den Restmüll werfen.", answers: ["darf"], hint: "nie wolno" },
          { before: "Wir gehen in", after: "Wald.", answers: ["den"], hint: "Wohin? der Wald" },
          { before: "Das Eichhörnchen sitzt auf", after: "Baum.", answers: ["dem"], hint: "Wo? der Baum" },
          { before: "Paul", after: "die Decke auf die Wiese.", answers: ["legt"], hint: "legen / liegen?" },
          { before: "Wenn es regnet,", after: "wir zu Hause.", answers: ["bleiben"], hint: "bleiben – zaraz po przecinku" },
          { before: "", after: "fangen wir an? – Um zehn.", answers: ["Wann"], hint: "wenn / wann?" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-7-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Idziemy do lasu.", options: ["Wir gehen im Wald.", "Wir gehen in den Wald.", "Wir gehen in dem Wald."], answer: 1, explanation: "Wohin? – biernik: in den Wald." },
          { prompt: "Połóż koc na łące!", options: ["Leg die Decke auf der Wiese!", "Lieg die Decke auf die Wiese!", "Leg die Decke auf die Wiese!"], answer: 2, explanation: "legen + Wohin? → biernik, choć po polsku jest miejscownik." },
          { prompt: "Nie trzeba codziennie kupować nowej butelki.", options: ["Man darf nicht jeden Tag eine neue Flasche kaufen.", "Man muss nicht jeden Tag eine neue Flasche kaufen.", "Man kann nicht jeden Tag eine neue Flasche kaufen."], answer: 1, explanation: "muss nicht = nie trzeba, darf nicht = nie wolno." },
          { prompt: "Jeśli pada, zostajemy w domu.", options: ["Wenn es regnet, wir bleiben zu Hause.", "Wenn es regnet, bleiben wir zu Hause.", "Wenn regnet es, bleiben wir zu Hause."], answer: 1, explanation: "Po zdaniu z wenn od razu czasownik zdania głównego." },
          { prompt: "Kiedy masz urodziny?", options: ["Wenn hast du Geburtstag?", "Wann hast du Geburtstag?", "Wann du hast Geburtstag?"], answer: 1 },
          { prompt: "Który worek bierzesz?", options: ["Welcher Sack nimmst du?", "Welchen Sack nimmst du?", "Welches Sack nimmst du?"], answer: 1, explanation: "der Sack, biernik: welchen." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-7-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["trennen", "muss", "Müll", "Man"], answer: "Man muss Müll trennen.", pl: "Trzeba segregować śmieci." },
          { words: ["in die gelbe Tonne", "kommt", "Becher", "Dieser"], answer: "Dieser Becher kommt in die gelbe Tonne.", pl: "Ten kubek idzie do żółtego pojemnika." },
          { words: ["auf die Bank", "Lukas", "sein Sandwich", "legt"], answer: "Lukas legt sein Sandwich auf die Bank.", pl: "Lukas kładzie kanapkę na ławce." },
          { words: ["bleiben", "Wenn es regnet,", "zu Hause", "wir"], answer: "Wenn es regnet, bleiben wir zu Hause.", pl: "Jeśli pada, zostajemy w domu." },
          { words: ["im Schatten", "steht", "Der Korb"], answer: "Der Korb steht im Schatten.", pl: "Kosz stoi w cieniu." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-7-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 7",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 7 jest zaliczony!",
        items: [
          { prompt: "Gdzie w Niemczech wrzucisz gazetę?", options: ["in die gelbe Tonne", "in die blaue Tonne", "in die Biotonne"], answer: 1, speakOptions: true },
          { prompt: "**das Eichhörnchen** to …", options: ["jeż", "wiewiórka", "dzik"], answer: 1 },
          { prompt: "___ Glas bringen wir zum Container.", options: ["Dieser", "Diese", "Dieses"], answer: 2 },
          { prompt: "Man ___ Batterien nicht in den Müll werfen. (nie wolno)", options: ["muss", "darf", "kann"], answer: 1 },
          { prompt: "Wir fahren an ___ See.", options: ["dem", "den", "der"], answer: 1 },
          { prompt: "Die Wildschweine schlafen ___ Gebüsch.", options: ["im", "ins", "in den"], answer: 0 },
          { prompt: "Das Handy ___ auf dem Tisch.", options: ["legt", "liegt", "stellt"], answer: 1 },
          { prompt: "Ich mache das Licht aus, wenn ich das Zimmer ___ .", options: ["verlasse", "verlassen", "verlässt"], answer: 0 },
          { prompt: "Wenn alle mitmachen, ___ der Park schnell sauber.", options: ["ist", "sind", "er ist"], answer: 0 },
          { prompt: "___ kommst du? – Um drei.", options: ["Wenn", "Wann", "Wo"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-7-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Moje miejsce w przyrodzie",
        instruction:
          "Opowiedz o swoim ulubionym miejscu w przyrodzie (8–10 zdań): gdzie jest, co tam jest, co tam robisz i jak je chronić. Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "opisz, co gdzie jest – Wo? + celownik (am See, auf der Wiese, im Wald…)",
          "opisz, dokąd idziesz i co gdzie kładziesz – Wohin? + biernik (in den Wald, ins Wasser…)",
          "użyj co najmniej dwóch zdań z wenn",
          "podaj zasady: man muss, man darf nicht",
          "użyj welcher albo dieser co najmniej raz",
        ],
        placeholder: "Mein Lieblingsort ist …",
        model:
          "Mein Lieblingsort ist ein kleiner See im Wald, nicht weit von meinem Haus. Am See gibt es eine Wiese und zwei alte Bänke. Wenn das Wetter schön ist, fahre ich mit dem Rad dorthin. Ich lege meine Decke auf die Wiese und lese. Manchmal sitzt ein Eichhörnchen auf dem Baum neben mir. Im Sommer springe ich ins Wasser. Leider liegt dort manchmal Müll. Man darf keinen Müll in den Wald werfen, und man muss die Tiere in Ruhe lassen. Wenn ich Müll sehe, nehme ich ihn mit. Dieser Ort ist für mich der schönste Platz der Welt!",
        modelPl:
          "Moje ulubione miejsce to małe jezioro w lesie, niedaleko mojego domu. Nad jeziorem jest łąka i dwie stare ławki. Kiedy jest ładna pogoda, jadę tam rowerem. Kładę koc na łące i czytam. Czasem na drzewie obok mnie siedzi wiewiórka. Latem skaczę do wody. Niestety czasem leżą tam śmieci. Nie wolno wyrzucać śmieci w lesie i trzeba zostawić zwierzęta w spokoju. Kiedy widzę śmieci, zabieram je. To miejsce jest dla mnie najpiękniejszym miejscem na świecie!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem, gdy ktoś mówi o segregacji, przyrodzie i zasadach w lesie.",
        "Mówienie: umiem opisać miejsce w przyrodzie i powiedzieć, jak je chronić.",
        "Czytanie: rozumiem informację o segregacji, tablicę z zasadami i listę ekologicznych rad.",
        "Pisanie: umiem napisać zasady ekologiczne i opis pikniku.",
        "Gramatyka: znam welcher / dieser, man muss / darf nicht, Wo? / Wohin?, liegen – legen oraz zdania z wenn.",
        "Słownictwo: znam słowa o odpadach, lesie, zwierzętach i ochronie środowiska.",
      ],
    },
  ],
};
