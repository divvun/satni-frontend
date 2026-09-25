import { gql, TypedDocumentNode } from '@apollo/client';
import type { Query, QueryKorpLemmaExistsArgs } from '../../graphql/graphql';

export interface KorpLemmaExistsQuery {
  korpLemmaExists: Query['korpLemmaExists'];
}

export type KorpLemmaExistsVariables = QueryKorpLemmaExistsArgs;

export const GET_KORP_LEMMA_EXISTS: TypedDocumentNode<
  KorpLemmaExistsQuery,
  KorpLemmaExistsVariables
> = gql`
  query KorpLemmaExists($language: String!, $lemma: String!) {
    korpLemmaExists(language: $language, lemma: $lemma)
  }
`;
