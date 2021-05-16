import { gql } from '@apollo/client';

const GET_NOUN = gql`
  query paradigm($text: String!, $lang: String!, $pos: String!) {
    paradigm(text: $text, lang: $lang, pos: $pos)
      @rest(
        type: "Paradigm"
        path: "smi.cgi?{args}&mode=full&action=paradigm&json=true"
      ) {
      analyses
    }
  }
`;

export default GET_NOUN;
