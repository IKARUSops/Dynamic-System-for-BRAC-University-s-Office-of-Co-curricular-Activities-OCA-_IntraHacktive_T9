import React from 'react';
import './hero.css';

const HeroSection = () => {
    return (
        <header className="home-header">
            <div className="hero-content">
                <h1 className="hero-title">Streamline Your Club Activities with BRAC University's OCA System</h1>
                <p className="hero-subtitle">
                    Simplify event management, room booking, and budget tracking for all BRAC University clubs. Eliminate delays and inefficiencies effortlessly!
                </p>
                <button className="hero-button">Explore Now</button>
            </div>
        </header>
    );
};

export default HeroSection;
