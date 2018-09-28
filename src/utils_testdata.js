export const resultDictWithExamples = {
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
};

export const resultDictWithoutExamples = {
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
};

export const resultSDTerm = {
  stems: [
    {
      lemma: 'gođđinmuorra',
      pos: 'S',
      lang: 'sme'
    },
    {
      lemma: 'guolládat',
      pos: 'S',
      lang: 'sme'
    },
    {
      lemma: 'guolla',
      pos: 'S',
      lang: 'sme'
    },
    {
      lemma: 'målepinne',
      pos: 'S',
      lang: 'nob'
    }
  ],
  dict: 'SD-terms'
};

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

export const resultSmnNounParadigm = {
  Nom: {
    Sg: ['kyeli'],
    Pl: ['kyeleh']
  },
  Gen: {
    Sg: ['kyele'],
    Pl: ['kuolij']
  },
  Acc: {
    Sg: ['kyele'],
    Pl: ['kuolijd']
  },
  Ill: {
    Sg: ['kuálán'],
    Pl: ['kuolijd']
  },
  Loc: {
    Sg: ['kyeleest'],
    Pl: ['kuolijn']
  },
  Com: {
    Sg: ['kuolijn'],
    Pl: ['kuolijguin', 'kuolijgijn']
  },
  Abe: {
    Sg: ['kyelettáá'],
    Pl: ['kuolijttáá']
  },
  Par_both: ['kyellid'],
  Ess_both: ['kyellin']
};

export const resultSmeNounParadigm = {
  Nom: {
    Sg: ['guolli'],
    Pl: ['guolit']
  },
  Gen: {
    Sg: ['guole', 'guoli'],
    Pl: ['guliid']
  },
  Acc: {
    Sg: ['guoli'],
    Pl: ['guliid']
  },
  Ill: {
    Sg: ['guollái'],
    Pl: ['guliide']
  },
  Loc: {
    Sg: ['guolis'],
    Pl: ['guliin']
  },
  Com: {
    Sg: ['guliin'],
    Pl: ['guliiguin']
  },
  Ess_both: ['guollin']
};

export const resultSmaNounParadigm = {
  Nom: {
    Sg: ['guelie'],
    Pl: ['guelieh']
  },
  Gen: {
    Sg: ['guelien'],
    Pl: ['gööli', 'gueliej']
  },
  Acc: {
    Sg: ['gueliem'],
    Pl: ['göölide', 'guelide']
  },
  Ill: {
    Sg: ['gualan'],
    Pl: ['göölide', 'guelide']
  },
  Ine: {
    Sg: ['guelesne'],
    Pl: ['gööline', 'gueline']
  },
  Ela: {
    Sg: ['gueleste'],
    Pl: ['göölijste', 'guelijste']
  },
  Com: {
    Sg: ['gööline', 'gueline'],
    Pl: ['gööligujmie', 'gueliejgujmie']
  },
  Ess_both: ['gööline', 'gueline']
};

export const resultSmjNounParadigm = {
  Nom: {
    Sg: ['guolle'],
    Pl: ['guole']
  },
  Gen: {
    Sg: ['guole'],
    Pl: ['guolij']
  },
  Acc: {
    Sg: ['guolev'],
    Pl: ['guolijt']
  },
  Ill: {
    Sg: ['guolláj'],
    Pl: ['guolijda']
  },
  Ine: {
    Sg: ['guolen'],
    Pl: ['guolijn']
  },
  Ela: {
    Sg: ['guoles'],
    Pl: ['guolijs']
  },
  Com: {
    Sg: ['guolijn', 'guolijn'],
    Pl: ['guolij']
  },
  Abe: {
    Sg: ['guoledagá', 'guoledagi'],
    Pl: ['guolijdagá', 'guolijdagi']
  },
  Abe_both: ['guoledak', 'guoleda'],
  Ess_both: ['guollen']
};

