import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  const borderColor = transaction.amount < 0 ? 'border-r-[5px] border-[#c0392b]' : 'border-r-[5px] border-[#2ecc71]';

  return (
    <li
      className={`bg-white text-[#333] shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)] p-[10px] my-[10px] flex justify-between items-center relative ${borderColor}`}
    >
      <span>{transaction.text}</span>
      <span className="font-semibold">
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="cursor-pointer bg-[#e74c3c] border-0 text-white text-[20px] leading-[20px] px-[5px] py-[2px] absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
