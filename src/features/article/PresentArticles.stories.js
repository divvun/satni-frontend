import React from 'react';
import { storiesOf } from '@storybook/react';

import PresentArticles from './PresentArticles';
import {
  resultDictWithExamples,
  resultDictWithoutExamples,
  resultTermWiki
} from 'utils_testdata';

storiesOf('PresentArticles', module)
  .add('DictArticle with examples', () => <PresentArticles
    articles={[resultDictWithExamples[0]]} />)
  .add('DictArticle without examples', () => <PresentArticles
    articles={[resultDictWithoutExamples[0]]} />)
  .add('Only TermWikiArticle', () => <PresentArticles
    articles={[resultTermWiki]} />)
  .add('All types', () => <PresentArticles
    articles={[
      resultDictWithExamples[0],
      resultDictWithoutExamples[0],
      resultTermWiki
    ]} />);
