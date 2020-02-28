export const resultDictWithExamples = [{
  translations: [
    {
      pos: 'N',
      language: 'sme',
      lemma: 'oainnáhus'
    },
    {
      pos: 'N',
      language: 'nob',
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
      language: 'sme',
      lemma: 'guolladat'
    },
    {
      pos: 'N',
      language: 'fin',
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
      language: 'nob',
      lemma: 'makrellterne'
    },
    {
      language: 'sma',
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
        language: 'sma',
        lemma: 'aehtjie'
      },
      {
        pos: 'N',
        language: 'nob',
        lemma: 'far'
      }
    ]
  }
];

export const resultTermWiki = {
  stems: [
    {
      lemma: 'androgyn',
      language: 'smn',
      pos: 'N'
    },
    {
      lemma: 'androgyne',
      language: 'eng',
      pos: 'N'
    },
    {
      lemma: 'androgynlâšvuotâ',
      language: 'smn',
      pos: 'A'
    },
    {
      lemma: 'androgynvuotâ',
      language: 'smn',
      pos: undefined
    },
    {
      lemma: 'androgyna',
      language: 'sme',
      pos: 'N'
    },
    {
      lemma: 'androgyyni',
      language: 'fin',
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
        language: 'nob',
        'lemma': 'snakke',
        'pos': 'V'
      },
      {
        language: 'sme',
        'lemma': 'sámástit',
        'pos': 'V',
        're': '(snakke samisk)'
      }
    ]
  }
];
