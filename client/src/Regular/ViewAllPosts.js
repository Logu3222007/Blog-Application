// pages/ViewAllPosts.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ViewAllPosts() {
  const [ViewAllPosts,setViewAllPosts]=useState([])
  const navigate=useNavigate()
  const HandleViewAllPosts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}authorviewallposts`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setViewAllPosts(res.data.GetViewAllPosts);
    } catch (err) {
      console.log("Failed to fetch posts. Please try again.");
    }
  };
  useEffect(()=>{
    HandleViewAllPosts()
  },[])

  return (
    <div className="container mt-4">
      <h2>All Posts</h2>
      <p>Explore the latest posts from various authors:</p>
      <div className="row">
        {ViewAllPosts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          ViewAllPosts.map((post) => (
            <div className="col-md-4" key={post._id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{post.Title}</h5>
                  <h6 className="card-subtitle mb-2 text-white">By {post.User.Username}</h6>
                  <p className="card-text">{post.Content}</p>
                  <p className="card-text">
                    <small className="text">Posted on {post.createdAt.split('T')[0]}</small>
                  </p>
                  <Link to={`/viewallpostsid/${post._id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
<button className="back-button btn btn-primary mb-1" onClick={() => navigate('/exploreposts')}>
             &larr; Back
           </button>
    </div>
  );
}

export default ViewAllPosts;
