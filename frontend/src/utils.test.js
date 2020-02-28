import {
  toJson,
  removeDuplicates,
  translationStems,
  translationExamples,
  normaliseDict,
  normaliseTermWiki,
  normaliseArticles,
  termwikiPosts,
  dictPosts,
  mapArticlesByLanguagePair
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
  .toEqual([{'lemma': 'jalka', language: 'fin', 'pos': 'N'}]);
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
  .toEqual([{'lemma': 'fot', language: 'nob', 'pos': 'N'},
            {'lemma': 'bein', language: 'nob', 'pos': 'N'}]);
  });

  it('Turn example object into a string', () => {
    const xgElement = {
      x: {
        '#text': 'original',
        src: 'src1'
      },
      xt: {
        '#text': 'translation',
        src: 'src2'
      }
    };

    expect(translationExamples(xgElement)).toEqual([{'x': 'original', 'xt': 'translation'}]);
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
          language: 'fin',
          'lemma': 'piste',
          'pos': 'N'
        },
        {
          language: 'sms',
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

describe('Turn a termwiki article into display ready termwikiposts', () => {
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
      stems: [
        {
          lemma: 'syn',
          pos: 'N',
          language: 'swe'
        },
        {
          lemma: 'mov vuajnoen mietie',
          pos: 'MWE',
          language: 'sma'
        }
      ]
    },
    {
      dict: 'termwiki',
      category: 'Servodatdieđa',
      termwikiref: 'Servodatdieđa:åejviebaakoelæstoe 20110120 2180',
      stems: [
        {
          lemma: 'syn',
          pos: 'N',
          language: 'nob'
        },
        {
          lemma: 'mov vuajnoen mietie',
          pos: 'MWE',
          language: 'sma'
        }
      ]
    }
  ];

  it('Turn termpost into pairs of stems', () => {
    expect(termwikiPosts('syn', normaliseTermWiki(got))).toEqual(want);
  });
});

describe('Turn a dictionary article into display ready dictionary posts', () => {
  const want = [
    {
      dict: 'smenob',
      examples: [
        {
          x: 'Iskkan sihkkut váivves oainnáhusa iežan čalmmiin, muhto dat liikká čuovvu mu.',
          xt: 'Jeg prøver å vaske vekk det triste synet fra øynene mine, men det følger med likevel.'
        },
        {
          x: 'Lean áidna vilges olmmoš ja dieđusge oainnáhus.',
          xt: 'Jeg er det eneste hvite mennesket og selvfølgelig et syn.'
        }
      ],
      stems: [
        {
          language: 'sme',
          lemma: 'oainnáhus',
          pos: 'N'
        },
        {
          language: 'nob',
          lemma: 'syn',
          pos: 'N'
        }
      ],
      termwikiref: '-1'
    }
  ];

  it('Turn dictpost into pairs of stems', () => {
    expect(dictPosts(normaliseDict(existDictWithExamples)[0])).toEqual(want);
  });
});

