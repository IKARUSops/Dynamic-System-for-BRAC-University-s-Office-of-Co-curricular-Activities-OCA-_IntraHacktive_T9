import React, { useEffect, useState } from 'react';
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
        <div>
            <h2>Club List</h2>
            <ul>
                {clubs.map((club, index) => (
                    <li key={index}>{club.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

