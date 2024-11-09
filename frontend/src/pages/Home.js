import React, { useEffect, useState } from 'react';
import './Home.css';
import Slideshow from '../components/Slideshow';
import Testimonials from '../components/Testimonials';
import VisualsSection from '../components/VisualsSection';
import axios from 'axios';




function Home() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const response = await axios.get('/api/clubs');
                setClubs(response.data);
            } catch (error) {
                console.error('Error fetching clubs:', error);
            }
        };

        fetchClubs();
    }, []);

    return (
        <div className="home">

            
            <header className="home-header">
                <h1>Streamline Your Club Activities with BRAC University's OCA System</h1>
                <p>Our dynamic system simplifies event management, room booking, and budget tracking for all BRAC University clubs. Say goodbye to delays and inefficiencies!</p>
                
            </header>
            <section id="features" className="home-section">
                <h2>Features</h2>
                
                <Slideshow />
            </section>
            <section id="visuals" className="home-section">
                <h2>How to Use</h2>
                <VisualsSection />
            </section>
            
            <section id="testimonials" className="home-section">
                <h2>What Our Users Say</h2>
                <Testimonials />
            </section>
            <footer className="home-footer">
                <p>&copy; 2024 BRAC University. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;

