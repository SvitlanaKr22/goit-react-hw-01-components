import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import FriendList from 'components/FriendList/Friendlist';
import TransactionHistory from 'components/TransactionHistiry/TransactionHistory';
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
        gap: '10px',
      }}
    >
      <Profile infoUser={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList props={friends} />
      <TransactionHistory props={transactions} />
    </div>
  );
};
