import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CustomNavbar from './components/Navbar';
import Auth from './components/Auth';
import OCADashboard from './components/OCADashboar';
import ClubDashboardDashboard from './components/ClubDashboard';





function App() {
    return (
        <Router>
            <div className="app-container">
                <CustomNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ocadashboar" element={<OCADashboard />} />
                    <Route path="/ClubDashboard" element={<ClubDashboardDashboard />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
