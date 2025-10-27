/* eslint-disable react/no-array-index-key */

// @ts-ignore - @lingui/macro has no type definitions
import { Trans } from '@lingui/react/macro';
import Paper from '@mui/material/Paper';
import { } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import React from 'react';
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

interface TermWikiArticleProps {
  category: string;
  multiLingualConcept: any[];
  lemma: string;
}

const TermWikiArticle: React.FC<TermWikiArticleProps> = ({
  category,
  multiLingualConcept,
  lemma,
}) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Paper className={classes.paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="none">
              <Source source="termwiki" lemma={lemma} />
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

export default TermWikiArticle;
