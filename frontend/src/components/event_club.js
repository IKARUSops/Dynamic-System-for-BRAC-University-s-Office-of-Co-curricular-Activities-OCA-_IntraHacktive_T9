import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './OCADashboard.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function EventForm() {
    const [eventType, setEventType] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(null); // Initialize with null for date picker
    const navigate = useNavigate();

    const handleNext = () => {
        // Navigate to the budget page
        navigate('/budget');
    };

    return (
        <div className="flex w-full h-screen bg-gray-900 backdrop-blur-sm bg-opacity-80">
            {/* Sidebar (Left) */}
            <div className="sidebar group transition-all duration-300 ease-in-out hover:w-1/4 w-20 h-full bg-gradient-to-r from-gray-800 to-gray-900 p-6 hover:overflow-visible flex flex-col items-center">
                <div className="sidebar-title hidden group-hover:block text-lg font-bold text-white mt-6">
                    Dashboard
                </div>
                <div className="flex flex-col items-start space-y-6 mt-6">
                    {/* Your sidebar items here */}
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content w-full h-full flex items-center justify-center p-0">
                <div className="form-container w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-6">Event Form</h2>

                    {/* Event Type Dropdown */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="eventType">
                            Event Type
                        </label>
                        <select
                            id="eventType"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={eventType}
                            onChange={(e) => setEventType(e.target.value)}
                        >
                            <option value="">Select Event Type</option>
                            <option value="orientation">Orientation</option>
                            <option value="hackathon">Hackathon</option>
                            <option value="departmentMeeting">Department Meeting</option>
                            <option value="generalBodyMeeting">General Body Meeting</option>
                            <option value="interview">Interview</option>
                        </select>
                    </div>

                    {/* Room Number Text Input */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="roomNumber">
                            Room Number
                        </label>
                        <input
                            type="text"
                            id="roomNumber"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={roomNumber}
                            onChange={(e) => setRoomNumber(e.target.value)}
                            placeholder="Enter room number"
                        />
                    </div>

                    {/* Description Text Area */}
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
                        />
                    </div>

                    {/* Date Picker */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="date">
                            Date
                        </label>
                        <DatePicker
                            selected={date}
                            onChange={(date) => setDate(date)}
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            placeholderText="Select a date"
                            dateFormat="MMMM d, yyyy"
                            minDate={new Date()} // Disable past dates
                        />
                    </div>

                    {/* Next Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={handleNext}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            <span>Next</span>
                            <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Notification Sidebar (Right) */}
            {/* Notification sidebar and Calendar sidebar as in the previous code */}
        </div>
    );
}

export default EventForm;
