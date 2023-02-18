import PropTypes from 'prop-types';
import { Item, Span } from './Friendlistitem.styled';

export const FriendListItem = ({ infoFriend: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <Span status={isOnline}></Span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
