import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction.jsx';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="w-full mt-[40px]">
      <h3 className="border-b border-[#bbb] pb-[10px] mt-[40px] mx-[0] mb-[10px]">
        History
      </h3>
      <ul className="list-none p-0 mb-[40px]">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
