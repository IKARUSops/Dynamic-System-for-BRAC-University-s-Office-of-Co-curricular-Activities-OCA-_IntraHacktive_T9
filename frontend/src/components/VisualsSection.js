// VisualsSection.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import screenshot1 from '../assets/screenshot1.jpg';
import screenshot2 from '../assets/screenshot2.jpg';
import demoVideo from '../assets/demo.mp4';
import './VisualsSection.css';

const VisualsSection = () => {
    return (
        <section id="visuals" className="home-section">
            <h2>How It Works</h2>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={screenshot1} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={screenshot2} />
                    </Card>
                </Col>
                <Col md={12}>
                    <Card>
                        <Card.Body>
                            <video src={demoVideo} controls className="w-100"></video>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default VisualsSection;
