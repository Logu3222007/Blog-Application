import React from "react";
import { Link } from "react-router-dom";

function MyProfile() {
  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Update Your Profile Information</h5>
              <p className="card-text">
                Modify your personal details like name, email, and profile picture.
              </p>
              <Link to={'/editprofile'}>
              <button className="btn btn-primary" >
                Edit Profile
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Example of displaying profile info (for illustration) */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Username: JohnDoe</h6>
              <p className="card-text">Email: johndoe@example.com</p>
              <p className="card-text">Bio: Enthusiast of technology and software development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
