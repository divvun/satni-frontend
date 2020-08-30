import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { useQuery } from '@apollo/client';

import gql from 'graphql-tag';
import LanguageIcon from '@material-ui/icons/Language';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';

import { elemmas2ConceptPairs, dictBackend2Frontend } from 'utils';
import PresentArticles from './PresentArticles';
import FetchArticlesError from './FetchArticlesError';

const query2articlelist = (lemma, data) => {
  const termList = elemmas2ConceptPairs(lemma, data.conceptList);
  const dictList = data.dictEntryList.map(dictBackend2Frontend);
  return dictList.concat(termList);
};

const useStyles = makeStyles(theme => ({
  icons: {
    fontSize: 'inherit'
  }
}));

const Articles = (props) => {
  const {lemma, wantedDicts, wantedLangs} = props;
  const classes = useStyles();

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

  if (
    (
      wantedDicts.includes('termwiki') &&
      !data.dictEntryList.length &&
      !data.conceptList.length
    ) ||
    (
      !wantedDicts.includes('termwiki') &&
      !data.dictEntryList.length
    )
  ) {
    return <Typography
      component='p'
      className={classes.list}
    >
      <Trans>
      No results for <b>{lemma}</b>. Check <LanguageIcon className={classes.icons} /> or <MenuBookIcon className={classes.icons} /> in the left menu to see if the wanted languages or dictionaries are selected.
      </Trans>
    </Typography>;
  }

  if (wantedDicts.includes('termwiki')) {
    return <PresentArticles
      lemma={lemma}
      articles={query2articlelist(lemma, data)} />;
  } else {
    return <PresentArticles
      lemma={lemma}
      articles={data.dictEntryList.map(dictBackend2Frontend)} />;
  }
};

export default Articles;
