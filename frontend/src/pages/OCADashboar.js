import React, { useEffect, useState } from 'react';

import { FaHome, FaCog, FaUser, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';


function OCADashboard() {
    return (
        <div className="flex h-screen bg-gray-200 backdrop-blur-sm bg-opacity-50">
            {/* Sidebar */}
            <div className="transition-all duration-300 ease-in-out hover:w-1/4 w-20 h-full bg-gradient-to-r from-purple-100 to-blue-200 p-6 hover:overflow-visible flex flex-col items-center">
                <div className="flex flex-col items-center space-y-6">
                    {/* Icons - Always visible */}
                    <div className="text-2xl text-gray-700">
                        <FaHome />
                    </div>
                    <div className="text-2xl text-gray-700">
                        <FaCog />
                    </div>
                    <div className="text-2xl text-gray-700">
                        <FaUser />
                    </div>
                    <div className="text-2xl text-gray-700">
                        <FaEnvelope />
                    </div>
                    <div className="text-2xl text-gray-700">
                        <FaQuestionCircle />
                    </div>
                </div>
                {/* Text labels that hide when collapsed */}
                <div className="transition-all duration-300 ease-in-out mt-4 flex flex-col space-y-4 text-sm text-gray-700 hover:block">
                    <div className="hidden hover:block">Home</div>
                    <div className="hidden hover:block">Settings</div>
                    <div className="hidden hover:block">Profile</div>
                    <div className="hidden hover:block">Messages</div>
                    <div className="hidden hover:block">Help</div>
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
        </div>
    );
}

export default OCADashboard;

<OCADashboard />