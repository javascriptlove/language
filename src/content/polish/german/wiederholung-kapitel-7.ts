import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-7",
  chapter: 7,
  number: 4,
  title: "Wiederholung – Kapitel 7",
  titlePl: "Powtórka z rozdziału 7",
  intro:
    "Czas na powtórkę o ubraniach i zakupach! Zrób ją dzień lub dwa po skończeniu rozdziału 7: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: ubrania, kolory i tragen – „Was ziehst du an?”, ceny i rozmowa w sklepie – „Was kostet das?”, biernik i Wie findest du …? – „Ein Geschenk für Anna”.",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać ubrania i kolory i opisać, co masz na sobie,",
        "zapytać o cenę i podać ją po niemiecku,",
        "poradzić sobie w sklepie: przymierzyć, poprosić o inny rozmiar, zapłacić,",
        "używać biernika: den, einen, keinen, meinen – i zaimków ihn / sie / es,",
        "wyrazić opinię: Ich finde ihn cool.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: kolory, tragen i anziehen",
      paragraphs: [
        "Po **sein** kolor nie ma końcówki: Die Jacke **ist blau**. Die Schuhe **sind blau**. Pytanie: **Welche Farbe hat …?** Odcienie: hellblau, dunkelgrün. → lekcja „Was ziehst du an?”",
        "**tragen** zmienia a → ä: du **trägst**, er **trägt**. **anziehen** jest rozdzielny: Ich **ziehe** eine Jacke **an**. **die Hose** i **die Jeans** to liczba pojedyncza: Die Hose **ist** schwarz. → lekcja „Was ziehst du an?”",
      ],
      table: {
        headers: ["zdanie", "po polsku"],
        rows: [
          { cells: ["Welche Farbe hat der Pulli? – Er ist grau.", "Jakiego koloru jest sweter? – Jest szary."], speak: "Welche Farbe hat der Pulli? Er ist grau." },
          { cells: ["Meine Lieblingsfarbe ist Grün.", "Mój ulubiony kolor to zielony."], speak: "Meine Lieblingsfarbe ist Grün." },
          { cells: ["Paul trägt ein Hemd.", "Paul ma na sobie koszulę."], speak: "Paul trägt ein Hemd." },
          { cells: ["Es ist kalt. Ich ziehe eine Mütze an.", "Jest zimno. Zakładam czapkę."], speak: "Es ist kalt. Ich ziehe eine Mütze an." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: ceny i rozmowa w sklepie",
      paragraphs: [
        "Ceny: 12,99 € = **zwölf Euro neunundneunzig**, 0,80 € = **achtzig Cent**, 120 € = **hundertzwanzig Euro**. **Was kostet** die Jacke? – **Was kosten** die Schuhe? → lekcja „Was kostet das?”",
        "Do sprzedawcy mówisz na **Sie**: **Haben Sie** das auch in Blau? **zu** + przymiotnik = „za”: zu groß, zu teuer, **ein bisschen zu** klein, **viel zu** teuer. → lekcja „Was kostet das?”",
      ],
      table: {
        headers: ["zwrot", "po polsku"],
        rows: [
          { cells: ["Ich suche eine Jacke.", "Szukam kurtki."], speak: "Ich suche eine Jacke." },
          { cells: ["Kann ich sie anprobieren?", "Mogę ją przymierzyć?"], speak: "Kann ich sie anprobieren?" },
          { cells: ["Haben Sie sie eine Nummer größer?", "Czy ma pan / pani ją o numer większą?"], speak: "Haben Sie sie eine Nummer größer?" },
          { cells: ["Ich nehme sie.", "Biorę ją."], speak: "Ich nehme sie." },
          { cells: ["Das macht 35 Euro. Bar oder mit Karte?", "Razem 35 euro. Gotówką czy kartą?"], speak: "Das macht fünfunddreißig Euro. Bar oder mit Karte?" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: biernik (Akkusativ)",
      paragraphs: [
        "Biernik (wen? was?) stoi po haben, brauchen, kaufen, nehmen, möchten, suchen, finden, tragen, mögen – i po **für**. **Zmienia się tylko rodzaj męski**: den, einen, keinen, meinen. Po **sein** – nigdy biernik: Das ist **ein** Pulli. → lekcja „Ein Geschenk für Anna”",
        "Opinia: **Wie findest du den Rock?** – Ich finde **ihn** cool. Zaimki: für **mich / dich / ihn / sie / uns / euch**. → lekcja „Ein Geschenk für Anna”",
      ],
      table: {
        headers: ["", "der", "die", "das", "l. mn."],
        rows: [
          { cells: ["mianownik", "der / ein / kein", "die / eine / keine", "das / ein / kein", "die / – / keine"], speak: "der, die, das" },
          { cells: ["biernik", "den / einen / keinen", "die / eine / keine", "das / ein / kein", "die / – / keine"], speak: "den, die, das" },
          { cells: ["zaimek", "ihn", "sie", "es", "sie"], speak: "ihn, sie, es, sie" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Was ziehst du an?",
          items: [
            { text: "der Pulli, der Rock, der Schal", pl: "sweter, spódnica, szalik" },
            { text: "die Hose, die Jeans, die Jacke, die Mütze", pl: "spodnie, dżinsy, kurtka, czapka" },
            { text: "das T-Shirt, das Hemd, das Kleid", pl: "koszulka, koszula, sukienka" },
            { text: "die Schuhe, die Turnschuhe, die Socken", pl: "buty, tenisówki, skarpetki" },
            { text: "rot, blau, grün, gelb, schwarz, weiß", pl: "czerwony, niebieski, zielony, żółty, czarny, biały" },
            { text: "grau, braun, rosa, lila, orange, bunt", pl: "szary, brązowy, różowy, fioletowy, pomarańczowy, kolorowy" },
          ],
        },
        {
          title: "Was kostet das?",
          items: [
            { text: "Was kostet / kosten …?", pl: "Ile kosztuje / kosztują …?" },
            { text: "teuer ↔ billig", pl: "drogi ↔ tani" },
            { text: "im Angebot", pl: "w promocji" },
            { text: "die Größe, anprobieren, passen", pl: "rozmiar, przymierzać, pasować" },
            { text: "zu groß / zu klein / zu teuer", pl: "za duży / za mały / za drogi" },
            { text: "das Taschengeld", pl: "kieszonkowe" },
          ],
        },
        {
          title: "Ein Geschenk für Anna",
          items: [
            { text: "das Geschenk, der Geburtstag", pl: "prezent, urodziny" },
            { text: "brauchen, kaufen, schenken", pl: "potrzebować, kupować, dawać w prezencie" },
            { text: "Wie findest du …?", pl: "Jak ci się podoba …?" },
            { text: "toll, lustig, langweilig, hässlich, praktisch", pl: "świetny, zabawny, nudny, brzydki, praktyczny" },
            { text: "der Flohmarkt", pl: "pchli targ" },
            { text: "Geht es auch billiger?", pl: "A może taniej?" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Jan braucht neue Schuhe",
      titlePl: "Jan potrzebuje nowych butów",
      context: "Sobota. Mama, Julia i Jan są w sklepie obuwniczym. Jan potrzebuje nowych butów do deskorolki.",
      cast: { Mama: "f", Jan: "m", Julia: "f", "Verkäuferin": "f" },
      lines: [
        { speaker: "Verkäuferin", text: "Guten Tag! Kann ich Ihnen helfen?", pl: "Dzień dobry! Mogę pani pomóc?" },
        { speaker: "Mama", text: "Ja, mein Sohn braucht Turnschuhe. Seine Schuhe sind kaputt.", pl: "Tak, mój syn potrzebuje butów sportowych. Jego buty są zniszczone." },
        { speaker: "Verkäuferin", text: "Welche Größe hast du?", pl: "Jaki masz rozmiar?" },
        { speaker: "Jan", text: "Neununddreißig. Ich möchte die Schuhe da – in Schwarz. Was kosten sie?", pl: "Trzydzieści dziewięć. Chcę te buty – czarne. Ile kosztują?" },
        { speaker: "Verkäuferin", text: "Sie kosten neunundachtzig Euro.", pl: "Kosztują osiemdziesiąt dziewięć euro." },
        { speaker: "Mama", text: "Neunundachtzig? Das ist viel zu teuer, Jan.", pl: "Osiemdziesiąt dziewięć? To o wiele za drogo, Janie." },
        { speaker: "Julia", text: "Schau mal, Jan, die Schuhe hier in Grau sind im Angebot. Wie findest du sie?", pl: "Popatrz, Janie, te szare tutaj są w promocji. Jak ci się podobają?" },
        { speaker: "Jan", text: "Hm, ich finde sie ein bisschen langweilig… Aber okay, ich probiere sie an.", pl: "Hm, moim zdaniem są trochę nudne… Ale dobrze, przymierzę je." },
        { speaker: "Jan", text: "Oh, sie passen super! Und sie sind sehr bequem.", pl: "O, świetnie pasują! I są bardzo wygodne." },
        { speaker: "Mama", text: "Gut, wir nehmen sie. Was kosten sie?", pl: "Dobrze, bierzemy je. Ile kosztują?" },
        { speaker: "Verkäuferin", text: "Nur neunundvierzig Euro. Zahlen Sie bar oder mit Karte?", pl: "Tylko czterdzieści dziewięć euro. Płaci pani gotówką czy kartą?" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-7-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "W sklepie z butami",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Dlaczego Jan potrzebuje nowych butów?", options: ["bo są za małe", "bo stare są zniszczone", "bo są brzydkie"], answer: 1 },
          { prompt: "Jaki rozmiar nosi Jan?", options: ["38", "39", "49"], answer: 1 },
          { prompt: "Ile kosztują czarne buty?", options: ["89 €", "49 €", "98 €"], answer: 0 },
          { prompt: "Co Jan sądzi o szarych butach?", options: ["że są super", "że są trochę nudne", "że są za drogie"], answer: 1 },
          { prompt: "Jakie buty w końcu kupują?", options: ["czarne", "szare", "białe"], answer: 1 },
          { prompt: "Ile płaci mama?", options: ["49 €", "39 €", "89 €"], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-7-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Der Rock kostet vierundzwanzig Euro.", options: ["Spódnica kosztuje 42 €.", "Spódnica kosztuje 24 €.", "Sweter kosztuje 24 €."], answer: 1 },
          { audio: "Die Hose ist ein bisschen zu lang.", options: ["Spodnie są trochę za długie.", "Spodnie są o wiele za krótkie.", "Spodnie są trochę za drogie."], answer: 0 },
          { audio: "Heute trägt Anna eine Jacke in Gelb.", options: ["Dziś Anna kupuje żółtą kurtkę.", "Dziś Anna ma na sobie zieloną kurtkę.", "Dziś Anna ma na sobie żółtą kurtkę."], answer: 2 },
          { audio: "Haben Sie das Kleid auch in Rot?", options: ["Czy ma pan / pani tę sukienkę też w kolorze czerwonym?", "Czy ta sukienka jest czerwona?", "Ma pani czerwoną sukienkę."], answer: 0 },
          { audio: "Ich finde ihn hässlich.", options: ["Nie mogę go znaleźć.", "Moim zdaniem jest brzydki.", "Moim zdaniem jest śmieszny."], answer: 1 },
          { audio: "Das macht sieben Euro achtzig.", options: ["Razem 8,70 €.", "Razem 7,18 €.", "Razem 7,80 €."], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-7-4-accusative",
        kind: "fill",
        skill: "Gramatyka",
        title: "Biernik",
        instruction: "Uzupełnij rodzajnik, przeczenie albo zaimek w bierniku.",
        items: [
          { before: "Ich brauche", after: "Schal.", answers: ["einen"], hint: "der Schal – jakiś" },
          { before: "Julia nimmt", after: "Jacke.", answers: ["die"], hint: "die Jacke – tę" },
          { before: "Lukas hat", after: "Mütze.", answers: ["keine"], hint: "die Mütze – nie ma" },
          { before: "Wie findest du", after: "Pulli?", answers: ["den"], hint: "der Pulli" },
          { before: "Der Pulli? Ich finde", after: "toll!", answers: ["ihn"], hint: "der Pulli" },
          { before: "Das Geschenk ist für", after: "Vater.", answers: ["meinen"], hint: "mein + der Vater" },
          { before: "Ist der Kuchen für", after: "? – Ja, für dich!", answers: ["mich"], hint: "dla mnie" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-7-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Spodnie są czarne.", options: ["Die Hose sind schwarz.", "Die Hose ist schwarz.", "Die Hosen ist schwarze."], answer: 1, explanation: "die Hose to po niemiecku liczba pojedyncza." },
          { prompt: "Kurtka jest niebieska.", options: ["Die Jacke ist blaue.", "Die Jacke ist blau.", "Die Jacke hat blau."], answer: 1, explanation: "Po sein kolor nie ma końcówki." },
          { prompt: "Ile kosztują skarpetki?", options: ["Was kostet die Socken?", "Was kosten die Socken?", "Wie viel kostet Socken?"], answer: 1 },
          { prompt: "Kupuję sweter.", options: ["Ich kaufe der Pulli.", "Ich kaufe einen Pulli.", "Ich kaufe ein Pulli."], answer: 1, explanation: "kaufen + biernik: der Pulli → einen Pulli." },
          { prompt: "To jest sweter.", options: ["Das ist einen Pulli.", "Das ist ein Pulli.", "Das ist den Pulli."], answer: 1, explanation: "Po sein nie ma biernika." },
          { prompt: "Paul ma na sobie koszulę.", options: ["Paul tragt ein Hemd.", "Paul trägt ein Hemd.", "Paul trägst ein Hemd."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-7-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["Farbe", "Jacke", "Welche", "die", "hat"], answer: "Welche Farbe hat die Jacke?", pl: "Jakiego koloru jest kurtka?" },
          { words: ["die", "Was", "Schuhe", "kosten"], answer: "Was kosten die Schuhe?", pl: "Ile kosztują buty?" },
          { words: ["anprobieren", "ihn", "ich", "Kann"], answer: "Kann ich ihn anprobieren?", pl: "Mogę go przymierzyć?" },
          { words: ["sie", "lustig", "finde", "Ich"], answer: "Ich finde sie lustig.", pl: "Moim zdaniem jest zabawna." },
          { words: ["meinen", "Das", "Bruder", "ist", "für"], answer: "Das ist für meinen Bruder.", pl: "To dla mojego brata." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-7-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 7",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 7 jest zaliczony!",
        items: [
          { prompt: "**das Kleid** to po polsku …", options: ["koszula", "sukienka", "spódnica"], answer: 1 },
          { prompt: "**gelb** to …", options: ["żółty", "zielony", "szary"], answer: 0 },
          { prompt: "Du ___ eine schöne Jacke.", options: ["tragst", "trägst", "trägt"], answer: 1 },
          { prompt: "Jak powiesz 15,50 €?", options: ["fünfzehn Euro fünfzig", "fünfzig Euro fünfzehn", "fünf Euro fünfzig"], answer: 0, speakOptions: true },
          { prompt: "Was ___ die Turnschuhe?", options: ["kostet", "kosten", "kostest"], answer: 1 },
          { prompt: "Kurtka jest za duża. Mówisz: …", options: ["Sie ist zu klein.", "Sie ist zu groß.", "Sie ist zu teuer."], answer: 1 },
          { prompt: "Wir kaufen ___ Kuchen. (der Kuchen)", options: ["einen", "ein", "eine"], answer: 0 },
          { prompt: "Wie findest du die Mütze? – Ich finde ___ cool.", options: ["ihn", "es", "sie"], answer: 2 },
          { prompt: "Das ist für ___ . (dla ciebie)", options: ["du", "dich", "dir"], answer: 1 },
          { prompt: "Co to jest **der Flohmarkt**?", options: ["sklep sportowy", "pchli targ", "centrum handlowe"], answer: 1, explanation: "Der Flohmarkt – pchli targ, np. w Mauerparku (lekcja „Ein Geschenk für Anna”)." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-7-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Moje zakupy",
        instruction:
          "Opisz swoje zakupy ubraniowe (8–10 zdań): czego potrzebujesz, co przymierzasz, ile to kosztuje i co w końcu kupujesz. Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "napisz, czego potrzebujesz – w bierniku: Ich brauche einen / eine / ein …",
          "opisz ubrania kolorami",
          "podaj co najmniej dwie ceny po niemiecku",
          "napisz, co jest nie tak (zu groß, zu teuer…)",
          "wyraź opinię: Ich finde ihn / sie / es …",
          "napisz, co kupujesz: Ich nehme …",
        ],
        placeholder: "Ich brauche …",
        model:
          "Ich brauche einen Pulli für den Winter. Am Samstag gehe ich mit Anna in ein Geschäft. Ein Pulli ist rot und kostet vierzig Euro – das ist zu teuer für mich. Ein anderer Pulli ist grau. Ich finde ihn langweilig. Dann sehe ich einen Pulli in Dunkelblau. Er ist im Angebot und kostet nur zweiundzwanzig Euro neunundneunzig. Ich probiere ihn an. Er ist ein bisschen zu groß, aber die Verkäuferin hat ihn auch in S. Er passt! Ich finde ihn super und ich nehme ihn.",
        modelPl:
          "Potrzebuję swetra na zimę. W sobotę idę z Anną do sklepu. Jeden sweter jest czerwony i kosztuje czterdzieści euro – to dla mnie za drogo. Inny sweter jest szary. Moim zdaniem jest nudny. Potem widzę sweter w kolorze ciemnoniebieskim. Jest w promocji i kosztuje tylko dwadzieścia dwa euro dziewięćdziesiąt dziewięć. Przymierzam go. Jest trochę za duży, ale sprzedawczyni ma go też w S. Pasuje! Moim zdaniem jest super i go biorę.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem ceny i krótkie rozmowy w sklepie.",
        "Mówienie: umiem kupić ubranie – zapytać o cenę, przymierzyć, poprosić o inny rozmiar i zapłacić.",
        "Czytanie: rozumiem ulotkę z cenami i krótki tekst o zakupach.",
        "Pisanie: umiem opisać swoje ubrania i zakupy w kilku zdaniach.",
        "Gramatyka: znam biernik (den, einen, keinen, ihn), tragen (du trägst) i Was kostet / kosten.",
        "Słownictwo: znam ubrania, kolory i zwroty potrzebne w sklepie.",
      ],
    },
  ],
};
