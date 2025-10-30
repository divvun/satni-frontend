import { gql } from '@apollo/client';

const GET_DICT_ARTICLES = gql`
  query DictArticles(
    $lemma: String!
    $srcLangs: [String]!
    $targetLangs: [String]!
    $wantedDicts: [String]!
  ) {
    dictEntryList(
      exact: $lemma
      srcLangs: $srcLangs
      targetLangs: $targetLangs
      wantedDicts: $wantedDicts
    ) {
      dictName
      srcLang
      targetLang
      lookupLemmas {
        edges {
          node {
            lemma
            presentationLemma
            language
            pos
            dialect
            country
          }
        }
      }
      translationGroups {
        translationLemmas {
          edges {
            node {
              lemma
              presentationLemma
              language
              pos
              dialect
              country
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

export default GET_DICT_ARTICLES;
