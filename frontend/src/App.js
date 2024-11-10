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
import TicketPage from './components/TicketPage';
import ReportForm from './components/ReportForm'; // Import Report Form
import DataAnalytics from './components/DataAnalytics'; // Import Data Analytics Page
import ClubList from './components/ClubList';
import ClubDetails from './components/ClubDetails';

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
                    {/* Route for Ticket List Page */}
                    <Route path="/ticket-page" element={<TicketPage />} />
                    <Route path="/report-form" element={<ReportForm />} />
                    <Route path="/data-analytics" element={<DataAnalytics />} />
                    <Route path="/club-details" element={<ClubList />} />
                    <Route path="/club-details/:clubId" element={<ClubDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
