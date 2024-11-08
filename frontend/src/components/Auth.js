// Auth.js
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ClubLogin from './ClubLogin';
import OCALogin from './OCALogin';
import './Auth.css';

const Auth = () => {
    const [isClubLogin, setIsClubLogin] = useState(true);

    return (
        <Container className="auth-container">
            <Button variant="link" onClick={() => setIsClubLogin(!isClubLogin)}>
                {isClubLogin ? 'Switch to OCA Login' : 'Switch to Club Login'}
            </Button>
            {isClubLogin ? <ClubLogin /> : <OCALogin />}
        </Container>
    );
};

export default Auth;
