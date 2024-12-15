import React from "react";
import { Link } from "react-router-dom";
function RegularUserPage() {
  return (
    <div className="container mt-4">
      <h2 style={{padding:"20px 0px"}}>User Dashboard</h2>
      <div className="row" style={{padding:"20px 0px"}}>
        {/* View Posts */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Explore Posts</h5>
              <p className="card-text">Browse and read posts from authors.</p>
              <Link to={'/exploreposts'}>
              <button
                className="btn btn-primary"
                
              >
                View Posts
              </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Manage Comments */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">My Comments</h5>
              <p className="card-text">View, edit, or delete your comments on posts.</p>
              <Link to={'/mycomments'}>
              <button
                className="btn btn-primary"
               
              >
                Manage Comments
              </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Manage Profile */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">Update your profile information.</p>
              <Link to={'/myprofile'}>
              <button
                className="btn btn-primary"
               
              >
                Edit Profile
              </button>
              </Link>
            </div>
          </div>
        </div>
        {/* View Activity */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">My Activity</h5>
              <p className="card-text">
                Check your recent interactions and activity on the platform.
              </p>
              <Link to={'/myactivity'}>
              <button
                className="btn btn-primary"
                
              >
                View Activity
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegularUserPage;
