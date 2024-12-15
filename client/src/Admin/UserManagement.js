import React from "react";

function UserManagement() {
  return (
    <div className="container mt-4">
      <h2>User Management</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Manage User Accounts</h5>
              <p className="card-text">View, edit, or delete user accounts from the system.</p>
              <button className="btn btn-primary mb-2">View All Users</button>
              <button className="btn btn-warning mb-2">Edit User</button>
              <button className="btn btn-danger mb-2">Delete User</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
