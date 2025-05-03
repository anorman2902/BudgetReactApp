import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <>
      <div className="flex-[1] text-center">
        <h4 className="uppercase m-0">Income</h4>
        <p className="text-[20px] tracking-[1px] mx-[0] my-[5px] text-[#2ecc71]">
          +${income}
        </p>
      </div>
      <div className="flex-[1] text-center">
        <h4 className="uppercase m-0">Expense</h4>
        <p className="text-[20px] tracking-[1px] mx-[0] my-[5px] text-[#c0392b]">
          -${expense}
        </p>
      </div>
    </>
  );
};

export default IncomeExpenses;
