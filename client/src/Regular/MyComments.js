import React from "react";
import { Link, useNavigate } from "react-router-dom";

function MyComments() {
  const navigate=useNavigate()
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
     
<button className="back-button btn btn-primary mb-1" onClick={() => navigate('/regular')}>
             &larr; Back
           </button>
    </div>
  );
}

export default MyComments;
