import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Logout = () => {

    let navigate = useNavigate();
    const [message, setMessage] = useState('');
    
    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:3001/logout');
            setMessage(response.data.message);
            navigate('/')
        } catch (error) {
            setMessage('Logout failed. Please try again.');
        }
    };

    return (
       <div>
        <button onClick={handleLogout}>Logout</button>
        {message && <p>{message}</p>}
       </div>
    )
}

export default Logout;
