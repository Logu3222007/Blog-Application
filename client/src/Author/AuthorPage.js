import React from "react";
import { Link } from "react-router-dom";
import AuthorMyActivity from "./AuthorMyActivity";

function AuthorPage() {
  return (
    <div className="container mt-4">
      <h2>Author Dashboard</h2>
      <div className="row">
        {/* Manage Posts */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Manage My Posts</h5>
              <p className="card-text">
                View, edit, delete, or publish your posts.
              </p>
              <Link to={'/managemypost'}>
              <button className="btn btn-primary">View My Posts</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Create Post */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Create a New Post</h5>
              <p className="card-text">Write a new blog post to share with the community.</p>
              <Link to={'/createpost'}>
              <button
                className="btn btn-primary"
               
              >
                Create Post
              </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Manage Comments */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Manage Comments</h5>
              <p className="card-text">
                View and respond to comments on your posts.
              </p>
              <Link to={'/managecomments'}>
              <button className="btn btn-primary">View Comments</button>
              </Link>
            </div>
          </div>
        </div>
         {/* View Posts */}
         <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Explore Posts</h5>
              <p className="card-text">Browse and read posts from authors.</p>
              <Link to={'/authorexplorepost'}>
              <button
                className="btn btn-primary"
                
              >
                View Posts
              </button>
              </Link>
            </div>
          </div>
        </div>
         {/* Manage Comments */}
         <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">My Comments</h5>
              <p className="card-text">View, edit, or delete your comments on posts.</p>
              <Link to={'/authormycomments'}>
              <button
                className="btn btn-primary"
                
              >
                View Posts
              </button>
              </Link>
            </div>
          </div>
        </div>
         {/* Manage Profile */}
         
         <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">Update your profile information.</p>
              <Link to={'/authormyprofile'}>
              <button
                className="btn btn-primary"
                
              >
                View Posts
              </button>
              </Link>
            </div>
          </div>
          
        </div><div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
            <h5 className="card-title">Your Recent Activity</h5>
              <p className="card-text">
                Check the interactions and activity you've had on the platform.
              </p>
              <Link to={'/authorallactivities'}>
              <button className="btn btn-primary" >
                View Activity History
              </button>
              </Link>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AuthorPage;
