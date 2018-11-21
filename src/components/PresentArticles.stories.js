import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PresentArticles from './PresentArticles';
import {
  resultSDTerm,
  resultDictWithExamples,
  resultDictWithoutExamples,
  resultTermWiki,
  resultMekanikk99,
  resultJustermTana,
  resultFordel
} from '../utils_testdata';

const articles = [];

storiesOf('PresentArticles', module)
  .add('DictArticle with examples', () => <PresentArticles
    articles={[resultDictWithExamples[0]]} />)
  .add('DictArticle without examples', () => <PresentArticles
    articles={[resultDictWithoutExamples[0]]} />)
  .add('Only TermWikiArticle', () => <PresentArticles
    articles={[resultTermWiki]} />)
  .add('Only SDTermArticle', () => <PresentArticles
    articles={[resultSDTerm]} />)
  .add('SDTerm, t is no array', () => <PresentArticles
    articles={[resultFordel]} />)
  .add('Only mekanikk99', () => <PresentArticles
    articles={[resultMekanikk99]} />)
  .add('Only JustermTana', () => <PresentArticles
    articles={[resultJustermTana]} />)
  .add('All types', () => <PresentArticles
    articles={[
      resultDictWithExamples[0],
      resultDictWithoutExamples[0],
      resultTermWiki,
      resultSDTerm,
      resultMekanikk99,
      resultJustermTana
    ]} />);
