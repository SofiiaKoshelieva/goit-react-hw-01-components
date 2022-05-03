import PropTypes from 'prop-types';
import statistic from 'json/data.json';
import s from './Statistics.module.css';
function Statistics({ title, data }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {data.map(item => (
          <li className={s.item} key={item.id}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
statistic.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.object,
};
export default Statistics;
