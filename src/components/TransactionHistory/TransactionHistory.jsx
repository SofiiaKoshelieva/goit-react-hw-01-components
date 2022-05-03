import PropTypes from 'prop-types';
// import history from 'json/transactions.json';
import s from './TransactionHistory.module.css';
function History({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={s.odd}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.odd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

History.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
export default History;
