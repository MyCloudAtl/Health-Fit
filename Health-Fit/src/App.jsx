import './App.css'
import axios from 'axios'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Calendar from './BigCalendar'
import Gym from './components/Gym'
import Nutrition from './components/Nutrition'
import { Link } from 'react-router-dom'

function App() {
  const [nutrition, setNutrition] = useState([])
  const [gym, setGym] = useState([])
  const [events, setEvents] = useState([])

  const addNutrition = (newNutrition) => {
      setNutrition([...nutrition, newNutrition]);
      setEvents([...events, {
          title: `Nutrition: ${newNutrition.meal || newNutrition.snack || newNutrition.drink}`,
          start: new Date(newNutrition.date),
          end: new Date(newNutrition.date),
      }]);
  };

  const addGym = (newGym) => {
      setGym([...gym, newGym]);
      setEvents([...events, {
          title: `Gym: ${newGym.cardioActivity || newGym.stretchActivity || newGym.weightsActivity}`,
          start: new Date(newGym.date),
          end: new Date(newGym.date),
      }]);
  };
  

  return (
      <div className="Main">
          <header>
              <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/nutrition'>Nutrition</Link>
                  <Link to='/gym'>Gym</Link>
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
  )
}

export default App