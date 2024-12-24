import React from "react";
import { Link } from "react-router-dom";

function AuthorMyActivity() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Your Recent Activity</h5>
              <p className="card-text">
                Check the interactions and activity you've had on the platform.
              </p>
              <Link to={'/authorallactivities'}>
              <button className="btn btn-primary" >
                View Activity History
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Example of displaying activity list (for illustration) */}
      
    </div>
  );
}

export default AuthorMyActivity;
