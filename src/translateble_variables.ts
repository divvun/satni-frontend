/* eslint-disable no-unused-vars */
// @ts-nocheck - Variables are intentionally unused (used by @lingui/macro for translation extraction)
// @ts-ignore - @lingui/macro has no type definitions
import { t } from '@lingui/macro';

const _dicts = [
  t`termwiki`,
  t`gtsmenob`,
  t`gtnobsme`,
  t`gtnobsma`,
  t`gtsmanob`,
  t`gtsmefin`,
  t`gtfinsme`,
  t`gtsmesmn`,
  t`gtsmnsme`,
  t`gtfinsmn`,
  t`gtsmnfin`,
  t`gtfinnob`,
  t`sammallahtismefin`,
  t`habmersmjnob`,
  t`habmernobsmj`,
  t`gtsmsnob`,
  t`gtsmsfin`,
  t`gtsmsrus`,
  t`gtnobsms`,
  t`gtfinsms`,
  t`gtrussms`,
];

const _partOfSpeech = [t`N`, t`V`, t`A`, t`Adv`, t`Pron`];

const _languageCodes = [
  t`en`,
  t`eng`,
  t`fi`,
  t`fin`,
  t`nb`,
  t`nn`,
  t`nno`,
  t`nob`,
  t`se`,
  t`sv`,
  t`sma`,
  t`sme`,
  t`smj`,
  t`smn`,
  t`sms`,
  t`swe`,
  t`lat`,
  t`rus`,
];

const _contryCodes = [t`FI`, t`SE`, t`NO`];

const _dialects = [t`east`, t`west`, t`north`, t`south`];

const _languageCodesGenitive = [
  t`en_genitive`,
  t`eng_genitive`,
  t`fi_genitive`,
  t`fin_genitive`,
  t`nb_genitive`,
  t`nn_genitive`,
  t`nno_genitive`,
  t`nob_genitive`,
  t`se_genitive`,
  t`sv_genitive`,
  t`sma_genitive`,
  t`sme_genitive`,
  t`smj_genitive`,
  t`smn_genitive`,
  t`sms_genitive`,
  t`swe_genitive`,
  t`lat_genitive`,
];

const _categories = [
  t`Beaivválaš giella`,
  t`Boazodoallu`,
  t`Dihtorteknologiija ja diehtoteknihkka`,
  t`Dáidda ja girjjálašvuohta`,
  t`Eanandoallu`,
  t`Education`,
  t`Ekologiija ja biras`,
  t`Ekonomiija ja gávppašeapmi`,
  t`Geografiija`,
  t`Gielladieđa`,
  t`Gulahallanteknihkka`,
  t`Guolástus`,
  t`Huksenteknihkka`,
  t`Juridihkka`,
  t`Luonddudieđa ja matematihkka`,
  t`Medisiidna`,
  t`Mášenteknihkka`,
  t`Ođđa sánit`,
  t`Religion`,
  t`Servodatdieđa`,
  t`Stáda almmolaš hálddašeapmi`,
  t`Teknihkka industriija duodji`,
  t`Álšateknihkka`,
  t`Ásttoáigi ja faláštallan`,
  t`Ávnnasindustriija`,
];

interface DictionaryInfoEntry {
  info: any[];
}

