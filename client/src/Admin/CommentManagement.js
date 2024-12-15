import React from "react";

function CommentManagement() {
  return (
    <div className="container mt-4">
      <h2>Comment Management</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Manage Comments</h5>
              <p className="card-text">View, edit, or delete any comments on posts.</p>
              <button className="btn btn-primary mb-2">View All Comments</button>
              <button className="btn btn-warning mb-2">Edit Comment</button>
              <button className="btn btn-danger mb-2">Delete Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentManagement;
