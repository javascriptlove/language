import type { Lesson, SourceLanguage } from "../types";
import { courses } from "./courses";
import { lesson as germanHallo } from "./german/hallo-wie-heisst-du";
import { lesson as germanWoher } from "./german/woher-kommst-du";
import { lesson as germanZahlen } from "./german/zahlen-0-20";
import { lesson as italianCiao } from "./italian/ciao-come-ti-chiami";
import { lesson as italianDiDove } from "./italian/di-dove-sei";
import { lesson as italianNumeri } from "./italian/numeri-0-20";
import { lesson as spanishHola } from "./spanish/hola-como-te-llamas";
import { lesson as spanishDeDonde } from "./spanish/de-donde-eres";
import { lesson as spanishNumeros } from "./spanish/numeros-0-20";
import { lesson as frenchSalut } from "./french/salut-comment-tu-tappelles";
import { lesson as frenchDou } from "./french/tu-es-dou";
import { lesson as frenchNombres } from "./french/nombres-0-20";
import { lesson as germanDasIstMeineFamilie } from "./german/das-ist-meine-familie";
import { lesson as germanHastDuGeschwister } from "./german/hast-du-geschwister";
import { lesson as germanWieIstDeinOpa } from "./german/wie-ist-dein-opa";
import { lesson as spanishEstaEsMiFamilia } from "./spanish/esta-es-mi-familia";
import { lesson as spanishTienesHermanos } from "./spanish/tienes-hermanos";
import { lesson as spanishComoEsTuAbuelo } from "./spanish/como-es-tu-abuelo";
import { lesson as italianLaMiaFamiglia } from "./italian/la-mia-famiglia";
import { lesson as italianHaiFratelli } from "./italian/hai-fratelli";
import { lesson as italianComETuoNonno } from "./italian/com-e-tuo-nonno";
import { lesson as frenchVoiciMaFamille } from "./french/voici-ma-famille";
import { lesson as frenchTuAsDesFreres } from "./french/tu-as-des-freres";
import { lesson as frenchIlEstComment } from "./french/il-est-comment";
import { lesson as spanishQueHayEnTuMochila } from "./spanish/que-hay-en-tu-mochila";
import { lesson as spanishMiAsignaturaFavorita } from "./spanish/mi-asignatura-favorita";
import { lesson as spanishQueHoraEs } from "./spanish/que-hora-es";
import { lesson as germanWasIstDas } from "./german/was-ist-das";
import { lesson as germanMeinLieblingsfach } from "./german/mein-lieblingsfach";
import { lesson as germanWieSpaetIstEs } from "./german/wie-spaet-ist-es";
import { lesson as frenchDansMonSac } from "./french/dans-mon-sac";
import { lesson as frenchMaMatierePreferee } from "./french/ma-matiere-preferee";
import { lesson as frenchQuelleHeureEstIl } from "./french/quelle-heure-est-il";
import { lesson as italianCosaCeNelloZaino } from "./italian/cosa-ce-nello-zaino";
import { lesson as italianLaMiaMateriaPreferita } from "./italian/la-mia-materia-preferita";
import { lesson as italianCheOreSono } from "./italian/che-ore-sono";
import { lesson as spanishRepasoUnidad1 } from "./spanish/repaso-unidad-1";
import { lesson as spanishRepasoUnidad2 } from "./spanish/repaso-unidad-2";
import { lesson as spanishRepasoUnidad3 } from "./spanish/repaso-unidad-3";
import { lesson as germanWiederholungKapitel1 } from "./german/wiederholung-kapitel-1";
import { lesson as germanWiederholungKapitel2 } from "./german/wiederholung-kapitel-2";
import { lesson as germanWiederholungKapitel3 } from "./german/wiederholung-kapitel-3";
import { lesson as frenchRevisionUnite1 } from "./french/revision-unite-1";
import { lesson as frenchRevisionUnite2 } from "./french/revision-unite-2";
import { lesson as frenchRevisionUnite3 } from "./french/revision-unite-3";
import { lesson as italianRipassoUnita1 } from "./italian/ripasso-unita-1";
import { lesson as italianRipassoUnita2 } from "./italian/ripasso-unita-2";
import { lesson as italianRipassoUnita3 } from "./italian/ripasso-unita-3";
import { lesson as portugueseOlaComoTeChamas } from "./portuguese/ola-como-te-chamas";
import { lesson as portugueseDeOndeEs } from "./portuguese/de-onde-es";
import { lesson as portugueseNumeros020 } from "./portuguese/numeros-0-20";
import { lesson as portugueseEstaEAMinhaFamilia } from "./portuguese/esta-e-a-minha-familia";
import { lesson as portugueseTensIrmaos } from "./portuguese/tens-irmaos";
import { lesson as portugueseComoEOTeuAvo } from "./portuguese/como-e-o-teu-avo";
import { lesson as portugueseRevisaoUnidade1 } from "./portuguese/revisao-unidade-1";
import { lesson as portugueseOQueHaNaMochila } from "./portuguese/o-que-ha-na-mochila";
import { lesson as portugueseAMinhaDisciplinaPreferida } from "./portuguese/a-minha-disciplina-preferida";
import { lesson as portugueseQueHorasSao } from "./portuguese/que-horas-sao";
import { lesson as portugueseRevisaoUnidade2 } from "./portuguese/revisao-unidade-2";
import { lesson as portugueseRevisaoUnidade3 } from "./portuguese/revisao-unidade-3";
import { lesson as catalanHolaComEtDius } from "./catalan/hola-com-et-dius";
import { lesson as catalanDonEts } from "./catalan/don-ets";
import { lesson as catalanElsNombres020 } from "./catalan/els-nombres-0-20";
import { lesson as catalanRepasUnitat1 } from "./catalan/repas-unitat-1";
import { lesson as galicianOlaComoTeChamas } from "./galician/ola-como-te-chamas";
import { lesson as galicianDeOndeEs } from "./galician/de-onde-es";
import { lesson as galicianNumeros020 } from "./galician/numeros-0-20";
import { lesson as galicianRepasoUnidade1 } from "./galician/repaso-unidade-1";
import { lesson as galicianQueHaiNaMochila } from "./galician/que-hai-na-mochila";
import { lesson as galicianAMinaMateriaFavorita } from "./galician/a-mina-materia-favorita";
import { lesson as galicianQueHoraE } from "./galician/que-hora-e";
import { lesson as galicianRepasoUnidade3 } from "./galician/repaso-unidade-3";
import { lesson as catalanAquestaEsLaMevaFamilia } from "./catalan/aquesta-es-la-meva-familia";
import { lesson as catalanTensGermans } from "./catalan/tens-germans";
import { lesson as catalanComEsElTeuAvi } from "./catalan/com-es-el-teu-avi";
import { lesson as catalanRepasUnitat2 } from "./catalan/repas-unitat-2";
import { lesson as galicianEstaEAMinaFamilia } from "./galician/esta-e-a-mina-familia";
import { lesson as galicianTesIrmans } from "./galician/tes-irmans";
import { lesson as galicianComoEOTeuAvo } from "./galician/como-e-o-teu-avo";
import { lesson as galicianRepasoUnidade2 } from "./galician/repaso-unidade-2";
import { lesson as catalanQueHiHaALaMotxilla } from "./catalan/que-hi-ha-a-la-motxilla";
import { lesson as catalanLaMevaAssignaturaPreferida } from "./catalan/la-meva-assignatura-preferida";
import { lesson as catalanQuinaHoraEs } from "./catalan/quina-hora-es";
import { lesson as catalanRepasUnitat3 } from "./catalan/repas-unitat-3";
import { lesson as germanWasMachstDuGern } from "./german/was-machst-du-gern";
import { lesson as germanSpielstDuFussball } from "./german/spielst-du-fussball";
import { lesson as germanHastDuAmSamstagZeit } from "./german/hast-du-am-samstag-zeit";
import { lesson as germanWiederholungKapitel4 } from "./german/wiederholung-kapitel-4";
import { lesson as spanishQueTeGustaHacer } from "./spanish/que-te-gusta-hacer";
import { lesson as spanishJuegasAlFutbol } from "./spanish/juegas-al-futbol";
import { lesson as spanishQuedamosElSabado } from "./spanish/quedamos-el-sabado";
import { lesson as spanishRepasoUnidad4 } from "./spanish/repaso-unidad-4";
import { lesson as catalanQueTAgradaFer } from "./catalan/que-t-agrada-fer";
import { lesson as catalanJuguesAFutbol } from "./catalan/jugues-a-futbol";
import { lesson as catalanQuedemDissabte } from "./catalan/quedem-dissabte";
import { lesson as catalanRepasUnitat4 } from "./catalan/repas-unitat-4";
import { lesson as frenchQuestCeQueTuAimesFaire } from "./french/quest-ce-que-tu-aimes-faire";
import { lesson as frenchTuFaisDuSport } from "./french/tu-fais-du-sport";
import { lesson as frenchTuEsLibreSamedi } from "./french/tu-es-libre-samedi";
import { lesson as frenchRevisionUnite4 } from "./french/revision-unite-4";
import { lesson as portugueseOQueGostasDeFazer } from "./portuguese/o-que-gostas-de-fazer";
import { lesson as portugueseQueDesportoFazes } from "./portuguese/que-desporto-fazes";
import { lesson as portugueseQueresIrAoCinema } from "./portuguese/queres-ir-ao-cinema";
import { lesson as portugueseRevisaoUnidade4 } from "./portuguese/revisao-unidade-4";
import { lesson as italianCosaTiPiaceFare } from "./italian/cosa-ti-piace-fare";
import { lesson as italianSportEMusica } from "./italian/sport-e-musica";
import { lesson as italianCosaFaiIlFineSettimana } from "./italian/cosa-fai-il-fine-settimana";
import { lesson as italianRipassoUnita4 } from "./italian/ripasso-unita-4";
import { lesson as galicianQueCheGustaFacer } from "./galician/que-che-gusta-facer";
import { lesson as galicianXogasAoFutbol } from "./galician/xogas-ao-futbol";
import { lesson as galicianImosAoCine } from "./galician/imos-ao-cine";
import { lesson as galicianRepasoUnidade4 } from "./galician/repaso-unidade-4";
import { lesson as germanWannStehstDuAuf } from "./german/wann-stehst-du-auf";
import { lesson as germanWieSiehtDeinTagAus } from "./german/wie-sieht-dein-tag-aus";
import { lesson as germanMeinLieblingstag } from "./german/mein-lieblingstag";
import { lesson as germanWiederholungKapitel5 } from "./german/wiederholung-kapitel-5";
import { lesson as germanUnsereWohnung } from "./german/unsere-wohnung";
import { lesson as germanMeinZimmer } from "./german/mein-zimmer";
import { lesson as germanWoIstMeinHandy } from "./german/wo-ist-mein-handy";
import { lesson as germanWiederholungKapitel6 } from "./german/wiederholung-kapitel-6";
import { lesson as germanWasZiehstDuAn } from "./german/was-ziehst-du-an";
import { lesson as germanWasKostetDas } from "./german/was-kostet-das";
import { lesson as germanEinGeschenkFuerAnna } from "./german/ein-geschenk-fuer-anna";
import { lesson as germanWiederholungKapitel7 } from "./german/wiederholung-kapitel-7";
import { lesson as germanWieIstDasWetter } from "./german/wie-ist-das-wetter";
import { lesson as germanWannHastDuGeburtstag } from "./german/wann-hast-du-geburtstag";
import { lesson as germanFroheWeihnachten } from "./german/frohe-weihnachten";
import { lesson as germanWiederholungKapitel8 } from "./german/wiederholung-kapitel-8";
import { lesson as germanWasIsstDuGern } from "./german/was-isst-du-gern";
import { lesson as germanWirGehenEinkaufen } from "./german/wir-gehen-einkaufen";
import { lesson as germanImRestaurant } from "./german/im-restaurant";
import { lesson as germanG8WiederholungKapitel1 } from "./german/wiederholung-kapitel-1-klasse-8";
import { lesson as germanWasGibtEsInDerStadt } from "./german/was-gibt-es-in-der-stadt";
import { lesson as germanWieKommeIchZumBahnhof } from "./german/wie-komme-ich-zum-bahnhof";
import { lesson as germanMitDemBusOderMitDemRad } from "./german/mit-dem-bus-oder-mit-dem-rad";
import { lesson as germanG8WiederholungKapitel2 } from "./german/wiederholung-kapitel-2-klasse-8";
import { lesson as germanMeinKopfTutWeh } from "./german/mein-kopf-tut-weh";
import { lesson as germanBeimArzt } from "./german/beim-arzt";
import { lesson as germanFitUndGesund } from "./german/fit-und-gesund";
import { lesson as germanG8WiederholungKapitel3 } from "./german/wiederholung-kapitel-3-klasse-8";
import { lesson as germanWasHastDuInDenFerienGemacht } from "./german/was-hast-du-in-den-ferien-gemacht";
import { lesson as germanWirSindNachHamburgGefahren } from "./german/wir-sind-nach-hamburg-gefahren";
import { lesson as germanUrlaubAmMeer } from "./german/urlaub-am-meer";
import { lesson as germanG8WiederholungKapitel4 } from "./german/wiederholung-kapitel-4-klasse-8";
import { lesson as germanWieSiehtErAus } from "./german/wie-sieht-er-aus";
import { lesson as germanEinEchterFreund } from "./german/ein-echter-freund";
import { lesson as germanWirVertragenUnsWieder } from "./german/wir-vertragen-uns-wieder";
import { lesson as germanG8WiederholungKapitel5 } from "./german/wiederholung-kapitel-5-klasse-8";
import { lesson as germanOhneHandyGehtNichts } from "./german/ohne-handy-geht-nichts";
import { lesson as germanIchFindeDass } from "./german/ich-finde-dass";
import { lesson as germanWelcheAppIstBesser } from "./german/welche-app-ist-besser";
import { lesson as germanG8WiederholungKapitel6 } from "./german/wiederholung-kapitel-6-klasse-8";
import { lesson as germanWasKommtInWelcheTonne } from "./german/was-kommt-in-welche-tonne";
import { lesson as germanAusflugInDenWald } from "./german/ausflug-in-den-wald";
import { lesson as germanWennAlleMitmachen } from "./german/wenn-alle-mitmachen";
import { lesson as germanG8WiederholungKapitel7 } from "./german/wiederholung-kapitel-7-klasse-8";
import { lesson as frenchJeMeLeveASeptHeures } from "./french/je-me-leve-a-sept-heures";
import { lesson as frenchCommentTuVasAuCollege } from "./french/comment-tu-vas-au-college";
import { lesson as frenchLeWeekEndOnSeRepose } from "./french/le-week-end-on-se-repose";
import { lesson as frenchRevisionUnite5 } from "./french/revision-unite-5";
import { lesson as frenchJhabiteDansUnAppartement } from "./french/jhabite-dans-un-appartement";
import { lesson as frenchDansMaChambre } from "./french/dans-ma-chambre";
import { lesson as frenchOuEstMonPortable } from "./french/ou-est-mon-portable";
import { lesson as frenchRevisionUnite6 } from "./french/revision-unite-6";
import { lesson as frenchQuestCeQueTuPortes } from "./french/quest-ce-que-tu-portes";
import { lesson as frenchCaCouteCombien } from "./french/ca-coute-combien";
import { lesson as frenchUnCadeauPourLea } from "./french/un-cadeau-pour-lea";
import { lesson as frenchRevisionUnite7 } from "./french/revision-unite-7";
import { lesson as frenchQuelTempsFaitIl } from "./french/quel-temps-fait-il";
import { lesson as frenchCestQuandTonAnniversaire } from "./french/cest-quand-ton-anniversaire";
import { lesson as frenchJoyeuxNoel } from "./french/joyeux-noel";
import { lesson as frenchRevisionUnite8 } from "./french/revision-unite-8";
import { lesson as spanishMeLevantoALasSiete } from "./spanish/me-levanto-a-las-siete";
import { lesson as spanishComoVasAlInstituto } from "./spanish/como-vas-al-instituto";
import { lesson as spanishLosFinesDeSemanaDescanso } from "./spanish/los-fines-de-semana-descanso";
import { lesson as spanishRepasoUnidad5 } from "./spanish/repaso-unidad-5";
import { lesson as spanishVivoEnUnPiso } from "./spanish/vivo-en-un-piso";
import { lesson as spanishEnMiHabitacion } from "./spanish/en-mi-habitacion";
import { lesson as spanishDondeEstaMiMovil } from "./spanish/donde-esta-mi-movil";
import { lesson as spanishRepasoUnidad6 } from "./spanish/repaso-unidad-6";
import { lesson as spanishQueLlevasHoy } from "./spanish/que-llevas-hoy";
import { lesson as spanishCuantoCuesta } from "./spanish/cuanto-cuesta";
import { lesson as spanishUnRegaloParaMarcos } from "./spanish/un-regalo-para-marcos";
import { lesson as spanishRepasoUnidad7 } from "./spanish/repaso-unidad-7";
import { lesson as spanishQueTiempoHace } from "./spanish/que-tiempo-hace";
import { lesson as spanishCuandoEsTuCumpleanos } from "./spanish/cuando-es-tu-cumpleanos";
import { lesson as spanishFelizNavidad } from "./spanish/feliz-navidad";
import { lesson as spanishRepasoUnidad8 } from "./spanish/repaso-unidad-8";
import { lesson as italianMiAlzoAlleSette } from "./italian/mi-alzo-alle-sette";
import { lesson as italianComeVaiAScuola } from "./italian/come-vai-a-scuola";
import { lesson as italianIlFineSettimanaMiRiposo } from "./italian/il-fine-settimana-mi-riposo";
import { lesson as italianRipassoUnita5 } from "./italian/ripasso-unita-5";
import { lesson as italianAbitoInUnAppartamento } from "./italian/abito-in-un-appartamento";
import { lesson as italianNellaMiaCamera } from "./italian/nella-mia-camera";
import { lesson as italianDoveIlMioTelefono } from "./italian/dove-il-mio-telefono";
import { lesson as italianRipassoUnita6 } from "./italian/ripasso-unita-6";
import { lesson as italianCosaIndossiOggi } from "./italian/cosa-indossi-oggi";
import { lesson as italianQuantoCosta } from "./italian/quanto-costa";
import { lesson as italianUnRegaloPerLuca } from "./italian/un-regalo-per-luca";
import { lesson as italianRipassoUnita7 } from "./italian/ripasso-unita-7";
import { lesson as italianCheTempoFa } from "./italian/che-tempo-fa";
import { lesson as italianQuandoIlTuoCompleanno } from "./italian/quando-il-tuo-compleanno";
import { lesson as italianBuonNatale } from "./italian/buon-natale";
import { lesson as italianRipassoUnita8 } from "./italian/ripasso-unita-8";
import { lesson as portugueseLevantoMeAsSete } from "./portuguese/levanto-me-as-sete";
import { lesson as portugueseComoVaisParaAEscola } from "./portuguese/como-vais-para-a-escola";
import { lesson as portugueseAoFimDeSemanaDescanso } from "./portuguese/ao-fim-de-semana-descanso";
import { lesson as portugueseRevisaoUnidade5 } from "./portuguese/revisao-unidade-5";
import { lesson as portugueseMoroNumApartamento } from "./portuguese/moro-num-apartamento";
import { lesson as portugueseNoMeuQuarto } from "./portuguese/no-meu-quarto";
import { lesson as portugueseOndeEstaOMeuTelemovel } from "./portuguese/onde-esta-o-meu-telemovel";
import { lesson as portugueseRevisaoUnidade6 } from "./portuguese/revisao-unidade-6";
import { lesson as portugueseOQueVestesHoje } from "./portuguese/o-que-vestes-hoje";
import { lesson as portugueseQuantoCusta } from "./portuguese/quanto-custa";
import { lesson as portugueseUmPresenteParaOTiago } from "./portuguese/um-presente-para-o-tiago";
import { lesson as portugueseRevisaoUnidade7 } from "./portuguese/revisao-unidade-7";
import { lesson as portugueseQueTempoFaz } from "./portuguese/que-tempo-faz";
import { lesson as portugueseQuandoEOTeuAniversario } from "./portuguese/quando-e-o-teu-aniversario";
import { lesson as portugueseFelizNatal } from "./portuguese/feliz-natal";
import { lesson as portugueseRevisaoUnidade8 } from "./portuguese/revisao-unidade-8";
import { lesson as catalanEmLlevoALesSet } from "./catalan/em-llevo-a-les-set";
import { lesson as catalanComVasALInstitut } from "./catalan/com-vas-a-l-institut";
import { lesson as catalanElCapDeSetmana } from "./catalan/el-cap-de-setmana";
import { lesson as catalanRepasUnitat5 } from "./catalan/repas-unitat-5";
import { lesson as catalanViscEnUnPis } from "./catalan/visc-en-un-pis";
import { lesson as catalanALaMevaHabitacio } from "./catalan/a-la-meva-habitacio";
import { lesson as catalanOnEsElMeuMobil } from "./catalan/on-es-el-meu-mobil";
import { lesson as catalanRepasUnitat6 } from "./catalan/repas-unitat-6";
import { lesson as catalanQuePortesAvui } from "./catalan/que-portes-avui";
import { lesson as catalanQuantCosta } from "./catalan/quant-costa";
import { lesson as catalanUnRegalPerAlJordi } from "./catalan/un-regal-per-al-jordi";
import { lesson as catalanRepasUnitat7 } from "./catalan/repas-unitat-7";
import { lesson as catalanQuinTempsFa } from "./catalan/quin-temps-fa";
import { lesson as catalanQuanFasAnys } from "./catalan/quan-fas-anys";
import { lesson as catalanBonNadal } from "./catalan/bon-nadal";
import { lesson as catalanRepasUnitat8 } from "./catalan/repas-unitat-8";
import { lesson as galicianLevantomeAsSete } from "./galician/levantome-as-sete";
import { lesson as galicianComoVasAoInstituto } from "./galician/como-vas-ao-instituto";
import { lesson as galicianAFinDeSemana } from "./galician/a-fin-de-semana";
import { lesson as galicianRepasoUnidade5 } from "./galician/repaso-unidade-5";
import { lesson as galicianVivoNunPiso } from "./galician/vivo-nun-piso";
import { lesson as galicianNoMeuCuarto } from "./galician/no-meu-cuarto";
import { lesson as galicianOndeEstaOMeuMobil } from "./galician/onde-esta-o-meu-mobil";
import { lesson as galicianRepasoUnidade6 } from "./galician/repaso-unidade-6";
import { lesson as galicianQueLevasHoxe } from "./galician/que-levas-hoxe";
import { lesson as galicianCantoCusta } from "./galician/canto-custa";
import { lesson as galicianUnAgasalloParaBrais } from "./galician/un-agasallo-para-brais";
import { lesson as galicianRepasoUnidade7 } from "./galician/repaso-unidade-7";
import { lesson as galicianQueTempoFai } from "./galician/que-tempo-fai";
import { lesson as galicianCandoFasAnos } from "./galician/cando-fas-anos";
import { lesson as galicianBoNadal } from "./galician/bo-nadal";
import { lesson as galicianRepasoUnidade8 } from "./galician/repaso-unidade-8";

