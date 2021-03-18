import React from 'react';

import AdjParadigm from './AdjParadigm';
const paradigm = {
  sma: {
    'analyses': {
      'A+Attr': [
        'viskes'
      ],
      'A+Der/Comp+A+Attr': [
        'viskebe'
      ],
      'A+Der/Superl+A+Attr': [
        'viskemes'
      ],
      'A+Der/Comp+A+Ess': [
        'viskebinie'
      ],
      'A+Der/Comp+A+Sg+Nom': [
        'viskebe'
      ],
      'A+Der/Comp+A+Sg+Gen': [
        'viskeben'
      ],
      'A+Der/Comp+A+Sg+Acc': [
        'viskebem'
      ],
      'A+Der/Comp+A+Sg+Ill': [
        'viskebasse'
      ],
      'A+Der/Comp+A+Sg+Ine': [
        'viskebisnie'
      ],
      'A+Der/Comp+A+Sg+Ela': [
        'viskebistie'
      ],
      'A+Der/Comp+A+Sg+Com': [
        'viskebinie'
      ],
      'A+Der/Comp+A+Pl+Nom': [
        'viskebh'
      ],
      'A+Der/Comp+A+Pl+Gen': [
        'viskebi'
      ],
      'A+Der/Comp+A+Pl+Acc': [
        'viskebidie'
      ],
      'A+Der/Comp+A+Pl+Ill': [
        'viskebidie'
      ],
      'A+Der/Comp+A+Pl+Ine': [
        'viskebinie'
      ],
      'A+Der/Comp+A+Pl+Ela': [
        'viskebijstie'
      ],
      'A+Der/Comp+A+Pl+Com': [
        'viskebigujmie'
      ],
      'A+Der/Superl+A+Ess': [
        'viskemassine'
      ],
      'A+Der/Superl+A+Sg+Nom': [
        'viskemes'
      ],
      'A+Der/Superl+A+Sg+Gen': [
        'viskemassen'
      ],
      'A+Der/Superl+A+Sg+Acc': [
        'viskemassem'
      ],
      'A+Der/Superl+A+Sg+Ill': [
        'viskemassese'
      ],
      'A+Der/Superl+A+Sg+Ine': [
        'viskemassesne'
      ],
      'A+Der/Superl+A+Sg+Ela': [
        'viskemasseste'
      ],
      'A+Der/Superl+A+Sg+Com': [
        'viskemassine'
      ],
      'A+Der/Superl+A+Pl+Nom': [
        'viskemassh'
      ],
      'A+Der/Superl+A+Pl+Gen': [
        'viskemassi'
      ],
      'A+Der/Superl+A+Pl+Acc': [
        'viskemasside'
      ],
      'A+Der/Superl+A+Pl+Ill': [
        'viskemasside'
      ],
      'A+Der/Superl+A+Pl+Ine': [
        'viskemassine'
      ],
      'A+Der/Superl+A+Pl+Ela': [
        'viskemassijste'
      ],
      'A+Der/Superl+A+Pl+Com': [
        'viskemassigujmie'
      ]
    }
  },
  sme: {
    'analyses': {
      'A+Attr': [
        'fiskes'
      ],
      'A+Der/Comp+A+Attr': [
        'fiskadit',
        'fiskadut',
        'fiskadet',
        'fiskadat'
      ],
      'A+Der/Superl+A+Attr': [
        'fiskadeamos',
        'fiskadamos'
      ],
      'A+Sg+Nom': [
        'fiskat'
      ],
      'A+Sg+Gen': [
        'fiskada'
      ],
      'A+Sg+Acc': [
        'fiskada'
      ],
      'A+Sg+Ill': [
        'fiskadii'
      ],
      'A+Sg+Loc': [
        'fiskadis'
      ],
      'A+Sg+Com': [
        'fiskadiin'
      ],
      'A+Pl+Nom': [
        'fiskadat'
      ],
      'A+Pl+Gen': [
        'fiskadiid'
      ],
      'A+Pl+Acc': [
        'fiskadiid'
      ],
      'A+Pl+Ill': [
        'fiskadiidda'
      ],
      'A+Pl+Loc': [
        'fiskadiin'
      ],
      'A+Pl+Com': [
        'fiskadiiguin'
      ],
      'A+Ess': [
        'fiskadin'
      ],
      'A+Der/Comp+A+Ess': [
        'fiskadeabbon',
        'fiskadabbon'
      ],
      'A+Der/Comp+A+Sg+Nom': [
        'fiskadit',
        'fiskadut',
        'fiskadet',
        'fiskadeabbo',
        'fiskadat',
        'fiskadabbo'
      ],
      'A+Der/Comp+A+Sg+Gen': [
        'fiskadeappo',
        'fiskadabbo'
      ],
      'A+Der/Comp+A+Sg+Acc': [
        'fiskadeappo',
        'fiskadabbo'
      ],
      'A+Der/Comp+A+Sg+Ill': [
        'fiskadebbui',
        'fiskadabbui'
      ],
      'A+Der/Comp+A+Sg+Loc': [
        'fiskadeappos',
        'fiskadabbos'
      ],
      'A+Der/Comp+A+Sg+Com': [
        'fiskadeappuin',
        'fiskadabbuin'
      ],
      'A+Der/Comp+A+Pl+Nom': [
        'fiskadeappot',
        'fiskadabbot'
      ],
      'A+Der/Comp+A+Pl+Gen': [
        'fiskadeappuid',
        'fiskadabbuid'
      ],
      'A+Der/Comp+A+Pl+Acc': [
        'fiskadeappuid',
        'fiskadabbuid'
      ],
      'A+Der/Comp+A+Pl+Ill': [
        'fiskadeappuide',
        'fiskadabbuide'
      ],
      'A+Der/Comp+A+Pl+Loc': [
        'fiskadeappuin',
        'fiskadabbuin'
      ],
      'A+Der/Comp+A+Pl+Com': [
        'fiskadeappuiguin',
        'fiskadabbuiguin'
      ],
      'A+Der/Superl+A+Ess': [
        'fiskadeamosin',
        'fiskadamosin'
      ],
      'A+Der/Superl+A+Sg+Nom': [
        'fiskadeamos',
        'fiskadamos'
      ],
      'A+Der/Superl+A+Sg+Gen': [
        'fiskadepmosa',
        'fiskadamosa'
      ],
      'A+Der/Superl+A+Sg+Acc': [
        'fiskadepmosa',
        'fiskadamosa'
      ],
      'A+Der/Superl+A+Sg+Ill': [
        'fiskadepmosii',
        'fiskadamosii'
      ],
      'A+Der/Superl+A+Sg+Loc': [
        'fiskadepmosis',
        'fiskadamosis'
      ],
      'A+Der/Superl+A+Sg+Com': [
        'fiskadepmosiin',
        'fiskadamosiin'
      ],
      'A+Der/Superl+A+Pl+Nom': [
        'fiskadepmosat',
        'fiskadamosat'
      ],
      'A+Der/Superl+A+Pl+Gen': [
        'fiskadepmosiid',
        'fiskadamosiid'
      ],
      'A+Der/Superl+A+Pl+Acc': [
        'fiskadepmosiid',
        'fiskadamosiid'
      ],
      'A+Der/Superl+A+Pl+Ill': [
        'fiskadepmosiidda',
        'fiskadamosiidda'
      ],
      'A+Der/Superl+A+Pl+Loc': [
        'fiskadepmosiin',
        'fiskadamosiin'
      ],
      'A+Der/Superl+A+Pl+Com': [
        'fiskadepmosiiguin',
        'fiskadamosiiguin'
      ]
    }
  },
  smj: {
    'analyses': {
      'A+Attr': [
        'lidna'
      ],
      'A+Der/Comp+A+Attr': [
        'lidnásup',
        'lidnásap'
      ],
      'A+Der/Superl+A+Attr': [
        'lidnásamos'
      ],
      'A+Sg+Nom': [
        'lines'
      ],
      'A+Sg+Gen': [
        'lidnása'
      ],
      'A+Sg+Acc': [
        'lidnásav'
      ],
      'A+Sg+Ill': [
        'lidnásij'
      ],
      'A+Sg+Ine': [
        'lidnásin'
      ],
      'A+Sg+Ela': [
        'lidnásis'
      ],
      'A+Sg+Com': [
        'lidnásijn'
      ],
      'A+Pl+Nom': [
        'lidnása'
      ],
      'A+Pl+Gen': [
        'lidnásij'
      ],
      'A+Pl+Acc': [
        'lidnásijt'
      ],
      'A+Pl+Ill': [
        'lidnásijda'
      ],
      'A+Pl+Ine': [
        'lidnásijn'
      ],
      'A+Pl+Ela': [
        'lidnásijs'
      ],
      'A+Pl+Com': [
        'lidnásij'
      ],
      'A+Ess': [
        'lidnásin'
      ],
      'A+Der/Comp+A+Ess': [
        'lidnásabbon'
      ],
      'A+Der/Comp+A+Sg+Nom': [
        'lidnásabbo'
      ],
      'A+Der/Comp+A+Sg+Gen': [
        'lidnásappo'
      ],
      'A+Der/Comp+A+Sg+Acc': [
        'lidnásappov'
      ],
      'A+Der/Comp+A+Sg+Ill': [
        'lidnásabbuj'
      ],
      'A+Der/Comp+A+Sg+Ine': [
        'lidnásappon'
      ],
      'A+Der/Comp+A+Sg+Ela': [
        'lidnásappos'
      ],
      'A+Der/Comp+A+Sg+Com': [
        'lidnásappujn',
        'lidnásappojn'
      ],
      'A+Der/Comp+A+Sg+Abe': [
        'lidnásappotagá',
        'lidnásappodagá',
        'lidnásappodagi'
      ],
      'A+Der/Comp+A+Pl+Nom': [
        'lidnásappo'
      ],
      'A+Der/Comp+A+Pl+Gen': [
        'lidnásappoj'
      ],
      'A+Der/Comp+A+Pl+Acc': [
        'lidnásappojt'
      ],
      'A+Der/Comp+A+Pl+Ill': [
        'lidnásappojda'
      ],
      'A+Der/Comp+A+Pl+Ine': [
        'lidnásappojn'
      ],
      'A+Der/Comp+A+Pl+Ela': [
        'lidnásappojs'
      ],
      'A+Der/Comp+A+Pl+Com': [
        'lidnásappoj'
      ],
      'A+Der/Comp+A+Pl+Abe': [
        'lidnásappojtagá',
        'lidnásappojdagá',
        'lidnásappojdagi'
      ],
      'A+Der/Superl+A+Ess': [
        'lidnásabmusin'
      ],
      'A+Der/Superl+A+Sg+Nom': [
        'lidnásamos'
      ],
      'A+Der/Superl+A+Sg+Gen': [
        'lidnásabmusa'
      ],
      'A+Der/Superl+A+Sg+Acc': [
        'lidnásabmusav'
      ],
      'A+Der/Superl+A+Sg+Ill': [
        'lidnásabmusij'
      ],
      'A+Der/Superl+A+Sg+Ine': [
        'lidnásabmusin'
      ],
      'A+Der/Superl+A+Sg+Ela': [
        'lidnásabmusis'
      ],
      'A+Der/Superl+A+Sg+Com': [
        'lidnásabmusijn'
      ],
      'A+Der/Superl+A+Sg+Abe': [
        'lidnásabmusatagá',
        'lidnásabmusadagá',
        'lidnásabmusadagi'
      ],
      'A+Der/Superl+A+Pl+Nom': [
        'lidnásabmusa'
      ],
      'A+Der/Superl+A+Pl+Gen': [
        'lidnásabmusij'
      ],
      'A+Der/Superl+A+Pl+Acc': [
        'lidnásabmusijt'
      ],
      'A+Der/Superl+A+Pl+Ill': [
        'lidnásabmusijda'
      ],
      'A+Der/Superl+A+Pl+Ine': [
        'lidnásabmusijn'
      ],
      'A+Der/Superl+A+Pl+Ela': [
        'lidnásabmusijs'
      ],
      'A+Der/Superl+A+Pl+Com': [
        'lidnásabmusij'
      ],
      'A+Der/Superl+A+Pl+Abe': [
        'lidnásabmusijtagá',
        'lidnásabmusijdagá',
        'lidnásabmusijdagi'
      ],
      'A+Sg+Gen+PxSg1': [
        'lidnásam',
        'lidnásim'
      ],
      'A+Sg+Gen+PxSg2': [
        'lidnásat',
        'lidnásit'
      ],
      'A+Sg+Gen+PxSg3': [
        'lidnásis'
      ],
      'A+Sg+Gen+PxDu1': [
        'lidnásimme'
      ],
      'A+Sg+Gen+PxDu2': [
        'lidnásihtte'
      ],
      'A+Sg+Gen+PxDu3': [
        'lidnásiska'
      ],
      'A+Sg+Gen+PxPl1': [
        'lidnásimme'
      ],
      'A+Sg+Gen+PxPl2': [
        'lidnásihtte'
      ],
      'A+Sg+Gen+PxPl3': [
        'lidnásisá'
      ],
      'A+Sg+Acc+PxSg1': [
        'lidnásam',
        'lidnásim'
      ],
      'A+Sg+Acc+PxSg2': [
        'lidnásat',
        'lidnásit'
      ],
      'A+Sg+Acc+PxSg3': [
        'lidnásis'
      ],
      'A+Sg+Acc+PxDu1': [
        'lidnásimme'
      ],
      'A+Sg+Acc+PxDu2': [
        'lidnásihtte'
      ],
      'A+Sg+Acc+PxDu3': [
        'lidnásiska'
      ],
      'A+Sg+Acc+PxPl1': [
        'lidnásimme'
      ],
      'A+Sg+Acc+PxPl2': [
        'lidnásihtte'
      ],
      'A+Sg+Acc+PxPl3': [
        'lidnásisá'
      ],
      'A+Sg+Ill+PxSg1': [
        'lidnásasám'
      ],
      'A+Sg+Ill+PxSg2': [
        'lidnásasát'
      ],
      'A+Sg+Ill+PxSg3': [
        'lidnásases'
      ],
      'A+Sg+Ill+PxDu1': [
        'lidnásasema'
      ],
      'A+Sg+Ill+PxDu2': [
        'lidnásaseda'
      ],
      'A+Sg+Ill+PxDu3': [
        'lidnásaseska'
      ],
      'A+Sg+Ill+PxPl1': [
        'lidnásasema'
      ],
      'A+Sg+Ill+PxPl2': [
        'lidnásaseda'
      ],
      'A+Sg+Ill+PxPl3': [
        'lidnásasesa'
      ],
      'A+Sg+Ine+PxSg1': [
        'lidnásinám'
      ],
      'A+Sg+Ine+PxSg2': [
        'lidnásinát'
      ],
      'A+Sg+Ine+PxSg3': [
        'lidnásines'
      ],
      'A+Sg+Ine+PxDu1': [
        'lidnásinema'
      ],
      'A+Sg+Ine+PxDu2': [
        'lidnásineda'
      ],
      'A+Sg+Ine+PxDu3': [
        'lidnásineska'
      ],
      'A+Sg+Ine+PxPl1': [
        'lidnásinema'
      ],
      'A+Sg+Ine+PxPl2': [
        'lidnásineda'
      ],
      'A+Sg+Ine+PxPl3': [
        'lidnásinesa'
      ],
      'A+Sg+Ela+PxSg1': [
        'lidnásistám'
      ],
      'A+Sg+Ela+PxSg2': [
        'lidnásistát'
      ],
      'A+Sg+Ela+PxSg3': [
        'lidnásistes'
      ],
      'A+Sg+Ela+PxDu1': [
        'lidnásistema'
      ],
      'A+Sg+Ela+PxDu2': [
        'lidnásisteda'
      ],
      'A+Sg+Ela+PxDu3': [
        'lidnásisteska'
      ],
      'A+Sg+Ela+PxPl1': [
        'lidnásistema'
      ],
      'A+Sg+Ela+PxPl2': [
        'lidnásisteda'
      ],
      'A+Sg+Ela+PxPl3': [
        'lidnásistesa'
      ],
      'A+Sg+Com+PxSg1': [
        'lidnásijnám'
      ],
      'A+Sg+Com+PxSg2': [
        'lidnásijnát'
      ],
      'A+Sg+Com+PxSg3': [
        'lidnásijnes'
      ],
      'A+Sg+Com+PxDu1': [
        'lidnásijnema'
      ],
      'A+Sg+Com+PxDu2': [
        'lidnásijneda'
      ],
      'A+Sg+Com+PxDu3': [
        'lidnásijneska'
      ],
      'A+Sg+Com+PxPl1': [
        'lidnásijnema'
      ],
      'A+Sg+Com+PxPl2': [
        'lidnásijneda'
      ],
      'A+Sg+Com+PxPl3': [
        'lidnásijnesa'
      ],
      'A+Pl+Gen+PxSg1': [
        'lidnásijám'
      ],
      'A+Pl+Gen+PxSg2': [
        'lidnásiját'
      ],
      'A+Pl+Gen+PxSg3': [
        'lidnásijes'
      ],
      'A+Pl+Gen+PxDu1': [
        'lidnásijema'
      ],
      'A+Pl+Gen+PxDu2': [
        'lidnásijeda'
      ],
      'A+Pl+Gen+PxDu3': [
        'lidnásijeska'
      ],
      'A+Pl+Gen+PxPl1': [
        'lidnásijema'
      ],
      'A+Pl+Gen+PxPl2': [
        'lidnásijeda'
      ],
      'A+Pl+Gen+PxPl3': [
        'lidnásijesa'
      ],
      'A+Pl+Acc+PxSg1': [
        'lidnásijdám'
      ],
      'A+Pl+Acc+PxSg2': [
        'lidnásijdát'
      ],
      'A+Pl+Acc+PxSg3': [
        'lidnásijdes'
      ],
      'A+Pl+Acc+PxDu1': [
        'lidnásijdema'
      ],
      'A+Pl+Acc+PxDu2': [
        'lidnásijdeda'
      ],
      'A+Pl+Acc+PxDu3': [
        'lidnásijdeska'
      ],
      'A+Pl+Acc+PxPl1': [
        'lidnásijdema'
      ],
      'A+Pl+Acc+PxPl2': [
        'lidnásijdeda'
      ],
      'A+Pl+Acc+PxPl3': [
        'lidnásijdesa'
      ],
      'A+Pl+Ill+PxSg1': [
        'lidnásijdasam',
        'lidnásijdasim'
      ],
      'A+Pl+Ill+PxSg2': [
        'lidnásijdasat',
        'lidnásijdasit'
      ],
      'A+Pl+Ill+PxSg3': [
        'lidnásijdasis'
      ],
      'A+Pl+Ill+PxDu1': [
        'lidnásijdasimme'
      ],
      'A+Pl+Ill+PxDu2': [
        'lidnásijdasihtte'
      ],
      'A+Pl+Ill+PxDu3': [
        'lidnásijdasiska'
      ],
      'A+Pl+Ill+PxPl1': [
        'lidnásijdasimme'
      ],
      'A+Pl+Ill+PxPl2': [
        'lidnásijdasihtte'
      ],
      'A+Pl+Ill+PxPl3': [
        'lidnásijdasisá'
      ],
      'A+Pl+Ine+PxSg1': [
        'lidnásijnám'
      ],
      'A+Pl+Ine+PxSg2': [
        'lidnásijnát'
      ],
      'A+Pl+Ine+PxSg3': [
        'lidnásijnes'
      ],
      'A+Pl+Ine+PxDu1': [
        'lidnásijnema'
      ],
      'A+Pl+Ine+PxDu2': [
        'lidnásijneda'
      ],
      'A+Pl+Ine+PxDu3': [
        'lidnásijneska'
      ],
      'A+Pl+Ine+PxPl1': [
        'lidnásijnema'
      ],
      'A+Pl+Ine+PxPl2': [
        'lidnásijneda'
      ],
      'A+Pl+Ine+PxPl3': [
        'lidnásijnesa'
      ],
      'A+Pl+Ela+PxSg1': [
        'lidnásijstám'
      ],
      'A+Pl+Ela+PxSg2': [
        'lidnásijstát'
      ],
      'A+Pl+Ela+PxSg3': [
        'lidnásijstes'
      ],
      'A+Pl+Ela+PxDu1': [
        'lidnásijstema'
      ],
      'A+Pl+Ela+PxDu2': [
        'lidnásijsteda'
      ],
      'A+Pl+Ela+PxDu3': [
        'lidnásijsteska'
      ],
      'A+Pl+Ela+PxPl1': [
        'lidnásijstema'
      ],
      'A+Pl+Ela+PxPl2': [
        'lidnásijsteda'
      ],
      'A+Pl+Ela+PxPl3': [
        'lidnásijstesa'
      ],
      'A+Pl+Com+PxSg1': [
        'lidnásijám'
      ],
      'A+Pl+Com+PxSg2': [
        'lidnásiját'
      ],
      'A+Pl+Com+PxSg3': [
        'lidnásijes'
      ],
      'A+Pl+Com+PxDu1': [
        'lidnásijema'
      ],
      'A+Pl+Com+PxDu2': [
        'lidnásijeda'
      ],
      'A+Pl+Com+PxDu3': [
        'lidnásijeska'
      ],
      'A+Pl+Com+PxPl1': [
        'lidnásijema'
      ],
      'A+Pl+Com+PxPl2': [
        'lidnásijeda'
      ],
      'A+Pl+Com+PxPl3': [
        'lidnásijesa'
      ]
    }
  },
  smn: {
    'analyses': {
      'A+Attr': [
        'linnâ'
      ],
      'A+Sg+Nom': [
        'lines'
      ],
      'A+Sg+Gen': [
        'linnáás'
      ],
      'A+Sg+Acc': [
        'linnáás'
      ],
      'A+Sg+Ill': [
        'linásân'
      ],
      'A+Sg+Loc': [
        'linásist'
      ],
      'A+Sg+Com': [
        'linásáin'
      ],
      'A+Sg+Abe': [
        'linnáásttáá'
      ],
      'A+Pl+Nom': [
        'lináseh'
      ],
      'A+Pl+Gen': [
        'linásij'
      ],
      'A+Pl+Acc': [
        'linásijd'
      ],
      'A+Pl+Ill': [
        'linásáid'
      ],
      'A+Pl+Loc': [
        'linásijn'
      ],
      'A+Pl+Com': [
        'linásijguin',
        'linásijgijn'
      ],
      'A+Pl+Abe': [
        'linásijttáá'
      ],
      'A+Par': [
        'linesid'
      ],
      'A+Ess': [
        'linesin'
      ],
      'A+Der/Superl+A+Attr': [
        'linásumos'
      ],
      'A+Der/Comp+A+Par': [
        'linásubbod'
      ],
      'A+Der/Comp+A+Ess': [
        'linásubbon'
      ],
      'A+Der/Comp+A+Sg+Nom': [
        'linásub'
      ],
      'A+Der/Comp+A+Sg+Gen': [
        'linásub'
      ],
      'A+Der/Comp+A+Sg+Acc': [
        'linásub'
      ],
      'A+Der/Comp+A+Sg+Ill': [
        'linásuubon'
      ],
      'A+Der/Comp+A+Sg+Loc': [
        'linásubboost'
      ],
      'A+Der/Comp+A+Sg+Com': [
        'linásubboin'
      ],
      'A+Der/Comp+A+Sg+Abe': [
        'linásubttáá'
      ],
      'A+Der/Comp+A+Pl+Nom': [
        'linásuboh'
      ],
      'A+Der/Comp+A+Pl+Gen': [
        'linásuboi'
      ],
      'A+Der/Comp+A+Pl+Acc': [
        'linásuboid'
      ],
      'A+Der/Comp+A+Pl+Ill': [
        'linásubboid'
      ],
      'A+Der/Comp+A+Pl+Loc': [
        'linásuboin'
      ],
      'A+Der/Comp+A+Pl+Com': [
        'linásuboiguin',
        'linásuboigijn'
      ],
      'A+Der/Comp+A+Pl+Abe': [
        'linásuboittáá'
      ],
      'A+Der/Superl+A+Par': [
        'linásumosid'
      ],
      'A+Der/Superl+A+Ess': [
        'linásumosin'
      ],
      'A+Der/Superl+A+Sg+Nom': [
        'linásumos'
      ],
      'A+Der/Superl+A+Sg+Gen': [
        'linásumos'
      ],
      'A+Der/Superl+A+Sg+Acc': [
        'linásumos'
      ],
      'A+Der/Superl+A+Sg+Ill': [
        'linásumosân'
      ],
      'A+Der/Superl+A+Sg+Loc': [
        'linásumosist'
      ],
      'A+Der/Superl+A+Sg+Com': [
        'linásumosáin'
      ],
      'A+Der/Superl+A+Sg+Abe': [
        'linásumosttáá'
      ],
      'A+Der/Superl+A+Pl+Nom': [
        'linásumoseh'
      ],
      'A+Der/Superl+A+Pl+Gen': [
        'linásumosij'
      ],
      'A+Der/Superl+A+Pl+Acc': [
        'linásumosijd'
      ],
      'A+Der/Superl+A+Pl+Ill': [
        'linásumosáid'
      ],
      'A+Der/Superl+A+Pl+Loc': [
        'linásumosijn'
      ],
      'A+Der/Superl+A+Pl+Com': [
        'linásumosijguin',
        'linásumosijgijn'
      ],
      'A+Der/Superl+A+Pl+Abe': [
        'linásumosijttáá'
      ]
    }
  },
  sms: {
    'analyses': {
      'A+Attr': [
        'močč'
      ],
      'A+Comp+Attr': [
        'moččääb'
      ],
      'A+Superl+Attr': [
        'moččummus',
        'moččõmâs',
        'moččõmmâs',
        'moččumus',
        'moččumõs',
        'moččumâs'
      ],
      'A+Sg+Nom': [
        'moččâs',
        'mooččâs'
      ],
      'A+Sg+Gen': [
        'moččâz'
      ],
      'A+Sg+Acc': [
        'moččâz'
      ],
      'A+Sg+Ill': [
        'moččsa'
      ],
      'A+Sg+Loc': [
        'moččsest'
      ],
      'A+Sg+Com': [
        'moččsin'
      ],
      'A+Sg+Abe': [
        'moččâztaa',
        'moččâztää'
      ],
      'A+Pl+Nom': [
        'moččâz'
      ],
      'A+Pl+Gen': [
        'moččsi'
      ],
      'A+Pl+Acc': [
        'moččsid'
      ],
      'A+Pl+Ill': [
        'moččsid'
      ],
      'A+Pl+Loc': [
        'moččsin'
      ],
      'A+Pl+Com': [
        'moččsivuiʹm'
      ],
      'A+Pl+Abe': [
        'moččsitaa',
        'moččsitää'
      ],
      'A+Par': [
        'moččsed'
      ],
      'A+Ess': [
        'moččsen'
      ],
      'A+Comp+Par': [
        'moččubud'
      ],
      'A+Comp+Ess': [
        'moččubun'
      ],
      'A+Comp+Sg+Nom': [
        'moččääb'
      ],
      'A+Comp+Sg+Gen': [
        'moččääb'
      ],
      'A+Comp+Sg+Acc': [
        'moččääb'
      ],
      'A+Comp+Sg+Ill': [
        'moččuʹbbe'
      ],
      'A+Comp+Sg+Loc': [
        'moččubust'
      ],
      'A+Comp+Sg+Com': [
        'moččubuin'
      ],
      'A+Comp+Sg+Abe': [
        'moččääbtaa',
        'moččääbtää'
      ],
      'A+Comp+Pl+Nom': [
        'moččääb'
      ],
      'A+Comp+Pl+Gen': [
        'moččubui'
      ],
      'A+Comp+Pl+Acc': [
        'moččubuid'
      ],
      'A+Comp+Pl+Ill': [
        'moččubuid'
      ],
      'A+Comp+Pl+Loc': [
        'moččubuin'
      ],
      'A+Comp+Pl+Com': [
        'moččubuivuiʹm'
      ],
      'A+Comp+Pl+Abe': [
        'moččubuitaa',
        'moččubuitää'
      ],
      'A+Superl+Par': [
        'moččummsed',
        'moččõmsed',
        'moččõmmsed',
        'moččumsed'
      ],
      'A+Superl+Ess': [
        'moččummsen',
        'moččõmsen',
        'moččõmmsen',
        'moččumsen'
      ],
      'A+Superl+Sg+Nom': [
        'moččummus',
        'moččõmâs',
        'moččõmmâs',
        'moččumus',
        'moččumõs',
        'moččumâs'
      ],
      'A+Superl+Sg+Gen': [
        'moččummuz',
        'moččõmâz',
        'moččõmmâz',
        'moččumuz',
        'moččumõz',
        'moččumâz'
      ],
      'A+Superl+Sg+Acc': [
        'moččummuz',
        'moččõmâz',
        'moččõmmâz',
        'moččumuz',
        'moččumõz',
        'moččumâz'
      ],
      'A+Superl+Sg+Ill': [
        'moččummsa',
        'moččõmsa',
        'moččõmmsa',
        'moččumsa'
      ],
      'A+Superl+Sg+Loc': [
        'moččummsest',
        'moččõmsest',
        'moččõmmsest',
        'moččumsest'
      ],
      'A+Superl+Sg+Com': [
        'moččummsin',
        'moččõmsin',
        'moččõmmsin',
        'moččumsin'
      ],
      'A+Superl+Sg+Abe': [
        'moččummuztaa',
        'moččummuztää',
        'moččõmâztaa',
        'moččõmâztää',
        'moččõmmâztaa',
        'moččõmmâztää',
        'moččumuztaa',
        'moččumuztää',
        'moččumõztaa',
        'moččumõztää',
        'moččumâztaa',
        'moččumâztää'
      ],
      'A+Superl+Pl+Nom': [
        'moččummuz',
        'moččõmâz',
        'moččõmmâz',
        'moččumuz',
        'moččumõz',
        'moččumâz'
      ],
      'A+Superl+Pl+Gen': [
        'moččummsi',
        'moččõmsi',
        'moččõmmsi',
        'moččumsi'
      ],
      'A+Superl+Pl+Acc': [
        'moččummsid',
        'moččõmsid',
        'moččõmmsid',
        'moččumsid'
      ],
      'A+Superl+Pl+Ill': [
        'moččummsid',
        'moččõmsid',
        'moččõmmsid',
        'moččumsid'
      ],
      'A+Superl+Pl+Loc': [
        'moččummsin',
        'moččõmsin',
        'moččõmmsin',
        'moččumsin'
      ],
      'A+Superl+Pl+Com': [
        'moččummsivuiʹm',
        'moččõmsivuiʹm',
        'moččõmmsivuiʹm',
        'moččumsivuiʹm'
      ],
      'A+Superl+Pl+Abe': [
        'moččummsitaa',
        'moččummsitää',
        'moččõmsitaa',
        'moččõmsitää',
        'moččõmmsitaa',
        'moččõmmsitää',
        'moččumsitaa',
        'moččumsitää'
      ],
      'A+Ess+PxSg1': [
        'moččsanan'
      ],
      'A+Ess+PxSg2': [
        'moččsanad'
      ],
      'A+Ess+PxSg3': [
        'moččsiʹnes'
      ],
      'A+Ess+PxPl1': [
        'moččsiʹnen'
      ],
      'A+Ess+PxPl2': [
        'moččsiʹned'
      ],
      'A+Ess+PxPl3': [
        'moččsiʹnez'
      ],
      'A+Sg+Nom+PxSg1': [
        'moččsam'
      ],
      'A+Sg+Nom+PxSg2': [
        'moččsad'
      ],
      'A+Sg+Nom+PxSg3': [
        'moččses'
      ],
      'A+Sg+Nom+PxPl1': [
        'moččseem'
      ],
      'A+Sg+Nom+PxPl2': [
        'moččseed'
      ],
      'A+Sg+Nom+PxPl3': [
        'moččseez'
      ],
      'A+Sg+Gen+PxSg1': [
        'moččsan'
      ],
      'A+Sg+Gen+PxSg2': [
        'moččsad'
      ],
      'A+Sg+Gen+PxSg3': [
        'moččses'
      ],
      'A+Sg+Gen+PxPl1': [
        'moččseen'
      ],
      'A+Sg+Gen+PxPl2': [
        'moččseed'
      ],
      'A+Sg+Gen+PxPl3': [
        'moččseez'
      ],
      'A+Sg+Acc+PxSg1': [
        'moččsan'
      ],
      'A+Sg+Acc+PxSg2': [
        'moččsad'
      ],
      'A+Sg+Acc+PxSg3': [
        'moččses'
      ],
      'A+Sg+Acc+PxPl1': [
        'moččseen'
      ],
      'A+Sg+Acc+PxPl2': [
        'moččseed'
      ],
      'A+Sg+Acc+PxPl3': [
        'moččseez'
      ],
      'A+Sg+Ill+PxSg1': [
        'moččsasan'
      ],
      'A+Sg+Ill+PxSg2': [
        'moččsasad'
      ],
      'A+Sg+Ill+PxSg3': [
        'moččsasas'
      ],
      'A+Sg+Ill+PxPl1': [
        'moččseʹsen'
      ],
      'A+Sg+Ill+PxPl2': [
        'moččseʹsed'
      ],
      'A+Sg+Ill+PxPl3': [
        'moččseʹsez'
      ],
      'A+Sg+Loc+PxSg1': [
        'moččsastan'
      ],
      'A+Sg+Loc+PxSg2': [
        'moččsastad'
      ],
      'A+Sg+Loc+PxSg3': [
        'moččseʹstes'
      ],
      'A+Sg+Loc+PxPl1': [
        'moččseʹsten'
      ],
      'A+Sg+Loc+PxPl2': [
        'moččseʹsted'
      ],
      'A+Sg+Loc+PxPl3': [
        'moččseʹstez'
      ],
      'A+Sg+Com+PxSg1': [
        'moččsinan'
      ],
      'A+Sg+Com+PxSg2': [
        'moččsinad'
      ],
      'A+Sg+Com+PxSg3': [
        'moččsiʹnes'
      ],
      'A+Sg+Com+PxPl1': [
        'moččsiʹnen'
      ],
      'A+Sg+Com+PxPl2': [
        'moččsiʹned'
      ],
      'A+Sg+Com+PxPl3': [
        'moččsiʹnez'
      ],
      'A+Sg+Abe+PxSg1': [
        'moččsantää'
      ],
      'A+Sg+Abe+PxSg2': [
        'moččsadtää'
      ],
      'A+Sg+Abe+PxSg3': [
        'moččsestää'
      ],
      'A+Sg+Abe+PxPl1': [
        'moččseentää'
      ],
      'A+Sg+Abe+PxPl2': [
        'moččseedtää'
      ],
      'A+Sg+Abe+PxPl3': [
        'moččseeztää'
      ],
      'A+Pl+Nom+PxSg1': [
        'moččsan'
      ],
      'A+Pl+Nom+PxSg2': [
        'moččsad'
      ],
      'A+Pl+Nom+PxSg3': [
        'moččses'
      ],
      'A+Pl+Nom+PxPl1': [
        'moččseen'
      ],
      'A+Pl+Nom+PxPl2': [
        'moččseed'
      ],
      'A+Pl+Nom+PxPl3': [
        'moččseez'
      ],
      'A+Pl+Gen+PxSg1': [
        'moččsään'
      ],
      'A+Pl+Gen+PxSg2': [
        'moččsääd'
      ],
      'A+Pl+Gen+PxSg3': [
        'moččsees'
      ],
      'A+Pl+Gen+PxPl1': [
        'moččseen'
      ],
      'A+Pl+Gen+PxPl2': [
        'moččseed'
      ],
      'A+Pl+Gen+PxPl3': [
        'moččseez'
      ],
      'A+Pl+Acc+PxSg1': [
        'moččsään'
      ],
      'A+Pl+Acc+PxSg2': [
        'moččsääd'
      ],
      'A+Pl+Acc+PxSg3': [
        'moččsees'
      ],
      'A+Pl+Acc+PxPl1': [
        'moččseen'
      ],
      'A+Pl+Acc+PxPl2': [
        'moččseed'
      ],
      'A+Pl+Acc+PxPl3': [
        'moččseez'
      ],
      'A+Pl+Ill+PxSg1': [
        'moččsään'
      ],
      'A+Pl+Ill+PxSg2': [
        'moččsääd'
      ],
      'A+Pl+Ill+PxSg3': [
        'moččsees'
      ],
      'A+Pl+Ill+PxPl1': [
        'moččseen'
      ],
      'A+Pl+Ill+PxPl2': [
        'moččseed'
      ],
      'A+Pl+Ill+PxPl3': [
        'moččseez'
      ],
      'A+Pl+Loc+PxSg1': [
        'moččsinan'
      ],
      'A+Pl+Loc+PxSg2': [
        'moččsinad'
      ],
      'A+Pl+Loc+PxSg3': [
        'moččsiʹnes'
      ],
      'A+Pl+Loc+PxPl1': [
        'moččsiʹnen'
      ],
      'A+Pl+Loc+PxPl2': [
        'moččsiʹned'
      ],
      'A+Pl+Loc+PxPl3': [
        'moččsiʹnez'
      ],
      'A+Pl+Com+PxSg1': [
        'moččsäänvuiʹm'
      ],
      'A+Pl+Com+PxSg2': [
        'moččsäädvuiʹm'
      ],
      'A+Pl+Com+PxSg3': [
        'moččseesvuiʹm'
      ],
      'A+Pl+Com+PxPl1': [
        'moččseenvuiʹm'
      ],
      'A+Pl+Com+PxPl2': [
        'moččseedvuiʹm'
      ],
      'A+Pl+Com+PxPl3': [
        'moččseezvuiʹm'
      ],
      'A+Pl+Abe+PxSg1': [
        'moččsääntää'
      ],
      'A+Pl+Abe+PxSg2': [
        'moččsäädtää'
      ],
      'A+Pl+Abe+PxSg3': [
        'moččseestää'
      ],
      'A+Pl+Abe+PxPl1': [
        'moččseentää'
      ],
      'A+Pl+Abe+PxPl2': [
        'moččseedtää'
      ],
      'A+Pl+Abe+PxPl3': [
        'moččseeztää'
      ],
      'A+Superl+Ess+PxSg1': [
        'moččummsanan',
        'moččõmsanan',
        'moččõmmsanan',
        'moččumsanan'
      ],
      'A+Superl+Ess+PxSg2': [
        'moččummsanad',
        'moččõmsanad',
        'moččõmmsanad',
        'moččumsanad'
      ],
      'A+Superl+Ess+PxSg3': [
        'moččummsiʹnes',
        'moččõmsiʹnes',
        'moččõmmsiʹnes',
        'moččumsiʹnes'
      ],
      'A+Superl+Ess+PxPl1': [
        'moččummsiʹnen',
        'moččõmsiʹnen',
        'moččõmmsiʹnen',
        'moččumsiʹnen'
      ],
      'A+Superl+Ess+PxPl2': [
        'moččummsiʹned',
        'moččõmsiʹned',
        'moččõmmsiʹned',
        'moččumsiʹned'
      ],
      'A+Superl+Ess+PxPl3': [
        'moččummsiʹnez',
        'moččõmsiʹnez',
        'moččõmmsiʹnez',
        'moččumsiʹnez'
      ],
      'A+Superl+Sg+Nom+PxSg1': [
        'moččummsam',
        'moččõmsam',
        'moččõmmsam',
        'moččumsam'
      ],
      'A+Superl+Sg+Nom+PxSg2': [
        'moččummsad',
        'moččõmsad',
        'moččõmmsad',
        'moččumsad'
      ],
      'A+Superl+Sg+Nom+PxSg3': [
        'moččummses',
        'moččõmses',
        'moččõmmses',
        'moččumses'
      ],
      'A+Superl+Sg+Nom+PxPl1': [
        'moččummseem',
        'moččõmseem',
        'moččõmmseem',
        'moččumseem'
      ],
      'A+Superl+Sg+Nom+PxPl2': [
        'moččummseed',
        'moččõmseed',
        'moččõmmseed',
        'moččumseed'
      ],
      'A+Superl+Sg+Nom+PxPl3': [
        'moččummseez',
        'moččõmseez',
        'moččõmmseez',
        'moččumseez'
      ],
      'A+Superl+Sg+Gen+PxSg1': [
        'moččummsan',
        'moččõmsan',
        'moččõmmsan',
        'moččumsan'
      ],
      'A+Superl+Sg+Gen+PxSg2': [
        'moččummsad',
        'moččõmsad',
        'moččõmmsad',
        'moččumsad'
      ],
      'A+Superl+Sg+Gen+PxSg3': [
        'moččummses',
        'moččõmses',
        'moččõmmses',
        'moččumses'
      ],
      'A+Superl+Sg+Gen+PxPl1': [
        'moččummseen',
        'moččõmseen',
        'moččõmmseen',
        'moččumseen'
      ],
      'A+Superl+Sg+Gen+PxPl2': [
        'moččummseed',
        'moččõmseed',
        'moččõmmseed',
        'moččumseed'
      ],
      'A+Superl+Sg+Gen+PxPl3': [
        'moččummseez',
        'moččõmseez',
        'moččõmmseez',
        'moččumseez'
      ],
      'A+Superl+Sg+Acc+PxSg1': [
        'moččummsan',
        'moččõmsan',
        'moččõmmsan',
        'moččumsan'
      ],
      'A+Superl+Sg+Acc+PxSg2': [
        'moččummsad',
        'moččõmsad',
        'moččõmmsad',
        'moččumsad'
      ],
      'A+Superl+Sg+Acc+PxSg3': [
        'moččummses',
        'moččõmses',
        'moččõmmses',
        'moččumses'
      ],
      'A+Superl+Sg+Acc+PxPl1': [
        'moččummseen',
        'moččõmseen',
        'moččõmmseen',
        'moččumseen'
      ],
      'A+Superl+Sg+Acc+PxPl2': [
        'moččummseed',
        'moččõmseed',
        'moččõmmseed',
        'moččumseed'
      ],
      'A+Superl+Sg+Acc+PxPl3': [
        'moččummseez',
        'moččõmseez',
        'moččõmmseez',
        'moččumseez'
      ],
      'A+Superl+Sg+Ill+PxSg1': [
        'moččummsasan',
        'moččõmsasan',
        'moččõmmsasan',
        'moččumsasan'
      ],
      'A+Superl+Sg+Ill+PxSg2': [
        'moččummsasad',
        'moččõmsasad',
        'moččõmmsasad',
        'moččumsasad'
      ],
      'A+Superl+Sg+Ill+PxSg3': [
        'moččummsasas',
        'moččõmsasas',
        'moččõmmsasas',
        'moččumsasas'
      ],
      'A+Superl+Sg+Ill+PxPl1': [
        'moččummseʹsen',
        'moččõmseʹsen',
        'moččõmmseʹsen',
        'moččumseʹsen'
      ],
      'A+Superl+Sg+Ill+PxPl2': [
        'moččummseʹsed',
        'moččõmseʹsed',
        'moččõmmseʹsed',
        'moččumseʹsed'
      ],
      'A+Superl+Sg+Ill+PxPl3': [
        'moččummseʹsez',
        'moččõmseʹsez',
        'moččõmmseʹsez',
        'moččumseʹsez'
      ],
      'A+Superl+Sg+Loc+PxSg1': [
        'moččummsastan',
        'moččõmsastan',
        'moččõmmsastan',
        'moččumsastan'
      ],
      'A+Superl+Sg+Loc+PxSg2': [
        'moččummsastad',
        'moččõmsastad',
        'moččõmmsastad',
        'moččumsastad'
      ],
      'A+Superl+Sg+Loc+PxSg3': [
        'moččummseʹstes',
        'moččõmseʹstes',
        'moččõmmseʹstes',
        'moččumseʹstes'
      ],
      'A+Superl+Sg+Loc+PxPl1': [
        'moččummseʹsten',
        'moččõmseʹsten',
        'moččõmmseʹsten',
        'moččumseʹsten'
      ],
      'A+Superl+Sg+Loc+PxPl2': [
        'moččummseʹsted',
        'moččõmseʹsted',
        'moččõmmseʹsted',
        'moččumseʹsted'
      ],
      'A+Superl+Sg+Loc+PxPl3': [
        'moččummseʹstez',
        'moččõmseʹstez',
        'moččõmmseʹstez',
        'moččumseʹstez'
      ],
      'A+Superl+Sg+Com+PxSg1': [
        'moččummsinan',
        'moččõmsinan',
        'moččõmmsinan',
        'moččumsinan'
      ],
      'A+Superl+Sg+Com+PxSg2': [
        'moččummsinad',
        'moččõmsinad',
        'moččõmmsinad',
        'moččumsinad'
      ],
      'A+Superl+Sg+Com+PxSg3': [
        'moččummsiʹnes',
        'moččõmsiʹnes',
        'moččõmmsiʹnes',
        'moččumsiʹnes'
      ],
      'A+Superl+Sg+Com+PxPl1': [
        'moččummsiʹnen',
        'moččõmsiʹnen',
        'moččõmmsiʹnen',
        'moččumsiʹnen'
      ],
      'A+Superl+Sg+Com+PxPl2': [
        'moččummsiʹned',
        'moččõmsiʹned',
        'moččõmmsiʹned',
        'moččumsiʹned'
      ],
      'A+Superl+Sg+Com+PxPl3': [
        'moččummsiʹnez',
        'moččõmsiʹnez',
        'moččõmmsiʹnez',
        'moččumsiʹnez'
      ],
      'A+Superl+Sg+Abe+PxSg1': [
        'moččummsantää',
        'moččõmsantää',
        'moččõmmsantää',
        'moččumsantää'
      ],
      'A+Superl+Sg+Abe+PxSg2': [
        'moččummsadtää',
        'moččõmsadtää',
        'moččõmmsadtää',
        'moččumsadtää'
      ],
      'A+Superl+Sg+Abe+PxSg3': [
        'moččummsestää',
        'moččõmsestää',
        'moččõmmsestää',
        'moččumsestää'
      ],
      'A+Superl+Sg+Abe+PxPl1': [
        'moččummseentää',
        'moččõmseentää',
        'moččõmmseentää',
        'moččumseentää'
      ],
      'A+Superl+Sg+Abe+PxPl2': [
        'moččummseedtää',
        'moččõmseedtää',
        'moččõmmseedtää',
        'moččumseedtää'
      ],
      'A+Superl+Sg+Abe+PxPl3': [
        'moččummseeztää',
        'moččõmseeztää',
        'moččõmmseeztää',
        'moččumseeztää'
      ],
      'A+Superl+Pl+Nom+PxSg1': [
        'moččummsan',
        'moččõmsan',
        'moččõmmsan',
        'moččumsan'
      ],
      'A+Superl+Pl+Nom+PxSg2': [
        'moččummsad',
        'moččõmsad',
        'moččõmmsad',
        'moččumsad'
      ],
      'A+Superl+Pl+Nom+PxSg3': [
        'moččummses',
        'moččõmses',
        'moččõmmses',
        'moččumses'
      ],
      'A+Superl+Pl+Nom+PxPl1': [
        'moččummseen',
        'moččõmseen',
        'moččõmmseen',
        'moččumseen'
      ],
      'A+Superl+Pl+Nom+PxPl2': [
        'moččummseed',
        'moččõmseed',
        'moččõmmseed',
        'moččumseed'
      ],
      'A+Superl+Pl+Nom+PxPl3': [
        'moččummseez',
        'moččõmseez',
        'moččõmmseez',
        'moččumseez'
      ],
      'A+Superl+Pl+Gen+PxSg1': [
        'moččummsään',
        'moččõmsään',
        'moččõmmsään',
        'moččumsään'
      ],
      'A+Superl+Pl+Gen+PxSg2': [
        'moččummsääd',
        'moččõmsääd',
        'moččõmmsääd',
        'moččumsääd'
      ],
      'A+Superl+Pl+Gen+PxSg3': [
        'moččummsees',
        'moččõmsees',
        'moččõmmsees',
        'moččumsees'
      ],
      'A+Superl+Pl+Gen+PxPl1': [
        'moččummseen',
        'moččõmseen',
        'moččõmmseen',
        'moččumseen'
      ],
      'A+Superl+Pl+Gen+PxPl2': [
        'moččummseed',
        'moččõmseed',
        'moččõmmseed',
        'moččumseed'
      ],
      'A+Superl+Pl+Gen+PxPl3': [
        'moččummseez',
        'moččõmseez',
        'moččõmmseez',
        'moččumseez'
      ],
      'A+Superl+Pl+Acc+PxSg1': [
        'moččummsään',
        'moččõmsään',
        'moččõmmsään',
        'moččumsään'
      ],
      'A+Superl+Pl+Acc+PxSg2': [
        'moččummsääd',
        'moččõmsääd',
        'moččõmmsääd',
        'moččumsääd'
      ],
      'A+Superl+Pl+Acc+PxSg3': [
        'moččummsees',
        'moččõmsees',
        'moččõmmsees',
        'moččumsees'
      ],
      'A+Superl+Pl+Acc+PxPl1': [
        'moččummseen',
        'moččõmseen',
        'moččõmmseen',
        'moččumseen'
      ],
      'A+Superl+Pl+Acc+PxPl2': [
        'moččummseed',
        'moččõmseed',
        'moččõmmseed',
        'moččumseed'
      ],
      'A+Superl+Pl+Acc+PxPl3': [
        'moččummseez',
        'moččõmseez',
        'moččõmmseez',
        'moččumseez'
      ],
      'A+Superl+Pl+Ill+PxSg1': [
        'moččummsään',
        'moččõmsään',
        'moččõmmsään',
        'moččumsään'
      ],
      'A+Superl+Pl+Ill+PxSg2': [
        'moččummsääd',
        'moččõmsääd',
        'moččõmmsääd',
        'moččumsääd'
      ],
      'A+Superl+Pl+Ill+PxSg3': [
        'moččummsees',
        'moččõmsees',
        'moččõmmsees',
        'moččumsees'
      ],
      'A+Superl+Pl+Ill+PxPl1': [
        'moččummseen',
        'moččõmseen',
        'moččõmmseen',
        'moččumseen'
      ],
      'A+Superl+Pl+Ill+PxPl2': [
        'moččummseed',
        'moččõmseed',
        'moččõmmseed',
        'moččumseed'
      ],
      'A+Superl+Pl+Ill+PxPl3': [
        'moččummseez',
        'moččõmseez',
        'moččõmmseez',
        'moččumseez'
      ],
      'A+Superl+Pl+Loc+PxSg1': [
        'moččummsinan',
        'moččõmsinan',
        'moččõmmsinan',
        'moččumsinan'
      ],
      'A+Superl+Pl+Loc+PxSg2': [
        'moččummsinad',
        'moččõmsinad',
        'moččõmmsinad',
        'moččumsinad'
      ],
      'A+Superl+Pl+Loc+PxSg3': [
        'moččummsiʹnes',
        'moččõmsiʹnes',
        'moččõmmsiʹnes',
        'moččumsiʹnes'
      ],
      'A+Superl+Pl+Loc+PxPl1': [
        'moččummsiʹnen',
        'moččõmsiʹnen',
        'moččõmmsiʹnen',
        'moččumsiʹnen'
      ],
      'A+Superl+Pl+Loc+PxPl2': [
        'moččummsiʹned',
        'moččõmsiʹned',
        'moččõmmsiʹned',
        'moččumsiʹned'
      ],
      'A+Superl+Pl+Loc+PxPl3': [
        'moččummsiʹnez',
        'moččõmsiʹnez',
        'moččõmmsiʹnez',
        'moččumsiʹnez'
      ],
      'A+Superl+Pl+Com+PxSg1': [
        'moččummsäänvuiʹm',
        'moččõmsäänvuiʹm',
        'moččõmmsäänvuiʹm',
        'moččumsäänvuiʹm'
      ],
      'A+Superl+Pl+Com+PxSg2': [
        'moččummsäädvuiʹm',
        'moččõmsäädvuiʹm',
        'moččõmmsäädvuiʹm',
        'moččumsäädvuiʹm'
      ],
      'A+Superl+Pl+Com+PxSg3': [
        'moččummseesvuiʹm',
        'moččõmseesvuiʹm',
        'moččõmmseesvuiʹm',
        'moččumseesvuiʹm'
      ],
      'A+Superl+Pl+Com+PxPl1': [
        'moččummseenvuiʹm',
        'moččõmseenvuiʹm',
        'moččõmmseenvuiʹm',
        'moččumseenvuiʹm'
      ],
      'A+Superl+Pl+Com+PxPl2': [
        'moččummseedvuiʹm',
        'moččõmseedvuiʹm',
        'moččõmmseedvuiʹm',
        'moččumseedvuiʹm'
      ],
      'A+Superl+Pl+Com+PxPl3': [
        'moččummseezvuiʹm',
        'moččõmseezvuiʹm',
        'moččõmmseezvuiʹm',
        'moččumseezvuiʹm'
      ],
      'A+Superl+Pl+Abe+PxSg1': [
        'moččummsääntää',
        'moččõmsääntää',
        'moččõmmsääntää',
        'moččumsääntää'
      ],
      'A+Superl+Pl+Abe+PxSg2': [
        'moččummsäädtää',
        'moččõmsäädtää',
        'moččõmmsäädtää',
        'moččumsäädtää'
      ],
      'A+Superl+Pl+Abe+PxSg3': [
        'moččummseestää',
        'moččõmseestää',
        'moččõmmseestää',
        'moččumseestää'
      ],
      'A+Superl+Pl+Abe+PxPl1': [
        'moččummseentää',
        'moččõmseentää',
        'moččõmmseentää',
        'moččumseentää'
      ],
      'A+Superl+Pl+Abe+PxPl2': [
        'moččummseedtää',
        'moččõmseedtää',
        'moččõmmseedtää',
        'moččumseedtää'
      ],
      'A+Superl+Pl+Abe+PxPl3': [
        'moččummseeztää',
        'moččõmseeztää',
        'moččõmmseeztää',
        'moččumseeztää'
      ]
    }
  },
  fin: {
    'analyses': {
      'A+Sg+Nom': [
        'kauns',
        'kaunis'
      ],
      'A+Sg+Gen': [
        'kaunihin',
        'kaunin',
        'kauniihin',
        'kauniin'
      ],
      'A+Sg+Par': [
        'kaunsta',
        'kaunista'
      ],
      'A+Sg+All': [
        'kaunihille',
        'kaunille',
        'kauniihille',
        'kauniille'
      ],
      'A+Sg+Abl': [
        'kaunihilta',
        'kaunilta',
        'kauniihilta',
        'kauniilta'
      ],
      'A+Sg+Ade': [
        'kaunihilla',
        'kaunilla',
        'kauniihilla',
        'kauniilla'
      ],
      'A+Sg+Ill': [
        'kaunihisen',
        'kauniseen',
        'kauniihisen',
        'kauniiseen'
      ],
      'A+Sg+Ine': [
        'kaunihissa',
        'kaunissa',
        'kauniihissa',
        'kauniissa'
      ],
      'A+Sg+Ela': [
        'kaunihista',
        'kaunista',
        'kauniihista',
        'kauniista'
      ],
      'A+Sg+Abe': [
        'kaunihitta',
        'kaunitta',
        'kauniihitta',
        'kauniitta'
      ],
      'A+Sg+Ess': [
        'kaunihina',
        'kaunina',
        'kaunisna',
        'kauniihina',
        'kauniina',
        'kauniisna'
      ],
      'A+Sg+Tra': [
        'kaunihiksi',
        'kauniksi',
        'kauniihiksi',
        'kauniiksi'
      ],
      'A+Pl+Nom': [
        'kaunit',
        'kaunihit',
        'kauniit',
        'kauniihit'
      ],
      'A+Pl+Gen': [
        'kauniden',
        'kaunitten',
        'kaunisten',
        'kauniiden',
        'kauniitten',
        'kauniisten'
      ],
      'A+Pl+Par': [
        'kaunita',
        'kauniita'
      ],
      'A+Pl+All': [
        'kaunille',
        'kauniille'
      ],
      'A+Pl+Abl': [
        'kaunilta',
        'kauniilta'
      ],
      'A+Pl+Ade': [
        'kaunilla',
        'kauniilla'
      ],
      'A+Pl+Ill': [
        'kaunihin',
        'kaunisiin',
        'kauniihin',
        'kauniisiin'
      ],
      'A+Pl+Ine': [
        'kaunissa',
        'kauniissa'
      ],
      'A+Pl+Ela': [
        'kaunista',
        'kauniista'
      ],
      'A+Pl+Abe': [
        'kaunitta',
        'kauniitta'
      ],
      'A+Pl+Ess': [
        'kaunina',
        'kauniina'
      ],
      'A+Pl+Tra': [
        'kauniksi',
        'kauniiksi'
      ],
      'A+Pl+Ins': [
        'kaunin',
        'kauniin'
      ],
      'A+Comp+Sg+Nom': [
        'kaunimpi',
        'kauniimpi'
      ],
      'A+Comp+Sg+Gen': [
        'kaunimman',
        'kauniimman'
      ],
      'A+Comp+Sg+Par': [
        'kaunimpaa',
        'kauniimpaa'
      ],
      'A+Comp+Sg+All': [
        'kaunimmalle',
        'kauniimmalle'
      ],
      'A+Comp+Sg+Abl': [
        'kaunimmalta',
        'kauniimmalta'
      ],
      'A+Comp+Sg+Ade': [
        'kaunimmalla',
        'kauniimmalla'
      ],
      'A+Comp+Sg+Ill': [
        'kaunimpiin',
        'kauniimpiin'
      ],
      'A+Comp+Sg+Ine': [
        'kaunimmassa',
        'kauniimmassa'
      ],
      'A+Comp+Sg+Ela': [
        'kaunimmasta',
        'kauniimmasta'
      ],
      'A+Comp+Sg+Abe': [
        'kaunimmatta',
        'kauniimmatta'
      ],
      'A+Comp+Sg+Ess': [
        'kaunimpana',
        'kauniimpana'
      ],
      'A+Comp+Sg+Tra': [
        'kaunimmaksi',
        'kauniimmaksi'
      ],
      'A+Comp+Pl+Nom': [
        'kaunimmat',
        'kauniimmat'
      ],
      'A+Comp+Pl+Gen': [
        'kaunimpien',
        'kauniimpien'
      ],
      'A+Comp+Pl+Par': [
        'kaunimpia',
        'kauniimpia'
      ],
      'A+Comp+Pl+All': [
        'kaunimmille',
        'kauniimmille'
      ],
      'A+Comp+Pl+Abl': [
        'kaunimmilta',
        'kauniimmilta'
      ],
      'A+Comp+Pl+Ade': [
        'kaunimmilla',
        'kauniimmilla'
      ],
      'A+Comp+Pl+Ill': [
        'kaunimpiin',
        'kauniimpiin'
      ],
      'A+Comp+Pl+Ine': [
        'kaunimmissa',
        'kauniimmissa'
      ],
      'A+Comp+Pl+Ela': [
        'kaunimmista',
        'kauniimmista'
      ],
      'A+Comp+Pl+Abe': [
        'kaunimmitta',
        'kauniimmitta'
      ],
      'A+Comp+Pl+Ess': [
        'kaunimpina',
        'kauniimpina'
      ],
      'A+Comp+Pl+Tra': [
        'kaunimmiksi',
        'kauniimmiksi'
      ],
      'A+Comp+Pl+Ins': [
        'kaunimmin',
        'kauniimmin'
      ],
      'A+Sg+Nom+PxSg1': [
        'kaunihini',
        'kaunini',
        'kauniihini',
        'kauniini'
      ],
      'A+Sg+Nom+PxSg2': [
        'kaunihisi',
        'kaunisi',
        'kauniihisi',
        'kauniisi'
      ],
      'A+Sg+Nom+PxSg3': [
        'kaunihinsa',
        'kauninsa',
        'kauniihinsa',
        'kauniinsa'
      ],
      'A+Sg+Nom+PxPl1': [
        'kaunihimme',
        'kaunimme',
        'kauniihimme',
        'kauniimme'
      ],
      'A+Sg+Nom+PxPl2': [
        'kaunihinne',
        'kauninne',
        'kauniihinne',
        'kauniinne'
      ],
      'A+Sg+Nom+PxPl3': [
        'kaunihinsa',
        'kauninsa',
        'kauniihinsa',
        'kauniinsa'
      ],
      'A+Sg+Gen+PxSg1': [
        'kaunihini',
        'kaunini',
        'kauniihini',
        'kauniini'
      ],
      'A+Sg+Gen+PxSg2': [
        'kaunihisi',
        'kaunisi',
        'kauniihisi',
        'kauniisi'
      ],
      'A+Sg+Gen+PxSg3': [
        'kaunihinsa',
        'kauninsa',
        'kauniihinsa',
        'kauniinsa'
      ],
      'A+Sg+Gen+PxPl1': [
        'kaunihimme',
        'kaunimme',
        'kauniihimme',
        'kauniimme'
      ],
      'A+Sg+Gen+PxPl2': [
        'kaunihinne',
        'kauninne',
        'kauniihinne',
        'kauniinne'
      ],
      'A+Sg+Gen+PxPl3': [
        'kaunihinsa',
        'kauninsa',
        'kauniihinsa',
        'kauniinsa'
      ],
      'A+Sg+Par+PxSg1': [
        'kaunstani',
        'kaunistani'
      ],
      'A+Sg+Par+PxSg2': [
        'kaunstasi',
        'kaunistasi'
      ],
      'A+Sg+Par+PxSg3': [
        'kaunstaan',
        'kaunstansa',
        'kaunistaan',
        'kaunistansa'
      ],
      'A+Sg+Par+PxPl1': [
        'kaunstamme',
        'kaunistamme'
      ],
      'A+Sg+Par+PxPl2': [
        'kaunstanne',
        'kaunistanne'
      ],
      'A+Sg+Par+PxPl3': [
        'kaunstaan',
        'kaunstansa',
        'kaunistaan',
        'kaunistansa'
      ],
      'A+Sg+All+PxSg1': [
        'kaunihilleni',
        'kaunilleni',
        'kauniihilleni',
        'kauniilleni'
      ],
      'A+Sg+All+PxSg2': [
        'kaunihillesi',
        'kaunillesi',
        'kauniihillesi',
        'kauniillesi'
      ],
      'A+Sg+All+PxSg3': [
        'kaunihilleen',
        'kaunihillensa',
        'kaunilleen',
        'kaunillensa',
        'kauniihilleen',
        'kauniihillensa',
        'kauniilleen',
        'kauniillensa'
      ],
      'A+Sg+All+PxPl1': [
        'kaunihillemme',
        'kaunillemme',
        'kauniihillemme',
        'kauniillemme'
      ],
      'A+Sg+All+PxPl2': [
        'kaunihillenne',
        'kaunillenne',
        'kauniihillenne',
        'kauniillenne'
      ],
      'A+Sg+All+PxPl3': [
        'kaunihilleen',
        'kaunihillensa',
        'kaunilleen',
        'kaunillensa',
        'kauniihilleen',
        'kauniihillensa',
        'kauniilleen',
        'kauniillensa'
      ],
      'A+Sg+Abl+PxSg1': [
        'kaunihiltani',
        'kauniltani',
        'kauniihiltani',
        'kauniiltani'
      ],
      'A+Sg+Abl+PxSg2': [
        'kaunihiltasi',
        'kauniltasi',
        'kauniihiltasi',
        'kauniiltasi'
      ],
      'A+Sg+Abl+PxSg3': [
        'kaunihiltaan',
        'kaunihiltansa',
        'kauniltaan',
        'kauniltansa',
        'kauniihiltaan',
        'kauniihiltansa',
        'kauniiltaan',
        'kauniiltansa'
      ],
      'A+Sg+Abl+PxPl1': [
        'kaunihiltamme',
        'kauniltamme',
        'kauniihiltamme',
        'kauniiltamme'
      ],
      'A+Sg+Abl+PxPl2': [
        'kaunihiltanne',
        'kauniltanne',
        'kauniihiltanne',
        'kauniiltanne'
      ],
      'A+Sg+Abl+PxPl3': [
        'kaunihiltaan',
        'kaunihiltansa',
        'kauniltaan',
        'kauniltansa',
        'kauniihiltaan',
        'kauniihiltansa',
        'kauniiltaan',
        'kauniiltansa'
      ],
      'A+Sg+Ade+PxSg1': [
        'kaunihillani',
        'kaunillani',
        'kauniihillani',
        'kauniillani'
      ],
      'A+Sg+Ade+PxSg2': [
        'kaunihillasi',
        'kaunillasi',
        'kauniihillasi',
        'kauniillasi'
      ],
      'A+Sg+Ade+PxSg3': [
        'kaunihillaan',
        'kaunihillansa',
        'kaunillaan',
        'kaunillansa',
        'kauniihillaan',
        'kauniihillansa',
        'kauniillaan',
        'kauniillansa'
      ],
      'A+Sg+Ade+PxPl1': [
        'kaunihillamme',
        'kaunillamme',
        'kauniihillamme',
        'kauniillamme'
      ],
      'A+Sg+Ade+PxPl2': [
        'kaunihillanne',
        'kaunillanne',
        'kauniihillanne',
        'kauniillanne'
      ],
      'A+Sg+Ade+PxPl3': [
        'kaunihillaan',
        'kaunihillansa',
        'kaunillaan',
        'kaunillansa',
        'kauniihillaan',
        'kauniihillansa',
        'kauniillaan',
        'kauniillansa'
      ],
      'A+Sg+Ill+PxSg1': [
        'kauniseeni',
        'kauniiseeni'
      ],
      'A+Sg+Ill+PxSg2': [
        'kauniseesi',
        'kauniiseesi'
      ],
      'A+Sg+Ill+PxSg3': [
        'kauniseensa',
        'kauniiseensa'
      ],
      'A+Sg+Ill+PxPl1': [
        'kauniseemme',
        'kauniiseemme'
      ],
      'A+Sg+Ill+PxPl2': [
        'kauniseenne',
        'kauniiseenne'
      ],
      'A+Sg+Ill+PxPl3': [
        'kauniseensa',
        'kauniiseensa'
      ],
      'A+Sg+Ine+PxSg1': [
        'kaunihissani',
        'kaunissani',
        'kauniihissani',
        'kauniissani'
      ],
      'A+Sg+Ine+PxSg2': [
        'kaunihissasi',
        'kaunissasi',
        'kauniihissasi',
        'kauniissasi'
      ],
      'A+Sg+Ine+PxSg3': [
        'kaunihissaan',
        'kaunihissansa',
        'kaunissaan',
        'kaunissansa',
        'kauniihissaan',
        'kauniihissansa',
        'kauniissaan',
        'kauniissansa'
      ],
      'A+Sg+Ine+PxPl1': [
        'kaunihissamme',
        'kaunissamme',
        'kauniihissamme',
        'kauniissamme'
      ],
      'A+Sg+Ine+PxPl2': [
        'kaunihissanne',
        'kaunissanne',
        'kauniihissanne',
        'kauniissanne'
      ],
      'A+Sg+Ine+PxPl3': [
        'kaunihissaan',
        'kaunihissansa',
        'kaunissaan',
        'kaunissansa',
        'kauniihissaan',
        'kauniihissansa',
        'kauniissaan',
        'kauniissansa'
      ],
      'A+Sg+Ela+PxSg1': [
        'kaunihistani',
        'kaunistani',
        'kauniihistani',
        'kauniistani'
      ],
      'A+Sg+Ela+PxSg2': [
        'kaunihistasi',
        'kaunistasi',
        'kauniihistasi',
        'kauniistasi'
      ],
      'A+Sg+Ela+PxSg3': [
        'kaunihistaan',
        'kaunihistansa',
        'kaunistaan',
        'kaunistansa',
        'kauniihistaan',
        'kauniihistansa',
        'kauniistaan',
        'kauniistansa'
      ],
      'A+Sg+Ela+PxPl1': [
        'kaunihistamme',
        'kaunistamme',
        'kauniihistamme',
        'kauniistamme'
      ],
      'A+Sg+Ela+PxPl2': [
        'kaunihistanne',
        'kaunistanne',
        'kauniihistanne',
        'kauniistanne'
      ],
      'A+Sg+Ela+PxPl3': [
        'kaunihistaan',
        'kaunihistansa',
        'kaunistaan',
        'kaunistansa',
        'kauniihistaan',
        'kauniihistansa',
        'kauniistaan',
        'kauniistansa'
      ],
      'A+Sg+Abe+PxSg1': [
        'kaunihittani',
        'kaunittani',
        'kauniihittani',
        'kauniittani'
      ],
      'A+Sg+Abe+PxSg2': [
        'kaunihittasi',
        'kaunittasi',
        'kauniihittasi',
        'kauniittasi'
      ],
      'A+Sg+Abe+PxSg3': [
        'kaunihittaan',
        'kaunihittansa',
        'kaunittaan',
        'kaunittansa',
        'kauniihittaan',
        'kauniihittansa',
        'kauniittaan',
        'kauniittansa'
      ],
      'A+Sg+Abe+PxPl1': [
        'kaunihittamme',
        'kaunittamme',
        'kauniihittamme',
        'kauniittamme'
      ],
      'A+Sg+Abe+PxPl2': [
        'kaunihittanne',
        'kaunittanne',
        'kauniihittanne',
        'kauniittanne'
      ],
      'A+Sg+Abe+PxPl3': [
        'kaunihittaan',
        'kaunihittansa',
        'kaunittaan',
        'kaunittansa',
        'kauniihittaan',
        'kauniihittansa',
        'kauniittaan',
        'kauniittansa'
      ],
      'A+Sg+Ess+PxSg1': [
        'kaunihinani',
        'kauninani',
        'kaunisnani',
        'kauniihinani',
        'kauniinani',
        'kauniisnani'
      ],
      'A+Sg+Ess+PxSg2': [
        'kaunihinasi',
        'kauninasi',
        'kaunisnasi',
        'kauniihinasi',
        'kauniinasi',
        'kauniisnasi'
      ],
      'A+Sg+Ess+PxSg3': [
        'kaunihinaan',
        'kaunihinansa',
        'kauninaan',
        'kauninansa',
        'kaunisnaan',
        'kaunisnansa',
        'kauniihinaan',
        'kauniihinansa',
        'kauniinaan',
        'kauniinansa',
        'kauniisnaan',
        'kauniisnansa'
      ],
      'A+Sg+Ess+PxPl1': [
        'kaunihinamme',
        'kauninamme',
        'kaunisnamme',
        'kauniihinamme',
        'kauniinamme',
        'kauniisnamme'
      ],
      'A+Sg+Ess+PxPl2': [
        'kaunihinanne',
        'kauninanne',
        'kaunisnanne',
        'kauniihinanne',
        'kauniinanne',
        'kauniisnanne'
      ],
      'A+Sg+Ess+PxPl3': [
        'kaunihinaan',
        'kaunihinansa',
        'kauninaan',
        'kauninansa',
        'kaunisnaan',
        'kaunisnansa',
        'kauniihinaan',
        'kauniihinansa',
        'kauniinaan',
        'kauniinansa',
        'kauniisnaan',
        'kauniisnansa'
      ],
      'A+Sg+Tra+PxSg1': [
        'kaunihikseni',
        'kaunikseni',
        'kauniihikseni',
        'kauniikseni'
      ],
      'A+Sg+Tra+PxSg2': [
        'kaunihiksesi',
        'kauniksesi',
        'kauniihiksesi',
        'kauniiksesi'
      ],
      'A+Sg+Tra+PxSg3': [
        'kaunihikseen',
        'kaunihiksensa',
        'kaunikseen',
        'kauniksensa',
        'kauniihikseen',
        'kauniihiksensa',
        'kauniikseen',
        'kauniiksensa'
      ],
      'A+Sg+Tra+PxPl1': [
        'kaunihiksemme',
        'kauniksemme',
        'kauniihiksemme',
        'kauniiksemme'
      ],
      'A+Sg+Tra+PxPl2': [
        'kaunihiksenne',
        'kauniksenne',
        'kauniihiksenne',
        'kauniiksenne'
      ],
      'A+Sg+Tra+PxPl3': [
        'kaunihikseen',
        'kaunihiksensa',
        'kaunikseen',
        'kauniksensa',
        'kauniihikseen',
        'kauniihiksensa',
        'kauniikseen',
        'kauniiksensa'
      ],
      'A+Pl+Nom+PxSg1': [
        'kaunini',
        'kaunihini',
        'kauniini',
        'kauniihini'
      ],
      'A+Pl+Nom+PxSg2': [
        'kaunisi',
        'kaunihisi',
        'kauniisi',
        'kauniihisi'
      ],
      'A+Pl+Nom+PxSg3': [
        'kauninsa',
        'kaunihinsa',
        'kauniinsa',
        'kauniihinsa'
      ],
      'A+Pl+Nom+PxPl1': [
        'kaunimme',
        'kaunihimme',
        'kauniimme',
        'kauniihimme'
      ],
      'A+Pl+Nom+PxPl2': [
        'kauninne',
        'kaunihinne',
        'kauniinne',
        'kauniihinne'
      ],
      'A+Pl+Nom+PxPl3': [
        'kauninsa',
        'kaunihinsa',
        'kauniinsa',
        'kauniihinsa'
      ],
      'A+Pl+Gen+PxSg1': [
        'kaunideni',
        'kaunitteni',
        'kaunisteni',
        'kauniideni',
        'kauniitteni',
        'kauniisteni'
      ],
      'A+Pl+Gen+PxSg2': [
        'kaunidesi',
        'kaunittesi',
        'kaunistesi',
        'kauniidesi',
        'kauniittesi',
        'kauniistesi'
      ],
      'A+Pl+Gen+PxSg3': [
        'kaunidensa',
        'kaunittensa',
        'kaunistensa',
        'kauniidensa',
        'kauniittensa',
        'kauniistensa'
      ],
      'A+Pl+Gen+PxPl1': [
        'kaunidemme',
        'kaunittemme',
        'kaunistemme',
        'kauniidemme',
        'kauniittemme',
        'kauniistemme'
      ],
      'A+Pl+Gen+PxPl2': [
        'kaunidenne',
        'kaunittenne',
        'kaunistenne',
        'kauniidenne',
        'kauniittenne',
        'kauniistenne'
      ],
      'A+Pl+Gen+PxPl3': [
        'kaunidensa',
        'kaunittensa',
        'kaunistensa',
        'kauniidensa',
        'kauniittensa',
        'kauniistensa'
      ],
      'A+Pl+Par+PxSg1': [
        'kaunitani',
        'kauniitani'
      ],
      'A+Pl+Par+PxSg2': [
        'kaunitasi',
        'kauniitasi'
      ],
      'A+Pl+Par+PxSg3': [
        'kaunitaan',
        'kaunitansa',
        'kauniitaan',
        'kauniitansa'
      ],
      'A+Pl+Par+PxPl1': [
        'kaunitamme',
        'kauniitamme'
      ],
      'A+Pl+Par+PxPl2': [
        'kaunitanne',
        'kauniitanne'
      ],
      'A+Pl+Par+PxPl3': [
        'kaunitaan',
        'kaunitansa',
        'kauniitaan',
        'kauniitansa'
      ],
      'A+Pl+All+PxSg1': [
        'kaunilleni',
        'kauniilleni'
      ],
      'A+Pl+All+PxSg2': [
        'kaunillesi',
        'kauniillesi'
      ],
      'A+Pl+All+PxSg3': [
        'kaunillean',
        'kaunillensa',
        'kauniillean',
        'kauniillensa'
      ],
      'A+Pl+All+PxPl1': [
        'kaunillemme',
        'kauniillemme'
      ],
      'A+Pl+All+PxPl2': [
        'kaunillenne',
        'kauniillenne'
      ],
      'A+Pl+All+PxPl3': [
        'kaunillean',
        'kaunillensa',
        'kauniillean',
        'kauniillensa'
      ],
      'A+Pl+Abl+PxSg1': [
        'kauniltani',
        'kauniiltani'
      ],
      'A+Pl+Abl+PxSg2': [
        'kauniltasi',
        'kauniiltasi'
      ],
      'A+Pl+Abl+PxSg3': [
        'kauniltaan',
        'kauniltansa',
        'kauniiltaan',
        'kauniiltansa'
      ],
      'A+Pl+Abl+PxPl1': [
        'kauniltamme',
        'kauniiltamme'
      ],
      'A+Pl+Abl+PxPl2': [
        'kauniltanne',
        'kauniiltanne'
      ],
      'A+Pl+Abl+PxPl3': [
        'kauniltaan',
        'kauniltansa',
        'kauniiltaan',
        'kauniiltansa'
      ],
      'A+Pl+Ade+PxSg1': [
        'kaunillani',
        'kauniillani'
      ],
      'A+Pl+Ade+PxSg2': [
        'kaunillasi',
        'kauniillasi'
      ],
      'A+Pl+Ade+PxSg3': [
        'kaunillaan',
        'kaunillansa',
        'kauniillaan',
        'kauniillansa'
      ],
      'A+Pl+Ade+PxPl1': [
        'kaunillamme',
        'kauniillamme'
      ],
      'A+Pl+Ade+PxPl2': [
        'kaunillanne',
        'kauniillanne'
      ],
      'A+Pl+Ade+PxPl3': [
        'kaunillaan',
        'kaunillansa',
        'kauniillaan',
        'kauniillansa'
      ],
      'A+Pl+Ill+PxSg1': [
        'kaunihini',
        'kaunisiini',
        'kauniihini',
        'kauniisiini'
      ],
      'A+Pl+Ill+PxSg2': [
        'kaunihisi',
        'kaunisiisi',
        'kauniihisi',
        'kauniisiisi'
      ],
      'A+Pl+Ill+PxSg3': [
        'kaunihinsa',
        'kaunisiinsa',
        'kauniihinsa',
        'kauniisiinsa'
      ],
      'A+Pl+Ill+PxPl1': [
        'kaunihimme',
        'kaunisiimme',
        'kauniihimme',
        'kauniisiimme'
      ],
      'A+Pl+Ill+PxPl2': [
        'kaunihinne',
        'kaunisiinne',
        'kauniihinne',
        'kauniisiinne'
      ],
      'A+Pl+Ill+PxPl3': [
        'kaunihinsa',
        'kaunisiinsa',
        'kauniihinsa',
        'kauniisiinsa'
      ],
      'A+Pl+Ine+PxSg1': [
        'kaunissani',
        'kauniissani'
      ],
      'A+Pl+Ine+PxSg2': [
        'kaunissasi',
        'kauniissasi'
      ],
      'A+Pl+Ine+PxSg3': [
        'kaunissaan',
        'kaunissansa',
        'kauniissaan',
        'kauniissansa'
      ],
      'A+Pl+Ine+PxPl1': [
        'kaunissamme',
        'kauniissamme'
      ],
      'A+Pl+Ine+PxPl2': [
        'kaunissanne',
        'kauniissanne'
      ],
      'A+Pl+Ine+PxPl3': [
        'kaunissaan',
        'kaunissansa',
        'kauniissaan',
        'kauniissansa'
      ],
      'A+Pl+Ela+PxSg1': [
        'kaunistani',
        'kauniistani'
      ],
      'A+Pl+Ela+PxSg2': [
        'kaunistasi',
        'kauniistasi'
      ],
      'A+Pl+Ela+PxSg3': [
        'kaunistaan',
        'kaunistansa',
        'kauniistaan',
        'kauniistansa'
      ],
      'A+Pl+Ela+PxPl1': [
        'kaunistamme',
        'kauniistamme'
      ],
      'A+Pl+Ela+PxPl2': [
        'kaunistanne',
        'kauniistanne'
      ],
      'A+Pl+Ela+PxPl3': [
        'kaunistaan',
        'kaunistansa',
        'kauniistaan',
        'kauniistansa'
      ],
      'A+Pl+Abe+PxSg1': [
        'kaunittani',
        'kauniittani'
      ],
      'A+Pl+Abe+PxSg2': [
        'kaunittasi',
        'kauniittasi'
      ],
      'A+Pl+Abe+PxSg3': [
        'kaunittaan',
        'kaunittansa',
        'kauniittaan',
        'kauniittansa'
      ],
      'A+Pl+Abe+PxPl1': [
        'kaunittamme',
        'kauniittamme'
      ],
      'A+Pl+Abe+PxPl2': [
        'kaunittanne',
        'kauniittanne'
      ],
      'A+Pl+Abe+PxPl3': [
        'kaunittaan',
        'kaunittansa',
        'kauniittaan',
        'kauniittansa'
      ],
      'A+Pl+Ess+PxSg1': [
        'kauninani',
        'kauniinani'
      ],
      'A+Pl+Ess+PxSg2': [
        'kauninasi',
        'kauniinasi'
      ],
      'A+Pl+Ess+PxSg3': [
        'kauninaan',
        'kauninansa',
        'kauniinaan',
        'kauniinansa'
      ],
      'A+Pl+Ess+PxPl1': [
        'kauninamme',
        'kauniinamme'
      ],
      'A+Pl+Ess+PxPl2': [
        'kauninanne',
        'kauniinanne'
      ],
      'A+Pl+Ess+PxPl3': [
        'kauninaan',
        'kauninansa',
        'kauniinaan',
        'kauniinansa'
      ],
      'A+Pl+Tra+PxSg1': [
        'kaunikseni',
        'kauniikseni'
      ],
      'A+Pl+Tra+PxSg2': [
        'kauniksesi',
        'kauniiksesi'
      ],
      'A+Pl+Tra+PxSg3': [
        'kaunikseen',
        'kauniksensa',
        'kauniikseen',
        'kauniiksensa'
      ],
      'A+Pl+Tra+PxPl1': [
        'kauniksemme',
        'kauniiksemme'
      ],
      'A+Pl+Tra+PxPl2': [
        'kauniksenne',
        'kauniiksenne'
      ],
      'A+Pl+Tra+PxPl3': [
        'kaunikseen',
        'kauniksensa',
        'kauniikseen',
        'kauniiksensa'
      ],
      'A+Comp+Sg+Nom+PxSg1': [
        'kaunimpani',
        'kauniimpani'
      ],
      'A+Comp+Sg+Nom+PxSg2': [
        'kaunimpasi',
        'kauniimpasi'
      ],
      'A+Comp+Sg+Nom+PxSg3': [
        'kaunimpansa',
        'kauniimpansa'
      ],
      'A+Comp+Sg+Nom+PxPl1': [
        'kaunimpamme',
        'kauniimpamme'
      ],
      'A+Comp+Sg+Nom+PxPl2': [
        'kaunimpanne',
        'kauniimpanne'
      ],
      'A+Comp+Sg+Nom+PxPl3': [
        'kaunimpansa',
        'kauniimpansa'
      ],
      'A+Comp+Sg+Gen+PxSg1': [
        'kaunimpani',
        'kauniimpani'
      ],
      'A+Comp+Sg+Gen+PxSg2': [
        'kaunimpasi',
        'kauniimpasi'
      ],
      'A+Comp+Sg+Gen+PxSg3': [
        'kaunimpansa',
        'kauniimpansa'
      ],
      'A+Comp+Sg+Gen+PxPl1': [
        'kaunimpamme',
        'kauniimpamme'
      ],
      'A+Comp+Sg+Gen+PxPl2': [
        'kaunimpanne',
        'kauniimpanne'
      ],
      'A+Comp+Sg+Gen+PxPl3': [
        'kaunimpansa',
        'kauniimpansa'
      ],
      'A+Comp+Sg+Par+PxSg1': [
        'kaunimpaani',
        'kauniimpaani'
      ],
      'A+Comp+Sg+Par+PxSg2': [
        'kaunimpaasi',
        'kauniimpaasi'
      ],
      'A+Comp+Sg+Par+PxSg3': [
        'kaunimpaansa',
        'kauniimpaansa'
      ],
      'A+Comp+Sg+Par+PxPl1': [
        'kaunimpaamme',
        'kauniimpaamme'
      ],
      'A+Comp+Sg+Par+PxPl2': [
        'kaunimpaanne',
        'kauniimpaanne'
      ],
      'A+Comp+Sg+Par+PxPl3': [
        'kaunimpaansa',
        'kauniimpaansa'
      ],
      'A+Comp+Sg+All+PxSg1': [
        'kaunimmalleni',
        'kauniimmalleni'
      ],
      'A+Comp+Sg+All+PxSg2': [
        'kaunimmallesi',
        'kauniimmallesi'
      ],
      'A+Comp+Sg+All+PxSg3': [
        'kaunimmalleen',
        'kaunimmallensa',
        'kauniimmalleen',
        'kauniimmallensa'
      ],
      'A+Comp+Sg+All+PxPl1': [
        'kaunimmallemme',
        'kauniimmallemme'
      ],
      'A+Comp+Sg+All+PxPl2': [
        'kaunimmallenne',
        'kauniimmallenne'
      ],
      'A+Comp+Sg+All+PxPl3': [
        'kaunimmalleen',
        'kaunimmallensa',
        'kauniimmalleen',
        'kauniimmallensa'
      ],
      'A+Comp+Sg+Abl+PxSg1': [
        'kaunimmaltani',
        'kauniimmaltani'
      ],
      'A+Comp+Sg+Abl+PxSg2': [
        'kaunimmaltasi',
        'kauniimmaltasi'
      ],
      'A+Comp+Sg+Abl+PxSg3': [
        'kaunimmaltaan',
        'kaunimmaltansa',
        'kauniimmaltaan',
        'kauniimmaltansa'
      ],
      'A+Comp+Sg+Abl+PxPl1': [
        'kaunimmaltamme',
        'kauniimmaltamme'
      ],
      'A+Comp+Sg+Abl+PxPl2': [
        'kaunimmaltanne',
        'kauniimmaltanne'
      ],
      'A+Comp+Sg+Abl+PxPl3': [
        'kaunimmaltaan',
        'kaunimmaltansa',
        'kauniimmaltaan',
        'kauniimmaltansa'
      ],
      'A+Comp+Sg+Ade+PxSg1': [
        'kaunimmallani',
        'kauniimmallani'
      ],
      'A+Comp+Sg+Ade+PxSg2': [
        'kaunimmallasi',
        'kauniimmallasi'
      ],
      'A+Comp+Sg+Ade+PxSg3': [
        'kaunimmallaan',
        'kaunimmallansa',
        'kauniimmallaan',
        'kauniimmallansa'
      ],
      'A+Comp+Sg+Ade+PxPl1': [
        'kaunimmallamme',
        'kauniimmallamme'
      ],
      'A+Comp+Sg+Ade+PxPl2': [
        'kaunimmallanne',
        'kauniimmallanne'
      ],
      'A+Comp+Sg+Ade+PxPl3': [
        'kaunimmallaan',
        'kaunimmallansa',
        'kauniimmallaan',
        'kauniimmallansa'
      ],
      'A+Comp+Sg+Ill+PxSg1': [
        'kaunimpiini',
        'kauniimpiini'
      ],
      'A+Comp+Sg+Ill+PxSg2': [
        'kaunimpiisi',
        'kauniimpiisi'
      ],
      'A+Comp+Sg+Ill+PxSg3': [
        'kaunimpiinsa',
        'kauniimpiinsa'
      ],
      'A+Comp+Sg+Ill+PxPl1': [
        'kaunimpiimme',
        'kauniimpiimme'
      ],
      'A+Comp+Sg+Ill+PxPl2': [
        'kaunimpiinne',
        'kauniimpiinne'
      ],
      'A+Comp+Sg+Ill+PxPl3': [
        'kaunimpiinsa',
        'kauniimpiinsa'
      ],
      'A+Comp+Sg+Ine+PxSg1': [
        'kaunimmassani',
        'kauniimmassani'
      ],
      'A+Comp+Sg+Ine+PxSg2': [
        'kaunimmassasi',
        'kauniimmassasi'
      ],
      'A+Comp+Sg+Ine+PxSg3': [
        'kaunimmassaan',
        'kaunimmassansa',
        'kauniimmassaan',
        'kauniimmassansa'
      ],
      'A+Comp+Sg+Ine+PxPl1': [
        'kaunimmassamme',
        'kauniimmassamme'
      ],
      'A+Comp+Sg+Ine+PxPl2': [
        'kaunimmassanne',
        'kauniimmassanne'
      ],
      'A+Comp+Sg+Ine+PxPl3': [
        'kaunimmassaan',
        'kaunimmassansa',
        'kauniimmassaan',
        'kauniimmassansa'
      ],
      'A+Comp+Sg+Ela+PxSg1': [
        'kaunimmastani',
        'kauniimmastani'
      ],
      'A+Comp+Sg+Ela+PxSg2': [
        'kaunimmastasi',
        'kauniimmastasi'
      ],
      'A+Comp+Sg+Ela+PxSg3': [
        'kaunimmastaan',
        'kaunimmastansa',
        'kauniimmastaan',
        'kauniimmastansa'
      ],
      'A+Comp+Sg+Ela+PxPl1': [
        'kaunimmastamme',
        'kauniimmastamme'
      ],
      'A+Comp+Sg+Ela+PxPl2': [
        'kaunimmastanne',
        'kauniimmastanne'
      ],
      'A+Comp+Sg+Ela+PxPl3': [
        'kaunimmastaan',
        'kaunimmastansa',
        'kauniimmastaan',
        'kauniimmastansa'
      ],
      'A+Comp+Sg+Abe+PxSg1': [
        'kaunimmattani',
        'kauniimmattani'
      ],
      'A+Comp+Sg+Abe+PxSg2': [
        'kaunimmattasi',
        'kauniimmattasi'
      ],
      'A+Comp+Sg+Abe+PxSg3': [
        'kaunimmattaan',
        'kaunimmattansa',
        'kauniimmattaan',
        'kauniimmattansa'
      ],
      'A+Comp+Sg+Abe+PxPl1': [
        'kaunimmattamme',
        'kauniimmattamme'
      ],
      'A+Comp+Sg+Abe+PxPl2': [
        'kaunimmattanne',
        'kauniimmattanne'
      ],
      'A+Comp+Sg+Abe+PxPl3': [
        'kaunimmattaan',
        'kaunimmattansa',
        'kauniimmattaan',
        'kauniimmattansa'
      ],
      'A+Comp+Sg+Ess+PxSg1': [
        'kaunimpanani',
        'kauniimpanani'
      ],
      'A+Comp+Sg+Ess+PxSg2': [
        'kaunimpanasi',
        'kauniimpanasi'
      ],
      'A+Comp+Sg+Ess+PxSg3': [
        'kaunimpanaan',
        'kaunimpanansa',
        'kauniimpanaan',
        'kauniimpanansa'
      ],
      'A+Comp+Sg+Ess+PxPl1': [
        'kaunimpanamme',
        'kauniimpanamme'
      ],
      'A+Comp+Sg+Ess+PxPl2': [
        'kaunimpananne',
        'kauniimpananne'
      ],
      'A+Comp+Sg+Ess+PxPl3': [
        'kaunimpanaan',
        'kaunimpanansa',
        'kauniimpanaan',
        'kauniimpanansa'
      ],
      'A+Comp+Sg+Tra+PxSg1': [
        'kaunimmakseni',
        'kauniimmakseni'
      ],
      'A+Comp+Sg+Tra+PxSg2': [
        'kaunimmaksesi',
        'kauniimmaksesi'
      ],
      'A+Comp+Sg+Tra+PxSg3': [
        'kaunimmakseen',
        'kaunimmaksensa',
        'kauniimmakseen',
        'kauniimmaksensa'
      ],
      'A+Comp+Sg+Tra+PxPl1': [
        'kaunimmaksemme',
        'kauniimmaksemme'
      ],
      'A+Comp+Sg+Tra+PxPl2': [
        'kaunimmaksenne',
        'kauniimmaksenne'
      ],
      'A+Comp+Sg+Tra+PxPl3': [
        'kaunimmakseen',
        'kaunimmaksensa',
        'kauniimmakseen',
        'kauniimmaksensa'
      ],
      'A+Comp+Pl+Nom+PxSg1': [
        'kaunimpani',
        'kauniimpani'
      ],
      'A+Comp+Pl+Nom+PxSg2': [
        'kaunimpasi',
        'kauniimpasi'
      ],
      'A+Comp+Pl+Nom+PxSg3': [
        'kaunimpansa',
        'kauniimpansa'
      ],
      'A+Comp+Pl+Nom+PxPl1': [
        'kaunimpamme',
        'kauniimpamme'
      ],
      'A+Comp+Pl+Nom+PxPl2': [
        'kaunimpanne',
        'kauniimpanne'
      ],
      'A+Comp+Pl+Nom+PxPl3': [
        'kaunimpansa',
        'kauniimpansa'
      ],
      'A+Comp+Pl+Gen+PxSg1': [
        'kaunimpieni',
        'kauniimpieni'
      ],
      'A+Comp+Pl+Gen+PxSg2': [
        'kaunimpiesi',
        'kauniimpiesi'
      ],
      'A+Comp+Pl+Gen+PxSg3': [
        'kaunimpiensa',
        'kauniimpiensa'
      ],
      'A+Comp+Pl+Gen+PxPl1': [
        'kaunimpiemme',
        'kauniimpiemme'
      ],
      'A+Comp+Pl+Gen+PxPl2': [
        'kaunimpienne',
        'kauniimpienne'
      ],
      'A+Comp+Pl+Gen+PxPl3': [
        'kaunimpiensa',
        'kauniimpiensa'
      ],
      'A+Comp+Pl+Par+PxSg1': [
        'kaunimpiani',
        'kauniimpiani'
      ],
      'A+Comp+Pl+Par+PxSg2': [
        'kaunimpiasi',
        'kauniimpiasi'
      ],
      'A+Comp+Pl+Par+PxSg3': [
        'kaunimpiaan',
        'kaunimpiansa',
        'kauniimpiaan',
        'kauniimpiansa'
      ],
      'A+Comp+Pl+Par+PxPl1': [
        'kaunimpiamme',
        'kauniimpiamme'
      ],
      'A+Comp+Pl+Par+PxPl2': [
        'kaunimpianne',
        'kauniimpianne'
      ],
      'A+Comp+Pl+Par+PxPl3': [
        'kaunimpiaan',
        'kaunimpiansa',
        'kauniimpiaan',
        'kauniimpiansa'
      ],
      'A+Comp+Pl+All+PxSg1': [
        'kaunimmilleni',
        'kauniimmilleni'
      ],
      'A+Comp+Pl+All+PxSg2': [
        'kaunimmillesi',
        'kauniimmillesi'
      ],
      'A+Comp+Pl+All+PxSg3': [
        'kaunimmillean',
        'kaunimmillensa',
        'kauniimmillean',
        'kauniimmillensa'
      ],
      'A+Comp+Pl+All+PxPl1': [
        'kaunimmillemme',
        'kauniimmillemme'
      ],
      'A+Comp+Pl+All+PxPl2': [
        'kaunimmillenne',
        'kauniimmillenne'
      ],
      'A+Comp+Pl+All+PxPl3': [
        'kaunimmillean',
        'kaunimmillensa',
        'kauniimmillean',
        'kauniimmillensa'
      ],
      'A+Comp+Pl+Abl+PxSg1': [
        'kaunimmiltani',
        'kauniimmiltani'
      ],
      'A+Comp+Pl+Abl+PxSg2': [
        'kaunimmiltasi',
        'kauniimmiltasi'
      ],
      'A+Comp+Pl+Abl+PxSg3': [
        'kaunimmiltaan',
        'kaunimmiltansa',
        'kauniimmiltaan',
        'kauniimmiltansa'
      ],
      'A+Comp+Pl+Abl+PxPl1': [
        'kaunimmiltamme',
        'kauniimmiltamme'
      ],
      'A+Comp+Pl+Abl+PxPl2': [
        'kaunimmiltanne',
        'kauniimmiltanne'
      ],
      'A+Comp+Pl+Abl+PxPl3': [
        'kaunimmiltaan',
        'kaunimmiltansa',
        'kauniimmiltaan',
        'kauniimmiltansa'
      ],
      'A+Comp+Pl+Ade+PxSg1': [
        'kaunimmillani',
        'kauniimmillani'
      ],
      'A+Comp+Pl+Ade+PxSg2': [
        'kaunimmillasi',
        'kauniimmillasi'
      ],
      'A+Comp+Pl+Ade+PxSg3': [
        'kaunimmillaan',
        'kaunimmillansa',
        'kauniimmillaan',
        'kauniimmillansa'
      ],
      'A+Comp+Pl+Ade+PxPl1': [
        'kaunimmillamme',
        'kauniimmillamme'
      ],
      'A+Comp+Pl+Ade+PxPl2': [
        'kaunimmillanne',
        'kauniimmillanne'
      ],
      'A+Comp+Pl+Ade+PxPl3': [
        'kaunimmillaan',
        'kaunimmillansa',
        'kauniimmillaan',
        'kauniimmillansa'
      ],
      'A+Comp+Pl+Ill+PxSg1': [
        'kaunimpiini',
        'kauniimpiini'
      ],
      'A+Comp+Pl+Ill+PxSg2': [
        'kaunimpiisi',
        'kauniimpiisi'
      ],
      'A+Comp+Pl+Ill+PxSg3': [
        'kaunimpiinsa',
        'kauniimpiinsa'
      ],
      'A+Comp+Pl+Ill+PxPl1': [
        'kaunimpiimme',
        'kauniimpiimme'
      ],
      'A+Comp+Pl+Ill+PxPl2': [
        'kaunimpiinne',
        'kauniimpiinne'
      ],
      'A+Comp+Pl+Ill+PxPl3': [
        'kaunimpiinsa',
        'kauniimpiinsa'
      ],
      'A+Comp+Pl+Ine+PxSg1': [
        'kaunimmissani',
        'kauniimmissani'
      ],
      'A+Comp+Pl+Ine+PxSg2': [
        'kaunimmissasi',
        'kauniimmissasi'
      ],
      'A+Comp+Pl+Ine+PxSg3': [
        'kaunimmissaan',
        'kaunimmissansa',
        'kauniimmissaan',
        'kauniimmissansa'
      ],
      'A+Comp+Pl+Ine+PxPl1': [
        'kaunimmissamme',
        'kauniimmissamme'
      ],
      'A+Comp+Pl+Ine+PxPl2': [
        'kaunimmissanne',
        'kauniimmissanne'
      ],
      'A+Comp+Pl+Ine+PxPl3': [
        'kaunimmissaan',
        'kaunimmissansa',
        'kauniimmissaan',
        'kauniimmissansa'
      ],
      'A+Comp+Pl+Ela+PxSg1': [
        'kaunimmistani',
        'kauniimmistani'
      ],
      'A+Comp+Pl+Ela+PxSg2': [
        'kaunimmistasi',
        'kauniimmistasi'
      ],
      'A+Comp+Pl+Ela+PxSg3': [
        'kaunimmistaan',
        'kaunimmistansa',
        'kauniimmistaan',
        'kauniimmistansa'
      ],
      'A+Comp+Pl+Ela+PxPl1': [
        'kaunimmistamme',
        'kauniimmistamme'
      ],
      'A+Comp+Pl+Ela+PxPl2': [
        'kaunimmistanne',
        'kauniimmistanne'
      ],
      'A+Comp+Pl+Ela+PxPl3': [
        'kaunimmistaan',
        'kaunimmistansa',
        'kauniimmistaan',
        'kauniimmistansa'
      ],
      'A+Comp+Pl+Abe+PxSg1': [
        'kaunimmittani',
        'kauniimmittani'
      ],
      'A+Comp+Pl+Abe+PxSg2': [
        'kaunimmittasi',
        'kauniimmittasi'
      ],
      'A+Comp+Pl+Abe+PxSg3': [
        'kaunimmittaan',
        'kaunimmittansa',
        'kauniimmittaan',
        'kauniimmittansa'
      ],
      'A+Comp+Pl+Abe+PxPl1': [
        'kaunimmittamme',
        'kauniimmittamme'
      ],
      'A+Comp+Pl+Abe+PxPl2': [
        'kaunimmittanne',
        'kauniimmittanne'
      ],
      'A+Comp+Pl+Abe+PxPl3': [
        'kaunimmittaan',
        'kaunimmittansa',
        'kauniimmittaan',
        'kauniimmittansa'
      ],
      'A+Comp+Pl+Ess+PxSg1': [
        'kaunimpinani',
        'kauniimpinani'
      ],
      'A+Comp+Pl+Ess+PxSg2': [
        'kaunimpinasi',
        'kauniimpinasi'
      ],
      'A+Comp+Pl+Ess+PxSg3': [
        'kaunimpinaan',
        'kaunimpinansa',
        'kauniimpinaan',
        'kauniimpinansa'
      ],
      'A+Comp+Pl+Ess+PxPl1': [
        'kaunimpinamme',
        'kauniimpinamme'
      ],
      'A+Comp+Pl+Ess+PxPl2': [
        'kaunimpinanne',
        'kauniimpinanne'
      ],
      'A+Comp+Pl+Ess+PxPl3': [
        'kaunimpinaan',
        'kaunimpinansa',
        'kauniimpinaan',
        'kauniimpinansa'
      ],
      'A+Comp+Pl+Tra+PxSg1': [
        'kaunimmikseni',
        'kauniimmikseni'
      ],
      'A+Comp+Pl+Tra+PxSg2': [
        'kaunimmiksesi',
        'kauniimmiksesi'
      ],
      'A+Comp+Pl+Tra+PxSg3': [
        'kaunimmikseen',
        'kaunimmiksensa',
        'kauniimmikseen',
        'kauniimmiksensa'
      ],
      'A+Comp+Pl+Tra+PxPl1': [
        'kaunimmiksemme',
        'kauniimmiksemme'
      ],
      'A+Comp+Pl+Tra+PxPl2': [
        'kaunimmiksenne',
        'kauniimmiksenne'
      ],
      'A+Comp+Pl+Tra+PxPl3': [
        'kaunimmikseen',
        'kaunimmiksensa',
        'kauniimmikseen',
        'kauniimmiksensa'
      ]
    }
  }
};

export default {
  title: 'AdjParadigm'
};

export const SouthSaamiAdjective = () => <AdjParadigm paradigm={paradigm['sma']} language='sma' />;

SouthSaamiAdjective.story = {
  name: 'South saami adjective'
};

export const NorthSaamiAdjective = () => <AdjParadigm paradigm={paradigm['sme']} language='sme' />;

NorthSaamiAdjective.story = {
  name: 'North saami adjective'
};

export const LuleSaamiAdjective = () => <AdjParadigm paradigm={paradigm['smj']} language='smj' />;

LuleSaamiAdjective.story = {
  name: 'Lule saami adjective'
};

export const InariSaamiAdjective = () => <AdjParadigm paradigm={paradigm['smn']} language='smn' />;

InariSaamiAdjective.story = {
  name: 'Inari saami adjective'
};

export const SkoltSaamiAdjective = () => <AdjParadigm paradigm={paradigm['sms']} language='sms' />;

SkoltSaamiAdjective.story = {
  name: 'Skolt saami adjective'
};

export const FinnishAdjective = () => <AdjParadigm paradigm={paradigm['fin']} language='fin' />;

FinnishAdjective.story = {
  name: 'Finnish adjective'
};
