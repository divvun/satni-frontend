// Define more complete type interfaces based on the actual data structure
export interface TermExpression {
  lemma: string;
  presentationLemma: string;
  language: string;
  pos: string;
}

export interface ConceptTerm {
  note: string | null;
  source: string | null;
  status: string | null;
  expression: TermExpression;
}

export interface ConceptData {
  name: string;
  collections: string[];
  definition: string | null;
  explanation: string | null;
  terms: ConceptTerm[];
}

export interface LookupLemmaNode {
  lemma: string;
  presentationLemma: string;
  language: string;
  pos: string;
  dialect: string | null;
  country: string | null;
}

export interface TranslationLemmaNode {
  lemma: string;
  presentationLemma: string;
  language: string;
  pos: string;
  dialect: string | null;
  country?: string;
}

export interface RestrictionData {
  __typename?: string;
  restriction: string;
  attributes?: any;
}

export interface DictTranslationGroup {
  translationLemmas: {
    edges: Array<{
      node: TranslationLemmaNode;
    }>;
  };
  restriction: RestrictionData | null;
  exampleGroups: any[]; // TODO: Define proper structure when examples are present
}export interface DictEntry {
  dictName: string;
  srcLang: string;
  targetLang: string;
  lookupLemmas: {
    edges: Array<{
      node: LookupLemmaNode;
    }>;
  };
  translationGroups: DictTranslationGroup[];
}

