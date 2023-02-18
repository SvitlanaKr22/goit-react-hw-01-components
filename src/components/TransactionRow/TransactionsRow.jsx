import PropTypes from 'prop-types';
import { Td, Tr } from './TransactionsRow.styled';

export const TransactionsRow = ({ props: { type, amount, currency } }) => {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
};

TransactionsRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
