import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const FullBlogPost = () => {
  const [getBlog, setGetBlog] = useState({});
  const [commandInput, setCommandInput] = useState(''); // Command input state
  const [commandHistory, setCommandHistory] = useState([]); // Command history state
  const navigate = useNavigate();
  const { id } = useParams(); // Get blog post ID from URL

  // Fetch blog post by ID
  const HandleBlogbyId = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}fullblogpost/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setGetBlog(res.data.GetBlogById);
    } catch (err) {
      toast.error('Failed to fetch posts. Please try again.');
    }
  };

  // Handle command submission
  const handleCommandSubmit = async(e) => {
    e.preventDefault();    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}commands`, {commandInput,id},{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      if (res.status === 201) {
        setCommandInput('')

        toast.success('User command created successfully!');
      }
    } catch (err) {
      toast.error("Failed to create command. Please try again.");
    }

  };
  
  const handleEditCommand = (index) => {
    const commandToEdit = commandHistory[index];
    const newCommand = prompt(
      `Edit the command for "${commandToEdit.command}":`,
      commandToEdit.command
    );
    if (newCommand !== null && newCommand.trim() !== "") {
      const updatedHistory = [...commandHistory];
      updatedHistory[index].command = newCommand;
      setCommandHistory(updatedHistory);
      toast.success("Command updated successfully!");
    }
  };
  const handleDeleteCommand = (index) => {
    if (window.confirm("Are you sure you want to delete this command?")) {
      const updatedHistory = commandHistory.filter((_, i) => i !== index);
      setCommandHistory(updatedHistory);
      toast.success("Command deleted successfully!");
    }
  };
    
  // Effect to fetch blog post when the component loads
  useEffect(() => {
    HandleBlogbyId();
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
                  By {getBlog?.User?.Username || 'Unknown Author'}
                </span>
                <span className="published-date ms-3">{new Date(getBlog.createdAt).toLocaleDateString()}</span>
              </p>
              <div className="mt-4">
                <p>{getBlog.Content}</p>
              </div>
              <br/>
              <div className="mt-3 text-start">
                <button
                  className="btn btn-primary "
                  onClick={() => navigate('/authorexplorepost')}
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
          {commandHistory.map((entry, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <p className="mb-1">
                  <span className="fw-bold text-primary">Command:</span>
                  <span className="text-dark"> {entry.command}</span>
                </p>
                <small className="text-muted">
                  <span className="fw-bold">By:</span> {entry.username || 'Unknown User'}
                  <span className="mx-1">|</span>
                  <span className="fw-bold">At:</span>{' '}
                  {new Date(entry.timestamp).toLocaleString()}
                </small>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-light btn-sm dropdown-toggle "
                  type="button"
                  id={`commandOptions-${index}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{padding:"2px",paddingRight:"4px"}}
                >
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby={`commandOptions-${index}`}
                >
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleEditCommand(index)}
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={() => handleDeleteCommand(index)}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default FullBlogPost;
