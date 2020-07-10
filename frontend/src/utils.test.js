import {
  moveLangFirst,
  cleanFrom,
  multiLingualConcept2ConceptPairs,
  multilingualconceptList2ConceptPairs,
  elemmas2ConceptPairs,
  dictBackend2Frontend
} from './utils';

const multilingualconceptList = [
  {
    'id': 'TXVsdGlMaW5ndWFsQ29uY2VwdFR5cGU6NWVkOTU2NmU3YmRmZjQ4NzRjNWI2YmIz',
    'name': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
    'concepts': [
      {
        'definition': null,
        'explanation': null,
        'language': 'sma',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhOQ==',
              'lemma': 'fijle',
              'pos': 'N',
              'language': 'sma'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'eng',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYQ==',
              'lemma': 'file',
              'pos': 'N',
              'language': 'eng'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'swe',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYg==',
              'lemma': 'fil',
              'pos': 'N',
              'language': 'swe'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'sme',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
              'lemma': 'fiila',
              'pos': 'N',
              'language': 'sme'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
              'lemma': 'vuorká',
              'pos': 'N',
              'language': 'sme'
            }
          }
        ]
      },
      {
        'definition': 'fil, i edb: en ordnet mengde av sammenhørende data',
        'explanation': null,
        'language': 'nob',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZQ==',
              'lemma': 'fil',
              'pos': 'N',
              'language': 'nob'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'fin',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZg==',
              'lemma': 'viila',
              'pos': 'N',
              'language': 'fin'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJiMA==',
              'lemma': 'kaista',
              'pos': 'N',
              'language': 'fin'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJiMQ==',
              'lemma': 'tiedosto',
              'pos': 'N',
              'language': 'fin'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'smj',
        'terms': [
          {
            'note': 'jll jl',
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJiMg==',
              'lemma': 'fijlla',
              'pos': 'N',
              'language': 'smj'
            }
          }
        ]
      }
    ]
  },
  {
    'id': 'TXVsdGlMaW5ndWFsQ29uY2VwdFR5cGU6NWVkOTU2NmY3YmRmZjQ4NzRjNWI2ZmIw',
    'name': 'Dihtorteknologiija ja diehtoteknihkka:vuorká',
    'concepts': [
      {
        'definition': null,
        'explanation': null,
        'language': 'sme',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZmN2JkZmY0ODc0YzViNmZhZA==',
              'lemma': 'vuorká',
              'pos': 'N',
              'language': 'sme'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'nob',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZmN2JkZmY0ODc0YzViNmZhZQ==',
              'lemma': 'arkiv',
              'pos': 'N',
              'language': 'nob'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'swe',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjZmN2JkZmY0ODc0YzViNmZhZg==',
              'lemma': 'arkiv',
              'pos': 'N',
              'language': 'swe'
            }
          }
        ]
      }
    ]
  },
  {
    'id': 'TXVsdGlMaW5ndWFsQ29uY2VwdFR5cGU6NWVkOTU2Nzg3YmRmZjQ4NzRjNWI5NmQ4',
    'name': 'Ekonomiija ja gávppašeapmi:arkiiva',
    'concepts': [
      {
        'definition': null,
        'explanation': null,
        'language': 'sma',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkMA==',
              'lemma': 'våarhkoe',
              'pos': 'N',
              'language': 'sma'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'fin',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkMQ==',
              'lemma': 'arkisto',
              'pos': 'N',
              'language': 'fin'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'swe',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkMg==',
              'lemma': 'arkiv',
              'pos': 'N',
              'language': 'swe'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'smn',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkMw==',
              'lemma': 'arkkâdâh',
              'pos': 'N',
              'language': 'smn'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'sme',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNA==',
              'lemma': 'arkiiva',
              'pos': 'N',
              'language': 'sme'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNQ==',
              'lemma': 'vuorká',
              'pos': 'N',
              'language': 'sme'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNg==',
              'lemma': 'vuorká',
              'pos': 'N',
              'language': 'sme'
            }
          }
        ]
      },
      {
        'definition': 'samling av brev og dokumenter; oppbevaringssted for brev og dokumenter',
        'explanation': null,
        'language': 'nob',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNw==',
              'lemma': 'arkiv',
              'pos': 'N',
              'language': 'nob'
            }
          }
        ]
      }
    ]
  },
  {
    'id': 'TXVsdGlMaW5ndWFsQ29uY2VwdFR5cGU6NWVkOTU2OWM3YmRmZjQ4NzRjNWMyNzYz',
    'name': 'Luonddudieđa ja matematihkka:fiilu',
    'concepts': [
      {
        'definition': null,
        'explanation': null,
        'language': 'sma',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1YQ==',
              'lemma': 'fæjloe',
              'pos': 'N',
              'language': 'sma'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'fin',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Yg==',
              'lemma': 'viila',
              'pos': 'N',
              'language': 'fin'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'eng',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Yw==',
              'lemma': 'file',
              'pos': '',
              'language': 'eng'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'swe',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1ZA==',
              'lemma': 'fil',
              'pos': '',
              'language': 'swe'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'smj',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1ZQ==',
              'lemma': 'fijllo',
              'pos': 'N',
              'language': 'smj'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'sme',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Zg==',
              'lemma': 'fiilu',
              'pos': 'N',
              'language': 'sme'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MA==',
              'lemma': 'vuorká',
              'pos': 'N',
              'language': 'sme'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MQ==',
              'lemma': 'fiila',
              'pos': 'N',
              'language': 'sme'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'nob',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2Mg==',
              'lemma': 'fil',
              'pos': 'N',
              'language': 'nob'
            }
          }
        ]
      }
    ]
  },
  {
    'id': 'TXVsdGlMaW5ndWFsQ29uY2VwdFR5cGU6NWVkOTU2Yjg3YmRmZjQ4NzRjNWM5ZGIw',
    'name': 'Medisiidna:vuorká',
    'concepts': [
      {
        'definition': null,
        'explanation': null,
        'language': 'fin',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhYQ==',
              'lemma': 'varasto',
              'pos': 'N',
              'language': 'fin'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'swe',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhYg==',
              'lemma': 'depå',
              'pos': 'N',
              'language': 'swe'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhYw==',
              'lemma': 'förråd',
              'pos': 'N',
              'language': 'swe'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'smn',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhZA==',
              'lemma': 'vuárkká',
              'pos': 'N',
              'language': 'smn'
            }
          }
        ]
      },
      {
        'definition': 'vuorká - vuorkái - vuorkkáide',
        'explanation': null,
        'language': 'sme',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhZQ==',
              'lemma': 'vuorká',
              'pos': 'N',
              'language': 'sme'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'nob',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhZg==',
              'lemma': 'depot',
              'pos': 'N',
              'language': 'nob'
            }
          }
        ]
      }
    ]
  },
  {
    'id': 'TXVsdGlMaW5ndWFsQ29uY2VwdFR5cGU6NWVkOTU2ZDI3YmRmZjQ4NzRjNWQwM2Yx',
    'name': 'Servodatdieđa:vurkkohat',
    'concepts': [
      {
        'definition': 'asunnon huone, jossa säilytetään ruokaa, vaatteita, välineitä jne.',
        'explanation': null,
        'language': 'fin',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlOQ==',
              'lemma': 'varasto',
              'pos': 'N',
              'language': 'fin'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlYQ==',
              'lemma': 'komero',
              'pos': 'N',
              'language': 'fin'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'swe',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlYg==',
              'lemma': 'boda',
              'pos': 'N',
              'language': 'swe'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlYw==',
              'lemma': 'gömsle',
              'pos': 'N',
              'language': 'swe'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'sme',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZA==',
              'lemma': 'vurkkohat',
              'pos': 'N',
              'language': 'sme'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZQ==',
              'lemma': 'vuorká',
              'pos': 'N',
              'language': 'sme'
            }
          },
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZg==',
              'lemma': 'rádju',
              'pos': 'N',
              'language': 'sme'
            }
          }
        ]
      },
      {
        'definition': 'rom i bolig for oppbevaring og lagring av utstyr, mat, klær, etc.',
        'explanation': null,
        'language': 'nob',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNmMA==',
              'lemma': 'bod',
              'pos': 'N',
              'language': 'nob'
            }
          }
        ]
      }
    ]
  },
  {
    'id': 'TXVsdGlMaW5ndWFsQ29uY2VwdFR5cGU6NWVkOTU2ZGU3YmRmZjQ4NzRjNWQzNDc1',
    'name': 'Teknihkka industriija duodji:vuorká',
    'concepts': [
      {
        'definition': null,
        'explanation': null,
        'language': 'sme',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3MQ==',
              'lemma': 'vuorká',
              'pos': 'N',
              'language': 'sme'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'nob',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3Mg==',
              'lemma': 'oppbevaringsplass',
              'pos': 'N',
              'language': 'nob'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'fin',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3Mw==',
              'lemma': 'säilytyspaikka',
              'pos': 'N',
              'language': 'fin'
            }
          }
        ]
      },
      {
        'definition': null,
        'explanation': null,
        'language': 'swe',
        'terms': [
          {
            'note': null,
            'sanctioned': true,
            'source': null,
            'status': null,
            'expression': {
              'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3NA==',
              'lemma': 'förråd',
              'pos': 'N',
              'language': 'swe'
            }
          }
        ]
      }
    ]
  }
];
export const elemmasConverted = [];