export const resultSmaAdjParadigm = {
  Attr: {
    Positive: ['mïevhke'],
    Comp: ['mïevhkebe'],
    Superl: ['mïevhkemes']
  },
  Sg: {
    Nom: {
      Positive: ['mïevhkes'],
      Comp: ['mïevhkebe'],
      Superl: ['mïevhkemes']
    },
    Gen: {
      Positive: ['mïevhkesen'],
      Comp: ['mïevhkeben'],
      Superl: ['mïevhkemassen']
    },
    Acc: {
      Positive: ['mïevhkesem'],
      Comp: ['mïevhkebem'],
      Superl: ['mïevhkemassem']
    },
    Ill: {
      Positive: ['mïevhkesasse'],
      Comp: ['mïevhkebasse'],
      Superl: ['mïevhkemassese']
    },
    Ine: {
      Positive: ['mïevhkesisnie'],
      Comp: ['mïevhkebisnie'],
      Superl: ['mïevhkemassesne']
    },
    Ela: {
      Positive: ['mïevhkesistie'],
      Comp: ['mïevhkebistie'],
      Superl: ['mïevhkemasseste']
    },
    Com: {
      Positive: ['mïevhkesinie'],
      Comp: ['mïevhkebinie'],
      Superl: ['mïevhkemassine']
    }
  },
  Pl: {
    Nom: {
      Positive: ['mïevhkesh'],
      Comp: ['mïevhkebh'],
      Superl: ['mïevhkemassh']
    },
    Gen: {
      Positive: ['mïevhkesi'],
      Comp: ['mïevhkebi'],
      Superl: ['mïevhkemassi']
    },
    Acc: {
      Positive: ['mïevhkesidie'],
      Comp: ['mïevhkebidie'],
      Superl: ['mïevhkemasside']
    },
    Ill: {
      Positive: ['mïevhkesidie'],
      Comp: ['mïevhkebidie'],
      Superl: ['mïevhkemasside']
    },
    Ine: {
      Positive: ['mïevhkesinie'],
      Comp: ['mïevhkebinie'],
      Superl: ['mïevhkemassine']
    },
    Ela: {
      Positive: ['mïevhkesijstie'],
      Comp: ['mïevhkebijstie'],
      Superl: ['mïevhkemassijste']
    },
    Com: {
      Positive: ['mïevhkesigujmie'],
      Comp: ['mïevhkebigujmie'],
      Superl: ['mïevhkemassigujmie']
    }
  },
  Both: {
    Ess: {
      Positive: ['mïevhkesinie'],
      Comp: ['mïevhkebinie'],
      Superl: ['mïevhkemassine']
    }
  }
};

export const resultSmeAdjParadigm = {
  Attr: {
    Positive: ['litna'],
    Comp: ['litnásut', 'litnásit', 'litnáset', 'litnásat'],
    Superl: ['litnáseamos', 'litnásamos']
  },
  Sg: {
    Nom: {
      Positive: ['linis'],
      Comp: ['litnásut', 'litnásit', 'litnáset', 'litnáseabbo', 'litnásat', 'litnásabbo'],
      Superl: ['litnáseamos', 'litnásamos']
    },
    Gen: {
      Positive: ['litnása'],
      Comp: ['litnáseappo', 'litnásabbo'],
      Superl: ['litnásepmosa', 'litnásamosa']
    },
    Acc: {
      Positive: ['litnása'],
      Comp: ['litnáseappo', 'litnásabbo'],
      Superl: ['litnásepmosa', 'litnásamosa']
    },
    Ill: {
      Positive: ['litnásii'],
      Comp: ['litnásebbui', 'litnásabbui'],
      Superl: ['litnásepmosii', 'litnásamosii']
    },
    Loc: {
      Positive: ['litnásis'],
      Comp: ['litnáseappos', 'litnásabbos'],
      Superl: ['litnásepmosis', 'litnásamosis']
    },
    Com: {
      Positive: ['litnásiin'],
      Comp: ['litnáseappuin', 'litnásabbuin'],
      Superl: ['litnásepmosiin', 'litnásamosiin']
    }
  },
  Pl: {
    Nom: {
      Positive: ['litnásat'],
      Comp: ['litnáseappot', 'litnásabbot'],
      Superl: ['litnásepmosat', 'litnásamosat']
    },
    Gen: {
      Positive: ['litnásiid'],
      Comp: ['litnáseappuid', 'litnásabbuid'],
      Superl: ['litnásepmosiid', 'litnásamosiid']
    },
    Acc: {
      Positive: ['litnásiid'],
      Comp: ['litnáseappuid', 'litnásabbuid'],
      Superl: ['litnásepmosiid', 'litnásamosiid']
    },
    Ill: {
      Positive: ['litnásiidda'],
      Comp: ['litnáseappuide', 'litnásabbuide'],
      Superl: ['litnásepmosiidda', 'litnásamosiidda']
    },
    Loc: {
      Positive: ['litnásiin'],
      Comp: ['litnáseappuin', 'litnásabbuin'],
      Superl: ['litnásepmosiin', 'litnásamosiin']
    },
    Com: {
      Positive: ['litnásiiguin'],
      Comp: ['litnáseappuiguin', 'litnásabbuiguin'],
      Superl: ['litnásepmosiiguin', 'litnásamosiiguin']
    }
  },
  Both: {
    Ess: {
      Positive: ['linisin'],
      Comp: ['litnáseabbon', 'litnásabbon'],
      Superl: ['litnáseamosin', 'litnásamosin']
    }
  }
};

