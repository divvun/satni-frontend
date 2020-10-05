import {
  moveLangFirst,
  cleanFrom,
  conceptListNames,
  multiLingualConcept2ConceptPairs,
  dictBackend2Frontend,
  filterProp,
  multilingualconceptListsByNames
} from './utils';
import { conceptList, dictEntryList } from 'utils.data';

describe('Massage termwiki data from backend', () => {
  it('Order concept list by concept names', () => {
    const want = {
      'Dihtorteknologiija ja diehtoteknihkka:fiila': [
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'smj',
                'lemma': 'fijlla',
                'pos': 'N'
              },
              'note': 'jll jl',
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'fin',
                'lemma': 'viila',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'fin',
                'lemma': 'kaista',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'fin',
                'lemma': 'tiedosto',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'eng',
                'lemma': 'file',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013'
          ],
          'definition': 'fil, i edb: en ordnet mengde av sammenhørende data',
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'nob',
                'lemma': 'fil',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'swe',
                'lemma': 'fil',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:Dáhtábágo javllamáno 2013'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'sma',
                'lemma': 'fijle',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        }
      ],
      'Dihtorteknologiija ja diehtoteknihkka:vuorká': [
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'nob',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'swe',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        }
      ],
      'Ekonomiija ja gávppašeapmi:arkiiva': [
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'fin',
                'lemma': 'arkisto',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': 'samling av brev og dokumenter; oppbevaringssted for brev og dokumenter',
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'nob',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'swe',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'smn',
                'lemma': 'arkkâdâh',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'sma',
                'lemma': 'våarhkoe',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        }
      ],
      'Medisiidna:vuorká': [
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'fin',
                'lemma': 'varasto',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'nob',
                'lemma': 'depot',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'swe',
                'lemma': 'depå',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'swe',
                'lemma': 'förråd',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': 'vuorká - vuorkái - vuorkkáide',
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'smn',
                'lemma': 'vuárkká',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        }
      ],
      'Servodatdieđa:vurkkohat': [
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': 'rom i bolig for oppbevaring og lagring av utstyr, mat, klær, etc.',
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'nob',
                'lemma': 'bod',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'sme',
                'lemma': 'vurkkohat',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'rádju',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': 'asunnon huone, jossa säilytetään ruokaa, vaatteita, välineitä jne.',
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'fin',
                'lemma': 'varasto',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'fin',
                'lemma': 'komero',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'swe',
                'lemma': 'boda',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'language': 'swe',
                'lemma': 'gömsle',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        }
      ],
      'Teknihkka industriija duodji:vuorká': [
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'nob',
                'lemma': 'oppbevaringsplass',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'swe',
                'lemma': 'förråd',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        {
          'collections': [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03'
          ],
          'definition': null,
          'explanation': null,
          'terms': [
            {
              'expression': {
                'language': 'fin',
                'lemma': 'säilytyspaikka',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        }
      ]
    };

    expect(multilingualconceptListsByNames(conceptList)).toEqual(want);
  });

  it('Move the found lang to the start of concepts', () => {
    const got = [
      {
        'terms': [
          {
            'expression': {
              'language': 'smj'
            }
          }
        ]
      },
      {
        'terms': [
          {
            'expression': {
              'language': 'sma'
            }
          }
        ]
      },
      {
        'terms': [
          {
            'expression': {
              'language': 'nob'
            }
          }
        ]
      }
    ];

    const want = [
      {
        'terms': [
          {
            'expression': {
              'language': 'sma'
            }
          }
        ]
      },
      {
        'terms': [
          {
            'expression': {
              'language': 'smj'
            }
          }
        ]
      },
      {
        'terms': [
          {
            'expression': {
              'language': 'nob'
            }
          }
        ]
      }
    ];

    expect(moveLangFirst('sma', got)).toEqual(want);
  });

  it('Move the found lemma first in a given concept', () => {
    const got = conceptList[5];
    const lemma = 'vuorká';
    const language = 'sme';
    const want = {
      'language': 'sme',
      'collections': [
        'Collection:SD-terms',
        'Collection:Dáhtábágo javllamáno 2013'
      ],
      'definition': null,
      'explanation': null,
      'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
      'terms': [
        {
          'note': null,
          'source': null,
          'status': null,
          'expression': {
            'lemma': 'vuorká',
            'pos': 'N',
            'language': 'sme'
          }
        },
        {
          'note': null,
          'source': null,
          'status': null,
          'expression': {
            'lemma': 'fiila',
            'pos': 'N',
            'language': 'sme'
          }
        }
      ]
    };
    expect(cleanFrom(lemma, language, got)).toEqual(want);
  });

  it('Turn elemmas into into concepts that contain language pairs', () => {
    const got = [
      {
        'name': 'Beaivválaš giella:Musikksannõs 12',
        'collections': [
          'Collection:Musikksannõs'
        ],
        'definition': 'sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)',
        'explanation': null,
        'terms': [
          {
            'note': '(murtosointu)',
            'source': null,
            'status': null,
            'expression': {
              'lemma': 'arpeggio',
              'language': 'fin',
              'pos': 'N'
            }
          }
        ]
      },
      {
        'name': 'Beaivválaš giella:Musikksannõs 12',
        'collections': [
          'Collection:Musikksannõs'
        ],
        'definition': null,
        'explanation': null,
        'terms': [
          {
            'note': '(=, -ooʹje ~ =, arpeggiost)',
            'source': null,
            'status': null,
            'expression': {
              'lemma': 'arpeggio',
              'language': 'sms',
              'pos': 'N'
            }
          }
        ]
      }
    ];

    const lemma = 'arpeggio';
    const want = [
      {
        'category': 'Beaivválaš giella',
        'collections': [
          'Collection:Musikksannõs'
        ],
        'dict': 'termwiki',
        'from': {
          'language': 'sme',
          'definition': 'sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)',
          'explanation': null,
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'language': 'fin',
                'lemma': 'arpeggio',
                'pos': 'N'
              },
              'note': '(murtosointu)',
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Beaivválaš giella:Musikksannõs 12',
        'to': {
          'language': 'sms',
          'definition': null,
          'explanation': null,
          'language': 'sms',
          'terms': [
            {
              'expression': {
                'language': 'sms',
                'lemma': 'arpeggio',
                'pos': 'N'
              },
              'note': '(=, -ooʹje ~ =, arpeggiost)',
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Beaivválaš giella',
        'collections': [
          'Collection:Musikksannõs'
        ],
        'dict': 'termwiki',
        'from': {
          'language': 'sme',
          'definition': null,
          'explanation': null,
          'language': 'sms',
          'terms': [
            {
              'expression': {
                'language': 'sms',
                'lemma': 'arpeggio',
                'pos': 'N'
              },
              'note': '(=, -ooʹje ~ =, arpeggiost)',
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Beaivválaš giella:Musikksannõs 12',
        'to': {
          'definition': 'sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)',
          'explanation': null,
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'language': 'fin',
                'lemma': 'arpeggio',
                'pos': 'N'
              },
              'note': '(murtosointu)',
              'source': null,
              'status': null
            }
          ]
        }
      }
    ]
;
  });
});

describe('Massage Giellatekno dictionaries from backend', () => {
  it('Turn backend dict article into frontend-compatible format', () => {
    const got = dictEntryList[0];

    const want = {
      'dict': 'gtsmenob',
      'from': {
        'language': 'sme',
        'lookupLemmas': [
          {
            'country': null,
            'dialect': null,
            'language': 'sme',
            'lemma': 'vuorká',
            'pos': 'N'
          }
        ]
      },
      'to': {
        'language': 'nob',
        'translationGroups': [
          {
            'examples': [],
            'restriction': null,
            'translations': [
              {
                'country': null,
                'dialect': null,
                'language': 'nob',
                'lemma': 'arkiv',
                'pos': 'N'
              }
            ]
          },
          {
            'examples': [],
            'restriction': null,
            'translations': [
              {
                'country': null,
                'dialect': null,
                'language': 'nob',
                'lemma': 'depot',
                'pos': 'N'
              },
              {
                'country': null,
                'dialect': null,
                'language': 'nob',
                'lemma': 'oppbevaringsplass',
                'pos': 'N'
              }
            ]
          },
          {
            'examples': [],
            'restriction': null,
            'translations': [
              {
                'country': null,
                'dialect': null,
                'language': 'nob',
                'lemma': 'oppbevaring',
                'pos': 'N'
              }
            ]
          }
        ]
      }
    };

    expect(dictBackend2Frontend(got)).toEqual(want);
  });
});

describe('Massage input from paradigm generator', () => {
  it('Remove +Prop from keys', () => {
    const got = {
      analyses: {
        'N+Prop+Sg+Nom': ['Kárášjohka'],
        'N+Prop+Sg+Gen': ['Kárášjoga'],
        'N+Sg+Gen': ['Kárášjoga']
      }
    };

    const want = {
      analyses: {
        'N+Sg+Nom': ['Kárášjohka'],
        'N+Sg+Gen': ['Kárášjoga'],
        'N+Sg+Gen': ['Kárášjoga']
      }
    };

    expect(filterProp(got)).toEqual(want);
  });
});
