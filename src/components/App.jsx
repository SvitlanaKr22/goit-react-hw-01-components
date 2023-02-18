import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import FriendList from 'components/FriendList/Friendlist';
import TransactionHistory from 'components/TransactionHistiry/TransactionHistory';
import user from '../user.json';
import stats from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { GlobalStyle } from './Globalstyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile infoUser={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList props={friends} />
      <TransactionHistory props={transactions} />
    </Layout>
  );
};
