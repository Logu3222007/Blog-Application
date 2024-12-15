// pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Homes from '../Style/Home.css'

function Home() {
  return (
    <div className="container mt-4">
      <h1>Welcome to My Blog</h1>
      <p>Explore the latest posts and discover categories.</p>
      
      {/* Featured Posts Section */}
      <h3>Featured Posts</h3>
      <div className="row">
        {/* Replace with dynamic post data */}
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Post Title 1</h5>
              <p className="card-text">This is a short description of the post. It contains an overview of the content.</p>
              <Link to="/posts/1" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Post Title 2</h5>
              <p className="card-text">Another brief description of a post. Engaging content that encourages users to click.</p>
              <Link to="/posts/2" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Post Title 3</h5>
              <p className="card-text">A quick preview of the post content that will intrigue readers to find out more.</p>
              <Link to="/posts/3" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <h3>Browse Categories</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Technology</h5>
              <p className="card-text">Explore the latest in tech news, tutorials, and discussions.</p>
              <Link to="/category/technology" className="btn btn-info">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Lifestyle</h5>
              <p className="card-text">Get tips, stories, and advice on lifestyle topics, from health to hobbies.</p>
              <Link to="/category/lifestyle" className="btn btn-info">Explore</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Travel</h5>
              <p className="card-text">Discover beautiful travel destinations and travel tips.</p>
              <Link to="/category/travel" className="btn btn-info">Explore</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Comments Section */}
      <h3>Your Recent Comments</h3>
      <div className="row">
        {/* Example of a user's recent comment */}
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Comment on Post Title</h5>
              <p className="card-text">This is a comment you made on one of the blog posts. You can view and edit it.</p>
              <Link to="/my-comments" className="btn btn-secondary">View Comments</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
