// pages/Dashboard.js
import React from "react";
import "../Style/Dashboard.css"; // Assuming you will add the CSS for hover effects here

function Dashboard() {
  return (
    <div className="container mt-4">
      <h2>Your Dashboard</h2>
      <p>Manage your posts and drafts here.</p>
      <div className="row">
        {/* Draft Post */}
        <div className="col-md-4">
          <div className="card mb-4 hover-effect">
            <div className="card-body">
              <h5 className="card-title">Draft Post</h5>
              <p className="card-text">This is a draft post that you can edit.</p>
              <a href="#" className="btn btn-secondary">Edit</a>
            </div>
          </div>
        </div>
        {/* Published Post */}
        <div className="col-md-4">
          <div className="card mb-4 hover-effect">
            <div className="card-body">
              <h5 className="card-title">Published Post</h5>
              <p className="card-text">This is a published post visible to others.</p>
              <a href="#" className="btn btn-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
