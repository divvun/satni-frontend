import { Trans } from '@lingui/macro';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ViewHeadlineOutlined from '@material-ui/icons/ViewHeadlineOutlined';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isLemmaInKorp } from './korpSlice';

const KorpButton = ({ language, lemma, classes }) => {
  const korpLangs = new Set(['sma', 'sme', 'smj', 'smn', 'sms']);
  const korp = useSelector((state) => state.korp);
  const dispatch = useDispatch();
  const korpAddress = `https://gtweb.uit.no/korp/${language}/#?cqp=[lemma%3D"${lemma}"]&search_tab=1&within=sentence&search=cqp`;
  useEffect(() => {
    dispatch(isLemmaInKorp(language, lemma));
  }, [dispatch, language, lemma]);

  if (korpLangs.has(language) && korp && korp.lemmaExists) {
    return (
      <Tooltip
        title={<Trans>Show this word in our corpus</Trans>}
        aria-label={<Trans>Show this word in our corpus</Trans>}
      >
        <IconButton
          className={classes.icons}
          component="span"
          aria-label="Corpus"
          color="primary"
          onClick={() => {
            const a = document.createElement('a');
            a.href = korpAddress;
            a.target = '_blank';
            a.rel = 'noopener';
            a.click();
          }}
        >
          <ViewHeadlineOutlined />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Tooltip
      title={<Trans>This word is not found in our corpus</Trans>}
      aria-label={<Trans>This word is not found in our corpus</Trans>}
    >
      <span>
        <IconButton
          disabled
          className={classes.icons}
          component="span"
          aria-label="Corpus"
        >
          <ViewHeadlineOutlined />
        </IconButton>
      </span>
    </Tooltip>
  );
};

KorpButton.propTypes = {
  language: PropTypes.string.isRequired,
  lemma: PropTypes.string.isRequired,
  classes: PropTypes.shape.isRequired,
};

export default KorpButton;
