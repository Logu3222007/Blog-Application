// pages/Register.js
import React, { useState } from "react";
import axios from 'axios'
import {  toast } from 'react-toastify';


function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}register`, formData);
      if (res.status === 201) {
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        toast.success(res.message);
      }
    } catch (err) {
      toast.error("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="col-md-6 mx-auto" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
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
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      
    </div>
  );
}

export default Register;
