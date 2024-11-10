import React, { useState } from 'react';

function AdminTicketPage() {
    const [tickets, setTickets] = useState([
        {
            id: 1,
            title: 'Issue with website loading',
            description: 'The website is not loading properly on my browser.',
            status: 'pending', // 'pending', 'accepted', 'rejected'
            replies: [
                { id: 1, text: 'We are investigating the issue.' },
                { id: 2, text: 'The issue has been resolved. Please try again.' },
            ],
        },
        {
            id: 2,
            title: 'Login error',
            description: 'I cannot log in to my account.',
            status: 'pending', // 'pending', 'accepted', 'rejected'
            replies: [
                { id: 3, text: 'Please reset your password.' },
            ],
        },
    ]);

    const [openTicketId, setOpenTicketId] = useState(null);
    const [replyText, setReplyText] = useState('');

    const toggleDetails = (ticketId) => {
        setOpenTicketId(openTicketId === ticketId ? null : ticketId);
    };

    const handleAccept = (ticketId) => {
        setTickets(tickets.map((ticket) =>
            ticket.id === ticketId ? { ...ticket, status: 'accepted' } : ticket
        ));
    };

    const handleReject = (ticketId) => {
        setTickets(tickets.filter((ticket) => ticket.id !== ticketId));
    };

    const handleReply = (ticketId) => {
        if (replyText.trim() === '') {
            alert('Reply cannot be empty!');
            return;
        }
        
        setTickets(tickets.map((ticket) =>
            ticket.id === ticketId
                ? { 
                    ...ticket, 
                    replies: [...ticket.replies, { id: ticket.replies.length + 1, text: replyText }], 
                  }
                : ticket
        ));

        setReplyText('');
    };

    const handleSubmitReply = (e, ticketId) => {
        e.preventDefault();
        handleReply(ticketId);
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

                        {/* Ticket Status */}
                        <div className="text-white mb-2">
                            <strong>Status:</strong> {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
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

                                {/* Admin Reply Form */}
                                <form onSubmit={(e) => handleSubmitReply(e, ticket.id)}>
                                    <textarea
                                        className="w-full p-2 bg-gray-700 text-white rounded-md"
                                        rows="4"
                                        placeholder="Write a reply..."
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300"
                                    >
                                        Submit Reply
                                    </button>
                                </form>

                                {/* Accept / Reject Ticket */}
                                <div className="mt-4">
                                    {ticket.status === 'pending' && (
                                        <div className="flex space-x-4">
                                            <button
                                                onClick={() => handleAccept(ticket.id)}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
                                            >
                                                Accept
                                            </button>

                                            <button
                                                onClick={() => handleReject(ticket.id)}
                                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    )}
                                    {ticket.status === 'accepted' && (
                                        <button
                                            className="px-4 py-2 bg-gray-600 text-white rounded-md cursor-not-allowed"
                                            disabled
                                        >
                                            Accepted
                                        </button>
                                    )}
                                    {ticket.status === 'rejected' && (
                                        <button
                                            className="px-4 py-2 bg-gray-600 text-white rounded-md cursor-not-allowed"
                                            disabled
                                        >
                                            Rejected
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminTicketPage;
