import { gql, TypedDocumentNode } from "@apollo/client";

export interface GetInterfaceLanguageQuery {
  interfaceLanguage: string;
}

export const GET_INTERFACE_LANGUAGE: TypedDocumentNode<
  GetInterfaceLanguageQuery,
  never
> = gql`
  query GetInterfaceLanguage {
    interfaceLanguage @client
  }
`;
