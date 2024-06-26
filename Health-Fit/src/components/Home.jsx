import { Link } from "react-router-dom"
import React from "react"
import BigCalendar from "../BigCalendar.jsx"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Home = ({currentUser}) => {
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
      const response = await axios.post('/login',credentials);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
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
      </div>
      </div>
    )
  }
export default Home  
