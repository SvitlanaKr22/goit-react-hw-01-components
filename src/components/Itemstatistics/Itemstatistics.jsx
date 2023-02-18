import PropTypes from 'prop-types';
import { Item, Span } from './Itemstatistics.styled';

export default function ItemStatistics({
  props: { label, percentage },
  color,
}) {
  return (
    <Item color={color}>
      <span>{label}</span>
      <Span>{percentage}%</Span>
    </Item>
  );
}

ItemStatistics.propTypes = {
  label: PropTypes.string.isRequired,
  performance: PropTypes.number.isRequired,
};
