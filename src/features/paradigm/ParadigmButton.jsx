import { useQuery } from '@apollo/client';
import { Trans } from '@lingui/macro';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import PropTypes from 'prop-types';
import GET_NOUN from '../../operations/queries/getNoun';
import { tableRowToParadigmList } from '../../utils';
import { AdjTableRows } from './AdjParadigm';
import { NounTableRows } from './NounParadigm';
import { VerbTableRows } from './VerbParadigm';

const tableDict = {
  A: AdjTableRows,
  N: NounTableRows,
  V: VerbTableRows,
};

const ParadigmButton = ({ lemma, language, pos, onClick, classes }) => {
  const { data } = useQuery(GET_NOUN, {
    variables: {
      origform: lemma,
      language,
      paradigmTemplates:
        pos in tableDict && language in tableDict[pos]
          ? tableRowToParadigmList(tableDict[pos][language]).slice(0, 1)
          : [],
    },
  });

  if (
    pos in tableDict &&
    language in tableDict[pos] &&
    data &&
    data.generated.length > 0
  ) {
    return (
      <Tooltip
        title={<Trans>Show paradigm for this word</Trans>}
        aria-label={<Trans>Show paradigm for this word</Trans>}
      >
        <IconButton
          className={classes.icons}
          component="span"
          aria-label="Paradigm"
          onClick={onClick}
          color="primary"
        >
          <InfoOutlined />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Tooltip
      title={<Trans>There is no paradigm for this word</Trans>}
      aria-label={<Trans>There is no paradigm for this word</Trans>}
    >
      <span>
        <IconButton
          disabled
          className={classes.icons}
          component="span"
          aria-label="Paradigm"
          onClick={onClick}
          color="primary"
        >
          <InfoOutlined />
        </IconButton>
      </span>
    </Tooltip>
  );
};

ParadigmButton.propTypes = {
  lemma: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.shape.isRequired,
};

export default ParadigmButton;
