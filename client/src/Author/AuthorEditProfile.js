import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

function AuthorEditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("A few words about who you are.");
  const [getProfile, setgetProfile] = useState({});
  const navigate = useNavigate();
  const decodedTokenId = jwtDecode(localStorage.getItem("token")) || 'No Token is Found!';
  const decodedTokenIdStore = decodedTokenId.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_URL}authoreditprofile/${decodedTokenIdStore}`,
        { name, email, bio },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
          },
        }
      );

      if (res.status === 200) {
        toast.success('User Profile Updated successfully!');
      }
    } catch (err) {
      toast.error("Failed to Update User Profile. Please try again.");
    }
  };

  const FetchProfileData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}authoreditprofile/${decodedTokenIdStore}`, // Endpoint to fetch user details
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
          },
        }
      );

      if (response.status === 200) {
        console.log("Profile data fetched successfully:", response.data);
        setgetProfile(response.data.ProfileData); // Assuming `ProfileData` contains the user's details
        setName(response.data.ProfileData.Username); // Set name to the fetched profile's name
        setEmail(response.data.ProfileData.Email); // Set email
        setBio(response.data.ProfileData.Bio || "A few words about who you are."); // Set bio, or default bio if empty
      } else {
        console.error("Failed to fetch profile data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found in localStorage.");
      navigate("/login"); // Redirect only if not on login or register page
    } else {
      FetchProfileData(); // Fetch profile data when component mounts
    }
  }, [navigate]);

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
            disabled
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
      
      <button className="btn btn-primary " style={{marginTop:"20px"}} onClick={() => navigate('/authormyprofile')}>
                  &larr; Back
                </button>
    </div>
  );
}

export default AuthorEditProfile;
