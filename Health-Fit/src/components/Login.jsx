import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get(`http://localhost:3001/users`, {
          username,
          password
        });
        if (username == response.data.username && password == response.data.password) {
          setMessage(response.data.message);
          console.log('Login successful');
        } else {
          setMessage('Login failed');
          console.log('Login failed');
        }
      } catch (error) {
        setMessage('Login failed');
        console.error('Error:', error);
      }
    };
    return (
        <form className="Login" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
          </form>
    )
}
export default Login