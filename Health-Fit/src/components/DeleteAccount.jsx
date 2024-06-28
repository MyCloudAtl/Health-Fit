import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const DeleteAccount = ({ userId }) => {
    let navigate = useNavigate()
    
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        if (!window.confirm('You are about to delete your accont!? This action cannot be undone.'))
            return
            try {
                const response = await axios.delete(`http://localhost:3001/users/${userId}`);
                setMessage(response.data.message);
                navigate('/')
            } catch (error) {
                setMessage(error.response?.data?.message || 'Error deleting account');
            }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Account</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteAccount;
