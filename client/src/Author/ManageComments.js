import React from "react";
import { Link } from "react-router-dom";

function ManageComments() {
  return (
    <div className="container mt-4">
      <h2>Manage Comments</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">View and Respond to Comments</h5>
              <p className="card-text">
                Here you can view, reply, or delete comments on your posts.
              </p>
              <Link to={'/viewcomments'}>
              <button className="btn btn-primary">
                View Comments
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Example of displaying comments (for illustration) */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-2">
            <div className="card-body">
              <h6 className="card-title">Comment on Post Title 1</h6>
              <p className="card-text">This is a great post! I really enjoyed it.</p>
              <button className="btn btn-warning mb-1">Reply</button>
              <button className="btn btn-danger mb-1">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageComments;
