import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-6",
  chapter: 6,
  number: 4,
  title: "Wiederholung – Kapitel 6",
  titlePl: "Powtórka z rozdziału 6",
  intro:
    "Czas na powtórkę o twoim domu! Zrób ją dzień lub dwa po skończeniu rozdziału 6: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: pomieszczenia, złożenia i er / sie / es – „Unsere Wohnung”, meble i przyimki z celownikiem – „Mein Zimmer”, liegen / stehen / hängen i szukanie – „Wo ist mein Handy?”.",
  blocks: [
    {
      type: "goals",
      items: [
        "opisać swoje mieszkanie albo dom i swój pokój,",
        "rozumieć złożenia i dobierać zaimek er / sie / es według rodzajnika,",
        "mówić, gdzie coś jest: in, auf, unter, über, neben, hinter, vor, zwischen, an + dem / der,",
        "rozróżniać liegen, stehen i hängen,",
        "poprosić o pomoc w szukaniu: Ich suche meinen …",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: złożenia i er / sie / es",
      paragraphs: [
        "Rodzajnik złożenia daje **ostatnia część**, a znaczenie czytasz od końca: das Kind + **das Zimmer** = **das** Kinderzimmer, die Küche + **der Tisch** = **der** Küchentisch. → lekcja „Unsere Wohnung”",
        "Zaimek wybierasz według **niemieckiego** rodzajnika: der → **er**, die → **sie**, das → **es**, liczba mnoga → **sie**. Das Zimmer? **Es** ist klein. Die Tür? **Sie** ist neu. → lekcja „Unsere Wohnung”",
      ],
      table: {
        headers: ["rzeczownik", "zaimek", "przykład"],
        rows: [
          { cells: ["der Balkon", "er", "Er ist klein, aber gemütlich."], speak: "Der Balkon? Er ist klein, aber gemütlich." },
          { cells: ["die Küche", "sie", "Sie ist links."], speak: "Die Küche? Sie ist links." },
          { cells: ["das Wohnzimmer", "es", "Es ist groß und hell."], speak: "Das Wohnzimmer? Es ist groß und hell." },
          { cells: ["die Zimmer", "sie", "Sie sind ruhig."], speak: "Die Zimmer? Sie sind ruhig." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: Wo? – przyimki z celownikiem",
      paragraphs: [
        "Po pytaniu **Wo?** przyimki in, auf, unter, über, neben, hinter, vor, zwischen, an łączą się z celownikiem: **der / das → dem**, **die → der**, liczba mnoga → **den**. Skróty: **in dem = im**, **an dem = am**. → lekcja „Mein Zimmer”",
        "**auf** = na powierzchni poziomej (auf dem Tisch), **an** = na pionowej lub przy (an der Wand, am Fenster). Rzeczy w meblach są **w**: im Regal, im Schrank. → lekcja „Mein Zimmer”",
        "Tak samo zmieniają się mein / dein / ein: in **meinem** Zimmer, auf **deinem** Schreibtisch, in **meiner** Tasche.",
      ],
      table: {
        headers: ["rodzajnik", "Wo?", "po polsku"],
        rows: [
          { cells: ["der Tisch", "auf dem Tisch", "na stole"], speak: "auf dem Tisch" },
          { cells: ["das Bett", "unter dem Bett", "pod łóżkiem"], speak: "unter dem Bett" },
          { cells: ["die Wand", "an der Wand", "na ścianie"], speak: "an der Wand" },
          { cells: ["das Regal", "im Regal", "na regale"], speak: "im Regal" },
          { cells: ["die Ecke", "in der Ecke", "w kącie"], speak: "in der Ecke" },
          { cells: ["der Schrank + die Tür", "zwischen dem Schrank und der Tür", "między szafą a drzwiami"], speak: "zwischen dem Schrank und der Tür" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: liegen, stehen, hängen i suchen",
      paragraphs: [
        "**liegen** – rzeczy płaskie, położone (Handy, Heft, Teppich). **stehen** – rzeczy stojące (Schrank, Lampe, Bücher im Regal). **hängen** – rzeczy na ścianie, na wieszaku, pod sufitem (Poster, Jacke). → lekcja „Wo ist mein Handy?”",
        "Po **suchen** i **finden** – biernik: Ich suche **meinen** Schlüssel / meine Jacke / mein Handy. Zaimki: Ich finde **ihn / sie / es** nicht. → lekcja „Wo ist mein Handy?”",
      ],
      table: {
        headers: ["zdanie", "po polsku"],
        rows: [
          { cells: ["Das Handy liegt auf dem Sofa.", "Telefon leży na kanapie."], speak: "Das Handy liegt auf dem Sofa." },
          { cells: ["Die Lampe steht neben dem Bett.", "Lampa stoi obok łóżka."], speak: "Die Lampe steht neben dem Bett." },
          { cells: ["Das Poster hängt an der Wand.", "Plakat wisi na ścianie."], speak: "Das Poster hängt an der Wand." },
          { cells: ["Ich suche meinen Schlüssel. Ich finde ihn nicht.", "Szukam klucza. Nie mogę go znaleźć."], speak: "Ich suche meinen Schlüssel. Ich finde ihn nicht." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Unsere Wohnung",
          items: [
            { text: "die Wohnung / das Haus", pl: "mieszkanie / dom" },
            { text: "im Erdgeschoss / im dritten Stock", pl: "na parterze / na trzecim piętrze" },
            { text: "der Flur, die Küche, das Bad", pl: "przedpokój, kuchnia, łazienka" },
            { text: "das Wohnzimmer, das Schlafzimmer", pl: "salon, sypialnia" },
            { text: "der Balkon, der Garten, der Keller", pl: "balkon, ogród, piwnica" },
            { text: "hell ↔ dunkel, ruhig ↔ laut", pl: "jasny ↔ ciemny, cichy ↔ głośny" },
            { text: "gemütlich", pl: "przytulny" },
          ],
        },
        {
          title: "Mein Zimmer",
          items: [
            { text: "das Bett, der Schrank, das Regal", pl: "łóżko, szafa, regał" },
            { text: "der Schreibtisch, der Stuhl, der Sessel", pl: "biurko, krzesło, fotel" },
            { text: "die Lampe, der Teppich, der Spiegel", pl: "lampa, dywan, lustro" },
            { text: "das Poster, die Pflanze", pl: "plakat, roślina" },
            { text: "die Wand, die Ecke, der Boden", pl: "ściana, kąt, podłoga" },
            { text: "in, auf, unter, über, neben, hinter, vor, zwischen, an", pl: "w, na, pod, nad, obok, za, przed, między, przy / na (ścianie)" },
          ],
        },
        {
          title: "Wo ist mein Handy?",
          items: [
            { text: "liegen / stehen / hängen", pl: "leżeć / stać / wisieć" },
            { text: "suchen / finden", pl: "szukać / znaleźć" },
            { text: "der Schlüssel, die Brille, die Jacke", pl: "klucz, okulary, kurtka" },
            { text: "Kannst du mir helfen?", pl: "Możesz mi pomóc?" },
            { text: "Vielleicht ist es …", pl: "Może jest …" },
            { text: "Da ist es ja! / Zum Glück!", pl: "No przecież jest! / Na szczęście!" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Besuch bei Lukas",
      titlePl: "W odwiedzinach u Lukasa",
      context: "Sobota. Julia, Paul i Anna pierwszy raz odwiedzają Lukasa w jego starym domu z ogrodem.",
      cast: { Lukas: "m", Julia: "f", Paul: "m", Anna: "f" },
      lines: [
        { speaker: "Lukas", text: "Kommt rein! Die Schuhe könnt ihr hier im Flur lassen.", pl: "Wejdźcie! Buty możecie zostawić tu w przedpokoju." },
        { speaker: "Julia", text: "Euer Haus ist ja riesig! Wie viele Zimmer habt ihr?", pl: "Wasz dom jest ogromny! Ile macie pokoi?" },
        { speaker: "Lukas", text: "Sechs. Unten sind die Küche und das Wohnzimmer, oben die Schlafzimmer.", pl: "Sześć. Na dole są kuchnia i salon, na górze sypialnie." },
        { speaker: "Anna", text: "Und dein Zimmer ist unter dem Dach, oder?", pl: "A twój pokój jest pod dachem, tak?" },
        { speaker: "Lukas", text: "Genau. Kommt mit! Vorsicht, die Treppe ist steil.", pl: "Dokładnie. Chodźcie! Uwaga, schody są strome." },
        { speaker: "Paul", text: "Wow, hier steht ja das Schlagzeug! Und wo ist der Käfig?", pl: "Łał, tu stoi perkusja! A gdzie jest klatka?" },
        { speaker: "Lukas", text: "Er steht auf dem Tisch vor dem Fenster. Aber… wo ist Krümel?", pl: "Stoi na stole przed oknem. Ale… gdzie jest Krümel?" },
        { speaker: "Anna", text: "Nicht schon wieder! Liegt er vielleicht unter dem Bett?", pl: "Nie, znowu! Może leży pod łóżkiem?" },
        { speaker: "Julia", text: "Nein, schaut mal – er sitzt in Pauls Mütze! Sie liegt neben der Tür.", pl: "Nie, patrzcie – siedzi w czapce Paula! Leży obok drzwi." },
        { speaker: "Paul", text: "In meiner Mütze? Na super. Zum Glück ist er so klein!", pl: "W mojej czapce? No super. Na szczęście jest taki mały!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de-6-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "U Lukasa",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Gdzie goście zostawiają buty?", options: ["w przedpokoju", "w kuchni", "na balkonie"], answer: 0 },
          { prompt: "Ile pokoi ma dom Lukasa?", options: ["cztery", "pięć", "sześć"], answer: 2 },
          { prompt: "Co jest na dole?", options: ["sypialnie", "kuchnia i salon", "pokój Lukasa"], answer: 1 },
          { prompt: "Gdzie stoi klatka?", options: ["na stole przed oknem", "pod łóżkiem", "obok perkusji"], answer: 0 },
          { prompt: "Gdzie jest Krümel?", options: ["pod łóżkiem", "w perkusji", "w czapce Paula"], answer: 2 },
          { prompt: "Gdzie leży czapka?", options: ["na łóżku", "obok drzwi", "na schodach"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-6-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Wir wohnen im dritten Stock.", options: ["Mieszkamy na trzecim piętrze.", "Mieszkamy w trzypokojowym mieszkaniu.", "Mieszkamy na parterze."], answer: 0 },
          { audio: "Das Schlafzimmer ist klein, aber ruhig.", options: ["Salon jest mały, ale jasny.", "Sypialnia jest mała, ale cicha.", "Sypialnia jest duża i głośna."], answer: 1 },
          { audio: "Die Lampe hängt über dem Tisch.", options: ["Lampa stoi na stole.", "Lampa stoi obok stołu.", "Lampa wisi nad stołem."], answer: 2 },
          { audio: "Der Teppich liegt vor dem Sofa.", options: ["Dywan leży przed kanapą.", "Dywan leży za kanapą.", "Dywan leży na kanapie."], answer: 0 },
          { audio: "Ich suche meinen Rucksack.", options: ["Mam nowy plecak.", "Szukam swojego plecaka.", "Plecak jest w pokoju."], answer: 1 },
          { audio: "Das Regal steht zwischen dem Schrank und der Tür.", options: ["Regał stoi za szafą.", "Szafa stoi między regałem a drzwiami.", "Regał stoi między szafą a drzwiami."], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-6-4-dative",
        kind: "fill",
        skill: "Gramatyka",
        title: "Gdzie to jest?",
        instruction: "Uzupełnij rodzajnik w celowniku albo skrót (dem, der, im, am).",
        items: [
          { before: "Der Laptop liegt auf", after: "Schreibtisch.", answers: ["dem"], hint: "der Schreibtisch" },
          { before: "Die Katze schläft unter", after: "Bett.", answers: ["dem"], hint: "das Bett" },
          { before: "Das Bild hängt an", after: "Wand.", answers: ["der"], hint: "die Wand" },
          { before: "Die Teller stehen", after: "Schrank.", answers: ["im", "in dem"], hint: "der Schrank" },
          { before: "Der Ball liegt hinter", after: "Tür.", answers: ["der"], hint: "die Tür" },
          { before: "Paul sitzt", after: "Fenster.", answers: ["am", "an dem"], hint: "das Fenster" },
          { before: "Die Pflanze steht neben", after: "Sofa.", answers: ["dem"], hint: "das Sofa" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-6-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Jaki jest twój pokój? – Jest mały.", options: ["Er ist klein.", "Es ist klein.", "Sie ist klein."], answer: 1, explanation: "das Zimmer → es. Polski „pokój” to on, ale niemiecki rodzajnik decyduje!" },
          { prompt: "Książki są na regale.", options: ["Die Bücher sind auf dem Regal.", "Die Bücher sind im Regal.", "Die Bücher sind an dem Regal."], answer: 1, explanation: "Po niemiecku książki są w regale – im Regal." },
          { prompt: "Plakat wisi na ścianie.", options: ["Das Poster hängt an der Wand.", "Das Poster hängt auf der Wand.", "Das Poster liegt an der Wand."], answer: 0, explanation: "Ściana to powierzchnia pionowa – an. I plakat wisi – hängt." },
          { prompt: "Szukam swojego klucza.", options: ["Ich suche mein Schlüssel.", "Ich suche meinen Schlüssel.", "Ich suche meinem Schlüssel."], answer: 1, explanation: "suchen + biernik: der Schlüssel → meinen Schlüssel." },
          { prompt: "Kurtka jest w kuchni.", options: ["Die Jacke ist im Küche.", "Die Jacke ist in die Küche.", "Die Jacke ist in der Küche."], answer: 2, explanation: "die Küche → in der Küche. Skrót im jest tylko dla der i das." },
          { prompt: "Książka leży na stole.", options: ["Das Buch steht auf dem Tisch.", "Das Buch liegt auf dem Tisch.", "Das Buch liegt auf der Tisch."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-6-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["in", "Wir", "Haus", "einem", "wohnen"], answer: "Wir wohnen in einem Haus.", pl: "Mieszkamy w domu." },
          { words: ["Zimmer", "ist", "Mein", "Dach", "dem", "unter"], answer: "Mein Zimmer ist unter dem Dach.", pl: "Mój pokój jest pod dachem." },
          { words: ["steht", "Wo", "Käfig", "der"], answer: "Wo steht der Käfig?", pl: "Gdzie stoi klatka?" },
          { words: ["neben", "Die", "liegt", "Tür", "der", "Mütze"], answer: "Die Mütze liegt neben der Tür.", pl: "Czapka leży obok drzwi." },
          { words: ["sie", "finde", "nicht", "Ich"], answer: "Ich finde sie nicht.", pl: "Nie mogę jej znaleźć." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-6-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 6",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 6 jest zaliczony!",
        items: [
          { prompt: "**das Schlafzimmer** to po polsku …", options: ["salon", "sypialnia", "łazienka"], answer: 1 },
          { prompt: "Jaki rodzajnik ma **Küchentisch** (die Küche + der Tisch)?", options: ["der", "die", "das"], answer: 0 },
          { prompt: "Die Küche ist modern. ___ ist auch hell.", options: ["Er", "Sie", "Es"], answer: 1 },
          { prompt: "Jak powiesz „na parterze”?", options: ["im ersten Stock", "im Keller", "im Erdgeschoss"], answer: 2 },
          { prompt: "Die Lampe ist auf ___ Schreibtisch.", options: ["dem", "der", "den"], answer: 0 },
          { prompt: "Bruno schläft ___ Ecke.", options: ["im", "in der", "in dem"], answer: 1 },
          { prompt: "**zwischen** znaczy …", options: ["za", "obok", "między"], answer: 2 },
          { prompt: "Die Jacke ___ an der Garderobe.", options: ["hängt", "liegt", "steht"], answer: 0 },
          { prompt: "Ich suche ___ Rucksack. (der Rucksack)", options: ["mein", "meinen", "meinem"], answer: 1 },
          { prompt: "Co znaczy **lüften**?", options: ["sprzątać", "wietrzyć", "suszyć pranie"], answer: 1, explanation: "lüften – wietrzyć; Stoßlüften to szerokie otwieranie okien na kilka minut (lekcja „Mein Zimmer”)." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de-6-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Mój dom i mój pokój",
        instruction:
          "Napisz e-mail do nowego kolegi albo nowej koleżanki z Niemiec o tym, gdzie mieszkasz (8–10 zdań). Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "napisz, czy mieszkasz w mieszkaniu, czy w domu, i na którym piętrze",
          "wymień pomieszczenia i opisz dwa z nich – z er / sie / es",
          "opisz swój pokój: co gdzie jest – z przyimkami i dem / der / im",
          "użyj co najmniej raz liegt, steht i hängt",
          "napisz, co jest twoim ulubionym miejscem w domu",
        ],
        placeholder: "Hallo …! Ich wohne mit meiner Familie in …",
        model:
          "Hallo Ben! Ich wohne mit meiner Familie in einer Wohnung in Berlin. Sie ist im fünften Stock, und vom Balkon sieht man den Fernsehturm. Wir haben vier Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist groß und hell. Mein Zimmer ist klein, aber gemütlich. Das Bett steht unter dem Fenster, und neben dem Bett steht mein Schreibtisch. Auf dem Schreibtisch liegen immer meine Hefte. An der Wand hängt ein Poster von Krakau. Mein Lieblingsplatz ist der Teppich vor dem Bett – da liegt auch Bruno. Viele Grüße, Julia",
        modelPl:
          "Cześć, Ben! Mieszkam z rodziną w mieszkaniu w Berlinie. Jest na piątym piętrze, a z balkonu widać wieżę telewizyjną. Mamy cztery pokoje, kuchnię i łazienkę. Salon jest duży i jasny. Mój pokój jest mały, ale przytulny. Łóżko stoi pod oknem, a obok łóżka stoi moje biurko. Na biurku zawsze leżą moje zeszyty. Na ścianie wisi plakat Krakowa. Moje ulubione miejsce to dywan przed łóżkiem – tam leży też Bruno. Pozdrawiam, Julia",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem, gdy ktoś opisuje mieszkanie i mówi, gdzie coś jest.",
        "Mówienie: umiem oprowadzić gościa po mieszkaniu i poprosić o pomoc w szukaniu.",
        "Czytanie: rozumiem krótki opis domu lub pokoju.",
        "Pisanie: umiem opisać swój dom i swój pokój w kilku zdaniach.",
        "Gramatyka: znam przyimki z celownikiem (auf dem, an der, im), er / sie / es i liegen / stehen / hängen.",
        "Słownictwo: znam pomieszczenia, meble i rzeczy w pokoju.",
      ],
    },
  ],
};
