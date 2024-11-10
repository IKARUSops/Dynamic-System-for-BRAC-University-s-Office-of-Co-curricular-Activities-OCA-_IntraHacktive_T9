import React, { useState } from 'react';
import { FaHome, FaCog, FaUser, FaEnvelope, FaQuestionCircle, FaBell } from 'react-icons/fa';
import './OCADashboard.css';


function OCADashboard() {
    // State for controlling the collapsible notification sidebar
    const [isNotificationSidebarOpen, setIsNotificationSidebarOpen] = useState(false);

    // Toggle the sidebar open and close
    const toggleNotificationSidebar = () => setIsNotificationSidebarOpen(!isNotificationSidebarOpen);

    return (
        <div className="flex flex-1 h-screen bg-gray-200 backdrop-blur-sm bg-opacity-50">
            {/* Sidebar (Left) */}
            <div className="group transition-all duration-300 ease-in-out hover:w-1/4 w-20 h-full bg-gradient-to-r from-purple-100 to-blue-200 p-6 hover:overflow-visible flex flex-col items-center">
                {/* Dashboard Title */}
                <div className="hidden group-hover:block text-lg font-bold text-gray-700 mt-6">
                    Dashboard
                </div>
                
                <div className="flex flex-col items-start space-y-6 mt-6">
                    {/* Icons and Text */}
                    <div className="flex items-center space-x-2">
                        <div className="text-2xl text-gray-700">
                            <FaHome />
                        </div>
                        <div className="hidden group-hover:block text-sm text-gray-700">Home</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                        <div className="text-2xl text-gray-700">
                            <FaCog />
                        </div>
                        <div className="hidden group-hover:block text-sm text-gray-700">Settings</div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="text-2xl text-gray-700">
                            <FaUser />
                        </div>
                        <div className="hidden group-hover:block text-sm text-gray-700">Profile</div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="text-2xl text-gray-700">
                            <FaEnvelope />
                        </div>
                        <div className="hidden group-hover:block text-sm text-gray-700">Messages</div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <div className="text-2xl text-gray-700">
                            <FaQuestionCircle />
                        </div>
                        <div className="hidden group-hover:block text-sm text-gray-700">Help</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full h-full flex items-center justify-center p-0">
                <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-3 p-12 xl:m-64 lg:m-32 md:m-16">
                    {/* Grid Items */}
                    <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-pink-100 to-purple-100 hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg"></div>
                    <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-blue-200 to-green-200 hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg"></div>
                    <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-indigo-100 to-teal-100 hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg"></div>
                    
                    <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-yellow-100 to-orange-100 hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg"></div>
                    <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-cyan-100 to-lime-100 hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg"></div>
                    <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-teal-100 to-blue-200 hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg"></div>
                    
                    <div className="col-span-2 row-span-1 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg"></div>
                    <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-green-100 to-yellow-100 hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg"></div>
                    <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-lime-100 to-pink-100 hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg"></div>
                </div>
            </div>

            {/* Notification Sidebar (Right) */}
            <div className={`notification-sidebar ${isNotificationSidebarOpen ? 'open' : ''}`}>
                <div className="flex flex-col items-center" onClick={toggleNotificationSidebar}>
                    <FaBell className="text-3xl text-gray-700" />
                    
                </div>
                {isNotificationSidebarOpen && (
                    <div className="notification-content mt-4">
                        <p className="text-gray-700">New updates are available!</p>
                        <p className="text-gray-700">Event A is scheduled for tomorrow.</p>
                        <p className="text-gray-700">Your profile has been updated.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OCADashboard;
