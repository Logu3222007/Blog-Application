import React from "react";
import { Link } from "react-router-dom";

function MyActivity() {
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
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-2">
            <div className="card-body">
              <h6 className="card-title">Commented on Post Title 1</h6>
              <p className="card-text">You left a comment: "Great post!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyActivity;
