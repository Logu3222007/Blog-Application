import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const FullBlogPost = () => {
  const [getBlog,setgetBlog]=useState({})
  const navigate=useNavigate()
  const { id } = useParams(); // Get blog post ID from URL
  const HandleBlogbyId = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}fullblogpost/${id}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setgetBlog(res.data.GetBlogById);
    } catch (err) {
      toast.error("Failed to fetch posts. Please try again.");
    }
  };
  useEffect(()=>{
    HandleBlogbyId()
  },[])


  return (<>
         <div className="blog-post-container" >
         <div className="blog-post-header">
           <h1 className="blog-title">{getBlog.Title}</h1>
           <p className="blog-meta">
           <span className="author">
  By {getBlog?.User?.Username || 'Unknown Author'}
</span>
             <span className="published-date">{new Date(getBlog.createdAt).toLocaleDateString()}</span>
           </p>
         </div>
         <div className="blog-content">
           <p>{getBlog.Content}</p>
         </div>
         <div className="blog-footer">
           <button className="back-button btn btn-primary mb-1" onClick={() => navigate('/authorexplorepost')}>
             &larr; Back
           </button>
         </div>
       </div>

   

</>);
};

export default FullBlogPost;
