import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {useNavigate} from 'react-router-dom'
import Header from "../Container/Header";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate=useNavigate()
  const [user, setUser] = useState(null); // To store decoded user info
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    try {
      // Send login request to the backend
      const res = await axios.post(`${process.env.REACT_APP_URL}login`, formData);

      console.log("Response from backend:", res);

      if (res.status === 200) {
        // On success, store the token in localStorage
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));

        // Decode the token using jwtDecode
        const decodedToken = jwtDecode(res.data.token)
        
        // Save the decoded user info
        setUser(decodedToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

        navigate(
          decodedToken.role === 'regular' ? '/regular' :
          decodedToken.role === 'admin' ? '/admin' :
          decodedToken.role === 'author' ? '/author' : '/login'
        );

        toast.success(res.data.message || "Login successful! Welcome back.");
      } else if (res.status === 400) {
        toast.error(res.data.message || "Invalid input. Please check your email and password.");
      } else if (res.status === 404) {
        toast.error(res.data.message || "Account not found. Please check your email or sign up.");
      } else if (res.status === 401) {
        toast.error(res.data.message || "Unauthorized. Incorrect email or password.");
      }
    } catch (err) {
      if (err.response && err.response.status === 500) {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="col-md-6 mx-auto" style={{ paddingTop: "90px", paddingBottom: "50px" }}>
      <h2>Logins</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

    </div>
  );
}

export default Login;
