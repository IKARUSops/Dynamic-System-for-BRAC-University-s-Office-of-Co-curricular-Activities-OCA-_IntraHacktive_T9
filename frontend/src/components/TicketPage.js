import React, { useState } from 'react';

function TicketPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tickets, setTickets] = useState([
        {
            id: 1,
            title: 'Issue with website loading',
            description: 'The website is not loading properly on my browser.',
            replies: [
                { id: 1, text: 'We are investigating the issue.' },
                { id: 2, text: 'The issue has been resolved. Please try again.' },
            ],
        },
        {
            id: 2,
            title: 'Login error',
            description: 'I cannot log in to my account.',
            replies: [
                { id: 3, text: 'Please reset your password.' },
            ],
        },
    ]);

    const [openTicketId, setOpenTicketId] = useState(null);

    const toggleDetails = (ticketId) => {
        if (openTicketId === ticketId) {
            setOpenTicketId(null);
        } else {
            setOpenTicketId(ticketId);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle ticket submission
        const newTicket = { id: tickets.length + 1, title, description, replies: [] };
        setTickets([...tickets, newTicket]);

        // Reset form fields
        setTitle('');
        setDescription('');
    };

    return (
        <div className="flex w-full h-screen bg-gray-900 backdrop-blur-sm bg-opacity-80">
            {/* Ticket List (Left Side - Scrollable) */}
            <div className="w-2/3 overflow-y-auto p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">Ticket List</h2>

                {/* Display Ticket List */}
                {tickets.map((ticket) => (
                    <div key={ticket.id} className="mb-6 p-4 bg-gray-700 rounded-md">
                        <div className="text-white mb-2">
                            <strong>{ticket.title}</strong>
                        </div>
                        <div className="text-gray-400 mb-2">
                            <span>{ticket.description}</span>
                        </div>

                        {/* View Details Button */}
                        <button
                            onClick={() => toggleDetails(ticket.id)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                        >
                            {openTicketId === ticket.id ? 'See Less' : 'See More'}
                        </button>

                        {/* Collapsible Ticket Details */}
                        {openTicketId === ticket.id && (
                            <div className="mt-4">
                                <div className="text-white mb-2">
                                    <strong>Description:</strong>
                                </div>
                                <div className="text-gray-400 mb-4">
                                    {ticket.description}
                                </div>

                                {/* Replies Section */}
                                <div className="text-white mb-2">
                                    <strong>Replies:</strong>
                                </div>
                                {ticket.replies.map((reply) => (
                                    <div key={reply.id} className="text-gray-400 mb-2">
                                        {reply.text}
                                    </div>
                                ))}

                                {/* Reply Form (if necessary) */}
                                <form>
                                    <textarea
                                        className="w-full p-2 bg-gray-700 text-white rounded-md"
                                        rows="4"
                                        placeholder="Write a reply..."
                                    />
                                    <button
                                        type="submit"
                                        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                    >
                                        Submit Reply
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Ticket Form (Right Side) */}
            <div className="w-1/3 p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-6">Submit a Ticket</h2>

                <form onSubmit={handleSubmit}>
                    {/* Ticket Title */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter ticket title"
                            required
                        />
                    </div>

                    {/* Ticket Description */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full p-2 bg-gray-700 text-white rounded-md"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            placeholder="Enter ticket description"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                        >
                            Submit Ticket
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TicketPage;
