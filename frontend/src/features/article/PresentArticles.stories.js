import React from 'react';
import { storiesOf } from '@storybook/react';

import PresentArticles from './PresentArticles';

const articles = [
  {
    'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
    'category': 'Luonddudieđa ja matematihkka',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'swe',
      'terms': [
        {
          'id': '52476',
          'language': 'swe',
          'lemma': 'lim',
          'partOfSpeech': ''
        }
      ]
    },
    'to': {
      'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
      'language': 'sme',
      'terms': [
        {
          'id': '52479',
          'language': 'sme',
          'lemma': 'liima',
          'partOfSpeech': 'N'
        },
        {
          'id': '52477',
          'language': 'sme',
          'lemma': 'liibma',
          'partOfSpeech': 'N'
        }
      ]
    }
  },
  {
    'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 2339',
    'category': 'Servodatdieđa',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'nob',
      'terms': [
        {
          'id': '52478',
          'language': 'nob',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': '',
      'language': 'sma',
      'terms': [
        {
          'id': '82597',
          'language': 'sma',
          'lemma': 'njimkehtse',
          'partOfSpeech': 'N'
        }
      ]
    }
  },
  {
    'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 1902',
    'category': 'Servodatdieđa',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'nob',
      'terms': [
        {
          'id': '52478',
          'language': 'nob',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': '',
      'language': 'sma',
      'terms': [
        {
          'id': '81662',
          'language': 'sma',
          'lemma': '1. lïjme = lijmie',
          'partOfSpeech': 'MWE'
        }
      ]
    }
  },
  {
    'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
    'category': 'Luonddudieđa ja matematihkka',
    'dict': 'termwiki',
    'from': {
      'definition': 'klebrig væske eller masse til å binde saman stykke av tre, metall osv',
      'language': 'nob',
      'terms': [
        {
          'id': '52478',
          'language': 'nob',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
      'language': 'sme',
      'terms': [
        {
          'id': '52477',
          'language': 'sme',
          'lemma': 'liibma',
          'partOfSpeech': 'N'
        }
      ]
    }
  },
  {
    'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 2339',
    'category': 'Servodatdieđa',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'swe',
      'terms': [
        {
          'id': '81663',
          'language': 'swe',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': '',
      'language': 'sma',
      'terms': [
        {
          'id': '82597',
          'language': 'sma',
          'lemma': 'njimkehtse',
          'partOfSpeech': 'N'
        }
      ]
    }
  },
  {
    'termwikiref': 'Servodatdieđa:åejviebaakoelæstoe 20110120 1902',
    'category': 'Servodatdieđa',
    'dict': 'termwiki',
    'from': {
      'definition': '',
      'language': 'swe',
      'terms': [
        {
          'id': '81663',
          'language': 'swe',
          'lemma': 'lim',
          'partOfSpeech': 'N'
        }
      ]
    },
    'to': {
      'definition': '',
      'language': 'sma',
      'terms': [
        {
          'id': '81662',
          'language': 'sma',
          'lemma': '1. lïjme = lijmie',
          'partOfSpeech': 'MWE'
        }
      ]
    }
  }
];

storiesOf('PresentArticles', module)
  // .add('DictArticle with examples', () => <PresentArticles
  //   articles={[resultDictWithExamples[0]]} />)
  // .add('DictArticle without examples', () => <PresentArticles
  //   articles={[resultDictWithoutExamples[0]]} />)
  .add('Only TermWikiArticle', () => <PresentArticles
    articles={articles} />);
  // .add('All types', () => <PresentArticles
  //   articles={[
  //     resultDictWithExamples[0],
  //     resultDictWithoutExamples[0],
  //     termGroup
  //   ]} />);
