import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

const NutritionForm = () => {
    const [drink, setDrink] = useState('');
    const [drinkOunces, setDrinkOunces] = useState('');
    const [drinkTime, setDrinkTime] = useState('');
    const [drinkCalories, setDrinkCalories] = useState('');
    const [date, setDate] = useState(new Date());
    const [message, setMessage] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('http://localhost:3001/currentUser', { withCredentials: true });
                setCurrentUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newNutrition = {
            drink,
            drinkOunces,
            drinkTime,
            drinkCalories,
            date,
        };

        if (currentUser) {
            newNutrition.user_id = currentUser._id;
        }

        try {
            const response = await axios.post('http://localhost:3001/nutrition', newNutrition);
            navigate('/calendar');
        } catch (error) {
            setMessage('Submission failed');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Nutrition Intake Form</h1>
            <form onSubmit={handleSubmit}>
                <h2>Date</h2>
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
                <h2>Drink</h2>
                <input type="text" value={drink} onChange={(e) => setDrink(e.target.value)} name="drink" placeholder="Drink" />
                <input type="text" value={drinkOunces} onChange={(e) => setDrinkOunces(e.target.value)} name="drinkOunces" placeholder="Ounces" />
                <input type="text" value={drinkTime} onChange={(e) => setDrinkTime(e.target.value)} name="drinkTime" placeholder="Time" />
                <input type="text" value={drinkCalories} onChange={(e) => setDrinkCalories(e.target.value)} name="drinkCalories" placeholder="Calories" />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
            <Logout />
        </div>
    );
};

export default NutritionForm;
