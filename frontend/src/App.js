// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = ({ tasks }) => {
  return (
    <div className="dashboard-container">
      <header className="ux-header">
        <h1>My Study Planner</h1>
        <p>You have {tasks.length} tasks remaining for today.</p>
      </header>
      
      <div className="task-grid">
        {tasks.map(task => (
          <div key={task.id} className={`task-card priority-${task.priority}`}>
            <div className="task-content">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div className="task-actions">
              <button className="btn-complete">Check</button>
              <button className="btn-delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