describe('Version 0.13.0 failed on these searches', () => {
  const karasjok = [
    {
      'term': 'Karasjok',
      'pos': 'Prop',
      'dict': 'smesmn',
      'status': null,
      'lang': 'sme',
      'termwikiref': '-1',
      'def': null,
      'expl': null,
      'tg': {
        'xml:lang': 'smn',
        'tw_id': 'Karasjok af97d95d-22dd-49dc-aa9a-25efb3285ecd',
        '#text': [
          '\n            ',
          '\n         '
        ],
        't': {
          'pos': 'Prop',
          '#text': 'Kárášjuuhâ'
        }
      }
    },
    {
      'term': 'Karasjok',
      'pos': 'N',
      'dict': 'nobsma',
      'status': null,
      'lang': 'nob',
      'termwikiref': '-1',
      'def': null,
      'expl': null,
      'tg': {
        'xml:lang': 'sma',
        'tw_id': 'Karasjok 2ba61959-5f23-4820-961c-aa314f2a4887',
        '#text': [
          '\n            ',
          '\n         '
        ],
        't': {
          'pg': 'no',
          'pos': 'N',
          'type': 'Prop',
          '#text': 'Kárášjohka'
        }
      }
    },
    {
      'term': 'Karasjok',
      'pos': 'N',
      'dict': 'nobsma',
      'status': null,
      'lang': 'nob',
      'termwikiref': '-1',
      'def': null,
      'expl': null,
      'tg': {
        'xml:lang': 'sma',
        'tw_id': 'Karasjok 0d26c5e2-1257-4cb6-b808-85843904313b',
        '#text': [
          '\n            ',
          '\n         '
        ],
        't': {
          'pg': 'no',
          'pos': 'N',
          'type': 'Prop',
          '#text': 'Kárášjohka'
        }
      }
    },
    {
      'term': 'Karasjok',
      'pos': 'N',
      'dict': 'termwiki',
      'status': null,
      'category': 'Geografiija',
      'termwikiref': 'Geografiija:Kárášjohka',
      'def': null,
      'expl': null,
      'tg': [
        {
          'xml:lang': 'nb',
          '#text': [
            '\n      ',
            '\n    '
          ],
          't': {
            'pos': 'N',
            '#text': 'Karasjok'
          }
        },
        {
          'xml:lang': 'se',
          '#text': [
            '\n      ',
            '\n    '
          ],
          't': {
            'pos': 'N',
            '#text': 'Kárášjohka'
          }
        },
        {
          'xml:lang': 'smn',
          '#text': [
            '\n      ',
            '\n    '
          ],
          't': {
            'pos': 'N',
            '#text': 'Kárášjuuhâ'
          }
        }
      ]
    },
    {
      'term': 'Karasjok',
      'pos': 'N',
      'dict': 'nobsme',
      'status': null,
      'lang': 'nob',
      'termwikiref': '-1',
      'def': null,
      'expl': null,
      'tg': {
        'xml:lang': 'sme',
        'tw_id': 'Karasjok c0edb897-2c82-47bc-a8d5-c3a557834c2d',
        '#text': [
          '\n            ',
          '\n         '
        ],
        't': {
          'pos': 'N',
          'type': 'Prop',
          'src': 'sk',
          'freq': '0',
          '#text': 'Kárášjohka'
        }
      }
    }
  ];
  const want = {
    'nobsma': [
      {
        'dict': 'nobsma',
        'examples': [],
        'stems': [
          {
            'language': 'nob',
            'lemma': 'Karasjok',
            'pos': 'N'
          },
          {
            'language': 'sma',
            'lemma': 'Kárášjohka',
            'pos': 'N'
          }
        ],
        'termwikiref': '-1'
      },
      {
        'dict': 'nobsma',
        'examples': [],
        'stems': [
          {
            'language': 'nob',
            'lemma': 'Karasjok',
            'pos': 'N'
          },
          {
            'language': 'sma',
            'lemma': 'Kárášjohka',
            'pos': 'N'
          }
        ],
        'termwikiref': '-1'
      }
    ],
    'nobsme': [
      {
        'category': 'Geografiija',
        'dict': 'termwiki',
        'stems': [
          {
            'language': 'nob',
            'lemma': 'Karasjok',
            'pos': 'N'
          },
          {
            'language': 'sme',
            'lemma': 'Kárášjohka',
            'pos': 'N'
          }
        ],
        'termwikiref': 'Geografiija:Kárášjohka'
      },
      {
        'dict': 'nobsme',
        'examples': [],
        'stems': [
          {
            'language': 'nob',
            'lemma': 'Karasjok',
            'pos': 'N'
          },
          {
            'language': 'sme',
            'lemma': 'Kárášjohka',
            'pos': 'N'
          }
        ],
        'termwikiref': '-1'
      }
    ],
    'nobsmn': [
      {
        'category': 'Geografiija',
        'dict': 'termwiki',
        'stems': [
          {
            'language': 'nob',
            'lemma': 'Karasjok',
            'pos': 'N'
          },
          {
            'language': 'smn',
            'lemma': 'Kárášjuuhâ',
            'pos': 'N'
          }
        ],
        'termwikiref': 'Geografiija:Kárášjohka'
      }
    ],
    'smesmn': [
      {
        'dict': 'smesmn',
        'examples': [],
        'stems': [
          {
            'language': 'sme',
            'lemma': 'Karasjok',
            'pos': 'Prop'
          },
          {
            'language': 'smn',
            'lemma': 'Kárášjuuhâ',
            'pos': 'Prop'
          }
        ],
        'termwikiref': '-1'
      }
    ]
  };

  it('Turn the search for Karasjok into pairs of stems', () => {
    expect(mapArticlesByLanguagePair(normaliseArticles(karasjok))).toEqual(want);
  });
});
