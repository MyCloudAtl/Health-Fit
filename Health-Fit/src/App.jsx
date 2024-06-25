import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Calendar from './BigCalendar'
import Gym from './components/Gym'
import Nutrition from './components/Nutrition'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal({show, onHide, newGym, newNutrition}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Daily Log
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {newGym && (
          <>
            <h3>Gym</h3>
            <h5>Cardio</h5>
            <p>Activity: {newGym.cardioActivity}</p>
            <p>Heart Rate: {newGym.cardioHeartRate}</p>
            <p>Time Spent: {newGym.cardioTimeSpent}</p>
            <h5>Stretches</h5>
            <p>Activity: {newGym.stretchActivity}</p>
            <p>Flexibility Rate: {newGym.stretchFlexibilityRate}</p>
            <p>Time Spent: {newGym.stretchTimeSpent}</p>
            <h5>Weights</h5>
            <p>Activity: {newGym.weightsActivity}</p>
            <p>Reps: {newGym.weightsReps}</p>
            <p>Sets: {newGym.weightsSets}</p>
            <p>Time Spent: {newGym.weightsTimeSpent}</p>
          </>
        )}
        {newNutrition && (
          <>
            <h3>Nutrition</h3>
            <h5>Drink</h5>
            <p>Type: {newNutrition.drink}</p>
            <p>Oz: {newNutrition.drinkOunces}</p>
            <p>Time: {newNutrition.drinkTime}</p>
            <p>Calories: {newNutrition.drinkCalories}</p>
            <h5>Meal</h5>
            <p>Type: {newNutrition.meal}</p>
            <p>Oz: {newNutrition.mealOunces}</p>
            <p>Time: {newNutrition.mealTime}</p>
            <p>Calories: {newNutrition.mealCalories}</p>
            <h5>Snack</h5>
            <p>Type: {newNutrition.snack}</p>
            <p>Oz: {newNutrition.snackOunces}</p>
            <p>Time: {newNutrition.snackTime}</p>
          </>
        )}
        {!newGym && !newNutrition && <p>No data available.</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [nutrition, setNutrition] = useState([])
  const [gym, setGym] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const calendarRes = await axios.get('http://localhost:3001/calendar');
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
          <Route path="/calendar" element={<Calendar events={events} gym={gym} />} />
        </Routes>
      </main>
      <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        See Data
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        newGym={gym[gym.length - 1]}
        newNutrition={nutrition[nutrition.length - 1]} 
        />
    </>
    </div>
  );
}

export default App;
