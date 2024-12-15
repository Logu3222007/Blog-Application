import React from "react";

function CategoryManagement() {
  return (
    <div className="container mt-4">
      <h2>Category Management</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Manage Categories</h5>
              <p className="card-text">Add, edit, or delete categories for posts.</p>
              <button className="btn btn-primary mb-2">View Categories</button>
              <button className="btn btn-success mb-2">Add Category</button>
              <button className="btn btn-warning mb-2">Edit Category</button>
              <button className="btn btn-danger mb-2">Delete Category</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryManagement;
