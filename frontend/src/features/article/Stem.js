import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import ViewHeadlineOutlined from '@material-ui/icons/ViewHeadlineOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    fontWeight: 'bold'
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
  const {lemma, pos, language} = stem;
  const [openParadigm, setOpenParadigm] = React.useState(false);

  const handleClickParadigmDialog = () => {
    setOpenParadigm(true);
  };

  const handleCloseParadigmDialog = () => {
    setOpenParadigm(false);
  };

  return (
    <Typography className={classes.stemContainer}>
      <Typography
        component='span'
        className={classes.lemma}>
        {(withLink) ?
          <Link
            component="button"
            onClick={() => lemmaHandler(lemma)}
          >
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
            className={classes.pos}>({pos})</Typography>}
          <IconButton
            className={classes.icons}
            component='span'
            aria-label='Paradigm'
            onClick={handleClickParadigmDialog}>
            <InfoOutlined />
          </IconButton>
          <IconButton
            className={classes.icons}
            component='span'
            aria-label='Corpus'>
            <ViewHeadlineOutlined />
          </IconButton>
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
  );
};

export default Stem;
