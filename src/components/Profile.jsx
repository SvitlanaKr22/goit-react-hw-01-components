import PropTypes from 'prop-types';
import Stats from './Stats';

export default function Profile({
  infoUser: { username, tag, location, avatar, stats },
}) {
  return (
    <div class="profile" style={{ backgroundColor: 'blueviolet' }}>
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>
      <Stats infoActivity={stats} />
    </div>
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
