import {
  removeDuplicates,
  toJson,
  translationStems,
  translationExamples,
  normaliseDict,
  normaliseTermWiki,
  normaliseSDTerm
} from './utils';

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
    const existDict = {
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
    const resultDict = {
      'translations': [
        {
          'pos': 'N',
          'lang': 'sme',
          'lemma': 'oainnáhus'
        },
        {
          'pos': 'N',
          'lang': 'nob',
          'lemma': 'syn'
        }
      ],
      'examples': [
        {
          'x': 'Iskkan sihkkut váivves oainnáhusa iežan čalmmiin, muhto dat liikká čuovvu mu.',
          'xt': 'Jeg prøver å vaske vekk det triste synet fra øynene mine, men det følger med likevel.'
        },
        {
          'x': 'Lean áidna vilges olmmoš ja dieđusge oainnáhus.',
          'xt': 'Jeg er det eneste hvite mennesket og selvfølgelig et syn.'
        }
      ]
    };

    expect(normaliseDict(existDict)).toEqual(resultDict);
  });

  it('Normalise a dict article without examples into an object', () => {
    const existDict = {
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

    const resultDict = {
      'examples': [],
      'translations': [
        {
          'pos': 'N',
          'lang': 'sme',
          'lemma': 'guolladat'
        },
        {
          'pos': 'N',
          'lang': 'fin',
          'lemma': 'kalvoin verkonkudonnassa'
        }
      ]
    };

    expect(normaliseDict(existDict)).toEqual(resultDict);
  });

  it('Normalise a termwiki article into an object', () => {
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

    const result = [
      {
        'lemma': 'androgyn',
        'lang': 'smn',
        'pos': 'N'
      },
      {
        'lemma': 'androgyne',
        'lang': 'eng',
        'pos': 'N'
      },
      {
        'lemma': 'androgynlâšvuotâ',
        'lang': 'smn',
        'pos': 'A'
      },
      {
        'lemma': 'androgynvuotâ',
        'lang': 'smn',
        'pos': undefined
      },
      {
        'lemma': 'androgyna',
        'lang': 'sme',
        'pos': 'N'
      },
      {
        'lemma': 'androgyyni',
        'lang': 'fin',
        'pos': 'N'
      }
    ];

    expect(normaliseTermWiki(termWiki)).toEqual(result);
  });

  it('Normalise a SDTerm article into an object', () => {
    const SDTerm = {
      'status': null,
      'pos': 'S',
      'dict': 'SD-terms',
      'tg': [
        {
          't': [
            'gođđinmuorra',
            'guolládat',
            'guolla'
          ],
          'xml:lang': 'sme',
          '#text': [
            '\n            ',
            '\n        '
          ]
        },
        {
          't': 'målepinne',
          'xml:lang': 'nor',
          '#text': [
            '\n            ',
            '\n        '
          ]
        }
      ],
      'termwikiref': '6035',
      'expl': null,
      'term': 'guolladat',
      'lang': 'sme',
      'def': null
    };
    const result = [
      {
        'lemma': 'gođđinmuorra',
        'pos': 'S',
        'lang': 'sme'
      },
      {
        'lemma': 'guolládat',
        'pos': 'S',
        'lang': 'sme'
      },
      {
        'lemma': 'guolla',
        'pos': 'S',
        'lang': 'sme'
      },
      {
        'lemma': 'målepinne',
        'pos': 'S',
        'lang': 'nob'
      }
    ];

    expect(normaliseSDTerm(SDTerm)).toEqual(result);
  });
});
