import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-8",
  chapter: 8,
  number: 4,
  title: "Wiederholung – Kapitel 8",
  titlePl: "Powtórka z rozdziału 8",
  intro:
    "Wakacje! Przyjaciele są w różnych miejscach, ale spotykają się na wideoczacie – i to ostatnia powtórka w klasie 8. Zrób ją dzień lub dwa po skończeniu rozdziału 8: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: zawody i werden („Was willst du werden?”), czas przyszły Futur I („Mein Traumberuf”) albo würde gern, hätte gern i grzeczne prośby („Bis nächstes Jahr!”).",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać zawody w formie męskiej i żeńskiej i powiedzieć, kto gdzie pracuje,",
        "powiedzieć, kim chcesz zostać: Ich will … werden,",
        "mówić o przyszłości w czasie Futur I: Ich werde … studieren,",
        "mówić o marzeniach i grzecznie prosić: Ich würde gern … Könnten Sie …?",
        "opowiedzieć o swoich planach, marzeniach i wymarzonym zawodzie.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: zawody i werden",
      paragraphs: [
        "Forma żeńska: **-in** (der Lehrer → die Lehrer**in**), czasem z przegłosem (der Arzt → die **Ä**rztin, der Koch → die K**ö**chin). Zawód **bez rodzajnika**: Mein Vater ist **Ingenieur**. **arbeiten als** + zawód: Sie arbeitet **als Ärztin** im Krankenhaus. Pytanie: **Was bist du von Beruf?** → lekcja „Was willst du werden?”",
        "**werden** ma trzy znaczenia: **Ich werde vierzehn.** (kończę 14 lat) – **Ich werde Lehrerin.** (zostaję nauczycielką) – **Ich werde lernen.** (będę się uczyć, Futur). Plany z wollen / möchten: Ich **will** Fotografin **werden**.",
      ],
      table: {
        headers: ["on", "ona", "miejsce pracy"],
        rows: [
          { cells: ["der Arzt", "die Ärztin", "im Krankenhaus, in der Praxis"], speak: "der Arzt, die Ärztin, im Krankenhaus" },
          { cells: ["der Koch", "die Köchin", "im Restaurant"], speak: "der Koch, die Köchin, im Restaurant" },
          { cells: ["der Erzieher", "die Erzieherin", "in der Kita"], speak: "der Erzieher, die Erzieherin, in der Kita" },
          { cells: ["der Mechatroniker", "die Mechatronikerin", "in der Werkstatt"], speak: "der Mechatroniker, die Mechatronikerin, in der Werkstatt" },
          { cells: ["der Informatiker", "die Informatikerin", "im Büro, in einer Firma"], speak: "der Informatiker, die Informatikerin, im Büro" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: Futur I",
      paragraphs: [
        "**werden** (odmienione, 2. miejsce) + **bezokolicznik na końcu**: Ich **werde** Fotografie **studieren**. Du **wirst** berühmt **sein**. Używamy go do przepowiedni, obietnic i dalszych planów. → lekcja „Mein Traumberuf”",
        "O konkretnych planach Niemcy mówią często w **czasie teraźniejszym** z określeniem czasu: **Morgen fahre** ich nach Krakau. Uwaga: **ich will** = chcę, **ich werde** = będę!",
      ],
      table: {
        headers: ["osoba", "werden", "przykład"],
        rows: [
          { cells: ["ich", "werde", "Ich werde Koch."], speak: "Ich werde Koch." },
          { cells: ["du", "wirst", "Du wirst viel lernen."], speak: "Du wirst viel lernen." },
          { cells: ["er / sie / es", "wird", "Morgen wird es regnen."], speak: "Morgen wird es regnen." },
          { cells: ["wir", "werden", "Wir werden uns treffen."], speak: "Wir werden uns treffen." },
          { cells: ["ihr", "werdet", "Ihr werdet viel Spaß haben."], speak: "Ihr werdet viel Spaß haben." },
          { cells: ["sie / Sie", "werden", "Sie werden studieren."], speak: "Sie werden studieren." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: würde, hätte, wäre",
      paragraphs: [
        "Marzenia: **würde** + bezokolicznik na końcu: Ich **würde** gern um die Welt **reisen**. Przy haben i sein: **hätte** i **wäre**: Ich **hätte** gern einen Hund. Ich **wäre** gern Eisverkäufer. **Das wäre schön!** → lekcja „Bis nächstes Jahr!”",
        "Grzeczne prośby: **Könnten Sie** mir helfen? **Könntest du** …? **Würdest du** …? **Hättest du** Zeit? **Ich hätte gern** zwei Kugeln Eis. Propozycja: **Wir könnten** ins Kino gehen.",
      ],
      table: {
        headers: ["osoba", "würde", "hätte", "wäre"],
        rows: [
          { cells: ["ich", "würde", "hätte", "wäre"], speak: "ich würde, ich hätte, ich wäre" },
          { cells: ["du", "würdest", "hättest", "wärst"], speak: "du würdest, du hättest, du wärst" },
          { cells: ["er / sie / es", "würde", "hätte", "wäre"], speak: "er würde, sie hätte, es wäre" },
          { cells: ["wir / sie / Sie", "würden", "hätten", "wären"], speak: "wir würden, wir hätten, wir wären" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Was willst du werden?",
          items: [
            { text: "der Beruf, der Traumberuf", pl: "zawód, wymarzony zawód" },
            { text: "der Lehrer / die Lehrerin, der Arzt / die Ärztin", pl: "nauczyciel / -ka, lekarz / lekarka" },
            { text: "der Koch / die Köchin, der Erzieher / die Erzieherin", pl: "kucharz / kucharka, wychowawca / wychowawczyni" },
            { text: "das Krankenhaus, die Werkstatt, das Büro, die Firma", pl: "szpital, warsztat, biuro, firma" },
            { text: "Was bist du von Beruf? – arbeiten als …", pl: "Jaki masz zawód? – pracować jako…" },
          ],
        },
        {
          title: "Mein Traumberuf",
          items: [
            { text: "die Zukunft, der Plan, der Traum", pl: "przyszłość, plan, marzenie" },
            { text: "studieren, eine Ausbildung machen, das Praktikum", pl: "studiować, uczyć się zawodu, praktyka" },
            { text: "das Abitur, berühmt", pl: "matura, sławny" },
            { text: "bald, nächstes Jahr, in zehn Jahren, nach der Schule", pl: "wkrótce, w przyszłym roku, za dziesięć lat, po szkole" },
            { text: "wahrscheinlich, bestimmt, vielleicht", pl: "prawdopodobnie, na pewno, może" },
          ],
        },
        {
          title: "Bis nächstes Jahr!",
          items: [
            { text: "das Zeugnis, die Note, das Schuljahr", pl: "świadectwo, ocena, rok szkolny" },
            { text: "der Wunsch, Das wäre schön!", pl: "życzenie, To byłoby fajne!" },
            { text: "die Eisdiele, die Kugel, die Sahne", pl: "lodziarnia, gałka, bita śmietana" },
            { text: "Mal sehen! – Das kommt darauf an.", pl: "Zobaczymy! – To zależy." },
            { text: "Schöne Ferien! Bis nächstes Jahr!", pl: "Udanych wakacji! Do zobaczenia w przyszłym roku!" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Videoanruf in den Ferien",
      titlePl: "Wideoczat w wakacje",
      context: "Środek lata. Anna organizuje wideoczat, bo tęskni za przyjaciółmi. Każdy łączy się z innego miejsca.",
      cast: { Anna: "f", Julia: "f", Leon: "m", Paul: "m", Lukas: "m" },
      lines: [
        { speaker: "Anna", text: "Hallo zusammen! Hört ihr mich? Wo seid ihr alle?", pl: "Cześć wszystkim! Słyszycie mnie? Gdzie wy wszyscy jesteście?" },
        { speaker: "Julia", text: "Ich bin bei Oma in Krakau. Das Praktikum bei Frau Brandt war super – ich habe sogar auf einer Hochzeit fotografiert!", pl: "Jestem u babci w Krakowie. Praktyka u pani Brandt była super – fotografowałam nawet na weselu!" },
        { speaker: "Leon", text: "Ich bin in München bei Max. Morgen werden wir auf ein Konzert gehen.", pl: "Jestem w Monachium u Maxa. Jutro pójdziemy na koncert." },
        { speaker: "Paul", text: "Und ich bin im Fußballcamp in Österreich. Der Trainer sagt, ich werde bestimmt ein guter Spieler.", pl: "A ja jestem na obozie piłkarskim w Austrii. Trener mówi, że na pewno będę dobrym zawodnikiem." },
        { speaker: "Anna", text: "Und Lukas? Lukas, wo bist du? Ich sehe nur Töpfe!", pl: "A Lukas? Lukas, gdzie jesteś? Widzę tylko garnki!" },
        { speaker: "Lukas", text: "Ich bin in der Küche im Restaurant von meinem Onkel. Ich arbeite hier als Küchenhilfe.", pl: "Jestem w kuchni w restauracji mojego wujka. Pracuję tu jako pomoc kuchenna." },
        { speaker: "Julia", text: "Und? Willst du immer noch Koch werden?", pl: "I co? Nadal chcesz zostać kucharzem?" },
        { speaker: "Lukas", text: "Ja! Mein Onkel sagt, ich koche schon ziemlich gut. Nach der Schule werde ich vielleicht eine Ausbildung als Koch machen.", pl: "Tak! Wujek mówi, że już całkiem dobrze gotuję. Po szkole może zrobię kurs zawodowy na kucharza." },
        { speaker: "Leon", text: "Der große Lukasini hatte also recht!", pl: "A więc wielki Lukasini miał rację!" },
        { speaker: "Lukas", text: "Natürlich! Und ich hätte eine Idee: Wenn ihr wieder in Berlin seid, koche ich für euch.", pl: "Oczywiście! I mam pomysł: kiedy wrócicie do Berlina, ugotuję dla was." },
        { speaker: "Paul", text: "Das wäre super! Würdest du Pizza machen?", pl: "To byłoby super! Zrobiłbyś pizzę?" },
        { speaker: "Lukas", text: "Klar. Ihr werdet die beste Pizza von Berlin essen!", pl: "Jasne. Zjecie najlepszą pizzę w Berlinie!" },
        { speaker: "Anna", text: "Abgemacht! Bis bald – und dann bis zur neunten Klasse!", pl: "Umowa stoi! Do zobaczenia wkrótce – a potem w dziewiątej klasie!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-8-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Der Videoanruf",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Gdzie jest Julia?", options: ["w Monachium", "u babci w Krakowie", "w Austrii"], answer: 1 },
          { prompt: "Co Julia fotografowała na praktyce?", options: ["wesele", "mecz", "koncert"], answer: 0 },
          { prompt: "Co mówi trener Paula?", options: ["że Paul musi więcej trenować", "że Paul na pewno będzie dobrym zawodnikiem", "że Paul powinien zostać trenerem"], answer: 1 },
          { prompt: "Gdzie pracuje Lukas?", options: ["w lodziarni", "w kuchni w restauracji wujka", "w przedszkolu"], answer: 1 },
          { prompt: "Co Lukas może zrobić po szkole?", options: ["studiować", "kurs zawodowy na kucharza", "praktykę u pani Brandt"], answer: 1 },
          { prompt: "Co Lukas obiecuje przyjaciołom?", options: ["najlepszą pizzę w Berlinie", "wycieczkę do Austrii", "lody za darmo"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-8-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Meine Mutter arbeitet als Ärztin.", options: ["Moja mama pracuje jako lekarka.", "Moja mama idzie do lekarza.", "Moja mama chce zostać lekarką."], answer: 0 },
          { audio: "Ich will Informatiker werden.", options: ["Będę informatykiem.", "Chcę zostać informatykiem.", "Jestem informatykiem."], answer: 1 },
          { audio: "Nach der Schule werde ich studieren.", options: ["Po szkole studiuję.", "Po szkole będę studiować.", "Po szkole studiowałem."], answer: 1 },
          { audio: "Ich würde gern nach Australien reisen.", options: ["Pojadę do Australii.", "Chciałbym pojechać do Australii.", "Byłem w Australii."], answer: 1 },
          { audio: "Hättest du morgen Zeit?", options: ["Miałeś wczoraj czas?", "Miałbyś jutro czas?", "Masz teraz czas?"], answer: 1 },
          { audio: "Das wäre super!", options: ["To było super!", "To jest super!", "To byłoby super!"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-8-4-fill",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij",
        instruction: "Uzupełnij brakujące słowo.",
        items: [
          { before: "der Koch – die", after: "", answers: ["Köchin"], hint: "forma żeńska" },
          { before: "Julias Mutter arbeitet", after: "Übersetzerin.", answers: ["als"], hint: "jako" },
          { before: "Ich will Fotografin", after: ".", answers: ["werden"], hint: "zostać" },
          { before: "Du", after: "bestimmt ein guter Koch.", answers: ["wirst"], hint: "werden, du" },
          { before: "In zehn Jahren werde ich in Hamburg", after: ".", answers: ["wohnen"], hint: "bezokolicznik" },
          { before: "Ich", after: "gern um die Welt reisen.", answers: ["würde"], hint: "Konjunktiv II" },
          { before: "Lukas", after: "gern Eisverkäufer.", answers: ["wäre"], hint: "sein → Konjunktiv II" },
          { before: "", after: "Sie mir bitte helfen?", answers: ["Könnten"], hint: "können – uprzejmie" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-8-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Mój tata jest inżynierem.", options: ["Mein Vater ist ein Ingenieur.", "Mein Vater ist Ingenieur.", "Mein Vater ist als Ingenieur."], answer: 1, explanation: "Zawód bez rodzajnika." },
          { prompt: "Będę studiować informatykę.", options: ["Ich will Informatik studieren.", "Ich werde Informatik studieren.", "Ich werde studieren Informatik."], answer: 1, explanation: "„będę” = werde, bezokolicznik na końcu." },
          { prompt: "Chcę zostać lekarką.", options: ["Ich werde Ärztin wollen.", "Ich will Ärztin werden.", "Ich will werden Ärztin."], answer: 1 },
          { prompt: "Chciałbym mieć psa.", options: ["Ich würde gern einen Hund.", "Ich hätte gern einen Hund.", "Ich hatte gern einen Hund."], answer: 1, explanation: "Przy haben: hätte, nie würde." },
          { prompt: "To byłoby fajne!", options: ["Das war schön!", "Das wäre schön!", "Das würde schön!"], answer: 1 },
          { prompt: "Mógłby mi pan pomóc?", options: ["Konnten Sie mir helfen?", "Könnten Sie mir helfen?", "Können Sie mich helfen?"], answer: 1, explanation: "könnten (z ö) = mógłby; konnten = mogli (przeszły)." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-8-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["Ingenieur", "ist", "Mein Vater"], answer: "Mein Vater ist Ingenieur.", pl: "Mój tata jest inżynierem." },
          { words: ["werden", "Koch", "will", "Lukas"], answer: "Lukas will Koch werden.", pl: "Lukas chce zostać kucharzem." },
          { words: ["studieren", "Fotografie", "werde", "Ich", "nach der Schule"], answer: "Ich werde nach der Schule Fotografie studieren.", pl: "Po szkole będę studiować fotografię." },
          { words: ["reisen", "um die Welt", "gern", "würde", "Ich"], answer: "Ich würde gern um die Welt reisen.", pl: "Chciałbym podróżować dookoła świata." },
          { words: ["Zeit", "morgen", "du", "Hättest"], answer: "Hättest du morgen Zeit?", pl: "Miałbyś jutro czas?" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-8-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 8",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 8 – i cała klasa 8 – jest zaliczony!",
        items: [
          { prompt: "Forma żeńska od **der Arzt**:", options: ["die Arztin", "die Ärztin", "die Ärztinnen"], answer: 1 },
          { prompt: "**die Werkstatt** to …", options: ["warsztat", "biuro", "szpital"], answer: 0 },
          { prompt: "Sie arbeitet ___ Lehrerin.", options: ["wie", "als", "für"], answer: 1 },
          { prompt: "Was willst du später ___ ?", options: ["werden", "wirst", "wird"], answer: 0 },
          { prompt: "Paul ___ viele Tore schießen.", options: ["werde", "wirst", "wird"], answer: 2 },
          { prompt: "**Ich will** znaczy …", options: ["będę", "chcę", "chciałbym"], answer: 1 },
          { prompt: "Ich ___ gern einen Hund.", options: ["würde", "hätte", "wäre"], answer: 1 },
          { prompt: "Lukas ___ gern Eisverkäufer.", options: ["hätte", "würde", "wäre"], answer: 2 },
          { prompt: "Najbardziej uprzejma prośba:", options: ["Hilf mir!", "Kannst du mir helfen?", "Könntest du mir helfen?"], answer: 2, speakOptions: true },
          { prompt: "W Niemczech najlepsza ocena to …", options: ["1", "5", "6"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-8-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Moja przyszłość",
        instruction:
          "Opowiedz o swojej przyszłości (8–10 zdań): kim chcesz zostać i dlaczego, jakie masz plany i o czym marzysz. Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "powiedz, kim chcesz zostać: Ich will / möchte … werden, weil …",
          "napisz, kim są z zawodu osoby z twojej rodziny – bez rodzajnika",
          "użyj co najmniej trzech zdań w Futur: Ich werde …",
          "użyj würde gern, hätte gern albo wäre gern",
          "zakończ grzeczną propozycją dla przyjaciela: Hättest du Lust …? / Wir könnten …",
        ],
        placeholder: "Ich möchte später … werden, weil …",
        model:
          "Ich möchte später Architektin werden, weil ich gern zeichne und Häuser liebe. Meine Mutter ist Ingenieurin, und mein Vater arbeitet als Lehrer – vielleicht habe ich das von beiden. Nach der Schule werde ich Abitur machen. Dann werde ich wahrscheinlich in Dresden oder Wien studieren. In der neunten Klasse werde ich ein Praktikum in einem Architekturbüro machen. Mein großer Traum: Ich würde gern einmal ein Haus am Meer bauen. Und ich wäre gern ein Jahr in Italien! Hättest du Lust auf eine Reise nach Rom? Wir könnten zusammen alle alten Häuser fotografieren!",
        modelPl:
          "W przyszłości chciałabym zostać architektką, bo lubię rysować i kocham domy. Moja mama jest inżynierką, a tata pracuje jako nauczyciel – może mam to po obojgu. Po szkole zrobię maturę. Potem prawdopodobnie będę studiować w Dreźnie albo w Wiedniu. W dziewiątej klasie odbędę praktykę w biurze architektonicznym. Moje wielkie marzenie: chciałabym kiedyś zbudować dom nad morzem. I chciałabym spędzić rok we Włoszech! Masz ochotę na wycieczkę do Rzymu? Mogłybyśmy razem sfotografować wszystkie stare budynki!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem, gdy ktoś mówi o zawodach, planach i marzeniach.",
        "Mówienie: umiem opowiedzieć, kim chcę zostać, i grzecznie o coś poprosić.",
        "Czytanie: rozumiem prezentacje zawodów, tekst o przyszłości i podsumowanie roku.",
        "Pisanie: umiem napisać tekst o swojej przyszłości i wiadomość na koniec roku.",
        "Gramatyka: znam formy żeńskie zawodów, werden, czas przyszły Futur I oraz würde, hätte, wäre.",
        "Słownictwo: znam słowa o zawodach, miejscach pracy, przyszłości i końcu roku szkolnego.",
      ],
    },
  ],
};
