import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OCADashboard.css';

function AdminEventDetailsPage() {
    const { eventId } = useParams();
    const navigate = useNavigate();

    // Sample data for event (in practice, this would be fetched from an API using the eventId)
    const event = {
        id: eventId,
        clubName: 'Coding Club',
        eventName: 'Hackathon',
        roomNumber: 'Room 101',
        date: '2024-11-12',
        startTime: '08:00 AM',
        endTime: '10:00 AM',
        description: 'A hackathon event for new programmers.',
        remarks: 'Waiting for confirmation.',
        status: 'Pending',
    };

    const [status, setStatus] = useState(event.status);
    const [remark, setRemark] = useState(event.remarks);

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const handleRemarkChange = (e) => {
        setRemark(e.target.value);
    };

    const handleSave = () => {
        // Save remarks and status (in practice, this would be an API call to update the status)
        alert('Changes saved');
        navigate(`/ocadashboar`);
    };

    return (
        <div className="flex w-full h-screen bg-gray-900 backdrop-blur-sm bg-opacity-80">
            {/* Sidebar (Left) */}
            <div className="sidebar group transition-all duration-300 ease-in-out hover:w-1/4 w-20 h-full bg-gradient-to-r from-gray-800 to-gray-900 p-6 hover:overflow-visible flex flex-col items-center">
                <div className="sidebar-title hidden group-hover:block text-lg font-bold text-white mt-6">
                    Admin Dashboard
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content w-full h-full flex items-center justify-center p-0">
                <div className="form-container w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-6">Event Details</h2>

                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2">Event Name</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={event.eventName}
                            readOnly
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2">Description</label>
                        <textarea
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={event.description}
                            readOnly
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2">Status</label>
                        <select
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={status}
                            onChange={(e) => handleStatusChange(e.target.value)}
                        >
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Denied">Denied</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2">Remarks</label>
                        <textarea
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={remark}
                            onChange={handleRemarkChange}
                            rows="4"
                            placeholder="Enter remarks"
                        />
                    </div>

                    <div className="flex justify-end mt-6 space-x-4">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => navigate('/event_oca')}
                            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminEventDetailsPage;
