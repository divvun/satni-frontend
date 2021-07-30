/* eslint-disable no-unused-vars */
import { t } from '@lingui/macro';

const dicts = [
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
];

export const sanit = ['gtsmenob', 'gtnobsme', 'gtsmefin', 'gtfinsme'];

const partOfSpeech = [t`N`, t`V`, t`A`, t`Adv`, t`Pron`];

const languageCodes = [
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
];

const contryCodes = [t`FI`, t`SE`, t`NO`];

const dialects = [t`east`, t`west`, t`north`, t`south`];

const languageCodesGenitive = [
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

const categories = [
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

const dictionaryInfo = {
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
};

export default dictionaryInfo;
