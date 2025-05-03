import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold border-b pb-1 mb-2 text-gray-700">History</h3>
      <ul className="space-y-2">
        {transactions.map((transaction) => {
          const sign = transaction.amount < 0 ? '-' : '+';
          const color =
            transaction.amount < 0
              ? 'border-red-500 bg-red-50 text-red-700'
              : 'border-green-500 bg-green-50 text-green-700';

          return (
            <li
              key={transaction.id}
              className={`flex justify-between p-2 rounded-md shadow-sm border-r-4 ${color}`}
            >
              <span>{transaction.text}</span>
              <span>{sign}${Math.abs(transaction.amount)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TransactionList;
