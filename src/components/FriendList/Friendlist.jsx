import { FriendListItem } from 'components/Friendlistitem/Friendlistitem';
import PropTypes from 'prop-types';
import { List } from './Friendlist.styled';

export default function FriendList({ props }) {
  return (
    <List>
      {props.map(friend => (
        <FriendListItem infoFriend={friend} key={friend.id} />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};
