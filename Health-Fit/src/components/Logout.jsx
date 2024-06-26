import React, { useState } from 'react';
import axios from 'axios';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await axios.get('/logout');
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
        };

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}
export default Logout