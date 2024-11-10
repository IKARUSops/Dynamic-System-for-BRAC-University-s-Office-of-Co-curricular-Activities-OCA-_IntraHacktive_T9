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
import AdminEventPage from './components/event_oca';
import AdminEventDetailsPage from './components/event_detail_oca';




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
                    <Route path="/reques_club_detail/:requestId" element={<RequestDetailsPage />} />
                    <Route path="/event_club" element={<EventForm />} />
                     {/* Admin Event Page - Lists event requests from clubs
                     <Route path="/admin" element={<AdminEventPage />} /> */}

                    {/* Admin Event Details Page - Shows detailed event info for approval/rejection */}
                    <Route path="/event-details/:eventId" element={<AdminEventDetailsPage />} />

                    {/* Event Form Page - For submitting event requests */}
                    <Route path="/event_oca" element={<AdminEventPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
