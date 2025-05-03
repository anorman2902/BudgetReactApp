import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);
  const income = amounts
    .filter((amt) => amt > 0)
    .reduce((acc, amt) => acc + amt, 0)
    .toFixed(2);
  const expense = (
    amounts.filter((amt) => amt < 0).reduce((acc, amt) => acc + amt, 0) * -1
  ).toFixed(2);

  return (
    <div className="flex justify-between bg-gray-100 p-4 rounded-md shadow-sm mb-6">
      <div className="text-center w-1/2 border-r border-gray-300">
        <h4 className="text-sm text-gray-500">Income</h4>
        <p className="text-lg font-semibold text-green-600">${income}</p>
      </div>
      <div className="text-center w-1/2">
        <h4 className="text-sm text-gray-500">Expense</h4>
        <p className="text-lg font-semibold text-red-600">-${expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
