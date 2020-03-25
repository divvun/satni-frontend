import React, { useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';

import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';
import { elemmas2ConceptPairs } from 'utils';
import PresentArticles from './PresentArticles';
import FetchArticlesError from './FetchArticlesError';

const GET_ARTICLES = gql`
  query AllArticles($lemma: String!) {
    elemmas (exact: $lemma) {
      id
      lemma
      language
      pos
      multilingualconcepts {
        id
        name
        conceptSet {
          id
          language
          definition
          explanation
          termSet {
            id
            expression {
              id
              language
              lemma
              pos
            }
            sanctioned
            note
            status
            source
          }
        }
      }
    }
  }
`;
// return <div>{JSON.stringify(data.elemmas)}</div>;

const Articles = () => {
  const { lemma } = useParams();

  return (
    <Query
      query={GET_ARTICLES}
      variables={{
        lemma
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error {error.message}</p>;
        if (!data) return <p>Not found</p>;

        return <PresentArticles articles={elemmas2ConceptPairs(data.elemmas)} />;
      }}
    </Query>
  );
};

export default Articles;
