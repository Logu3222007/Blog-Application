import React from "react";
import { Link } from "react-router-dom";

function ExplorePosts() {
  return (
    <div className="container mt-4">
      <h2>Explore Posts</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Browse and Read Posts</h5>
              <p className="card-text">Explore a variety of posts from authors on different topics.</p>
              <Link to={'/viewallposts'}>
              <button className="btn btn-primary" >
                View All Posts
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Example of rendering post list (for illustration) */}
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Post Title 1</h5>
              <p className="card-text">Short description of the post...</p>
              <button className="btn btn-link">Read More</button>
            </div>
          </div>
        </div>
        {/* Repeat for other posts */}
      </div>
    </div>
  );
}

export default ExplorePosts;
