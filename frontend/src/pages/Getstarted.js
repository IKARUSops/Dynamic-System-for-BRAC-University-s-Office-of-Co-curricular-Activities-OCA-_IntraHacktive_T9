import React, { useEffect, useState } from 'react';
import './Home.css';

import axios from 'axios';

function Home() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const response = await axios.get('/api/clubs');
                setClubs(response.data);
            } catch (error) {
                console.error('Error fetching clubs:', error);
            }
        };

        fetchClubs();
    }, []);

    return (
        <Auth />
    );
}

export default Home;