export const resultSmjAdjParadigm = {
  Attr: {
    Comp: ['lidnásup', 'lidnásap'],
    Positive: ['lidna'],
    Superl: ['lidnásamos']
  },
  Sg: {
    Nom: {
      Comp: ['lidnásabbo'],
      Positive: ['lines'],
      Superl: ['lidnásamos']
    },
    Gen: {
      Comp: ['lidnásappo'],
      Positive: ['lidnása'],
      Superl: ['lidnásabmusa']
    },
    Acc: {
      Comp: ['lidnásappov'],
      Positive: ['lidnásav'],
      Superl: ['lidnásabmusav']
    },
    Ill: {
      Comp: ['lidnásabbuj'],
      Positive: ['lidnásij'],
      Superl: ['lidnásabmusij']
    },
    Ine: {
      Comp: ['lidnásappon'],
      Positive: ['lidnásin'],
      Superl: ['lidnásabmusin']
    },
    Ela: {
      Comp: ['lidnásappos'],
      Positive: ['lidnásis'],
      Superl: ['lidnásabmusis']
    },
    Com: {
      Comp: ['lidnásappujn', 'lidnásappojn'],
      Positive: ['lidnásijn'],
      Superl: ['lidnásabmusijn']
    },
    Abe: {
      Comp: ['lidnásappodagá', 'lidnásappodagi', 'lidnásappotagá'],
      Positive: ['lidnásadagá', 'lidnásadagi'],
      Superl: ['lidnásabmusadagá', 'lidnásabmusadagi', 'lidnásabmusatagá']
    }
  },
  Pl: {
    Nom: {
      Comp: ['lidnásappo'],
      Positive: ['lidnása'],
      Superl: ['lidnásabmusa']
    },
    Gen: {
      Comp: ['lidnásappoj'],
      Positive: ['lidnásij'],
      Superl: ['lidnásabmusij']
    },
    Acc: {
      Comp: ['lidnásappojt'],
      Positive: ['lidnásijt'],
      Superl: ['lidnásabmusijt']
    },
    Ill: {
      Comp: ['lidnásappojda'],
      Positive: ['lidnásijda'],
      Superl: ['lidnásabmusijda']
    },
    Ine: {
      Comp: ['lidnásappojn'],
      Positive: ['lidnásijn'],
      Superl: ['lidnásabmusijn']
    },
    Ela: {
      Comp: ['lidnásappojs'],
      Positive: ['lidnásijs'],
      Superl: ['lidnásabmusijs']
    },
    Com: {
      Comp: ['lidnásappoj'],
      Positive: ['lidnásij'],
      Superl: ['lidnásabmusij']
    },
    Abe: {
      Comp: ['lidnásappojdagá', 'lidnásappojdagi', 'lidnásappojtagá'],
      Positive: ['lidnásijdagá', 'lidnásijdagi'],
      Superl: ['lidnásabmusijdagá', 'lidnásabmusijdagi', 'lidnásabmusijtagá']
    }

  },
  Both: {
    Ess: {Comp: ['lidnásabbon'],
      Positive: ['lidnásin'],
      Superl: ['lidnásabmusin']
    }
  }
};

export const resultSmnAdjParadigm = {
  Attr: {
    Positive: ['linnâ'],
    Superl: ['linásumos']
  },
  Sg: {
    Nom: {
      Positive: ['lines'],
      Comp: ['linásub'],
      Superl: ['linásumos']
    },
    Gen: {
      Positive: ['linnáás'],
      Comp: ['linásub'],
      Superl: ['linásumos']
    },
    Acc: {
      Positive: ['linnáás'],
      Comp: ['linásub'],
      Superl: ['linásumos']
    },
    Ill: {
      Positive: ['linásân'],
      Comp: ['linásuubon'],
      Superl: ['linásumosân']
    },
    Loc: {
      Positive: ['linásist'],
      Comp: ['linásubboost'],
      Superl: ['linásumosist']
    },
    Com: {
      Positive: ['linásáin'],
      Comp: ['linásubboin'],
      Superl: ['linásumosáin']
    },
    Abe: {
      Positive: ['linnáásttáá'],
      Comp: ['linásubttáá'],
      Superl: ['linásumosttáá']}
  },
  Pl: {
    Nom: {
      Positive: ['lináseh'],
      Comp: ['linásuboh'],
      Superl: ['linásumoseh']
    },
    Gen: {
      Positive: ['linásij'],
      Comp: ['linásuboi'],
      Superl: ['linásumosij']
    },
    Acc: {
      Positive: ['linásijd'],
      Comp: ['linásuboid'],
      Superl: ['linásumosijd']
    },
    Ill: {
      Positive: ['linásáid'],
      Comp: ['linásubboid'],
      Superl: ['linásumosáid']
    },
    Loc: {
      Positive: ['linásijn'],
      Comp: ['linásuboin'],
      Superl: ['linásumosijn']
    },
    Com: {
      Positive: ['linásijguin', 'linásijgijn'],
      Comp: ['linásuboiguin', 'linásuboigijn'],
      Superl: ['linásumosijguin', 'linásumosijgijn']
    },
    Abe: {
      Positive: ['linásijttáá'],
      Comp: ['linásuboittáá'],
      Superl: ['linásumosijttáá']
    }
  },
  Both: {
    Par: {
      Positive: ['linesid'],
      Comp: ['linásubbod'],
      Superl: ['linásumosid']
    },
    Ess: {
      Positive: ['linesin'],
      Comp: ['linásubbon'],
      Superl: ['linásumosin']

    }
  }
};

