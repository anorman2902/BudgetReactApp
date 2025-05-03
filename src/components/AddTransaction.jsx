import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3 className="border-b border-[#bbb] pb-[10px] mt-[40px] mx-[0] mb-[10px]">
        Add new transaction
      </h3>
      <form onSubmit={onSubmit}>
        <div className="my-[10px]">
          <label htmlFor="text" className="inline-block my-[10px]">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="border border-[#dedede] rounded-[2px] block text-[16px] p-[10px] w-full"
          />
        </div>
        <div className="my-[10px]">
          <label htmlFor="amount" className="inline-block my-[10px]">
            Amount <br />
            <small className="text-[80%]">(negative - expense, positive - income)</small>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="border border-[#dedede] rounded-[2px] block text-[16px] p-[10px] w-full"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer bg-[#9c88ff] shadow-[0_1px_3px_rgba(0,0,0,0.12),_0_1px_2px_rgba(0,0,0,0.24)] text-white border-0 block text-[16px] mt-[10px] mb-[30px] p-[10px] w-full"
        >
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
