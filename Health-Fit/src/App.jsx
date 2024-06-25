import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Calendar from './BigCalendar';
import Gym from './components/Gym';
import Nutrition from './components/Nutrition';
import './App.css';

function App() {
  const [nutrition, setNutrition] = useState([]);
  const [gym, setGym] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const calendarRes = await axios.get('http://localhost:3001/calendar');
        const gymRes = await axios.get('http://localhost:3001/gyms');
        const nutritionRes = await axios.get('http://localhost:3001/nutrition');
        console.log(gymRes)
        console.log(nutritionRes)

        const gymEvents = gymRes.data.map(g => ({
          title: `${g.cardioActivity} ${g.stretchActivity} ${g.weightsActivity}`,
          start: new Date(g.date),
          end: new Date(g.date),
        }));

        console.log(gymEvents)

        const nutritionEvents = nutritionRes.data.map(n => ({
          title: n.mealType,
          start: new Date(n.date),
          end: new Date(n.date),
        }));

        setEvents([...gymEvents, ...nutritionEvents]);
        setGym(gymRes.data);
        setNutrition(nutritionRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    
  }, []);

  const addNutrition = (newNutrition) => {
    setNutrition([...nutrition, newNutrition]);
    setEvents([...events, {
      title: `Meal: ${newNutrition.meal} Snack: ${newNutrition.snack} Drink: ${newNutrition.drink}`,
      start: new Date(newNutrition.date),
      end: new Date(newNutrition.date),
    }]);
  };

const addGym = (newGym) => {
        setGym([...gym, newGym]);
        setEvents([...events, {
            title: `Cardio Workout: ${newGym.cardioActivity} HR:${newGym.cardioHeartRate} Time: ${newGym.cardioTimeSpent} Stretch Workout: ${newGym.stretchActivity} Flex:${newGym.stretchFlexibilityRate} Time: ${newGym.stretchTimeSpent} Weight Workout: ${newGym.weightsActivity} Reps:${newGym.weightsReps} Sets: ${newGym.weightsSets} Time: ${newGym.weightsTimeSpent}`,
            start: new Date(newGym.date),
            end: new Date(newGym.date),

          }]);
  };

  
  return (
    <div className="Main">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/nutrition">Nutrition</Link>
          <Link to="/gym">Gym</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<Nutrition addNutrition={addNutrition} />} />
          <Route path="/gym" element={<Gym addGym={addGym} />} />
          <Route path="/calendar" element={<Calendar events={events} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
