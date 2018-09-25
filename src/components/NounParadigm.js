import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CaseRow = ({wcase, value}) => {
  if (value instanceof Array) {
    return (
      <TableRow>
        <TableCell>{wcase.replace('_both', '')}</TableCell>
        <TableCell colSpan={2}>{value.map((word, i) => {
          return (
            <div key={i}>{word}</div>
          );
        })}</TableCell>
      </TableRow>
    );
  }

  return (
    <TableRow>
      <TableCell>{wcase}</TableCell>
      {Object.keys(value).map((key, j) => {
        return (
          <TableCell key={j}>{value[key].map((word, i) => {
            return (
              <div key={i}>{word}</div>
            );
          })}</TableCell>
        );
      })}
    </TableRow>
  );
};

const NounParadigm = ({paradigm}) => {
  return (
    <Table>
      <TableHead>
        <TableCell>&nbsp;</TableCell><TableCell>Sg</TableCell><TableCell>Pl</TableCell>
      </TableHead>
      <TableBody>
        {Object.keys(paradigm).map((p, i) => {
          return <CaseRow key={p} wcase={p} value={paradigm[p]} />;
        })}
      </TableBody>
    </Table>
  );
};

export default NounParadigm;
