export const resultDictWithExamples = {
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
  ],
  termwikiref: '-1',
  dict: 'smenob'
};

export const resultDictWithoutExamples = {
  'dict': 'smefin',
  'examples': [],
  'termwikiref': '-1',
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

export const resultSDTerm = {
  stems: [
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
  ],
  dict: 'SD-terms'
};

export const resultTermWiki = {
  stems: [
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
  ],
  termwikiref: 'Servodatdieđa:androgyna',
  dict: 'termwiki'
};

export const resultSmnNounParadigm = {
  'Nom': {
    'Sg': ['kyeli'],
    'Pl': ['kyeleh']
  },
  'Gen': {
    'Sg': ['kyele'],
    'Pl': ['kuolij']
  },
  'Acc': {
    'Sg': ['kyele'],
    'Pl': ['kuolijd']
  },
  'Ill': {
    'Sg': ['kuálán'],
    'Pl': ['kuolijd']
  },
  'Loc': {
    'Sg': ['kyeleest'],
    'Pl': ['kuolijn']
  },
  'Com': {
    'Sg': ['kuolijn'],
    'Pl': ['kuolijguin', 'kuolijgijn']
  },
  'Abe': {
    'Sg': ['kyelettáá'],
    'Pl': ['kuolijttáá']
  },
  'Par_both': ['kyellid'],
  'Ess_both': ['kyellin']
};

export const resultSmeNounParadigm = {
  'Nom': {
    'Sg': ['guolli'],
    'Pl': ['guolit']
  },
  'Gen': {
    'Sg': ['guole', 'guoli'],
    'Pl': ['guliid']
  },
  'Acc': {
    'Sg': ['guoli'],
    'Pl': ['guliid']
  },
  'Ill': {
    'Sg': ['guollái'],
    'Pl': ['guliide']
  },
  'Loc': {
    'Sg': ['guolis'],
    'Pl': ['guliin']
  },
  'Com': {
    'Sg': ['guliin'],
    'Pl': ['guliiguin']
  },
  'Ess_both': ['guollin']
};

export const resultSmaNounParadigm = {
  'Nom': {
    'Sg': ['guelie'],
    'Pl': ['guelieh']
  },
  'Gen': {
    'Sg': ['guelien'],
    'Pl': ['gööli', 'gueliej']
  },
  'Acc': {
    'Sg': ['gueliem'],
    'Pl': ['göölide', 'guelide']
  },
  'Ill': {
    'Sg': ['gualan'],
    'Pl': ['göölide', 'guelide']
  },
  'Ine': {
    'Sg': ['guelesne'],
    'Pl': ['gööline', 'gueline']
  },
  'Ela': {
    'Sg': ['gueleste'],
    'Pl': ['göölijste', 'guelijste']
  },
  'Com': {
    'Sg': ['gööline', 'gueline'],
    'Pl': ['gööligujmie', 'gueliejgujmie']
  },
  'Ess_both': ['gööline', 'gueline']
};

export const resultSmjNounParadigm = {
  'Nom': {
    'Sg': ['guolle'],
    'Pl': ['guole']
  },
  'Gen': {
    'Sg': ['guole'],
    'Pl': ['guolij']
  },
  'Acc': {
    'Sg': ['guolev'],
    'Pl': ['guolijt']
  },
  'Ill': {
    'Sg': ['guolláj'],
    'Pl': ['guolijda']
  },
  'Ine': {
    'Sg': ['guolen'],
    'Pl': ['guolijn']
  },
  'Ela': {
    'Sg': ['guoles'],
    'Pl': ['guolijs']
  },
  'Com': {
    'Sg': ['guolijn', 'guolijn'],
    'Pl': ['guolij']
  },
  'Abe': {
    'Sg': ['guoledagá', 'guoledagi'],
    'Pl': ['guolijdagá', 'guolijdagi']
  },
  'Abe_both': ['guoledak', 'guoleda'],
  'Ess_both': ['guollen']
};
