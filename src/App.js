// App.js
import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Navigation</h2>
        <ul>
          <li>Business Plan</li>
          <li>Task Manager</li>
          <li>Financial Dashboard</li>
          <li>Messages</li>
        </ul>
      </aside>
      <main className="main-content">
        <h1>Welcome to Bamboo Skateboards Plan</h1>
        {/* Load dynamic content based on navigation */}
      </main>
    </div>
  );
}

export default App;
