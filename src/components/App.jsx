import Profile from './Profile';
import { Statistics } from './Statistics';
import FriendList from 'components/Friendlist';
import TransactionHistory from 'components/TransactionHistory';
import user from '../user.json';
import stats from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile infoUser={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList props={friends} />
      <TransactionHistory props={transactions} />
    </div>
  );
};
