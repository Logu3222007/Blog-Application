// pages/EditProfile.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthorEditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Assume we have a function to fetch the user's current data
    // For example: fetchUserData()
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
      bio: "This is a short bio about John.",
    };
    setName(user.name);
    setEmail(user.email);
    setBio(user.bio);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like sending updated data to the server.
    // Example: updateProfile(name, email, bio)

    console.log("Profile Updated:", { name, email, bio });

    // After updating, redirect the user back to their profile page
    navigate("/myprofile");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">
            Bio
          </label>
          <textarea
            className="form-control"
            id="bio"
            rows="3"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default AuthorEditProfile;
