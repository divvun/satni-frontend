import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';

const ParadigmCell = ({ key, values }) => (
  <TableCell key={key}>
    {values.map((value, index) => (
      <div key={index}>{value}</div>
    ))}
  </TableCell>
);

ParadigmCell.propTypes = {
  key: PropTypes.string.isRequired,
  values: PropTypes.arrayOf.isRequired,
};

export default ParadigmCell;
