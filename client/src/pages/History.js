import React from 'react';
import '../styles/History.css';

const History = ({ isVisible }) => {
  return (
    <div className={`history-container ${isVisible ? 'show' : ''}`}>
      <h2>User History</h2>
      <ul>
        <li>Visited Dashboard</li>
        <li>Submitted a script on 2024-08-09</li>
        {/* Add more history items as needed */}
      </ul>
    </div>
  );
};

export default History;