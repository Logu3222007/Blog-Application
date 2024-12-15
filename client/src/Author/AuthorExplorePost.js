import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AuthorExplorePost() {
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
        toast.error("Failed to fetch posts. Please try again.");
      }
    };
    useEffect(()=>{
      HandleViewAllPosts()
    },[])


  return (
    <div className="container mt-4">
      <h2>Explore Posts</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Browse and Read Posts</h5>
              <p className="card-text">Explore a variety of posts from authors on different topics.</p>
              <Link to={'/authorviewallposts'}>
              <button className="btn btn-primary">
                View All Posts
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Example of rendering post list (for illustration) */}
      <div className="row">
  {ViewAllPosts.map((post) => (
    <div className="col-md-4" key={post._id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.Title}</h5>
          <p className="card-text">
            {post.Content.substring(0, 100)}... {/* Show first 100 chars */}
          </p>
          <button 
            className="btn btn-link"
            onClick={() => navigate( `/fullblogpost/${post._id}`)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  ))}
  
</div>
<div className="blog-footer">
           <button className="back-button btn btn-primary mb-1" onClick={() => navigate('/author')}>
             &larr; Back
           </button>
         </div>
    </div>
  );
}

export default AuthorExplorePost;
