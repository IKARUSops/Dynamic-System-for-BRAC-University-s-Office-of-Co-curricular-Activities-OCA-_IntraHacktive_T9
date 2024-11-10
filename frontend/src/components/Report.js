import React, { useState } from 'react';
import { ClipboardDocumentIcon, TrashIcon, PrinterIcon } from '@heroicons/react/24/outline'; // Heroicons for actions

const Report = () => {
    // Sample reports data (replace with dynamic data)
    const reports = [
        {
            id: 1,
            title: 'Annual Club Financial Report',
            description: 'This report outlines the financials for the club over the last year.',
            date: '2024-10-01',
            status: 'Approved',
            file: 'link-to-report-file.pdf', // You can replace with a valid file link
        },
        {
            id: 2,
            title: 'Event Planning Report',
            description: 'Report on the events organized and their outcomes.',
            date: '2024-09-15',
            status: 'Pending',
            file: 'link-to-event-report.pdf',
        },
        // More reports...
    ];

    const [activeReportId, setActiveReportId] = useState(null); // To toggle the collapsible view
    const [copiedReportId, setCopiedReportId] = useState(null); // To handle copied report file links

    const handleToggleReport = (id) => {
        setActiveReportId(activeReportId === id ? null : id); // Toggle collapsible section
    };

    const handlePrintReport = (file) => {
        window.open(file, '_blank'); // Open the report file in a new tab for printing
    };

    const handleDeleteReport = (id) => {
        // Confirm delete, then delete the report (replace with actual deletion logic)
        if (window.confirm('Are you sure you want to delete this report?')) {
            console.log(`Report with id ${id} deleted`);
        }
    };

    const handleRequestRevisedReport = (id) => {
        // Request a revised report (you can implement logic for sending a request)
        alert(`Request for a revised report with id ${id}`);
    };

    const handleCopyReportLink = (file, id) => {
        navigator.clipboard.writeText(file)
            .then(() => {
                setCopiedReportId(id);
                setTimeout(() => setCopiedReportId(null), 2000); // Reset after 2 seconds
            })
            .catch((err) => console.error('Failed to copy report link:', err));
    };

    return (
        <div className="report-container p-8 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md mt-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Submitted Reports</h2>

            {/* List of Reports */}
            {reports.map((report) => (
                <div key={report.id} className="report-tile mb-4">
                    {/* Report Title (Collapsible Header) */}
                    <div
                        className="bg-gray-700 text-white p-4 rounded-lg cursor-pointer flex justify-between items-center"
                        onClick={() => handleToggleReport(report.id)}
                    >
                        <span className="font-semibold">{report.title}</span>
                        <span>{activeReportId === report.id ? '-' : '+'}</span>
                    </div>

                    {/* Collapsible Report Content */}
                    {activeReportId === report.id && (
                        <div className="bg-gray-800 text-white p-4 rounded-b-lg mt-2">
                            <p>{report.description}</p>
                            <p><strong>Date:</strong> {report.date}</p>
                            <p><strong>Status:</strong> {report.status}</p>

                            {/* Action Buttons */}
                            <div className="flex space-x-4 mt-4">
                                <button
                                    className="flex items-center text-blue-500 hover:text-blue-700"
                                    onClick={() => handlePrintReport(report.file)}
                                >
                                    <PrinterIcon className="h-5 w-5 mr-2" /> Print
                                </button>

                                <button
                                    className="flex items-center text-red-500 hover:text-red-700"
                                    onClick={() => handleDeleteReport(report.id)}
                                >
                                    <TrashIcon className="h-5 w-5 mr-2" /> Delete
                                </button>

                                <button
                                    className="flex items-center text-yellow-500 hover:text-yellow-700"
                                    onClick={() => handleRequestRevisedReport(report.id)}
                                >
                                    <span className="mr-2">Request Revised Report</span>
                                </button>

                                <button
                                    className="flex items-center text-green-500 hover:text-green-700"
                                    onClick={() => handleCopyReportLink(report.file, report.id)}
                                >
                                    <ClipboardDocumentIcon className="h-5 w-5 mr-2" />
                                    Copy Report Link
                                </button>

                                {/* Show copied notification */}
                                {copiedReportId === report.id && (
                                    <span className="ml-2 text-green-500">Copied!</span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Report;
