import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate=useNavigate()
  const handlePostCreation = async(e) => {
    e.preventDefault();
    // Logic to save the post goes here (e.g., API call)
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}createpost`, {title,content},{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      if (res.status === 201) {
        setTitle('')
        setContent('')

        toast.success('User Post created successfully!');
      }
    } catch (err) {
      toast.error("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Post</h2>
      <form onSubmit={handlePostCreation}>
        <div className="form-group">
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            className="form-control"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postContent">Post Content</label>
          <textarea
            className="form-control"
            id="postContent"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Publish Post
        </button>
        
<div className="blog-footer"><br/>
           <button className="back-button btn btn-primary mb-1" onClick={() => navigate('/author')}>
             &larr; Back
           </button>
         </div>
      </form>
    </div>
  );
}

export default CreatePost;