const dictionaryInfo: Record<string, DictionaryInfoEntry> = {
  sammallahtismefin: {
    info: [
      t`Emeritusprofessor Pekka Sammallahti has based this dictionary on his own printed dictionaries published in 1989 and 1993.`,
      t`The dictionary contains more than 50.000 entries, and Sammallahti adds entries regularly.`,
    ],
  },
  termwiki: {
    info: [
      t`Giellagáldu's main task is to standardise new terminology and written language for the Sami languages. The standardised terms from their <a href="satni.uit.no/termwiki">termbase<a> is exported daily to this site, to be easily accessible to the Sami community.`,
      t`The termbase consists of over 50,000 term articles, and is updated on a regular basis.`,
    ],
  },
  gtsmenob: {
    info: [
      t`This dictionary builds on Nils Jernsletten's dictionary Álgosátnegirji (4322 words), but now it contains 30,000 entries, plus 6000 place name entries.`,
      t`Approximately half of the content of the dictionary is taken by searching for parallels in a parallel corpus of administrative text. This work was financed by the Ministry of Local Government and Modernisation.`,
    ],
  },
  gtnobsme: {
    info: [
      t`Norwegian → North Sámi is based on the North Sámi → Norwegian dictionary, but frequent Norwegian words have been added. It contains about 26,000 Norwegian entries.`,
      t`Approximately half of the content of the dictionary is taken by searching for parallels in a parallel corpus of administrative text. This work was financed by the Ministry of Local Government and Modernisation.`,
    ],
  },
  gtnobsma: {
    info: [
      t`This dictionary builds on material prepared by Albert Jåma and Tove Brustad in the Hemnes Saami Organization, but has in addition gained words from Giellatekno and Aajege's work with the Southern Sámi Oahpa.`,
    ],
  },
  gtsmanob: {
    info: [
      t`This dictionary builds on material prepared by Albert Jåma and Tove Brustad in the Hemnes Saami Organization, but has in addition gained words from Giellatekno and Aajege's work with the Southern Sámi Oahpa.`,
    ],
  },
  gtsmefin: {
    info: [
      t`This dictionary is based on lexical material from the Institute for the Languages of Finland, and from Giellatekno's work with the North Saami Oahpa. In addition, we have included frequent words from North Saami.`,
      t`The dictionary contains about 11,000 entries.`,
    ],
  },
  gtfinsme: {
    info: [
      t`This dictionary is based on lexical material from the Institute for the Languages of Finland, and from Giellatekno's work with the North Saami Oahpa. In addition frequent Finnish words have been added.`,
      t`The dictionary contains about 11,000 entries.`,
    ],
  },
  gtsmesmn: {
    info: [
      t`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`,
    ],
  },
  gtsmnsme: {
    info: [
      t`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`,
    ],
  },
  gtfinsmn: {
    info: [
      t`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`,
    ],
  },
  gtsmnfin: {
    info: [
      t`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`,
    ],
  },
  gtfinnob: {
    info: [
      t`Trond Trosterud's Finnish – Norwegian dictionary has more than 30000 search words.`,
    ],
  },
  habmersmjnob: {
    info: [
      t`Hábmer municipality's Lule Sámi - Norwegian medicinal dictionary. Contains about 1600 search words.`,
    ],
  },
  habmernobsmj: {
    info: [
      t`Hábmer municipality's Norwegian - Lule Sámi medicinal dictionary. Contains about 1600 search words.`,
    ],
  },
  gtsmsnob: {
    info: [
      t`Skolt Sámi → X project contains materials deriving from the research of numerous projects, dictionaries and word lists.`,
      t`The research projects have lead to the merging of several word lists featuring Skolt Sami as a source language with multiple target languages. Michael Rießler's contribution mainly consists of the integration of an earlier created Skolt Saami word list with English, Finnish, Norwegian, and Russian translations and linking to sound files.`,
      t`The creation of this wordlist was related to the Kola Sámi Documentation Project (KSDP) led by Michael Rießler, to work carried out by Michael Rießler at Äʹvv Saaʹmi muʹzei, as well as the art installation "Language Memory" at Äʹvv Saaʹmi muʹzei by Espen Sommer Eide.`,
      t`Other main contributors to these projects were (in alphabetical order) Katri Jefremoff, Erkki Lumisalmi, Zoja Nosova, Lena Terhart, and Joshua Wilbur.`,
      t`The KSDP started in 2005 and in principle is still active.`,
      t`Language memory was (officially) installed in 2018, but the project with the wordlist and recordings by Espen Sommer Eide was begun in 2009.`,
      t`The Kone funded project "Skolt Sami revitalization with language technology and development of guidelines for transferring these methods to other endangered languages" [Koltansaamen elvytys kieliteknologia-avusteisen kielenoppimisohjelmien avulla sekä mallin ja ohjeiden laatiminen menetelmän siirtämiseksi toisiin uhanalaisiin kieliin] (2015--2018) headed by Jack Rueter employed the language expertise of Eino Koponen, and upcoming specialists such as Miika Lehtinen and Markus Juutinen as well as the invaluable feedback fro the language community, e.g. Merja Fofonoff, XXX in the establishment of a large morphological database from research by others`,
    ],
  },
  gtsmsfin: {
    info: [
      t`Dictionaries for Skolt Saami and Finnish consist of materials based on various sources and research projects:`,
      t`Satu & Jouni Moshnikoff sanasto`,
      t`Dictionaries:`,
      t`Skolt Sámi lemmas with Finnish translations can also be attributed to materials in:`,
      t`    "Koltan- ja kuolanlapin sanakirja" (T. I. Itkonen, 1958)`,
      t`    "Suomi-saamski keskeissanasto : Suâma-sââma kôskaldsännôs" (Sverloff, 1978)`,
      t`    "Suomi-koltansaame-piensanasto : Suáma-sääém-sieǒmsäennös" (Sverloff, 1989)`,
      t`    "Lääʹdd-sääʹm sääʹnnǩeʹrjj " (Sammallahti & Moshnikoff, 1991)`,
      t`    "Mattu saaʹnid" (Mänty & Fofonoff, 2003)`,
      t`    "Kuvitettu käsityösanasto" (Mettäpuro & Moshnikoff, 2009)`,
      t`    "Vuõʹlǧǧe jååʹtted ooudâs" (Sammallahti, 2012)`,
    ],
  },
  gtsmsrus: {
    info: [
      t`Skolt Sámi → X project contains materials deriving from the research of numerous projects, dictionaries and word lists.`,
      t`The research projects have lead to the merging of several word lists featuring Skolt Sami as a source language with multiple target languages. Michael Rießler's contribution mainly consists of the integration of an earlier created Skolt Saami word list with English, Finnish, Norwegian, and Russian translations and linking to sound files.`,
      t`The creation of this wordlist was related to the Kola Sámi Documentation Project (KSDP) led by Michael Rießler, to work carried out by Michael Rießler at Äʹvv Saaʹmi muʹzei, as well as the art installation "Language Memory" at Äʹvv Saaʹmi muʹzei by Espen Sommer Eide.`,
      t`Other main contributors to these projects were (in alphabetical order) Katri Jefremoff, Erkki Lumisalmi, Zoja Nosova, Lena Terhart, and Joshua Wilbur.`,
      t`The KSDP started in 2005 and in principle is still active.`,
      t`Language memory was (officially) installed in 2018, but the project with the wordlist and recordings by Espen Sommer Eide was begun in 2009.`,
      t`The Kone funded project "Skolt Sami revitalization with language technology and development of guidelines for transferring these methods to other endangered languages" [Koltansaamen elvytys kieliteknologia-avusteisen kielenoppimisohjelmien avulla sekä mallin ja ohjeiden laatiminen menetelmän siirtämiseksi toisiin uhanalaisiin kieliin] (2015--2018) headed by Jack Rueter employed the language expertise of Eino Koponen, and upcoming specialists such as Miika Lehtinen and Markus Juutinen as well as the invaluable feedback fro the language community, e.g. Merja Fofonoff, XXX in the establishment of a large morphological database from research by others`,
    ],
  },
  gtnobsms: {
    info: [
      t`Skolt Sámi → X project contains materials deriving from the research of numerous projects, dictionaries and word lists.`,
      t`The research projects have lead to the merging of several word lists featuring Skolt Sami as a source language with multiple target languages. Michael Rießler's contribution mainly consists of the integration of an earlier created Skolt Saami word list with English, Finnish, Norwegian, and Russian translations and linking to sound files.`,
      t`The creation of this wordlist was related to the Kola Sámi Documentation Project (KSDP) led by Michael Rießler, to work carried out by Michael Rießler at Äʹvv Saaʹmi muʹzei, as well as the art installation "Language Memory" at Äʹvv Saaʹmi muʹzei by Espen Sommer Eide.`,
      t`Other main contributors to these projects were (in alphabetical order) Katri Jefremoff, Erkki Lumisalmi, Zoja Nosova, Lena Terhart, and Joshua Wilbur.`,
      t`The KSDP started in 2005 and in principle is still active.`,
      t`Language memory was (officially) installed in 2018, but the project with the wordlist and recordings by Espen Sommer Eide was begun in 2009.`,
      t`The Kone funded project "Skolt Sami revitalization with language technology and development of guidelines for transferring these methods to other endangered languages" [Koltansaamen elvytys kieliteknologia-avusteisen kielenoppimisohjelmien avulla sekä mallin ja ohjeiden laatiminen menetelmän siirtämiseksi toisiin uhanalaisiin kieliin] (2015--2018) headed by Jack Rueter employed the language expertise of Eino Koponen, and upcoming specialists such as Miika Lehtinen and Markus Juutinen as well as the invaluable feedback fro the language community, e.g. Merja Fofonoff, XXX in the establishment of a large morphological database from research by others`,
    ],
  },
  gtfinsms: {
    info: [
      t`The Finnish-to-Skolt Sami dictionary has gone through three phases, moving from quantity to quality. After original work with in the Skolt Sami-to-X dictionary, a simple flipped dictionary was produced for providing Finnish-to-Skolt Sami searches in the saan.oahpa.no online dictionary in 2016.`,
      t`This, of course, meant that an extensive amount of non-standard words and word forms were presented. As more and more students of the language became aware of the dictionary, it began to serve as a basis of vocabulary learning and, unfortunately, the source of many spelling mistakes and morphological misconceptions.`,
      t`In June of 2020, the files generated by Jack Rueter (approximately 30000 entries) were moved into main/words/dicts/finsms/inc/ for future consultation. The files have been replaced by a newer set (approximately 20000 entries) deriving directly from editing of the Satu & Jouni Moshnikoff dictionary organized by the Oulu University Giellagas Institute and Saami Parliament in Inari, Finland with funding from the Finnish Ministry of Education (2019–2020).`,
      t`Subsequent updating of these files is being continued using the Veʹrdd dictionary editing platform, which played an instrumental role in the development of 2020.`,
      t`The present Finnish-to-Skolt Sami dictionary consists of approximately 20000 entries, which are derived directly from editing of the Satu & Jouni Moshnikoff dictionary organized by the Oulu University Giellagas Institute and Saami Parliament in Inari, Finland with funding from the Finnish Ministry of Education (2019–2020).`,
      t`Subsequent updating of these files is being continued using the Veʹrdd dictionary editing platform, which played an instrumental role in the development of 2020. Extensive work can be attributed to members of the language community, language researchers and students at the Giellagas Institute and language technology researchers.`,
    ],
  },
  gtrussms: {
    info: [
      t`Skolt Sámi → X project contains materials deriving from the research of numerous projects, dictionaries and word lists.`,
      t`The research projects have lead to the merging of several word lists featuring Skolt Sami as a source language with multiple target languages. Michael Rießler's contribution mainly consists of the integration of an earlier created Skolt Saami word list with English, Finnish, Norwegian, and Russian translations and linking to sound files.`,
      t`The creation of this wordlist was related to the Kola Sámi Documentation Project (KSDP) led by Michael Rießler, to work carried out by Michael Rießler at Äʹvv Saaʹmi muʹzei, as well as the art installation "Language Memory" at Äʹvv Saaʹmi muʹzei by Espen Sommer Eide.`,
      t`Other main contributors to these projects were (in alphabetical order) Katri Jefremoff, Erkki Lumisalmi, Zoja Nosova, Lena Terhart, and Joshua Wilbur.`,
      t`The KSDP started in 2005 and in principle is still active.`,
      t`Language memory was (officially) installed in 2018, but the project with the wordlist and recordings by Espen Sommer Eide was begun in 2009.`,
      t`The Kone funded project "Skolt Sami revitalization with language technology and development of guidelines for transferring these methods to other endangered languages" [Koltansaamen elvytys kieliteknologia-avusteisen kielenoppimisohjelmien avulla sekä mallin ja ohjeiden laatiminen menetelmän siirtämiseksi toisiin uhanalaisiin kieliin] (2015--2018) headed by Jack Rueter employed the language expertise of Eino Koponen, and upcoming specialists such as Miika Lehtinen and Markus Juutinen as well as the invaluable feedback fro the language community, e.g. Merja Fofonoff, XXX in the establishment of a large morphological database from research by others`,
    ],
  },
};

export default dictionaryInfo;
