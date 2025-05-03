import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Chart as GoogleChart } from 'react-google-charts';

const Chart = () => {
  const { transactions } = useContext(GlobalContext);

  const [chartData, setChartData] = useState([['Type', 'Amount']]);

  useEffect(() => {
    const expenses = transactions.filter((t) => t.amount < 0);
    const expenseMap = {};

    expenses.forEach((t) => {
      const name = t.text.trim() || 'Unnamed';
      if (expenseMap[name]) {
        expenseMap[name] += Math.abs(t.amount);
      } else {
        expenseMap[name] = Math.abs(t.amount);
      }
    });

    const data = [['Type', 'Amount']];
    for (const [key, value] of Object.entries(expenseMap)) {
      data.push([key, value]);
    }
    setChartData(data);
  }, [transactions]);

  const options = {
    is3D: true,
    backgroundColor: 'transparent',
    chartArea: {
      left: '5%',
      top: '3%',
      height: '100%',
      width: '100%'
    },
    legend: {
      textStyle: {
        fontSize: 14,
        fontName: 'Lato',
      },
    },
    fontSize: 16,
    fontName: 'Lato',
    slices: {},
  };

  return (
    <div className="flex items-center justify-center w-[500px] h-[500px]">
      <div className="w-full h-full">
        <GoogleChart
          chartType="PieChart"
          data={chartData}
          options={options}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Chart;
