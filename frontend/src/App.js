import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CustomNavbar from './components/Navbar';
import Auth from './components/Auth';
import OCADashboard from './components/OCADashboar';
import ClubDashboardDashboard from './components/ClubDashboard';
import EventForm from './components/event_club';
import BudgetForm from './components/budget';





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
                    <Route path="/event" element={<EventForm />} />
                    <Route path="/budget" element={<BudgetForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
