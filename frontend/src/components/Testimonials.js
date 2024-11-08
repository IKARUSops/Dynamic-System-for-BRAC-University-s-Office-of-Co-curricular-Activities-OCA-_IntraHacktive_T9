// Testimonials.js
import React from 'react';
import './Testimonials.css';
import clubLeadersImage from '../assets/club_leaders.jpg';
import anotherUserImage from '../assets/another_user.webp';
import studentMemberImage from '../assets/student_member.jpg';

const testimonials = [
    {
        id: 1,
        name: "Club Leader",
        text: "This system has revolutionized how we manage our club activities!",
        image: clubLeadersImage
    },
    {
        id: 2,
        name: "Elon Musk",
        text: "Efficient and easy to use. Highly recommend!",
        image: anotherUserImage
    },
    {
        id: 3,
        name: "Student Member",
        text: "The real-time room booking feature is a game-changer!",
        image: studentMemberImage
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-card">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <h4 className="testimonial-name">- {testimonial.name}</h4>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
