import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './OCADashboard.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';  // For making API requests

function EventForm() {
    const [eventType, setEventType] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(null);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            // Prepare event data
            const eventData = {
                title: eventType,
                description,
                club: 'some-club-id',  // Set the appropriate club ID (you can fetch from state or context)
                status: 'pending',  // Set event status (default: 'pending')
                date,
                venue: roomNumber,  // Assuming roomNumber corresponds to the room ID
                budget: 1000,  // Adjust budget as necessary
                feedback: [],  // Adjust feedback as necessary
                timeline: []  // Adjust timeline as necessary
            };

            // Make API call to create event
            const response = await axios.post('/api/events', eventData);
            console.log(response.data);

            // Navigate to the budget page after successful submission
            navigate('/budget');
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    const timeOptions = [
        '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM',
        '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
    ];

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

                    {/* Start Time Dropdown */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="startTime">
                            Start Time
                        </label>
                        <select
                            id="startTime"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        >
                            <option value="">Select Start Time</option>
                            {timeOptions.map((timeOption, index) => (
                                <option key={index} value={timeOption}>{timeOption}</option>
                            ))}
                        </select>
                    </div>

                    {/* End Time Dropdown */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="endTime">
                            End Time
                        </label>
                        <select
                            id="endTime"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        >
                            <option value="">Select End Time</option>
                            {timeOptions.filter(time => time > startTime).map((timeOption, index) => (
                                <option key={index} value={timeOption}>{timeOption}</option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={handleSubmit}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            <span>Submit</span>
                            <FaArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Notification Sidebar (Right) */}
        </div>
    );
}

export default EventForm;
