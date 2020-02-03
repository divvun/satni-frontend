import React from 'react';
import { storiesOf } from '@storybook/react';

import PresentArticles from './PresentArticles';
import {
  resultDictWithExamples,
  resultDictWithoutExamples,
  resultTermWiki
} from 'utils_testdata';
import { dictPosts, termwikiPosts} from 'utils';

storiesOf('PresentArticles', module)
  .add('DictArticle with examples', () => <PresentArticles
    articles={dictPosts(resultDictWithExamples[0])} />)
  .add('DictArticle without examples', () => <PresentArticles
    articles={dictPosts(resultDictWithoutExamples[0])} />)
  .add('Only TermWikiArticle', () => <PresentArticles
    articles={termwikiPosts('androgyn', resultTermWiki)} />)
  .add('All types', () => <PresentArticles
    articles={[
      ...dictPosts(resultDictWithExamples[0]),
      ...dictPosts(resultDictWithoutExamples[0]),
      ...termwikiPosts('androgyn', resultTermWiki)]
    } />);
