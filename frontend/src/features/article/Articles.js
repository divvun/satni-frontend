import React, { useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';

import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';
import { elemmas2ConceptPairs, dictBackend2Frontend } from 'utils';
import PresentArticles from './PresentArticles';
import FetchArticlesError from './FetchArticlesError';

const GET_ARTICLES = gql`
  query AllArticles($lemma: String!) {
    dictEntryList (exact: $lemma) {
      id
      srcLang
      targetLang
      lookupLemma {
        lemma
  			pos
      }
      translationGroups {
        translationLemmas {
          edges {
            node {
              lemma
              language
              pos
            }
          }
        }
        restriction {
          restriction
          attributes
        }
        exampleGroups {
          example
          translation
        }
      }
    }
    multilingualconceptList (exact: $lemma) {
      id
      name
      concepts {
        definition
        explanation
        language
        terms {
          note
          sanctioned
          source
          status
          expression {
            id
            lemma
            pos
            language
          }
        }
      }
    }
  }
`;
// return <div>{JSON.stringify(data.elemmas)}</div>;
const query2articlelist = (lemma, data) => {
  const termList = elemmas2ConceptPairs(lemma, data.multilingualconceptList);
  const dictList = data.dictEntryList.map(dictBackend2Frontend);

  return dictList.concat(termList);
};

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

        return <PresentArticles articles={query2articlelist(lemma, data)} />;
      }}
    </Query>
  );
};

export default Articles;
