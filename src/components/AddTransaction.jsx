import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: crypto.randomUUID(), // Built-in way to create unique IDs
      text,
      amount: +amount, // convert to number
    };

    addTransaction(newTransaction);

    setText('');
    setAmount('');
  };

  return (
    <div>
      <h3 className="text-lg font-semibold border-b pb-1 mb-2 text-gray-700">Add New Transaction</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Amount <span className="text-xs text-gray-400">(negative = expense, positive = income)</span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
