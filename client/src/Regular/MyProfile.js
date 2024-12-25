import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
function MyProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [getProfile, setgetProfile] = useState({});
  const navigate = useNavigate();
  const decodedTokenId = jwtDecode(localStorage.getItem("token")) || 'No Token is Found!';
  const decodedTokenIdStore = decodedTokenId.id;

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
      <h2>My Profile</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Update Your Profile Information</h5>
              <p className="card-text">
                Modify your personal details like name, email, and profile picture.
              </p>
              <Link to={'/editprofile'}>
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
              <p className="card-text">Bio: {bio}</p>
            </div>
          </div>
        </div>
      </div>
      
<button className="back-button btn btn-primary mb-1"  style={{marginTop:"15px"}}onClick={() => navigate('/regular')}>
             &larr; Back
           </button>
    </div>
  );
}

export default MyProfile;
