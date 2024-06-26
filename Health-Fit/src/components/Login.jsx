import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
    //     const response = await axios.get(`http://localhost:3001/users`, {
    //       username,
    //       password
    //     });
    //     if (username == response.data.username && password == response.data.password) {
    //       setMessage(response.data.message);
    //       console.log('Login successful');
    //     } else {
    //       setMessage('Login failed');
    //       console.log('Login failed');
    //     }
        const response = await axios.post('http://localhost:3001/login', { username, password });
        setMessage(response.data.message);
        navigate('/calendar');
    
      } catch (error) {
         setMessage('Login failed');
          console.error('Error:', error);
          }
        };
    return (
        <form className="Login" onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div> 
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
            <button type="submit">Login</button>
          </form>
    )
}
export default Login