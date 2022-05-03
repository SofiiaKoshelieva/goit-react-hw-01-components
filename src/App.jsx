import User from './components/User/User';
import user from './json/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './json/data.json';
import Friends from './components/FriendList/FriendList';
import friends from './json/friends.json';
import History from 'components/TransactionHistory/TransactionHistory';
import items from './json/transactions.json';
export const App = () => {
  return (
    <div>
      <User
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} title={'Upload stats'} />
      <Friends friends={friends} />
      <History items={items} />
    </div>
  );
};
