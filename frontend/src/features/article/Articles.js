import React from 'react';
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

const Articles = (props) => {
  const {lemma, lemmaHandler, wantedDicts, wantedLangs} = props;
  const GET_ARTICLES = wantedDicts.includes('termwiki') ?
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

  const {data, loading, error} = useQuery(
    GET_ARTICLES, {
      variables: {
        lemma,
        wantedLangs,
        wantedDicts
      }
    }
  );
  if (loading) return <Trans><p>Loading...</p></Trans>;
  if (error) return <Trans><p>Error {error.message}</p></Trans>;
  if (!data) return <Trans><p>Not found</p></Trans>;

  if (wantedDicts.includes('termwiki')) {
    return <PresentArticles
      lemmaHandler={lemmaHandler}
      articles={query2articlelist(lemma, data)} />;
  } else {
    return <PresentArticles
      lemmaHandler={lemmaHandler}
      articles={data.dictEntryList.map(dictBackend2Frontend)} />;
  }
};

export default Articles;
