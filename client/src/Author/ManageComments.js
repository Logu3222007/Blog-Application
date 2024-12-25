import React from "react";
import { Link } from "react-router-dom";

function ManageComments() {
  return (
    <div className="container mt-4">
      <h2 style={{paddingBottom:"20px"}}>Manage Comments</h2>
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
<Link to="/author" className="btn btn-primary">
        Back
      </Link>      
    </div>
  );
}

export default ManageComments;
