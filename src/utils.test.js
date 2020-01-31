import {
  toJson,
  removeDuplicates,
  ensureTranslationGroupIsArray,
  translationStems,
  translationExamples,
  normaliseDict,
  normaliseTermWiki,
  normaliseArticles,
  termwikiPosts
} from './utils';
import {
  resultDictWithExamples,
  resultDictWithoutExamples,
  resultDictWithLatin,
  resultTermWiki,
  resultAehtjie,
  resultSnakkeWithRe
} from './utils_testdata';

const existDictWithExamples = {
  'expl': null,
  'term': 'oainnáhus',
  'def': null,
  'pos': 'N',
  'status': null,
  'termwikiref': '-1',
  'dict': 'smenob',
  'tg': {
    't': {
      '#text': 'syn',
      'pos': 'N'
    },
    'xg': [
      {
        'xt': 'Jeg prøver å vaske vekk det triste synet fra øynene mine, men det følger med likevel.',
        'x': 'Iskkan sihkkut váivves oainnáhusa iežan čalmmiin, muhto dat liikká čuovvu mu.',
        '#text': [
          '\n               ',
          '\n               ',
          '\n            '
        ]
      },
      {
        'xt': 'Jeg er det eneste hvite mennesket og selvfølgelig et syn.',
        'x': 'Lean áidna vilges olmmoš ja dieđusge oainnáhus.',
        '#text': [
          '\n               ',
          '\n               ',
          '\n            '
        ]
      }
    ],
    '#text': [
      '\n            ',
      '\n            ',
      '\n            ',
      '\n         '
    ],
    'xml:lang': 'nob'
  },
  'lang': 'sme'
};

const existDictWithoutExamples = {
  'status': null,
  'pos': 'N',
  'dict': 'smefin',
  'tg': {
    't': {
      'pos': 'N',
      '#text': 'kalvoin verkonkudonnassa'
    },
    'xml:lang': 'fin',
    '#text': [
      '\n            ',
      '\n         '
    ]
  },
  'termwikiref': '-1',
  'expl': null,
  'term': 'guolladat',
  'lang': 'sme',
  'def': null
};

const existDictWithLatin = {
  'term': 'makrellterne',
  'pos': 'N',
  'dict': 'nobsma',
  'status': null,
  'lang': 'nob',
  'termwikiref': '-1',
  'def': null,
  'expl': null,
  'tg': {
    'xml:lang': 'sma',
    '#text': [
      '\n            ',
      '\n            ',
      '\n         '
    ],
    're': {
      'xml:lang': 'lat',
      '#text': 'sterna hirundo'
    },
    't': {
      'pos': 'N',
      '#text': 'makrelle-dearne'
    }
  }
};

const termWiki = {
  'termwikiref': 'Servodatdieđa:androgyna',
  'expl': null,
  'pos': 'N',
  'category': 'Servodatdieđa',
  'def': null,
  'tg': [
    {
      '#text': [
        '\n      ',
        '\n    '
      ],
      'xml:lang': 'en',
      't': {
        '#text': '\n        androgyne\n\n      ',
        'pos': 'N'
      }
    },
    {
      '#text': [
        '\n      ',
        '\n    '
      ],
      'xml:lang': 'smn',
      't': {
        '#text': '\n        androgynlâšvuotâ\n\n      ',
        'pos': 'A'
      }
    },
    {
      '#text': [
        '\n      ',
        '\n    '
      ],
      'xml:lang': 'smn',
      't': '\n        androgynvuotâ\n\n      '
    },
    {
      '#text': [
        '\n      ',
        '\n    '
      ],
      'xml:lang': 'se',
      't': {
        '#text': '\n        androgyna\n\n      ',
        'pos': 'N'
      }
    },
    {
      '#text': [
        '\n      ',
        '\n    '
      ],
      'xml:lang': 'fi',
      't': {
        '#text': '\n        androgyyni\n\n      ',
        'pos': 'N'
      }
    },
    {
      '#text': [
        '\n      ',
        '\n    '
      ],
      'xml:lang': 'smn',
      't': {
        '#text': '\n        androgyn\n\n      ',
        'pos': 'N'
      }
    },
    {
      '#text': [
        '\n      ',
        '\n    '
      ],
      'xml:lang': 'nb',
      't': {
        '#text': '\n        \n\n      ',
        'pos': 'N'
      }
    },
    {
      '#text': [
        '\n      ',
        '\n    '
      ],
      'xml:lang': 'sv',
      't': {
        '#text': '\n        \n\n      ',
        'pos': 'N'
      }
    }
  ],
  'term': 'androgyn',
  'status': null,
  'dict': 'termwiki'
};

