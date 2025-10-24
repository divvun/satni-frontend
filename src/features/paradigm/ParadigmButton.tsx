import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import IconButton from '@material-ui/core/IconButton';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Tooltip from '@material-ui/core/Tooltip';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import GET_NOUN from '../../operations/queries/getNoun';
import { tableRowToParadigmList } from '../../utils';
import { AdjTableRows } from './AdjParadigm';
import { NounTableRows } from './NounParadigm';
import { VerbTableRows } from './VerbParadigm';

interface ParadigmButtonProps {
  lemma: string;
  language: string;
  pos: string;
  onClick: () => void;
  classes: {
    icons: string;
  };
}

interface GeneratedData {
  generated: any[];
}

interface TableDict {
  [key: string]: {
    [language: string]: any;
  };
}

const ParadigmButton: React.FC<ParadigmButtonProps> = ({ lemma, language, pos, onClick, classes }) => {
  const tableDict: TableDict = {
    A: AdjTableRows,
    N: NounTableRows,
    V: VerbTableRows,
  };

  const { data } = useQuery<GeneratedData>(GET_NOUN, {
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
      // @ts-ignore - Material-UI v4 compatibility
      <Tooltip
        title={<Trans>Show paradigm for this word</Trans>}
        aria-label={<Trans>Show paradigm for this word</Trans>}
      >
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <IconButton
          className={classes.icons}
          component="span"
          aria-label="Paradigm"
          onClick={onClick}
          color="primary"
        >
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <InfoOutlined />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Tooltip
      title={<Trans>There is no paradigm for this word</Trans>}
      aria-label={<Trans>There is no paradigm for this word</Trans>}
    >
      <span>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <IconButton
          disabled
          className={classes.icons}
          component="span"
          aria-label="Paradigm"
          onClick={onClick}
          color="primary"
        >
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <InfoOutlined />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ParadigmButton;