/* eslint-disable no-unused-vars */
// @ts-nocheck - Variables are intentionally unused (used by @lingui/macro for translation extraction)
// Message descriptors for translation extraction - not evaluated at module level
import { msg } from "@lingui/macro";

// Exported dictionary name message descriptors for runtime translation
export const dictionaryNames = {
  termwiki: msg`termwiki`,
  gtsmenob: msg`gtsmenob`,
  gtnobsme: msg`gtnobsme`,
  gtnobsma: msg`gtnobsma`,
  gtsmanob: msg`gtsmanob`,
  gtsmefin: msg`gtsmefin`,
  gtfinsme: msg`gtfinsme`,
  gtsmesmn: msg`gtsmesmn`,
  gtsmnsme: msg`gtsmnsme`,
  gtfinsmn: msg`gtfinsmn`,
  gtsmnfin: msg`gtsmnfin`,
  gtfinnob: msg`gtfinnob`,
  sammallahtismefin: msg`sammallahtismefin`,
  habmersmjnob: msg`habmersmjnob`,
  habmernobsmj: msg`habmernobsmj`,
  gtsmsnob: msg`gtsmsnob`,
  gtsmsfin: msg`gtsmsfin`,
  gtsmsrus: msg`gtsmsrus`,
  gtnobsms: msg`gtnobsms`,
  gtfinsms: msg`gtfinsms`,
  gtrussms: msg`gtrussms`,
} as const;

// Exported part of speech message descriptors for runtime translation
export const partOfSpeech = {
  N: msg`N`,
  V: msg`V`,
  A: msg`A`,
  Adv: msg`Adv`,
  Pron: msg`Pron`,
} as const;

// Exported language code message descriptors for runtime translation
export const languageCodes = {
  en: msg`en`,
  eng: msg`eng`,
  fi: msg`fi`,
  fin: msg`fin`,
  nb: msg`nb`,
  nn: msg`nn`,
  nno: msg`nno`,
  nob: msg`nob`,
  se: msg`se`,
  sv: msg`sv`,
  sma: msg`sma`,
  sme: msg`sme`,
  smj: msg`smj`,
  smn: msg`smn`,
  sms: msg`sms`,
  swe: msg`swe`,
  lamsg: msg`lamsg`,
  rus: msg`rus`,
} as const;

// Exported country code message descriptors for runtime translation
export const countryCodes = {
  FI: msg`FI`,
  SE: msg`SE`,
  NO: msg`NO`,
} as const;

// Exported dialect message descriptors for runtime translation
export const dialects = {
  easmsg: msg`easmsg`,
  wesmsg: msg`wesmsg`,
  north: msg`north`,
  south: msg`south`,
} as const;

const _languageCodesGenitive = [
  msg`en_genitive`,
  msg`eng_genitive`,
  msg`fi_genitive`,
  msg`fin_genitive`,
  msg`nb_genitive`,
  msg`nn_genitive`,
  msg`nno_genitive`,
  msg`nob_genitive`,
  msg`se_genitive`,
  msg`sv_genitive`,
  msg`sma_genitive`,
  msg`sme_genitive`,
  msg`smj_genitive`,
  msg`smn_genitive`,
  msg`sms_genitive`,
  msg`swe_genitive`,
  msg`lat_genitive`,
];

const _categories = [
  msg`Beaivválaš giella`,
  msg`Boazodoallu`,
  msg`Dihtorteknologiija ja diehtoteknihkka`,
  msg`Dáidda ja girjjálašvuohta`,
  msg`Eanandoallu`,
  msg`Education`,
  msg`Ekologiija ja biras`,
  msg`Ekonomiija ja gávppašeapmi`,
  msg`Geografiija`,
  msg`Gielladieđa`,
  msg`Gulahallanteknihkka`,
  msg`Guolástus`,
  msg`Huksenteknihkka`,
  msg`Juridihkka`,
  msg`Luonddudieđa ja matematihkka`,
  msg`Medisiidna`,
  msg`Mášenteknihkka`,
  msg`Ođđa sánimsg`,
  msg`Religion`,
  msg`Servodatdieđa`,
  msg`Stáda almmolaš hálddašeapmi`,
  msg`Teknihkka industriija duodji`,
  msg`Álšateknihkka`,
  msg`Ásttoáigi ja faláštallan`,
  msg`Ávnnasindustriija`,
];

interface DictionaryInfoEntry {
  info: any[];
}

