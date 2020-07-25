import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import ViewHeadlineOutlined from '@material-ui/icons/ViewHeadlineOutlined'

import ParadigmDialog from 'features/paradigm/ParadigmDialog'

const useStyles = makeStyles({
  lemma: {
    fontWeight: 'bold'
  },
  pos: {
  }
});

const Stem = ({ stem, restriction }) => {
  const {lemma, pos, language} = stem;
  const [openParadigm, setOpenParadigm] = React.useState(false);
  const classes = useStyles();

  const handleClickParadigmDialog = () => {
    setOpenParadigm(true)
  }

  const handleCloseParadigmDialog = () => {
    setOpenParadigm(false)
  }

  return (
    <>
      <Typography>
        <Link component='a' href={`/details?lemma=${lemma}&lang=${language}&pos=${pos}`}>
        {pos && <Typography component='span' color='textSecondary' className={classes.pos}>({pos}) </Typography>}
        <Typography component='span' className={classes.lemma}>
            {lemma}
          </Typography>
          {restriction && <Typography component='span' className={classes.pos}> ({restriction.restriction})</Typography>}
        </Link>
        <IconButton aria-label="Paradigm" component="span" onClick={handleClickParadigmDialog}>
          <InfoOutlined/>
        </IconButton>
        <IconButton aria-label="Corpus" component="span">
          <ViewHeadlineOutlined/>
        </IconButton>
      </Typography>
      <ParadigmDialog
        lemma={lemma}
        pos={pos}
        language={language}
        open={openParadigm}
        onClose={handleCloseParadigmDialog} />
    </>
  );
};

export default Stem;
