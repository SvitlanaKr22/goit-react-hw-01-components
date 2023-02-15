import { TransactionsRow } from './TransactionsRow';
import PropTypes from 'prop-types';

export default function TransactionHistory({ props: transactions }) {
  console.log(transactions);
  return (
    <table
      class="transaction-history"
      style={{ backgroundColor: 'gray', fontSize: 16 }}
    >
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionsRow props={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
