import type { Lesson } from "../../types";

export const lesson: Lesson = {
  slug: "repaso-unidad-1",
  chapter: 1,
  number: 4,
  title: "Repaso – Unidad 1",
  titlePl: "Powtórka z rozdziału 1",
  intro:
    "Pierwsza powtórka w klasie 8! Zrób ją dzień lub dwa po skończeniu rozdziału 1. Przejrzyj ściągi i słowniczek, rozwiąż zadania, a na koniec napisz test. Jeśli coś pójdzie słabo, wróć do właściwej lekcji: jedzenie, gustar i encantar, rodzajnik – lekcja 1 („Me encanta la paella”), zakupy, ilości i zaimki lo, la, los, las – lekcja 2 („En el mercado”), zamawianie w restauracji i ustedes – lekcja 3 („En el restaurante”).",
  blocks: [
    {
      type: "goals",
      items: [
        "powiedzieć, co lubisz i uwielbiasz jeść – ty i inni: nos encanta, les gusta,",
        "wiedzieć, kiedy jedzenie ma rodzajnik: Me gusta el pescado – Como pescado,",
        "kupić jedzenie w określonej ilości i zastąpić rzeczownik zaimkiem lo, la, los, las,",
        "zamówić obiad w restauracji i poprosić o rachunek,",
        "zrozumieć kelnera, który mówi na „państwo” (ustedes).",
      ],
    },
    {
      type: "grammar",
      title: "Ściąga: gustar, encantar i rodzajnik",
      paragraphs: [
        "**encantar** działa jak **gustar**: me encant**a** el jamón (jedna rzecz), me encant**an** las fresas (kilka). Skala: me encanta → me gusta mucho → me gusta → no me gusta mucho → **no me gusta nada**. Nigdy ~~me encanta mucho~~. → lekcja 1",
        "Osoby: **me, te, le, nos, os, les**. Często z **a**: **A Pablo** no le gusta la fruta. **A mis padres** les encanta el marisco. Forma czasownika zależy od tego, **co** lubimy. → lekcja 1",
        "Po **gustar, encantar, preferir** – rodzajnik: me gusta **el** pescado. Po **comer, beber, tomar, querer**, gdy chodzi o jakąś ilość – bez rodzajnika: como **pescado**, bebo **agua**. **Tengo (mucha) hambre / sed.** Smak: la paella **está** rica. → lekcja 1",
      ],
      table: {
        headers: ["kto?", "jedna rzecz", "kilka rzeczy"],
        rows: [
          { cells: ["a mí / a ti / a él", "me / te / le encanta el flan", "me / te / le gustan las uvas"], speak: "me encanta el flan, te gustan las uvas" },
          { cells: ["a nosotros", "nos gusta el pollo", "nos encantan las galletas"], speak: "nos gusta el pollo, nos encantan las galletas" },
          { cells: ["a vosotros", "os gusta el pollo", "os encantan las galletas"], speak: "os gusta el pollo, os encantan las galletas" },
          { cells: ["a ellos", "les gusta el pollo", "les encantan las galletas"], speak: "les gusta el pollo, les encantan las galletas" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: ilości i lo, la, los, las",
      paragraphs: [
        "Ilość + **de** + rzeczownik bez rodzajnika: un kilo **de** patatas, cien gramos **de** jamón, una docena **de** huevos, una botella **de** aceite, un paquete **de** galletas, una lata **de** atún. Pół: **medio** kilo, **media** docena. → lekcja 2",
        "Przy stoisku: **¿Quién es el último?** – ¿Qué te pongo? – **Quería**… – ¿Algo más? – **Nada más, gracias. ¿Cuánto es?** → lekcja 2",
        "Zaimek pasuje rodzajem i liczbą do **hiszpańskiego** rzeczownika: el melón → **lo**, la cebolla → **la**, los huevos → **los**, las patatas → **las**. Stoi **przed** czasownikiem: **No lo** tengo. Z rozkazem – dokleja się: ¡Cómpra**lo**! Córta**las**. → lekcja 2",
      ],
      table: {
        headers: ["rzeczownik", "zaimek", "przykład"],
        rows: [
          { cells: ["el aceite", "lo", "¿El aceite? Lo tenemos."], speak: "¿El aceite? Lo tenemos." },
          { cells: ["la lista", "la", "¿La lista? No la tengo."], speak: "¿La lista? No la tengo." },
          { cells: ["los huevos", "los", "¿Los huevos? Los venden ahí enfrente."], speak: "¿Los huevos? Los venden ahí enfrente." },
          { cells: ["las uvas", "las", "¿Las uvas? ¡Cómpralas!"], speak: "¿Las uvas? ¡Cómpralas!" },
        ],
      },
    },
    {
      type: "grammar",
      title: "Ściąga: w restauracji",
      paragraphs: [
        "Kolejność: **de primero**, **de segundo**, **de postre**, **para beber**. Zamawiamy: **Para mí**, gazpacho. **Voy a tomar** merluza. Yo, **lo mismo** que ella. Uwaga: para **mí** (z akcentem), para **ti** (bez). → lekcja 3",
        "Prośby: **¿Me trae** un café? **¿Nos trae** la cuenta? **¿Puedo** pagar con tarjeta? Brakuje czegoś: **Falta** un tenedor. Kelnera wołamy: **¡Perdone!** → lekcja 3",
        "Kelner do kilku osób mówi na „państwo” – **ustedes** + forma jak dla **ellos**: ¿Qué **van** a tomar? Aquí **tienen** la carta. ¿Cómo lo **quieren**? → lekcja 3",
      ],
      table: {
        headers: ["sytuacja", "po hiszpańsku", "po polsku"],
        rows: [
          { cells: ["zamawiasz", "De segundo, para mí, filete.", "Na drugie dla mnie stek."], speak: "De segundo, para mí, filete." },
          { cells: ["to samo", "Mi hermano, lo mismo.", "Brat to samo."], speak: "Mi hermano, lo mismo." },
          { cells: ["czegoś brakuje", "Perdone, falta una cuchara.", "Przepraszam, brakuje łyżki."], speak: "Perdone, falta una cuchara." },
          { cells: ["rachunek", "¿Nos trae la cuenta, por favor?", "Poprosimy rachunek."], speak: "¿Nos trae la cuenta, por favor?" },
        ],
      },
    },
    {
      type: "vocab",
      title: "Najważniejsze słówka rozdziału 1",
      groups: [
        {
          title: "Jedzenie",
          items: [
            { text: "la fruta: la manzana, el plátano, la naranja, las fresas, las uvas", pl: "owoce: jabłko, banan, pomarańcza, truskawki, winogrona" },
            { text: "la verdura: el tomate, la lechuga, la cebolla, la zanahoria, las patatas", pl: "warzywa: pomidor, sałata, cebula, marchewka, ziemniaki" },
            { text: "la carne, el pollo, el jamón, el pescado, el marisco", pl: "mięso, kurczak, szynka, ryba, owoce morza" },
            { text: "el pan, el queso, el huevo, el arroz, el aceite", pl: "chleb, ser, jajko, ryż, oliwa / olej" },
            { text: "la leche, el zumo, el agua", pl: "mleko, sok, woda" },
            { text: "tener hambre / tener sed", pl: "być głodnym / spragnionym" },
            { text: "¡Qué rico! / ¡Qué asco!", pl: "Pycha! / Fuj!" },
          ],
        },
        {
          title: "Zakupy",
          items: [
            { text: "el mercado, el puesto, la frutería, la panadería", pl: "targ, stoisko, warzywniak, piekarnia" },
            { text: "un kilo de, medio kilo de, cien gramos de", pl: "kilogram, pół kilo, sto gramów" },
            { text: "una docena de, una botella de, un paquete de, una lata de", pl: "tuzin, butelka, paczka, puszka" },
            { text: "¿Quién es el último?", pl: "Kto jest ostatni?" },
            { text: "Quería… / ¿Algo más? / Nada más, gracias.", pl: "Poproszę… / Coś jeszcze? / Nic więcej, dziękuję." },
            { text: "¿Cuánto es? / el cambio", pl: "Ile płacę? / reszta" },
          ],
        },
        {
          title: "Restauracja",
          items: [
            { text: "la carta, el menú del día, la cuenta, la propina", pl: "karta, zestaw dnia, rachunek, napiwek" },
            { text: "el camarero / la camarera", pl: "kelner / kelnerka" },
            { text: "de primero, de segundo, de postre, para beber", pl: "na pierwsze, na drugie, na deser, do picia" },
            { text: "el tenedor, el cuchillo, la cuchara, el vaso, la servilleta", pl: "widelec, nóż, łyżka, szklanka, serwetka" },
            { text: "¿Me trae…? / ¿Nos trae la cuenta?", pl: "Przyniesie mi pan…? / Poprosimy rachunek." },
            { text: "pagar con tarjeta / en efectivo", pl: "płacić kartą / gotówką" },
          ],
        },
      ],
    },
    {
      type: "dialogue",
      title: "Un picnic en el Retiro",
      titlePl: "Piknik w parku Retiro",
      context: "Niedziela, 13:00. Klasa robi piknik na trawie w parku Retiro. Każdy coś przyniósł.",
      cast: { Marcos: "m", Emma: "f", Pablo: "m", Carla: "f", "Lucía": "f" },
      lines: [
        { speaker: "Marcos", text: "¡Chicos, aquí está la tortilla de mi padre! Es enorme.", pl: "Hej, tu jest tortilla mojego taty! Jest ogromna." },
        { speaker: "Emma", text: "¡Qué bien! Me encanta la tortilla. Yo traigo bocadillos de queso y una botella de limonada.", pl: "Super! Uwielbiam tortillę. Ja przynoszę kanapki z serem i butelkę lemoniady." },
        { speaker: "Pablo", text: "Y yo, tres paquetes de patatas fritas.", pl: "A ja trzy paczki chipsów." },
        { speaker: "Lucía", text: "¡Pablo! ¿Otra vez patatas fritas?", pl: "Pablo! Znowu chipsy?" },
        { speaker: "Pablo", text: "Sí, ¡son verdura! Y a todos os gustan, ¿no?", pl: "Tak, to warzywa! I wszyscy je lubicie, nie?" },
        { speaker: "Carla", text: "Pues sí, nos encantan. Pero también hay fruta: un melón y medio kilo de uvas.", pl: "No tak, uwielbiamy je. Ale są też owoce: melon i pół kilo winogron." },
        { speaker: "Emma", text: "¿Y el melón? ¿Quién lo tiene?", pl: "A melon? Kto go ma?" },
        { speaker: "Marcos", text: "Lo tengo yo, en la mochila. Pero… ¿y el cuchillo? ¿Lo tienes tú, Carla?", pl: "Ja go mam, w plecaku. Ale… a nóż? Masz go, Carlo?" },
        { speaker: "Carla", text: "¿Yo? No, no lo tengo. ¡Lo tiene tu padre, en la cocina!", pl: "Ja? Nie, nie mam go. Ma go twój tata, w kuchni!" },
        { speaker: "Lucía", text: "No pasa nada. Hay un quiosco ahí. Voy a pedir un cuchillo… y unas servilletas.", pl: "Nic się nie stało. Tam jest kiosk. Poproszę o nóż… i serwetki." },
        { speaker: "Pablo", text: "¡Y un helado para mí, por favor! De chocolate.", pl: "I lody dla mnie, proszę! Czekoladowe." },
        { speaker: "Lucía", text: "Pablo, ¡no soy tu camarera!", pl: "Pablo, nie jestem twoją kelnerką!" },
      ],
    },
    {
      type: "exercise",
      exercise: {
        id: "es8-1-4-dialogue",
        kind: "choice",
        skill: "Czytanie",
        title: "Piknik w parku Retiro",
        instruction: "Przeczytaj dialog i odpowiedz na pytania.",
        items: [
          { prompt: "Co przynosi Emma?", options: ["tortillę", "kanapki z serem i lemoniadę", "melona"], answer: 1 },
          { prompt: "Ile paczek chipsów przynosi Pablo?", options: ["jedną", "dwie", "trzy"], answer: 2 },
          { prompt: "Kto ma melona?", options: ["Marcos", "Carla", "Lucía"], answer: 0 },
          { prompt: "Gdzie jest nóż?", options: ["w plecaku Marcosa", "w kuchni u taty Marcosa", "w kiosku"], answer: 1 },
          { prompt: "Co chce Pablo z kiosku?", options: ["serwetki", "nóż", "lody czekoladowe"], answer: 2 },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es8-1-4-gustar",
        kind: "fill",
        skill: "Gramatyka",
        title: "Gustar, encantar i rodzajnik",
        instruction: "Uzupełnij zdania. Polskie podpowiedzi są w nawiasach.",
        items: [
          { before: "A Emma le", after: "la tortilla.", answers: ["encanta"], hint: "(uwielbia)" },
          { before: "A Pablo y a Marcos", after: "gustan las patatas fritas.", answers: ["les"], hint: "(im)" },
          { before: "Chicos, ¿", after: "gusta el melón?", answers: ["os"], hint: "(wam)" },
          { before: "Sí, ¡", after: "encanta!", answers: ["nos"], hint: "(nam)" },
          { before: "A mí no me gustan", after: "lentejas.", answers: ["las"], hint: "(rodzajnik)" },
          { before: "Normalmente bebo", after: "en el recreo.", answers: ["agua"], hint: "(wodę – bez rodzajnika)" },
          { before: "Tengo mucha", after: ". ¿Hay agua?", answers: ["sed"], hint: "(pragnienie)" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es8-1-4-pronouns",
        kind: "choice",
        skill: "Gramatyka",
        title: "lo, la, los, las",
        instruction: "Wybierz zaimek, który pasuje do rzeczownika.",
        items: [
          { prompt: "¿El cuchillo? No ___ tengo.", options: ["lo", "la", "los"], answer: 0 },
          { prompt: "¿Las servilletas? Lucía ___ trae.", options: ["la", "las", "los"], answer: 1 },
          { prompt: "¿La tortilla? ___ hace el padre de Marcos.", options: ["Lo", "La", "Las"], answer: 1 },
          { prompt: "¿Los bocadillos? Emma ___ trae.", options: ["los", "lo", "las"], answer: 0 },
          { prompt: "¿El aceite? Sí, ___ tenemos.", options: ["la", "lo", "le"], answer: 1, explanation: "el aceite jest rodzaju męskiego → lo (chociaż po polsku „ją”)." },
          { prompt: "Kup winogrona! → ¡___!", options: ["¡Las compra!", "¡Cómpralas!", "¡Compra las!"], answer: 1, explanation: "Z rozkazem zaimek dokleja się na końcu." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es8-1-4-situations",
        kind: "choice",
        skill: "Mówienie",
        title: "¿Qué dices? – Co powiesz?",
        instruction: "Wybierz zdanie, które pasuje do sytuacji.",
        items: [
          { prompt: "Przychodzisz do stoiska na targu, ludzie stoją luźno.", options: ["¿Quién es el primero?", "¿Quién es el último?", "¿Cuánto es?"], answer: 1, speakOptions: true },
          { prompt: "Chcesz pół kilo pomidorów.", options: ["Quería medio kilo de tomates.", "Quería media kilo de tomates.", "Quería un medio kilo tomates."], answer: 0, speakOptions: true },
          { prompt: "Masz już wszystko, chcesz zapłacić.", options: ["¿Algo más?", "Nada más, gracias. ¿Cuánto es?", "Aquí tienes el cambio."], answer: 1, speakOptions: true },
          { prompt: "Zamawiasz zupę na pierwsze.", options: ["De postre, sopa.", "De segundo, sopa.", "De primero, para mí, sopa."], answer: 2, speakOptions: true },
          { prompt: "Brakuje ci widelca.", options: ["Perdone, falta un tenedor.", "Perdone, falta un cuchillo.", "Perdone, ¿me trae la cuenta?"], answer: 0, speakOptions: true },
          { prompt: "Chcesz rachunek dla całej rodziny.", options: ["¿Nos trae la carta?", "¿Nos trae la cuenta, por favor?", "¿Me pone la mesa?"], answer: 1, speakOptions: true },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es8-1-4-order",
        kind: "order",
        skill: "Pisanie",
        title: "Ułóż zdania",
        instruction: "Klikaj wyrazy w odpowiedniej kolejności. Kliknij wyraz w odpowiedzi, aby go cofnąć.",
        items: [
          { words: ["encantan", "A", "fresas", "las", "padres", "mis", "les"], answer: "A mis padres les encantan las fresas.", pl: "Moi rodzice uwielbiają truskawki." },
          { words: ["de", "Quería", "huevos", "docena", "una"], answer: "Quería una docena de huevos.", pl: "Poproszę tuzin jajek." },
          { words: ["lo", "No,", "tengo", "no"], answer: "No, no lo tengo.", pl: "Nie, nie mam go." },
          { words: ["merluza", "De", "mí,", "segundo,", "para"], answer: "De segundo, para mí, merluza.", pl: "Na drugie dla mnie morszczuk." },
          { words: ["van", "¿Qué", "postre?", "a", "de", "tomar"], answer: "¿Qué van a tomar de postre?", pl: "Co państwo wezmą na deser?" },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es8-1-4-test",
        kind: "choice",
        skill: "Gramatyka",
        title: "Test: rozdział 1",
        instruction: "10 pytań z całego rozdziału. Jeśli odpowiesz dobrze na co najmniej 8 – rozdział 1 zaliczony. ¡Enhorabuena!",
        items: [
          { prompt: "„Uwielbiam truskawki.”", options: ["Me encanta las fresas.", "Me encantan las fresas.", "Me encantan mucho fresas."], answer: 1, speakOptions: true },
          { prompt: "„Moi dziadkowie lubią rybę.”", options: ["A mis abuelos les gusta el pescado.", "A mis abuelos les gustan el pescado.", "A mis abuelos le gusta pescado."], answer: 0, speakOptions: true },
          { prompt: "„W ogóle nie lubię mleka.”", options: ["No me gusta mucho la leche.", "No me gusta nada la leche.", "Me gusta nada leche."], answer: 1, speakOptions: true },
          { prompt: "„Jem rybę w piątki.”", options: ["Como el pescado los viernes.", "Como pescado los viernes.", "Me gusta pescado los viernes."], answer: 1, speakOptions: true },
          { prompt: "„Jestem bardzo głodny.”", options: ["Tengo mucha hambre.", "Estoy mucho hambre.", "Tengo mucho hambre."], answer: 0, speakOptions: true, explanation: "hambre jest rodzaju żeńskiego → mucha." },
          { prompt: "„sześć jajek”", options: ["medio docena de huevos", "media docena de huevos", "media docena huevos"], answer: 1, speakOptions: true },
          { prompt: "¿Las patatas? ___ quiero grandes.", options: ["Los", "La", "Las"], answer: 2 },
          { prompt: "¿Y el melón? ¿___ quieres para hoy?", options: ["Lo", "La", "Le"], answer: 0 },
          { prompt: "„Poprosimy rachunek.”", options: ["¿Nos trae la carta?", "¿Nos trae la cuenta?", "¿Me trae el cambio?"], answer: 1, speakOptions: true },
          { prompt: "Kelner pyta rodzinę: „¿Qué ___ a tomar?”", options: ["vais", "van", "va"], answer: 1, explanation: "ustedes (państwo) → forma jak dla ellos: van." },
        ],
      },
    },
    {
      type: "exercise",
      exercise: {
        id: "es8-1-4-write",
        kind: "write",
        skill: "Mówienie",
        title: "¡Ahora tú! Impreza u mnie",
        instruction:
          "Organizujesz kolację dla przyjaciół z Hiszpanii. Napisz wiadomość (8–10 zdań): co lubią i czego nie lubią twoi goście, co kupisz na targu (z ilościami), co już masz w domu (z zaimkami lo, la, los, las) i co ugotujesz. Potem kliknij „Posłuchaj mojego tekstu” i przeczytaj go na głos.",
        checklist: [
          "napisz, co lubią goście, z nos / les gusta lub encanta",
          "pamiętaj o rodzajniku po gustar (les gusta el pollo)",
          "wymień co najmniej trzy zakupy z ilościami (un kilo de, una docena de…)",
          "użyj co najmniej dwóch zaimków lo, la, los, las (el pan lo tengo…)",
          "napisz, co będzie de primero, de segundo i de postre",
        ],
        placeholder: "El sábado hago una cena en mi casa…",
        model:
          "El sábado hago una cena en mi casa para mis amigos. A Lucía le encanta la pasta, pero a Pablo no le gusta nada la verdura. A todos nos gusta el pollo. Mañana voy a ir al mercado. Voy a comprar un kilo de tomates, medio kilo de pollo y una docena de huevos. El pan no lo compro: lo tengo en casa. Y el aceite… ¡lo tiene mi madre! De primero, voy a hacer una ensalada. De segundo, pasta con pollo. Y de postre, flan: ¡nos encanta! Para beber, agua y limonada.",
        modelPl:
          "W sobotę robię u siebie kolację dla przyjaciół. Lucía uwielbia makaron, ale Pablo w ogóle nie lubi warzyw. Wszyscy lubimy kurczaka. Jutro pójdę na targ. Kupię kilogram pomidorów, pół kilo kurczaka i tuzin jajek. Chleba nie kupuję: mam go w domu. A oliwę… ma moja mama! Na pierwsze zrobię sałatkę. Na drugie makaron z kurczakiem. A na deser flan: uwielbiamy go! Do picia woda i lemoniada.",
      },
    },
    {
      type: "selfcheck",
      items: [
        "Umiem powiedzieć, co lubię ja i inni: me encanta, nos gusta, les gustan.",
        "Wiem, kiedy jedzenie ma rodzajnik, a kiedy nie: Me gusta el pescado – Como pescado.",
        "Umiem kupić jedzenie w określonej ilości: un kilo de, media docena de, una botella de.",
        "Umiem zastąpić rzeczownik zaimkiem lo, la, los, las.",
        "Umiem zamówić obiad i poprosić o rachunek: de primero…, ¿Nos trae la cuenta?",
        "Rozumiem kelnera, który mówi na „państwo”: ¿Qué van a tomar?",
      ],
    },
  ],
};
