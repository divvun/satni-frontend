import { Trans } from '@lingui/macro';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { locationParser } from '../../utils';
import DictArticles from './DictArticles';
import TermArticles from './TermArticles';

const useStyles = makeStyles((theme) => ({
  articles: {
    height: '72vh',
    overflowY: 'auto',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  status: {
    textAlign: 'center',
  },
}));

const Articles = ({ lemma }) => {
  const classes = useStyles();
  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  return (
    <div>
      <Typography className={classes.status}>
        <Trans>Results for «{lemma}»</Trans>
      </Typography>
      <div className={classes.articles}>
        {(!currentDict || currentDict === 'termwiki') && (
          <TermArticles lemma={lemma} />
        )}
        <DictArticles lemma={lemma} />
      </div>
    </div>
  );
};

Articles.propTypes = {
  lemma: PropTypes.string.isRequired,
};

export default Articles;
