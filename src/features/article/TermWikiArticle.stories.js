import React from 'react';

import TermWikiArticle from './TermWikiArticle';

const concepts = [
  {
    collections: ['Collection:SD-terms', 'Collection:Dáhtábágo javllamáno 2013'],
    definition: null,
    explanation: null,
    terms: [
      {
        expression: {
          language: 'smj',
          lemma: 'fijlla',
          pos: 'N',
        },
        note: 'jll jl',
        source: null,
        status: null,
      },
    ],
  },
  {
    collections: ['Collection:SD-terms', 'Collection:Dáhtábágo javllamáno 2013'],
    definition: null,
    explanation: null,
    terms: [
      {
        expression: {
          language: 'fin',
          lemma: 'viila',
          pos: 'N',
        },
        note: null,
        source: null,
        status: null,
      },
      {
        expression: {
          language: 'fin',
          lemma: 'kaista',
          pos: 'N',
        },
        note: null,
        source: null,
        status: null,
      },
      {
        expression: {
          language: 'fin',
          lemma: 'tiedosto',
          pos: 'N',
        },
        note: null,
        source: null,
        status: null,
      },
    ],
  },
  {
    collections: ['Collection:SD-terms', 'Collection:Dáhtábágo javllamáno 2013'],
    definition: null,
    explanation: null,
    terms: [
      {
        expression: {
          language: 'eng',
          lemma: 'file',
          pos: 'N',
        },
        note: null,
        source: null,
        status: null,
      },
    ],
  },
  {
    collections: ['Collection:SD-terms', 'Collection:Dáhtábágo javllamáno 2013'],
    definition: 'fil, i edb: en ordnet mengde av sammenhørende data',
    explanation: null,
    terms: [
      {
        expression: {
          language: 'nob',
          lemma: 'fil',
          pos: 'N',
        },
        note: null,
        source: null,
        status: null,
      },
    ],
  },
  {
    collections: ['Collection:SD-terms', 'Collection:Dáhtábágo javllamáno 2013'],
    definition: null,
    explanation: null,
    terms: [
      {
        expression: {
          language: 'swe',
          lemma: 'fil',
          pos: 'N',
        },
        note: null,
        source: null,
        status: null,
      },
    ],
  },
  {
    collections: ['Collection:SD-terms', 'Collection:Dáhtábágo javllamáno 2013'],
    definition: null,
    explanation: null,
    terms: [
      {
        expression: {
          language: 'sme',
          lemma: 'fiila',
          pos: 'N',
        },
        note: null,
        source: null,
        status: null,
      },
      {
        expression: {
          language: 'sme',
          lemma: 'vuorká',
          pos: 'N',
        },
        note: null,
        source: null,
        status: null,
      },
    ],
  },
  {
    collections: ['Collection:SD-terms', 'Collection:Dáhtábágo javllamáno 2013'],
    definition: null,
    explanation: null,
    terms: [
      {
        expression: {
          language: 'sma',
          lemma: 'fijle',
          pos: 'N',
        },
        note: null,
        source: null,
        status: null,
      },
    ],
  },
];

export default {
  title: 'TermWikiArticle',
};

export const Default = () => (
  <TermWikiArticle
    category="Dihtorteknologiija ja diehtoteknihkka"
    multiLingualConcept={concepts}
    lemma="vuorká"
  />
);

Default.story = {
  name: 'default',
};
