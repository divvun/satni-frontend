import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Articles from './PresentArticles';
import {
  resultSDTerm,
  resultDictWithExamples,
  resultDictWithoutExamples,
  resultTermWiki,
  resultMekanikk99,
  resultJustermTana
} from '../utils_testdata';

const isFetching = true;
const articles = [];

storiesOf('Articles', module)
  .add('Loading', () => <Articles
    isFetching={isFetching}
    articles={articles} />)
  .add('DictArticle with examples', () => <Articles
    isFetching={!isFetching}
    articles={[resultDictWithExamples[0]]} />)
  .add('DictArticle without examples', () => <Articles
    isFetching={!isFetching}
    articles={[resultDictWithoutExamples[0]]} />)
  .add('Only TermWikiArticle', () => <Articles
    isFetching={!isFetching}
    articles={[resultTermWiki]} />)
  .add('Only SDTermArticle', () => <Articles
    isFetching={!isFetching}
    articles={[resultSDTerm]} />)
  .add('Only mekanikk99', () => <Articles
    isFetching={!isFetching}
    articles={[resultMekanikk99]} />)
  .add('Only JustermTana', () => <Articles
    isFetching={!isFetching}
    articles={[resultJustermTana]} />)
  .add('All types', () => <Articles isFetching={!isFetching}
    articles={[
      resultDictWithExamples[0],
      resultDictWithoutExamples[0],
      resultTermWiki,
      resultSDTerm,
      resultMekanikk99,
      resultJustermTana
    ]} />);
