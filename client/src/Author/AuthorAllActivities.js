import axios from "axios";
import React, { useState, useEffect, act } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

function AuthorAllActivities() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const decodedTokenId = jwtDecode(localStorage.getItem('token'));
  const decodedTokenIdStore = decodedTokenId.id;

  const FetchActivity = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}viewactivity/${decodedTokenIdStore}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setActivities(res.data.activity);
    } catch (err) {
      console.log('Failed to fetch activities. Please try again.');
    }
  };

  const handleClearHistory = async () => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_URL}clearactivities/${decodedTokenIdStore}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setActivities([]); // Clear the activities from state
      setShowModal(false); // Close the modal
      toast.success("Activity history cleared successfully.");
    } catch (err) {
      toast.error("Failed to clear activity history.");
    }
  };

  useEffect(() => {
    FetchActivity();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Activity History</h2>
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        {activities.length===0?<p>There is no any recent activities.</p>:
        <p>Here is a list of your recent activities on the platform:</p>
}
        <button className="btn btn-danger" onClick={() => setShowModal(true)} disabled={activities.length===0}>
          Clear All History
        </button>
      </div>
      <br />
      <ul className="list-group">
        {activities.map((activity) => (
          <li className="list-group-item" key={activity._id}>
            <div className="d-flex justify-content-between">
              <div>
                <h5>{activity.type}: {activity.title}</h5>
                <p>
                  {activity.action} on {new Date(activity.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          </li>

        ))}
      
      </ul>

      <button className="btn btn-primary" style={{ marginTop: "20px" }} onClick={() => navigate('/author')}>
        &larr; Back
      </button>

      {/* Modal for clearing history */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1" aria-labelledby="clearHistoryModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="clearHistoryModalLabel">Confirm Clear All History</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true" >&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to clear all your activity history? This action cannot be undone.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleClearHistory}>
                  Clear All History
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthorAllActivities;
