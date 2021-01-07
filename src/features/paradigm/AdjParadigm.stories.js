import React from 'react';
import { storiesOf } from '@storybook/react';

import AdjParadigm from './AdjParadigm';
const paradigm = {
  sma: {
    'analyses': {
      'A+Sg+Nom': [
        'viskes'
      ],
      'A+Comp+Sg+Nom': [
        'viskebe'
      ],
      'A+Comp+Sg+Gen': [
        'viskeben'
      ],
      'A+Comp+Sg+Acc': [
        'viskebem'
      ],
      'A+Comp+Sg+Ill': [
        'viskebasse'
      ],
      'A+Comp+Sg+Ine': [
        'viskebisnie'
      ],
      'A+Comp+Sg+Ela': [
        'viskebistie'
      ],
      'A+Comp+Sg+Com': [
        'viskebinie'
      ],
      'A+Comp+Pl+Nom': [
        'viskebh'
      ],
      'A+Comp+Pl+Gen': [
        'viskebi'
      ],
      'A+Comp+Pl+Acc': [
        'viskebidie'
      ],
      'A+Comp+Pl+Ill': [
        'viskebidie'
      ],
      'A+Comp+Pl+Ine': [
        'viskebinie'
      ],
      'A+Comp+Pl+Ela': [
        'viskebijstie'
      ],
      'A+Comp+Pl+Com': [
        'viskebigujmie'
      ],
      'A+Superl+Sg+Nom': [
        'viskemes'
      ],
      'A+Superl+Sg+Gen': [
        'viskemassen'
      ],
      'A+Superl+Sg+Acc': [
        'viskemassem'
      ],
      'A+Superl+Sg+Ill': [
        'viskemassese'
      ],
      'A+Superl+Sg+Ine': [
        'viskemassesne'
      ],
      'A+Superl+Sg+Ela': [
        'viskemasseste'
      ],
      'A+Superl+Sg+Com': [
        'viskemassine'
      ],
      'A+Superl+Pl+Nom': [
        'viskemassh'
      ],
      'A+Superl+Pl+Gen': [
        'viskemassi'
      ],
      'A+Superl+Pl+Acc': [
        'viskemasside'
      ],
      'A+Superl+Pl+Ill': [
        'viskemasside'
      ],
      'A+Superl+Pl+Ine': [
        'viskemassine'
      ],
      'A+Superl+Pl+Ela': [
        'viskemassijste'
      ],
      'A+Superl+Pl+Com': [
        'viskemassigujmie'
      ],
      'A+Comp+Ess': [
        'viskebinie'
      ],
      'A+Superl+Ess': [
        'viskemassine'
      ],
      'A+Attr': [
        'viskes'
      ],
      'A+Comp+Attr': [
        'viskebe'
      ],
      'A+Superl+Attr': [
        'viskemes'
      ]
    }
  },
  sme: {
    'analyses': {
      'A+Attr': [
        'fiskes'
      ],
      'A+Comp+Attr': [
        'fiskadut',
        'fiskadit',
        'fiskadet',
        'fiskadat'
      ],
      'A+Superl+Attr': [
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
      'A+Comp+Ess': [
        'fiskadeabbon',
        'fiskadabbon'
      ],
      'A+Comp+Sg+Nom': [
        'fiskadut',
        'fiskadit',
        'fiskadet',
        'fiskadeabbo',
        'fiskadat',
        'fiskadabbo'
      ],
      'A+Comp+Sg+Gen': [
        'fiskadeappo',
        'fiskadabbo'
      ],
      'A+Comp+Sg+Acc': [
        'fiskadeappo',
        'fiskadabbo'
      ],
      'A+Comp+Sg+Ill': [
        'fiskadebbui',
        'fiskadabbui'
      ],
      'A+Comp+Sg+Loc': [
        'fiskadeappos',
        'fiskadabbos'
      ],
      'A+Comp+Sg+Com': [
        'fiskadeappuin',
        'fiskadabbuin'
      ],
      'A+Comp+Pl+Nom': [
        'fiskadeappot',
        'fiskadabbot'
      ],
      'A+Comp+Pl+Gen': [
        'fiskadeappuid',
        'fiskadabbuid'
      ],
      'A+Comp+Pl+Acc': [
        'fiskadeappuid',
        'fiskadabbuid'
      ],
      'A+Comp+Pl+Ill': [
        'fiskadeappuide',
        'fiskadabbuide'
      ],
      'A+Comp+Pl+Loc': [
        'fiskadeappuin',
        'fiskadabbuin'
      ],
      'A+Comp+Pl+Com': [
        'fiskadeappuiguin',
        'fiskadabbuiguin'
      ],
      'A+Superl+Ess': [
        'fiskadeamosin',
        'fiskadamosin'
      ],
      'A+Superl+Sg+Nom': [
        'fiskadeamos',
        'fiskadamos'
      ],
      'A+Superl+Sg+Gen': [
        'fiskadepmosa',
        'fiskadamosa'
      ],
      'A+Superl+Sg+Acc': [
        'fiskadepmosa',
        'fiskadamosa'
      ],
      'A+Superl+Sg+Ill': [
        'fiskadepmosii',
        'fiskadamosii'
      ],
      'A+Superl+Sg+Loc': [
        'fiskadepmosis',
        'fiskadamosis'
      ],
      'A+Superl+Sg+Com': [
        'fiskadepmosiin',
        'fiskadamosiin'
      ],
      'A+Superl+Pl+Nom': [
        'fiskadepmosat',
        'fiskadamosat'
      ],
      'A+Superl+Pl+Gen': [
        'fiskadepmosiid',
        'fiskadamosiid'
      ],
      'A+Superl+Pl+Acc': [
        'fiskadepmosiid',
        'fiskadamosiid'
      ],
      'A+Superl+Pl+Ill': [
        'fiskadepmosiidda',
        'fiskadamosiidda'
      ],
      'A+Superl+Pl+Loc': [
        'fiskadepmosiin',
        'fiskadamosiin'
      ],
      'A+Superl+Pl+Com': [
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
      'A+Comp+Attr': [
        'lidnásup',
        'lidnásap'
      ],
      'A+Superl+Attr': [
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
      'A+Sg+Abe': [
        'lidnásadagá',
        'lidnásadagi'
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
      'A+Pl+Abe': [
        'lidnásijdagá',
        'lidnásijdagi'
      ],
      'A+Ess': [
        'lidnásin'
      ],
      'A+Comp+Ess': [
        'lidnásabbon'
      ],
      'A+Comp+Sg+Nom': [
        'lidnásabbo'
      ],
      'A+Comp+Sg+Gen': [
        'lidnásappo'
      ],
      'A+Comp+Sg+Acc': [
        'lidnásappov'
      ],
      'A+Comp+Sg+Ill': [
        'lidnásabbuj'
      ],
      'A+Comp+Sg+Ine': [
        'lidnásappon'
      ],
      'A+Comp+Sg+Ela': [
        'lidnásappos'
      ],
      'A+Comp+Sg+Com': [
        'lidnásappujn',
        'lidnásappojn'
      ],
      'A+Comp+Sg+Abe': [
        'lidnásappodagá',
        'lidnásappodagi',
        'lidnásappotagá'
      ],
      'A+Comp+Pl+Nom': [
        'lidnásappo'
      ],
      'A+Comp+Pl+Gen': [
        'lidnásappoj'
      ],
      'A+Comp+Pl+Acc': [
        'lidnásappojt'
      ],
      'A+Comp+Pl+Ill': [
        'lidnásappojda'
      ],
      'A+Comp+Pl+Ine': [
        'lidnásappojn'
      ],
      'A+Comp+Pl+Ela': [
        'lidnásappojs'
      ],
      'A+Comp+Pl+Com': [
        'lidnásappoj'
      ],
      'A+Comp+Pl+Abe': [
        'lidnásappojdagá',
        'lidnásappojdagi',
        'lidnásappojtagá'
      ],
      'A+Superl+Ess': [
        'lidnásabmusin'
      ],
      'A+Superl+Sg+Nom': [
        'lidnásamos'
      ],
      'A+Superl+Sg+Gen': [
        'lidnásabmusa'
      ],
      'A+Superl+Sg+Acc': [
        'lidnásabmusav'
      ],
      'A+Superl+Sg+Ill': [
        'lidnásabmusij'
      ],
      'A+Superl+Sg+Ine': [
        'lidnásabmusin'
      ],
      'A+Superl+Sg+Ela': [
        'lidnásabmusis'
      ],
      'A+Superl+Sg+Com': [
        'lidnásabmusijn'
      ],
      'A+Superl+Sg+Abe': [
        'lidnásabmusadagá',
        'lidnásabmusadagi',
        'lidnásabmusatagá'
      ],
      'A+Superl+Pl+Nom': [
        'lidnásabmusa'
      ],
      'A+Superl+Pl+Gen': [
        'lidnásabmusij'
      ],
      'A+Superl+Pl+Acc': [
        'lidnásabmusijt'
      ],
      'A+Superl+Pl+Ill': [
        'lidnásabmusijda'
      ],
      'A+Superl+Pl+Ine': [
        'lidnásabmusijn'
      ],
      'A+Superl+Pl+Ela': [
        'lidnásabmusijs'
      ],
      'A+Superl+Pl+Com': [
        'lidnásabmusij'
      ],
      'A+Superl+Pl+Abe': [
        'lidnásabmusijdagá',
        'lidnásabmusijdagi',
        'lidnásabmusijtagá'
      ]
    }
  },
  smn: {
    'analyses': {
      'A+Attr': [
        'linnâ'
      ],
      'A+Superl+Attr': [
        'linásumos'
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
      'A+Comp+Par': [
        'linásubbod'
      ],
      'A+Comp+Ess': [
        'linásubbon'
      ],
      'A+Comp+Sg+Nom': [
        'linásub'
      ],
      'A+Comp+Sg+Gen': [
        'linásub'
      ],
      'A+Comp+Sg+Acc': [
        'linásub'
      ],
      'A+Comp+Sg+Ill': [
        'linásuubon'
      ],
      'A+Comp+Sg+Loc': [
        'linásubboost'
      ],
      'A+Comp+Sg+Com': [
        'linásubboin'
      ],
      'A+Comp+Sg+Abe': [
        'linásubttáá'
      ],
      'A+Comp+Pl+Nom': [
        'linásuboh'
      ],
      'A+Comp+Pl+Gen': [
        'linásuboi'
      ],
      'A+Comp+Pl+Acc': [
        'linásuboid'
      ],
      'A+Comp+Pl+Ill': [
        'linásubboid'
      ],
      'A+Comp+Pl+Loc': [
        'linásuboin'
      ],
      'A+Comp+Pl+Com': [
        'linásuboiguin',
        'linásuboigijn'
      ],
      'A+Comp+Pl+Abe': [
        'linásuboittáá'
      ],
      'A+Superl+Par': [
        'linásumosid'
      ],
      'A+Superl+Ess': [
        'linásumosin'
      ],
      'A+Superl+Sg+Nom': [
        'linásumos'
      ],
      'A+Superl+Sg+Gen': [
        'linásumos'
      ],
      'A+Superl+Sg+Acc': [
        'linásumos'
      ],
      'A+Superl+Sg+Ill': [
        'linásumosân'
      ],
      'A+Superl+Sg+Loc': [
        'linásumosist'
      ],
      'A+Superl+Sg+Com': [
        'linásumosáin'
      ],
      'A+Superl+Sg+Abe': [
        'linásumosttáá'
      ],
      'A+Superl+Pl+Nom': [
        'linásumoseh'
      ],
      'A+Superl+Pl+Gen': [
        'linásumosij'
      ],
      'A+Superl+Pl+Acc': [
        'linásumosijd'
      ],
      'A+Superl+Pl+Ill': [
        'linásumosáid'
      ],
      'A+Superl+Pl+Loc': [
        'linásumosijn'
      ],
      'A+Superl+Pl+Com': [
        'linásumosijguin',
        'linásumosijgijn'
      ],
      'A+Superl+Pl+Abe': [
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

storiesOf('AdjParadigm', module)
  .add('South saami adjective', () => <AdjParadigm paradigm={paradigm['sma']} language='sma' />)
  .add('North saami adjective', () => <AdjParadigm paradigm={paradigm['sme']} language='sme' />)
  .add('Lule saami adjective', () => <AdjParadigm paradigm={paradigm['smj']} language='smj' />)
  .add('Inari saami adjective', () => <AdjParadigm paradigm={paradigm['smn']} language='smn' />)
  .add('Skolt saami adjective', () => <AdjParadigm paradigm={paradigm['sms']} language='sms' />)
  .add('Finnish adjective', () => <AdjParadigm paradigm={paradigm['fin']} language='fin' />);
