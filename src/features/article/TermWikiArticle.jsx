/* eslint-disable react/no-array-index-key */

import { Trans } from '@lingui/macro';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { hasAvailableDict } from '../../utils';
import Source from './Source';
import TermCore from './TermCore';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
}));

const TermWikiArticle = ({ category, multiLingualConcept, lemma }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Paper className={classes.paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="none">
              <Source
                className={classes.paper}
                source="termwiki"
                lemma={lemma}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!hasAvailableDict(pathname) && (
            <TableRow>
              <TableCell variant="head" padding="none">
                <Trans>Category</Trans>: {category}
              </TableCell>
            </TableRow>
          )}
          {multiLingualConcept.map((concept, index) => (
            <TableRow key={index}>
              <TableCell padding="none">
                <TermCore concept={concept} lemma={lemma} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

TermWikiArticle.propTypes = {
  category: PropTypes.string.isRequired,
  multiLingualConcept: PropTypes.arrayOf.isRequired,
  lemma: PropTypes.string.isRequired,
};

export default TermWikiArticle;
