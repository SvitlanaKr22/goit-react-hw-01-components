import ItemStatistics from '../Itemstatistics/Itemstatistics';
import PropTypes from 'prop-types';
import { Section, Title, List } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(infoStats => (
          <ItemStatistics
            props={infoStats}
            key={infoStats.id}
            color={getRandomHexColor()}
          />
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
