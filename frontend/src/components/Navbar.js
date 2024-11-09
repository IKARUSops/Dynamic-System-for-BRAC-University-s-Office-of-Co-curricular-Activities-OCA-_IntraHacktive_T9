import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

function CustomNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">BRACU OCA Management</Navbar.Brand>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/#features">Features</Nav.Link>
                        <Nav.Link as={Link} to="/#visuals">How It Works</Nav.Link>
                        <Nav.Link as={Link} to="/#testimonials">Testimonials</Nav.Link>
                        <Nav.Link as={Link} to="/auth">Get Started</Nav.Link>
                        <Nav.Link as={Link} to="/ocadashboar">OCADashboard</Nav.Link>
                    </Nav>
                    
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>

        

    );
}

export default CustomNavbar;
