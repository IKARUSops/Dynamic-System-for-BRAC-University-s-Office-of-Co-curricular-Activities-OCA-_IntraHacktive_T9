// AdminPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {
  // Sample club data (replace with actual dynamic data or API call)
  const clubs = [
    { id: 1, name: 'Tech Club' },
    { id: 2, name: 'Sports Club' },
    { id: 3, name: 'Music Club' },
    { id: 4, name: 'Art Club' },
  ];

  return (
    <div className="admin-page-container">
      <h2 className="text-2xl font-semibold text-white mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        {clubs.map((club) => (
          <Link
            key={club.id}
            to={{ pathname: `/admin_analytics/${club.id}`, state: { clubName: club.name } }}
            className="p-4 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 text-white text-center"
          >
            <h3 className="text-xl">{club.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
