import Header from './components/Header.jsx';
import Balance from './components/Balance.jsx';
import IncomeExpenses from './components/IncomeExpenses.jsx';
import TransactionList from './components/TransactionList.jsx';
import AddTransaction from './components/AddTransaction.jsx';
import Chart from './components/Chart.jsx';
import { GlobalProvider } from './context/GlobalState.jsx';

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-[#f7f7f7] min-h-screen m-0 font-['Lato',_sans-serif] flex justify-center items-start">
      <div className="flex w-full max-w-[1200px] px-4 pt-[30px] justify-between gap-[60px]">
          {/* Left Column: App Content */}
          <div className="w-[350px] ml-auto">
            <Header />
            <Balance />
            <div className="bg-[#fff] [box-shadow:var(--box-shadow)] p-[20px] flex justify-between mx-[0] my-[20px]">
              <IncomeExpenses />
            </div>
            <TransactionList />
            <AddTransaction />
          </div>

          {/* Right Column: Placeholder (e.g., for Chart) */}
          <div className="flex items-center justify-center w-full lg:w-1/2 h-screen">
            <Chart />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
