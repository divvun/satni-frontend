import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import IconButton from '@mui/material/IconButton';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Tooltip from '@mui/material/Tooltip';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ViewHeadlineOutlined from '@mui/icons-material/ViewHeadlineOutlined';
import { useEffect, useState } from 'react';

import { isLemmaInKorp } from './korpService';

interface KorpButtonProps {
  language: string;
  lemma: string;
  classes: {
    icons: string;
  };
}

const KorpButton: React.FC<KorpButtonProps> = ({
  language,
  lemma,
  classes,
}) => {
  const korpLangs = new Set(['sma', 'sme', 'smj', 'smn', 'sms']);
  const [lemmaExists, setLemmaExists] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const korpAddress = `https://gtweb.uit.no/korp/${language}/#?cqp=[lemma%3D"${lemma}"]&search_tab=1&within=sentence&search=cqp`;

  useEffect(() => {
    const checkLemma = async () => {
      setIsLoading(true);
      const exists = await isLemmaInKorp(language, lemma);
      setLemmaExists(exists);
      setIsLoading(false);
    };

    if (korpLangs.has(language)) {
      checkLemma();
    } else {
      setIsLoading(false);
    }
  }, [language, lemma]);

  if (korpLangs.has(language) && lemmaExists && !isLoading) {
    return (
      // @ts-ignore - Material-UI v4 compatibility
      <Tooltip
        title={<Trans>Show this word in our corpus</Trans>}
        aria-label={<Trans>Show this word in our corpus</Trans>}
      >
        {/* @ts-ignore - Material-UI v4 compatibility */}
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
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ViewHeadlineOutlined />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Tooltip
      title={<Trans>This word is not found in our corpus</Trans>}
      aria-label={<Trans>This word is not found in our corpus</Trans>}
    >
      <span>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <IconButton
          disabled
          className={classes.icons}
          component="span"
          aria-label="Corpus"
        >
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ViewHeadlineOutlined />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default KorpButton;
