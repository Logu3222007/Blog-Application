// pages/ManagePosts.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function ManagePosts() {
  const [posts, setPosts] = useState([]);
  const [editablePost, setEditablePost] = useState(null);  // To track which post is being edited
  const navigate=useNavigate()


  const handleSubmit = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}managepost`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setPosts(res.data.GetCreatedPost);
    } catch (err) {
      if(posts.length===0){
        toast.error("Failed to fetch posts. Please try again.");
      }
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleDelete = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const res = await axios.delete(`${process.env.REACT_APP_URL}managepost/${postId}`,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
          },
        });
        if (res.status === 200) {
          toast.success("Post deleted successfully!");
          handleSubmit(); // Refresh the posts after deletion
        }
      } catch (err) {
        toast.error("Failed to delete post. Please try again.");
      }
    }
  };

  // Handle saving the edited post
  const handleSave = async (postId, updatedTitle, updatedContent) => {
    try {
      const res = await axios.patch(`${process.env.REACT_APP_URL}managepost/${postId}`, {
        Title: updatedTitle,
        Content: updatedContent,
      },{  headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
      },});

      if (res.status === 200) {
        toast.success("Post updated successfully!");
        handleSubmit(); // Refresh the posts after updating
        setEditablePost(null); // Reset editable state
      }
    } catch (err) {
      toast.error("Failed to update post. Please try again.");
    }
  };

  // Handle changes in the editable fields
  const handleEditChange = (e, postId) => {
    const { name, value } = e.target;
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, [name]: value } : post
      )
    );
  };
const handleDraft=async(id)=>{
  try {
    const res = await axios.put(`${process.env.REACT_APP_URL}managepost/${id}`, {Published:'no'},{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
      },
    });
    if (res.status === 200) {
      handleSubmit()
      toast.success('User Post draft successfully!');
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));

      
    }
  } catch (err) {
    toast.error("Failed to draft post. Please try again.");
  }
};


  return (
    <div className="container mt-4">
      <h2>Manage Your Posts</h2>
      <p>Here are your current posts. You can edit or delete them.</p>
      <div className="row">
        {posts.length === 0 ? (
          <p>No posts available. Please create a new post.</p>
        ) : (
          posts.map((post) => (
            <div className="col-md-4" key={post._id}>
              <div className="card mb-4">
                <div className="card-body">
                  {editablePost === post._id ? (
                    <>
                      <input
                        type="text"
                        className="form-control mb-2"
                        value={post.Title}
                        name="Title"
                        onChange={(e) => handleEditChange(e, post._id)}
                      />
                      <textarea
                        className="form-control mb-2"
                        rows="4"
                        value={post.Content}
                        name="Content"
                        onChange={(e) => handleEditChange(e, post._id)}
                      />
                      <button
                        className="btn btn-success"
                        onClick={() => handleSave(post._id, post.Title, post.Content)}
                      >
                        Save
                      </button>
                      &nbsp;&nbsp;
                      <button
                        className="btn btn-secondary ml-2"
                        onClick={() => setEditablePost(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title">{post.Title}</h5>
                      <p className="card-text">{post.Content}</p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-warning"
                          onClick={() => setEditablePost(post._id)} // Enable editing
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(post._id)}
                        >
                          Delete
                        </button>
                        <span>
                          {post.published ? (
                            <span className="badge bg-success">Published</span>
                          ) : (
                            <span className="badge bg-secondary"style={{cursor:'pointer'}}
                            onClick={()=>{handleDraft(post._id)}}
                            >Draft</span>
                          )}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Link to="/createpost" className="btn btn-success">
        Create New Post
      </Link>
      
<div className="blog-footer"><br/>
           <button className="back-button btn btn-primary mb-1" onClick={() => navigate('/managemypost')}>
             &larr; Back
           </button>
         </div>
    </div>
  );
}

export default ManagePosts;
