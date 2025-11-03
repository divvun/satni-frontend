/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Collection grouping related concepts. */
export type CollectionType = {
  __typename?: 'CollectionType';
  description?: Maybe<Scalars['String']['output']>;
  /** _id */
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
};

/** Input type for creating/updating language-specific concepts. */
export type ConceptInput = {
  definition?: InputMaybe<Scalars['String']['input']>;
  explanation?: InputMaybe<Scalars['String']['input']>;
  moreInfo?: InputMaybe<Scalars['String']['input']>;
  terms?: InputMaybe<Array<InputMaybe<TermInput>>>;
};

export type ConceptType = {
  __typename?: 'ConceptType';
  collections?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  definition?: Maybe<Scalars['String']['output']>;
  explanation?: Maybe<Scalars['String']['output']>;
  /** _id */
  id?: Maybe<Scalars['ID']['output']>;
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  terms: Array<Maybe<TermType>>;
};

/**
 * Language-specific concept data.
 *
 * Note: This is not a MongoengineObjectType because Concept is an EmbeddedDocument.
 * We create a regular graphene.ObjectType to represent it.
 */
export type ConceptTypeV2 = {
  __typename?: 'ConceptTypeV2';
  definition?: Maybe<Scalars['String']['output']>;
  explanation?: Maybe<Scalars['String']['output']>;
  language: Scalars['String']['output'];
  moreInfo?: Maybe<Scalars['String']['output']>;
  terms?: Maybe<Array<Maybe<TermTypeV2>>>;
};

export type DictEntryType = {
  __typename?: 'DictEntryType';
  Cls?: Maybe<Scalars['String']['output']>;
  dictName: Scalars['String']['output'];
  lookupLemmas?: Maybe<LemmaConnection>;
  srcLang: Scalars['String']['output'];
  targetLang: Scalars['String']['output'];
  translationGroups: Array<Maybe<TranslationGroupType>>;
};


export type DictEntryTypeLookupLemmasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ExampleGroupType = {
  __typename?: 'ExampleGroupType';
  example: Scalars['String']['output'];
  translation: Scalars['String']['output'];
};

/** HFST gives a wordform and a weight. */
export type GeneratorAnalysis = {
  __typename?: 'GeneratorAnalysis';
  weight: Scalars['Float']['output'];
  wordform: Scalars['String']['output'];
};

/** The result of the generation of one paradigm template. */
export type GeneratorResultType = {
  __typename?: 'GeneratorResultType';
  analyses?: Maybe<Array<Maybe<GeneratorAnalysis>>>;
  paradigmTemplate: Scalars['String']['output'];
};

