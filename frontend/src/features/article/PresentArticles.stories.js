import React from 'react';
import { storiesOf } from '@storybook/react';

import PresentArticles from './PresentArticles';

const arpeggio = [
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

const vuorka = [
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

storiesOf('PresentArticles', module)
  // .add('DictArticle with examples', () => <PresentArticles
  //   articles={[resultDictWithExamples[0]]} />)
  // .add('DictArticle without examples', () => <PresentArticles
  //   articles={[resultDictWithoutExamples[0]]} />)
  .add('TermWikiArticle arpeggio', () => <PresentArticles
    articles={arpeggio} />)
  .add('TermWikiArticle vuorka', () => <PresentArticles
    articles={vuorka} />);
// .add('All types', () => <PresentArticles
//   articles={[
//     resultDictWithExamples[0],
//     resultDictWithoutExamples[0],
//     termGroup
//   ]} />);
