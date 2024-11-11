# Dynamic System for BRAC university's Office of Co-curriculum Activities (OCA)

## Project Overview
This University Club Management System is designed to enhance collaboration, streamline event management, and simplify communication between the Office of Club Administration (OCA) and university clubs. By replacing manual processes with a centralized digital hub, this system addresses common pain points in event approval, communication, room booking, budget tracking, and data insights, ultimately improving efficiency and transparency.

## Features Implemented

### Centralized Event Approval System
- **Feature**: A digital workflow allows club leaders to submit event proposals, reports and resources management online, and OCA can review, approve, or request modifications in real-time.
- **Usability**: Reduces wait times and eliminates the need for in-person follow-ups. Club members are notified instantly of updates, ensuring efficient event tracking.

### Integrated Communication Portal
- **Feature**: A centralized platform consolidates OCA-club communication, providing instant messaging using a ticket system, notifications, and updates.
- **Usability**: Enables real-time, centralized communication within the platform, replacing emails and physical notices. All relevant updates are visible to both OCA and club leaders, enhancing clarity on event approvals, budget requests, and room bookings.

### Real-Time Room Booking System
- **Feature**: A calendar-based system allows club leaders to make instant room reservations. The OCA can allow it if there are no issues.
- **Usability**: Displays real-time room availability, minimizes double bookings, and suggests alternative slots if conflicts arise.

### Digital Budget Tracking and Approval
- **Feature**: Budget requests can be submitted, tracked, and viewed by club leaders, with transparency at each approval stage.
- **Usability**: Provides real-time updates on budget status, tracks expenses, and logs the approval chain for clear feedback and accountability.

### Data-Driven Insights and Analytics
- **Feature**: A reporting module aggregates data on event participation, budget usage, and room bookings.
- **Usability**: OCA and club leaders can access detailed reports to measure event success, manage budgets, and optimize resource allocation.

### Scalability and Reliability
- **Scalability**: Built on the MERN stack (MongoDB, Express, React, Node.js), the system can scale with increasing users and data.
- **Reliability**: MongoDB's distributed architecture and React’s virtual DOM ensure high availability, fault tolerance, and smooth performance during peak usage.

## Technical Stack and Architecture
- **Frontend**: React for a responsive, mobile-friendly UI that provides a user-friendly dashboard and real-time updates.
- **Backend**: Node.js with Express for managing API requests and WebSocket/Firebase for real-time communication.
- **Database**: MongoDB for flexible, scalable data storage with support for complex queries.
- **Hosting**: AWS or equivalent cloud provider, ensuring scalability, security, and high availability.
- **Architecture**: The system follows a component-based architecture on the frontend and an Express API-based architecture on the backend for modularity and maintainability.

## User Guide
### Setup and Installation
1. **Clone the Repository**: `git clone 01971306781/Dynamic-System-for-BRAC-University-s-Office-of-Co-curricular-Activities-OCA-_IntraHacktive_T9`
2. **Install Dependencies**: Navigate to the frontend and backend folders and run `npm i`.
3. **Environment Configuration**: Set up environment variables for MongoDB, Firebase, and any cloud services.
4. **Start the Application**: Run `npm start` in both frontend and backend folders.

### Using the System
- **Dashboard**: Access pending approvals, messages, room availability, budget statuses, and calendar with upcoming events in a single view. Both OCA and students will have different dashboard which will lead to different features. 
- **Event Submission**: Submit events through a dedicated form and track approval status in real time.
- **Room Booking**: Use the calendar interface to view room availability in the events tab and make reservations with conflict prevention.
- **Communication**: Communicate within the platform using the ticket or notification system for updates and follow-ups.
- **Report and Analytics**: A reports tab will allow a detailed report to be sent to the OCA by the Club through a template. Based on that the analytics tab will show the report details in a graph.

## Challenges and Solutions
- **Challenge**: Implementing real-time updates across the platform for approvals, messages, and notifications.
  - **Solution**: Used WebSocket/Firebase to provide instant updates, ensuring that changes are reflected immediately for all users.
- **Challenge**: Designing an intuitive user interface accessible to all users.
  - **Solution**: React components were used to build a responsive, mobile-friendly UI that prioritizes usability and quick navigation.
- **Challenge**: Handling potential room booking conflicts.
  - **Solution**: Integrated a calendar-based system with real-time conflict detection and alternative time suggestions.

## Future Enhancements
- **Enhanced Analytics**: Additional metrics on user engagement and resource utilization.
- **Mobile App**: A native mobile app to extend functionality and improve accessibility.
- **Custom Approval Workflows**: Allowing OCA to define custom approval chains for different event types.
- **Expanded Budget Management**: Including more detailed financial insights and expense forecasting.

---


