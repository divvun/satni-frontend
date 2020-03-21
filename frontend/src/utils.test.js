import {
  moveLangFirst,
  lemmaConcept2ConceptPairs,
  elemma2ConceptPairs,
  elemmas2ConceptPairs
} from './utils';

const elemmas = [
  {
    'id': '52476',
    'lemma': 'lim',
    'language': 'swe',
    'partOfSpeech': '',
    'lemmaconcepts': [
      {
        'name': 'Luonddudieđa ja matematihkka:x33543',
        'conceptSet': [
          {
            'language': 'eng',
            'definition': '',
            'terms': [
              {
                'id': '52480',
                'lemma': 'cement',
                'language': 'eng',
                'partOfSpeech': ''
              },
              {
                'id': '43353',
                'lemma': 'glue',
                'language': 'eng',
                'partOfSpeech': ''
              }
            ]
          },
          {
            'language': 'fin',
            'definition': '',
            'terms': [
              {
                'id': '52479',
                'lemma': 'liima',
                'language': 'fin',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'nob',
            'definition': 'klebrig væske eller masse til å binde saman stykke av tre, metall osv',
            'terms': [
              {
                'id': '52478',
                'lemma': 'lim',
                'language': 'nob',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'sme',
            'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
            'terms': [
              {
                'id': '52479',
                'lemma': 'liima',
                'language': 'sme',
                'partOfSpeech': 'N'
              },
              {
                'id': '52477',
                'lemma': 'liibma',
                'language': 'sme',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'swe',
            'definition': '',
            'terms': [
              {
                'id': '52476',
                'lemma': 'lim',
                'language': 'swe',
                'partOfSpeech': ''
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'id': '52478',
    'lemma': 'lim',
    'language': 'nob',
    'partOfSpeech': 'N',
    'lemmaconcepts': [
      {
        'name': 'Servodatdieđa:åejviebaakoelæstoe 20110120 2339',
        'conceptSet': [
          {
            'language': 'swe',
            'definition': '',
            'terms': [
              {
                'id': '81663',
                'lemma': 'lim',
                'language': 'swe',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'sma',
            'definition': '',
            'terms': [
              {
                'id': '82597',
                'lemma': 'njimkehtse',
                'language': 'sma',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'nob',
            'definition': '',
            'terms': [
              {
                'id': '52478',
                'lemma': 'lim',
                'language': 'nob',
                'partOfSpeech': 'N'
              }
            ]
          }
        ]
      },
      {
        'name': 'Servodatdieđa:åejviebaakoelæstoe 20110120 1902',
        'conceptSet': [
          {
            'language': 'swe',
            'definition': '',
            'terms': [
              {
                'id': '81663',
                'lemma': 'lim',
                'language': 'swe',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'sma',
            'definition': '',
            'terms': [
              {
                'id': '81662',
                'lemma': '1. lïjme = lijmie',
                'language': 'sma',
                'partOfSpeech': 'MWE'
              }
            ]
          },
          {
            'language': 'nob',
            'definition': '',
            'terms': [
              {
                'id': '52478',
                'lemma': 'lim',
                'language': 'nob',
                'partOfSpeech': 'N'
              }
            ]
          }
        ]
      },
      {
        'name': 'Luonddudieđa ja matematihkka:x33543',
        'conceptSet': [
          {
            'language': 'eng',
            'definition': '',
            'terms': [
              {
                'id': '52480',
                'lemma': 'cement',
                'language': 'eng',
                'partOfSpeech': ''
              },
              {
                'id': '43353',
                'lemma': 'glue',
                'language': 'eng',
                'partOfSpeech': ''
              }
            ]
          },
          {
            'language': 'fin',
            'definition': '',
            'terms': [
              {
                'id': '52479',
                'lemma': 'liima',
                'language': 'fin',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'nob',
            'definition': 'klebrig væske eller masse til å binde saman stykke av tre, metall osv',
            'terms': [
              {
                'id': '52478',
                'lemma': 'lim',
                'language': 'nob',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'sme',
            'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
            'terms': [
              {
                'id': '52477',
                'lemma': 'liibma',
                'language': 'sme',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'swe',
            'definition': '',
            'terms': [
              {
                'id': '52476',
                'lemma': 'lim',
                'language': 'swe',
                'partOfSpeech': ''
              }
            ]
          }
        ]
      }
    ]
  },
  {
    'id': '81663',
    'lemma': 'lim',
    'language': 'swe',
    'partOfSpeech': 'N',
    'lemmaconcepts': [
      {
        'name': 'Servodatdieđa:åejviebaakoelæstoe 20110120 2339',
        'conceptSet': [
          {
            'language': 'swe',
            'definition': '',
            'terms': [
              {
                'id': '81663',
                'lemma': 'lim',
                'language': 'swe',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'sma',
            'definition': '',
            'terms': [
              {
                'id': '82597',
                'lemma': 'njimkehtse',
                'language': 'sma',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'nob',
            'definition': '',
            'terms': [
              {
                'id': '52478',
                'lemma': 'lim',
                'language': 'nob',
                'partOfSpeech': 'N'
              }
            ]
          }
        ]
      },
      {
        'name': 'Servodatdieđa:åejviebaakoelæstoe 20110120 1902',
        'conceptSet': [
          {
            'language': 'swe',
            'definition': '',
            'terms': [
              {
                'id': '81663',
                'lemma': 'lim',
                'language': 'swe',
                'partOfSpeech': 'N'
              }
            ]
          },
          {
            'language': 'sma',
            'definition': '',
            'terms': [
              {
                'id': '81662',
                'lemma': '1. lïjme = lijmie',
                'language': 'sma',
                'partOfSpeech': 'MWE'
              }
            ]
          },
          {
            'language': 'nob',
            'definition': '',
            'terms': [
              {
                'id': '52478',
                'lemma': 'lim',
                'language': 'nob',
                'partOfSpeech': 'N'
              }
            ]
          }
        ]
      }
    ]
  }
];

export const elemmasConverted = [
  {
    'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
    'category': 'Luonddudieđa ja matematihkka',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'swe',
      'terms': [
        {
          'id': '52476',
          'language': 'swe',
          'lemma': 'lim',
          'partOfSpeech': ''
        }
      ]
    },
    'to': {
      'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
      'language': 'sme',
      'terms': [
        {
          'id': '52479',
          'language': 'sme',
          'lemma': 'liima',
          'partOfSpeech': 'N'
        },
        {
          'id': '52477',
          'language': 'sme',
          'lemma': 'liibma',
          'partOfSpeech': 'N'
        }
      ]
    }
  },
  {
    'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 2339',
    'category': 'Servodatdieđa',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'nob',
      'terms': [
        {
          'id': '52478',
          'language': 'nob',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': '',
      'language': 'sma',
      'terms': [
        {
          'id': '82597',
          'language': 'sma',
          'lemma': 'njimkehtse',
          'partOfSpeech': 'N'
        }
      ]
    }
  },
  {
    'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 1902',
    'category': 'Servodatdieđa',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'nob',
      'terms': [
        {
          'id': '52478',
          'language': 'nob',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': '',
      'language': 'sma',
      'terms': [
        {
          'id': '81662',
          'language': 'sma',
          'lemma': '1. lïjme = lijmie',
          'partOfSpeech': 'MWE'
        }
      ]
    }
  },
  {
    'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
    'category': 'Luonddudieđa ja matematihkka',
    'dict': 'termwiki',
    'from': {
      'definition': 'klebrig væske eller masse til å binde saman stykke av tre, metall osv',
      'language': 'nob',
      'terms': [
        {
          'id': '52478',
          'language': 'nob',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
      'language': 'sme',
      'terms': [
        {
          'id': '52477',
          'language': 'sme',
          'lemma': 'liibma',
          'partOfSpeech': 'N'
        }
      ]
    }
  },
  {
    'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 2339',
    'category': 'Servodatdieđa',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'swe',
      'terms': [
        {
          'id': '81663',
          'language': 'swe',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': '',
      'language': 'sma',
      'terms': [
        {
          'id': '82597',
          'language': 'sma',
          'lemma': 'njimkehtse',
          'partOfSpeech': 'N'
        }
      ]
    }
  },
  {
    'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 1902',
    'category': 'Servodatdieđa',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'swe',
      'terms': [
        {
          'id': '81663',
          'language': 'swe',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': '',
      'language': 'sma',
      'terms': [
        {
          'id': '81662',
          'language': 'sma',
          'lemma': '1. lïjme = lijmie',
          'partOfSpeech': 'MWE'
        }
      ]
    }
  }
];

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

  it('Turn a lemmaconcept into concepts that contain language pairs', () => {
    const got = elemmas[0].lemmaconcepts[0];

    const want = [
      {
        'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'language': 'sme',
          'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
          'terms': [
            {
              'id': '52477',
              'lemma': 'liibma',
              'language': 'sme',
              'partOfSpeech': 'N'
            },
            {
              'id': '52479',
              'language': 'sme',
              'lemma': 'liima',
              'partOfSpeech': 'N'
            }
          ]
        },
        'to': {
          'language': 'eng',
          'definition': '',
          'terms': [
            {
              'id': '52480',
              'lemma': 'cement',
              'language': 'eng',
              'partOfSpeech': ''
            },
            {
              'id': '43353',
              'lemma': 'glue',
              'language': 'eng',
              'partOfSpeech': ''
            }
          ]
        }
      },
      {
        'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'language': 'sme',
          'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
          'terms': [
            {
              'id': '52477',
              'lemma': 'liibma',
              'language': 'sme',
              'partOfSpeech': 'N'
            },
            {
              'id': '52479',
              'language': 'sme',
              'lemma': 'liima',
              'partOfSpeech': 'N'
            }
          ]
        },
        'to': {
          'language': 'fin',
          'definition': '',
          'terms': [
            {
              'id': '52479',
              'lemma': 'liima',
              'language': 'fin',
              'partOfSpeech': 'N'
            }
          ]
        }
      },
      {
        'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'language': 'sme',
          'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
          'terms': [
            {
              'id': '52477',
              'lemma': 'liibma',
              'language': 'sme',
              'partOfSpeech': 'N'
            },
            {
              'id': '52479',
              'language': 'sme',
              'lemma': 'liima',
              'partOfSpeech': 'N'
            }
          ]
        },
        'to': {
          'language': 'nob',
          'definition': 'klebrig væske eller masse til å binde saman stykke av tre, metall osv',
          'terms': [
            {
              'id': '52478',
              'lemma': 'lim',
              'language': 'nob',
              'partOfSpeech': 'N'
            }
          ]
        }
      },
      {
        'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'language': 'sme',
          'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
          'terms': [
            {
              'id': '52477',
              'lemma': 'liibma',
              'language': 'sme',
              'partOfSpeech': 'N'
            },
            {
              'id': '52479',
              'language': 'sme',
              'lemma': 'liima',
              'partOfSpeech': 'N'
            }
          ]
        },
        'to': {
          'language': 'swe',
          'definition': '',
          'terms': [
            {
              'id': '52476',
              'lemma': 'lim',
              'language': 'swe',
              'partOfSpeech': ''
            }
          ]
        }
      }
    ];

    expect(lemmaConcept2ConceptPairs('sme', '52477', got)).toEqual(want);
  });

  it('Turn an elemma into into concepts that contain language pairs', () => {
    const got = elemmas[2];

    const want = [
      {
        'category': 'Servodatdieđa',
        'dict': 'termwiki',
        'from': {
          'definition': '',
          'language': 'swe',
          'terms': [
            {
              'id': '81663',
              'language': 'swe',
              'lemma': 'lim',
              'partOfSpeech': 'N'
            }
          ]
        },
        'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 2339',
        'to': {
          'definition': '',
          'language': 'sma',
          'terms': [
            {
              'id': '82597',
              'language': 'sma',
              'lemma': 'njimkehtse',
              'partOfSpeech': 'N'
            }
          ]
        }
      },
      {
        'category': 'Servodatdieđa',
        'dict': 'termwiki',
        'from': {
          'definition': '',
          'language': 'swe',
          'terms': [
            {
              'id': '81663',
              'language': 'swe',
              'lemma': 'lim',
              'partOfSpeech': 'N'
            }
          ]
        },
        'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 1902',
        'to': {
          'definition': '',
          'language': 'sma',
          'terms': [
            {
              'id': '81662',
              'language': 'sma',
              'lemma': '1. lïjme = lijmie',
              'partOfSpeech': 'MWE'
            }
          ]
        }
      }
    ];

    expect(elemma2ConceptPairs(got)).toEqual(want);
  });

  it('Turn elemmas into into concepts that contain language pairs', () => {
    const got = elemmas;
    const want = elemmasConverted;

    expect(elemmas2ConceptPairs(got)).toEqual(want);
  });
});
