import {
  moveLangFirst,
  cleanFrom,
  conceptListNames,
  multiLingualConcept2ConceptPairs,
  multilingualconceptList2ConceptPairs,
  elemmas2ConceptPairs,
  dictBackend2Frontend
} from './utils';

const conceptList = [
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    'collections': [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': 'jll jl',
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'fijlla',
          'language': 'smj',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    'collections': [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'viila',
          'language': 'fin',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'kaista',
          'language': 'fin',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'tiedosto',
          'language': 'fin',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    'collections': [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'file',
          'language': 'eng',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    'collections': [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013'
    ],
    'definition': 'fil, i edb: en ordnet mengde av sammenhørende data',
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'fil',
          'language': 'nob',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    'collections': [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'fil',
          'language': 'swe',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    'collections': [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'fiila',
          'language': 'sme',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'vuorká',
          'language': 'sme',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    'collections': [
      'Collection:SD-terms',
      'Collection:Dáhtábágo javllamáno 2013'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'fijle',
          'language': 'sma',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'arkiv',
          'language': 'nob',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'arkiv',
          'language': 'swe',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'vuorká',
          'language': 'sme',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Ekonomiija ja gávppašeapmi:arkiiva',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'arkisto',
          'language': 'fin',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Ekonomiija ja gávppašeapmi:arkiiva',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': 'samling av brev og dokumenter; oppbevaringssted for brev og dokumenter',
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'arkiv',
          'language': 'nob',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Ekonomiija ja gávppašeapmi:arkiiva',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'arkiv',
          'language': 'swe',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Ekonomiija ja gávppašeapmi:arkiiva',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'arkiiva',
          'language': 'sme',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'vuorká',
          'language': 'sme',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'vuorká',
          'language': 'sme',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Ekonomiija ja gávppašeapmi:arkiiva',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'arkkâdâh',
          'language': 'smn',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Ekonomiija ja gávppašeapmi:arkiiva',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'våarhkoe',
          'language': 'sma',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Medisiidna:vuorká',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'varasto',
          'language': 'fin',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Medisiidna:vuorká',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'depot',
          'language': 'nob',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Medisiidna:vuorká',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'depå',
          'language': 'swe',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'förråd',
          'language': 'swe',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Medisiidna:vuorká',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': 'vuorká - vuorkái - vuorkkáide',
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'vuorká',
          'language': 'sme',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Medisiidna:vuorká',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'vuárkká',
          'language': 'smn',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Servodatdieđa:vurkkohat',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': 'rom i bolig for oppbevaring og lagring av utstyr, mat, klær, etc.',
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'bod',
          'language': 'nob',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Servodatdieđa:vurkkohat',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'vurkkohat',
          'language': 'sme',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'vuorká',
          'language': 'sme',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'rádju',
          'language': 'sme',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Servodatdieđa:vurkkohat',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': 'asunnon huone, jossa säilytetään ruokaa, vaatteita, välineitä jne.',
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'varasto',
          'language': 'fin',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'komero',
          'language': 'fin',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Servodatdieđa:vurkkohat',
    'collections': [
      'Collection:SD-terms'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'boda',
          'language': 'swe',
          'pos': 'N'
        }
      },
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'gömsle',
          'language': 'swe',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Teknihkka industriija duodji:vuorká',
    'collections': [
      'Collection:SD-terms',
      'Collection:teknisk ordliste sg 10-03'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'oppbevaringsplass',
          'language': 'nob',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Teknihkka industriija duodji:vuorká',
    'collections': [
      'Collection:SD-terms',
      'Collection:teknisk ordliste sg 10-03'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'vuorká',
          'language': 'sme',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Teknihkka industriija duodji:vuorká',
    'collections': [
      'Collection:SD-terms',
      'Collection:teknisk ordliste sg 10-03'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'förråd',
          'language': 'swe',
          'pos': 'N'
        }
      }
    ]
  },
  {
    'name': 'Teknihkka industriija duodji:vuorká',
    'collections': [
      'Collection:SD-terms',
      'Collection:teknisk ordliste sg 10-03'
    ],
    'definition': null,
    'explanation': null,
    'terms': [
      {
        'note': null,
        'source': null,
        'status': null,
        'expression': {
          'lemma': 'säilytyspaikka',
          'language': 'fin',
          'pos': 'N'
        }
      }
    ]
  }
];

export const elemmasConverted = [];

describe('Massage termwiki data from backend', () => {
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

  it('Turn a concepts with identical names into articles of language pairs', () => {
    const got = conceptList;
    const lemma = 'vuorká';
    const language = 'sme';
    const name = 'Dihtorteknologiija ja diehtoteknihkka:fiila';
    const want = [
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'collections': [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013'
        ],
        'dict': 'termwiki',
        'from': {
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
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
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
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'collections': [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013'
        ],
        'dict': 'termwiki',
        'from': {
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
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
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
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'collections': [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013'
        ],
        'dict': 'termwiki',
        'from': {
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
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
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
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'collections': [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013'
        ],
        'dict': 'termwiki',
        'from': {
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
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
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
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'collections': [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013'
        ],
        'dict': 'termwiki',
        'from': {
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
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
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
        }
      },
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'collections': [
          'Collection:SD-terms',
          'Collection:Dáhtábágo javllamáno 2013'
        ],
        'dict': 'termwiki',
        'from': {
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
            },
            {
              'expression': {
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
        'to': {
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
      }
    ];

    expect(multiLingualConcept2ConceptPairs(lemma, language, got.filter(concept => concept.name === name))).toEqual(want);
  });

  it('Find the different names in the conceptList', () => {
    const got = conceptList;
    const want = [
      'Dihtorteknologiija ja diehtoteknihkka:fiila',
      'Dihtorteknologiija ja diehtoteknihkka:vuorká',
      'Ekonomiija ja gávppašeapmi:arkiiva',
      'Medisiidna:vuorká',
      'Servodatdieđa:vurkkohat',
      'Teknihkka industriija duodji:vuorká'
    ];
    expect(conceptListNames(got)).toEqual(want);
  });

  it('Turn a multilingualconceptList into into concepts that contain language pairs', () => {
    const got = conceptList;
    const lemma = 'vuorká';
    const language = 'sme';

    const want =
      [
        {
          'category': 'Dihtorteknologiija ja diehtoteknihkka',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
          'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
          'to': {
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
          }
        },
        {
          'category': 'Dihtorteknologiija ja diehtoteknihkka',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
          'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
          'to': {
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
          }
        },
        {
          'category': 'Ekonomiija ja gávppašeapmi',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
                  'lemma': 'arkiiva',
                  'pos': 'N'
                },
                'note': null,
                'source': null,
                'status': null
              }
            ]
          },
          'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
          'to': {
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
          }
        },
        {
          'category': 'Ekonomiija ja gávppašeapmi',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
                  'lemma': 'arkiiva',
                  'pos': 'N'
                },
                'note': null,
                'source': null,
                'status': null
              }
            ]
          },
          'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
          'to': {
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
          }
        },
        {
          'category': 'Ekonomiija ja gávppašeapmi',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
                  'lemma': 'arkiiva',
                  'pos': 'N'
                },
                'note': null,
                'source': null,
                'status': null
              }
            ]
          },
          'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
          'to': {
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
          }
        },
        {
          'category': 'Ekonomiija ja gávppašeapmi',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
                  'lemma': 'arkiiva',
                  'pos': 'N'
                },
                'note': null,
                'source': null,
                'status': null
              }
            ]
          },
          'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
          'to': {
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
          }
        },
        {
          'category': 'Ekonomiija ja gávppašeapmi',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
                  'lemma': 'arkiiva',
                  'pos': 'N'
                },
                'note': null,
                'source': null,
                'status': null
              }
            ]
          },
          'termwikiref': 'Ekonomiija ja gávppašeapmi:arkiiva',
          'to': {
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
        },
        {
          'category': 'Medisiidna',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
          'termwikiref': 'Medisiidna:vuorká',
          'to': {
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
          }
        },
        {
          'category': 'Medisiidna',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
          'termwikiref': 'Medisiidna:vuorká',
          'to': {
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
          }
        },
        {
          'category': 'Medisiidna',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
          'termwikiref': 'Medisiidna:vuorká',
          'to': {
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
          }
        },
        {
          'category': 'Medisiidna',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
          'termwikiref': 'Medisiidna:vuorká',
          'to': {
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
        },
        {
          'category': 'Servodatdieđa',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
              },
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
                  'lemma': 'rádju',
                  'pos': 'N'
                },
                'note': null,
                'source': null,
                'status': null
              }
            ]
          },
          'termwikiref': 'Servodatdieđa:vurkkohat',
          'to': {
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
          }
        },
        {
          'category': 'Servodatdieđa',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
              },
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
                  'lemma': 'rádju',
                  'pos': 'N'
                },
                'note': null,
                'source': null,
                'status': null
              }
            ]
          },
          'termwikiref': 'Servodatdieđa:vurkkohat',
          'to': {
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
          }
        },
        {
          'category': 'Servodatdieđa',
          'collections': [
            'Collection:SD-terms'
          ],
          'dict': 'termwiki',
          'from': {
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
              },
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
                  'lemma': 'rádju',
                  'pos': 'N'
                },
                'note': null,
                'source': null,
                'status': null
              }
            ]
          },
          'termwikiref': 'Servodatdieđa:vurkkohat',
          'to': {
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
        },
        {
          'category': 'Teknihkka industriija duodji',
          'collections': [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03'
          ],
          'dict': 'termwiki',
          'from': {
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
          'termwikiref': 'Teknihkka industriija duodji:vuorká',
          'to': {
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
          }
        },
        {
          'category': 'Teknihkka industriija duodji',
          'collections': [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03'
          ],
          'dict': 'termwiki',
          'from': {
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
          'termwikiref': 'Teknihkka industriija duodji:vuorká',
          'to': {
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
          }
        },
        {
          'category': 'Teknihkka industriija duodji',
          'collections': [
            'Collection:SD-terms',
            'Collection:teknisk ordliste sg 10-03'
          ],
          'dict': 'termwiki',
          'from': {
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
          'termwikiref': 'Teknihkka industriija duodji:vuorká',
          'to': {
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
        }
      ];

    expect(multilingualconceptList2ConceptPairs(lemma, language, got)).toEqual(want);
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
    const want = [];
    expect(elemmas2ConceptPairs(lemma, got)).toEqual(want);
  });
});

