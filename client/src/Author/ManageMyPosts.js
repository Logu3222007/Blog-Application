import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function ManageMyPosts() {
  const [draft,setdraft]=useState([])
  const navigate=useNavigate()
  const handleDraft = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}managemypost`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setdraft(res.data.GetDraftPost);
    } catch (err) {
      toast.error("Failed to fetch posts. Please try again.");
    }
  };
  const handlePublish=async(id)=>{
    try {
      const res = await axios.put(`${process.env.REACT_APP_URL}managemypost/${id}`, {Published:'yes'},{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      if (res.status === 200) {
        handleDraft()
        toast.success('User Post draft successfully!');
        setdraft((prevPosts) => prevPosts.filter((post) => post._id !== id));

        
      }
    } catch (err) {
      toast.error("Failed to draft post. Please try again.");
    }
  };
  
  useEffect(()=>{
    handleDraft()
  },[])
  return (
    <div className="container mt-4">
  <h2>Manage My Posts</h2>
  <div className="row">
    <div className="col-md-12">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">View, Edit, Delete, or Publish Your Posts</h5>
          <p className="card-text">
            Here you can manage all your posts. You can edit, delete, or publish them.
          </p>
          <Link to={'/managepost'}>
            <button className="btn btn-primary">
              Manage Posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
<h2>Drafted Posts,</h2><br/>
  {/* Display drafted posts in rows of three */}
  <div className="row">
    {draft.map((item, index) => (
      <div className="col-md-4" key={index}> {/* col-md-4 will take up 1/3 of the row */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{item.Title}</h5>
            <p className="card-text">{item.Content}</p>
            <button className="btn btn-warning mb-1">Edit</button>&nbsp;&nbsp;
            <button className="btn btn-danger mb-1">Delete</button>&nbsp;&nbsp;
            <button className="btn btn-success mb-1"onClick={()=>handlePublish(item._id)}>Publish</button>
          </div>
        </div>
      </div>
    ))}
  </div>
  
<div className="blog-footer"><br/>
           <button className="back-button btn btn-primary mb-1" onClick={() => navigate('/author')}>
             &larr; Back
           </button>
         </div>
</div>

  );
}

export default ManageMyPosts;
