/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query DictArticles(\n    $lemma: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n    $wantedDicts: [String]!\n  ) {\n    dictEntryList(\n      exact: $lemma\n      srcLangs: $srcLangs\n      targetLangs: $targetLangs\n      wantedDicts: $wantedDicts\n    ) {\n      dictName\n      srcLang\n      targetLang\n      lookupLemmas {\n        edges {\n          node {\n            lemma\n            presentationLemma\n            language\n            pos\n            dialect\n            country\n          }\n        }\n      }\n      translationGroups {\n        translationLemmas {\n          edges {\n            node {\n              lemma\n              presentationLemma\n              language\n              pos\n              dialect\n              country\n            }\n          }\n        }\n        restriction {\n          restriction\n          attributes\n        }\n        exampleGroups {\n          example\n          translation\n        }\n      }\n    }\n  }\n": typeof types.DictArticlesDocument,
    "\n  query AllLemmas(\n    $inputValue: String!\n    $searchMode: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n    $wantedDicts: [String]!\n    $after: String\n  ) {\n    stemList(\n      first: 100\n      search: $inputValue\n      mode: $searchMode\n      srcLangs: $srcLangs\n      targetLangs: $targetLangs\n      wantedDicts: $wantedDicts\n      after: $after\n    ) {\n      totalCount\n      edges {\n        node {\n          stem\n          srclangs\n          targetlangs\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": typeof types.AllLemmasDocument,
    "\n  query Generated(\n    $origform: String!\n    $language: String!\n    $paradigmTemplates: [String]!\n  ) {\n    generated(\n      origform: $origform\n      language: $language\n      paradigmTemplates: $paradigmTemplates\n    ) {\n      paradigmTemplate\n      analyses {\n        wordform\n        weight\n      }\n    }\n  }\n": typeof types.GeneratedDocument,
    "\n  query TermArticles(\n    $lemma: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n  ) {\n    conceptList(exact: $lemma, srcLangs: $srcLangs, targetLangs: $targetLangs) {\n      name\n      collections\n      definition\n      explanation\n      terms {\n        note\n        source\n        status\n        expression {\n          lemma\n          presentationLemma\n          language\n          pos\n          dialect\n          country\n        }\n      }\n    }\n  }\n": typeof types.TermArticlesDocument,
    "\n  query HasStem(\n    $stem: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n    $wantedDicts: [String]!\n  ) {\n    hasStem(\n      exact: $stem\n      srcLangs: $srcLangs\n      targetLangs: $targetLangs\n      wantedDicts: $wantedDicts\n    ) {\n      stem\n    }\n  }\n": typeof types.HasStemDocument,
};
const documents: Documents = {
    "\n  query DictArticles(\n    $lemma: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n    $wantedDicts: [String]!\n  ) {\n    dictEntryList(\n      exact: $lemma\n      srcLangs: $srcLangs\n      targetLangs: $targetLangs\n      wantedDicts: $wantedDicts\n    ) {\n      dictName\n      srcLang\n      targetLang\n      lookupLemmas {\n        edges {\n          node {\n            lemma\n            presentationLemma\n            language\n            pos\n            dialect\n            country\n          }\n        }\n      }\n      translationGroups {\n        translationLemmas {\n          edges {\n            node {\n              lemma\n              presentationLemma\n              language\n              pos\n              dialect\n              country\n            }\n          }\n        }\n        restriction {\n          restriction\n          attributes\n        }\n        exampleGroups {\n          example\n          translation\n        }\n      }\n    }\n  }\n": types.DictArticlesDocument,
    "\n  query AllLemmas(\n    $inputValue: String!\n    $searchMode: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n    $wantedDicts: [String]!\n    $after: String\n  ) {\n    stemList(\n      first: 100\n      search: $inputValue\n      mode: $searchMode\n      srcLangs: $srcLangs\n      targetLangs: $targetLangs\n      wantedDicts: $wantedDicts\n      after: $after\n    ) {\n      totalCount\n      edges {\n        node {\n          stem\n          srclangs\n          targetlangs\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n": types.AllLemmasDocument,
    "\n  query Generated(\n    $origform: String!\n    $language: String!\n    $paradigmTemplates: [String]!\n  ) {\n    generated(\n      origform: $origform\n      language: $language\n      paradigmTemplates: $paradigmTemplates\n    ) {\n      paradigmTemplate\n      analyses {\n        wordform\n        weight\n      }\n    }\n  }\n": types.GeneratedDocument,
    "\n  query TermArticles(\n    $lemma: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n  ) {\n    conceptList(exact: $lemma, srcLangs: $srcLangs, targetLangs: $targetLangs) {\n      name\n      collections\n      definition\n      explanation\n      terms {\n        note\n        source\n        status\n        expression {\n          lemma\n          presentationLemma\n          language\n          pos\n          dialect\n          country\n        }\n      }\n    }\n  }\n": types.TermArticlesDocument,
    "\n  query HasStem(\n    $stem: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n    $wantedDicts: [String]!\n  ) {\n    hasStem(\n      exact: $stem\n      srcLangs: $srcLangs\n      targetLangs: $targetLangs\n      wantedDicts: $wantedDicts\n    ) {\n      stem\n    }\n  }\n": types.HasStemDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DictArticles(\n    $lemma: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n    $wantedDicts: [String]!\n  ) {\n    dictEntryList(\n      exact: $lemma\n      srcLangs: $srcLangs\n      targetLangs: $targetLangs\n      wantedDicts: $wantedDicts\n    ) {\n      dictName\n      srcLang\n      targetLang\n      lookupLemmas {\n        edges {\n          node {\n            lemma\n            presentationLemma\n            language\n            pos\n            dialect\n            country\n          }\n        }\n      }\n      translationGroups {\n        translationLemmas {\n          edges {\n            node {\n              lemma\n              presentationLemma\n              language\n              pos\n              dialect\n              country\n            }\n          }\n        }\n        restriction {\n          restriction\n          attributes\n        }\n        exampleGroups {\n          example\n          translation\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').DictArticlesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllLemmas(\n    $inputValue: String!\n    $searchMode: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n    $wantedDicts: [String]!\n    $after: String\n  ) {\n    stemList(\n      first: 100\n      search: $inputValue\n      mode: $searchMode\n      srcLangs: $srcLangs\n      targetLangs: $targetLangs\n      wantedDicts: $wantedDicts\n      after: $after\n    ) {\n      totalCount\n      edges {\n        node {\n          stem\n          srclangs\n          targetlangs\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n"): typeof import('./graphql').AllLemmasDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Generated(\n    $origform: String!\n    $language: String!\n    $paradigmTemplates: [String]!\n  ) {\n    generated(\n      origform: $origform\n      language: $language\n      paradigmTemplates: $paradigmTemplates\n    ) {\n      paradigmTemplate\n      analyses {\n        wordform\n        weight\n      }\n    }\n  }\n"): typeof import('./graphql').GeneratedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TermArticles(\n    $lemma: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n  ) {\n    conceptList(exact: $lemma, srcLangs: $srcLangs, targetLangs: $targetLangs) {\n      name\n      collections\n      definition\n      explanation\n      terms {\n        note\n        source\n        status\n        expression {\n          lemma\n          presentationLemma\n          language\n          pos\n          dialect\n          country\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').TermArticlesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HasStem(\n    $stem: String!\n    $srcLangs: [String]!\n    $targetLangs: [String]!\n    $wantedDicts: [String]!\n  ) {\n    hasStem(\n      exact: $stem\n      srcLangs: $srcLangs\n      targetLangs: $targetLangs\n      wantedDicts: $wantedDicts\n    ) {\n      stem\n    }\n  }\n"): typeof import('./graphql').HasStemDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
