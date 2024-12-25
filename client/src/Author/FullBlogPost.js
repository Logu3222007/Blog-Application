import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const FullBlogPost = () => {
  const [getBlog, setGetBlog] = useState({});
  const [commandInput, setCommandInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [visibleCommands, setVisibleCommands] = useState(3); // Controls how many commands are displayed
  const navigate = useNavigate();
  const { id } = useParams();

  const HandleBlogbyId = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}fullblogpost/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setGetBlog(res.data.GetBlogById);
    } catch (err) {
      toast.error('Failed to fetch posts. Please try again.');
    }
  };

  const FetchCommand = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}commands/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCommandHistory(res.data.FetchCommand);
    } catch (err) {
      toast.error('Failed to fetch commands. Please try again.');
    }
  };

  const handleCommandSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}commands`,
        { commandInput, id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (res.status === 201) {
        setCommandInput('');
        FetchCommand();
        toast.success('User command created successfully!');
      }
    } catch (err) {
      toast.error('Failed to create command. Please try again.');
    }
  };

  const handleViewMoreCommands = () => {
    setVisibleCommands((prev) => prev + 3); // Increment the visible commands by 3
  };

  useEffect(() => {
    HandleBlogbyId();
    FetchCommand();
  }, []);

  return (
    <div className="container mt-5">
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
              <br />
              <div className="mt-3 text-start">
                <button className="btn btn-primary " onClick={() => navigate('/authorviewallposts')}>
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
                <>
                  <ul className="list-group">
                    {commandHistory.slice(0, visibleCommands).map((entry, index) => (
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
                            <span className="fw-bold">By:</span> {entry.User.Username || 'Unknown User'}
                            <span className="mx-1">|</span>
                            <span className="fw-bold">At:</span>{' '}
                            {new Date(entry.createdAt).toLocaleString()}
                          </small>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {visibleCommands < commandHistory.length && (
                    <button
                      className="btn btn-link mt-2"
                      onClick={handleViewMoreCommands}
                    >
                      View More Commands
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlogPost;
