import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './OCADashboard.css';

function BudgetForm() {
    const [budgetItems, setBudgetItems] = useState([{ description: '', amount: '' }]);
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();

    // Handle adding a new budget section
    const handleAddItem = () => {
        setBudgetItems([...budgetItems, { description: '', amount: '' }]);
    };

    // Handle removing a budget section
    const handleRemoveItem = (index) => {
        const newBudgetItems = budgetItems.filter((item, i) => i !== index);
        setBudgetItems(newBudgetItems);
        calculateTotalAmount(newBudgetItems);
    };

    // Handle input changes for each item
    const handleChange = (index, field, value) => {
        const newBudgetItems = [...budgetItems];
        newBudgetItems[index][field] = value;
        setBudgetItems(newBudgetItems);
        calculateTotalAmount(newBudgetItems);
    };

    // Calculate the total amount of all items
    const calculateTotalAmount = (items) => {
        const total = items.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
        setTotalAmount(total);
    };

    // Submit form
    const handleSubmit = () => {
        console.log('Budget Submitted:', budgetItems);
        navigate('/ClubDashboard');
        // You can handle actual form submission here
        // Example: send data to an API
    };

    // Navigate back to the event form
    const handleBack = () => {
        navigate('/event');
    };

    return (
        <div className="flex w-full h-screen bg-gray-900 backdrop-blur-sm bg-opacity-80">
            {/* Sidebar (Left) */}
            <div className="sidebar group transition-all duration-300 ease-in-out hover:w-1/4 w-20 h-full bg-gradient-to-r from-gray-800 to-gray-900 p-6 hover:overflow-visible flex flex-col items-center">
                <div className="sidebar-title hidden group-hover:block text-lg font-bold text-white mt-6">
                    Dashboard
                </div>
                <div className="flex flex-col items-start space-y-6 mt-6">
                    {/* Sidebar items */}
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content w-full h-full flex items-center justify-center p-0">
                <div className="form-container w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-6">Budget Form</h2>

                    {/* Budget Items */}
                    {budgetItems.map((item, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <input
                                type="text"
                                className="w-2/3 p-2 bg-gray-700 text-white rounded-md"
                                placeholder="Enter description"
                                value={item.description}
                                onChange={(e) => handleChange(index, 'description', e.target.value)}
                            />
                            <input
                                type="number"
                                className="w-1/3 ml-2 p-2 bg-gray-700 text-white rounded-md"
                                placeholder="Enter amount (Taka)"
                                value={item.amount}
                                onChange={(e) => handleChange(index, 'amount', e.target.value)}
                            />
                            <button
                                onClick={() => handleRemoveItem(index)}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    {/* Add Button */}
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={handleAddItem}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300"
                        >
                            Add Another Item
                        </button>
                    </div>

                    {/* Total Amount */}
                    <div className="mt-6 text-lg font-semibold text-white">
                        Total Amount: <span className="text-xl">{totalAmount} Taka</span>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>

                    {/* Back Button */}
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={handleBack}
                            className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            <FaArrowLeft className="mr-2" />
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BudgetForm;
