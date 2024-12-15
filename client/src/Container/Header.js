import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../ThemeContext";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import "../Style/Header.css";
import { jwtDecode } from "jwt-decode";
import LogoutIcon from '@mui/icons-material/Logout';


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const navigate = useNavigate()
  const [userName, setUserName] = useState(null); // State for username
  const [role, setrole] = useState()
  const url = useLocation()
  console.log('role ', role)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log("No token found in localStorage.");
      if (!['/login', '/register',].includes(url.pathname)) {
        navigate('/login'); // Redirect only if not on login or register page
      }
    } else {
      try {
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.email.split('@')[0]);
      } catch (err) {
        console.error("Error decoding token:", err);
        localStorage.removeItem('token'); // Clear invalid token
        navigate('/login');
      }
    }
  }, [navigate, url.pathname]); // Rerun on URL change
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Toggle dropdown menus
  const handleDropdownToggle = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };
  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to log out?");
    if (isConfirmed) {
      // Remove the token from localStorage
      localStorage.removeItem('token');
      navigate('/login')
      console.log("User logged out.");
    } else {
      console.log("User canceled the logout.");
    }
  };
  return (
    <header className={`py-2 px-3 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div className="logo">
          <Link  to={
    role === 'author'
      ? '/author'
      : role === 'regular'
      ? '/regular'
      : '/'
  } className={`text-decoration-none ${theme === "dark" ? "text-white" : "text-dark"}`}>
            <h4>Welcome, {userName || 'Guest'}!</h4>
          </Link>
        </div>
        {/* hide  */}
        { url.pathname === '/login' ? <><Link to={'/register'}>
            <button className="btn btn-outline-secondary" style={{ marginLeft: "590%" }} >
              Register
            </button>
          </Link>
            <Link to={'/login'}>
              <button className="btn btn-outline-secondary" style={{ marginLeft: "380%" }} >
                Login
              </button>
            </Link>
          </> : url.pathname === '/register' ? <><Link to={'/register'}>
            <button className="btn btn-outline-secondary" style={{ marginLeft: "590%" }} >
              Register
            </button>
          </Link>
            <Link to={'/login'}>
              <button className="btn btn-outline-secondary" style={{ marginLeft: "380%" }} >
                Login
              </button>
            </Link>
          </> :
            <nav className="d-none d-lg-flex align-items-center gap-3" style={{ paddingLeft: "30%" }}>
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
                        to="/managemypost"
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
                        to="/createpost"
                        className="dropdown-item"
                        style={{
                          color: theme === "dark" ? "#ffffff" : "#000000",
                          backgroundColor: theme === "dark" ? "transparent" : "transparent",
                        }}
                      >
                        Create a New Post
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/authorexplorepost"
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
                        to="/managecomments"
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
                        to="/authormycomments"
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
              <Link to="/authormyprofile" className={`btn ${theme === "dark" ? "btn-dark text-white" : "btn-light text-dark"}`}>
                My Profile
              </Link>

              {/* Theme Toggle */}
              <button className="btn btn-outline-secondary" onClick={toggleTheme}>
                {theme === "light" ? "Dark" : "Light"} Theme
              </button>
              {/* logout */}
              {
                url.pathname === '/login' ? (
                  <Link to={'/register'}>
                    <button className="btn btn-outline-secondary" >
                      Register
                    </button>
                  </Link>
                ) : url.pathname === '/register' ? (
                  <Link to={'/login'}>
                    <button className="btn btn-outline-secondary" >
                      Login
                    </button>
                  </Link>
                ) : (
                  <button className="btn btn-outline-secondary" onClick={handleLogout}>
                    <LogoutIcon />
                  </button>
                )
              }

            </nav>
        }
        <button className="btn btn-outline-secondary d-lg-none" onClick={handleMenuToggle} style={{ marginLeft: "110px" }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* logout */}
        {
          url.pathname === '/login' ? (
            <Link to={'/register'}>
              <button className="btn btn-outline-secondary d-lg-none" >
                Register
              </button>
            </Link>
          ) : url.pathname === '/register' ? (
            <Link to={'/login'}>
              <button className="btn btn-outline-secondary d-lg-none">
                Login
              </button>
            </Link>
          ) : (
            <button className="btn btn-outline-secondary d-lg-none">
              <LogoutIcon />
            </button>
          )
        }
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

export default Header;