const dictionaryInfo: Record<string, DictionaryInfoEntry> = {
  sammallahtismefin: {
    info: [
      msg`Emeritusprofessor Pekka Sammallahti has based this dictionary on his own printed dictionaries published in 1989 and 1993.`,
      msg`The dictionary contains more than 50.000 entries, and Sammallahti adds entries regularly.`,
    ],
  },
  termwiki: {
    info: [
      msg`Giellagáldu's main task is to standardise new terminology and written language for the Sami languages. The standardised terms from their <a href="satni.uit.no/termwiki">termbase<a> is exported daily to this site, to be easily accessible to the Sami community.`,
      msg`The termbase consists of over 50,000 term articles, and is updated on a regular basis.`,
    ],
  },
  gtsmenob: {
    info: [
      msg`This dictionary builds on Nils Jernsletten's dictionary Álgosátnegirji (4322 words), but now it contains 30,000 entries, plus 6000 place name entries.`,
      msg`Approximately half of the content of the dictionary is taken by searching for parallels in a parallel corpus of administrative text. This work was financed by the Ministry of Local Government and Modernisation.`,
    ],
  },
  gtnobsme: {
    info: [
      msg`Norwegian → North Sámi is based on the North Sámi → Norwegian dictionary, but frequent Norwegian words have been added. It contains about 26,000 Norwegian entries.`,
      msg`Approximately half of the content of the dictionary is taken by searching for parallels in a parallel corpus of administrative text. This work was financed by the Ministry of Local Government and Modernisation.`,
    ],
  },
  gtnobsma: {
    info: [
      msg`This dictionary builds on material prepared by Albert Jåma and Tove Brustad in the Hemnes Saami Organization, but has in addition gained words from Giellatekno and Aajege's work with the Southern Sámi Oahpa.`,
    ],
  },
  gtsmanob: {
    info: [
      msg`This dictionary builds on material prepared by Albert Jåma and Tove Brustad in the Hemnes Saami Organization, but has in addition gained words from Giellatekno and Aajege's work with the Southern Sámi Oahpa.`,
    ],
  },
  gtsmefin: {
    info: [
      msg`This dictionary is based on lexical material from the Institute for the Languages of Finland, and from Giellatekno's work with the North Saami Oahpa. In addition, we have included frequent words from North Saami.`,
      msg`The dictionary contains about 11,000 entries.`,
    ],
  },
  gtfinsme: {
    info: [
      msg`This dictionary is based on lexical material from the Institute for the Languages of Finland, and from Giellatekno's work with the North Saami Oahpa. In addition frequent Finnish words have been added.`,
      msg`The dictionary contains about 11,000 entries.`,
    ],
  },
  gtsmesmn: {
    info: [
      msg`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`,
    ],
  },
  gtsmnsme: {
    info: [
      msg`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`,
    ],
  },
  gtfinsmn: {
    info: [
      msg`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`,
    ],
  },
  gtsmnfin: {
    info: [
      msg`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`,
    ],
  },
  gtfinnob: {
    info: [
      msg`Trond Trosterud's Finnish – Norwegian dictionary has more than 30000 search words.`,
    ],
  },
  habmersmjnob: {
    info: [
      msg`Hábmer municipality's Lule Sámi - Norwegian medicinal dictionary. Contains about 1600 search words.`,
    ],
  },
  habmernobsmj: {
    info: [
      msg`Hábmer municipality's Norwegian - Lule Sámi medicinal dictionary. Contains about 1600 search words.`,
    ],
  },
  gtsmsnob: {
    info: [
      msg`Skolt Sámi → X project contains materials deriving from the research of numerous projects, dictionaries and word lists.`,
      msg`The research projects have lead to the merging of several word lists featuring Skolt Sami as a source language with multiple target languages. Michael Rießler's contribution mainly consists of the integration of an earlier created Skolt Saami word list with English, Finnish, Norwegian, and Russian translations and linking to sound files.`,
      msg`The creation of this wordlist was related to the Kola Sámi Documentation Project (KSDP) led by Michael Rießler, to work carried out by Michael Rießler at Äʹvv Saaʹmi muʹzei, as well as the art installation "Language Memory" at Äʹvv Saaʹmi muʹzei by Espen Sommer Eide.`,
      msg`Other main contributors to these projects were (in alphabetical order) Katri Jefremoff, Erkki Lumisalmi, Zoja Nosova, Lena Terhart, and Joshua Wilbur.`,
      msg`The KSDP started in 2005 and in principle is still active.`,
      msg`Language memory was (officially) installed in 2018, but the project with the wordlist and recordings by Espen Sommer Eide was begun in 2009.`,
      msg`The Kone funded project "Skolt Sami revitalization with language technology and development of guidelines for transferring these methods to other endangered languages" [Koltansaamen elvytys kieliteknologia-avusteisen kielenoppimisohjelmien avulla sekä mallin ja ohjeiden laatiminen menetelmän siirtämiseksi toisiin uhanalaisiin kieliin] (2015--2018) headed by Jack Rueter employed the language expertise of Eino Koponen, and upcoming specialists such as Miika Lehtinen and Markus Juutinen as well as the invaluable feedback fro the language community, e.g. Merja Fofonoff, XXX in the establishment of a large morphological database from research by others`,
    ],
  },
  gtsmsfin: {
    info: [
      msg`Dictionaries for Skolt Saami and Finnish consist of materials based on various sources and research projects:`,
      msg`Satu & Jouni Moshnikoff sanasto`,
      msg`Dictionaries:`,
      msg`Skolt Sámi lemmas with Finnish translations can also be attributed to materials in:`,
      msg`    "Koltan- ja kuolanlapin sanakirja" (T. I. Itkonen, 1958)`,
      msg`    "Suomi-saamski keskeissanasto : Suâma-sââma kôskaldsännôs" (Sverloff, 1978)`,
      msg`    "Suomi-koltansaame-piensanasto : Suáma-sääém-sieǒmsäennös" (Sverloff, 1989)`,
      msg`    "Lääʹdd-sääʹm sääʹnnǩeʹrjj " (Sammallahti & Moshnikoff, 1991)`,
      msg`    "Mattu saaʹnid" (Mänty & Fofonoff, 2003)`,
      msg`    "Kuvitettu käsityösanasto" (Mettäpuro & Moshnikoff, 2009)`,
      msg`    "Vuõʹlǧǧe jååʹtted ooudâs" (Sammallahti, 2012)`,
    ],
  },
  gtsmsrus: {
    info: [
      msg`Skolt Sámi → X project contains materials deriving from the research of numerous projects, dictionaries and word lists.`,
      msg`The research projects have lead to the merging of several word lists featuring Skolt Sami as a source language with multiple target languages. Michael Rießler's contribution mainly consists of the integration of an earlier created Skolt Saami word list with English, Finnish, Norwegian, and Russian translations and linking to sound files.`,
      msg`The creation of this wordlist was related to the Kola Sámi Documentation Project (KSDP) led by Michael Rießler, to work carried out by Michael Rießler at Äʹvv Saaʹmi muʹzei, as well as the art installation "Language Memory" at Äʹvv Saaʹmi muʹzei by Espen Sommer Eide.`,
      msg`Other main contributors to these projects were (in alphabetical order) Katri Jefremoff, Erkki Lumisalmi, Zoja Nosova, Lena Terhart, and Joshua Wilbur.`,
      msg`The KSDP started in 2005 and in principle is still active.`,
      msg`Language memory was (officially) installed in 2018, but the project with the wordlist and recordings by Espen Sommer Eide was begun in 2009.`,
      msg`The Kone funded project "Skolt Sami revitalization with language technology and development of guidelines for transferring these methods to other endangered languages" [Koltansaamen elvytys kieliteknologia-avusteisen kielenoppimisohjelmien avulla sekä mallin ja ohjeiden laatiminen menetelmän siirtämiseksi toisiin uhanalaisiin kieliin] (2015--2018) headed by Jack Rueter employed the language expertise of Eino Koponen, and upcoming specialists such as Miika Lehtinen and Markus Juutinen as well as the invaluable feedback fro the language community, e.g. Merja Fofonoff, XXX in the establishment of a large morphological database from research by others`,
    ],
  },
  gtnobsms: {
    info: [
      msg`Skolt Sámi → X project contains materials deriving from the research of numerous projects, dictionaries and word lists.`,
      msg`The research projects have lead to the merging of several word lists featuring Skolt Sami as a source language with multiple target languages. Michael Rießler's contribution mainly consists of the integration of an earlier created Skolt Saami word list with English, Finnish, Norwegian, and Russian translations and linking to sound files.`,
      msg`The creation of this wordlist was related to the Kola Sámi Documentation Project (KSDP) led by Michael Rießler, to work carried out by Michael Rießler at Äʹvv Saaʹmi muʹzei, as well as the art installation "Language Memory" at Äʹvv Saaʹmi muʹzei by Espen Sommer Eide.`,
      msg`Other main contributors to these projects were (in alphabetical order) Katri Jefremoff, Erkki Lumisalmi, Zoja Nosova, Lena Terhart, and Joshua Wilbur.`,
      msg`The KSDP started in 2005 and in principle is still active.`,
      msg`Language memory was (officially) installed in 2018, but the project with the wordlist and recordings by Espen Sommer Eide was begun in 2009.`,
      msg`The Kone funded project "Skolt Sami revitalization with language technology and development of guidelines for transferring these methods to other endangered languages" [Koltansaamen elvytys kieliteknologia-avusteisen kielenoppimisohjelmien avulla sekä mallin ja ohjeiden laatiminen menetelmän siirtämiseksi toisiin uhanalaisiin kieliin] (2015--2018) headed by Jack Rueter employed the language expertise of Eino Koponen, and upcoming specialists such as Miika Lehtinen and Markus Juutinen as well as the invaluable feedback fro the language community, e.g. Merja Fofonoff, XXX in the establishment of a large morphological database from research by others`,
    ],
  },
  gtfinsms: {
    info: [
      msg`The Finnish-to-Skolt Sami dictionary has gone through three phases, moving from quantity to quality. After original work with in the Skolt Sami-to-X dictionary, a simple flipped dictionary was produced for providing Finnish-to-Skolt Sami searches in the saan.oahpa.no online dictionary in 2016.`,
      msg`This, of course, meant that an extensive amount of non-standard words and word forms were presented. As more and more students of the language became aware of the dictionary, it began to serve as a basis of vocabulary learning and, unfortunately, the source of many spelling mistakes and morphological misconceptions.`,
      msg`In June of 2020, the files generated by Jack Rueter (approximately 30000 entries) were moved into main/words/dicts/finsms/inc/ for future consultation. The files have been replaced by a newer set (approximately 20000 entries) deriving directly from editing of the Satu & Jouni Moshnikoff dictionary organized by the Oulu University Giellagas Institute and Saami Parliament in Inari, Finland with funding from the Finnish Ministry of Education (2019–2020).`,
      msg`Subsequent updating of these files is being continued using the Veʹrdd dictionary editing platform, which played an instrumental role in the development of 2020.`,
      msg`The present Finnish-to-Skolt Sami dictionary consists of approximately 20000 entries, which are derived directly from editing of the Satu & Jouni Moshnikoff dictionary organized by the Oulu University Giellagas Institute and Saami Parliament in Inari, Finland with funding from the Finnish Ministry of Education (2019–2020).`,
      msg`Subsequent updating of these files is being continued using the Veʹrdd dictionary editing platform, which played an instrumental role in the development of 2020. Extensive work can be attributed to members of the language community, language researchers and students at the Giellagas Institute and language technology researchers.`,
    ],
  },
  gtrussms: {
    info: [
      msg`Skolt Sámi → X project contains materials deriving from the research of numerous projects, dictionaries and word lists.`,
      msg`The research projects have lead to the merging of several word lists featuring Skolt Sami as a source language with multiple target languages. Michael Rießler's contribution mainly consists of the integration of an earlier created Skolt Saami word list with English, Finnish, Norwegian, and Russian translations and linking to sound files.`,
      msg`The creation of this wordlist was related to the Kola Sámi Documentation Project (KSDP) led by Michael Rießler, to work carried out by Michael Rießler at Äʹvv Saaʹmi muʹzei, as well as the art installation "Language Memory" at Äʹvv Saaʹmi muʹzei by Espen Sommer Eide.`,
      msg`Other main contributors to these projects were (in alphabetical order) Katri Jefremoff, Erkki Lumisalmi, Zoja Nosova, Lena Terhart, and Joshua Wilbur.`,
      msg`The KSDP started in 2005 and in principle is still active.`,
      msg`Language memory was (officially) installed in 2018, but the project with the wordlist and recordings by Espen Sommer Eide was begun in 2009.`,
      msg`The Kone funded project "Skolt Sami revitalization with language technology and development of guidelines for transferring these methods to other endangered languages" [Koltansaamen elvytys kieliteknologia-avusteisen kielenoppimisohjelmien avulla sekä mallin ja ohjeiden laatiminen menetelmän siirtämiseksi toisiin uhanalaisiin kieliin] (2015--2018) headed by Jack Rueter employed the language expertise of Eino Koponen, and upcoming specialists such as Miika Lehtinen and Markus Juutinen as well as the invaluable feedback fro the language community, e.g. Merja Fofonoff, XXX in the establishment of a large morphological database from research by others`,
    ],
  },
};

export default dictionaryInfo;
