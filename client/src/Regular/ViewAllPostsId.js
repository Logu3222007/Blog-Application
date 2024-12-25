import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ViewAllPostsId = () => {
  const [getBlog, setGetBlog] = useState({});
  const [commandInput, setCommandInput] = useState(""); // Command input state
  const [commandHistory, setCommandHistory] = useState([]); // Command history state
  const [visibleCount, setVisibleCount] = useState(3); // Visible commands count
  const navigate = useNavigate();
  const { id } = useParams(); // Get blog post ID from URL

  // Fetch blog post by ID
  const HandleBlogbyId = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}fullblogpost/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token in headers
        },
      });
      setGetBlog(res.data.GetBlogById);
    } catch (err) {
      toast.error("Failed to fetch posts. Please try again.");
    }
  };

  const FetchCommand = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}commands/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token in headers
        },
      });
      setCommandHistory(res.data.FetchCommand);
    } catch (err) {
      toast.error("Failed to fetch commands. Please try again.");
    }
  };

  // Handle command submission
  const handleCommandSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}commands`,
        { commandInput, id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token in headers
          },
        }
      );
      if (res.status === 201) {
        setCommandInput("");
        FetchCommand();
        toast.success("User command created successfully!");
      }
    } catch (err) {
      toast.error("Failed to create command. Please try again.");
    }
  };

  // Load more commands
  const loadMoreCommands = () => {
    setVisibleCount((prev) => prev + 3); // Show 3 more commands
  };

  // Effect to fetch blog post when the component loads
  useEffect(() => {
    HandleBlogbyId();
    FetchCommand();
  }, []);

  return (
    <div className="container mt-5">
      {/* Blog Post Content */}
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h1 className="card-title">{getBlog.Title}</h1>
              <p className="text-muted">
                <span className="author">
                  By {getBlog?.User?.Username || "Unknown Author"}
                </span>
                <span className="published-date ms-3">
                  {new Date(getBlog.createdAt).toLocaleDateString()}
                </span>
              </p>
              <div className="mt-4">
                <p>{getBlog.Content}</p>
              </div>
              <br />
              <div className="mt-3 text-start">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/viewallposts")}
                >
                  &larr; Back
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Command Section */}
        <div className="col-lg-4 col-md-12 mt-4 mt-md-0">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Command Interaction</h5>
              <form onSubmit={handleCommandSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    placeholder="Type your command here"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Command
                </button>
              </form>
            </div>
          </div>

          {/* Command History Section */}
          <div className="card mt-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Command History</h5>
              {commandHistory.length === 0 ? (
                <p className="text-muted">No commands entered yet.</p>
              ) : (
                <div>
                  <ul className="list-group">
                    {commandHistory.slice(0, visibleCount).map((entry, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <p className="mb-1">
                            <span className="fw-bold text-primary">Command:</span>
                            <span className="text-dark"> {entry.Command}</span>
                          </p>
                          <small className="text-muted">
                            <span className="fw-bold">By:</span>{" "}
                            {entry.User.Username || "Unknown User"}
                            <span className="mx-1">|</span>
                            <span className="fw-bold">At:</span>{" "}
                            {new Date(entry.createdAt).toLocaleString()}
                          </small>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {visibleCount < commandHistory.length && (
                    <button
                      className="btn btn-link mt-2"
                      onClick={loadMoreCommands}
                    >
                      View More
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllPostsId;
