import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import KorpButton from '../korp/KorpButton';
import ParadigmButton from '../paradigm/ParadigmButton';
import ParadigmDialog from '../paradigm/ParadigmDialog';
import SpeakerButton from '../speaker/SpeakerButton';

import PresentationLemma from './PresentationLemma';

const useStyles = makeStyles({
  stemContainer: {
    width: '100%',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  stem: {
    flexGrow: 1,
  },
  lemma: {
    fontWeight: 'normal',
  },
  rightGroup: {
    float: 'right',
    justify: 'space-evenly',
  },
  icons: {
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

const Stem = ({ stem, restriction, withLink }) => {
  const classes = useStyles();
  const { lemma, presentationLemma, pos, language, dialect, country } = stem;
  const [openParadigm, setOpenParadigm] = useState(false);

  const handleClickParadigmDialog = () => {
    setOpenParadigm(true);
  };

  const handleCloseParadigmDialog = () => {
    setOpenParadigm(false);
  };

  return (
    <>
      <Typography className={classes.stemContainer}>
        {withLink ? (
          <Link to={`/${lemma}`}>
            <PresentationLemma presentationLemma={presentationLemma} />
          </Link>
        ) : (
          <PresentationLemma presentationLemma={presentationLemma} />
        )}
        {restriction && (
          <Typography component="span"> ({restriction.restriction})</Typography>
        )}
        {!lemma.includes(' ') && (
          <>
            <span className={classes.rightGroup}>
              {pos && (
                <Typography
                  component="span"
                  color="textSecondary"
                  className={classes.pos}
                >
                  (<Trans id={pos} />)
                </Typography>
              )}
              {['sme', 'sma', 'smj'].includes(language) && (
                <SpeakerButton
                  text={lemma}
                  language={language}
                  classes={classes}
                />
              )}
              <ParadigmButton
                lemma={lemma}
                pos={pos}
                language={language}
                onClick={handleClickParadigmDialog}
                classes={classes}
              />
              <KorpButton lemma={lemma} language={language} classes={classes} />
            </span>
            <ParadigmDialog
              lemma={lemma}
              pos={pos}
              language={language}
              open={openParadigm}
              onClose={handleCloseParadigmDialog}
            />
          </>
        )}
      </Typography>
      {(dialect || country) && (
        <Typography>
          {dialect && (
            <Typography component="span">
              <Trans>Dialect</Trans>: <Trans id={dialect} />{' '}
            </Typography>
          )}
          {country && (
            <Typography component="span">
              <Trans>Country</Trans>: <Trans id={country} />
            </Typography>
          )}
        </Typography>
      )}
    </>
  );
};

Stem.propTypes = {
  stem: PropTypes.shape.isRequired,
  restriction: PropTypes.shape,
  withLink: PropTypes.bool,
};

Stem.defaultProps = {
  restriction: '',
  withLink: false,
};

export default Stem;
