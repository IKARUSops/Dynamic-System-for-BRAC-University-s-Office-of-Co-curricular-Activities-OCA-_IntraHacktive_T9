import React from 'react';
import './Home.css';
import Slideshow from '../components/Slideshow';
import Testimonials from '../components/Testimonials';
import VisualsSection from '../components/VisualsSection';
import OCADashboard from '../components/OCADashboar';





function Home() {
    

    return (
        <div className="home">

            
            <header className="home-header">
                <h1>Streamline Your Club Activities with BRAC University's OCA System</h1>
                <p>Our dynamic system simplifies event management, room booking, and budget tracking for all BRAC University clubs. Say goodbye to delays and inefficiencies!</p>
                
            </header>
            {/* <OCADashboard /> */}
            <div id="features" className="home-section">
                <h2>Features</h2>
                
                <Slideshow />
            </div>
            <div id="visuals" className="home-section">
              
                <VisualsSection />
            </div>
            
            <div id="testimonials" className="home-section">
                <h2>What Our Users Say</h2>
                <Testimonials />
            </div>
            <footer className="home-footer">
                <p>&copy; 2024 BRAC University. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;