describe('Massage Giellatekno dictionaries from backend', () => {
  it('Turn backend dict article into frontend-compatible format', () => {
    const got = {
      'id': '5f08334a053d5ae2cf91d402',
      'srcLang': 'nob',
      'targetLang': 'sme',
      'lookupLemma': {
        'lemma': 'kanskje',
        'pos': 'Adv'
      },
      'translationGroups': [
        {
          'translationLemmas': {
            'edges': [
              {
                'node': {
                  'lemma': 'soaitit',
                  'language': 'sme',
                  'pos': 'V'
                }
              },
              {
                'node': {
                  'lemma': 'várra',
                  'language': 'sme',
                  'pos': 'Adv'
                }
              }
            ]
          },
          'restriction': 'om julenissen',
          'exampleGroups': [
            {
              'example': 'Vi får kanskje ikke engang representant til Sametinget.',
              'translation': 'Eat soaitte oba oažžut ge áirasa Sámediggái.'
            },
            {
              'example': 'Mor stemmer kanskje ikke på Arbeiderpartiet ved årets valg.',
              'translation': 'Eadni ii dáidde jienastit Bargiidbellodaga dán jagi válggas.'
            }
          ]
        }
      ]
    };
    const want = {
      'dict': 'nobsme',
      'from': {
        'language': 'nob',
        'lookupLemmas': [
          {
            'lemma': 'kanskje',
            'pos': 'Adv'
          }
        ]
      },
      'to': {
        'language': 'sme',
        'translationGroups': [
          {
            'examples': [
              {
                'example': 'Vi får kanskje ikke engang representant til Sametinget.',
                'translation': 'Eat soaitte oba oažžut ge áirasa Sámediggái.'
              },
              {
                'example': 'Mor stemmer kanskje ikke på Arbeiderpartiet ved årets valg.',
                'translation': 'Eadni ii dáidde jienastit Bargiidbellodaga dán jagi válggas.'
              }
            ],
            'restriction': 'om julenissen',
            'translations': [
              {
                'language': 'sme',
                'lemma': 'soaitit',
                'pos': 'V'
              },
              {
                'language': 'sme',
                'lemma': 'várra',
                'pos': 'Adv'
              }
            ]
          }
        ]
      }
    };

    expect(dictBackend2Frontend(got)).toEqual(want);
  });
});
