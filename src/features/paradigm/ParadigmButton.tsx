import React, { useEffect, useState } from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/react/macro';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { tableRowToParadigmList } from '../../utils';
import { AdjTableRows } from './AdjParadigm';
import { NounTableRows } from './NounParadigm';
import { VerbTableRows } from './VerbParadigm';
import { hasParadigm } from './paradigmService';

interface ParadigmButtonProps {
  lemma: string;
  language: string;
  pos: string;
  onClick: () => void;
  classes: {
    icons: string;
  };
}

interface TableDict {
  [key: string]: {
    [language: string]: any;
  };
}

const ParadigmButton: React.FC<ParadigmButtonProps> = ({
  lemma,
  language,
  pos,
  onClick,
  classes,
}) => {
  const [paradigmExists, setParadigmExists] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const tableDict: TableDict = {
    A: AdjTableRows,
    N: NounTableRows,
    V: VerbTableRows,
  };

  useEffect(() => {
    const checkParadigm = async () => {
      if (pos in tableDict && language in tableDict[pos]) {
        setIsLoading(true);
        const templates = tableRowToParadigmList(
          tableDict[pos][language],
        ).slice(0, 1);
        const exists = await hasParadigm(lemma, language, templates);
        setParadigmExists(exists);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    checkParadigm();
  }, [lemma, language, pos]);

  if (
    pos in tableDict &&
    language in tableDict[pos] &&
    paradigmExists &&
    !isLoading
  ) {
    return (
      <Tooltip title={<Trans>Show paradigm for this word</Trans>}>
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
    <Tooltip title={<Trans>There is no paradigm for this word</Trans>}>
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

export default ParadigmButton;