export const resultSmeVerbParadigm = {
  Prs: {
    Sg1: ['váccán'],
    Sg2: ['váccát'],
    Sg3: ['vázzá'],
    Du1: ['vázze'],
    Du2: ['vázzibeahtti'],
    Du3: ['vázziba'],
    Pl1: ['vázzit'],
    Pl2: ['vázzibehtet'],
    Pl3: ['vázzet']
  },
  PrsConNeg: ['vácce'],
  Prt: {
    Sg1: ['vázzen'],
    Sg2: ['vázzet'],
    Sg3: ['váccii'],
    Du1: ['vácciime'],
    Du2: ['vácciide'],
    Du3: ['vácciiga'],
    Pl1: ['vácciimet'],
    Pl2: ['vácciidet'],
    Pl3: ['vázze']
  },
  PrtConNeg: ['vázzán'],
  PrfPrc: ['vázzán']
};

export const resultSmaVerbParadigm = {
  Prs: {
    Sg1: ['vaadtsam'], Sg2: ['vaadtsah'], Sg3: ['vaadtsa'],
    Du1: ['vaedtsien'], Du2: ['vaedtseden', 'vaedtsiejidien'], Du3: ['vaedtsiejægan'],
    Pl1: ['vaedtsebe', 'vaedtsiejibie'], Pl2: ['vaedtsede', 'vaedtsiejidie'], Pl3: ['vaedtsieh']
  },
  Prt: {
    Sg1: ['veedtsim', 'vaedtsiejim'], Sg2: ['veedtsih', 'vaedtsiejih'], Sg3: ['veedtsi', 'vaedtsieji'],
    Du1: ['veedtsimen', 'vaedtsiejimen'], Du2: ['veedtsiden', 'vaedtsiejiden'], Du3: ['veedtsigan', 'vaedtsiejigan'],
    Pl1: ['veedtsimh', 'vaedtsiejimh'], Pl2: ['veedtsidh', 'vaedtsiejidh'], Pl3: ['veedtsin', 'vaedtsiejin']
  },
  PrfPrc: ['vaadtseme']
};

export const resultSmjVerbParadigm = {
  Prs: {
    Sg1: ['váttsáv'], Sg2: ['váttsá'], Sg3: ['vádtsá'],
    Du1: ['vádtsin'], Du2: ['vádtsebihtte'], Du3: ['vádtseba'],
    Pl1: ['vádtsep'], Pl2: ['vádtsebihtit'], Pl3: ['vádtsi']
  },
  Prt: {
    Sg1: ['vádtsiv'], Sg2: ['vádtsi'], Sg3: ['váttsij'],
    Du1: ['váttsijma'], Du2: ['váttsijda'], Du3: ['váttsijga'],
    Pl1: ['váttsijma'], Pl2: ['váttsijda'], Pl3: ['vádtsin']
  },
  PrfPrc: ['vádtsám']
};

export const resultSmnVerbParadigm = {
  Prs: {
    Sg1: ['váázám'], Sg2: ['váázáh'], Sg3: ['vázzá'],
    Du1: ['väzzeen'], Du2: ['väzzivettee'], Du3: ['väzziv'],
    Pl1: ['väzzip'], Pl2: ['väzzivetteđ'], Pl3: ['väzzih']
  },
  PrsConNeg: ['vääzi'],
  Prt: {
    Du1: ['vazzijm'], Du2: ['vazzijd'], Du3: ['vazzijn'],
    Pl1: ['vaazijm'], Pl2: ['vaazijd'], Pl3: ['vazzii'],
    Sg1: ['vazzim'], Sg2: ['vazzih'], Sg3: ['vaazij']
  },
  PrtConNeg: ['vázzám'],
  PrfPrc: ['vázzám']
};