describe('Massage termwiki data from backend', () => {
  it('Move the found lang to the start of concepts', () => {
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

  it('Move the found lemma first in concepts', () => {
    const got = multilingualconceptList[0].concepts[3];
    const lemma = 'vuorká';
    const language = 'sme';
    const want = {
      'definition': null,
      'explanation': null,
      'language': 'sme',
      'terms': [
        {
          'note': null,
          'sanctioned': true,
          'source': null,
          'status': null,
          'expression': {
            'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
            'lemma': 'vuorká',
            'pos': 'N',
            'language': 'sme'
          }
        },
        {
          'note': null,
          'sanctioned': true,
          'source': null,
          'status': null,
          'expression': {
            'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
            'lemma': 'fiila',
            'pos': 'N',
            'language': 'sme'
          }
        }
      ]
    };
    expect(cleanFrom(lemma, language, got)).toEqual(want);
  });

  it('Turn a multilingualconcept into concepts that contain language pairs', () => {
    const got = multilingualconceptList[0];
    const lemma = 'vuorká';
    const language = 'sme';
    const want = [
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sma',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhOQ==',
                'language': 'sma',
                'lemma': 'fijle',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'eng',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYQ==',
                'language': 'eng',
                'lemma': 'file',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'swe',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYg==',
                'language': 'swe',
                'lemma': 'fil',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'nob',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZQ==',
                'language': 'nob',
                'lemma': 'fil',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZg==',
                'language': 'fin',
                'lemma': 'viila',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJiMA==',
                'language': 'fin',
                'lemma': 'kaista',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJiMQ==',
                'language': 'fin',
                'lemma': 'tiedosto',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'smj',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJiMg==',
                'language': 'smj',
                'lemma': 'fijlla',
                'pos': 'N'
              },
              'note': 'jll jl',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      }
    ];

    expect(multiLingualConcept2ConceptPairs(lemma, language, got)).toEqual(want);
  });

  it('Turn a multilingualconceptList into into concepts that contain language pairs', () => {
    const got = multilingualconceptList;
    const lemma = 'vuorká';
    const language = 'sme';

    const want = [
      {
        'category': 'Dihtorteknologiija ja diehtoteknihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sma',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhOQ==',
                'language': 'sma',
                'lemma': 'fijle',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'eng',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYQ==',
                'language': 'eng',
                'lemma': 'file',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'swe',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYg==',
                'language': 'swe',
                'lemma': 'fil',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'nob',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZQ==',
                'language': 'nob',
                'lemma': 'fil',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZg==',
                'language': 'fin',
                'lemma': 'viila',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJiMA==',
                'language': 'fin',
                'lemma': 'kaista',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJiMQ==',
                'language': 'fin',
                'lemma': 'tiedosto',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'smj',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJiMg==',
                'language': 'smj',
                'lemma': 'fijlla',
                'pos': 'N'
              },
              'note': 'jll jl',
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZmN2JkZmY0ODc0YzViNmZhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'nob',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZmN2JkZmY0ODc0YzViNmZhZQ==',
                'language': 'nob',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZmN2JkZmY0ODc0YzViNmZhZA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'swe',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZmN2JkZmY0ODc0YzViNmZhZg==',
                'language': 'swe',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNg==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNA==',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sma',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkMA==',
                'language': 'sma',
                'lemma': 'våarhkoe',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNg==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNA==',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkMQ==',
                'language': 'fin',
                'lemma': 'arkisto',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNg==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNA==',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'swe',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkMg==',
                'language': 'swe',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNg==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNA==',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'smn',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkMw==',
                'language': 'smn',
                'lemma': 'arkkâdâh',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNg==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNA==',
                'language': 'sme',
                'lemma': 'arkiiva',
                'pos': 'N'
              },
              'note': null,
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
          'language': 'nob',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1Njc4N2JkZmY0ODc0YzViOTZkNw==',
                'language': 'nob',
                'lemma': 'arkiv',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Zg==',
                'language': 'sme',
                'lemma': 'fiilu',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MQ==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Luonddudieđa ja matematihkka:fiilu',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'sma',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1YQ==',
                'language': 'sma',
                'lemma': 'fæjloe',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Zg==',
                'language': 'sme',
                'lemma': 'fiilu',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MQ==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Luonddudieđa ja matematihkka:fiilu',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Yg==',
                'language': 'fin',
                'lemma': 'viila',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Zg==',
                'language': 'sme',
                'lemma': 'fiilu',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MQ==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Luonddudieđa ja matematihkka:fiilu',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'eng',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Yw==',
                'language': 'eng',
                'lemma': 'file',
                'pos': ''
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Zg==',
                'language': 'sme',
                'lemma': 'fiilu',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MQ==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Luonddudieđa ja matematihkka:fiilu',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'swe',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1ZA==',
                'language': 'swe',
                'lemma': 'fil',
                'pos': ''
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Zg==',
                'language': 'sme',
                'lemma': 'fiilu',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MQ==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Luonddudieđa ja matematihkka:fiilu',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'smj',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1ZQ==',
                'language': 'smj',
                'lemma': 'fijllo',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Luonddudieđa ja matematihkka',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MA==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc1Zg==',
                'language': 'sme',
                'lemma': 'fiilu',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2MQ==',
                'language': 'sme',
                'lemma': 'fiila',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Luonddudieđa ja matematihkka:fiilu',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'nob',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjljN2JkZmY0ODc0YzVjMjc2Mg==',
                'language': 'nob',
                'lemma': 'fil',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Medisiidna',
        'dict': 'termwiki',
        'from': {
          'definition': 'vuorká - vuorkái - vuorkkáide',
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhZQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Medisiidna:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhYQ==',
                'language': 'fin',
                'lemma': 'varasto',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Medisiidna',
        'dict': 'termwiki',
        'from': {
          'definition': 'vuorká - vuorkái - vuorkkáide',
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhZQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Medisiidna:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'swe',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhYg==',
                'language': 'swe',
                'lemma': 'depå',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhYw==',
                'language': 'swe',
                'lemma': 'förråd',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Medisiidna',
        'dict': 'termwiki',
        'from': {
          'definition': 'vuorká - vuorkái - vuorkkáide',
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhZQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Medisiidna:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'smn',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhZA==',
                'language': 'smn',
                'lemma': 'vuárkká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Medisiidna',
        'dict': 'termwiki',
        'from': {
          'definition': 'vuorká - vuorkái - vuorkkáide',
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhZQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Medisiidna:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'nob',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmI4N2JkZmY0ODc0YzVjOWRhZg==',
                'language': 'nob',
                'lemma': 'depot',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Servodatdieđa',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZA==',
                'language': 'sme',
                'lemma': 'vurkkohat',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZg==',
                'language': 'sme',
                'lemma': 'rádju',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Servodatdieđa:vurkkohat',
        'to': {
          'definition': 'asunnon huone, jossa säilytetään ruokaa, vaatteita, välineitä jne.',
          'explanation': null,
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlOQ==',
                'language': 'fin',
                'lemma': 'varasto',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlYQ==',
                'language': 'fin',
                'lemma': 'komero',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Servodatdieđa',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZA==',
                'language': 'sme',
                'lemma': 'vurkkohat',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZg==',
                'language': 'sme',
                'lemma': 'rádju',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Servodatdieđa:vurkkohat',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'swe',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlYg==',
                'language': 'swe',
                'lemma': 'boda',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlYw==',
                'language': 'swe',
                'lemma': 'gömsle',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Servodatdieđa',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZA==',
                'language': 'sme',
                'lemma': 'vurkkohat',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            },
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNlZg==',
                'language': 'sme',
                'lemma': 'rádju',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Servodatdieđa:vurkkohat',
        'to': {
          'definition': 'rom i bolig for oppbevaring og lagring av utstyr, mat, klær, etc.',
          'explanation': null,
          'language': 'nob',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmQyN2JkZmY0ODc0YzVkMDNmMA==',
                'language': 'nob',
                'lemma': 'bod',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Teknihkka industriija duodji',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3MQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Teknihkka industriija duodji:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'nob',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3Mg==',
                'language': 'nob',
                'lemma': 'oppbevaringsplass',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Teknihkka industriija duodji',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3MQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Teknihkka industriija duodji:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3Mw==',
                'language': 'fin',
                'lemma': 'säilytyspaikka',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Teknihkka industriija duodji',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sme',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3MQ==',
                'language': 'sme',
                'lemma': 'vuorká',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Teknihkka industriija duodji:vuorká',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'swe',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NmRlN2JkZmY0ODc0YzVkMzQ3NA==',
                'language': 'swe',
                'lemma': 'förråd',
                'pos': 'N'
              },
              'note': null,
              'sanctioned': true,
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
        'id': 'TXVsdGlMaW5ndWFsQ29uY2VwdFR5cGU6NWVkOTU2NmM3YmRmZjQ4NzRjNWI2MDBl',
        'name': 'Beaivválaš giella:Musikksannõs 12',
        'concepts': [
          {
            'definition': 'sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)',
            'explanation': null,
            'language': 'fin',
            'terms': [
              {
                'note': '(murtosointu)',
                'sanctioned': true,
                'source': null,
                'status': null,
                'expression': {
                  'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwYw==',
                  'lemma': 'arpeggio',
                  'pos': 'N',
                  'language': 'fin'
                }
              }
            ]
          },
          {
            'definition': null,
            'explanation': null,
            'language': 'sms',
            'terms': [
              {
                'note': '(=, -ooʹje ~ =, arpeggiost)',
                'sanctioned': true,
                'source': null,
                'status': null,
                'expression': {
                  'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwZA==',
                  'lemma': 'arpeggio',
                  'pos': 'N',
                  'language': 'sms'
                }
              }
            ]
          }
        ]
      }
    ];

    const lemma = 'arpeggio';
    const want = [
      {
        'category': 'Beaivválaš giella',
        'dict': 'termwiki',
        'from': {
          'definition': 'sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)',
          'explanation': null,
          'language': 'fin',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwYw==',
                'language': 'fin',
                'lemma': 'arpeggio',
                'pos': 'N'
              },
              'note': '(murtosointu)',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        },
        'termwikiref': 'Beaivválaš giella:Musikksannõs 12',
        'to': {
          'definition': null,
          'explanation': null,
          'language': 'sms',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwZA==',
                'language': 'sms',
                'lemma': 'arpeggio',
                'pos': 'N'
              },
              'note': '(=, -ooʹje ~ =, arpeggiost)',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      },
      {
        'category': 'Beaivválaš giella',
        'dict': 'termwiki',
        'from': {
          'definition': null,
          'explanation': null,
          'language': 'sms',
          'terms': [
            {
              'expression': {
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwZA==',
                'language': 'sms',
                'lemma': 'arpeggio',
                'pos': 'N'
              },
              'note': '(=, -ooʹje ~ =, arpeggiost)',
              'sanctioned': true,
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
                'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwYw==',
                'language': 'fin',
                'lemma': 'arpeggio',
                'pos': 'N'
              },
              'note': '(murtosointu)',
              'sanctioned': true,
              'source': null,
              'status': null
            }
          ]
        }
      }
    ];

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