export const conceptList: readonly ConceptData[] = [
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    collections: [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: 'jll jl',
        source: null,
        status: null,
        expression: {
          lemma: 'fijlla',
          presentationLemma: 'fijlla',
          language: 'smj',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    collections: [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'viila',
          presentationLemma: 'viila',
          language: 'fin',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'kaista',
          presentationLemma: 'kaista',
          language: 'fin',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'tiedosto',
          presentationLemma: 'tiedosto',
          language: 'fin',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    collections: [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'file',
          presentationLemma: 'file',
          language: 'eng',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    collections: [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013',
    ],
    definition: 'fil, i edb: en ordnet mengde av sammenhørende data',
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'fil',
          presentationLemma: 'fil',
          language: 'nob',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    collections: [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'fil',
          presentationLemma: 'fil',
          language: 'swe',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    collections: [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'fiila',
          presentationLemma: 'fiila',
          language: 'sme',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'vuorká',
          presentationLemma: 'vuorká',
          language: 'sme',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    collections: [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'fijle',
          presentationLemma: 'fijle',
          language: 'sma',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'arkiv',
          presentationLemma: 'arkiv',
          language: 'nob',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'arkiv',
          presentationLemma: 'arkiv',
          language: 'swe',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'vuorká',
          presentationLemma: 'vuorká',
          language: 'sme',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Ekonomiija ja gávppašeapmi:arkiiva',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'arkisto',
          presentationLemma: 'arkisto',
          language: 'fin',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Ekonomiija ja gávppašeapmi:arkiiva',
    collections: ['Collection:SD-terms'],
    definition:
      'samling av brev og dokumenter; oppbevaringssted for brev og dokumenter',
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'arkiv',
          presentationLemma: 'arkiv',
          language: 'nob',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Ekonomiija ja gávppašeapmi:arkiiva',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'arkiv',
          presentationLemma: 'arkiv',
          language: 'swe',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Ekonomiija ja gávppašeapmi:arkiiva',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'arkiiva',
          presentationLemma: 'arkiiva',
          language: 'sme',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'vuorká',
          presentationLemma: 'vuorká',
          language: 'sme',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'vuorká',
          presentationLemma: 'vuorká',
          language: 'sme',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Ekonomiija ja gávppašeapmi:arkiiva',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'arkkâdâh',
          presentationLemma: 'arkkâdâh',
          language: 'smn',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Ekonomiija ja gávppašeapmi:arkiiva',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'våarhkoe',
          presentationLemma: 'våarhkoe',
          language: 'sma',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Medisiidna:vuorká',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'varasto',
          presentationLemma: 'varasto',
          language: 'fin',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Medisiidna:vuorká',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'depot',
          presentationLemma: 'depot',
          language: 'nob',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Medisiidna:vuorká',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'depå',
          presentationLemma: 'depå',
          language: 'swe',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'förråd',
          presentationLemma: 'förråd',
          language: 'swe',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Medisiidna:vuorká',
    collections: ['Collection:SD-terms'],
    definition: 'vuorká - vuorkái - vuorkkáide',
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'vuorká',
          presentationLemma: 'vuorká',
          language: 'sme',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Medisiidna:vuorká',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'vuárkká',
          presentationLemma: 'vuárkká',
          language: 'smn',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Servodatdieđa:vurkkohat',
    collections: ['Collection:SD-terms'],
    definition:
      'rom i bolig for oppbevaring og lagring av utstyr, mat, klær, etc.',
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'bod',
          presentationLemma: 'bod',
          language: 'nob',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Servodatdieđa:vurkkohat',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'vurkkohat',
          presentationLemma: 'vurkkohat',
          language: 'sme',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'vuorká',
          presentationLemma: 'vuorká',
          language: 'sme',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'rádju',
          presentationLemma: 'rádju',
          language: 'sme',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Servodatdieđa:vurkkohat',
    collections: ['Collection:SD-terms'],
    definition:
      'asunnon huone, jossa säilytetään ruokaa, vaatteita, välineitä jne.',
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'varasto',
          presentationLemma: 'varasto',
          language: 'fin',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'komero',
          presentationLemma: 'komero',
          language: 'fin',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Servodatdieđa:vurkkohat',
    collections: ['Collection:SD-terms'],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'boda',
          presentationLemma: 'boda',
          language: 'swe',
          pos: 'N',
        },
      },
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'gömsle',
          presentationLemma: 'gömsle',
          language: 'swe',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Teknihkka industriija duodji:vuorká',
    collections: [
      'Collection:SD-terms',
      'Collection:teknisk ordliste sg 10-03',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'oppbevaringsplass',
          presentationLemma: 'oppbevaringsplass',
          language: 'nob',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Teknihkka industriija duodji:vuorká',
    collections: [
      'Collection:SD-terms',
      'Collection:teknisk ordliste sg 10-03',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'vuorká',
          presentationLemma: 'vuorká',
          language: 'sme',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Teknihkka industriija duodji:vuorká',
    collections: [
      'Collection:SD-terms',
      'Collection:teknisk ordliste sg 10-03',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'förråd',
          presentationLemma: 'förråd',
          language: 'swe',
          pos: 'N',
        },
      },
    ],
  },
  {
    name: 'Teknihkka industriija duodji:vuorká',
    collections: [
      'Collection:SD-terms',
      'Collection:teknisk ordliste sg 10-03',
    ],
    definition: null,
    explanation: null,
    terms: [
      {
        note: null,
        source: null,
        status: null,
        expression: {
          lemma: 'säilytyspaikka',
          presentationLemma: 'säilytyspaikka',
          language: 'fin',
          pos: 'N',
        },
      },
    ],
  },
] as const;

export const dictEntryList: readonly DictEntry[] = [
  {
    dictName: 'gtsmenob',
    srcLang: 'sme',
    targetLang: 'nob',
    lookupLemmas: {
      edges: [
        {
          node: {
            lemma: 'vuorká',
            presentationLemma: 'vuorká',
            language: 'sme',
            pos: 'N',
            dialect: null,
            country: null,
          },
        },
      ],
    },
    translationGroups: [
      {
        translationLemmas: {
          edges: [
            {
              node: {
                lemma: 'arkiv',
                presentationLemma: 'arkiv',
                language: 'nob',
                pos: 'N',
                dialect: null,
                country: null,
              },
            },
          ],
        },
        restriction: null,
        exampleGroups: [],
      },
      {
        translationLemmas: {
          edges: [
            {
              node: {
                lemma: 'depot',
                presentationLemma: 'depot',
                language: 'nob',
                pos: 'N',
                dialect: null,
                country: null,
              },
            },
            {
              node: {
                lemma: 'oppbevaringsplass',
                presentationLemma: 'oppbevaringsplass',
                language: 'nob',
                pos: 'N',
                dialect: null,
                country: null,
              },
            },
          ],
        },
        restriction: null,
        exampleGroups: [],
      },
      {
        translationLemmas: {
          edges: [
            {
              node: {
                lemma: 'oppbevaring',
                presentationLemma: 'oppbevaring',
                language: 'nob',
                pos: 'N',
                dialect: null,
                country: null,
              },
            },
          ],
        },
        restriction: null,
        exampleGroups: [],
      },
    ],
  },
  {
    dictName: 'gtsmefin',
    srcLang: 'sme',
    targetLang: 'fin',
    lookupLemmas: {
      edges: [
        {
          node: {
            lemma: 'vuorká',
            presentationLemma: 'vuorká',
            language: 'sme',
            pos: 'N',
            dialect: null,
            country: null,
          },
        },
      ],
    },
    translationGroups: [
      {
        translationLemmas: {
          edges: [
            {
              node: {
                lemma: 'arkisto',
                presentationLemma: 'arkisto',
                language: 'fin',
                pos: 'N',
                dialect: null,
                country: null,
              },
            },
          ],
        },
        restriction: null,
        exampleGroups: [],
      },
      {
        translationLemmas: {
          edges: [
            {
              node: {
                lemma: 'säilö',
                presentationLemma: 'säilö',
                language: 'fin',
                pos: 'N',
                dialect: null,
                country: null,
              },
            },
          ],
        },
        restriction: null,
        exampleGroups: [],
      },
    ],
  },
  {
    dictName: 'gtsmesmn',
    srcLang: 'sme',
    targetLang: 'smn',
    lookupLemmas: {
      edges: [
        {
          node: {
            lemma: 'vuorká',
            presentationLemma: 'vuorká',
            language: 'sme',
            pos: 'N',
            dialect: null,
            country: null,
          },
        },
      ],
    },
    translationGroups: [
      {
        translationLemmas: {
          edges: [
            {
              node: {
                lemma: 'vuárkká',
                presentationLemma: 'vuárkká',
                language: 'smn',
                pos: 'N',
                dialect: null,
                country: null,
              },
            },
          ],
        },
        restriction: null,
        exampleGroups: [],
      },
    ],
  },
  {
    dictName: 'sammallahtismefin',
    srcLang: 'sme',
    targetLang: 'fin',
    lookupLemmas: {
      edges: [
        {
          node: {
            lemma: 'vuorká',
            presentationLemma: 'vuorká',
            language: 'sme',
            pos: 'N',
            dialect: null,
            country: null,
          },
        },
        {
          node: {
            lemma: 'fuorká',
            presentationLemma: 'fuorká',
            language: 'sme',
            pos: 'N',
            dialect: null,
            country: null,
          },
        },
      ],
    },
    translationGroups: [
      {
        translationLemmas: {
          edges: [
            {
              node: {
                lemma: 'säilö',
                presentationLemma: 'säilö',
                language: 'fin',
                pos: 'N',
                dialect: null,
                country: null,
              },
            },
            {
              node: {
                lemma: 'tiedosto',
                presentationLemma: 'tiedosto',
                language: 'fin',
                pos: 'N',
                dialect: null,
                country: null,
              },
            },
          ],
        },
        restriction: null,
        exampleGroups: [],
      },
    ],
  },
] as const;
