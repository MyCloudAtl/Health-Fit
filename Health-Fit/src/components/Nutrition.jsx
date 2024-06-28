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
    const [meal, setMeal] = useState('')
    const [mealOunces, setMealOunces] = useState('')
    const [mealTime, setMealTime] = useState('')
    const [mealCalories, setMealCalories] = useState('')
    const [snack, setSnack] = useState('')
    const [snackOunces, setSnackOunces] = useState('')
    const [snackTime, setSnackTime] = useState('')
    const [snackCalories, setSnackCalories] = useState('')
    const [_id, set_id] = useState('')
    const navigate = useNavigate()

    const [user_id, setUser_id] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('http://localhost:3001/currentUser', { withCredentials: true });
                setUser_id(response.data._id);
                console.log(user_id)
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
            user_id,
            drink,
            drinkOunces,
            drinkTime,
            drinkCalories,
            date,
            meal,
            mealOunces,
            mealTime,
            mealCalories,
            snack,
            snackOunces,
            snackTime,
            snackCalories
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
        window.location.reload()
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
                <h2>Drink:</h2>
                 <input type="text" value={drink} onChange={(e) => setDrink(e.target.value)} name="drink" placeholder="Drink" />
                <input type="text" value={drinkOunces} onChange={(e) => setDrinkOunces(e.target.value)} name="drinkOunces" placeholder="Ounces" />
                <input type="text" value={drinkTime} onChange={(e) => setDrinkTime(e.target.value)} name="drinkTime" placeholder="Time" />
                <input type="text" value={drinkCalories} onChange={(e) => setDrinkCalories(e.target.value)} name="drinkCalories" placeholder="Calories" />
                <h2>Snack:</h2>
                <input type="text" value={snack} onChange={(e) => setSnack(e.target.value)} name="snack" placeholder="Snack" />
                <input type="text" value={snackOunces} onChange={(e) => setSnackOunces(e.target.value)} name="snackOunces" placeholder="Ounces" />
                <input type="text" value={snackTime} onChange={(e) => setSnackTime(e.target.value)} name="snackTime" placeholder="Time" />
                <input type="text" value={snackCalories} onChange={(e) => setSnackCalories(e.target.value)} name="snackCalories" placeholder="Calories" />
                <h2>Meal:</h2>
                <input type="text" value={meal} onChange={(e) => setMeal(e.target.value)} name="meal" placeholder="Meal" />
                <input type="text" value={mealOunces} onChange={(e) => setMealOunces(e.target.value)} name="mealOunces" placeholder="Ounces" />
                <input type="text" value={mealTime} onChange={(e) => setMealTime(e.target.value)} name="mealTime" placeholder="Time" />
                <input type="text" value={mealCalories} onChange={(e) => setMealCalories(e.target.value)} name="mealCalories" placeholder="Calories" />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
            <Logout />
        </div>
    );
};

export default NutritionForm;
