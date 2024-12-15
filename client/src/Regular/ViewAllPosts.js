// pages/ViewAllPosts.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewAllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts data from the backend (replace with your actual API call)
    const samplePosts = [
      {
        id: 1,
        title: "Understanding React",
        author: "Author 1",
        createdAt: "2024-12-10",
        excerpt: "A deep dive into React components and hooks.",
      },
      {
        id: 2,
        title: "CSS Flexbox Guide",
        author: "Author 2",
        createdAt: "2024-12-09",
        excerpt: "Learn how to use Flexbox for layout design.",
      },
      {
        id: 3,
        title: "JavaScript ES6 Features",
        author: "Author 3",
        createdAt: "2024-12-08",
        excerpt: "New features in JavaScript ES6 and how to use them.",
      },
    ];

    setPosts(samplePosts);
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Posts</h2>
      <p>Explore the latest posts from various authors:</p>
      <div className="row">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">By {post.author}</h6>
                  <p className="card-text">{post.excerpt}</p>
                  <p className="card-text">
                    <small className="text-muted">Posted on {post.createdAt}</small>
                  </p>
                  <Link to={`/posts/${post.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewAllPosts;
