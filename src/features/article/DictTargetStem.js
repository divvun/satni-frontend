import React from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

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

  const {data, loading} = useQuery(
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

DictTargetStem.propTypes = {
  stem: PropTypes.object.isRequired,
  restriction: PropTypes.object.isRequired
};

export default DictTargetStem;
