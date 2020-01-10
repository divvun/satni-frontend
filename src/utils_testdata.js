export const resultDictWithExamples = [{
  translations: [
    {
      pos: 'N',
      lang: 'sme',
      lemma: 'oainnáhus'
    },
    {
      pos: 'N',
      lang: 'nob',
      lemma: 'syn'
    }
  ],
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
  termwikiref: '-1',
  dict: 'smenob'
}];

export const resultDictWithoutExamples = [{
  dict: 'smefin',
  examples: [],
  termwikiref: '-1',
  translations: [
    {
      pos: 'N',
      lang: 'sme',
      lemma: 'guolladat'
    },
    {
      pos: 'N',
      lang: 'fin',
      lemma: 'kalvoin verkonkudonnassa'
    }
  ]
}];

export const resultDictWithLatin = [{
  dict: 'nobsma',
  examples: [],
  termwikiref: '-1',
  translations: [
    {
      pos: 'N',
      lang: 'nob',
      lemma: 'makrellterne'
    },
    {
      lang: 'sma',
      lemma: 'makrelle-dearne',
      pos: 'N',
      re: '(lat: sterna hirundo)'
    }
  ]
}];

export const resultAehtjie = [
  {
    dict: 'smanob',
    examples: [],
    termwikiref: '-1',
    translations: [
      {
        pos: 'N',
        lang: 'sma',
        lemma: 'aehtjie'
      },
      {
        pos: 'N',
        lang: 'nob',
        lemma: 'far'
      }
    ]
  }
];

export const resultTermWiki = {
  stems: [
    {
      lemma: 'androgyn',
      lang: 'smn',
      pos: 'N'
    },
    {
      lemma: 'androgyne',
      lang: 'eng',
      pos: 'N'
    },
    {
      lemma: 'androgynlâšvuotâ',
      lang: 'smn',
      pos: 'A'
    },
    {
      lemma: 'androgynvuotâ',
      lang: 'smn',
      pos: undefined
    },
    {
      lemma: 'androgyna',
      lang: 'sme',
      pos: 'N'
    },
    {
      lemma: 'androgyyni',
      lang: 'fin',
      pos: 'N'
    }
  ],
  termwikiref: 'Servodatdieđa:androgyna',
  dict: 'termwiki'
};

export const resultSnakkeWithRe = [
  {
    'dict': 'nobsme',
    'examples': [],
    'termwikiref': '-1',
    'translations': [
      {
        'lang': 'nob',
        'lemma':
      'snakke',
        'pos': 'V'
      },
      {
        'lang': 'sme',
        'lemma': 'sámástit',
        'pos': 'V',
        're': '(snakke samisk)'
      }
    ]
  }
];
