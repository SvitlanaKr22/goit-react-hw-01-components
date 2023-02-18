import { TransactionsRow } from '../TransactionRow/TransactionsRow';
import PropTypes from 'prop-types';
import { Table, Thead, Th } from './TransactionHistory.styled';

export default function TransactionHistory({ props: transactions }) {
  console.log(transactions);
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionsRow props={transaction} key={transaction.id} />
        ))}
      </tbody>
    </Table>
  );
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
