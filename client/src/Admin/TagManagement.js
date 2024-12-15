import React from "react";

function TagManagement() {
  return (
    <div className="container mt-4">
      <h2>Tag Management</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Manage Tags</h5>
              <p className="card-text">Add, edit, or delete tags for posts.</p>
              <button className="btn btn-primary mb-2">View Tags</button>
              <button className="btn btn-success mb-2">Add Tag</button>
              <button className="btn btn-warning mb-2">Edit Tag</button>
              <button className="btn btn-danger mb-2">Delete Tag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagManagement;
