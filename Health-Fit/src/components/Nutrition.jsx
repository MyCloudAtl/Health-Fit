import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Nutrition = ({addNutrition}) => {
    
    let navigate= useNavigate()
    
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
  });

//   const addNutrition = (e) => {
//     e.preventDefault();
//     const createdNutrition = {
//       ...newNutrition,
//       id: nutrition.length + 1,
//     };
//     setNutrition([...nutrition, createdNutrition]);
//     setNewNutrition({
//       id: '',
//       drink: '',
//       drinkOunces: '',
//       drinkTime: '',
//       drinkCalories: '',
//       meal: '',
//       mealOunces: '',
//       mealTime: '',
//       mealCalories: '',
//       snack: '',
//       snackOunces: '',
//       snackTime: '',
//       snackCalories: '',
//     });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNutrition(newNutrition);
    navigate('/calendar');
  };

  const handleChange = (e) => {
    setNewNutrition({ ...newNutrition, [e.target.name]: e.target.value });
  };
    
    return (
    <div>
    <h1>Nutrition Intake Form</h1>
        <form onSubmit={ handleSubmit }>
          <h2>Drink</h2>
          <input type="text" value={newNutrition.drink} onChange={handleChange} name={'drink'} placeholder={'drink'} />
          <input type="text" value={newNutrition.ounces} onChange={handleChange} name={'drinkOunces'} placeholder={'ounces'} />
          <input type="text" value={newNutrition.time} onChange={handleChange} name={'drinkTime'} placeholder={'time'} />
          <input type="text" value={newNutrition.calories} onChange={handleChange} name={'drinkCalories'} placeholder={'calories'} />
          <h2>Meal</h2>
          <input type="text" value={newNutrition.meal} onChange={handleChange} name={'meal'} placeholder={'meal'} />
          <input type="text" value={newNutrition.ounces} onChange={handleChange} name={'mealOunces'} placeholder={'ounces'} />
          <input type="text" value={newNutrition.time} onChange={handleChange} name={'mealTime'} placeholder={'time'} />
          <input type="text" value={newNutrition.calories} onChange={handleChange} name={'mealCalories'} placeholder={'calories'} />
          <h2>Snack</h2>
          <input type="text" value={newNutrition.snack} onChange={handleChange} name={'snack'} placeholder={'snack'} />
          <input type="text" value={newNutrition.ounces} onChange={handleChange} name={'snackOunces'} placeholder={'ounces'} />
          <input type="text" value={newNutrition.time} onChange={handleChange} name={'snackTime'} placeholder={'time'} />
          <input type="text" value={newNutrition.calories} onChange={handleChange} name={'snackCalories'} placeholder={'calories'} />
          <button>Submit</button>
        </form>
    </div>
    );
}
    export default Nutrition

    