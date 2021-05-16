import { gql } from '@apollo/client';

const GET_TERM_ARTICLES = gql`
  query TermArticles($lemma: String!, $wantedLangs: [String]!) {
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
