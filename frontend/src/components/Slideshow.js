import React from 'react';
import Slider from 'react-slick';
import './Slideshow.css';

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slides = [
        { id: 1, image: require('../assets/Centralized Event Management.jpg'), caption: 'Centralized Event Management', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Streamline all your events with our centralized management system." },
        { id: 2, image: require('../assets/Real-Time Room Booking.jpg'), caption: 'Real-Time Room Booking', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Book rooms instantly and manage schedules efficiently." },
        { id: 3, image: require('../assets/Transparent Budget Tracking.jpg'), caption: 'Transparent Budget Tracking', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Keep track of your budget with complete transparency." },
        { id: 4, image: require('../assets/Automated Reporting.jpg'), caption: 'Automated Reporting', description: "Lorem Ipsum is simply dummy text of the printing and typesetting. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Generate reports automatically to save time and effort." },
    ];

    return (
        <Slider {...settings}>
            {slides.map(slide => (
                <div key={slide.id} className="slide">
                    <img src={slide.image} alt={slide.caption} className="slide-image" />
                    <div className="caption">
                        <h3>{slide.caption}</h3>
                        <p>{slide.description}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Slideshow;
