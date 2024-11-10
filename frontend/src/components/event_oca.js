import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OCADashboard.css';

function AdminEventPage() {
    const navigate = useNavigate();
    
    // Sample data for club event requests (in practice, this would be fetched from an API)
    const eventRequests = [
        {
            id: 1,
            clubName: 'Coding Club',
            eventName: 'Hackathon',
            roomNumber: 'Room 101',
            date: '2024-11-12',
            startTime: '08:00 AM',
            endTime: '10:00 AM',
            status: 'Pending',
        },
        {
            id: 2,
            clubName: 'Debate Club',
            eventName: 'Debate Championship',
            roomNumber: 'Room 202',
            date: '2024-11-13',
            startTime: '09:00 AM',
            endTime: '05:00 PM',
            status: 'Approved',
        },
        {
            id: 3,
            clubName: 'Music Club',
            eventName: 'Live Performance',
            roomNumber: 'Room 305',
            date: '2024-11-14',
            startTime: '11:00 AM',
            endTime: '01:00 PM',
            status: 'Denied',
        }
    ];

    // Navigate to the Event Details page
    const handleViewDetails = (eventId) => {
        navigate(`/event-details/${eventId}`);
    };

    return (
        <div className="flex w-full h-screen bg-gray-900 backdrop-blur-sm bg-opacity-80">
            {/* Sidebar (Left) */}
            <div className="sidebar group transition-all duration-300 ease-in-out hover:w-1/4 w-20 h-full bg-gradient-to-r from-gray-800 to-gray-900 p-6 hover:overflow-visible flex flex-col items-center">
                <div className="sidebar-title hidden group-hover:block text-lg font-bold text-white mt-6">
                    Admin Dashboard
                </div>
                <div className="flex flex-col items-start space-y-6 mt-6">
                    {/* Sidebar items */}
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content w-full h-full flex items-center justify-center p-0">
                <div className="form-container w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-white mb-6">Event Requests from Clubs</h2>

                    {/* Event Requests List */}
                    <div className="space-y-4">
                        {eventRequests.map((request) => (
                            <div key={request.id} className="flex justify-between items-center p-4 bg-gray-700 rounded-md mb-4">
                                <div className="w-1/4 flex flex-col space-y-2">
                                    <span className="text-white text-sm font-semibold">Club: {request.clubName}</span>
                                </div>
                                <div className="w-1/2 flex flex-col space-y-2">
                                    <span className="text-white text-sm font-semibold">Event: {request.eventName}</span>
                                    <span className="text-white text-sm">Room: {request.roomNumber}</span>
                                    <span className="text-white text-sm">Date: {request.date}</span>
                                    <span className="text-white text-sm">Time: {request.startTime} - {request.endTime}</span>
                                </div>
                                <div className="w-1/4 flex flex-col items-end space-y-2">
                                    <span className={`text-sm font-semibold ${request.status === 'Pending' ? 'text-yellow-400' : request.status === 'Approved' ? 'text-green-400' : 'text-red-400'}`}>
                                        {request.status}
                                    </span>
                                    <button
                                        onClick={() => handleViewDetails(request.id)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Existing Events Section */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Existing Events</h3>
                        <div className="space-y-4">
                            {eventRequests.map((request) => (
                                <div key={request.id} className="flex justify-between items-center p-4 bg-gray-700 rounded-md mb-4">
                                    <div className="w-3/4 flex flex-col space-y-2">
                                        <span className="text-white text-sm font-semibold">Event: {request.eventName}</span>
                                        <span className="text-white text-sm">Room: {request.roomNumber}</span>
                                        <span className="text-white text-sm">Date: {request.date}</span>
                                        <span className="text-white text-sm">Time: {request.startTime} - {request.endTime}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminEventPage;
