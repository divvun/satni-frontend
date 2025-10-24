import {
  cleanFrom,
  dictBackend2Frontend,
  filterParadigm,
  filterProp,
  languagesOfLemma,
  moveLangFirst,
  multilingualconceptListsByNames,
  orderedMultilingualConcept,
} from './utils';
import { conceptList, dictEntryList } from './utils.data';

describe('Massage termwiki data from backend', () => {
  it('Order concept list by concept names', () => {
    const want = {
      'Dihtorteknologiija ja diehtoteknihkka:fiila': [
        {
          collections: [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'smj',
                lemma: 'fijlla',
                presentationLemma: 'fijlla',
                pos: 'N',
              },
              note: 'jll jl',
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'fin',
                lemma: 'viila',
                presentationLemma: 'viila',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'fin',
                lemma: 'kaista',
                presentationLemma: 'kaista',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'fin',
                lemma: 'tiedosto',
                presentationLemma: 'tiedosto',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'eng',
                lemma: 'file',
                presentationLemma: 'file',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013',
          ],
          definition: 'fil, i edb: en ordnet mengde av sammenhørende data',
          explanation: null,
          terms: [
            {
              expression: {
                language: 'nob',
                lemma: 'fil',
                presentationLemma: 'fil',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'swe',
                lemma: 'fil',
                presentationLemma: 'fil',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'sme',
                lemma: 'fiila',
                presentationLemma: 'fiila',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'sme',
                lemma: 'vuorká',
                presentationLemma: 'vuorká',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'sma',
                lemma: 'fijle',
                presentationLemma: 'fijle',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
      ],
      'Dihtorteknologiija ja diehtoteknihkka:vuorká': [
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'nob',
                lemma: 'arkiv',
                presentationLemma: 'arkiv',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'swe',
                lemma: 'arkiv',
                presentationLemma: 'arkiv',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'sme',
                lemma: 'vuorká',
                presentationLemma: 'vuorká',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
      ],
      'Ekonomiija ja gávppašeapmi:arkiiva': [
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'fin',
                lemma: 'arkisto',
                presentationLemma: 'arkisto',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition:
            'samling av brev og dokumenter; oppbevaringssted for brev og dokumenter',
          explanation: null,
          terms: [
            {
              expression: {
                language: 'nob',
                lemma: 'arkiv',
                presentationLemma: 'arkiv',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'swe',
                lemma: 'arkiv',
                presentationLemma: 'arkiv',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'sme',
                lemma: 'arkiiva',
                presentationLemma: 'arkiiva',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'sme',
                lemma: 'vuorká',
                presentationLemma: 'vuorká',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'sme',
                lemma: 'vuorká',
                presentationLemma: 'vuorká',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'smn',
                lemma: 'arkkâdâh',
                presentationLemma: 'arkkâdâh',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'sma',
                lemma: 'våarhkoe',
                presentationLemma: 'våarhkoe',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
      ],
      'Medisiidna:vuorká': [
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'fin',
                lemma: 'varasto',
                presentationLemma: 'varasto',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'nob',
                lemma: 'depot',
                presentationLemma: 'depot',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'swe',
                lemma: 'depå',
                presentationLemma: 'depå',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'swe',
                lemma: 'förråd',
                presentationLemma: 'förråd',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: 'vuorká - vuorkái - vuorkkáide',
          explanation: null,
          terms: [
            {
              expression: {
                language: 'sme',
                lemma: 'vuorká',
                presentationLemma: 'vuorká',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'smn',
                lemma: 'vuárkká',
                presentationLemma: 'vuárkká',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
      ],
      'Servodatdieđa:vurkkohat': [
        {
          collections: ['Collection:SD-terms'],
          definition:
            'rom i bolig for oppbevaring og lagring av utstyr, mat, klær, etc.',
          explanation: null,
          terms: [
            {
              expression: {
                language: 'nob',
                lemma: 'bod',
                presentationLemma: 'bod',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'sme',
                lemma: 'vurkkohat',
                presentationLemma: 'vurkkohat',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'sme',
                lemma: 'vuorká',
                presentationLemma: 'vuorká',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'sme',
                lemma: 'rádju',
                presentationLemma: 'rádju',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition:
            'asunnon huone, jossa säilytetään ruokaa, vaatteita, välineitä jne.',
          explanation: null,
          terms: [
            {
              expression: {
                language: 'fin',
                lemma: 'varasto',
                presentationLemma: 'varasto',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'fin',
                lemma: 'komero',
                presentationLemma: 'komero',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: ['Collection:SD-terms'],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'swe',
                lemma: 'boda',
                presentationLemma: 'boda',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
            {
              expression: {
                language: 'swe',
                lemma: 'gömsle',
                presentationLemma: 'gömsle',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
      ],
      'Teknihkka industriija duodji:vuorká': [
        {
          collections: [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'nob',
                lemma: 'oppbevaringsplass',
                presentationLemma: 'oppbevaringsplass',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'sme',
                lemma: 'vuorká',
                presentationLemma: 'vuorká',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'swe',
                lemma: 'förråd',
                presentationLemma: 'förråd',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
        {
          collections: [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03',
          ],
          definition: null,
          explanation: null,
          terms: [
            {
              expression: {
                language: 'fin',
                lemma: 'säilytyspaikka',
                presentationLemma: 'säilytyspaikka',
                pos: 'N',
              },
              note: null,
              source: null,
              status: null,
            },
          ],
        },
      ],
    };

    expect(multilingualconceptListsByNames(conceptList as any)).toEqual(want);
  });

  it('Find which languages the lemma has in a single term concept', () => {
    const want = ['sme'];

    expect(
      languagesOfLemma(
        'vuorká',
        multilingualconceptListsByNames(conceptList as any)[
          'Dihtorteknologiija ja diehtoteknihkka:fiila'
        ],
      ),
    ).toEqual(want);
  });

  it('Move the found lang to the start of concepts', () => {
    const want = [
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'sme',
              lemma: 'fiila',
              presentationLemma: 'fiila',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
          {
            expression: {
              language: 'sme',
              lemma: 'vuorká',
              presentationLemma: 'vuorká',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'smj',
              lemma: 'fijlla',
              presentationLemma: 'fijlla',
              pos: 'N',
            },
            note: 'jll jl',
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'fin',
              lemma: 'viila',
              presentationLemma: 'viila',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
          {
            expression: {
              language: 'fin',
              lemma: 'kaista',
              presentationLemma: 'kaista',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
          {
            expression: {
              language: 'fin',
              lemma: 'tiedosto',
              presentationLemma: 'tiedosto',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'eng',
              lemma: 'file',
              presentationLemma: 'file',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: 'fil, i edb: en ordnet mengde av sammenhørende data',
        explanation: null,
        terms: [
          {
            expression: {
              language: 'nob',
              lemma: 'fil',
              presentationLemma: 'fil',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'swe',
              lemma: 'fil',
              presentationLemma: 'fil',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'sma',
              lemma: 'fijle',
              presentationLemma: 'fijle',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
    ];

    expect(
      moveLangFirst(
        'sme',
        multilingualconceptListsByNames(conceptList as any)[
          'Dihtorteknologiija ja diehtoteknihkka:fiila'
        ],
      ),
    ).toEqual(want);
  });

  it('Move the found lemma first in a given concept', () => {
    const got = moveLangFirst(
      'sme',
      multilingualconceptListsByNames(conceptList as any)[
        'Dihtorteknologiija ja diehtoteknihkka:fiila'
      ],
    )[0];
    const lemma = 'vuorká';
    const want = {
      language: 'sme',
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
            lemma: 'vuorká',
            presentationLemma: 'vuorká',
            pos: 'N',
            language: 'sme',
          },
        },
        {
          note: null,
          source: null,
          status: null,
          expression: {
            lemma: 'fiila',
            presentationLemma: 'fiila',
            pos: 'N',
            language: 'sme',
          },
        },
      ],
    };

    expect(cleanFrom(lemma, got)).toEqual(want);
  });

  it('Order the multilingual concept by lemma and language', () => {
    const got = multilingualconceptListsByNames(conceptList as any)[
      'Dihtorteknologiija ja diehtoteknihkka:fiila'
    ];
    const want = [
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        language: 'sme',
        terms: [
          {
            expression: {
              language: 'sme',
              lemma: 'vuorká',
              presentationLemma: 'vuorká',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
          {
            expression: {
              language: 'sme',
              lemma: 'fiila',
              presentationLemma: 'fiila',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'smj',
              lemma: 'fijlla',
              presentationLemma: 'fijlla',
              pos: 'N',
            },
            note: 'jll jl',
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'fin',
              lemma: 'viila',
              presentationLemma: 'viila',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
          {
            expression: {
              language: 'fin',
              lemma: 'kaista',
              presentationLemma: 'kaista',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
          {
            expression: {
              language: 'fin',
              lemma: 'tiedosto',
              presentationLemma: 'tiedosto',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'eng',
              lemma: 'file',
              presentationLemma: 'file',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: 'fil, i edb: en ordnet mengde av sammenhørende data',
        explanation: null,
        terms: [
          {
            expression: {
              language: 'nob',
              lemma: 'fil',
              presentationLemma: 'fil',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'swe',
              lemma: 'fil',
              presentationLemma: 'fil',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
      {
        collections: [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013',
        ],
        definition: null,
        explanation: null,
        terms: [
          {
            expression: {
              language: 'sma',
              lemma: 'fijle',
              presentationLemma: 'fijle',
              pos: 'N',
            },
            note: null,
            source: null,
            status: null,
          },
        ],
      },
    ];

    expect(orderedMultilingualConcept('vuorká', got)).toEqual(want);
  });
});

describe('Massage Giellatekno dictionaries from backend', () => {
  it('Turn backend dict article into frontend-compatible format', () => {
    const got = dictEntryList[0];

    const want = {
      dict: 'gtsmenob',
      from: {
        language: 'sme',
        lookupLemmas: [
          {
            country: null,
            dialect: null,
            language: 'sme',
            lemma: 'vuorká',
            presentationLemma: 'vuorká',
            pos: 'N',
          },
        ],
      },
      to: {
        language: 'nob',
        translationGroups: [
          {
            examples: [],
            restriction: null,
            translations: [
              {
                country: null,
                dialect: null,
                language: 'nob',
                lemma: 'arkiv',
                presentationLemma: 'arkiv',
                pos: 'N',
              },
            ],
          },
          {
            examples: [],
            restriction: null,
            translations: [
              {
                country: null,
                dialect: null,
                language: 'nob',
                lemma: 'depot',
                presentationLemma: 'depot',
                pos: 'N',
              },
              {
                country: null,
                dialect: null,
                language: 'nob',
                lemma: 'oppbevaringsplass',
                presentationLemma: 'oppbevaringsplass',
                pos: 'N',
              },
            ],
          },
          {
            examples: [],
            restriction: null,
            translations: [
              {
                country: null,
                dialect: null,
                language: 'nob',
                lemma: 'oppbevaring',
                presentationLemma: 'oppbevaring',
                pos: 'N',
              },
            ],
          },
        ],
      },
    };

    expect(dictBackend2Frontend(got as any)).toEqual(want);
  });
});

describe('Massage input from paradigm generator', () => {
  it('Remove +Prop from keys', () => {
    const got = {
      analyses: {
        'N+Prop+Sg+Nom': ['Kárášjohka'],
        'N+Prop+Sg+Gen': ['Kárášjoga'],
        'N+Sg+Gen': ['Kárášjoga'],
      },
    };

    const want = {
      analyses: {
        'N+Sg+Nom': ['Kárášjohka'],
        'N+Sg+Gen': ['Kárášjoga'],
      },
    };

    expect(filterProp(got)).toEqual(want);
  });

  it('Turn satni-backend paradigm into smi-cgi paradigm', () => {
    const got = {
      generated: [
        {
          paradigmTemplate: '+N+Sg+Nom',
          analyses: [
            {
              wordform: 'guolli',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Pl+Nom',
          analyses: [
            {
              wordform: 'guolit',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Sg+Acc',
          analyses: [
            {
              wordform: 'guoli',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Pl+Acc',
          analyses: [
            {
              wordform: 'guliid',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Sg+Gen',
          analyses: [
            {
              wordform: 'guole',
              weight: 0,
            },
            {
              wordform: 'guoli',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Pl+Gen',
          analyses: [
            {
              wordform: 'guliid',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Sg+Ill',
          analyses: [
            {
              wordform: 'guollái',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Pl+Ill',
          analyses: [
            {
              wordform: 'guliide',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Sg+Loc',
          analyses: [
            {
              wordform: 'guolis',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Pl+Loc',
          analyses: [
            {
              wordform: 'guliin',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Sg+Com',
          analyses: [
            {
              wordform: 'guliin',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Pl+Com',
          analyses: [
            {
              wordform: 'guliiguin',
              weight: 0,
            },
          ],
        },
        {
          paradigmTemplate: '+N+Ess',
          analyses: [
            {
              wordform: 'guollin',
              weight: 0,
            },
          ],
        },
      ],
    };

    const want = {
      analyses: {
        '+N+Sg+Nom': ['guolli'],
        '+N+Pl+Nom': ['guolit'],
        '+N+Sg+Acc': ['guoli'],
        '+N+Pl+Acc': ['guliid'],
        '+N+Sg+Gen': ['guole', 'guoli'],
        '+N+Pl+Gen': ['guliid'],
        '+N+Sg+Ill': ['guollái'],
        '+N+Pl+Ill': ['guliide'],
        '+N+Sg+Loc': ['guolis'],
        '+N+Pl+Loc': ['guliin'],
        '+N+Sg+Com': ['guliin'],
        '+N+Pl+Com': ['guliiguin'],
        '+N+Ess': ['guollin'],
      },
    };

    expect(filterParadigm(got)).toEqual(want);
  });
});
