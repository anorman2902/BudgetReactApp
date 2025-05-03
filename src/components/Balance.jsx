import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const total = transactions
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  return (
    <div className="mb-6">
      <h4 className="text-gray-500 uppercase text-sm">Your Balance</h4>
      <h1 className="text-3xl font-bold text-gray-800 mt-1">${total}</h1>
    </div>
  );
}

export default Balance;
