import React from 'react';
import TableCell from '@mui/material/TableCell';

interface ParadigmCellProps {
  key: string;
  values: string[];
}

const ParadigmCell: React.FC<ParadigmCellProps> = ({ key, values }) => (
  <TableCell key={key}>
    {values.map((value, index) => (
      <div key={index}>{value}</div>
    ))}
  </TableCell>
);

export default ParadigmCell;
