import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutComponent = ({resetUser}) => {
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowModal(true); // Show confirmation modal on button click
  };

  const confirmLogout = () => {
    // Remove the token from localStorage and navigate to the login page
    localStorage.removeItem('token');
    navigate('/login');
    console.log("User logged out.");
    resetUser('')
    setShowModal(false); // Close the modal after logout
  };

  const cancelLogout = () => {
    console.log("User canceled the logout.");
    setShowModal(false); // Close the modal if canceled
  };

  return (
    <div>
      {/* Logout Button */}
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
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

export default LogoutComponent;