const aehtjie = {
  'term': 'aehtjie',
  'pos': 'N',
  'dict': 'smanob',
  'status': null,
  'lang': 'sma',
  'termwikiref': '-1',
  'def': null,
  'expl': null,
  'tg': [
    {
      'xml:lang': 'nob',
      '#text': [
        '\n            ',
        '\n         '
      ],
      't': {
        'pos': 'N',
        '#text': 'far'
      }
    },
    {
      'xml:lang': 'swe',
      '#text': [
        '\n            ',
        '\n         '
      ],
      't': {
        'pos': 'N',
        '#text': 'far'
      }
    }
  ]
};

const withSms = {
  'term': 'piste',
  'pos': 'N',
  'dict': 'termwiki',
  'status': null,
  'category': [
    'Dáidda ja girjjálašvuohta'
  ],
  'termwikiref': 'Dáidda ja girjjálašvuohta:ceäkldõs',
  'def': null,
  'expl': null,
  'tg': [
    {
      'xml:lang': 'sms',
      '#text': [
        '\n      ',
        '\n    '
      ],
      't': {
        'pos': 'N',
        '#text': 'ceäkldõs'
      }
    },
    {
      'xml:lang': 'fi',
      '#text': [
        '\n      ',
        '\n    '
      ],
      't': {
        'pos': 'N',
        '#text': 'piste'
      }
    }
  ]
};

const snakkeWithRe = {
  'term': 'snakke',
  'pos': 'V',
  'dict': 'nobsme',
  'status': null,
  'lang': 'nob',
  'termwikiref': '-1',
  'def': null,
  'expl': null,
  'tg': {
    'xml:lang': 'sme',
    'tw_id': 'snakke d6a858f4-79a8-49fe-8ab8-3f3bf2f3f933',
    '#text': [
      '\n            ',
      '\n            ',
      '\n         '
    ],
    're': 'snakke samisk',
    't': {
      'pos': 'V',
      'src': 'fad',
      '#text': 'sámástit'
    }
  }
};

describe('Massage data from eXist', () => {
  it('Turn text in to JSON', () => {
    const gotQuery = '{{ "term" : "juolahtaa mieleen", "dict" : "finsmn", "lang" : "fin", "langs" : "smn" }}';
    const wantQuery = [{ 'term': 'juolahtaa mieleen', 'dict': 'finsmn', 'lang': 'fin', 'langs': 'smn' }];

    expect(toJson(gotQuery)).toEqual(wantQuery);
  });

  it('Peels the duplicate term away', () => {
    const gotAndro = [
      {
        'tg': [
          {
            'xml:lang': 'en',
            't': {
              '#text': 'androgyne',
              'pos': 'A'
            }
          }
        ],
        'dict': 'termwiki',
        'termwikiref': 'Servodatdieđa:androgyna'
      },
      {
        'tg': [
          {
            'xml:lang': 'en',
            't': {
              '#text': 'androgyne',
              'pos': 'A'
            }
          }
        ],
        'dict': 'termwiki',
        'termwikiref': 'Servodatdieđa:androgyna'
      }
    ];

    const halfAndro = [
      {
        'tg': [
          {
            'xml:lang': 'en',
            't': {
              '#text': 'androgyne',
              'pos': 'A'
            }
          }
        ],
        'dict': 'termwiki',
        'termwikiref': 'Servodatdieđa:androgyna'
      }
    ];

    expect(removeDuplicates(gotAndro)).toEqual(halfAndro);
  });

  it('Turns dict tg where t is an object into an array of stems', () => {
    const tgElement = {
      't': {
        'pos': 'N',
        '#text': 'jalka'
      },
      'xml:lang': 'fin',
      '#text': [
        '\n            ',
        '\n         '
      ]
    };

    expect(translationStems(tgElement))
  .toEqual([{'lemma': 'jalka', 'lang': 'fin', 'pos': 'N'}]);
  });

  it('Turns dict tg where t is an array into an array of stems', () => {
    const tgElement = {
      't': [
        {
          'pos': 'N',
          '#text': 'fot'
        },
        {
          'pos': 'N',
          '#text': 'bein'
        }
      ],
      'xml:lang': 'nob',
      '#text': [
        '\n            ',
        '\n            ',
        '\n         '
      ]
    };

    expect(translationStems(tgElement))
  .toEqual([{'lemma': 'fot', 'lang': 'nob', 'pos': 'N'},
            {'lemma': 'bein', 'lang': 'nob', 'pos': 'N'}]);
  });

  it('Turns dict xg where xg is an object into an array of examples', () => {
    const xgElement = {
      'x': 'original',
      'xt': 'translation'
    };

    expect(translationExamples(xgElement))
  .toEqual([{'x': 'original', 'xt': 'translation'}]);
  });

  it('Turns dict xg where xg is an array into an array of examples', () => {
    const xgElement = [
      {
        'x': 'orig1',
        'xt': 'trans1'
      },
      {
        'x': 'orig2',
        'xt': 'trans2'
      }
    ];

    expect(translationExamples(xgElement))
  .toEqual([{'x': 'orig1', 'xt': 'trans1'},
            {'x': 'orig2', 'xt': 'trans2'}]);
  });

  it('Normalise a dict article with examples into an object', () => {
    expect(normaliseArticles([existDictWithExamples]))
    .toEqual(resultDictWithExamples);
  });

  it('Normalise a dict article without examples into an object', () => {
    expect(normaliseArticles([existDictWithoutExamples]))
    .toEqual(resultDictWithoutExamples);
  });

  it('Normalise a dict article with re with lat', () => {
    expect(normaliseArticles([existDictWithLatin]))
    .toEqual(resultDictWithLatin);
  });

  it('Normalise a termwiki article into an object', () => {
    expect(normaliseTermWiki(termWiki)).toEqual(resultTermWiki);
  });

  it('Normalise all article types', () => {
    expect(normaliseArticles(
      [
        existDictWithExamples,
        existDictWithoutExamples,
        termWiki
      ])).toEqual(
      [
        resultDictWithExamples[0],
        resultDictWithoutExamples[0],
        resultTermWiki
      ]);
  });

  it('Normalise the aehtjie search result, it causes a crash', () => {
    expect(normaliseArticles([aehtjie])).toEqual(resultAehtjie);
  });

  it('Normalise sms article', () => {
    const resultWithSms = {
      'dict': 'termwiki',
      'stems': [
        {
          'lang': 'fin',
          'lemma': 'piste',
          'pos': 'N'
        },
        {
          'lang': 'sms',
          'lemma': 'ceäkldõs',
          'pos': 'N'
        }
      ],
      'termwikiref': 'Dáidda ja girjjálašvuohta:ceäkldõs'
    };

    expect(normaliseTermWiki(withSms)).toEqual(resultWithSms);
  });

  it('Normalise dict with re', () => {
    expect(normaliseArticles([snakkeWithRe]))
    .toEqual(resultSnakkeWithRe);
  });
});

