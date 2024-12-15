// components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Style/Sidebar.css'; // Import the corresponding CSS

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="toggle-icon">{isOpen ? "❮" : "❯"}</span>
      </button>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <ul className="sidebar-menu">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/regular">Regular User</Link></li>
          <li><Link to="/author">Author</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
