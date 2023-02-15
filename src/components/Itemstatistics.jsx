import PropTypes from 'prop-types';

export default function ItemStatistics({ props: { label, percentage } }) {
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
}

ItemStatistics.propTypes = {
  label: PropTypes.string.isRequired,
  performance: PropTypes.number.isRequired,
};
