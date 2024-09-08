// FinancialDashboard.js
import React from 'react';
import { Line } from 'react-chartjs-2';

function FinancialDashboard() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [3000, 4000, 3500, 4500, 5000, 6000],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Financial Dashboard</h2>
      <Line data={data} />
    </div>
  );
}

export default FinancialDashboard;
