import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import ViewHeadlineOutlined from '@material-ui/icons/ViewHeadlineOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ParadigmDialog from 'features/paradigm/ParadigmDialog';

const HAS_STEM = gql`
  query HasStem($stem: String!) {
    hasStem(exact: $stem) {
      stem
    }
  }
`;

const useStyles = makeStyles({
  stemContainer: {
    width: '100%',
    borderStyle: 'dotted',
    borderWidth: 1
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

const Stem = ({ stem, restriction }) => {
  const {lemma, pos, language} = stem;
  const [openParadigm, setOpenParadigm] = React.useState(false);
  const classes = useStyles();
  const {data, loading, error} = useQuery(
    HAS_STEM, {
      variables: {
        stem: lemma
      }
    }
  );

  const handleClickParadigmDialog = () => {
    setOpenParadigm(true);
  };

  const handleCloseParadigmDialog = () => {
    setOpenParadigm(false);
  };

  if (loading) return <CircularProgress className={classes.progress} size={20}/>;

  return (
    <Typography className={classes.stemContainer}>
      {(!data.hasStem.length || error) ?
        <Typography component='span' className={classes.lemma}>Not stem {lemma}</Typography> :
        <Typography component='span' className={classes.lemma}><Link href="#">{lemma}</Link></Typography>
      }
      {restriction && <Typography component='span'> ({restriction.restriction})</Typography>}
      <span className={classes.rightGroup}>
        {pos && <Typography component='span' color='textSecondary' className={classes.pos}>({pos})</Typography>}
        <IconButton className={classes.icons} component='span' aria-label="Paradigm" onClick={handleClickParadigmDialog}>
          <InfoOutlined/>
        </IconButton>
        <IconButton className={classes.icons} component='span' aria-label="Corpus">
          <ViewHeadlineOutlined/>
        </IconButton>
      </span>
      <ParadigmDialog
        lemma={lemma}
        pos={pos}
        language={language}
        open={openParadigm}
        onClose={handleCloseParadigmDialog} />
    </Typography>
  );
};

export default Stem;
