import React from 'react';
import { useLocation } from 'react-router-dom';
import { Line } from 'react-chartjs-2'; // Importing Line chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function DataAnalytics() {
    const location = useLocation();
    const { state } = location;

    if (!state) {
        return <div>No data available. Please submit a report first.</div>;
    }

    const {
        eventCode,
        numMembers,
        expenses,
        savings,
        extraExpenses,
        quotationImage,
        status,
        sponsors,
        description
    } = state;

    // Example data for the trend graph (replace with your actual data)
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'], // Time or categories on the X-axis
        datasets: [
            {
                label: 'Expenses Over Time',
                data: [100, 200, 150, 300, 250], // Replace with actual expenses data
                borderColor: 'rgb(75, 192, 192)', // Line color
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Line fill color
                fill: true, // Fill under the line
            },
            {
                label: 'Savings Over Time',
                data: [50, 100, 80, 120, 100], // Replace with actual savings data
                borderColor: 'rgb(153, 102, 255)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
            }
        ]
    };

    // Chart.js options (customize as per your needs)
    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount'
                }
            }
        }
    };

    return (
        <div className="data-analytics-container">
            <h2>Data Analytics</h2>
            <div className="report-details">
                <h3>Event Code: {eventCode}</h3>
                <p>Number of Present Members: {numMembers}</p>
                <p>Expenses: {expenses}</p>
                <p>Savings: {savings}</p>
                <p>Extra Expenses: {extraExpenses}</p>
                <p>Status: {status}</p>
                <p>Sponsors: {sponsors}</p>
                <p>Description: {description}</p>

                {quotationImage && (
                    <div className="quotation-image">
                        <img src={quotationImage} alt="Quotation" />
                    </div>
                )}
            </div>

            {/* Displaying the trend graph */}
            <div className="analytics-graphs">
                <h3>Trends Analysis</h3>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

export default DataAnalytics;
