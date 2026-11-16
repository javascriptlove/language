import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "wiederholung-kapitel-3",
  chapter: 3,
  number: 4,
  title: "Wiederholung – Kapitel 3",
  titlePl: "Powtórka z rozdziału 3",
  intro:
    "Wszyscy zdrowi – czas na powtórkę! Zrób ją dzień lub dwa po skończeniu rozdziału 3: przejrzyj ściągę i słowniczek, rozwiąż ćwiczenia, a na końcu test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: ciało i objawy („Mein Kopf tut weh”), wizyta u lekarza („Beim Arzt”) albo zdrowy styl życia i czasowniki modalne („Fit und gesund”).",
  blocks: [
    {
      type: "goals",
      items: [
        "nazwać części ciała i powiedzieć, co cię boli,",
        "opisać objawy i umówić wizytę u lekarza,",
        "zrozumieć zalecenia lekarza i przekazać czyjąś radę,",
        "odmienić wszystkie czasowniki modalne i ułożyć z nimi zdanie,",
        "odróżnić nicht müssen od nicht dürfen.",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: co boli?",
      paragraphs: [
        "Część ciała jest podmiotem: **Mein Kopf tut weh.** Liczba mnoga: **Meine Füße tun weh.** Albo: **Ich habe** Kopf**schmerzen** / Hals**schmerzen** / Bauch**schmerzen**. Pytania: **Was ist los? Was fehlt dir? Was tut dir weh?** → lekcja „Mein Kopf tut weh”",
        "Objawy: **Ich habe Fieber / Husten / Schnupfen.** **Ich bin erkältet.** **Mir ist kalt / schlecht.** Od kiedy? **seit** + celownik: **seit zwei Tagen**. Jak często? **zweimal am Tag**, **nach dem Essen**. → lekcja „Beim Arzt”",
      ],
      table: {
        headers: ["część ciała", "zdanie", "po polsku"],
        rows: [
          { cells: ["der Kopf", "Mein Kopf tut weh.", "Boli mnie głowa."], speak: "Mein Kopf tut weh." },
          { cells: ["der Hals", "Ich habe Halsschmerzen.", "Boli mnie gardło."], speak: "Ich habe Halsschmerzen." },
          { cells: ["die Augen", "Meine Augen tun weh.", "Bolą mnie oczy."], speak: "Meine Augen tun weh." },
          { cells: ["—", "Ich habe seit zwei Tagen Fieber.", "Od dwóch dni mam gorączkę."], speak: "Ich habe seit zwei Tagen Fieber." },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: czasowniki modalne",
      paragraphs: [
        "**können** (móc, umieć), **müssen** (musieć), **dürfen** (wolno), **wollen** (chcieć), **sollen** (mieć coś zrobić – czyjaś rada), **möchten** (chciałbym). **ich** i **er** bez końcówki: ich kann, er muss, sie darf, ich will, er soll.",
        "Ramka zdaniowa: modalny na **2. miejscu**, bezokolicznik **na końcu**: Du **musst** im Bett **bleiben**. **Darf** ich ins Kino **gehen**? Zasady z **man**: Man **soll** viel trinken. Man **darf** nicht rennen.",
        "**nicht müssen** = nie musisz; **nicht dürfen** = nie wolno ci. → lekcje „Beim Arzt” i „Fit und gesund”",
      ],
      table: {
        headers: ["osoba", "können", "müssen", "dürfen", "wollen", "sollen"],
        rows: [
          { cells: ["ich", "kann", "muss", "darf", "will", "soll"], speak: "ich kann, ich muss, ich darf, ich will, ich soll" },
          { cells: ["du", "kannst", "musst", "darfst", "willst", "sollst"], speak: "du kannst, du musst, du darfst, du willst, du sollst" },
          { cells: ["er / sie / es", "kann", "muss", "darf", "will", "soll"], speak: "er kann, er muss, er darf, er will, er soll" },
          { cells: ["wir", "können", "müssen", "dürfen", "wollen", "sollen"], speak: "wir können, wir müssen, wir dürfen, wir wollen, wir sollen" },
          { cells: ["ihr", "könnt", "müsst", "dürft", "wollt", "sollt"], speak: "ihr könnt, ihr müsst, ihr dürft, ihr wollt, ihr sollt" },
          { cells: ["sie / Sie", "können", "müssen", "dürfen", "wollen", "sollen"], speak: "sie können, sie müssen, sie dürfen, sie wollen, sie sollen" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słowa i zwroty",
      groups: [
        {
          title: "Mein Kopf tut weh",
          items: [
            { text: "der Kopf, der Hals, der Bauch, der Rücken", pl: "głowa, gardło / szyja, brzuch, plecy" },
            { text: "das Auge, das Ohr, die Nase, der Mund, der Zahn", pl: "oko, ucho, nos, usta, ząb" },
            { text: "der Arm, die Hand, das Bein, das Knie, der Fuß", pl: "ręka, dłoń, noga, kolano, stopa" },
            { text: "das Fieber, der Husten, der Schnupfen", pl: "gorączka, kaszel, katar" },
            { text: "krank, gesund, erkältet", pl: "chory, zdrowy, przeziębiony" },
            { text: "Gute Besserung!", pl: "Szybkiego powrotu do zdrowia!" },
          ],
        },
        {
          title: "Beim Arzt",
          items: [
            { text: "der Arzt / die Ärztin, die Praxis, der Termin", pl: "lekarz / lekarka, przychodnia, wizyta" },
            { text: "das Rezept, die Apotheke, die Tablette", pl: "recepta, apteka, tabletka" },
            { text: "die Erkältung, die Grippe, die Angina", pl: "przeziębienie, grypa, angina" },
            { text: "zweimal am Tag, vor / nach dem Essen", pl: "dwa razy dziennie, przed / po jedzeniu" },
            { text: "die Versichertenkarte", pl: "karta ubezpieczenia" },
          ],
        },
        {
          title: "Fit und gesund",
          items: [
            { text: "gesund / ungesund, fit", pl: "zdrowy / niezdrowy, w formie" },
            { text: "joggen, schwimmen gehen, trainieren", pl: "biegać, iść popływać, trenować" },
            { text: "genug schlafen, früh ins Bett gehen", pl: "wysypiać się, wcześnie chodzić spać" },
            { text: "mehr / weniger, zu viel / zu wenig", pl: "więcej / mniej, za dużo / za mało" },
            { text: "die Süßigkeiten, das Fast Food", pl: "słodycze, fast food" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Endlich Kino!",
      titlePl: "Nareszcie kino!",
      context: "Sobota wieczorem, przed kinem. Julia nie ma już gorączki – lekarka pozwoliła jej przyjść. Lukas przychodzi bez kul.",
      cast: { Anna: "f", Julia: "f", Lukas: "m", Paul: "m" },
      lines: [
        { speaker: "Anna", text: "Julia! Du bist da! Wie geht es dir?", pl: "Julia! Jesteś! Jak się czujesz?" },
        { speaker: "Julia", text: "Viel besser, danke. Kein Fieber mehr! Aber ich muss noch zwei Tage Tabletten nehmen.", pl: "Dużo lepiej, dzięki. Już bez gorączki! Ale muszę jeszcze przez dwa dni brać tabletki." },
        { speaker: "Lukas", text: "Und schaut mal – ich kann wieder normal laufen!", pl: "A patrzcie – znowu mogę normalnie chodzić!" },
        { speaker: "Paul", text: "Super! Darfst du auch wieder Basketball spielen?", pl: "Super! Wolno ci też znowu grać w koszykówkę?" },
        { speaker: "Lukas", text: "Noch nicht. Der Arzt sagt, ich soll noch eine Woche schwimmen gehen.", pl: "Jeszcze nie. Lekarz mówi, że mam jeszcze przez tydzień chodzić na basen." },
        { speaker: "Anna", text: "Uaaah… Entschuldigung. Ich bin so müde.", pl: "Aaaach… przepraszam. Jestem taka zmęczona." },
        { speaker: "Paul", text: "Anna! Du sollst doch früher ins Bett gehen!", pl: "Anna! Przecież masz wcześniej chodzić spać!" },
        { speaker: "Anna", text: "Ich weiß, ich weiß. Ab morgen – versprochen!", pl: "Wiem, wiem. Od jutra – obiecuję!" },
        { speaker: "Lukas", text: "Kommt, der Film fängt gleich an. Wollen wir Popcorn kaufen?", pl: "Chodźcie, film zaraz się zaczyna. Kupujemy popcorn?" },
        { speaker: "Julia", text: "Lukas! Was sagt Tipp Nummer drei?", pl: "Lukas! Co mówi rada numer trzy?" },
        { speaker: "Lukas", text: "Eine kleine Portion pro Woche ist okay! Das ist mein Tipp.", pl: "Mała porcja raz w tygodniu jest okej! To moja rada." },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-3-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Przed kinem",
        instruction: "Przeczytaj (i posłuchaj) dialog jeszcze raz i odpowiedz na pytania.",
        items: [
          { prompt: "Jak czuje się Julia?", options: ["nadal ma gorączkę", "dużo lepiej", "boli ją stopa"], answer: 1 },
          { prompt: "Jak długo Julia musi jeszcze brać tabletki?", options: ["dwa dni", "tydzień", "już nie musi"], answer: 0 },
          { prompt: "Czy Lukasowi wolno już grać w koszykówkę?", options: ["tak", "jeszcze nie"], answer: 1 },
          { prompt: "Co lekarz radzi Lukasowi?", options: ["jeszcze tydzień pływać", "zostać w łóżku", "brać tabletki"], answer: 0 },
          { prompt: "Dlaczego Anna ziewa?", options: ["film jest nudny", "jest zmęczona – za późno chodzi spać", "jest chora"], answer: 1 },
          { prompt: "Co chce kupić Lukas?", options: ["frytki", "popcorn", "colę"], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-3-4-listen",
        kind: "listen",
        skill: "Słuchanie",
        title: "Posłuchaj i zrozum",
        instruction: "Posłuchaj zdania i wybierz, co ono znaczy.",
        items: [
          { audio: "Mein Rücken tut weh.", options: ["Boli mnie brzuch.", "Bolą mnie plecy.", "Boli mnie ręka."], answer: 1 },
          { audio: "Ich habe Schnupfen und Husten.", options: ["Mam katar i kaszel.", "Mam gorączkę i kaszel.", "Mam katar i ból gardła."], answer: 0 },
          { audio: "Sie müssen dreimal am Tag eine Tablette nehmen.", options: ["Musi pan brać tabletkę trzy razy w tygodniu.", "Musi pan brać trzy tabletki dziennie, raz.", "Musi pan brać tabletkę trzy razy dziennie."], answer: 2 },
          { audio: "Du musst nicht im Bett bleiben.", options: ["Nie wolno ci leżeć w łóżku.", "Nie musisz leżeć w łóżku.", "Musisz leżeć w łóżku."], answer: 1 },
          { audio: "Ich will mehr Wasser trinken.", options: ["Chcę pić więcej wody.", "Mam pić więcej wody.", "Muszę pić więcej wody."], answer: 0 },
          { audio: "Der Arzt sagt, ich soll mehr schlafen.", options: ["Lekarz mówi, że chce więcej spać.", "Lekarz mówi, że mam więcej spać.", "Lekarz mówi, że nie mogę spać."], answer: 1 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-3-4-fill",
        kind: "fill",
        skill: "Gramatyka",
        title: "Uzupełnij",
        instruction: "Uzupełnij brakujące słowo.",
        items: [
          { before: "Meine Füße", after: "weh.", answers: ["tun"], hint: "liczba mnoga" },
          { before: "Ich habe", after: ".", answers: ["Bauchschmerzen"], hint: "ból brzucha" },
          { before: "Lukas", after: "wieder normal laufen.", answers: ["kann"], hint: "können, er" },
          { before: "Du", after: "viel trinken, sagt die Ärztin.", answers: ["musst"], hint: "müssen, du" },
          { before: "", after: "ich am Samstag ins Kino gehen?", answers: ["Darf"], hint: "dürfen, ich" },
          { before: "Paul", after: "mehr joggen.", answers: ["will"], hint: "wollen, er" },
          { before: "Anna", after: "früher ins Bett gehen.", answers: ["soll"], hint: "sollen, sie" },
          { before: "Ich habe", after: "zwei Tagen Fieber.", answers: ["seit"], hint: "od (kiedy?)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-3-4-mistakes",
        kind: "choice",
        skill: "Gramatyka",
        title: "Typowe błędy",
        instruction: "Które zdanie jest poprawne?",
        items: [
          { prompt: "Boli mnie głowa.", options: ["Mich tut der Kopf weh.", "Mein Kopf tut weh.", "Ich tue Kopf weh."], answer: 1 },
          { prompt: "Bolą mnie oczy.", options: ["Meine Augen tut weh.", "Meine Augen tun weh.", "Mein Auge tun weh."], answer: 1, explanation: "Liczba mnoga – tun weh." },
          { prompt: "On może grać.", options: ["Er kannt spielen.", "Er kann spielen.", "Er kann spielt."], answer: 1, explanation: "er kann – bez końcówki, a drugi czasownik w bezokoliczniku." },
          { prompt: "Muszę zostać w domu.", options: ["Ich muss zu Hause bleiben.", "Ich muss bleiben zu Hause.", "Ich muss zu Hause bleibe."], answer: 0, explanation: "Bezokolicznik stoi na końcu zdania." },
          { prompt: "Nie wolno ci uprawiać sportu.", options: ["Du musst keinen Sport machen.", "Du darfst keinen Sport machen.", "Du willst keinen Sport machen."], answer: 1, explanation: "Zakaz – nicht / kein + dürfen." },
          { prompt: "Chcę więcej ćwiczyć.", options: ["Ich will mehr Sport machen.", "Ich wille mehr Sport machen.", "Ich soll mehr Sport machen."], answer: 0 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-3-4-order",
        kind: "order",
        skill: "Gramatyka",
        title: "Ułóż zdania",
        instruction: "Ułóż wyrazy w poprawnej kolejności.",
        items: [
          { words: ["weh", "dir", "Was", "tut"], answer: "Was tut dir weh?", pl: "Co cię boli?" },
          { words: ["Termin", "möchte", "einen", "Ich"], answer: "Ich möchte einen Termin.", pl: "Chciałbym / chciałabym umówić wizytę." },
          { words: ["bleiben", "musst", "Bett", "Du", "im"], answer: "Du musst im Bett bleiben.", pl: "Musisz zostać w łóżku." },
          { words: ["nicht", "Hier", "rennen", "man", "darf"], answer: "Hier darf man nicht rennen.", pl: "Tu nie wolno biegać." },
          { words: ["schlafen", "soll", "mehr", "Ich"], answer: "Ich soll mehr schlafen.", pl: "Mam więcej spać." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-3-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 3",
        instruction:
          "10 pytań z całego rozdziału. Odpowiedz bez zaglądania do ściągi. Jeśli masz co najmniej 8 dobrych odpowiedzi (8/10), rozdział 3 jest zaliczony!",
        items: [
          { prompt: "**das Knie** to …", options: ["kolano", "łokieć", "kostka"], answer: 0 },
          { prompt: "Co mówisz komuś, kto jest chory?", options: ["Guten Appetit!", "Gute Besserung!", "Gute Reise!"], answer: 1, speakOptions: true },
          { prompt: "Mein Bauch ___ weh.", options: ["tun", "tut", "tue"], answer: 1 },
          { prompt: "Gdzie kupisz lekarstwo?", options: ["in der Apotheke", "in der Bibliothek", "in der Bäckerei"], answer: 0, speakOptions: true },
          { prompt: "___ du mir helfen?", options: ["Kann", "Kannst", "Könnst"], answer: 1 },
          { prompt: "Julia ___ zweimal am Tag Tabletten nehmen.", options: ["muss", "musst", "müsst"], answer: 0 },
          { prompt: "**Du musst nicht kommen** znaczy …", options: ["nie wolno ci przyjść", "nie musisz przychodzić", "nie możesz przyjść"], answer: 1 },
          { prompt: "Der Arzt sagt, Lukas ___ schwimmen gehen.", options: ["will", "soll", "darf nicht"], answer: 1 },
          { prompt: "Ich will heute nicht ___ .", options: ["joggen", "jogge", "joggt"], answer: 0 },
          { prompt: "Tryb rozkazujący od **essen** (du):", options: ["Esse!", "Iss!", "Isst!"], answer: 1, explanation: "du isst → Iss! (lekcja „Fit und gesund”)." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "de8-3-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "Teraz ty! Mój chory tydzień",
        instruction:
          "Opowiedz o tygodniu, w którym byłeś / byłaś chory / chora (8–10 zdań) – w czasie teraźniejszym, jakby działo się to teraz. Potem posłuchaj wzoru i przeczytaj swój tekst na głos.",
        checklist: [
          "opisz objawy: Mein … tut weh, Ich habe … schmerzen, Fieber, Husten",
          "opisz wizytę u lekarza: Termin, Rezept, Apotheke",
          "napisz, co musisz, a czego ci nie wolno: Ich muss … / Ich darf nicht …",
          "przekaż radę: Der Arzt / Meine Mutter sagt, ich soll …",
          "napisz, co chcesz robić, gdy wyzdrowiejesz: Ich will …",
        ],
        placeholder: "Am Montag fühle ich mich nicht gut …",
        model:
          "Am Montag fühle ich mich nicht gut. Mein Kopf tut weh und ich habe Fieber. Ich kann nicht in die Schule gehen. Meine Mutter macht einen Termin beim Arzt. Der Arzt sagt, ich habe eine Grippe. Ich muss drei Tage im Bett bleiben und viel Tee trinken. Ich darf nicht draußen spielen und keinen Sport machen. Meine Oma sagt, ich soll Hühnersuppe essen – und sie hat recht! Am Freitag bin ich wieder gesund. Am Wochenende will ich mit meinen Freunden ins Kino gehen.",
        modelPl:
          "W poniedziałek źle się czuję. Boli mnie głowa i mam gorączkę. Nie mogę iść do szkoły. Mama umawia wizytę u lekarza. Lekarz mówi, że mam grypę. Muszę trzy dni leżeć w łóżku i pić dużo herbaty. Nie wolno mi bawić się na dworze ani uprawiać sportu. Babcia mówi, że mam jeść rosół – i ma rację! W piątek jestem znowu zdrowy / zdrowa. W weekend chcę iść z przyjaciółmi do kina.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Słuchanie: rozumiem, co kogoś boli, i zalecenia lekarza.",
        "Mówienie: umiem powiedzieć, co mnie boli, umówić wizytę i opisać objawy.",
        "Czytanie: rozumiem informacje przychodni, wiadomości od przyjaciół i plakat z radami.",
        "Pisanie: umiem napisać wiadomość, że jestem chory / chora, i dialog u lekarza.",
        "Gramatyka: znam tut / tun weh, wszystkie czasowniki modalne, ramkę zdaniową i różnicę nicht müssen / nicht dürfen.",
        "Słownictwo: znam części ciała, objawy, słowa u lekarza i zdrowe nawyki.",
      ],
    },
  ],
};
