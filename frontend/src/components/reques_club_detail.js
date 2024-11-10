import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OCADashboard.css';

function RequestDetailsPage() {
    const { requestId } = useParams();
    const navigate = useNavigate();

    // Sample data for request (in practice, this would be fetched from an API using the requestId)
    const request = {
        id: requestId,
        eventName: 'Orientation',
        roomNumber: 'Room 101',
        date: '2024-11-12',
        startTime: '08:00 AM',
        endTime: '10:00 AM',
        status: 'Pending',
        description: 'An orientation event for new students.',
        remarks: 'Waiting for confirmation on availability of room.'
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
                    <h2 className="text-2xl font-semibold text-white mb-6">Request Details</h2>

                    {/* Request Details */}
                    <div className="space-y-4">
                        <div className="text-white text-sm">Event Name: {request.eventName}</div>
                        <div className="text-white text-sm">Room: {request.roomNumber}</div>
                        <div className="text-white text-sm">Date: {request.date}</div>
                        <div className="text-white text-sm">Time: {request.startTime} - {request.endTime}</div>
                        <div className="text-white text-sm">Description: {request.description}</div>
                        <div className="text-white text-sm">Status: {request.status}</div>
                        <div className="text-white text-sm">Remarks: {request.remarks}</div>
                    </div>

                    {/* Back Button */}
                    <div className="flex justify-start mt-6">
                        <button
                            onClick={() => navigate('/request_club')}
                            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                        >
                            Back to Requests List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestDetailsPage;
