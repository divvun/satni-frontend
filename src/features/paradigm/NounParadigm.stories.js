import React from 'react';
import { storiesOf } from '@storybook/react';

import NounParadigm from './NounParadigm';

const paradigm = {
  sme: {
    'analyses': {
      'N+Sg+Nom': [
        'guolli'
      ],
      'N+Sg+Gen': [
        'guole',
        'guoli'
      ],
      'N+Sg+Gen+Allegro': [
        'guole'
      ],
      'N+Sg+Acc': [
        'guoli'
      ],
      'N+Sg+Ill': [
        'guollái'
      ],
      'N+Sg+Loc': [
        'guolis'
      ],
      'N+Sg+Com': [
        'guliin'
      ],
      'N+Pl+Nom': [
        'guolit'
      ],
      'N+Pl+Gen': [
        'guliid'
      ],
      'N+Pl+Acc': [
        'guliid'
      ],
      'N+Pl+Ill': [
        'guliide'
      ],
      'N+Pl+Loc': [
        'guliin'
      ],
      'N+Pl+Com': [
        'guliiguin'
      ],
      'N+Ess': [
        'guollin'
      ],
      'N+Sg+Nom+PxSg1': [
        'guollán'
      ],
      'N+Sg+Nom+PxSg2': [
        'guollát'
      ],
      'N+Sg+Nom+PxDu1': [
        'guolláme'
      ],
      'N+Sg+Nom+PxDu2': [
        'guolláde'
      ],
      'N+Sg+Nom+PxPl1': [
        'guollámet'
      ],
      'N+Sg+Nom+PxPl2': [
        'guolládet'
      ],
      'N+Sg+Gen+PxSg1': [
        'guollán'
      ],
      'N+Sg+Gen+PxSg2': [
        'guolát'
      ],
      'N+Sg+Gen+PxSg3': [
        'guolis'
      ],
      'N+Sg+Gen+PxDu1': [
        'guolláme'
      ],
      'N+Sg+Gen+PxDu2': [
        'guoláde'
      ],
      'N+Sg+Gen+PxDu3': [
        'guoliska'
      ],
      'N+Sg+Gen+PxPl1': [
        'guollámet'
      ],
      'N+Sg+Gen+PxPl2': [
        'guoládet'
      ],
      'N+Sg+Gen+PxPl3': [
        'guoliset'
      ],
      'N+Sg+Acc+PxSg1': [
        'guollán'
      ],
      'N+Sg+Acc+PxSg2': [
        'guolát'
      ],
      'N+Sg+Acc+PxSg3': [
        'guolis'
      ],
      'N+Sg+Acc+PxDu1': [
        'guolláme'
      ],
      'N+Sg+Acc+PxDu2': [
        'guoláde'
      ],
      'N+Sg+Acc+PxDu3': [
        'guoliska'
      ],
      'N+Sg+Acc+PxPl1': [
        'guollámet'
      ],
      'N+Sg+Acc+PxPl2': [
        'guoládet'
      ],
      'N+Sg+Acc+PxPl3': [
        'guoliset'
      ],
      'N+Sg+Ill+PxSg1': [
        'guollásan'
      ],
      'N+Sg+Ill+PxSg2': [
        'guollásat'
      ],
      'N+Sg+Ill+PxSg3': [
        'guollásis'
      ],
      'N+Sg+Ill+PxDu1': [
        'guolláseame'
      ],
      'N+Sg+Ill+PxDu2': [
        'guolláseatte'
      ],
      'N+Sg+Ill+PxDu3': [
        'guolláseaskka'
      ],
      'N+Sg+Ill+PxPl1': [
        'guolláseamet'
      ],
      'N+Sg+Ill+PxPl2': [
        'guolláseattet'
      ],
      'N+Sg+Ill+PxPl3': [
        'guolláseaset'
      ],
      'N+Sg+Loc+PxSg1': [
        'guolistan'
      ],
      'N+Sg+Loc+PxSg2': [
        'guolistat'
      ],
      'N+Sg+Loc+PxSg3': [
        'guolistis'
      ],
      'N+Sg+Loc+PxDu1': [
        'guolisteame'
      ],
      'N+Sg+Loc+PxDu2': [
        'guolisteatte'
      ],
      'N+Sg+Loc+PxDu3': [
        'guolisteaskka'
      ],
      'N+Sg+Loc+PxPl1': [
        'guolisteamet'
      ],
      'N+Sg+Loc+PxPl2': [
        'guolisteattet'
      ],
      'N+Sg+Loc+PxPl3': [
        'guolisteaset'
      ],
      'N+Sg+Com+PxSg1': [
        'guliinan'
      ],
      'N+Sg+Com+PxSg2': [
        'guliinat'
      ],
      'N+Sg+Com+PxSg3': [
        'guliinis'
      ],
      'N+Sg+Com+PxDu1': [
        'guliineame'
      ],
      'N+Sg+Com+PxDu2': [
        'guliineatte'
      ],
      'N+Sg+Com+PxDu3': [
        'guliineaskka'
      ],
      'N+Sg+Com+PxPl1': [
        'guliineamet'
      ],
      'N+Sg+Com+PxPl2': [
        'guliineattet'
      ],
      'N+Sg+Com+PxPl3': [
        'guliineaset'
      ],
      'N+Pl+Gen+PxSg1': [
        'guliidan'
      ],
      'N+Pl+Gen+PxSg2': [
        'guliidat'
      ],
      'N+Pl+Gen+PxSg3': [
        'guliidis'
      ],
      'N+Pl+Gen+PxDu1': [
        'guliideame'
      ],
      'N+Pl+Gen+PxDu2': [
        'guliideatte'
      ],
      'N+Pl+Gen+PxDu3': [
        'guliideaskka'
      ],
      'N+Pl+Gen+PxPl1': [
        'guliideamet'
      ],
      'N+Pl+Gen+PxPl2': [
        'guliideattet'
      ],
      'N+Pl+Gen+PxPl3': [
        'guliideaset'
      ],
      'N+Pl+Acc+PxSg1': [
        'guliidan'
      ],
      'N+Pl+Acc+PxSg2': [
        'guliidat'
      ],
      'N+Pl+Acc+PxSg3': [
        'guliidis'
      ],
      'N+Pl+Acc+PxDu1': [
        'guliideame'
      ],
      'N+Pl+Acc+PxDu2': [
        'guliideatte'
      ],
      'N+Pl+Acc+PxDu3': [
        'guliideaskka'
      ],
      'N+Pl+Acc+PxPl1': [
        'guliideamet'
      ],
      'N+Pl+Acc+PxPl2': [
        'guliideattet'
      ],
      'N+Pl+Acc+PxPl3': [
        'guliideaset'
      ],
      'N+Pl+Ill+PxSg1': [
        'guliidasan'
      ],
      'N+Pl+Ill+PxSg2': [
        'guliidasat'
      ],
      'N+Pl+Ill+PxSg3': [
        'guliidasas'
      ],
      'N+Pl+Ill+PxDu1': [
        'guliidasame'
      ],
      'N+Pl+Ill+PxDu2': [
        'guliidasade'
      ],
      'N+Pl+Ill+PxDu3': [
        'guliidasaska'
      ],
      'N+Pl+Ill+PxPl1': [
        'guliidasamet'
      ],
      'N+Pl+Ill+PxPl2': [
        'guliidasadet'
      ],
      'N+Pl+Ill+PxPl3': [
        'guliidasaset'
      ],
      'N+Pl+Loc+PxSg1': [
        'guliinan'
      ],
      'N+Pl+Loc+PxSg2': [
        'guliinat'
      ],
      'N+Pl+Loc+PxSg3': [
        'guliinis'
      ],
      'N+Pl+Loc+PxDu1': [
        'guliineame'
      ],
      'N+Pl+Loc+PxDu2': [
        'guliineatte'
      ],
      'N+Pl+Loc+PxDu3': [
        'guliineaskka'
      ],
      'N+Pl+Loc+PxPl1': [
        'guliineamet'
      ],
      'N+Pl+Loc+PxPl2': [
        'guliineattet'
      ],
      'N+Pl+Loc+PxPl3': [
        'guliineaset'
      ],
      'N+Pl+Com+PxSg1': [
        'guliidanguin'
      ],
      'N+Pl+Com+PxSg2': [
        'guliidatguin'
      ],
      'N+Pl+Com+PxSg3': [
        'guliidisguin'
      ],
      'N+Pl+Com+PxDu1': [
        'guliideameguin'
      ],
      'N+Pl+Com+PxDu2': [
        'guliideatteguin'
      ],
      'N+Pl+Com+PxDu3': [
        'guliideaskkaguin'
      ],
      'N+Pl+Com+PxPl1': [
        'guliideametguin'
      ],
      'N+Pl+Com+PxPl2': [
        'guliideattetguin'
      ],
      'N+Pl+Com+PxPl3': [
        'guliideasetguin'
      ],
      'N+Ess+PxSg1': [
        'guollinan'
      ],
      'N+Ess+PxSg2': [
        'guollinat'
      ],
      'N+Ess+PxSg3': [
        'guollinis'
      ],
      'N+Ess+PxDu1': [
        'guollineame'
      ],
      'N+Ess+PxDu2': [
        'guollineatte'
      ],
      'N+Ess+PxDu3': [
        'guollineaskka'
      ],
      'N+Ess+PxPl1': [
        'guollineamet'
      ],
      'N+Ess+PxPl2': [
        'guollineattet'
      ],
      'N+Ess+PxPl3': [
        'guollineaset'
      ]
    }
  },
  sma: {
    'analyses': {
      'N+Sg+Nom': [
        'guelie'
      ],
      'N+Sg+Gen': [
        'guelien'
      ],
      'N+Sg+Acc': [
        'gueliem'
      ],
      'N+Sg+Ill': [
        'gualan'
      ],
      'N+Sg+Ine': [
        'guelesne'
      ],
      'N+Sg+Ela': [
        'gueleste'
      ],
      'N+Sg+Com': [
        'gööline',
        'gueline'
      ],
      'N+Pl+Nom': [
        'guelieh'
      ],
      'N+Pl+Gen': [
        'gööli',
        'gueliej'
      ],
      'N+Pl+Acc': [
        'göölide',
        'guelide'
      ],
      'N+Pl+Ill': [
        'göölide',
        'guelide'
      ],
      'N+Pl+Ine': [
        'gööline',
        'gueline'
      ],
      'N+Pl+Ela': [
        'göölijste',
        'guelijste'
      ],
      'N+Pl+Com': [
        'gööligujmie',
        'gueliejgujmie'
      ],
      'N+Ess': [
        'gööline',
        'gueline'
      ],
      'N+Sg+Nom+PxSg1': [
        'gualeme'
      ],
      'N+Sg+Nom+PxSg2': [
        'gualedh'
      ],
      'N+Sg+Nom+PxSg3': [
        'guelese',
        'guelebe',
        'guelebe'
      ],
      'N+Sg+Gen+PxSg1': [
        'gualene'
      ],
      'N+Sg+Gen+PxSg3': [
        'gueleben'
      ],
      'N+Sg+Acc+PxSg1': [
        'gualeme',
        'gualemem'
      ],
      'N+Sg+Acc+PxSg2': [
        'gualemdh'
      ],
      'N+Sg+Acc+PxSg3': [
        'guelemse',
        'guelebem'
      ],
      'N+Sg+Ill+PxSg1': [
        'gualasanne'
      ],
      'N+Sg+Ill+PxSg2': [
        'gualasadth'
      ],
      'N+Sg+Ill+PxSg3': [
        'gueliebasse'
      ],
      'N+Sg+Ine+PxSg3': [
        'gueliebinie'
      ],
      'N+Sg+Ela+PxSg1': [
        'gueliestanne'
      ],
      'N+Sg+Ela+PxSg2': [
        'gueliestadth'
      ],
      'N+Sg+Ela+PxSg3': [
        'gueliebistie'
      ],
      'N+Sg+Com+PxSg2': [
        'gualanadth'
      ],
      'N+Sg+Com+PxSg3': [
        'gueliebinie'
      ]
    }
  },
  smj: {
    'analyses': {
      'N+Sg+Nom': [
        'guolle'
      ],
      'N+Sg+Nom+PxSg1': [
        'guollám'
      ],
      'N+Sg+Nom+PxSg2': [
        'guollát'
      ],
      'N+Sg+Nom+PxDu1': [
        'guolláma'
      ],
      'N+Sg+Nom+PxDu2': [
        'guolláda'
      ],
      'N+Sg+Nom+PxPl1': [
        'guolláma'
      ],
      'N+Sg+Nom+PxPl2': [
        'guolláda'
      ],
      'N+Sg+Gen': [
        'guole'
      ],
      'N+Sg+Gen+PxSg1': [
        'guolám'
      ],
      'N+Sg+Gen+PxSg2': [
        'guolát'
      ],
      'N+Sg+Gen+PxSg3': [
        'guoles'
      ],
      'N+Sg+Gen+PxDu1': [
        'guoláma'
      ],
      'N+Sg+Gen+PxDu2': [
        'guoláda'
      ],
      'N+Sg+Gen+PxDu3': [
        'guoleska'
      ],
      'N+Sg+Gen+PxPl1': [
        'guoláma'
      ],
      'N+Sg+Gen+PxPl2': [
        'guoláda'
      ],
      'N+Sg+Gen+PxPl3': [
        'guolesa'
      ],
      'N+Sg+Acc': [
        'guolev'
      ],
      'N+Sg+Acc+PxSg1': [
        'guolám'
      ],
      'N+Sg+Acc+PxSg2': [
        'guolát'
      ],
      'N+Sg+Acc+PxSg3': [
        'guoles'
      ],
      'N+Sg+Acc+PxDu1': [
        'guoláma'
      ],
      'N+Sg+Acc+PxDu2': [
        'guoláda'
      ],
      'N+Sg+Acc+PxDu3': [
        'guoleska'
      ],
      'N+Sg+Acc+PxPl1': [
        'guoláma'
      ],
      'N+Sg+Acc+PxPl2': [
        'guoláda'
      ],
      'N+Sg+Acc+PxPl3': [
        'guolesa'
      ],
      'N+Sg+Ill': [
        'guolláj'
      ],
      'N+Sg+Ill+PxSg1': [
        'guollásim'
      ],
      'N+Sg+Ill+PxSg2': [
        'guollásit'
      ],
      'N+Sg+Ill+PxSg3': [
        'guollásis'
      ],
      'N+Sg+Ill+PxDu1': [
        'guollásimme'
      ],
      'N+Sg+Ill+PxDu2': [
        'guollásihtte'
      ],
      'N+Sg+Ill+PxDu3': [
        'guollásiska'
      ],
      'N+Sg+Ill+PxPl1': [
        'guollásimme'
      ],
      'N+Sg+Ill+PxPl2': [
        'guollásihtte'
      ],
      'N+Sg+Ill+PxPl3': [
        'guollásisá'
      ],
      'N+Sg+Ine': [
        'guolen'
      ],
      'N+Sg+Ine+PxSg1': [
        'guolenam',
        'guolenim'
      ],
      'N+Sg+Ine+PxSg2': [
        'guolenat',
        'guolenit'
      ],
      'N+Sg+Ine+PxSg3': [
        'guolenis'
      ],
      'N+Sg+Ine+PxDu1': [
        'guolenimme'
      ],
      'N+Sg+Ine+PxDu2': [
        'guolenihtte'
      ],
      'N+Sg+Ine+PxDu3': [
        'guoleniska'
      ],
      'N+Sg+Ine+PxPl1': [
        'guolenimme'
      ],
      'N+Sg+Ine+PxPl2': [
        'guolenihtte'
      ],
      'N+Sg+Ine+PxPl3': [
        'guolenisá'
      ],
      'N+Sg+Ela': [
        'guoles'
      ],
      'N+Sg+Ela+PxSg1': [
        'guolestam',
        'guolestim'
      ],
      'N+Sg+Ela+PxSg2': [
        'guolestat',
        'guolestit'
      ],
      'N+Sg+Ela+PxSg3': [
        'guolestis'
      ],
      'N+Sg+Ela+PxDu1': [
        'guolestimme'
      ],
      'N+Sg+Ela+PxDu2': [
        'guolestihtte'
      ],
      'N+Sg+Ela+PxDu3': [
        'guolestiska'
      ],
      'N+Sg+Ela+PxPl1': [
        'guolestimme'
      ],
      'N+Sg+Ela+PxPl2': [
        'guolestihtte'
      ],
      'N+Sg+Ela+PxPl3': [
        'guolestisá'
      ],
      'N+Sg+Com': [
        'guolijn',
        'guolijn'
      ],
      'N+Sg+Com+PxSg1': [
        'guolijnam',
        'guolijnim',
        'guolijnam',
        'guolijnim'
      ],
      'N+Sg+Com+PxSg2': [
        'guolijnat',
        'guolijnit',
        'guolijnat',
        'guolijnit'
      ],
      'N+Sg+Com+PxSg3': [
        'guolijnis',
        'guolijnis'
      ],
      'N+Sg+Com+PxDu1': [
        'guolijnimme',
        'guolijnimme'
      ],
      'N+Sg+Com+PxDu2': [
        'guolijnihtte',
        'guolijnihtte'
      ],
      'N+Sg+Com+PxDu3': [
        'guolijniska',
        'guolijniska'
      ],
      'N+Sg+Com+PxPl1': [
        'guolijnimme',
        'guolijnimme'
      ],
      'N+Sg+Com+PxPl2': [
        'guolijnihtte',
        'guolijnihtte'
      ],
      'N+Sg+Com+PxPl3': [
        'guolijnisá',
        'guolijnisá'
      ],
      'N+Sg+Abe': [
        'guoledagá',
        'guoledagi'
      ],
      'N+Pl+Nom': [
        'guole'
      ],
      'N+Pl+Nom+PxSg1': [
        'guolem'
      ],
      'N+Pl+Nom+PxSg2': [
        'guolet'
      ],
      'N+Pl+Nom+PxSg3': [
        'guoles'
      ],
      'N+Pl+Nom+PxDu1': [
        'guolema'
      ],
      'N+Pl+Nom+PxDu2': [
        'guoleda'
      ],
      'N+Pl+Nom+PxDu3': [
        'guoleska'
      ],
      'N+Pl+Nom+PxPl1': [
        'guolema'
      ],
      'N+Pl+Nom+PxPl2': [
        'guoleda'
      ],
      'N+Pl+Nom+PxPl3': [
        'guolesa'
      ],
      'N+Pl+Gen': [
        'guolij'
      ],
      'N+Pl+Gen+PxSg1': [
        'guolijam',
        'guolijim'
      ],
      'N+Pl+Gen+PxSg2': [
        'guolijat',
        'guolijit'
      ],
      'N+Pl+Gen+PxSg3': [
        'guolijis'
      ],
      'N+Pl+Gen+PxDu1': [
        'guolijimme'
      ],
      'N+Pl+Gen+PxDu2': [
        'guolijihtte'
      ],
      'N+Pl+Gen+PxDu3': [
        'guolijiska'
      ],
      'N+Pl+Gen+PxPl1': [
        'guolijimme'
      ],
      'N+Pl+Gen+PxPl2': [
        'guolijihtte'
      ],
      'N+Pl+Gen+PxPl3': [
        'guolijisá'
      ],
      'N+Pl+Acc': [
        'guolijt'
      ],
      'N+Pl+Acc+PxSg1': [
        'guolijdam',
        'guolijdim'
      ],
      'N+Pl+Acc+PxSg2': [
        'guolijdat',
        'guolijdit'
      ],
      'N+Pl+Acc+PxSg3': [
        'guolijdis'
      ],
      'N+Pl+Acc+PxDu1': [
        'guolijdimme'
      ],
      'N+Pl+Acc+PxDu2': [
        'guolijdihtte'
      ],
      'N+Pl+Acc+PxDu3': [
        'guolijdiska'
      ],
      'N+Pl+Acc+PxPl1': [
        'guolijdimme'
      ],
      'N+Pl+Acc+PxPl2': [
        'guolijdihtte'
      ],
      'N+Pl+Acc+PxPl3': [
        'guolijdisá'
      ],
      'N+Pl+Ill': [
        'guolijda'
      ],
      'N+Pl+Ill+PxSg1': [
        'guolijdisám'
      ],
      'N+Pl+Ill+PxSg2': [
        'guolijdisát'
      ],
      'N+Pl+Ill+PxSg3': [
        'guolijdises'
      ],
      'N+Pl+Ill+PxDu1': [
        'guolijdisema'
      ],
      'N+Pl+Ill+PxDu2': [
        'guolijdiseda'
      ],
      'N+Pl+Ill+PxDu3': [
        'guolijdiseska'
      ],
      'N+Pl+Ill+PxPl1': [
        'guolijdisema'
      ],
      'N+Pl+Ill+PxPl2': [
        'guolijdiseda'
      ],
      'N+Pl+Ill+PxPl3': [
        'guolijdisesa'
      ],
      'N+Pl+Ine': [
        'guolijn'
      ],
      'N+Pl+Ine+PxSg1': [
        'guolijnam',
        'guolijnim'
      ],
      'N+Pl+Ine+PxSg2': [
        'guolijnat',
        'guolijnit'
      ],
      'N+Pl+Ine+PxSg3': [
        'guolijnis'
      ],
      'N+Pl+Ine+PxDu1': [
        'guolijnimme'
      ],
      'N+Pl+Ine+PxDu2': [
        'guolijnihtte'
      ],
      'N+Pl+Ine+PxDu3': [
        'guolijniska'
      ],
      'N+Pl+Ine+PxPl1': [
        'guolijnimme'
      ],
      'N+Pl+Ine+PxPl2': [
        'guolijnihtte'
      ],
      'N+Pl+Ine+PxPl3': [
        'guolijnisá'
      ],
      'N+Pl+Ela': [
        'guolijs'
      ],
      'N+Pl+Ela+PxSg1': [
        'guolijstam',
        'guolijstim'
      ],
      'N+Pl+Ela+PxSg2': [
        'guolijstat',
        'guolijstit'
      ],
      'N+Pl+Ela+PxSg3': [
        'guolijstis'
      ],
      'N+Pl+Ela+PxDu1': [
        'guolijstimme'
      ],
      'N+Pl+Ela+PxDu2': [
        'guolijstihtte'
      ],
      'N+Pl+Ela+PxDu3': [
        'guolijstiska'
      ],
      'N+Pl+Ela+PxPl1': [
        'guolijstimme'
      ],
      'N+Pl+Ela+PxPl2': [
        'guolijstihtte'
      ],
      'N+Pl+Ela+PxPl3': [
        'guolijstisá'
      ],
      'N+Pl+Com': [
        'guolij'
      ],
      'N+Pl+Com+PxSg1': [
        'guolijam',
        'guolijim'
      ],
      'N+Pl+Com+PxSg2': [
        'guolijat',
        'guolijit'
      ],
      'N+Pl+Com+PxSg3': [
        'guolijis'
      ],
      'N+Pl+Com+PxDu1': [
        'guolijimme'
      ],
      'N+Pl+Com+PxDu2': [
        'guolijihtte'
      ],
      'N+Pl+Com+PxDu3': [
        'guolijiska'
      ],
      'N+Pl+Com+PxPl1': [
        'guolijimme'
      ],
      'N+Pl+Com+PxPl2': [
        'guolijihtte'
      ],
      'N+Pl+Com+PxPl3': [
        'guolijisá'
      ],
      'N+Pl+Abe': [
        'guolijdagá',
        'guolijdagi'
      ],
      'N+Ess': [
        'guollen'
      ]
    }
  },
  sms: {
    analyses: {
      'N+Sg+Nom': [
        'kueʹll'
      ],
      'N+Sg+Gen': [
        'kueʹl'
      ],
      'N+Sg+Acc': [
        'kueʹl'
      ],
      'N+Sg+Ill': [
        'kuâlla'
      ],
      'N+Sg+Loc': [
        'kueʹlest'
      ],
      'N+Sg+Com': [
        'kuõʹlin',
        'kueʹlin'
      ],
      'N+Sg+Abe': [
        'kueʹltaa',
        'kueʹltää'
      ],
      'N+Pl+Nom': [
        'kueʹl'
      ],
      'N+Pl+Gen': [
        'kuõʹli',
        'kueʹli'
      ],
      'N+Pl+Acc': [
        'kuõʹlid',
        'kueʹlid'
      ],
      'N+Pl+Ill': [
        'kuõʹlid',
        'kueʹlid'
      ],
      'N+Pl+Loc': [
        'kuõʹlin',
        'kueʹlin'
      ],
      'N+Pl+Com': [
        'kuõʹlivuiʹm',
        'kueʹlivuiʹm'
      ],
      'N+Pl+Abe': [
        'kuõʹlitaa',
        'kuõʹlitää',
        'kueʹlitaa',
        'kueʹlitää'
      ],
      'N+Par': [
        'kueʹlled'
      ],
      'N+Ess': [
        'kueʹllen'
      ]
    }
  },
  smn: {
    'analyses': {
      'N+Sg+Nom': [
        'kyeli'
      ],
      'N+Sg+Gen': [
        'kyele'
      ],
      'N+Sg+Acc': [
        'kyele'
      ],
      'N+Sg+Ill': [
        'kuálán'
      ],
      'N+Sg+Loc': [
        'kyeleest'
      ],
      'N+Sg+Com': [
        'kuolijn'
      ],
      'N+Sg+Abe': [
        'kyelettáá'
      ],
      'N+Pl+Nom': [
        'kyeleh'
      ],
      'N+Pl+Gen': [
        'kuolij'
      ],
      'N+Pl+Acc': [
        'kuolijd'
      ],
      'N+Pl+Ill': [
        'kuolijd'
      ],
      'N+Pl+Loc': [
        'kuolijn'
      ],
      'N+Pl+Com': [
        'kuolijguin',
        'kuolijgijn'
      ],
      'N+Pl+Abe': [
        'kuolijttáá'
      ],
      'N+Par': [
        'kyellid'
      ],
      'N+Ess': [
        'kyellin'
      ],
      'N+Sg+Nom+PxSg1': [
        'kuállám'
      ],
      'N+Sg+Nom+PxSg2': [
        'kuállád'
      ],
      'N+Sg+Nom+PxDu1': [
        'kuállán'
      ],
      'N+Sg+Nom+PxDu2': [
        'kuállád'
      ],
      'N+Sg+Nom+PxPl1': [
        'kuállán'
      ],
      'N+Sg+Nom+PxPl2': [
        'kuállád'
      ],
      'N+Sg+Gen+PxSg1': [
        'kuállán'
      ],
      'N+Sg+Gen+PxSg2': [
        'kuállád'
      ],
      'N+Sg+Gen+PxSg3': [
        'kyeles'
      ],
      'N+Sg+Gen+PxDu1': [
        'kuállán'
      ],
      'N+Sg+Gen+PxDu2': [
        'kuállád'
      ],
      'N+Sg+Gen+PxDu3': [
        'kyeles'
      ],
      'N+Sg+Gen+PxPl1': [
        'kuállán'
      ],
      'N+Sg+Gen+PxPl2': [
        'kuállád'
      ],
      'N+Sg+Gen+PxPl3': [
        'kyeles'
      ],
      'N+Sg+Acc+PxSg1': [
        'kuállán'
      ],
      'N+Sg+Acc+PxSg2': [
        'kuállád'
      ],
      'N+Sg+Acc+PxSg3': [
        'kyeles'
      ],
      'N+Sg+Acc+PxDu1': [
        'kuállán'
      ],
      'N+Sg+Acc+PxDu2': [
        'kuállád'
      ],
      'N+Sg+Acc+PxDu3': [
        'kyeles'
      ],
      'N+Sg+Acc+PxPl1': [
        'kuállán'
      ],
      'N+Sg+Acc+PxPl2': [
        'kuállád'
      ],
      'N+Sg+Acc+PxPl3': [
        'kyeles'
      ],
      'N+Sg+Ill+PxSg1': [
        'kuálásân'
      ],
      'N+Sg+Ill+PxSg2': [
        'kuálásâd'
      ],
      'N+Sg+Ill+PxSg3': [
        'kuálásis'
      ],
      'N+Sg+Ill+PxDu1': [
        'kuálásân'
      ],
      'N+Sg+Ill+PxDu2': [
        'kuálásâd'
      ],
      'N+Sg+Ill+PxDu3': [
        'kuálásis'
      ],
      'N+Sg+Ill+PxPl1': [
        'kuálásân'
      ],
      'N+Sg+Ill+PxPl2': [
        'kuálásâd'
      ],
      'N+Sg+Ill+PxPl3': [
        'kuálásis'
      ],
      'N+Sg+Loc+PxSg1': [
        'kyelestân'
      ],
      'N+Sg+Loc+PxSg2': [
        'kyelestâd'
      ],
      'N+Sg+Loc+PxSg3': [
        'kyelestis'
      ],
      'N+Sg+Loc+PxDu1': [
        'kyelestân'
      ],
      'N+Sg+Loc+PxDu2': [
        'kyelestâd'
      ],
      'N+Sg+Loc+PxDu3': [
        'kyelestis'
      ],
      'N+Sg+Loc+PxPl1': [
        'kyelestân'
      ],
      'N+Sg+Loc+PxPl2': [
        'kyelestâd'
      ],
      'N+Sg+Loc+PxPl3': [
        'kyelestis'
      ],
      'N+Sg+Com+PxSg1': [
        'kuolijnân'
      ],
      'N+Sg+Com+PxSg2': [
        'kuolijnâd'
      ],
      'N+Sg+Com+PxSg3': [
        'kuolijnis'
      ],
      'N+Sg+Com+PxDu1': [
        'kuolijnân'
      ],
      'N+Sg+Com+PxDu2': [
        'kuolijnâd'
      ],
      'N+Sg+Com+PxDu3': [
        'kuolijnis'
      ],
      'N+Sg+Com+PxPl1': [
        'kuolijnân'
      ],
      'N+Sg+Com+PxPl2': [
        'kuolijnâd'
      ],
      'N+Sg+Com+PxPl3': [
        'kuolijnis'
      ],
      'N+Pl+Loc+PxSg1': [
        'kuolijnân'
      ],
      'N+Pl+Loc+PxSg2': [
        'kuolijnâd'
      ],
      'N+Pl+Loc+PxSg3': [
        'kuolijnis'
      ],
      'N+Pl+Loc+PxDu1': [
        'kuolijnân'
      ],
      'N+Pl+Loc+PxDu2': [
        'kuolijnâd'
      ],
      'N+Pl+Loc+PxDu3': [
        'kuolijnis'
      ],
      'N+Pl+Loc+PxPl1': [
        'kuolijnân'
      ],
      'N+Pl+Loc+PxPl2': [
        'kuolijnâd'
      ],
      'N+Pl+Loc+PxPl3': [
        'kuolijnis'
      ],
      'N+Pl+Com+PxSg1': [
        'kuolijdânguin'
      ],
      'N+Pl+Com+PxSg2': [
        'kuolijdâdguin'
      ],
      'N+Pl+Com+PxSg3': [
        'kuolijdiskuin'
      ],
      'N+Pl+Com+PxDu1': [
        'kuolijdânguin'
      ],
      'N+Pl+Com+PxDu2': [
        'kuolijdâdguin'
      ],
      'N+Pl+Com+PxDu3': [
        'kuolijdiskuin'
      ],
      'N+Pl+Com+PxPl1': [
        'kuolijdânguin'
      ],
      'N+Pl+Com+PxPl2': [
        'kuolijdâdguin'
      ],
      'N+Pl+Com+PxPl3': [
        'kuolijdiskuin'
      ],
      'N+Ess+PxSg1': [
        'kyelinân'
      ],
      'N+Ess+PxSg2': [
        'kyelinâd'
      ],
      'N+Ess+PxSg3': [
        'kyelinis'
      ],
      'N+Ess+PxDu1': [
        'kyelinân'
      ],
      'N+Ess+PxDu2': [
        'kyelinâd'
      ],
      'N+Ess+PxDu3': [
        'kyelinis'
      ],
      'N+Ess+PxPl1': [
        'kyelinân'
      ],
      'N+Ess+PxPl2': [
        'kyelinâd'
      ],
      'N+Ess+PxPl3': [
        'kyelinis'
      ]
    }
  },
  fin: {
    'analyses': {
      'N+Sg+Nom': [
        'kala'
      ],
      'N+Sg+Gen': [
        'kalan'
      ],
      'N+Sg+Par': [
        'kalaa'
      ],
      'N+Sg+All': [
        'kalalle'
      ],
      'N+Sg+Abl': [
        'kalalta'
      ],
      'N+Sg+Ade': [
        'kalalla'
      ],
      'N+Sg+Ill': [
        'kalaan'
      ],
      'N+Sg+Ine': [
        'kalassa'
      ],
      'N+Sg+Ela': [
        'kalasta'
      ],
      'N+Sg+Abe': [
        'kalatta'
      ],
      'N+Sg+Ess': [
        'kalana'
      ],
      'N+Sg+Tra': [
        'kalaksi'
      ],
      'N+Pl+Nom': [
        'kalat'
      ],
      'N+Pl+Gen': [
        'kalojen'
      ],
      'N+Pl+Par': [
        'kaloja'
      ],
      'N+Pl+All': [
        'kaloille'
      ],
      'N+Pl+Abl': [
        'kaloilta'
      ],
      'N+Pl+Ade': [
        'kaloilla'
      ],
      'N+Pl+Ill': [
        'kaloihin'
      ],
      'N+Pl+Ine': [
        'kaloissa'
      ],
      'N+Pl+Ela': [
        'kaloista'
      ],
      'N+Pl+Abe': [
        'kaloitta'
      ],
      'N+Pl+Ess': [
        'kaloina'
      ],
      'N+Pl+Tra': [
        'kaloiksi'
      ],
      'N+Pl+Ins': [
        'kaloin'
      ],
      'N+Sg+Nom+PxSg1': [
        'kalani'
      ],
      'N+Sg+Nom+PxSg2': [
        'kalasi'
      ],
      'N+Sg+Nom+PxSg3': [
        'kalansa'
      ],
      'N+Sg+Nom+PxPl1': [
        'kalamme'
      ],
      'N+Sg+Nom+PxPl2': [
        'kalanne'
      ],
      'N+Sg+Nom+PxPl3': [
        'kalansa'
      ],
      'N+Sg+Gen+PxSg1': [
        'kalani'
      ],
      'N+Sg+Gen+PxSg2': [
        'kalasi'
      ],
      'N+Sg+Gen+PxSg3': [
        'kalansa'
      ],
      'N+Sg+Gen+PxPl1': [
        'kalamme'
      ],
      'N+Sg+Gen+PxPl2': [
        'kalanne'
      ],
      'N+Sg+Gen+PxPl3': [
        'kalansa'
      ],
      'N+Sg+Par+PxSg1': [
        'kalaani'
      ],
      'N+Sg+Par+PxSg2': [
        'kalaasi'
      ],
      'N+Sg+Par+PxSg3': [
        'kalaaan',
        'kalaansa'
      ],
      'N+Sg+Par+PxPl1': [
        'kalaamme'
      ],
      'N+Sg+Par+PxPl2': [
        'kalaanne'
      ],
      'N+Sg+Par+PxPl3': [
        'kalaaan',
        'kalaansa'
      ],
      'N+Sg+All+PxSg1': [
        'kalalleni'
      ],
      'N+Sg+All+PxSg2': [
        'kalallesi'
      ],
      'N+Sg+All+PxSg3': [
        'kalalleen',
        'kalallensa'
      ],
      'N+Sg+All+PxPl1': [
        'kalallemme'
      ],
      'N+Sg+All+PxPl2': [
        'kalallenne'
      ],
      'N+Sg+All+PxPl3': [
        'kalalleen',
        'kalallensa'
      ],
      'N+Sg+Abl+PxSg1': [
        'kalaltani'
      ],
      'N+Sg+Abl+PxSg2': [
        'kalaltasi'
      ],
      'N+Sg+Abl+PxSg3': [
        'kalaltaan',
        'kalaltansa'
      ],
      'N+Sg+Abl+PxPl1': [
        'kalaltamme'
      ],
      'N+Sg+Abl+PxPl2': [
        'kalaltanne'
      ],
      'N+Sg+Abl+PxPl3': [
        'kalaltaan',
        'kalaltansa'
      ],
      'N+Sg+Ade+PxSg1': [
        'kalallani'
      ],
      'N+Sg+Ade+PxSg2': [
        'kalallasi'
      ],
      'N+Sg+Ade+PxSg3': [
        'kalallaan',
        'kalallansa'
      ],
      'N+Sg+Ade+PxPl1': [
        'kalallamme'
      ],
      'N+Sg+Ade+PxPl2': [
        'kalallanne'
      ],
      'N+Sg+Ade+PxPl3': [
        'kalallaan',
        'kalallansa'
      ],
      'N+Sg+Ill+PxSg1': [
        'kalaani'
      ],
      'N+Sg+Ill+PxSg2': [
        'kalaasi'
      ],
      'N+Sg+Ill+PxSg3': [
        'kalaansa'
      ],
      'N+Sg+Ill+PxPl1': [
        'kalaamme'
      ],
      'N+Sg+Ill+PxPl2': [
        'kalaanne'
      ],
      'N+Sg+Ill+PxPl3': [
        'kalaansa'
      ],
      'N+Sg+Ine+PxSg1': [
        'kalassani'
      ],
      'N+Sg+Ine+PxSg2': [
        'kalassasi'
      ],
      'N+Sg+Ine+PxSg3': [
        'kalassaan',
        'kalassansa'
      ],
      'N+Sg+Ine+PxPl1': [
        'kalassamme'
      ],
      'N+Sg+Ine+PxPl2': [
        'kalassanne'
      ],
      'N+Sg+Ine+PxPl3': [
        'kalassaan',
        'kalassansa'
      ],
      'N+Sg+Ela+PxSg1': [
        'kalastani'
      ],
      'N+Sg+Ela+PxSg2': [
        'kalastasi'
      ],
      'N+Sg+Ela+PxSg3': [
        'kalastaan',
        'kalastansa'
      ],
      'N+Sg+Ela+PxPl1': [
        'kalastamme'
      ],
      'N+Sg+Ela+PxPl2': [
        'kalastanne'
      ],
      'N+Sg+Ela+PxPl3': [
        'kalastaan',
        'kalastansa'
      ],
      'N+Sg+Abe+PxSg1': [
        'kalattani'
      ],
      'N+Sg+Abe+PxSg2': [
        'kalattasi'
      ],
      'N+Sg+Abe+PxSg3': [
        'kalattaan',
        'kalattansa'
      ],
      'N+Sg+Abe+PxPl1': [
        'kalattamme'
      ],
      'N+Sg+Abe+PxPl2': [
        'kalattanne'
      ],
      'N+Sg+Abe+PxPl3': [
        'kalattaan',
        'kalattansa'
      ],
      'N+Sg+Ess+PxSg1': [
        'kalanani'
      ],
      'N+Sg+Ess+PxSg2': [
        'kalanasi'
      ],
      'N+Sg+Ess+PxSg3': [
        'kalanaan',
        'kalanansa'
      ],
      'N+Sg+Ess+PxPl1': [
        'kalanamme'
      ],
      'N+Sg+Ess+PxPl2': [
        'kalananne'
      ],
      'N+Sg+Ess+PxPl3': [
        'kalanaan',
        'kalanansa'
      ],
      'N+Sg+Tra+PxSg1': [
        'kalakseni'
      ],
      'N+Sg+Tra+PxSg2': [
        'kalaksesi'
      ],
      'N+Sg+Tra+PxSg3': [
        'kalakseen',
        'kalaksensa'
      ],
      'N+Sg+Tra+PxPl1': [
        'kalaksemme'
      ],
      'N+Sg+Tra+PxPl2': [
        'kalaksenne'
      ],
      'N+Sg+Tra+PxPl3': [
        'kalakseen',
        'kalaksensa'
      ],
      'N+Pl+Nom+PxSg1': [
        'kalani'
      ],
      'N+Pl+Nom+PxSg2': [
        'kalasi'
      ],
      'N+Pl+Nom+PxSg3': [
        'kalansa'
      ],
      'N+Pl+Nom+PxPl1': [
        'kalamme'
      ],
      'N+Pl+Nom+PxPl2': [
        'kalanne'
      ],
      'N+Pl+Nom+PxPl3': [
        'kalansa'
      ],
      'N+Pl+Gen+PxSg1': [
        'kalojeni'
      ],
      'N+Pl+Gen+PxSg2': [
        'kalojesi'
      ],
      'N+Pl+Gen+PxSg3': [
        'kalojensa'
      ],
      'N+Pl+Gen+PxPl1': [
        'kalojemme'
      ],
      'N+Pl+Gen+PxPl2': [
        'kalojenne'
      ],
      'N+Pl+Gen+PxPl3': [
        'kalojensa'
      ],
      'N+Pl+Par+PxSg1': [
        'kalojani'
      ],
      'N+Pl+Par+PxSg2': [
        'kalojasi'
      ],
      'N+Pl+Par+PxSg3': [
        'kalojaan',
        'kalojansa'
      ],
      'N+Pl+Par+PxPl1': [
        'kalojamme'
      ],
      'N+Pl+Par+PxPl2': [
        'kalojanne'
      ],
      'N+Pl+Par+PxPl3': [
        'kalojaan',
        'kalojansa'
      ],
      'N+Pl+All+PxSg1': [
        'kaloilleni'
      ],
      'N+Pl+All+PxSg2': [
        'kaloillesi'
      ],
      'N+Pl+All+PxSg3': [
        'kaloillean',
        'kaloillensa'
      ],
      'N+Pl+All+PxPl1': [
        'kaloillemme'
      ],
      'N+Pl+All+PxPl2': [
        'kaloillenne'
      ],
      'N+Pl+All+PxPl3': [
        'kaloillean',
        'kaloillensa'
      ],
      'N+Pl+Abl+PxSg1': [
        'kaloiltani'
      ],
      'N+Pl+Abl+PxSg2': [
        'kaloiltasi'
      ],
      'N+Pl+Abl+PxSg3': [
        'kaloiltaan',
        'kaloiltansa'
      ],
      'N+Pl+Abl+PxPl1': [
        'kaloiltamme'
      ],
      'N+Pl+Abl+PxPl2': [
        'kaloiltanne'
      ],
      'N+Pl+Abl+PxPl3': [
        'kaloiltaan',
        'kaloiltansa'
      ],
      'N+Pl+Ade+PxSg1': [
        'kaloillani'
      ],
      'N+Pl+Ade+PxSg2': [
        'kaloillasi'
      ],
      'N+Pl+Ade+PxSg3': [
        'kaloillaan',
        'kaloillansa'
      ],
      'N+Pl+Ade+PxPl1': [
        'kaloillamme'
      ],
      'N+Pl+Ade+PxPl2': [
        'kaloillanne'
      ],
      'N+Pl+Ade+PxPl3': [
        'kaloillaan',
        'kaloillansa'
      ],
      'N+Pl+Ill+PxSg1': [
        'kaloihini'
      ],
      'N+Pl+Ill+PxSg2': [
        'kaloihisi'
      ],
      'N+Pl+Ill+PxSg3': [
        'kaloihinsa'
      ],
      'N+Pl+Ill+PxPl1': [
        'kaloihimme'
      ],
      'N+Pl+Ill+PxPl2': [
        'kaloihinne'
      ],
      'N+Pl+Ill+PxPl3': [
        'kaloihinsa'
      ],
      'N+Pl+Ine+PxSg1': [
        'kaloissani'
      ],
      'N+Pl+Ine+PxSg2': [
        'kaloissasi'
      ],
      'N+Pl+Ine+PxSg3': [
        'kaloissaan',
        'kaloissansa'
      ],
      'N+Pl+Ine+PxPl1': [
        'kaloissamme'
      ],
      'N+Pl+Ine+PxPl2': [
        'kaloissanne'
      ],
      'N+Pl+Ine+PxPl3': [
        'kaloissaan',
        'kaloissansa'
      ],
      'N+Pl+Ela+PxSg1': [
        'kaloistani'
      ],
      'N+Pl+Ela+PxSg2': [
        'kaloistasi'
      ],
      'N+Pl+Ela+PxSg3': [
        'kaloistaan',
        'kaloistansa'
      ],
      'N+Pl+Ela+PxPl1': [
        'kaloistamme'
      ],
      'N+Pl+Ela+PxPl2': [
        'kaloistanne'
      ],
      'N+Pl+Ela+PxPl3': [
        'kaloistaan',
        'kaloistansa'
      ],
      'N+Pl+Abe+PxSg1': [
        'kaloittani'
      ],
      'N+Pl+Abe+PxSg2': [
        'kaloittasi'
      ],
      'N+Pl+Abe+PxSg3': [
        'kaloittaan',
        'kaloittansa'
      ],
      'N+Pl+Abe+PxPl1': [
        'kaloittamme'
      ],
      'N+Pl+Abe+PxPl2': [
        'kaloittanne'
      ],
      'N+Pl+Abe+PxPl3': [
        'kaloittaan',
        'kaloittansa'
      ],
      'N+Pl+Ess+PxSg1': [
        'kaloinani'
      ],
      'N+Pl+Ess+PxSg2': [
        'kaloinasi'
      ],
      'N+Pl+Ess+PxSg3': [
        'kaloinaan',
        'kaloinansa'
      ],
      'N+Pl+Ess+PxPl1': [
        'kaloinamme'
      ],
      'N+Pl+Ess+PxPl2': [
        'kaloinanne'
      ],
      'N+Pl+Ess+PxPl3': [
        'kaloinaan',
        'kaloinansa'
      ],
      'N+Pl+Tra+PxSg1': [
        'kaloikseni'
      ],
      'N+Pl+Tra+PxSg2': [
        'kaloiksesi'
      ],
      'N+Pl+Tra+PxSg3': [
        'kaloikseen',
        'kaloiksensa'
      ],
      'N+Pl+Tra+PxPl1': [
        'kaloiksemme'
      ],
      'N+Pl+Tra+PxPl2': [
        'kaloiksenne'
      ],
      'N+Pl+Tra+PxPl3': [
        'kaloikseen',
        'kaloiksensa'
      ]
    }
  }
};

storiesOf('NounParadigm', module)
  .add('South saami noun', () => <NounParadigm paradigm={paradigm['sma']} language='sma' />)
  .add('North saami noun', () => <NounParadigm paradigm={paradigm['sme']} language='sme' />)
  .add('Lule saami noun', () => <NounParadigm paradigm={paradigm['smj']} language='smj' />)
  .add('Inari saami noun', () => <NounParadigm paradigm={paradigm['smn']} language='smn' />)
  .add('Skolt saami noun', () => <NounParadigm paradigm={paradigm['sms']} language='sms' />)
  .add('Finnish noun', () => <NounParadigm paradigm={paradigm['fin']} language='fin' />);
