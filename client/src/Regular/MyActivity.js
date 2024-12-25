import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MyActivity() {
  const navigate=useNavigate()
  return (
    <div className="container mt-4">
      <h2>My Activity</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Your Recent Activity</h5>
              <p className="card-text">
                Check the interactions and activity you've had on the platform.
              </p>
              <Link to={'/viewactivity'}>
              <button className="btn btn-primary" >
                View Activity History
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Example of displaying activity list (for illustration) */}
      
<button className="back-button btn btn-primary mb-1" onClick={() => navigate('/regular')}>
             &larr; Back
           </button>
    </div>
  );
}

export default MyActivity;
