import React from "react";

function AdminPage() {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">User Management</h5>
              <p className="card-text">View, edit, or delete user accounts.</p>
              <button className="btn btn-primary">Manage Users</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Post Management</h5>
              <p className="card-text">View, edit, or delete all posts.</p>
              <button className="btn btn-primary">Manage Posts</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Comment Management</h5>
              <p className="card-text">View, edit, or delete comments.</p>
              <button className="btn btn-primary">Manage Comments</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Category Management</h5>
              <p className="card-text">Add, edit, or delete categories.</p>
              <button className="btn btn-primary">Manage Categories</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Tag Management</h5>
              <p className="card-text">Add, edit, or delete tags.</p>
              <button className="btn btn-primary">Manage Tags</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
