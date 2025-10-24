/* eslint-disable react/no-array-index-key */

import React from 'react';

import Example from './Example';

interface ExampleData {
  example: string;
  translation: string;
}

interface ExamplesProps {
  examples: ExampleData[];
  sourceLanguage: string;
  targetLanguage: string;
}

const Examples: React.FC<ExamplesProps> = ({ examples, sourceLanguage, targetLanguage }) => (
  <>
    {examples.map((example, i) => (
      <Example
        key={i}
        example={example}
        sourceLanguage={sourceLanguage}
        targetLanguage={targetLanguage}
      />
    ))}
  </>
);

export default Examples;