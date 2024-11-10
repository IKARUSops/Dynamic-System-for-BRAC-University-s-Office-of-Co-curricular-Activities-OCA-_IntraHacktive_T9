import React, { useState } from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'; // Heroicon v2 import for copy icon

const ClubDetails = () => {
    const [copiedEmail, setCopiedEmail] = useState(null); // Store the copied email
    const panelMembers = [
        { name: 'John Doe', designation: 'Club President', email: 'johndoe@example.com', phone: '123-456-7890' },
        { name: 'Jane Smith', designation: 'Club Vice President', email: 'janesmith@example.com', phone: '234-567-8901' },
        { name: 'Emily Johnson', designation: 'Event Coordinator', email: 'emilyj@example.com', phone: '345-678-9012' },
        { name: 'Michael Brown', designation: 'Marketing Head', email: 'michaelb@example.com', phone: '456-789-0123' },
        { name: 'Sarah Lee', designation: 'Treasurer', email: 'sarahlee@example.com', phone: '567-890-1234' },
        { name: 'David Clark', designation: 'Web Developer', email: 'davidc@example.com', phone: '678-901-2345' },
        { name: 'Sophia Davis', designation: 'Graphic Designer', email: 'sophiad@example.com', phone: '789-012-3456' },
        { name: 'James Wilson', designation: 'Secretary', email: 'jamesw@example.com', phone: '890-123-4567' }
    ];

    const handleCopyEmail = (email) => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopiedEmail(email); // Set the copied email to show the "Copied!" message for that specific email
                setTimeout(() => setCopiedEmail(null), 2000); // Reset copied state after 2 seconds
            })
            .catch((err) => console.error('Failed to copy email:', err));
    };

    return (
        <div className="club-details-container p-8 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md mt-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Club Panel Details</h2>

            {/* Panel Members Table */}
            <div className="panel-members">
                <table className="min-w-full table-auto bg-gray-700 text-white rounded-lg">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-6 py-4 text-left">Name</th>
                            <th className="px-6 py-4 text-left">Designation</th>
                            <th className="px-6 py-4 text-left">Email</th>
                            <th className="px-6 py-4 text-left">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {panelMembers.map((member, index) => (
                            <tr key={index} className="border-t border-gray-600 hover:bg-gray-600">
                                <td className="px-6 py-4">{member.name}</td>
                                <td className="px-6 py-4">{member.designation}</td>
                                <td className="px-6 py-4 flex items-center">
                                    {/* Email text and copy icon */}
                                    <span className="mr-2 cursor-pointer" onClick={() => handleCopyEmail(member.email)}>
                                        {member.email}
                                    </span>
                                    <ClipboardDocumentIcon 
                                        className="h-5 w-5 text-white cursor-pointer" 
                                        onClick={() => handleCopyEmail(member.email)} 
                                    />
                                    {copiedEmail === member.email && <span className="ml-2 text-green-500">Copied!</span>}
                                </td>
                                <td className="px-6 py-4">{member.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClubDetails;
