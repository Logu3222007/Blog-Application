import React from "react";

function PostManagement() {
  return (
    <div className="container mt-4">
      <h2>Post Management</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Manage All Posts</h5>
              <p className="card-text">View, edit, or delete any posts in the system.</p>
              <button className="btn btn-primary mb-2">View All Posts</button>
              <button className="btn btn-warning mb-2">Edit Post</button>
              <button className="btn btn-danger mb-2">Delete Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostManagement;