export type LemmaConnection = {
  __typename?: 'LemmaConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LemmaEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `Lemma` and its cursor. */
export type LemmaEdge = {
  __typename?: 'LemmaEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LemmaType>;
};

export type LemmaType = Node & {
  __typename?: 'LemmaType';
  country?: Maybe<Scalars['String']['output']>;
  dialect?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  lemma: Scalars['String']['output'];
  pos?: Maybe<Scalars['String']['output']>;
  presentationLemma: Scalars['String']['output'];
};

/** HFST gives a wordform and a weight. */
export type LemmatiserAnalysis = {
  __typename?: 'LemmatiserAnalysis';
  analysis: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
};

/** Results for all languages. */
export type LemmatiserResultType = {
  __typename?: 'LemmatiserResultType';
  analyses: Array<Maybe<LemmatiserAnalysis>>;
  language: Scalars['String']['output'];
  wordforms: Array<Maybe<Scalars['String']['output']>>;
};

/** Multilingual concept with language-specific data. */
export type MultiLingualConceptType = {
  __typename?: 'MultiLingualConceptType';
  collections?: Maybe<Array<Maybe<CollectionType>>>;
  concepts?: Maybe<Array<Maybe<ConceptTypeV2>>>;
  /** _id */
  id?: Maybe<Scalars['ID']['output']>;
  relatedConcepts?: Maybe<Array<Maybe<MultiLingualConceptType>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a related concept with a specific relation type */
  addRelatedConcept?: Maybe<MultiLingualConceptType>;
  /** Add a term to a concept in a specific language */
  addTerm?: Maybe<MultiLingualConceptType>;
  /** Add concept to a collection */
  addToCollection?: Maybe<MultiLingualConceptType>;
  /** Create a new terminology collection */
  createCollection?: Maybe<CollectionType>;
  /** Create a new multilingual concept */
  createMultilingualConcept?: Maybe<MultiLingualConceptType>;
  /** Remove concept data for a specific language */
  deleteConceptInLanguage?: Maybe<MultiLingualConceptType>;
  /** Delete a multilingual concept */
  deleteMultilingualConcept?: Maybe<Scalars['Boolean']['output']>;
  /** Remove a term by index */
  deleteTerm?: Maybe<MultiLingualConceptType>;
  /** Remove concept from a collection */
  removeFromCollection?: Maybe<MultiLingualConceptType>;
  /** Remove a related concept relationship */
  removeRelatedConcept?: Maybe<MultiLingualConceptType>;
  /** Update or add a concept for a specific language */
  updateConceptInLanguage?: Maybe<MultiLingualConceptType>;
  /** Update a specific term by index */
  updateTerm?: Maybe<MultiLingualConceptType>;
};


export type MutationAddRelatedConceptArgs = {
  conceptId: Scalars['String']['input'];
  related: RelatedConceptInput;
};


export type MutationAddTermArgs = {
  conceptId: Scalars['String']['input'];
  language: Scalars['String']['input'];
  term: TermInput;
};


export type MutationAddToCollectionArgs = {
  collectionId: Scalars['String']['input'];
  conceptId: Scalars['String']['input'];
};


export type MutationCreateCollectionArgs = {
  collectionDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationDeleteConceptInLanguageArgs = {
  conceptId: Scalars['String']['input'];
  language: Scalars['String']['input'];
};


export type MutationDeleteMultilingualConceptArgs = {
  conceptId: Scalars['String']['input'];
};


export type MutationDeleteTermArgs = {
  conceptId: Scalars['String']['input'];
  language: Scalars['String']['input'];
  termIndex: Scalars['Int']['input'];
};


export type MutationRemoveFromCollectionArgs = {
  collectionId: Scalars['String']['input'];
  conceptId: Scalars['String']['input'];
};


export type MutationRemoveRelatedConceptArgs = {
  conceptId: Scalars['String']['input'];
  relatedConceptId: Scalars['String']['input'];
};


export type MutationUpdateConceptInLanguageArgs = {
  conceptData: ConceptInput;
  conceptId: Scalars['String']['input'];
  language: Scalars['String']['input'];
};


export type MutationUpdateTermArgs = {
  conceptId: Scalars['String']['input'];
  language: Scalars['String']['input'];
  term: TermInput;
  termIndex: Scalars['Int']['input'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific collection by name. */
  collectionByName?: Maybe<CollectionType>;
  /** List all available terminology collections. */
  collectionList?: Maybe<Array<Maybe<CollectionType>>>;
  /** @deprecated This query uses the old per-language Concept model. Please migrate to 'multilingualConceptList' which uses the new MultiLingualConcept structure. See MIGRATION_GRAPHQL_V2.md for details. This field will be removed in v3.0 */
  conceptList?: Maybe<Array<Maybe<ConceptType>>>;
  dictEntryList?: Maybe<Array<Maybe<DictEntryType>>>;
  generated?: Maybe<Array<Maybe<GeneratorResultType>>>;
  hasStem?: Maybe<Array<Maybe<StemType>>>;
  lemmatised?: Maybe<Array<Maybe<LemmatiserResultType>>>;
  /** Query multilingual concepts by lemma and languages. Returns concepts that have terms in any of the specified languages. */
  multilingualConceptList?: Maybe<Array<Maybe<MultiLingualConceptType>>>;
  stemList?: Maybe<StemConnection>;
};


export type QueryCollectionByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryConceptListArgs = {
  exact: Scalars['String']['input'];
  srcLangs: Array<InputMaybe<Scalars['String']['input']>>;
  targetLangs: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryDictEntryListArgs = {
  exact: Scalars['String']['input'];
  srcLangs: Array<InputMaybe<Scalars['String']['input']>>;
  targetLangs: Array<InputMaybe<Scalars['String']['input']>>;
  wantedDicts: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryGeneratedArgs = {
  language: Scalars['String']['input'];
  origform: Scalars['String']['input'];
  paradigmTemplates: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryHasStemArgs = {
  exact: Scalars['String']['input'];
  srcLangs: Array<InputMaybe<Scalars['String']['input']>>;
  targetLangs: Array<InputMaybe<Scalars['String']['input']>>;
  wantedDicts: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryLemmatisedArgs = {
  lookupString: Scalars['String']['input'];
};


export type QueryMultilingualConceptListArgs = {
  exact: Scalars['String']['input'];
  languages: Array<InputMaybe<Scalars['String']['input']>>;
};


export type QueryStemListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mode: Scalars['String']['input'];
  search: Scalars['String']['input'];
  srcLangs: Array<InputMaybe<Scalars['String']['input']>>;
  targetLangs: Array<InputMaybe<Scalars['String']['input']>>;
  wantedDicts: Array<InputMaybe<Scalars['String']['input']>>;
};

/** Input type for adding related concepts. */
export type RelatedConceptInput = {
  /** MultiLingualConcept ObjectId */
  conceptId: Scalars['String']['input'];
  /** Relation type (e.g., 'broader', 'narrower') */
  relationType: Scalars['String']['input'];
};

export type RestrictionType = {
  __typename?: 'RestrictionType';
  attributes?: Maybe<Scalars['String']['output']>;
  restriction?: Maybe<Scalars['String']['output']>;
};

export type StemConnection = {
  __typename?: 'StemConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StemEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Stem` and its cursor. */
export type StemEdge = {
  __typename?: 'StemEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StemType>;
};

/**
 * GraphQL type that exposes Lemma objects with the Stem interface.
 *
 * This maintains backward compatibility with the old Stem model while
 * using Lemma objects as the data source. The availability data
 * (srclangs, targetlangs, dicts) is computed dynamically and attached
 * to the Lemma object as _availability.
 */
export type StemType = Node & {
  __typename?: 'StemType';
  country?: Maybe<Scalars['String']['output']>;
  dialect?: Maybe<Scalars['String']['output']>;
  dicts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  language: Scalars['String']['output'];
  lemma: Scalars['String']['output'];
  pos?: Maybe<Scalars['String']['output']>;
  presentationLemma: Scalars['String']['output'];
  searchStem?: Maybe<Scalars['String']['output']>;
  srclangs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  stem?: Maybe<Scalars['String']['output']>;
  targetlangs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Input type for creating/updating terms. */
export type TermInput = {
  /** Lemma ObjectId */
  expressionId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  sanctioned?: InputMaybe<Scalars['Boolean']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type TermType = {
  __typename?: 'TermType';
  expression?: Maybe<LemmaType>;
  note?: Maybe<Scalars['String']['output']>;
  sanctioned?: Maybe<Scalars['Boolean']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** Term with expression reference to Lemma. */
export type TermTypeV2 = {
  __typename?: 'TermTypeV2';
  expression?: Maybe<LemmaType>;
  note?: Maybe<Scalars['String']['output']>;
  sanctioned?: Maybe<Scalars['Boolean']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type TranslationGroupType = {
  __typename?: 'TranslationGroupType';
  exampleGroups?: Maybe<Array<Maybe<ExampleGroupType>>>;
  restriction?: Maybe<RestrictionType>;
  translationLemmas?: Maybe<LemmaConnection>;
};


export type TranslationGroupTypeTranslationLemmasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DictArticlesQueryVariables = Exact<{
  lemma: Scalars['String']['input'];
  srcLangs: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  targetLangs: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  wantedDicts: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type DictArticlesQuery = { __typename?: 'Query', dictEntryList?: Array<{ __typename?: 'DictEntryType', dictName: string, srcLang: string, targetLang: string, lookupLemmas?: { __typename?: 'LemmaConnection', edges: Array<{ __typename?: 'LemmaEdge', node?: { __typename?: 'LemmaType', lemma: string, presentationLemma: string, language: string, pos?: string | null, dialect?: string | null, country?: string | null } | null } | null> } | null, translationGroups: Array<{ __typename?: 'TranslationGroupType', translationLemmas?: { __typename?: 'LemmaConnection', edges: Array<{ __typename?: 'LemmaEdge', node?: { __typename?: 'LemmaType', lemma: string, presentationLemma: string, language: string, pos?: string | null, dialect?: string | null, country?: string | null } | null } | null> } | null, restriction?: { __typename?: 'RestrictionType', restriction?: string | null, attributes?: string | null } | null, exampleGroups?: Array<{ __typename?: 'ExampleGroupType', example: string, translation: string } | null> | null } | null> } | null> | null };

export type AllLemmasQueryVariables = Exact<{
  inputValue: Scalars['String']['input'];
  searchMode: Scalars['String']['input'];
  srcLangs: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  targetLangs: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  wantedDicts: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllLemmasQuery = { __typename?: 'Query', stemList?: { __typename?: 'StemConnection', totalCount?: number | null, edges: Array<{ __typename?: 'StemEdge', node?: { __typename?: 'StemType', stem?: string | null, srclangs?: Array<string | null> | null, targetlangs?: Array<string | null> | null } | null } | null>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } | null };

export type GeneratedQueryVariables = Exact<{
  origform: Scalars['String']['input'];
  language: Scalars['String']['input'];
  paradigmTemplates: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type GeneratedQuery = { __typename?: 'Query', generated?: Array<{ __typename?: 'GeneratorResultType', paradigmTemplate: string, analyses?: Array<{ __typename?: 'GeneratorAnalysis', wordform: string, weight: number } | null> | null } | null> | null };

export type TermArticlesQueryVariables = Exact<{
  lemma: Scalars['String']['input'];
  srcLangs: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  targetLangs: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type TermArticlesQuery = { __typename?: 'Query', conceptList?: Array<{ __typename?: 'ConceptType', name: string, collections?: Array<string | null> | null, definition?: string | null, explanation?: string | null, terms: Array<{ __typename?: 'TermType', note?: string | null, source?: string | null, status?: string | null, expression?: { __typename?: 'LemmaType', lemma: string, presentationLemma: string, language: string, pos?: string | null, dialect?: string | null, country?: string | null } | null } | null> } | null> | null };

export type HasStemQueryVariables = Exact<{
  stem: Scalars['String']['input'];
  srcLangs: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  targetLangs: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  wantedDicts: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type HasStemQuery = { __typename?: 'Query', hasStem?: Array<{ __typename?: 'StemType', stem?: string | null } | null> | null };


export const DictArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DictArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lemma"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"srcLangs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetLangs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wantedDicts"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dictEntryList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"exact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lemma"}}},{"kind":"Argument","name":{"kind":"Name","value":"srcLangs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"srcLangs"}}},{"kind":"Argument","name":{"kind":"Name","value":"targetLangs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetLangs"}}},{"kind":"Argument","name":{"kind":"Name","value":"wantedDicts"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wantedDicts"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dictName"}},{"kind":"Field","name":{"kind":"Name","value":"srcLang"}},{"kind":"Field","name":{"kind":"Name","value":"targetLang"}},{"kind":"Field","name":{"kind":"Name","value":"lookupLemmas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lemma"}},{"kind":"Field","name":{"kind":"Name","value":"presentationLemma"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"pos"}},{"kind":"Field","name":{"kind":"Name","value":"dialect"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translationGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translationLemmas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lemma"}},{"kind":"Field","name":{"kind":"Name","value":"presentationLemma"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"pos"}},{"kind":"Field","name":{"kind":"Name","value":"dialect"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"restriction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restriction"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exampleGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"example"}},{"kind":"Field","name":{"kind":"Name","value":"translation"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DictArticlesQuery, DictArticlesQueryVariables>;
export const AllLemmasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllLemmas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchMode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"srcLangs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetLangs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wantedDicts"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stemList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"mode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"srcLangs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"srcLangs"}}},{"kind":"Argument","name":{"kind":"Name","value":"targetLangs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetLangs"}}},{"kind":"Argument","name":{"kind":"Name","value":"wantedDicts"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wantedDicts"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stem"}},{"kind":"Field","name":{"kind":"Name","value":"srclangs"}},{"kind":"Field","name":{"kind":"Name","value":"targetlangs"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<AllLemmasQuery, AllLemmasQueryVariables>;
export const GeneratedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Generated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"origform"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paradigmTemplates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"origform"},"value":{"kind":"Variable","name":{"kind":"Name","value":"origform"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}},{"kind":"Argument","name":{"kind":"Name","value":"paradigmTemplates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paradigmTemplates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paradigmTemplate"}},{"kind":"Field","name":{"kind":"Name","value":"analyses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wordform"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}}]}}]}}]} as unknown as DocumentNode<GeneratedQuery, GeneratedQueryVariables>;
export const TermArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TermArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lemma"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"srcLangs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetLangs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"exact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lemma"}}},{"kind":"Argument","name":{"kind":"Name","value":"srcLangs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"srcLangs"}}},{"kind":"Argument","name":{"kind":"Name","value":"targetLangs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetLangs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"collections"}},{"kind":"Field","name":{"kind":"Name","value":"definition"}},{"kind":"Field","name":{"kind":"Name","value":"explanation"}},{"kind":"Field","name":{"kind":"Name","value":"terms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"expression"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lemma"}},{"kind":"Field","name":{"kind":"Name","value":"presentationLemma"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"pos"}},{"kind":"Field","name":{"kind":"Name","value":"dialect"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TermArticlesQuery, TermArticlesQueryVariables>;
export const HasStemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HasStem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stem"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"srcLangs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetLangs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wantedDicts"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasStem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"exact"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stem"}}},{"kind":"Argument","name":{"kind":"Name","value":"srcLangs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"srcLangs"}}},{"kind":"Argument","name":{"kind":"Name","value":"targetLangs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetLangs"}}},{"kind":"Argument","name":{"kind":"Name","value":"wantedDicts"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wantedDicts"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stem"}}]}}]}}]} as unknown as DocumentNode<HasStemQuery, HasStemQueryVariables>;