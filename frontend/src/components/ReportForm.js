import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './ReportForm.css'; // Optional, for custom styling

function ReportForm() {
    const navigate = useNavigate();
    const [eventCode, setEventCode] = useState('');
    const [numMembers, setNumMembers] = useState('');
    const [expenses, setExpenses] = useState('');
    const [savings, setSavings] = useState('');
    const [extraExpenses, setExtraExpenses] = useState('');
    const [quotationImage, setQuotationImage] = useState(null);
    const [status, setStatus] = useState('');
    const [sponsors, setSponsors] = useState('');
    const [description, setDescription] = useState('');

    const handleImageUpload = (e) => {
        setQuotationImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to Data Analytics Page after form submission
        navigate('/data-analytics', {
            state: { eventCode, numMembers, expenses, savings, extraExpenses, quotationImage, status, sponsors, description }
        });
    };

    return (
        <div className="flex w-full h-screen bg-gray-900 backdrop-blur-sm bg-opacity-80">
            {/* Report Form (Left Side) */}
            <div className="w-2/3 p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">Event Report Form</h2>

                <form onSubmit={handleSubmit}>
                    {/* Event Code */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="eventCode">
                            Event Code
                        </label>
                        <input
                            type="text"
                            id="eventCode"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={eventCode}
                            onChange={(e) => setEventCode(e.target.value)}
                            placeholder="Enter event code"
                            required
                        />
                    </div>

                    {/* Number of Members */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="numMembers">
                            Number of Present Members
                        </label>
                        <input
                            type="number"
                            id="numMembers"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={numMembers}
                            onChange={(e) => setNumMembers(e.target.value)}
                            placeholder="Enter number of members"
                            required
                        />
                    </div>

                    {/* Expenses */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="expenses">
                            Expenses
                        </label>
                        <input
                            type="number"
                            id="expenses"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={expenses}
                            onChange={(e) => setExpenses(e.target.value)}
                            placeholder="Enter expenses"
                            required
                        />
                    </div>

                    {/* Savings */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="savings">
                            Savings
                        </label>
                        <input
                            type="number"
                            id="savings"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={savings}
                            onChange={(e) => setSavings(e.target.value)}
                            placeholder="Enter savings"
                            required
                        />
                    </div>

                    {/* Extra Expenses */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="extraExpenses">
                            Extra Expenses
                        </label>
                        <input
                            type="number"
                            id="extraExpenses"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={extraExpenses}
                            onChange={(e) => setExtraExpenses(e.target.value)}
                            placeholder="Enter extra expenses"
                        />
                    </div>

                    {/* Quotation Image Upload */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="quotationImage">
                            Upload Quotation Image
                        </label>
                        <input
                            type="file"
                            id="quotationImage"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            onChange={handleImageUpload}
                        />
                    </div>

                    {/* Status Dropdown */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="status">
                            Status
                        </label>
                        <select
                            id="status"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="success">Success</option>
                            <option value="failure">Failure</option>
                        </select>
                    </div>

                    {/* Sponsors */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="sponsors">
                            Sponsors
                        </label>
                        <input
                            type="text"
                            id="sponsors"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={sponsors}
                            onChange={(e) => setSponsors(e.target.value)}
                            placeholder="Enter sponsors"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            placeholder="Enter event description"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                        >
                            Submit Report
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReportForm;
