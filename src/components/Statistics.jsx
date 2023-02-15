import ItemStatistics from './Itemstatistics';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics" style={{ backgroundColor: 'pink' }}>
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(infoStats => (
          <ItemStatistics props={infoStats} key={infoStats.id} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
