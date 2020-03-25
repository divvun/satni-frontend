import {
  moveLangFirst,
  cleanFrom,
  multiLingualConcept2ConceptPairs,
  elemma2ConceptPairs,
  elemmas2ConceptPairs
} from './utils';

const elemmas = [
  {
    'id': '3623',
    'lemma': 'vuorká',
    'language': 'sme',
    'pos': 'N',
    'multilingualconcepts': [
      {
        'id': '1118',
        'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'conceptSet': [
          {
            'id': '3097',
            'language': 'smj',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '3717',
                'expression': {
                  'id': '3615',
                  'language': 'smj',
                  'lemma': 'fijlla',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': 'recommended',
                'source': null
              }
            ]
          },
          {
            'id': '3098',
            'language': 'swe',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '3718',
                'expression': {
                  'id': '3616',
                  'language': 'swe',
                  'lemma': 'fil',
                  'pos': ''
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '3099',
            'language': 'eng',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '3719',
                'expression': {
                  'id': '3617',
                  'language': 'eng',
                  'lemma': 'file',
                  'pos': ''
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '3100',
            'language': 'sma',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '3720',
                'expression': {
                  'id': '3618',
                  'language': 'sma',
                  'lemma': 'fijle',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '3101',
            'language': 'fin',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '3721',
                'expression': {
                  'id': '3619',
                  'language': 'fin',
                  'lemma': 'viila',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              },
              {
                'id': '3722',
                'expression': {
                  'id': '3620',
                  'language': 'fin',
                  'lemma': 'kaista',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              },
              {
                'id': '3723',
                'expression': {
                  'id': '3455',
                  'language': 'fin',
                  'lemma': 'tiedosto',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '3102',
            'language': 'nob',
            'definition': 'fil, i edb: en ordnet mengde av sammenhørende data',
            'explanation': null,
            'termSet': [
              {
                'id': '3724',
                'expression': {
                  'id': '3621',
                  'language': 'nob',
                  'lemma': 'fil',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '3103',
            'language': 'sme',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '3725',
                'expression': {
                  'id': '3622',
                  'language': 'sme',
                  'lemma': 'fiila',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              },
              {
                'id': '3726',
                'expression': {
                  'id': '3623',
                  'language': 'sme',
                  'lemma': 'vuorká',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          }
        ]
      },
      {
        'id': '1375',
        'name': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
        'conceptSet': [
          {
            'id': '3892',
            'language': 'swe',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '4584',
                'expression': {
                  'id': '4454',
                  'language': 'swe',
                  'lemma': 'arkiv',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '3893',
            'language': 'nob',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '4585',
                'expression': {
                  'id': '4455',
                  'language': 'nob',
                  'lemma': 'arkiv',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '3894',
            'language': 'sme',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '4586',
                'expression': {
                  'id': '3623',
                  'language': 'sme',
                  'lemma': 'vuorká',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          }
        ]
      },
      {
        'id': '3757',
        'name': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'conceptSet': [
          {
            'id': '12036',
            'language': 'fin',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '13733',
                'expression': {
                  'id': '13265',
                  'language': 'fin',
                  'lemma': 'arkisto',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '12037',
            'language': 'sma',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '13734',
                'expression': {
                  'id': '3670',
                  'language': 'sma',
                  'lemma': 'våarhkoe',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '12038',
            'language': 'smn',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '13735',
                'expression': {
                  'id': '13266',
                  'language': 'smn',
                  'lemma': 'arkkâdâh',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '12039',
            'language': 'swe',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '13736',
                'expression': {
                  'id': '4454',
                  'language': 'swe',
                  'lemma': 'arkiv',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '12040',
            'language': 'nob',
            'definition': 'samling av brev og dokumenter; oppbevaringssted for brev og dokumenter',
            'explanation': null,
            'termSet': [
              {
                'id': '13737',
                'expression': {
                  'id': '4455',
                  'language': 'nob',
                  'lemma': 'arkiv',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          },
          {
            'id': '12041',
            'language': 'sme',
            'definition': null,
            'explanation': null,
            'termSet': [
              {
                'id': '13738',
                'expression': {
                  'id': '13267',
                  'language': 'sme',
                  'lemma': 'arkiiva',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              },
              {
                'id': '13739',
                'expression': {
                  'id': '3623',
                  'language': 'sme',
                  'lemma': 'vuorká',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              },
              {
                'id': '13740',
                'expression': {
                  'id': '3623',
                  'language': 'sme',
                  'lemma': 'vuorká',
                  'pos': 'N'
                },
                'sanctioned': true,
                'note': null,
                'status': null,
                'source': null
              }
            ]
          }
        ]
      }
    ]
  }
];

export const elemmasConverted = [];

describe('Massage termwiki data from backend', () => {
  it('Move the found lang to the start of the conceptSet', () => {
    const got = [
      {
        'language': 'swe'
      },
      {
        'language': 'sma'
      },
      {
        'language': 'nob'
      }
    ];

    const want = [
      {
        'language': 'sma'
      },
      {
        'language': 'swe'
      },
      {
        'language': 'nob'
      }
    ];

    expect(moveLangFirst('sma', got)).toEqual(want);
  });

  it('Move the found lemma first in its conceptSet', () => {
    const got = elemmas[0].multilingualconcepts[0].conceptSet[6];
    const id = elemmas[0].id;
    const want = {
      'id': '3103',
      'language': 'sme',
      'definition': null,
      'explanation': null,
      'termSet': [
        {
          'id': '3726',
          'expression': {
            'id': '3623',
            'language': 'sme',
            'lemma': 'vuorká',
            'pos': 'N'
          },
          'sanctioned': true,
          'note': null,
          'status': null,
          'source': null
        },
        {
          'id': '3725',
          'expression': {
            'id': '3622',
            'language': 'sme',
            'lemma': 'fiila',
            'pos': 'N'
          },
          'sanctioned': true,
          'note': null,
          'status': null,
          'source': null
        }
      ]
    };
    expect(cleanFrom(id, got)).toEqual(want);
  });

  it('Turn a multilingualconcept into concepts that contain language pairs', () => {
    const got = elemmas[0].multilingualconcepts[0];
    const want = [
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3097',
          'language': 'smj',
          'termSet': [
            {
              'expression': {
                'id': '3615',
                'language': 'smj',
                'lemma': 'fijlla',
                'pos': 'N'
              },
              'id': '3615',
              'language': 'smj',
              'lemma': 'fijlla',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': 'recommended'
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3098',
          'language': 'swe',
          'termSet': [
            {
              'expression': {
                'id': '3616',
                'language': 'swe',
                'lemma': 'fil',
                'pos': ''
              },
              'id': '3616',
              'language': 'swe',
              'lemma': 'fil',
              'note': null,
              'pos': '',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3099',
          'language': 'eng',
          'termSet': [
            {
              'expression': {
                'id': '3617',
                'language': 'eng',
                'lemma': 'file',
                'pos': ''
              },
              'id': '3617',
              'language': 'eng',
              'lemma': 'file',
              'note': null,
              'pos': '',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3100',
          'language': 'sma',
          'termSet': [
            {
              'expression': {
                'id': '3618',
                'language': 'sma',
                'lemma': 'fijle',
                'pos': 'N'
              },
              'id': '3618',
              'language': 'sma',
              'lemma': 'fijle',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3101',
          'language': 'fin',
          'termSet': [
            {
              'expression': {
                'id': '3619',
                'language': 'fin',
                'lemma': 'viila',
                'pos': 'N'
              },
              'id': '3619',
              'language': 'fin',
              'lemma': 'viila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3620',
                'language': 'fin',
                'lemma': 'kaista',
                'pos': 'N'
              },
              'id': '3620',
              'language': 'fin',
              'lemma': 'kaista',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3455',
                'language': 'fin',
                'lemma': 'tiedosto',
                'pos': 'N'
              },
              'id': '3455',
              'language': 'fin',
              'lemma': 'tiedosto',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': 'fil, i edb: en ordnet mengde av sammenhørende data',
          'explanation': null,
          'id': '3102',
          'language': 'nob',
          'termSet': [
            {
              'expression': {
                'id': '3621',
                'language': 'nob',
                'lemma': 'fil',
                'pos': 'N'
              },
              'id': '3621',
              'language': 'nob',
              'lemma': 'fil',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      }
    ]
;

    expect(multiLingualConcept2ConceptPairs(elemmas[0].multilingualconcepts[0].conceptSet[6].language, elemmas[0].id, got)).toEqual(want);
  });

  it('Turn an elemma into into concepts that contain language pairs', () => {
    const got = elemmas[0];

    const want = [
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3097',
          'language': 'smj',
          'termSet': [
            {
              'expression': {
                'id': '3615',
                'language': 'smj',
                'lemma': 'fijlla',
                'pos': 'N'
              },
              'id': '3615',
              'language': 'smj',
              'lemma': 'fijlla',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': 'recommended'
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3098',
          'language': 'swe',
          'termSet': [
            {
              'expression': {
                'id': '3616',
                'language': 'swe',
                'lemma': 'fil',
                'pos': ''
              },
              'id': '3616',
              'language': 'swe',
              'lemma': 'fil',
              'note': null,
              'pos': '',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3099',
          'language': 'eng',
          'termSet': [
            {
              'expression': {
                'id': '3617',
                'language': 'eng',
                'lemma': 'file',
                'pos': ''
              },
              'id': '3617',
              'language': 'eng',
              'lemma': 'file',
              'note': null,
              'pos': '',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3100',
          'language': 'sma',
          'termSet': [
            {
              'expression': {
                'id': '3618',
                'language': 'sma',
                'lemma': 'fijle',
                'pos': 'N'
              },
              'id': '3618',
              'language': 'sma',
              'lemma': 'fijle',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3101',
          'language': 'fin',
          'termSet': [
            {
              'expression': {
                'id': '3619',
                'language': 'fin',
                'lemma': 'viila',
                'pos': 'N'
              },
              'id': '3619',
              'language': 'fin',
              'lemma': 'viila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3620',
                'language': 'fin',
                'lemma': 'kaista',
                'pos': 'N'
              },
              'id': '3620',
              'language': 'fin',
              'lemma': 'kaista',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3455',
                'language': 'fin',
                'lemma': 'tiedosto',
                'pos': 'N'
              },
              'id': '3455',
              'language': 'fin',
              'lemma': 'tiedosto',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': 'fil, i edb: en ordnet mengde av sammenhørende data',
          'explanation': null,
          'id': '3102',
          'language': 'nob',
          'termSet': [
            {
              'expression': {
                'id': '3621',
                'language': 'nob',
                'lemma': 'fil',
                'pos': 'N'
              },
              'id': '3621',
              'language': 'nob',
              'lemma': 'fil',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3894',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3892',
          'language': 'swe',
          'termSet': [
            {
              'expression': {
                'id': '4454',
                'language': 'swe',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'id': '4454',
              'language': 'swe',
              'lemma': 'arkiv',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3894',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3893',
          'language': 'nob',
          'termSet': [
            {
              'expression': {
                'id': '4455',
                'language': 'nob',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'id': '4455',
              'language': 'nob',
              'lemma': 'arkiv',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '12036',
          'language': 'fin',
          'termSet': [
            {
              'expression': {
                'id': '13265',
                'language': 'fin',
                'lemma': 'arkisto',
                'pos': 'N'
              },
              'id': '13265',
              'language': 'fin',
              'lemma': 'arkisto',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '12037',
          'language': 'sma',
          'termSet': [
            {
              'expression': {
                'id': '3670',
                'language': 'sma',
                'lemma': 'våarhkoe',
                'pos': 'N'
              },
              'id': '3670',
              'language': 'sma',
              'lemma': 'våarhkoe',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '12038',
          'language': 'smn',
          'termSet': [
            {
              'expression': {
                'id': '13266',
                'language': 'smn',
                'lemma': 'arkkâdâh',
                'pos': 'N'
              },
              'id': '13266',
              'language': 'smn',
              'lemma': 'arkkâdâh',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '12039',
          'language': 'swe',
          'termSet': [
            {
              'expression': {
                'id': '4454',
                'language': 'swe',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'id': '4454',
              'language': 'swe',
              'lemma': 'arkiv',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': 'samling av brev og dokumenter; oppbevaringssted for brev og dokumenter',
          'explanation': null,
          'id': '12040',
          'language': 'nob',
          'termSet': [
            {
              'expression': {
                'id': '4455',
                'language': 'nob',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'id': '4455',
              'language': 'nob',
              'lemma': 'arkiv',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      }
    ];

    expect(elemma2ConceptPairs(got)).toEqual(want);
  });

  it('Turn elemmas into into concepts that contain language pairs', () => {
    const got = elemmas;
    const want = [
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3097',
          'language': 'smj',
          'termSet': [
            {
              'expression': {
                'id': '3615',
                'language': 'smj',
                'lemma': 'fijlla',
                'pos': 'N'
              },
              'id': '3615',
              'language': 'smj',
              'lemma': 'fijlla',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': 'recommended'
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3098',
          'language': 'swe',
          'termSet': [
            {
              'expression': {
                'id': '3616',
                'language': 'swe',
                'lemma': 'fil',
                'pos': ''
              },
              'id': '3616',
              'language': 'swe',
              'lemma': 'fil',
              'note': null,
              'pos': '',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3099',
          'language': 'eng',
          'termSet': [
            {
              'expression': {
                'id': '3617',
                'language': 'eng',
                'lemma': 'file',
                'pos': ''
              },
              'id': '3617',
              'language': 'eng',
              'lemma': 'file',
              'note': null,
              'pos': '',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3100',
          'language': 'sma',
          'termSet': [
            {
              'expression': {
                'id': '3618',
                'language': 'sma',
                'lemma': 'fijle',
                'pos': 'N'
              },
              'id': '3618',
              'language': 'sma',
              'lemma': 'fijle',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3101',
          'language': 'fin',
          'termSet': [
            {
              'expression': {
                'id': '3619',
                'language': 'fin',
                'lemma': 'viila',
                'pos': 'N'
              },
              'id': '3619',
              'language': 'fin',
              'lemma': 'viila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3620',
                'language': 'fin',
                'lemma': 'kaista',
                'pos': 'N'
              },
              'id': '3620',
              'language': 'fin',
              'lemma': 'kaista',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3455',
                'language': 'fin',
                'lemma': 'tiedosto',
                'pos': 'N'
              },
              'id': '3455',
              'language': 'fin',
              'lemma': 'tiedosto',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3103',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3622',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'id': '3622',
              'language': 'sme',
              'lemma': 'fiila',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
          'definition': 'fil, i edb: en ordnet mengde av sammenhørende data',
          'explanation': null,
          'id': '3102',
          'language': 'nob',
          'termSet': [
            {
              'expression': {
                'id': '3621',
                'language': 'nob',
                'lemma': 'fil',
                'pos': 'N'
              },
              'id': '3621',
              'language': 'nob',
              'lemma': 'fil',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3894',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3892',
          'language': 'swe',
          'termSet': [
            {
              'expression': {
                'id': '4454',
                'language': 'swe',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'id': '4454',
              'language': 'swe',
              'lemma': 'arkiv',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '3894',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '3893',
          'language': 'nob',
          'termSet': [
            {
              'expression': {
                'id': '4455',
                'language': 'nob',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'id': '4455',
              'language': 'nob',
              'lemma': 'arkiv',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '12036',
          'language': 'fin',
          'termSet': [
            {
              'expression': {
                'id': '13265',
                'language': 'fin',
                'lemma': 'arkisto',
                'pos': 'N'
              },
              'id': '13265',
              'language': 'fin',
              'lemma': 'arkisto',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '12037',
          'language': 'sma',
          'termSet': [
            {
              'expression': {
                'id': '3670',
                'language': 'sma',
                'lemma': 'våarhkoe',
                'pos': 'N'
              },
              'id': '3670',
              'language': 'sma',
              'lemma': 'våarhkoe',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '12038',
          'language': 'smn',
          'termSet': [
            {
              'expression': {
                'id': '13266',
                'language': 'smn',
                'lemma': 'arkkâdâh',
                'pos': 'N'
              },
              'id': '13266',
              'language': 'smn',
              'lemma': 'arkkâdâh',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': null,
          'explanation': null,
          'id': '12039',
          'language': 'swe',
          'termSet': [
            {
              'expression': {
                'id': '4454',
                'language': 'swe',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'id': '4454',
              'language': 'swe',
              'lemma': 'arkiv',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Ekonomiija ja gávppašeapmi',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'id': '12041',
          'language': 'sme',
          'termSet': [
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '3623',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'id': '3623',
              'language': 'sme',
              'lemma': 'vuorká',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': '13267',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'id': '13267',
              'language': 'sme',
              'lemma': 'arkiiva',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
        'to': {
          'definition': 'samling av brev og dokumenter; oppbevaringssted for brev og dokumenter',
          'explanation': null,
          'id': '12040',
          'language': 'nob',
          'termSet': [
            {
              'expression': {
                'id': '4455',
                'language': 'nob',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'id': '4455',
              'language': 'nob',
              'lemma': 'arkiv',
              'note': null,
              'pos': 'N',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      }
    ];

    expect(elemmas2ConceptPairs(got)).toEqual(want);
  });
});
