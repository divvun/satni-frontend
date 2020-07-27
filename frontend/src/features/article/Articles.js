import React, { useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Trans } from '@lingui/macro';
import gql from 'graphql-tag';
import { elemmas2ConceptPairs, dictBackend2Frontend } from 'utils';
import PresentArticles from './PresentArticles';
import FetchArticlesError from './FetchArticlesError';
import { useQuery } from '@apollo/client';

const query2articlelist = (lemma, data) => {
  const termList = elemmas2ConceptPairs(lemma, data.conceptList);
  const dictList = data.dictEntryList.map(dictBackend2Frontend);
  return dictList.concat(termList);
};

const Articles = ({lemma}) => {
  const [cookies] = useCookies(['wantedLangs', 'wantedDicts']);

  const GET_ARTICLES = cookies.wantedDicts.includes('termwiki') ?
    gql`
      query AllArticles($lemma: String!, $wantedLangs: [String]!, $wantedDicts: [String]!) {
        dictEntryList (exact: $lemma, wanted: $wantedLangs, wantedDicts: $wantedDicts) {
          dictName
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
    ` :
    gql`
      query AllArticles($lemma: String!, $wantedLangs: [String]!, $wantedDicts: [String]!) {
        dictEntryList (exact: $lemma, wanted: $wantedLangs, wantedDicts: $wantedDicts) {
          dictName
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
      }
    `;

  const {data, loading, fetchMore, error} = useQuery(
    GET_ARTICLES, {
      variables: {
        lemma,
        wantedLangs: cookies.wantedLangs,
        wantedDicts: cookies.wantedDicts
      }
    }
  );
  if (loading) return <Trans><p>Loading...</p></Trans>;
  if (error) return <Trans><p>Error {error.message}</p></Trans>;
  if (!data) return <Trans><p>Not found</p></Trans>;

  if (cookies.wantedDicts.includes('termwiki')) {
    return <PresentArticles articles={query2articlelist(lemma, data)} />;
  } else {
    return <PresentArticles articles={data.dictEntryList.map(dictBackend2Frontend)} />;
  }
};

export default Articles;
