import React, { useState } from 'react';
import axios from 'axios';

const DeleteAccount = () => {
    const handleDelete = async (e) => {
        e.preventDefault()
        alert ('You are about to delete your accont!')
        const response = await axios.delete('http://localhost:3001/users/:id', {
            username,
            password
        })
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}
export default DeleteAccount