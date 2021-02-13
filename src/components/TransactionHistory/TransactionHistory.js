import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={s.row}>
      <td className={s.item}>{type}</td>
      <td className={s.item}>{amount}</td>
      <td className={s.item}>{currency}</td>
    </tr>
  );
};

export default function TransactionHistory({ items }) {
  if (items.lenght === 0) return null;

  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tableHead}>
          <th className={s.item}>Type</th>
          <th className={s.item}>Amount</th>
          <th className={s.item}>Currency</th>
        </tr>
      </thead>

      <tbody>{items.map(TransactionItem)}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
