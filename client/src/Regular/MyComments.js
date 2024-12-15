import React from "react";
import { Link } from "react-router-dom";

function MyComments() {
  return (
    <div className="container mt-4">
      <h2>My Comments</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">View, Edit, or Delete Your Comments</h5>
              <p className="card-text">
                See the comments you've made on posts and manage them as needed.
              </p>
              <Link to={'/viewmycomments'}>
              <button className="btn btn-primary" >
                View My Comments
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Example of rendering comment list (for illustration) */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-2">
            <div className="card-body">
              <h6 className="card-title">Comment on Post Title 1</h6>
              <p className="card-text">Your comment content goes here...</p>
              <button className="btn btn-warning mb-1">Edit</button>
              <button className="btn btn-danger mb-1">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComments;
