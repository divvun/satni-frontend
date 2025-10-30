import { gql, TypedDocumentNode } from "@apollo/client";
import type { Query, QueryDictEntryListArgs } from "../../graphql/graphql";

export interface DictArticlesQuery {
  dictEntryList: Query["dictEntryList"];
}

export interface DictArticlesVariables {
  lemma: QueryDictEntryListArgs["exact"];
  srcLangs: QueryDictEntryListArgs["srcLangs"];
  targetLangs: QueryDictEntryListArgs["targetLangs"];
  wantedDicts: QueryDictEntryListArgs["wantedDicts"];
}

const GET_DICT_ARTICLES: TypedDocumentNode<
  DictArticlesQuery,
  DictArticlesVariables
> = gql`
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
