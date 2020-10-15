import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';

const ParadigmCell = ({key, values}) => (
  <TableCell key={key}>
    {values.map((value, index) => <div key={index}>{value}</div>)}
  </TableCell>
);

ParadigmCell.propTypes = {
  key: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
};

export default ParadigmCell;
