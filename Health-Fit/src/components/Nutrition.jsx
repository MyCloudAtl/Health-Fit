import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Logout from "./Logout.jsx";


const Nutrition = ({ addNutrition }) => {
    let navigate = useNavigate()

    const [newNutrition, setNewNutrition] = useState({
        drink: '',
        drinkOunces: '',
        drinkTime: '',
        drinkCalories: '',
        meal: '',
        mealOunces: '',
        mealTime: '',
        mealCalories: '',
        snack: '',
        snackOunces: '',
        snackTime: '',
        snackCalories: '',
        date: new Date()
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addNutrition(newNutrition);
        navigate('/calendar');
    };

    const handleChange = (e) => {
        setNewNutrition({ ...newNutrition, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setNewNutrition({ ...newNutrition, date });
    };

    return (
        <div>
            <h1>Nutrition Intake Form</h1>
            <form onSubmit={handleSubmit}>
                <h2>Date</h2>
                <DatePicker selected={newNutrition.date} onChange={handleDateChange} />
                <h2>Drink</h2>
                <input type="text" value={newNutrition.drink} onChange={handleChange} name={'drink'} placeholder={'drink'} />
                <input type="text" value={newNutrition.drinkOunces} onChange={handleChange} name={'drinkOunces'} placeholder={'ounces'} />
                <input type="text" value={newNutrition.drinkTime} onChange={handleChange} name={'drinkTime'} placeholder={'time'} />
                <input type="text" value={newNutrition.drinkCalories} onChange={handleChange} name={'drinkCalories'} placeholder={'calories'} />
                <h2>Meal</h2>
                <input type="text" value={newNutrition.meal} onChange={handleChange} name={'meal'} placeholder={'meal'} />
                <input type="text" value={newNutrition.mealOunces} onChange={handleChange} name={'mealOunces'} placeholder={'ounces'} />
                <input type="text" value={newNutrition.mealTime} onChange={handleChange} name={'mealTime'} placeholder={'time'} />
                <input type="text" value={newNutrition.mealCalories} onChange={handleChange} name={'mealCalories'} placeholder={'calories'} />
                <h2>Snack</h2>
                <input type="text" value={newNutrition.snack} onChange={handleChange} name={'snack'} placeholder={'snack'} />
                <input type="text" value={newNutrition.snackOunces} onChange={handleChange} name={'snackOunces'} placeholder={'ounces'} />
                <input type="text" value={newNutrition.snackTime} onChange={handleChange} name={'snackTime'} placeholder={'time'} />
                <input type="text" value={newNutrition.snackCalories} onChange={handleChange} name={'snackCalories'} placeholder={'calories'} />
                <button>Submit</button>
                <div>
               
                </div>
            </form>
            <Logout />
        </div>
    );
}

export default Nutrition