describe('Massage a termwiki post', () => {
  const got = {
    'term': 'syn',
    'pos': 'MWE',
    'dict': 'termwiki',
    'status': null,
    'category': 'Servodatdieđa',
    'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 2180',
    'def': null,
    'expl': null,
    'tg': [
      {
        'xml:lang': 'sma',
        '#text': [
          '\n      ',
          '\n    '
        ],
        't': {
          'pos': 'MWE',
          '#text': 'mov vuajnoen mietie'
        }
      },
      {
        'xml:lang': 'nb',
        '#text': [
          '\n      ',
          '\n    '
        ],
        't': {
          'pos': 'N',
          '#text': 'syn'
        }
      },
      {
        'xml:lang': 'nb',
        '#text': [
          '\n      ',
          '\n    '
        ],
        't': {
          'pos': 'N',
          '#text': 'synspunkt'
        }
      },
      {
        'xml:lang': 'sv',
        '#text': [
          '\n      ',
          '\n    '
        ],
        't': {
          'pos': 'N',
          '#text': 'syn'
        }
      },
      {
        'xml:lang': 'sv',
        '#text': [
          '\n      ',
          '\n    '
        ],
        't': {
          'pos': 'N',
          '#text': 'synpunkt'
        }
      }
    ]
  };

  const want = [
    {
      dict: 'termwiki',
      category: 'Servodatdieđa',
      termwikiref: 'Servodatdieđa:åejviebaakoelæstoe 20110120 2180',
      from: {
        lemma: 'syn',
        pos: 'N',
        language: 'nob'
      },
      to: {
        lemma: 'mov vuajnoen mietie',
        pos: 'MWE',
        language: 'sma'
      }
    },
    {
      dict: 'termwiki',
      category: 'Servodatdieđa',
      termwikiref: 'Servodatdieđa:åejviebaakoelæstoe 20110120 2180',
      from: {
        lemma: 'syn',
        pos: 'N',
        language: 'swe'
      },
      to: {
        lemma: 'mov vuajnoen mietie',
        pos: 'MWE',
        language: 'sma'
      }
    }
  ];

  it('Turn termpost into pairs of stems', () => {
    expect(termwikiPosts('syn', got)).toEqual(want);
  });
});
