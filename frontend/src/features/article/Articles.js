import React, { useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import { useCookies } from 'react-cookie';

import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';
import { elemmas2ConceptPairs, dictBackend2Frontend } from 'utils';
import PresentArticles from './PresentArticles';
import FetchArticlesError from './FetchArticlesError';
import { useQuery } from '@apollo/react-hooks';

const GET_ARTICLES = gql`
  query AllArticles($lemma: String!, $wantedLangs: [String]!) {
    dictEntryList (exact: $lemma, wanted: $wantedLangs) {
      id
      srcLang
      targetLang
      lookupLemmas {
        edges {
          node {
            lemma
            language
            pos
          }
        }
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
    conceptList(exact: $lemma, wanted: $wantedLangs) {
    	name
      collections
      definition
      explanation
      terms {
        note
        source
        status
        expression {
          lemma
          language
          pos
        }
      }
    }
  }
`;
// return <div>{JSON.stringify(data.elemmas)}</div>;
const query2articlelist = (lemma, data) => {
  const termList = elemmas2ConceptPairs(lemma, data.conceptList);
  const dictList = data.dictEntryList.map(dictBackend2Frontend);

  return dictList.concat(termList);
};

const Articles = () => {
  const { lemma } = useParams();
  const [cookies] = useCookies(['wantedLangs']);

  return (
    <Query
      query={GET_ARTICLES}
      variables={{
        lemma,
        wantedLangs: cookies.wantedLangs
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
