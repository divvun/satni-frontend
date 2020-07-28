import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';

import Stem from './Stem';

export const HAS_STEM = gql`
  query HasStem($stem: String!) {
    hasStem(exact: $stem) {
      stem
    }
  }
`;

const DictTargetStem = ({ stem, restriction }) => {
  const {lemma} = stem;

  const {data, loading, error} = useQuery(
    HAS_STEM, {
      variables: {
        stem: lemma
      }
    }
  );

  if (loading) return <CircularProgress size={20} />;

  return <Stem
    stem={stem}
    restriction={restriction}
    withLink={(data && data.hasStem.length)} />;
};

export default DictTargetStem;
