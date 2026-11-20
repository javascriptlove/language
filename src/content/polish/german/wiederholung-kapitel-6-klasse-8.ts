import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-6",
  chapter: 6,
  number: 4,
  title: "Wiederholung – Kapitel 6",
  titlePl: "Powtórka z rozdziału 6",
  intro:
    "Projekt o mediach się kończy – czas na powtórkę! Zrób ją dzień lub dwa po skończeniu rozdziału 6: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: telefon, internet i weil („Ohne Handy geht nichts”), opinie i dass („Ich finde, dass …”) albo stopniowanie przymiotników („Welche App ist besser?”).",
  blocks: [
    {
      type: "goals",
      items: [
        "mówić o telefonie i internecie oraz o tym, jak często i jak długo z nich korzystasz,",
        "uzasadniać zdaniem z weil i wyrażać opinię zdaniem z dass – z czasownikiem na końcu,",
        "zgadzać się i nie zgadzać: Da hast du recht. Ich sehe das anders,",
        "porównywać: billiger als, so gut wie, am besten,",
        "odróżniać das od dass.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: weil i dass",
      paragraphs: [
        "Po **weil** (bo, ponieważ) i **dass** (że) odmieniony czasownik stoi **na samym końcu**, a przed nimi zawsze jest **przecinek**: Ich bleibe zu Hause, **weil** ich krank **bin**. Ich finde, **dass** Handys nützlich **sind**. → lekcje „Ohne Handy geht nichts” i „Ich finde, dass …”",
        "Z czasownikiem modalnym i w Perfekcie na końcu stoi czasownik odmieniony: …, weil ich lernen **muss**. …, dass er es vergessen **hat**. Czasownik rozdzielny się skleja: …, weil ich früh **aufstehe**.",
        "**denn** też znaczy „bo”, ale ma zwykły szyk: …, **denn** ich **bin** krank. **das** (rodzajnik / to) i **dass** (że) brzmią tak samo – różnią się tylko pisownią.",
      ],
      table: {
        headers: ["spójnik", "przykład", "po polsku"],
        rows: [
          { cells: ["denn", "Ich komme nicht, denn ich bin krank.", "Nie przyjdę, bo jestem chory."], speak: "Ich komme nicht, denn ich bin krank." },
          { cells: ["weil", "Ich komme nicht, weil ich krank bin.", "Nie przyjdę, bo jestem chory."], speak: "Ich komme nicht, weil ich krank bin." },
          { cells: ["weil", "…, weil ich lernen muss.", "…, bo muszę się uczyć."], speak: "Ich komme nicht, weil ich lernen muss." },
          { cells: ["dass", "Ich glaube, dass Jan zu jung ist.", "Myślę, że Jan jest za mały."], speak: "Ich glaube, dass Jan zu jung ist." },
          { cells: ["dass", "Paul sagt, dass Lukas es vergessen hat.", "Paul mówi, że Lukas o tym zapomniał."], speak: "Paul sagt, dass Lukas es vergessen hat." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: opinia i częstotliwość",
      paragraphs: [
        "Opinia: **Ich finde / glaube / denke, dass …**, **Meiner Meinung nach** + czasownik (Meiner Meinung nach **brauchen wir** Regeln), **Ich bin dafür / dagegen**, **Es ist wichtig, dass …** Reakcje: **Da hast du recht. Das stimmt (nicht). Ich sehe das anders. Einverstanden.** → lekcja „Ich finde, dass …”",
        "**Wie oft?** immer, oft, manchmal, selten, nie; jeden Tag, jeden Abend, einmal pro Woche. **Wie lange?** eine Stunde, drei Stunden pro Tag, den ganzen Tag. → lekcja „Ohne Handy geht nichts”",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: stopniowanie",
      paragraphs: [
        "Stopień wyższy: **-er** (+ często przegłos): billig**er**, **ä**lter, gr**ö**ßer, j**ü**nger, teurer. „niż” = **als**: Das Nova ist billiger **als** das Phonix. „tak … jak” = **so … wie**: so gut **wie**, nicht so teuer **wie**.",
        "Stopień najwyższy: **am … -sten** (po -t, -d, -s, -z: **-esten**): am schnellsten, am wichtigsten, am ältesten. Przed rzeczownikiem: **die beste** App, **das beste** Handy. → lekcja „Welche App ist besser?”",
      ],
      table: {
        headers: ["stopień równy", "stopień wyższy", "stopień najwyższy"],
        rows: [
          { cells: ["billig", "billiger", "am billigsten"], speak: "billig, billiger, am billigsten" },
          { cells: ["alt", "älter", "am ältesten"], speak: "alt, älter, am ältesten" },
          { cells: ["teuer", "teurer", "am teuersten"], speak: "teuer, teurer, am teuersten" },
          { cells: ["gut", "besser", "am besten"], speak: "gut, besser, am besten" },
          { cells: ["viel", "mehr", "am meisten"], speak: "viel, mehr, am meisten" },
          { cells: ["gern", "lieber", "am liebsten"], speak: "gern, lieber, am liebsten" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Ohne Handy geht nichts",
          items: [
            { text: "das Handy, das Smartphone, das Festnetztelefon", pl: "komórka, smartfon, telefon stacjonarny" },
            { text: "der Akku ist leer, das Handy aufladen", pl: "bateria jest rozładowana, ładować telefon" },
            { text: "das WLAN, das Passwort, online / offline", pl: "Wi-Fi, hasło, online / offline" },
            { text: "chatten, posten, Videos schauen, herunterladen", pl: "czatować, wrzucać, oglądać filmiki, ściągać" },
            { text: "die Bildschirmzeit, der Wecker", pl: "czas przed ekranem, budzik" },
          ],
        },
        {
          title: "Ich finde, dass …",
          items: [
            { text: "die Meinung, die Diskussion, die Regel", pl: "opinia, dyskusja, zasada" },
            { text: "Ich bin dafür / dagegen.", pl: "Jestem za / przeciw." },
            { text: "verboten / erlaubt, nützlich, stören", pl: "zakazany / dozwolony, przydatny, przeszkadzać" },
            { text: "abstimmen, die Mehrheit", pl: "głosować, większość" },
            { text: "Da hast du recht. – Ich sehe das anders.", pl: "Masz rację. – Ja widzę to inaczej." },
          ],
        },
        {
          title: "Welche App ist besser?",
          items: [
            { text: "billig / teuer, der Preis, kosten", pl: "tani / drogi, cena, kosztować" },
            { text: "die Kamera, der Akku, der Bildschirm", pl: "aparat, bateria, ekran" },
            { text: "kostenlos, die Werbung, im Monat", pl: "darmowy, reklama, miesięcznie" },
            { text: "testen, vergleichen, das Ergebnis", pl: "testować, porównywać, wynik" },
            { text: "das Taschengeld, trotzdem", pl: "kieszonkowe, mimo to" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Lukas sucht sein Handy",
      titlePl: "Lukas szuka komórki",
      context: "Ostatni dzień projektu o mediach. Za chwilę klasa ma prezentację, a Lukas wpada do sali kompletnie przerażony.",
      cast: { Lukas: "m", Anna: "f", Paul: "m", Julia: "f", Leon: "m" },
      lines: [
        { speaker: "Lukas", text: "Leute, Katastrophe! Mein Handy ist weg!", pl: "Ludzie, katastrofa! Zniknęła mi komórka!" },
        { speaker: "Anna", text: "Ganz ruhig. Wann hast du es zum letzten Mal gesehen?", pl: "Spokojnie. Kiedy ostatni raz ją widziałeś?" },
        { speaker: "Lukas", text: "In der Pause. Ich glaube, dass ich es auf die Bank gelegt habe.", pl: "Na przerwie. Myślę, że położyłem ją na ławce." },
        { speaker: "Paul", text: "Vielleicht ist das gar nicht so schlecht. Du bist doch am längsten online von uns allen!", pl: "Może to wcale nie takie złe. Przecież jesteś najdłużej online z nas wszystkich!" },
        { speaker: "Lukas", text: "Sehr witzig, Paul. Ohne Handy geht nichts, weil alle meine Fotos darauf sind!", pl: "Bardzo śmieszne, Paul. Bez komórki ani rusz, bo są na niej wszystkie moje zdjęcia!" },
        { speaker: "Julia", text: "Kein Problem. Ich rufe dich einfach an – dann hören wir es.", pl: "Żaden problem. Po prostu do ciebie zadzwonię – wtedy ją usłyszymy." },
        { speaker: "Leon", text: "Psst! Hört ihr das? Das Klingeln ist ganz nah.", pl: "Ćśś! Słyszycie? Dzwonek jest bardzo blisko." },
        { speaker: "Anna", text: "Lukas … ich glaube, dass es in deiner Kappe ist!", pl: "Lukas… myślę, że jest w twojej czapce!" },
        { speaker: "Lukas", text: "In meiner Kappe? … Oh. Stimmt. Da ist es.", pl: "W mojej czapce? … O. Faktycznie. Tu jest." },
        { speaker: "Julia", text: "Unglaublich! Niemand ist so chaotisch wie du, Lukas!", pl: "Niewiarygodne! Nikt nie jest tak roztrzepany jak ty, Lukas!" },
        { speaker: "Lukas", text: "Aber auch niemand ist so witzig wie ich!", pl: "Ale też nikt nie jest tak zabawny jak ja!" },
        { speaker: "Leon", text: "Ich finde, dass das die beste Geschichte für unsere Präsentation ist!", pl: "Uważam, że to najlepsza historia do naszej prezentacji!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-6-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Wo ist das Handy?",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Gdzie według Lukasa zostawił telefon?", options: ["w domu", "na ławce na przerwie", "w autobusie"], answer: 1 },
          { prompt: "Dlaczego Paul mówi, że to może nie takie złe?", options: ["bo Lukas jest najdłużej online", "bo telefon był stary", "bo Lukas ma drugi telefon"], answer: 0 },
          { prompt: "Dlaczego telefon jest dla Lukasa tak ważny?", options: ["bo ma na nim wszystkie zdjęcia", "bo był bardzo drogi", "bo to prezent od babci"], answer: 0 },
          { prompt: "Jak przyjaciele szukają telefonu?", options: ["Julia do niego dzwoni", "pytają nauczycielkę", "szukają w szatni"], answer: 0 },
          { prompt: "Gdzie był telefon?", options: ["w plecaku", "w czapce Lukasa", "pod ławką"], answer: 1 },
          { prompt: "Co mówi Julia?", options: ["Nikt nie jest tak roztrzepany jak ty!", "Jesteś najmądrzejszy!", "Kup sobie nowy telefon!"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-6-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Ich mache das Handy aus, weil ich lernen muss.", options: ["Wyłączam telefon, bo muszę się uczyć.", "Włączam telefon, bo chcę się uczyć.", "Uczę się z telefonem."], answer: 0 },
          { audio: "Meiner Meinung nach ist das unfair.", options: ["Moim zdaniem to jest w porządku.", "Moim zdaniem to niesprawiedliwe.", "Mama uważa, że to niesprawiedliwe."], answer: 1 },
          { audio: "Ich bin einmal pro Woche online.", options: ["Jestem online raz w tygodniu.", "Jestem online cały tydzień.", "Jestem online godzinę dziennie."], answer: 0 },
          { audio: "Die Kamera ist besser als beim alten Handy.", options: ["Aparat jest gorszy niż w starym telefonie.", "Aparat jest lepszy niż w starym telefonie.", "Aparat jest taki sam jak w starym telefonie."], answer: 1 },
          { audio: "Am liebsten schaue ich Videos.", options: ["Najbardziej lubię oglądać filmiki.", "Rzadko oglądam filmiki.", "Wolę czytać niż oglądać filmiki."], answer: 0 },
          { audio: "Ich bin dafür.", options: ["Jestem przeciw.", "Jestem za.", "Jestem tutaj."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-6-4-fill",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij",
        instruction: "Uzupełnij brakujące słowo.",
        items: [
          { before: "Ich kann nicht telefonieren, weil mein Akku leer", after: ".", answers: ["ist"], hint: "sein" },
          { before: "Lukas braucht einen Wecker, weil er sonst nicht", after: ".", answers: ["aufsteht"], hint: "aufstehen" },
          { before: "Ich finde,", after: "Handys in der Pause erlaubt sein sollen.", answers: ["dass"], hint: "że" },
          { before: "Mama glaubt, dass Jan mit dem Handy zu viel", after: ".", answers: ["spielt"], hint: "spielen" },
          { before: "Das Nova ist", after: "als das Phonix.", answers: ["billiger"], hint: "billig" },
          { before: "Paul ist so groß", after: "Leon.", answers: ["wie"], hint: "tak … jak" },
          { before: "Vokabelstar ist am", after: ".", answers: ["teuersten"], hint: "teuer" },
          { before: "Ich spiele", after: "Basketball als Fußball.", answers: ["lieber"], hint: "gern → ?" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-6-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Zostaję w domu, bo jestem chory.", options: ["Ich bleibe zu Hause, weil ich bin krank.", "Ich bleibe zu Hause, weil ich krank bin.", "Ich bleibe zu Hause weil krank ich bin."], answer: 1, explanation: "Po weil czasownik na końcu – i przecinek przed weil." },
          { prompt: "Uważam, że to dobry pomysł.", options: ["Ich finde, das das eine gute Idee ist.", "Ich finde, dass das eine gute Idee ist.", "Ich finde, dass das ist eine gute Idee."], answer: 1, explanation: "„że” = dass, „to” = das, czasownik na końcu." },
          { prompt: "Moim zdaniem potrzebujemy zasad.", options: ["Meiner Meinung nach wir brauchen Regeln.", "Meiner Meinung nach brauchen wir Regeln.", "Meine Meinung nach brauchen wir Regeln."], answer: 1, explanation: "Meiner Meinung nach zajmuje 1. miejsce, więc czasownik zaraz za nim." },
          { prompt: "Mój brat jest starszy ode mnie.", options: ["Mein Bruder ist älter wie ich.", "Mein Bruder ist mehr alt als ich.", "Mein Bruder ist älter als ich."], answer: 2, explanation: "stopień wyższy + als, bez „mehr”." },
          { prompt: "Ten telefon jest najlepszy.", options: ["Das Handy ist am besten.", "Das Handy ist am gutesten.", "Das Handy ist am besser."], answer: 0 },
          { prompt: "Wolę herbatę.", options: ["Ich trinke gerner Tee.", "Ich trinke lieber Tee.", "Ich trinke mehr gern Tee."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-6-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["leer", "ist", "mein Akku", "weil", "Ich rufe dich an,"], answer: "Ich rufe dich an, weil mein Akku leer ist.", pl: "Dzwonię, bo rozładowuje mi się bateria." },
          { words: ["nützlich", "sind", "Handys", "dass", "Ich glaube,"], answer: "Ich glaube, dass Handys nützlich sind.", pl: "Myślę, że telefony są przydatne." },
          { words: ["brauchen", "Regeln", "wir", "Meiner Meinung nach"], answer: "Meiner Meinung nach brauchen wir Regeln.", pl: "Moim zdaniem potrzebujemy zasad." },
          { words: ["als", "billiger", "ist", "Das Nova", "das Phonix"], answer: "Das Nova ist billiger als das Phonix.", pl: "Nova jest tańszy niż Phonix." },
          { words: ["online", "jeden Tag", "zwei Stunden", "bin", "Ich"], answer: "Ich bin jeden Tag zwei Stunden online.", pl: "Codziennie jestem online dwie godziny." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-6-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 6",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 6 jest zaliczony!",
        items: [
          { prompt: "**Der Akku ist leer.** znaczy …", options: ["Bateria jest rozładowana.", "Ekran jest pusty.", "Nie ma Wi-Fi."], answer: 0 },
          { prompt: "**kostenlos** to …", options: ["drogi", "darmowy", "zepsuty"], answer: 1 },
          { prompt: "Ich komme nicht, weil ich krank ___ .", options: ["bin", "habe", "ist"], answer: 0 },
          { prompt: "Ich lerne, weil ich morgen einen Test ___ .", options: ["habe", "hat", "haben"], answer: 0 },
          { prompt: "Ich finde, ___ das Handy nützlich ist.", options: ["das", "dass", "weil"], answer: 1 },
          { prompt: "Ich denke, ___ Lukas zu viel online ist.", options: ["dass", "denn", "als"], answer: 0 },
          { prompt: "Mój brat jest młodszy ode mnie: Mein Bruder ist ___ als ich.", options: ["junger", "jünger", "jüngster"], answer: 1 },
          { prompt: "Die Kamera ist so gut ___ beim Phonix.", options: ["als", "wie", "dass"], answer: 1 },
          { prompt: "Stopień najwyższy od **alt**:", options: ["am altesten", "am ältsten", "am ältesten"], answer: 2 },
          { prompt: "Jak powiesz, że się nie zgadzasz?", options: ["Da hast du recht.", "Ich sehe das anders.", "Einverstanden."], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-6-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Media w moim życiu",
        instruction:
          "Opowiedz o mediach w swoim życiu (8–10 zdań): co robisz w telefonie, jak często i jak długo, co jest dla ciebie najważniejsze i co sądzisz o zakazie telefonów w szkole. Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "napisz, jak często i jak długo jesteś online: jeden Tag, selten, zwei Stunden pro Tag",
          "użyj co najmniej dwóch zdań z weil",
          "użyj co najmniej dwóch zdań z dass i Meiner Meinung nach",
          "porównaj coś: … ist besser / billiger als …, am liebsten …",
          "uważaj na das i dass!",
        ],
        placeholder: "Ich bin jeden Tag … online …",
        model:
          "Ich bin jeden Tag ungefähr zwei Stunden online. Am liebsten chatte ich mit meinen Freunden, weil das schnell und lustig ist. Videos schaue ich lieber als Fernsehen. Fotos poste ich selten, weil ich nicht alles zeigen möchte. Am wichtigsten ist für mich der Messenger. Meiner Meinung nach ist ein totales Handyverbot in der Schule nicht gut. Ich finde aber, dass das Handy im Unterricht aus sein muss. Und ich glaube, dass ein Wochenende ohne Handy manchmal eine gute Idee ist – aber nicht jedes Wochenende!",
        modelPl:
          "Codziennie jestem online mniej więcej dwie godziny. Najbardziej lubię czatować z przyjaciółmi, bo to szybkie i zabawne. Filmiki oglądam chętniej niż telewizję. Zdjęcia wrzucam rzadko, bo nie chcę wszystkiego pokazywać. Najważniejszy jest dla mnie komunikator. Moim zdaniem całkowity zakaz telefonów w szkole nie jest dobry. Uważam jednak, że na lekcji telefon musi być wyłączony. I myślę, że weekend bez telefonu to czasem dobry pomysł – ale nie co weekend!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem, gdy ktoś mówi o telefonie, internecie i swoich opiniach.",
        "Mówienie: umiem wyrazić opinię, zgodzić się i nie zgodzić oraz porównać dwie rzeczy.",
        "Czytanie: rozumiem dziennik mediów, komentarze na forum i wyniki ankiety.",
        "Pisanie: umiem napisać komentarz z opinią i uzasadnieniem.",
        "Gramatyka: znam zdania z weil i dass, stopniowanie przymiotników oraz als i so … wie.",
        "Słownictwo: znam słowa o telefonie, internecie, dyskusji i zakupach.",
      ],
    },
  ],
};
