import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { useLocation } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { hasAvailableDict } from 'utils';
import Definitions from './Definitions';
import LemmaGroups from './LemmaGroups';
import PairHeader from './PairHeader';
import Source from './Source';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  title: {
    fontSize: 14
  }
}));

// <PairHeader language={terms[0].expression.language} />
// {!hasAvailableDict(pathname) && <Source
//   className={classes.paper}
//   source='termwiki'
//   lemma='whatever' />
// }

const TermWikiArticle = ({ category, concepts }) => {
  const classes = useStyles();
  const pathname = useLocation().pathname;
  return <Paper
    className={classes.paper}
    elevation={1}
  >
    <Table
      size='tiny'>
      <TableHead>
        <TableRow>
          <TableCell variant='head'>{category}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {concepts.map((concept, index) => {
          const { terms, definition } = concept;
          return (
            <TableRow key={index}>
              <TableCell padding='none'>
                <PairHeader language={terms[0].expression.language} />
                <LemmaGroups terms={terms} />
                {definition && <Definitions definitions={definition} />}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
  ;
};

export default TermWikiArticle;
