// VisualsSection.js
import React from 'react';
import Slider from 'react-slick';
import screenshot1 from '../assets/screenshot1.jpg';
import screenshot2 from '../assets/screenshot2.jpg';
import demoVideo from '../assets/demo.mp4';
import './VisualsSection.css';

const VisualsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <section id="visuals" className="home-section">
            <h2>How It Works</h2>
            <Slider {...settings}>
                <div className="carousel-item">
                    <img className="carousel-content" src={screenshot1} alt="Screenshot 1" />
                </div>
                <div className="carousel-item">
                    <img className="carousel-content" src={screenshot2} alt="Screenshot 2" />
                </div>
                <div className="carousel-item">
                    <video className="carousel-content" src={demoVideo} controls></video>
                </div>
            </Slider>
        </section>
    );
};

export default VisualsSection;
