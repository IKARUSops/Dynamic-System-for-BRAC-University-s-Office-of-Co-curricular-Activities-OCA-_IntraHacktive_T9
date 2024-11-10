import React from 'react';
import './Home.css';
import Slideshow from '../components/Slideshow';
import Testimonials from '../components/Testimonials';
import VisualsSection from '../components/VisualsSection';
import OCADashboard from '../components/OCADashboar';
import ImageWithText from '../components/Dsp'
import ImageOnRightTextOnLeft from '../components/Dsp_copy'
import HeroSection from '../components/hero.js'
import Footer from '../components/footer.js'





function Home() {
    

    return (
        <div className="home">

            
            <header className="home-header">
                <HeroSection />
            </header>
            {/* <OCADashboard /> */}
            <div id="features" className="home-section">
                <h2>Features</h2>
                
                <Slideshow />
            </div>
            <div id="dsp" className="home-section">
                <ImageWithText />
            </div>
            <div id="dsp" className="home-section">
                <ImageOnRightTextOnLeft />
            </div>
            <div id="visuals" className="home-section">
              
                <VisualsSection />
            </div>
            
            <div id="testimonials" className="home-section">
                <h2>What Our Users Say</h2>
                <Testimonials />
            </div>
            
            <footer className="home-footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Home;

