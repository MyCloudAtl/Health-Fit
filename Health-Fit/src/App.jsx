import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Calendar from './BigCalendar'
import Gym from './components/Gym'
import Nutrition from './components/Nutrition'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegisterForm from './components/RegisterForm'

function MyVerticallyCenteredModal({ show, onHide, event }) {
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
        {event ? (
          <>
            {event.type === 'gym' && (
              <>
                <h3>Gym</h3>
                <h5>Cardio</h5>
                <p>Activity: {event.data.cardioActivity}</p>
                <p>Heart Rate: {event.data.cardioHeartRate}</p>
                <p>Time Spent: {event.data.cardioTimeSpent}</p>
                <h5>Stretches</h5>
                <p>Activity: {event.data.stretchActivity}</p>
                <p>Flexibility Rate: {event.data.stretchFlexibilityRate}</p>
                <p>Time Spent: {event.data.stretchTimeSpent}</p>
                <h5>Weights</h5>
                <p>Activity: {event.data.weightsActivity}</p>
                <p>Reps: {event.data.weightsReps}</p>
                <p>Sets: {event.data.weightsSets}</p>
                <p>Time Spent: {event.data.weightsTimeSpent}</p>
              </>
            )}
            {event.type === 'nutrition' && (
              <>
                <h3>Nutrition</h3>
                <h5>Drink</h5>
                <p>Type: {event.data.drink}</p>
                <p>Oz: {event.data.drinkOunces}</p>
                <p>Time: {event.data.drinkTime}</p>
                <p>Calories: {event.data.drinkCalories}</p>
                <h5>Meal</h5>
                <p>Type: {event.data.meal}</p>
                <p>Oz: {event.data.mealOunces}</p>
                <p>Time: {event.data.mealTime}</p>
                <p>Calories: {event.data.mealCalories}</p>
                <h5>Snack</h5>
                <p>Type: {event.data.snack}</p>
                <p>Oz: {event.data.snackOunces}</p>
                <p>Time: {event.data.snackTime}</p>
              </>
            )}
          </>
        ) : (
          <p>No data available.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [nutrition, setNutrition] = useState([]);
  const [gym, setGym] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState(null)

  useEffect(() => {

    const fetchUser = async () => {
      try{
        const userRes = await axios.get('http://localhost:3001/currentUser')
        setUser(userRes.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getData = async () => {
      try {
        const gymRes = await axios.get('http://localhost:3001/gyms');
        const nutritionRes = await axios.get('http://localhost:3001/nutrition');

        const gymEvents = gymRes.data.map(g => ({
          title: `Cardio: ${g.cardioActivity} Stretch: ${g.stretchActivity} Weights: ${g.weightsActivity}`,
          start: new Date(g.date),
          end: new Date(g.date),
          type: 'gym',
          data: g
        }));

        const nutritionEvents = nutritionRes.data.map(n => ({
          title: `Meal: ${n.meal} Snack: ${n.snack} Drink: ${n.drink}`,
          start: new Date(n.date),
          end: new Date(n.date),
          type: 'nutrition',
          data: n
        }));

        setEvents([...gymEvents, ...nutritionEvents]);
        setGym(gymRes.data);
        setNutrition(nutritionRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
  const fetchCurrentUser = async () => {
    try {
        const response = await axios.get('/currentUser');
        setCurrentUser(response.data);
    } catch (error) {
        console.error('Error fetching current user:', error);
    }
};
fetchCurrentUser();
}, []);

  const addNutrition = (newNutrition) => {
    setNutrition([...nutrition, newNutrition]);
    setEvents([...events, {
      title: `Meal: ${newNutrition.meal} Snack: ${newNutrition.snack} Drink: ${newNutrition.drink}`,
      start: new Date(newNutrition.date),
      end: new Date(newNutrition.date),
      type: 'nutrition',
      data: newNutrition
    }]);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setModalShow(true);
  };


const addGym = (newGym) => {
        setGym([...gym, newGym]);
        setEvents([...events, {
            title: `Cardio Workout: ${newGym.cardioActivity} HR:${newGym.cardioHeartRate} Time: ${newGym.cardioTimeSpent} Stretch Workout: ${newGym.stretchActivity} Flex:${newGym.stretchFlexibilityRate} Time: ${newGym.stretchTimeSpent} Weight Workout: ${newGym.weightsActivity} Reps:${newGym.weightsReps} Sets: ${newGym.weightsSets} Time: ${newGym.weightsTimeSpent}`,
            start: new Date(newGym.date),
            end: new Date(newGym.date),
            type: 'gym',
            data: newGym

          }]);
  };

  

  return (
    <div className="Main">
      <header>
        <nav className='header'>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/nutrition">
            <button>Nutrition</button>
          </Link>
          <Link to="/gym">
            <button>Gym</button>
          </Link>
        </nav>
        <RegisterForm />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route path="/nutrition" element={<Nutrition addNutrition={addNutrition} />} />
          <Route path="/gym" element={<Gym addGym={addGym} />} />
          <Route path="/calendar" element={<Calendar events={events} onEventClick={handleEventClick} />} />
        </Routes>
      </main>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        event={selectedEvent}
      />
    </div>
  );
}

export default App;
