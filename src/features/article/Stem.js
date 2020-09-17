import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import KorpButton from 'features/korp/KorpButton';
import ParadigmButton from 'features/paradigm/ParadigmButton';
import ParadigmDialog from 'features/paradigm/ParadigmDialog';

const useStyles = makeStyles({
  stemContainer: {
    width: '100%',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: 'transparent'
  },
  stem: {
    flexGrow: 1
  },
  lemma: {
    fontWeight: 'normal'
  },
  rightGroup: {
    float: 'right',
    justify: 'space-evenly'
  },
  icons: {
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 5
  }
});

const Stem = ({ stem, restriction, withLink, lemmaHandler }) => {
  const classes = useStyles();
  const {lemma, pos, language, dialect, country} = stem;
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
        <Typography
          component='span'
          className={classes.lemma}>
          {(withLink) ?
            <Link to={`/${lemma}`}>
              {lemma}
            </Link> :
            <>{lemma}</>
          }
        </Typography>
        {restriction && <Typography component='span'> ({restriction.restriction})</Typography>}
        {!lemma.includes(' ') && <>
          <span className={classes.rightGroup}>
            {pos && <Typography
              component='span'
              color='textSecondary'
              className={classes.pos}>(<Trans id={pos}/>)</Typography>}
            <ParadigmButton
              lemma={lemma}
              pos={pos}
              language={language}
              onClick={handleClickParadigmDialog}
              classes={classes}
            />
            <KorpButton
              lemma={lemma}
              language={language}
              classes={classes}
            />
          </span>
          <ParadigmDialog
            lemma={lemma}
            pos={pos}
            language={language}
            open={openParadigm}
            onClose={handleCloseParadigmDialog} />
        </>
        }
      </Typography>
      {(dialect || country) && <Typography>
        {dialect && <Typography component='span'>Dialect: {dialect} </Typography>}
        {country && <Typography component='span'>Country: {country}</Typography>}
      </Typography>}
    </>
  );
};

export default Stem;
