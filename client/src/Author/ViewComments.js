// pages/ViewComments.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments data from the backend (replace with your actual API call)
    const sampleComments = [
      {
        id: 1,
        postId: 1,
        userName: "User 1",
        comment: "Great post! Very informative.",
        createdAt: "2024-12-10",
      },
      {
        id: 2,
        postId: 2,
        userName: "User 2",
        comment: "This was helpful, thanks for sharing!",
        createdAt: "2024-12-11",
      },
      {
        id: 3,
        postId: 1,
        userName: "User 3",
        comment: "I disagree with some points, but overall good read.",
        createdAt: "2024-12-12",
      },
    ];

    setComments(sampleComments);
  }, []);

  const handleDelete = (commentId) => {
    // Logic to delete a comment (replace with actual API call)
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setComments(comments.filter((comment) => comment.id !== commentId));
      // API call to delete the comment from the database should go here
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
            <div className="col-md-4" key={comment.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Comment by {comment.userName}</h5>
                  <p className="card-text">{comment.comment}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Posted on {comment.createdAt}
                    </small>
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(comment.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => handleRespond(comment.id)}
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
