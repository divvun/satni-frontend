import { gql, TypedDocumentNode } from "@apollo/client";

export interface GetLangsAndDictsQuery {
  wantedDicts: string[];
  srcLangs: string[];
  targetLangs: string[];
}

const GET_LANGS_DICTS: TypedDocumentNode<GetLangsAndDictsQuery, never> = gql`
  query GetLangsAndDicts {
    wantedDicts @client
    srcLangs @client
    targetLangs @client
  }
`;

export default GET_LANGS_DICTS;
