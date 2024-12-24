// pages/ViewActivity.js
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
function AuthorAllActivities() {
  const [activities, setActivities] = useState([]);
  const decodedTokenId=jwtDecode(localStorage.getItem('token'))
    const decodedTokenIdStore=decodedTokenId.id


  const FetchActivity = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}viewactivity/${decodedTokenIdStore}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
      setActivities(res.data.activity);
    } catch (err) {
      toast.error('Failed to fetch activities. Please try again.');
    }
  };
  useEffect(()=>{
    FetchActivity()
  },[])


  return (
    <div className="container mt-4">
      <h2>Your Activity History</h2><div style={{display:'flex',justifyContent:"space-between"}}>
      <p>Here is a list of your recent activities on the platform:</p>
      <button className="btn btn-primary">
                Clear All History
              </button>
      </div>
      <br/>
      <ul className="list-group">
        {activities.map((activity) => (
          <li className="list-group-item" key={activity._id}>
            <div className="d-flex justify-content-between">
              <div>
                <h5>{activity.type}: {activity.title}</h5>
                <p>
                  {activity.action} on {new Date(activity.timestamp).toLocaleString()}
                </p>
              </div>
                {/* <Link to={`/${activity.type.toLowerCase()}s/${activity.id}`} className="btn btn-info btn-sm">
                    View {activity.type}
                </Link> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorAllActivities;
