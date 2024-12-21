import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function AuthorMyProfile() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [bio,setBio]=useState()
  const decodedTokenId=jwtDecode(localStorage.getItem('token'))
  const decodedTokenIdStore=decodedTokenId.id

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
  useEffect(()=>{
    FetchProfileData()
  },[])
  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Update Your Profile Information</h5>
              <p className="card-text">
                Modify your personal details like name, email, and profile picture.
              </p>
              <Link to={'/authoreditprofile'}>
              <button className="btn btn-primary" >
                Edit Profile
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Example of displaying profile info (for illustration) */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Username: {name}</h6>
              <p className="card-text">Email: {email}</p>
              <p className="card-text">Bio: {bio}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorMyProfile;
