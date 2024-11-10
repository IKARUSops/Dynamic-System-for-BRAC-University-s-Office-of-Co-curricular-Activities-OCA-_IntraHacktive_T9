// ImageWithText.js
import React from 'react';
import './Dsp.css';
import future from '../assets/future.png';
const ImageWithText = () => {
    return (
        <div className="landing-image-text-container">
            <div className="image-section">
                <img
                    src= {future}
                    alt="Showcase"
                    className="image"
                />
            </div>
            <div className="text-section">
                <h2 className="headline">Discover the Future</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque pellentesque vel arcu id interdum. Suspendisse vehicula 
                    justo nec diam vehicula, non consequat massa tincidunt.
                </p>
                <button className="cta-button">Learn More</button>
            </div>
        </div>
    );
};

export default ImageWithText;
