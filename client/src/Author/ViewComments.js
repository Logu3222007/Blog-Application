// pages/ViewComments.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

function ViewComments() {
  const [comments, setMyCommands] = useState([]);
  const decodedTokenId=jwtDecode(localStorage.getItem('token'))
    const decodedTokenIdStore=decodedTokenId.id


  const FetchMyCommand = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}viewcommands`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setMyCommands(res.data.FetchMyCommand);
    } catch (err) {
      toast.error('Failed to fetch commands. Please try again.');
    }
  };
  useEffect(()=>{
    FetchMyCommand()
  },[])
  const handleDelete = async (commentId) => {
    // Confirm deletion with the user
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        // Make API call to delete the comment from the database
        const response = await axios.delete(`${process.env.REACT_APP_URL}commands/delete/${commentId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
  
        // If the response is successful, remove the comment from the state
        if (response.status === 200) {
          setMyCommands(comments.filter((comment) => comment._id !== commentId));
          toast.success("Comment deleted successfully!");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to delete the comment. Please try again.");
      }
    }
  };
  

  const handleRespond = (commentId) => {
    // Logic for responding to a comment (e.g., navigate to a response form or open a modal)
    alert(`Responding to comment ID: ${commentId}`);
  };

  return (
    <div className="container mt-4">
      <h2>View Comments</h2>
      <p>Here are the comments made on your posts:</p>
      <div className="row">
        {comments.length === 0 ? (
          <p>No comments available.</p>
        ) : (
          comments.map((comment) => (
            <div className="col-md-4" key={comment._id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Comment by {comment.User.Username}</h5>
                  <p className="card-text">{comment.Command}</p>
                  <p className="card-text">
                    <small className="text-white">
                      Posted on {comment.createdAt.split('T')[0]}
                    </small>
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(comment._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => handleRespond(comment.id)}
                      style={{display:'none'}}
                    >
                      Respond
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Link to="/author" className="btn btn-primary">
        Back to Posts
      </Link>
      
    </div>
  );
}

export default ViewComments;
