// pages/ViewMyComments.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
function AuthorMyComments() {
  const navigate=useNavigate()
  const [comments, setMyCommands] = useState([]);
  const decodedTokenId=jwtDecode(localStorage.getItem('token'))
    const decodedTokenIdStore=decodedTokenId.id


  const FetchMyCommand = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}mycommands/${decodedTokenIdStore}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setMyCommands(res.data.FetchMyCommand);
    } catch (err) {
      toast.error('Failed to fetch commands. Please try again.');
    }
  };
  const handleDelete = (id) => {
    // Handle the delete operation (replace with an actual API call)
    setMyCommands(comments.filter((comment) => comment.id !== id));
    alert(`Comment with ID ${id} deleted.`);
  };

  const handleEdit = (id) => {
    // Redirect to the edit page (you can implement an edit page)
    alert(`Editing comment with ID ${id}`);
  };
  useEffect(() => {
    FetchMyCommand()
  }, []);
  return (
    <div className="container mt-4">
      <h2>Your Comments</h2>
      <p>Manage your comments on posts:</p>
      <div className="row">
        {comments.length === 0 ? (
          <p>You have not commented on any posts yet.</p>
        ) : (
          comments.map((comment) => (
            <div className="col-md-6" key={comment._id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Comment on: {comment.Post.Title}</h5>
                  <p className="card-text">{comment.Command}</p>
                  <p className="card-text">
                    <small className="text-white">Posted on {comment.createdAt.split('T')[0]}</small>
                  </p>
                  {/* <button
                    className="btn btn-secondary me-2"
                    onClick={() => handleEdit(comment.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(comment.id)}
                  >
                    Delete
                  </button>
                   */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <button className="btn btn-primary " style={{marginTop:"20px"}} onClick={() => navigate('/author')}>
                  &larr; Back
                </button>
    </div>
  );
}

export default AuthorMyComments;
