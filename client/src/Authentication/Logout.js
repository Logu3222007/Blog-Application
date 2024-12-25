import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ resetUser }) => {
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [theme, setTheme] = useState('light'); // State to track the theme preference
  const navigate = useNavigate();

  useEffect(() => {
    // Load the theme preference from localStorage when the component mounts
    const savedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' if no preference is saved
    setTheme(savedTheme);
  }, []);

  const handleLogout = () => {
    setShowModal(true); // Show confirmation modal on button click
  };

  const confirmLogout = () => {
    // Remove the token from localStorage and navigate to the login page
    localStorage.removeItem('token');
    navigate('/login');
    console.log('User logged out.');
    resetUser('');
    setShowModal(false); // Close the modal after logout
  };

  const cancelLogout = () => {
    console.log('User canceled the logout.');
    setShowModal(false); // Close the modal if canceled
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save the new theme in localStorage
    console.log(`Theme changed to: ${newTheme}`);
  };

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '10px',
      }}
    >
      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="btn btn-primary" style={{ marginRight: '10px' }}>
        Toggle Theme
      </button>

      {/* Logout Button */}
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>

      {/* Confirmation Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none' }}
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
              }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Confirm Logout</h5>
                <button type="button" className="btn-close" onClick={cancelLogout}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to log out?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelLogout}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={confirmLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
