import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Articles from './PresentArticles';

const isFetching = true;
const articles = [];

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
  ],
  termwikiref: '-1',
  dict: 'smenob'
};

const resultTermWiki = {
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
  termwikiref: 'Girji:androgyna',
  dict: 'termwiki'
};

const resultSDTerm = {
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
  dict: 'SD-Term'
};

storiesOf('Articles', module)
  .add('Loading', () => <Articles isFetching={isFetching} articles={articles} />)
  .add('Only DictArticle', () => <Articles isFetching={!isFetching} articles={[resultDict]} />)
  .add('Only TermWikiArticle', () => <Articles isFetching={!isFetching} articles={[resultTermWiki]} />)
  .add('Only SDTermArticle', () => <Articles isFetching={!isFetching} articles={[resultSDTerm]} />)
  .add('All three types', () => <Articles isFetching={!isFetching}
    articles={[resultDict, resultTermWiki, resultSDTerm]} />);
