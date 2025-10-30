import { gql, TypedDocumentNode } from "@apollo/client";
import type { Query, QueryConceptListArgs } from "../../graphql/graphql";

export interface TermArticlesQuery {
  conceptList: Query["conceptList"];
}

export interface TermArticlesVariables {
  lemma: QueryConceptListArgs["exact"];
  srcLangs: QueryConceptListArgs["srcLangs"];
  targetLangs: QueryConceptListArgs["targetLangs"];
}

const GET_TERM_ARTICLES: TypedDocumentNode<
  TermArticlesQuery,
  TermArticlesVariables
> = gql`
  query TermArticles(
    $lemma: String!
    $srcLangs: [String]!
    $targetLangs: [String]!
  ) {
    conceptList(exact: $lemma, srcLangs: $srcLangs, targetLangs: $targetLangs) {
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
          presentationLemma
          language
          pos
          dialect
          country
        }
      }
    }
  }
`;

export default GET_TERM_ARTICLES;
