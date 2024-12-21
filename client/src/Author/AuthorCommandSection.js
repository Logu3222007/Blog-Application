import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommandSection = () => {
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);

  // Function to handle command submission
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (commandInput.trim()) {
      // Add the command to the history list
      setCommandHistory((prevHistory) => [
        ...prevHistory,
        { command: commandInput, timestamp: new Date().toLocaleTimeString() },
      ]);
      setCommandInput(''); // Clear the input after submission
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Command Section</h2>

      {/* Command Input Form */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Enter Command</h5>
          <form onSubmit={handleCommandSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="Type your command here"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Command
            </button>
          </form>
        </div>
      </div>

      {/* Command History Section */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Command History</h5>
          {commandHistory.length === 0 ? (
            <p className="text-muted">No commands entered yet.</p>
          ) : (
            <ul className="list-group">
              {commandHistory.map((entry, index) => (
                <li key={index} className="list-group-item">
                  <strong>Command:</strong> {entry.command} <br />
                  <small><em>Submitted at: {entry.timestamp}</em></small>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandSection;
