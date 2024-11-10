import React, { useState } from 'react';
import { FaHome, FaCog, FaUser, FaEnvelope, FaQuestionCircle, FaBell, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import './OCADashboard.css';
import { useNavigate } from 'react-router-dom';

function ClubDashboard() {
    const [isNotificationSidebarOpen, setIsNotificationSidebarOpen] = useState(false);
    const [isCalendarSidebarOpen, setIsCalendarSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleNotificationSidebar = () => setIsNotificationSidebarOpen(!isNotificationSidebarOpen);
    const toggleCalendarSidebar = () => setIsCalendarSidebarOpen(!isCalendarSidebarOpen);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/Auth");
    };

    const handleEventClick = () => {
        navigate("/event_oca");
    };

    const handleClubClick = () => {
        navigate("/club-details");
    };   

    return (
        <div className="flex w-full h-screen bg-gray-900 backdrop-blur-sm bg-opacity-80">
            {/* Sidebar (Left) */}
            <div className="sidebar group transition-all duration-300 ease-in-out hover:w-1/4 w-20 h-full bg-gradient-to-r from-gray-800 to-gray-900 p-6 hover:overflow-visible flex flex-col items-center">
                <div className="sidebar-title hidden group-hover:block text-lg font-bold text-white mt-6">
                    Dashboard
                </div>

                <div className="flex flex-col items-start space-y-6 mt-6">
                    <SidebarItem icon={<FaHome />} text="Home" />
                    <SidebarItem icon={<FaCog />} text="Settings" />
                    <SidebarItem icon={<FaUser />} text="Profile" />
                    <SidebarItem icon={<FaEnvelope />} text="Messages" />
                    <SidebarItem icon={<FaQuestionCircle />} text="Help" />

                    <div className="flex items-center space-x-2 mt-6 cursor-pointer" onClick={handleLogout}>
                        <div className="text-2xl text-white">
                            <FaSignOutAlt />
                        </div>
                        <div className="hidden group-hover:block text-sm text-white">Logout</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content w-full h-full flex items-center justify-center p-0">
                <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-3 p-12 xl:m-64 lg:m-32 md:m-16">
                    <DashboardCard color="from-gray-700 to-gray-600" title="Events" onClick={handleEventClick} />
                    <DashboardCard color="from-gray-700 to-gray-600" title="Club List" onClick={handleClubClick}/>
                    <DashboardCard color="from-gray-700 to-gray-600" title="Room Booking" />
                    <DashboardCard color="from-gray-700 to-gray-600" title="Budget" />
                    <DashboardCard color="from-gray-700 to-gray-600" title="Analytics" />
                </div>
            </div>

            {/* Notification Sidebar (Right) */}
            <div
                className={`notification-sidebar ${isNotificationSidebarOpen ? 'open' : ''}`}
                onMouseEnter={() => setIsNotificationSidebarOpen(true)}
                onMouseLeave={() => setIsNotificationSidebarOpen(false)}
                style={{
                    background: 'linear-gradient(to right, #2c2f33, #23272a)',
                    color: '#ffffff',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                }}
            >
                <div className="flex flex-col items-center">
                    <FaBell className="text-3xl text-gray" />
                </div>
                {isNotificationSidebarOpen && (
                    <div className="notification-content mt-4 p-4">
                        <p className="text-black">New updates are available!</p>
                        <p className="text-black">Event A is scheduled for tomorrow.</p>
                        <p className="text-black">Your profile has been updated.</p>
                    </div>
                )}
            </div>

            {/* Calendar Sidebar (Right, below Notification Sidebar) */}
            <div
                className={`calendar-sidebar ${isCalendarSidebarOpen ? 'open' : ''}`}
                onMouseEnter={() => setIsCalendarSidebarOpen(true)}
                onMouseLeave={() => setIsCalendarSidebarOpen(false)}
                style={{
                    background: 'linear-gradient(to right, #2b2e34, #23272a)',
                    color: '#ffffff',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    marginTop: isNotificationSidebarOpen ? '250px' : '0', // Adjust based on notification height
                }}
            >
                <div className="flex flex-col items-center">
                    <FaCalendarAlt className="text-3xl text-white" />
                </div>
                {isCalendarSidebarOpen && (
                    <div className="calendar-content mt-4 p-4">
                        <p className="text-gray-200">Upcoming Events:</p>
                        <p className="text-gray-200">Meeting on Thursday at 10 AM</p>
                        <p className="text-gray-200">Workshop on Friday at 2 PM</p>
                    </div>
                )}
            </div>
        </div>
    );
}

const SidebarItem = ({ icon, text }) => (
    <div className="flex items-center space-x-2">
        <div className="text-2xl text-white">{icon}</div>
        <div className="hidden group-hover:block text-sm text-white">{text}</div>
    </div>
);

const DashboardCard = ({ color, title, onClick }) => (
    <div
        className={`col-span-1 row-span-1 rounded-xl bg-gradient-to-r ${color} hover:scale-105 hover:z-10 transition-all ease-in-out duration-300 shadow-lg cursor-pointer`}
        onClick={onClick}
    >
        <div className="flex items-center justify-center h-full text-lg font-semibold text-white">
            {title}
        </div>
    </div>
);

export default ClubDashboard;
