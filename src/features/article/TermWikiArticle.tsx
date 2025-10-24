/* eslint-disable react/no-array-index-key */

// @ts-ignore - @lingui/macro has no type definitions
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Paper from '@material-ui/core/Paper';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import { makeStyles } from '@material-ui/core/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Table from '@material-ui/core/Table';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import TableBody from '@material-ui/core/TableBody';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import TableCell from '@material-ui/core/TableCell';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import TableHead from '@material-ui/core/TableHead';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import TableRow from '@material-ui/core/TableRow';
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
    // @ts-ignore - Material-UI v4 compatibility
    <Paper className={classes.paper} elevation={1}>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Table>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <TableHead>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <TableRow>
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <TableCell padding="none">
              <Source source="termwiki" lemma={lemma} />
            </TableCell>
          </TableRow>
        </TableHead>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <TableBody>
          {!hasAvailableDict(pathname) && (
            // @ts-ignore - Material-UI v4 compatibility
            <TableRow>
              {/* @ts-ignore - Material-UI v4 compatibility */}
              <TableCell variant="head" padding="none">
                <Trans>Category</Trans>: {category}
              </TableCell>
            </TableRow>
          )}
          {multiLingualConcept.map((concept, index) => (
            // @ts-ignore - Material-UI v4 compatibility
            <TableRow key={index}>
              {/* @ts-ignore - Material-UI v4 compatibility */}
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
