import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ClubLogin from './ClubLogin';
import OCALogin from './OCALogin';
import './Auth.css';

const Auth = () => {
    const [isClubLogin, setIsClubLogin] = useState(true);
    const navigate = useNavigate();

    const handleLogin = (isAuthenticated, isClub) => {
        if (isAuthenticated) {
            if (isClub) {
                navigate('/ClubDashboard');
            } else {
                navigate('/OCADashboar');
            }
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Container className="auth-container">
            <Button variant="link" onClick={() => setIsClubLogin(!isClubLogin)}>
                {isClubLogin ? 'Switch to OCA Login' : 'Switch to Club Login'}
            </Button>
            {isClubLogin ? <ClubLogin onLogin={(isAuthenticated) => handleLogin(isAuthenticated, true)} /> : <OCALogin onLogin={(isAuthenticated) => handleLogin(isAuthenticated, false)} />}
        </Container>
    );
};

export default Auth;
