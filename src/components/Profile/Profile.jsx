import PropTypes from 'prop-types';
import Stats from '../Stats/Stats';
import { Wrapper, ImgAvatar, Description, Name, Par } from './Profile.styled';

export default function Profile({
  infoUser: { username, tag, location, avatar, stats },
}) {
  return (
    <Wrapper>
      <Description>
        <ImgAvatar src={avatar} alt={username} class="avatar" />
        <Name>{username}</Name>
        <Par>@{tag}</Par>
        <Par>{location}</Par>
      </Description>
      <Stats infoActivity={stats} />
    </Wrapper>
  );
}

Profile.propTypes = {
  infoUser: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
