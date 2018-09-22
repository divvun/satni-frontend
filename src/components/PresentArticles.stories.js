import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Articles from './PresentArticles';
import { resultSDTerm, resultDictWithExamples, resultDictWithoutExamples } from '../utils.test';

const isFetching = true;
const articles = [];

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

storiesOf('Articles', module)
  .add('Loading', () => <Articles isFetching={isFetching} articles={articles} />)
  .add('DictArticle with examples', () => <Articles isFetching={!isFetching} articles={[resultDictWithExamples]} />)
  .add('DictArticle without examples', () => <Articles isFetching={!isFetching} articles={[resultDictWithoutExamples]} />)
  .add('Only TermWikiArticle', () => <Articles isFetching={!isFetching} articles={[resultTermWiki]} />)
  .add('Only SDTermArticle', () => <Articles isFetching={!isFetching} articles={[resultSDTerm]} />)
  .add('All types', () => <Articles isFetching={!isFetching}
    articles={[resultDictWithExamples, resultDictWithoutExamples, resultTermWiki, resultSDTerm]} />);
