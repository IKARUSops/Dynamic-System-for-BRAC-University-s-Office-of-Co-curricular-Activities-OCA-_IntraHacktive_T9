// AdminAnalyticsPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { Line } from 'react-chartjs-2'; // Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function AdminAnalyticsPage() {
  const location = useLocation();
  const navigate = useNavigate(); // This replaces useHistory
  
  const { state } = location;  // Get state passed from AdminPage (the club name)
  const { clubName } = state || {};
  
  // Example data for the graph (replace with dynamic data based on club)
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: `${clubName} Expenses Over Time`,
        data: [100, 200, 150, 300, 250], // Example dynamic data for the club
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: `${clubName} Savings Over Time`,
        data: [50, 100, 80, 120, 100], // Example dynamic data for the club
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount',
        }
      }
    }
  };

  // Handle the back button click
  const handleGoBack = () => {
    navigate('/admin'); // Navigate back to the AdminPage using useNavigate
  };

  return (
    <div className="admin-analytics-container p-8 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">{clubName} Analytics</h2>

      {/* Displaying the trend graph */}
      <div className="analytics-graphs mb-6">
        <h3 className="text-xl text-white mb-4">Trends Analysis</h3>
        <Line data={data} options={options} />
      </div>

      {/* Go back button */}
      <button
        onClick={handleGoBack}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
      >
        Go Back
      </button>
    </div>
  );
}

export default AdminAnalyticsPage;