/** Courses for Polish speakers – all explanations are in Polish. */
export const polish: SourceLanguage = {
  slug: "polish",
  htmlLang: "pl",
  name: "Polski",
  iSpeak: "Mówię po polsku",
  flag: "pl",
  courses,
  // keyed by `${course}/${grade}/${lesson}`
  lessons: {
    "german/grade-7/hallo-wie-heisst-du": germanHallo,
    "german/grade-7/woher-kommst-du": germanWoher,
    "german/grade-7/zahlen-0-20": germanZahlen,
    "spanish/grade-7/hola-como-te-llamas": spanishHola,
    "spanish/grade-7/de-donde-eres": spanishDeDonde,
    "spanish/grade-7/numeros-0-20": spanishNumeros,
    "italian/grade-7/ciao-come-ti-chiami": italianCiao,
    "italian/grade-7/di-dove-sei": italianDiDove,
    "italian/grade-7/numeri-0-20": italianNumeri,
    "french/grade-7/salut-comment-tu-tappelles": frenchSalut,
    "french/grade-7/tu-es-dou": frenchDou,
    "french/grade-7/nombres-0-20": frenchNombres,
    "german/grade-7/das-ist-meine-familie": germanDasIstMeineFamilie,
    "german/grade-7/hast-du-geschwister": germanHastDuGeschwister,
    "german/grade-7/wie-ist-dein-opa": germanWieIstDeinOpa,
    "spanish/grade-7/esta-es-mi-familia": spanishEstaEsMiFamilia,
    "spanish/grade-7/tienes-hermanos": spanishTienesHermanos,
    "spanish/grade-7/como-es-tu-abuelo": spanishComoEsTuAbuelo,
    "italian/grade-7/la-mia-famiglia": italianLaMiaFamiglia,
    "italian/grade-7/hai-fratelli": italianHaiFratelli,
    "italian/grade-7/com-e-tuo-nonno": italianComETuoNonno,
    "french/grade-7/voici-ma-famille": frenchVoiciMaFamille,
    "french/grade-7/tu-as-des-freres": frenchTuAsDesFreres,
    "french/grade-7/il-est-comment": frenchIlEstComment,
    "spanish/grade-7/que-hay-en-tu-mochila": spanishQueHayEnTuMochila,
    "spanish/grade-7/mi-asignatura-favorita": spanishMiAsignaturaFavorita,
    "spanish/grade-7/que-hora-es": spanishQueHoraEs,
    "german/grade-7/was-ist-das": germanWasIstDas,
    "german/grade-7/mein-lieblingsfach": germanMeinLieblingsfach,
    "german/grade-7/wie-spaet-ist-es": germanWieSpaetIstEs,
    "french/grade-7/dans-mon-sac": frenchDansMonSac,
    "french/grade-7/ma-matiere-preferee": frenchMaMatierePreferee,
    "french/grade-7/quelle-heure-est-il": frenchQuelleHeureEstIl,
    "italian/grade-7/cosa-ce-nello-zaino": italianCosaCeNelloZaino,
    "italian/grade-7/la-mia-materia-preferita": italianLaMiaMateriaPreferita,
    "italian/grade-7/che-ore-sono": italianCheOreSono,
    "spanish/grade-7/repaso-unidad-1": spanishRepasoUnidad1,
    "spanish/grade-7/repaso-unidad-2": spanishRepasoUnidad2,
    "spanish/grade-7/repaso-unidad-3": spanishRepasoUnidad3,
    "german/grade-7/wiederholung-kapitel-1": germanWiederholungKapitel1,
    "german/grade-7/wiederholung-kapitel-2": germanWiederholungKapitel2,
    "german/grade-7/wiederholung-kapitel-3": germanWiederholungKapitel3,
    "french/grade-7/revision-unite-1": frenchRevisionUnite1,
    "french/grade-7/revision-unite-2": frenchRevisionUnite2,
    "french/grade-7/revision-unite-3": frenchRevisionUnite3,
    "italian/grade-7/ripasso-unita-1": italianRipassoUnita1,
    "italian/grade-7/ripasso-unita-2": italianRipassoUnita2,
    "italian/grade-7/ripasso-unita-3": italianRipassoUnita3,
    "portuguese/grade-7/ola-como-te-chamas": portugueseOlaComoTeChamas,
    "portuguese/grade-7/de-onde-es": portugueseDeOndeEs,
    "portuguese/grade-7/numeros-0-20": portugueseNumeros020,
    "portuguese/grade-7/esta-e-a-minha-familia": portugueseEstaEAMinhaFamilia,
    "portuguese/grade-7/tens-irmaos": portugueseTensIrmaos,
    "portuguese/grade-7/como-e-o-teu-avo": portugueseComoEOTeuAvo,
    "portuguese/grade-7/revisao-unidade-1": portugueseRevisaoUnidade1,
    "portuguese/grade-7/o-que-ha-na-mochila": portugueseOQueHaNaMochila,
    "portuguese/grade-7/a-minha-disciplina-preferida": portugueseAMinhaDisciplinaPreferida,
    "portuguese/grade-7/que-horas-sao": portugueseQueHorasSao,
    "portuguese/grade-7/revisao-unidade-2": portugueseRevisaoUnidade2,
    "portuguese/grade-7/revisao-unidade-3": portugueseRevisaoUnidade3,
    "catalan/grade-7/hola-com-et-dius": catalanHolaComEtDius,
    "catalan/grade-7/don-ets": catalanDonEts,
    "catalan/grade-7/els-nombres-0-20": catalanElsNombres020,
    "catalan/grade-7/repas-unitat-1": catalanRepasUnitat1,
    "galician/grade-7/ola-como-te-chamas": galicianOlaComoTeChamas,
    "galician/grade-7/de-onde-es": galicianDeOndeEs,
    "galician/grade-7/numeros-0-20": galicianNumeros020,
    "galician/grade-7/repaso-unidade-1": galicianRepasoUnidade1,
    "galician/grade-7/que-hai-na-mochila": galicianQueHaiNaMochila,
    "galician/grade-7/a-mina-materia-favorita": galicianAMinaMateriaFavorita,
    "galician/grade-7/que-hora-e": galicianQueHoraE,
    "galician/grade-7/repaso-unidade-3": galicianRepasoUnidade3,
    "catalan/grade-7/aquesta-es-la-meva-familia": catalanAquestaEsLaMevaFamilia,
    "catalan/grade-7/tens-germans": catalanTensGermans,
    "catalan/grade-7/com-es-el-teu-avi": catalanComEsElTeuAvi,
    "catalan/grade-7/repas-unitat-2": catalanRepasUnitat2,
    "galician/grade-7/esta-e-a-mina-familia": galicianEstaEAMinaFamilia,
    "galician/grade-7/tes-irmans": galicianTesIrmans,
    "galician/grade-7/como-e-o-teu-avo": galicianComoEOTeuAvo,
    "galician/grade-7/repaso-unidade-2": galicianRepasoUnidade2,
    "catalan/grade-7/que-hi-ha-a-la-motxilla": catalanQueHiHaALaMotxilla,
    "catalan/grade-7/la-meva-assignatura-preferida": catalanLaMevaAssignaturaPreferida,
    "catalan/grade-7/quina-hora-es": catalanQuinaHoraEs,
    "catalan/grade-7/repas-unitat-3": catalanRepasUnitat3,
    "german/grade-7/was-machst-du-gern": germanWasMachstDuGern,
    "german/grade-7/spielst-du-fussball": germanSpielstDuFussball,
    "german/grade-7/hast-du-am-samstag-zeit": germanHastDuAmSamstagZeit,
    "german/grade-7/wiederholung-kapitel-4": germanWiederholungKapitel4,
    "spanish/grade-7/que-te-gusta-hacer": spanishQueTeGustaHacer,
    "spanish/grade-7/juegas-al-futbol": spanishJuegasAlFutbol,
    "spanish/grade-7/quedamos-el-sabado": spanishQuedamosElSabado,
    "spanish/grade-7/repaso-unidad-4": spanishRepasoUnidad4,
    "catalan/grade-7/que-t-agrada-fer": catalanQueTAgradaFer,
    "catalan/grade-7/jugues-a-futbol": catalanJuguesAFutbol,
    "catalan/grade-7/quedem-dissabte": catalanQuedemDissabte,
    "catalan/grade-7/repas-unitat-4": catalanRepasUnitat4,
    "french/grade-7/quest-ce-que-tu-aimes-faire": frenchQuestCeQueTuAimesFaire,
    "french/grade-7/tu-fais-du-sport": frenchTuFaisDuSport,
    "french/grade-7/tu-es-libre-samedi": frenchTuEsLibreSamedi,
    "french/grade-7/revision-unite-4": frenchRevisionUnite4,
    "portuguese/grade-7/o-que-gostas-de-fazer": portugueseOQueGostasDeFazer,
    "portuguese/grade-7/que-desporto-fazes": portugueseQueDesportoFazes,
    "portuguese/grade-7/queres-ir-ao-cinema": portugueseQueresIrAoCinema,
    "portuguese/grade-7/revisao-unidade-4": portugueseRevisaoUnidade4,
    "italian/grade-7/cosa-ti-piace-fare": italianCosaTiPiaceFare,
    "italian/grade-7/sport-e-musica": italianSportEMusica,
    "italian/grade-7/cosa-fai-il-fine-settimana": italianCosaFaiIlFineSettimana,
    "italian/grade-7/ripasso-unita-4": italianRipassoUnita4,
    "galician/grade-7/que-che-gusta-facer": galicianQueCheGustaFacer,
    "galician/grade-7/xogas-ao-futbol": galicianXogasAoFutbol,
    "galician/grade-7/imos-ao-cine": galicianImosAoCine,
    "galician/grade-7/repaso-unidade-4": galicianRepasoUnidade4,
    "german/grade-7/wann-stehst-du-auf": germanWannStehstDuAuf,
    "german/grade-7/wie-sieht-dein-tag-aus": germanWieSiehtDeinTagAus,
    "german/grade-7/mein-lieblingstag": germanMeinLieblingstag,
    "german/grade-7/wiederholung-kapitel-5": germanWiederholungKapitel5,
    "german/grade-7/unsere-wohnung": germanUnsereWohnung,
    "german/grade-7/mein-zimmer": germanMeinZimmer,
    "german/grade-7/wo-ist-mein-handy": germanWoIstMeinHandy,
    "german/grade-7/wiederholung-kapitel-6": germanWiederholungKapitel6,
    "german/grade-7/was-ziehst-du-an": germanWasZiehstDuAn,
    "german/grade-7/was-kostet-das": germanWasKostetDas,
    "german/grade-7/ein-geschenk-fuer-anna": germanEinGeschenkFuerAnna,
    "german/grade-7/wiederholung-kapitel-7": germanWiederholungKapitel7,
    "german/grade-7/wie-ist-das-wetter": germanWieIstDasWetter,
    "german/grade-7/wann-hast-du-geburtstag": germanWannHastDuGeburtstag,
    "german/grade-7/frohe-weihnachten": germanFroheWeihnachten,
    "german/grade-7/wiederholung-kapitel-8": germanWiederholungKapitel8,
    "german/grade-8/was-isst-du-gern": germanWasIsstDuGern,
    "german/grade-8/wir-gehen-einkaufen": germanWirGehenEinkaufen,
    "german/grade-8/im-restaurant": germanImRestaurant,
    "german/grade-8/wiederholung-kapitel-1": germanG8WiederholungKapitel1,
    "german/grade-8/was-gibt-es-in-der-stadt": germanWasGibtEsInDerStadt,
    "german/grade-8/wie-komme-ich-zum-bahnhof": germanWieKommeIchZumBahnhof,
    "german/grade-8/mit-dem-bus-oder-mit-dem-rad": germanMitDemBusOderMitDemRad,
    "german/grade-8/wiederholung-kapitel-2": germanG8WiederholungKapitel2,
    "german/grade-8/mein-kopf-tut-weh": germanMeinKopfTutWeh,
    "german/grade-8/beim-arzt": germanBeimArzt,
    "german/grade-8/fit-und-gesund": germanFitUndGesund,
    "german/grade-8/wiederholung-kapitel-3": germanG8WiederholungKapitel3,
    "german/grade-8/was-hast-du-in-den-ferien-gemacht": germanWasHastDuInDenFerienGemacht,
    "german/grade-8/wir-sind-nach-hamburg-gefahren": germanWirSindNachHamburgGefahren,
    "german/grade-8/urlaub-am-meer": germanUrlaubAmMeer,
    "german/grade-8/wiederholung-kapitel-4": germanG8WiederholungKapitel4,
    "german/grade-8/wie-sieht-er-aus": germanWieSiehtErAus,
    "german/grade-8/ein-echter-freund": germanEinEchterFreund,
    "german/grade-8/wir-vertragen-uns-wieder": germanWirVertragenUnsWieder,
    "german/grade-8/wiederholung-kapitel-5": germanG8WiederholungKapitel5,
    "german/grade-8/ohne-handy-geht-nichts": germanOhneHandyGehtNichts,
    "german/grade-8/ich-finde-dass": germanIchFindeDass,
    "german/grade-8/welche-app-ist-besser": germanWelcheAppIstBesser,
    "german/grade-8/wiederholung-kapitel-6": germanG8WiederholungKapitel6,
    "german/grade-8/was-kommt-in-welche-tonne": germanWasKommtInWelcheTonne,
    "german/grade-8/ausflug-in-den-wald": germanAusflugInDenWald,
    "german/grade-8/wenn-alle-mitmachen": germanWennAlleMitmachen,
    "german/grade-8/wiederholung-kapitel-7": germanG8WiederholungKapitel7,
    "french/grade-7/je-me-leve-a-sept-heures": frenchJeMeLeveASeptHeures,
    "french/grade-7/comment-tu-vas-au-college": frenchCommentTuVasAuCollege,
    "french/grade-7/le-week-end-on-se-repose": frenchLeWeekEndOnSeRepose,
    "french/grade-7/revision-unite-5": frenchRevisionUnite5,
    "french/grade-7/jhabite-dans-un-appartement": frenchJhabiteDansUnAppartement,
    "french/grade-7/dans-ma-chambre": frenchDansMaChambre,
    "french/grade-7/ou-est-mon-portable": frenchOuEstMonPortable,
    "french/grade-7/revision-unite-6": frenchRevisionUnite6,
    "french/grade-7/quest-ce-que-tu-portes": frenchQuestCeQueTuPortes,
    "french/grade-7/ca-coute-combien": frenchCaCouteCombien,
    "french/grade-7/un-cadeau-pour-lea": frenchUnCadeauPourLea,
    "french/grade-7/revision-unite-7": frenchRevisionUnite7,
    "french/grade-7/quel-temps-fait-il": frenchQuelTempsFaitIl,
    "french/grade-7/cest-quand-ton-anniversaire": frenchCestQuandTonAnniversaire,
    "french/grade-7/joyeux-noel": frenchJoyeuxNoel,
    "french/grade-7/revision-unite-8": frenchRevisionUnite8,
    "spanish/grade-7/me-levanto-a-las-siete": spanishMeLevantoALasSiete,
    "spanish/grade-7/como-vas-al-instituto": spanishComoVasAlInstituto,
    "spanish/grade-7/los-fines-de-semana-descanso": spanishLosFinesDeSemanaDescanso,
    "spanish/grade-7/repaso-unidad-5": spanishRepasoUnidad5,
    "spanish/grade-7/vivo-en-un-piso": spanishVivoEnUnPiso,
    "spanish/grade-7/en-mi-habitacion": spanishEnMiHabitacion,
    "spanish/grade-7/donde-esta-mi-movil": spanishDondeEstaMiMovil,
    "spanish/grade-7/repaso-unidad-6": spanishRepasoUnidad6,
    "spanish/grade-7/que-llevas-hoy": spanishQueLlevasHoy,
    "spanish/grade-7/cuanto-cuesta": spanishCuantoCuesta,
    "spanish/grade-7/un-regalo-para-marcos": spanishUnRegaloParaMarcos,
    "spanish/grade-7/repaso-unidad-7": spanishRepasoUnidad7,
    "spanish/grade-7/que-tiempo-hace": spanishQueTiempoHace,
    "spanish/grade-7/cuando-es-tu-cumpleanos": spanishCuandoEsTuCumpleanos,
    "spanish/grade-7/feliz-navidad": spanishFelizNavidad,
    "spanish/grade-7/repaso-unidad-8": spanishRepasoUnidad8,
    "italian/grade-7/mi-alzo-alle-sette": italianMiAlzoAlleSette,
    "italian/grade-7/come-vai-a-scuola": italianComeVaiAScuola,
    "italian/grade-7/il-fine-settimana-mi-riposo": italianIlFineSettimanaMiRiposo,
    "italian/grade-7/ripasso-unita-5": italianRipassoUnita5,
    "italian/grade-7/abito-in-un-appartamento": italianAbitoInUnAppartamento,
    "italian/grade-7/nella-mia-camera": italianNellaMiaCamera,
    "italian/grade-7/dove-il-mio-telefono": italianDoveIlMioTelefono,
    "italian/grade-7/ripasso-unita-6": italianRipassoUnita6,
    "italian/grade-7/cosa-indossi-oggi": italianCosaIndossiOggi,
    "italian/grade-7/quanto-costa": italianQuantoCosta,
    "italian/grade-7/un-regalo-per-luca": italianUnRegaloPerLuca,
    "italian/grade-7/ripasso-unita-7": italianRipassoUnita7,
    "italian/grade-7/che-tempo-fa": italianCheTempoFa,
    "italian/grade-7/quando-il-tuo-compleanno": italianQuandoIlTuoCompleanno,
    "italian/grade-7/buon-natale": italianBuonNatale,
    "italian/grade-7/ripasso-unita-8": italianRipassoUnita8,
    "portuguese/grade-7/levanto-me-as-sete": portugueseLevantoMeAsSete,
    "portuguese/grade-7/como-vais-para-a-escola": portugueseComoVaisParaAEscola,
    "portuguese/grade-7/ao-fim-de-semana-descanso": portugueseAoFimDeSemanaDescanso,
    "portuguese/grade-7/revisao-unidade-5": portugueseRevisaoUnidade5,
    "portuguese/grade-7/moro-num-apartamento": portugueseMoroNumApartamento,
    "portuguese/grade-7/no-meu-quarto": portugueseNoMeuQuarto,
    "portuguese/grade-7/onde-esta-o-meu-telemovel": portugueseOndeEstaOMeuTelemovel,
    "portuguese/grade-7/revisao-unidade-6": portugueseRevisaoUnidade6,
    "portuguese/grade-7/o-que-vestes-hoje": portugueseOQueVestesHoje,
    "portuguese/grade-7/quanto-custa": portugueseQuantoCusta,
    "portuguese/grade-7/um-presente-para-o-tiago": portugueseUmPresenteParaOTiago,
    "portuguese/grade-7/revisao-unidade-7": portugueseRevisaoUnidade7,
    "portuguese/grade-7/que-tempo-faz": portugueseQueTempoFaz,
    "portuguese/grade-7/quando-e-o-teu-aniversario": portugueseQuandoEOTeuAniversario,
    "portuguese/grade-7/feliz-natal": portugueseFelizNatal,
    "portuguese/grade-7/revisao-unidade-8": portugueseRevisaoUnidade8,
    "catalan/grade-7/em-llevo-a-les-set": catalanEmLlevoALesSet,
    "catalan/grade-7/com-vas-a-l-institut": catalanComVasALInstitut,
    "catalan/grade-7/el-cap-de-setmana": catalanElCapDeSetmana,
    "catalan/grade-7/repas-unitat-5": catalanRepasUnitat5,
    "catalan/grade-7/visc-en-un-pis": catalanViscEnUnPis,
    "catalan/grade-7/a-la-meva-habitacio": catalanALaMevaHabitacio,
    "catalan/grade-7/on-es-el-meu-mobil": catalanOnEsElMeuMobil,
    "catalan/grade-7/repas-unitat-6": catalanRepasUnitat6,
    "catalan/grade-7/que-portes-avui": catalanQuePortesAvui,
    "catalan/grade-7/quant-costa": catalanQuantCosta,
    "catalan/grade-7/un-regal-per-al-jordi": catalanUnRegalPerAlJordi,
    "catalan/grade-7/repas-unitat-7": catalanRepasUnitat7,
    "catalan/grade-7/quin-temps-fa": catalanQuinTempsFa,
    "catalan/grade-7/quan-fas-anys": catalanQuanFasAnys,
    "catalan/grade-7/bon-nadal": catalanBonNadal,
    "catalan/grade-7/repas-unitat-8": catalanRepasUnitat8,
    "galician/grade-7/levantome-as-sete": galicianLevantomeAsSete,
    "galician/grade-7/como-vas-ao-instituto": galicianComoVasAoInstituto,
    "galician/grade-7/a-fin-de-semana": galicianAFinDeSemana,
    "galician/grade-7/repaso-unidade-5": galicianRepasoUnidade5,
    "galician/grade-7/vivo-nun-piso": galicianVivoNunPiso,
    "galician/grade-7/no-meu-cuarto": galicianNoMeuCuarto,
    "galician/grade-7/onde-esta-o-meu-mobil": galicianOndeEstaOMeuMobil,
    "galician/grade-7/repaso-unidade-6": galicianRepasoUnidade6,
    "galician/grade-7/que-levas-hoxe": galicianQueLevasHoxe,
    "galician/grade-7/canto-custa": galicianCantoCusta,
    "galician/grade-7/un-agasallo-para-brais": galicianUnAgasalloParaBrais,
    "galician/grade-7/repaso-unidade-7": galicianRepasoUnidade7,
    "galician/grade-7/que-tempo-fai": galicianQueTempoFai,
    "galician/grade-7/cando-fas-anos": galicianCandoFasAnos,
    "galician/grade-7/bo-nadal": galicianBoNadal,
    "galician/grade-7/repaso-unidade-8": galicianRepasoUnidade8,
  } satisfies Record<string, Lesson>,
};
