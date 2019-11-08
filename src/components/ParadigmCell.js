import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const ParadigmCell = ({key}, {values}) => (
  <TableCell key={key}>{values.map(value => <div>{value}</div>)}</TableCell>
);

export default ParadigmCell;
