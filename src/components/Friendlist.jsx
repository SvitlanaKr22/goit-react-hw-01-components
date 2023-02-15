import { FriendListItem } from 'components/Friendlistitem';
import PropTypes from 'prop-types';

export default function FriendList({ props }) {
  return (
    <ul class="friend-list" style={{ backgroundColor: 'green' }}>
      {props.map(friend => (
        <FriendListItem infoFriend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};
