import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import HAS_STEM from '../../operations/queries/hasStem';
import { locationParser } from '../../utils';
import Stem from './Stem';

const DictTargetStem = ({ stem, restriction }) => {
  const { lemma } = stem;
  const langsDictsQueryResult = useQuery(GET_LANGS_DICTS);
  const { srcLangs, targetLangs } = langsDictsQueryResult.data;
  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  const { data, loading } = useQuery(HAS_STEM, {
    variables: {
      stem: lemma,
      srcLangs,
      targetLangs,
      wantedDicts,
    },
  });

  if (loading) return <CircularProgress size={20} />;

  return (
    <Stem
      stem={stem}
      restriction={restriction == null ? '' : restriction}
      withLink={data && data.hasStem.length > 0}
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
