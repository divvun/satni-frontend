import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const PartHeader = ({header}) => {
  return (
    <TableRow>
      <TableCell colSpan={4}>{header}</TableCell>
    </TableRow>
  );
};

const AttrRow = ({attrRow, wCase}) => {
  return (
    <TableRow>
      <TableCell>{wCase !== 'Attr' ? <span>{wCase}</span> : ''}</TableCell>
      {Object.keys(attrRow).map((comparison, i) => {
        return (
          <TableCell key={i}>
            {attrRow[comparison].map((word, j) => {
              return (
                <div key={j}>{word}</div>
              );
            })}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

const CaseRows = ({caseRows}) => {
  return (
    Object.keys(caseRows).map((wcase, i) => {
      return (<AttrRow key={i} attrRow={caseRows[wcase]} wCase={wcase} />);
    })

  );
};

const AdjParadigm = ({paradigm}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>&nbsp;</TableCell>
          <TableCell>Positive</TableCell>
          <TableCell>Comparative</TableCell>
          <TableCell>Superlative</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(paradigm).map((mainCategory, i) => {
          const rows = [];
          rows.push(<PartHeader key={mainCategory} header={mainCategory} />);
          rows.push(
          mainCategory === 'Attr'
          ? <AttrRow key={mainCategory + i} attrRow={paradigm[mainCategory]} wCase={mainCategory} />
          : <CaseRows key={mainCategory + i} caseRows={paradigm[mainCategory]} />
          );

          return rows;
        })}
      </TableBody>
    </Table>
  );
};

export default AdjParadigm;
