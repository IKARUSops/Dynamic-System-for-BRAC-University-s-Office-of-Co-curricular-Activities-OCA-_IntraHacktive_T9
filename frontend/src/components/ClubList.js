import React from 'react';
import { Link } from 'react-router-dom';

const ClubList = () => {
    // Sample clubs data (you can replace this with your dynamic data)
    const clubs = [
        { id: 1, name: 'Science Club' },
        { id: 2, name: 'Tech Club' },
        { id: 3, name: 'Cultural Club' },
    ];

    return (
        <div className="club-list-container p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Club List</h2>

            {/* Club List */}
            <div className="club-list">
                {clubs.map((club) => (
                    <div key={club.id} className="club-item p-4 bg-gray-700 text-white rounded-lg mb-4 flex justify-between items-center">
                        <span>{club.name}</span>
                        <Link
                            to={`/club-details/${club.id}`}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClubList;
