// pages/ViewActivity.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewActivity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch user's activity history from API (or use hardcoded data for now)
    // For now, let's assume we have this sample data:
    const sampleActivities = [
      {
        id: 1,
        type: "Post",
        title: "Sample Post 1",
        action: "created",
        timestamp: "2024-12-01T12:34:56",
      },
      {
        id: 2,
        type: "Comment",
        title: "Comment on Sample Post 1",
        action: "commented",
        timestamp: "2024-12-02T08:25:30",
      },
      {
        id: 3,
        type: "Post",
        title: "Sample Post 2",
        action: "updated",
        timestamp: "2024-12-03T10:11:45",
      },
      {
        id: 4,
        type: "Comment",
        title: "Comment on Sample Post 2",
        action: "deleted",
        timestamp: "2024-12-04T16:50:12",
      },
    ];

    setActivities(sampleActivities);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Activity History</h2>
      <p>Here is a list of your recent activities on the platform:</p>

      <ul className="list-group">
        {activities.map((activity) => (
          <li className="list-group-item" key={activity.id}>
            <div className="d-flex justify-content-between">
              <div>
                <h5>{activity.type}: {activity.title}</h5>
                <p>
                  {activity.action} on {new Date(activity.timestamp).toLocaleString()}
                </p>
              </div>
              <Link to={`/${activity.type.toLowerCase()}s/${activity.id}`} className="btn btn-info btn-sm">
                View {activity.type}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewActivity;
