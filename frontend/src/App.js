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
import RequestsPage from './components/request_club';
import RequestDetailsPage from './components/reques_club_detail';




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
                    <Route path="/event_club" element={<EventForm />} />
                    <Route path="/budget" element={<BudgetForm />} />
                    <Route path="/request_club" element={<RequestsPage />} />
                    <Route path="/reques_club_detail" element={<RequestDetailsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
