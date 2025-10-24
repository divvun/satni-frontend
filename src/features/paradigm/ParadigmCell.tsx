import React from 'react';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import TableCell from '@material-ui/core/TableCell';

interface ParadigmCellProps {
  key: string;
  values: string[];
}

const ParadigmCell: React.FC<ParadigmCellProps> = ({ key, values }) => (
  // @ts-ignore - Material-UI v4 compatibility
  <TableCell key={key}>
    {values.map((value, index) => (
      <div key={index}>{value}</div>
    ))}
  </TableCell>
);

export default ParadigmCell;