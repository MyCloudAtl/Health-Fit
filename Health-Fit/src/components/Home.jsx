import { Link } from "react-router-dom"
import React from "react"
import BigCalendar from "../BigCalendar.jsx"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Home = () => {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    email: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('/api/login', credentials); // Assuming login endpoint on backend

      // // Assuming backend returns a token upon successful login
      // const token = response.data.token;

      // // Store token in localStorage for future requests
      // localStorage.setItem('token', token);

      // Redirect to home page or dashboard
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, show message to user, etc.
    }
  };
    return (
      <div className="home">
          <div>
        <h1>Health-Fit</h1>
          <form className="Login" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
            <label>Email:</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <button type="submit">Login</button>
          </form>
        <BigCalendar/>
      </div>
      </div>
    )
  }
export default Home  
