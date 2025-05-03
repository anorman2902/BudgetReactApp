import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="mt-[20px]">
      <h4 className="uppercase m-0">Your Balance</h4>
      <h1 className="tracking-[1px] m-0">${total}</h1>
    </div>
  );
};

export default Balance;
