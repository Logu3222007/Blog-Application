import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import "../Style/Header.css";

const AdminHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Toggle dropdown menus
  const handleDropdownToggle = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <header className={`py-2 px-3 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" className={`text-decoration-none ${theme === "dark" ? "text-white" : "text-dark"}`}>
            <h4>My Blog</h4>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="d-none d-lg-flex align-items-center gap-3">
          {/* Dropdown: Posts */}
          <div
            className="dropdown"
            onMouseLeave={() => setActiveDropdown(null)} // Close on mouse leave
          >
            <button
              className={`btn dropdown-toggle ${theme === "dark" ? "btn-dark text-white" : "btn-light text-dark"}`}
              type="button"
              onClick={() => handleDropdownToggle("posts")}
            >
              Posts
            </button>
            {activeDropdown === "posts" && (
             <ul
             className={`dropdown-menu show`}
             style={{
               backgroundColor: theme === "dark" ? "#343a40" : "#ffffff",
               color: theme === "dark" ? "#ffffff" : "#000000",
               border: theme === "dark" ? "1px solid #495057" : "1px solid #f0f0f0",
             }}
           >
             <li>
               <Link
                 to="/posts/manage"
                 className="dropdown-item"
                 style={{
                   color: theme === "dark" ? "#ffffff" : "#000000",
                   backgroundColor: theme === "dark" ? "transparent" : "transparent",
                 }}
               >
                 Manage My Posts
               </Link>
             </li>
             <li>
               <Link
                 to="/posts/create"
                 className="dropdown-item"
                 style={{
                   color: theme === "dark" ? "#ffffff" : "#000000",
                   backgroundColor: theme === "dark" ? "transparent" : "transparent",
                 }}
               >
                 Create New Post
               </Link>
             </li>
             <li>
               <Link
                 to="/posts/explore"
                 className="dropdown-item"
                 style={{
                   color: theme === "dark" ? "#ffffff" : "#000000",
                   backgroundColor: theme === "dark" ? "transparent" : "transparent",
                 }}
               >
                 Explore Posts
               </Link>
             </li>
           </ul>
           
            )}
          </div>

          {/* Dropdown: Comments */}
          <div
            className="dropdown"
            onMouseLeave={() => setActiveDropdown(null)} // Close on mouse leave
          >
            <button
              className={`btn dropdown-toggle ${theme === "dark" ? "btn-dark text-white" : "btn-light text-dark"}`}
              type="button"
              onClick={() => handleDropdownToggle("comments")}
            >
              Comments
            </button>
            {activeDropdown === "comments" && (
              <ul
             className={`dropdown-menu show`}
             style={{
               backgroundColor: theme === "dark" ? "#343a40" : "#ffffff",
               color: theme === "dark" ? "#ffffff" : "#000000",
               border: theme === "dark" ? "1px solid #495057" : "1px solid #f0f0f0",
             }}
           >
             <li>
               <Link
                 to="/posts/manage"
                 className="dropdown-item"
                 style={{
                   color: theme === "dark" ? "#ffffff" : "#000000",
                   backgroundColor: theme === "dark" ? "transparent" : "transparent",
                 }}
               >
                 Manage Comments
               </Link>
             </li>
             <li>
               <Link
                 to="/posts/create"
                 className="dropdown-item"
                 style={{
                   color: theme === "dark" ? "#ffffff" : "#000000",
                   backgroundColor: theme === "dark" ? "transparent" : "transparent",
                 }}
               >
                 My Comments
               </Link>
             </li>
             <li>
            
             </li>
           </ul>
            )}
          </div>

          {/* My Profile */}
          <Link to="/profile" className={`btn ${theme === "dark" ? "btn-dark text-white" : "btn-light text-dark"}`}>
            My Profile
          </Link>

          {/* Theme Toggle */}
          <button className="btn btn-outline-secondary" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </nav>

        {/* Hamburger for Mobile */}
        <button className="btn btn-outline-secondary d-lg-none" onClick={handleMenuToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Popup Menu */}
      {menuOpen && (
        <div
          className={`popup-menu position-fixed top-0 start-0 w-100 h-100 d-flex flex-column ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
          style={{ zIndex: 1050 }}
        >
          <div className="d-flex justify-content-between align-items-center p-3">
            <h5>Menu</h5>
            <button className="btn btn-close btn-light" onClick={handleMenuToggle}></button>
          </div>
          <div className="d-flex flex-column p-3">
            <Link to="/posts/manage" className="dropdown-item" onClick={handleMenuToggle}>Manage My Posts</Link>
            <Link to="/posts/create" className="dropdown-item" onClick={handleMenuToggle}>Create New Post</Link>
            <Link to="/posts/explore" className="dropdown-item" onClick={handleMenuToggle}>Explore Posts</Link>
            <Link to="/comments/manage" className="dropdown-item" onClick={handleMenuToggle}>Manage Comments</Link>
            <Link to="/comments/my" className="dropdown-item" onClick={handleMenuToggle}>My Comments</Link>
            <Link to="/profile" className="dropdown-item" onClick={handleMenuToggle}>My Profile</Link>
            <button className="btn btn-secondary mt-3" onClick={() => {
              toggleTheme();
              handleMenuToggle();
            }}>
              {theme === "light" ? "Dark" : "Light"} Theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
