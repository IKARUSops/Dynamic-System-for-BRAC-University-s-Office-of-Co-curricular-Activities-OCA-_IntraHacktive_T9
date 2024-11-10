// ImageOnRightTextOnLeft.js
import React from 'react';
import './Dsp_copy.css';
import happy from '../assets/happy.png';

const ImageOnRightTextOnLeft = () => {
    return (
        <div className="landing-container">
            <div className="text-section">
                <h2 className="headline">Be Happy</h2>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis 
                    fringilla mi, nec varius orci consequat ac. Donec euismod, urna vel tincidunt 
                    luctus, est mauris ullamcorper lacus, sit amet laoreet velit quam ac nulla.
                </p>
                <button className="cta-button">Get Started</button>
            </div>
            <div className="image-section">
                <img
                    src={happy}
                    alt="Happy Moment"
                    className="image"
                />
            </div>
        </div>
    );
};

export default ImageOnRightTextOnLeft;
