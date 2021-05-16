import React from 'react';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import Stem from './Stem';
import HAS_STEM from '../../operations/queries/hasStem';

const DictTargetStem = ({ stem, restriction }) => {
  const { lemma } = stem;

  const { data, loading } = useQuery(HAS_STEM, {
    variables: {
      stem: lemma,
    },
  });

  if (loading) return <CircularProgress size={20} />;

  return (
    <Stem
      stem={stem}
      restriction={restriction}
      withLink={data && data.hasStem.length}
    />
  );
};

DictTargetStem.propTypes = {
  stem: PropTypes.shape.isRequired,
  restriction: PropTypes.shape,
};

DictTargetStem.defaultProps = {
  restriction: '',
};

export default DictTargetStem;
