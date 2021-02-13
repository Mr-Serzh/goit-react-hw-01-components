import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  if (items.lenght === 0) return null;
  return <ul className={s.statList}>{items.map(StatsListItem)}</ul>;
};

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <StatsList items={stats} />

      {/* <ul className={s.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul> */}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
