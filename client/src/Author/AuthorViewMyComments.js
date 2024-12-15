// pages/ViewMyComments.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AuthorViewMyComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch user's comments data from the backend (replace with your actual API call)
    const sampleComments = [
      {
        id: 1,
        postTitle: "Understanding React",
        commentText: "Great article! Very informative.",
        createdAt: "2024-12-10",
      },
      {
        id: 2,
        postTitle: "JavaScript ES6 Features",
        commentText: "This was really helpful, thanks for sharing.",
        createdAt: "2024-12-09",
      },
    ];

    setComments(sampleComments);
  }, []);

  const handleDelete = (id) => {
    // Handle the delete operation (replace with an actual API call)
    setComments(comments.filter((comment) => comment.id !== id));
    alert(`Comment with ID ${id} deleted.`);
  };

  const handleEdit = (id) => {
    // Redirect to the edit page (you can implement an edit page)
    alert(`Editing comment with ID ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2>Your Comments</h2>
      <p>Manage your comments on posts:</p>
      <div className="row">
        {comments.length === 0 ? (
          <p>You have not commented on any posts yet.</p>
        ) : (
          comments.map((comment) => (
            <div className="col-md-6" key={comment.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Comment on: {comment.postTitle}</h5>
                  <p className="card-text">{comment.commentText}</p>
                  <p className="card-text">
                    <small className="text-muted">Posted on {comment.createdAt}</small>
                  </p>
                  <button
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
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AuthorViewMyComments;
