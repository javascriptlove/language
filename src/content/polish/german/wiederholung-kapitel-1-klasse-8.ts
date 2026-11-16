import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-1",
  chapter: 1,
  number: 4,
  title: "Wiederholung – Kapitel 1",
  titlePl: "Powtórka z rozdziału 1",
  intro:
    "Pierwsza powtórka w klasie 8! Zrób ją dzień lub dwa po skończeniu rozdziału 1: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: jedzenie i upodobania („Was isst du gern?”), zakupy i ilości („Wir gehen einkaufen”) albo zamawianie („Im Restaurant”).",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać jedzenie i napoje i powiedzieć, co lubisz: gern – lieber – am liebsten,",
        "odmienić essen, mögen i möchten,",
        "zrobić zakupy i określić ilość: ein Kilo, eine Flasche, Wie viel? Wie viele?,",
        "zamówić w restauracji i zapłacić,",
        "używać biernika po mögen, brauchen, möchten, nehmen.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: essen, mögen, möchten",
      paragraphs: [
        "**essen**: e → i w 2. i 3. osobie – **du isst, er isst**. **mögen**: ich **mag**, du **magst**, er **mag**, wir mögen. **möchten**: ich **möchte**, du **möchtest**, er **möchte** (bez -t!), ihr **möchtet**. → lekcje „Was isst du gern?” i „Im Restaurant”",
        "Po wszystkich trzech – **biernik**: der → **den / einen / keinen**: Ich mag **keinen** Fisch. Ich möchte **einen** Saft. Rodzaje żeński i nijaki bez zmian: eine Pizza, ein Wasser, keine Wurst, kein Fleisch.",
        "Stopniowanie upodobań: Ich esse **gern** Pizza. Ich esse **lieber** Nudeln. **Am liebsten** esse **ich** Eis (czasownik na 2. miejscu!).",
      ],
      table: {
        headers: ["osoba", "essen", "mögen", "möchten"],
        rows: [
          { cells: ["ich", "esse", "mag", "möchte"], speak: "ich esse, ich mag, ich möchte" },
          { cells: ["du", "isst", "magst", "möchtest"], speak: "du isst, du magst, du möchtest" },
          { cells: ["er / sie / es", "isst", "mag", "möchte"], speak: "er isst, er mag, er möchte" },
          { cells: ["wir", "essen", "mögen", "möchten"], speak: "wir essen, wir mögen, wir möchten" },
          { cells: ["ihr", "esst", "mögt", "möchtet"], speak: "ihr esst, ihr mögt, ihr möchtet" },
          { cells: ["sie / Sie", "essen", "mögen", "möchten"], speak: "sie essen, sie mögen, sie möchten" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: ilości, Wie viel? Wie viele?",
      paragraphs: [
        "Po ilości stoi od razu rzeczownik, bez końcówki: **eine Flasche Milch**, **ein Kilo Äpfel**, **200 Gramm Käse**. Kilo, Gramm, Liter nie mają liczby mnogiej (zwei **Kilo**), opakowania – mają (zwei **Flaschen**, drei **Packungen**). → lekcja „Wir gehen einkaufen”",
        "**Wie viel?** – o niepoliczalne (Milch, Mehl, Geld) i o cenę: Wie viel kostet das? **Wie viele?** – o liczbę mnogą: Wie viele Eier?",
      ],
      table: {
        headers: ["pytanie", "odpowiedź", "po polsku"],
        rows: [
          { cells: ["Wie viel Milch?", "zwei Liter Milch", "dwa litry mleka"], speak: "Wie viel Milch? Zwei Liter Milch." },
          { cells: ["Wie viele Eier?", "zehn Eier", "dziesięć jajek"], speak: "Wie viele Eier? Zehn Eier." },
          { cells: ["Wie viel Käse?", "zweihundert Gramm Käse", "20 deko sera"], speak: "Wie viel Käse? Zweihundert Gramm Käse." },
          { cells: ["Wie viele Äpfel?", "ein Kilo Äpfel", "kilogram jabłek"], speak: "Wie viele Äpfel? Ein Kilo Äpfel." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: w sklepie i w restauracji",
      paragraphs: [
        "Zamawiasz i kupujesz: **Ich möchte** … / **Ich hätte gern** … / **Ich nehme** … / **Für mich** …, bitte. Z dodatkiem lub bez: **mit** Pilzen, **ohne** Zwiebeln. → lekcja „Im Restaurant”",
        "Sprzedawca: **Was darf es sein? Noch etwas?** Kelner: **Zusammen oder getrennt?** Ty: **Was macht das? Die Rechnung, bitte! Stimmt so.**",
      ],
      table: {
        headers: ["kto mówi", "zdanie", "po polsku"],
        rows: [
          { cells: ["sprzedawca", "Was darf es sein?", "Co podać?"], speak: "Was darf es sein?" },
          { cells: ["klient", "Ich möchte ein Kilo Erdbeeren.", "Poproszę kilo truskawek."], speak: "Ich möchte ein Kilo Erdbeeren." },
          { cells: ["gość", "Ich hätte gern eine Pizza ohne Zwiebeln.", "Poproszę pizzę bez cebuli."], speak: "Ich hätte gern eine Pizza ohne Zwiebeln." },
          { cells: ["kelner", "Zusammen oder getrennt?", "Razem czy osobno?"], speak: "Zusammen oder getrennt?" },
          { cells: ["gość", "Zwölf Euro. Stimmt so.", "Dwanaście euro, reszty nie trzeba."], speak: "Zwölf Euro. Stimmt so." },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Was isst du gern?",
          items: [
            { text: "das Brot, das Brötchen, die Butter, der Käse, die Wurst", pl: "chleb, bułka, masło, ser, wędlina" },
            { text: "das Fleisch, der Fisch, das Ei, die Nudeln, die Kartoffeln", pl: "mięso, ryba, jajko, makaron, ziemniaki" },
            { text: "der Apfel, die Banane, die Erdbeere, die Tomate, die Gurke", pl: "jabłko, banan, truskawka, pomidor, ogórek" },
            { text: "das Wasser, der Saft, die Milch, der Tee, der Kakao", pl: "woda, sok, mleko, herbata, kakao" },
            { text: "das Frühstück, das Mittagessen, das Abendessen", pl: "śniadanie, obiad, kolacja" },
            { text: "Ich habe Hunger / Durst. Ich bin satt.", pl: "Jestem głodny. / Chce mi się pić. Jestem najedzony." },
          ],
        },
        {
          title: "Wir gehen einkaufen",
          items: [
            { text: "einkaufen, brauchen, die Einkaufsliste", pl: "robić zakupy, potrzebować, lista zakupów" },
            { text: "der Supermarkt, der Markt, die Bäckerei, die Kasse", pl: "supermarket, targ, piekarnia, kasa" },
            { text: "das Kilo, das Gramm, der Liter", pl: "kilogram, gram, litr" },
            { text: "die Flasche, die Packung, die Dose, der Becher, die Tafel", pl: "butelka, paczka, puszka, kubeczek, tabliczka" },
            { text: "das Mehl, der Zucker, das Salz, der Quark", pl: "mąka, cukier, sól, twaróg" },
          ],
        },
        {
          title: "Im Restaurant",
          items: [
            { text: "der Kellner, die Speisekarte, die Rechnung, das Trinkgeld", pl: "kelner, karta, rachunek, napiwek" },
            { text: "die Vorspeise, das Hauptgericht, der Nachtisch", pl: "przystawka, danie główne, deser" },
            { text: "bestellen, (be)zahlen", pl: "zamawiać, płacić" },
            { text: "das Schnitzel, das Hähnchen, die Pommes, die Pilze, die Zwiebeln", pl: "sznycel, kurczak, frytki, grzyby, cebula" },
            { text: "Guten Appetit! / Stimmt so.", pl: "Smacznego! / Reszty nie trzeba." },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Pfannkuchen bei Julia",
      titlePl: "Naleśniki u Julii",
      context: "Niedziela, obiad u Julii. Zakupy się udały – mama smaży naleśniki, a Anna i Paul właśnie przyszli.",
      cast: { Mama: "f", Anna: "f", Paul: "m", Julia: "f", Jan: "m" },
      lines: [
        { speaker: "Mama", text: "Herzlich willkommen! Habt ihr Hunger?", pl: "Serdecznie witamy! Jesteście głodni?" },
        { speaker: "Paul", text: "Ja, sehr! Hier riecht es super.", pl: "Tak, bardzo! Ale tu pięknie pachnie." },
        { speaker: "Julia", text: "Das sind polnische Pfannkuchen – mit Quark oder mit Erdbeeren. Was möchtet ihr?", pl: "To polskie naleśniki – z twarogiem albo z truskawkami. Na co macie ochotę?" },
        { speaker: "Anna", text: "Ich möchte einen mit Erdbeeren, bitte.", pl: "Poproszę jeden z truskawkami." },
        { speaker: "Paul", text: "Und ich probiere einen mit Quark. Quark mag ich sehr.", pl: "A ja spróbuję jednego z twarogiem. Bardzo lubię twaróg." },
        { speaker: "Jan", text: "Und ich esse am liebsten die mit Schokolade!", pl: "A ja najbardziej lubię te z czekoladą!" },
        { speaker: "Mama", text: "Möchtet ihr etwas trinken? Wir haben Saft, Wasser und Tee.", pl: "Chcecie coś do picia? Mamy sok, wodę i herbatę." },
        { speaker: "Anna", text: "Ein Glas Wasser, bitte. Mmh, die Pfannkuchen sind wirklich lecker!", pl: "Szklankę wody, proszę. Mmm, naleśniki są naprawdę pyszne!" },
        { speaker: "Paul", text: "Wie viele Eier sind da drin?", pl: "Ile jajek tam jest?" },
        { speaker: "Julia", text: "Zehn Eier, zwei Liter Milch und ein Kilo Mehl. Jan und ich kaufen alles ein!", pl: "Dziesięć jajek, dwa litry mleka i kilogram mąki. Jan i ja wszystko kupujemy!" },
        { speaker: "Jan", text: "Und die Schokolade – das ist meine Idee!", pl: "A czekolada – to mój pomysł!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-1-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Niedzielny obiad",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Jaki naleśnik wybiera Anna?", options: ["z twarogiem", "z truskawkami", "z czekoladą"], answer: 1 },
          { prompt: "Co bardzo lubi Paul?", options: ["twaróg", "czekoladę", "truskawki"], answer: 0 },
          { prompt: "Jakie naleśniki najbardziej lubi Jan?", options: ["z twarogiem", "z czekoladą", "z truskawkami"], answer: 1 },
          { prompt: "Co pije Anna?", options: ["sok", "herbatę", "wodę"], answer: 2 },
          { prompt: "Ile jajek jest w cieście?", options: ["dwa", "dziesięć", "dwanaście"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-1-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Am liebsten esse ich Nudeln.", options: ["Najbardziej lubię makaron.", "Wolę makaron.", "Nie lubię makaronu."], answer: 0 },
          { audio: "Isst du gern Gemüse?", options: ["Jesz warzywa?", "Lubisz warzywa?", "Kupujesz warzywa?"], answer: 1 },
          { audio: "Wir brauchen drei Flaschen Wasser.", options: ["Mamy trzy butelki wody.", "Potrzebujemy trzech butelek wody.", "Potrzebujemy trzech litrów wody."], answer: 1 },
          { audio: "Ich hätte gern zweihundert Gramm Käse.", options: ["Poproszę 20 deko sera.", "Poproszę 2 kilo sera.", "Poproszę 12 deko sera."], answer: 0 },
          { audio: "Ich nehme das Hähnchen mit Pommes.", options: ["Biorę rybę z frytkami.", "Biorę kurczaka z ryżem.", "Biorę kurczaka z frytkami."], answer: 2 },
          { audio: "Das macht vierzehn Euro neunzig.", options: ["To będzie 40,90 €.", "To będzie 14,90 €.", "To będzie 14,19 €."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-1-4-fill",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij",
        instruction: "Uzupełnij brakujące słowo.",
        items: [
          { before: "Was", after: "du zum Frühstück?", answers: ["isst"], hint: "essen" },
          { before: "Paul", after: "keinen Fisch.", answers: ["mag"], hint: "mögen" },
          { before: "Was", after: "ihr trinken?", answers: ["möchtet"], hint: "möchten" },
          { before: "Ich möchte", after: "Apfelsaft.", answers: ["einen"], hint: "der Saft" },
          { before: "Wie", after: "Eier brauchen wir?", answers: ["viele"], hint: "liczba mnoga" },
          { before: "Ich kaufe zwei", after: "Wasser.", answers: ["Flaschen"], hint: "die Flasche" },
          { before: "Eine Pizza", after: "Zwiebeln, bitte.", answers: ["ohne"], hint: "bez" },
          { before: "", after: "liebsten esse ich Eis.", answers: ["Am"], hint: "najbardziej" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-1-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Co jesz?", options: ["Was esst du?", "Was isst du?", "Was essen du?"], answer: 1, explanation: "essen: e → i – du isst." },
          { prompt: "Ona lubi czekoladę.", options: ["Sie magt Schokolade.", "Sie mögt Schokolade.", "Sie mag Schokolade."], answer: 2, explanation: "mögen: er / sie mag – bez końcówki." },
          { prompt: "Nie lubię ryby.", options: ["Ich mag kein Fisch.", "Ich mag keinen Fisch.", "Ich mag nicht Fisch."], answer: 1, explanation: "der Fisch → biernik: keinen Fisch." },
          { prompt: "Butelka mleka.", options: ["eine Flasche Milch", "eine Flasche von Milch", "eine Flasche Milchs"], answer: 0, explanation: "Po ilości od razu rzeczownik – bez von i bez końcówki." },
          { prompt: "Ile jajek?", options: ["Wie viel Eier?", "Wie viele Eier?", "Wie vieler Eier?"], answer: 1 },
          { prompt: "Poproszę colę (w restauracji).", options: ["Ich will eine Cola!", "Ich möchte eine Cola, bitte.", "Ich möchtet eine Cola."], answer: 1, explanation: "möchten jest uprzejme; ich will brzmi niegrzecznie." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-1-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["liebsten", "du", "Was", "am", "isst"], answer: "Was isst du am liebsten?", pl: "Co najbardziej lubisz jeść?" },
          { words: ["Wurst", "mag", "Anna", "keine"], answer: "Anna mag keine Wurst.", pl: "Anna nie lubi wędliny." },
          { words: ["Kilo", "brauchen", "Mehl", "Wir", "ein"], answer: "Wir brauchen ein Kilo Mehl.", pl: "Potrzebujemy kilograma mąki." },
          { words: ["essen", "möchten", "Was", "Sie"], answer: "Was möchten Sie essen?", pl: "Co chciałby pan / chciałaby pani zjeść?" },
          { words: ["getrennt", "oder", "Zusammen"], answer: "Zusammen oder getrennt?", pl: "Razem czy osobno?" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-1-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 1",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 1 jest zaliczony!",
        items: [
          { prompt: "**die Gurke** to …", options: ["marchewka", "ogórek", "gruszka"], answer: 1 },
          { prompt: "Który wyraz to napój?", options: ["der Käse", "der Kakao", "der Quark"], answer: 1, speakOptions: true },
          { prompt: "Lukas ___ gern Pizza.", options: ["esst", "isst", "esse"], answer: 1 },
          { prompt: "___ du Erdbeeren?", options: ["Magst", "Mögst", "Mag"], answer: 0 },
          { prompt: "Ich trinke ___ Wasser als Saft.", options: ["gern", "lieber", "am liebsten"], answer: 1 },
          { prompt: "eine ___ Schokolade", options: ["Flasche", "Tafel", "Becher"], answer: 1 },
          { prompt: "Wie ___ kostet das?", options: ["viel", "viele", "vielen"], answer: 0 },
          { prompt: "das Ei → liczba mnoga:", options: ["die Eis", "die Eien", "die Eier"], answer: 2 },
          { prompt: "Was ___ ihr bestellen?", options: ["möchten", "möchtet", "möchtest"], answer: 1 },
          { prompt: "Rachunek: 18,50 €. Dajesz 20 € i mówisz:", options: ["Getrennt, bitte.", "Stimmt so.", "Guten Appetit!"], answer: 1, explanation: "„Stimmt so” – reszty nie trzeba (lekcja „Im Restaurant”)." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-1-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Jedzenie i ja",
        instruction:
          "Opowiedz o jedzeniu w swoim życiu (8–10 zdań): co lubisz, gdzie i z kim robisz zakupy, twoja ulubiona restauracja i co tam zamawiasz. Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "napisz, co lubisz, co wolisz, a co lubisz najbardziej (gern, lieber, am liebsten)",
          "napisz, czego nie lubisz (keinen / keine / kein)",
          "opisz zakupy z co najmniej trzema ilościami (ein Kilo, eine Flasche…)",
          "napisz, co zamawiasz w restauracji (Ich möchte … / Ich nehme …)",
        ],
        placeholder: "Ich esse gern …",
        model:
          "Ich esse sehr gern Nudeln, aber am liebsten esse ich Piroggen mit Quark. Ich mag keinen Fisch und keine Zwiebeln. Ich trinke lieber Wasser als Cola. Am Samstag gehe ich mit meiner Mutter einkaufen. Wir kaufen immer zwei Liter Milch, ein Kilo Äpfel und eine Packung Müsli. Manchmal kaufe ich auch eine Tafel Schokolade. Mein Lieblingsrestaurant ist eine Pizzeria in der Stadt. Dort nehme ich immer eine Pizza mit Pilzen und eine Apfelschorle. Wir zahlen getrennt – und ich sage immer: Stimmt so!",
        modelPl:
          "Bardzo lubię makaron, ale najbardziej lubię pierogi z twarogiem. Nie lubię ryby ani cebuli. Wolę wodę od coli. W sobotę chodzę z mamą na zakupy. Zawsze kupujemy dwa litry mleka, kilogram jabłek i paczkę musli. Czasem kupuję też tabliczkę czekolady. Moja ulubiona restauracja to pizzeria w mieście. Zawsze biorę tam pizzę z grzybami i sok jabłkowy z wodą gazowaną. Płacimy osobno – a ja zawsze mówię: reszty nie trzeba!",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem, co ktoś lubi jeść, co kupuje i co zamawia.",
        "Mówienie: umiem powiedzieć, co lubię, zrobić zakupy i zamówić w restauracji.",
        "Czytanie: rozumiem listę zakupów, kartę dań i krótką recenzję restauracji.",
        "Pisanie: umiem napisać listę zakupów, wiadomość o zakupach i dialog w restauracji.",
        "Gramatyka: znam essen, mögen, möchten, biernik po nich, gern – lieber – am liebsten i Wie viel / Wie viele.",
        "Słownictwo: znam jedzenie, napoje, opakowania i ilości oraz zwroty w restauracji.",
      ],
    },
  ],
};
