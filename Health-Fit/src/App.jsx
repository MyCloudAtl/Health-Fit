import './App.css'
import axios from 'axios'
import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Calendar from './components/Calendar'
import Gym from './components/Gym'
import Nutrition from './components/Nutrition'
import { Link, useNavigate } from 'react-router-dom'

function App() {
  const [nutrition, setNutrition] = useState ([])
  const [gym,setGym] = useState ([])
 
  const addNutrition = (newNutrition) => {
    setNutrition([...nutrition, newNutrition]);
  }; 

  const addGym= (newGym) => {
    setGym([...gym, newGym]);
  }; 

  // const addNutrition = (e) => {
  //   e.preventDefault()
  //   const currentNutrition = nutrition
  //   const createdNutrition = {
  //     ...newNutrition,
  //     id: parseInt(nutrition.length + 1),
  //   }
  //   currentNutrition.push(createdNutrition)
  //   setNutrition(currentNutrition)
  //   setNewNutrition({ id: '', drink: '', ounces: '', time: '', calories: '', meal: '', ounces: '', time: '', calories: '', snack: '', ounces: '', time: '', calories: '' })
  // }

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
          {/* <Route path="/nutrition" element={<Nutrition newNutrition={newNutrition} handleChange={handleChange} addNutrition={addNutrition} />}/> */}
          <Route path="/gym" element={<Gym addGym={addGym} />} />
          <Route path="/calendar" element={<Calendar nutrition={nutrition} gym={gym} />} />     
      </Routes>   
    </main>
    </div>
  )
}

export default App
