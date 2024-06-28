import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Calendar from './BigCalendar'
import Gym from './components/Gym'
import NutritionForm from './components/Nutrition'
import {useNavigate} from "react-router-dom";
import BMI from './components/BMI'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// function MyVerticallyCenteredModal({ show, onHide, event }) {
//   return (
//     <Modal
//       show={show}
//       onHide={onHide}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Daily Log
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {event ? (
//           <>
//             {event.type === 'gym' && (
//               <>
//                 <h3>Gym</h3>
//                 <h5>Cardio</h5>
//                 <p>Activity: {event.data.cardioActivity}</p>
//                 <p>Heart Rate: {event.data.cardioHeartRate}</p>
//                 <p>Time Spent: {event.data.cardioTimeSpent}</p>
//                 <h5>Stretches</h5>
//                 <p>Activity: {event.data.stretchActivity}</p>
//                 <p>Flexibility Rate: {event.data.stretchFlexibilityRate}</p>
//                 <p>Time Spent: {event.data.stretchTimeSpent}</p>
//                 <h5>Weights</h5>
//                 <p>Activity: {event.data.weightsActivity}</p>
//                 <p>Reps: {event.data.weightsReps}</p>
//                 <p>Sets: {event.data.weightsSets}</p>
//                 <p>Time Spent: {event.data.weightsSets}</p>
//               </>
//             )}
//             {event.type === 'nutrition' && (
//               <>
//                 <h3>Nutrition</h3>
//                 <h5>Drink</h5>
//                 <p>Type: {event.data.drink}</p>
//                 <p>Oz: {event.data.drinkOunces}</p>
//                 <p>Time: {event.data.drinkTime}</p>
//                 <p>Calories: {event.data.drinkCalories}</p>
//                 <h5>Meal</h5>
//                 <p>Type: {event.data.meal}</p>
//                 <p>Oz: {event.data.mealOunces}</p>
//                 <p>Time: {event.data.mealTime}</p>
//                 <p>Calories: {event.data.mealCalories}</p>
//                 <h5>Snack</h5>
//                 <p>Type: {event.data.snack}</p>
//                 <p>Oz: {event.data.snackOunces}</p>
//                 <p>Time: {event.data.snackTime}</p>
//               </>
//             )}
//           </>
//         ) : (
//           <p>No data available.</p>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
function MyVerticallyCenteredModal({ show, onHide, event }) {
  const [editedEvent, setEditedEvent] = useState(null);

  useEffect(() => {
    setEditedEvent(event);
  }, [event]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({
      ...editedEvent,
      data: {
        ...editedEvent.data,
        [name]: value,
      },
    });
  };
  
  const handleSaveChanges = async () => {
    console.log(editedEvent.data)
    console.log(editedEvent)
    try {
      await axios.put(`http://localhost:3001/${editedEvent.type}/${editedEvent.data._id}`, editedEvent.data);
      
      onHide();
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };
  
   
  const [message, setMessage] = useState('');
  const eventDelete = async () => {
    if (!window.confirm('You are about to delete logged event!? This action cannot be undone.'))
        return
        try {
            const response = await axios.delete(`http://localhost:3001/${editedEvent.type}/${editedEvent.data._id}`, editedEvent.data);
            setMessage(response.data.message);
            onHide();
            window.location.reload()
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error deleting event');
        }
};

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
      <Modal.Body className='modal-body'>
        {editedEvent ? (
          <>
            {editedEvent.type === 'gym' && (
              <>
                <u><h3>Gym</h3></u>
                <h5>Cardio</h5>
                <p>Activity: <input type="text" name="cardioActivity" value={editedEvent.data.cardioActivity} onChange={handleInputChange} /></p> 
                <p>Heart Rate: <input type="text" name="cardioHeartRate" value={editedEvent.data.cardioHeartRate} onChange={handleInputChange} /></p>
                <p>Time Spent: <input type="text" name="cardioTimeSpent" value={editedEvent.data.cardioTimeSpent} onChange={handleInputChange} /></p>
                <h5>Stretches</h5>
                <p>Activity: <input type="text" name="stretchActivity" value={editedEvent.data.stretchActivity} onChange={handleInputChange} /></p>
                <p>Flex Rate: <input type="text" name="stretchFlexibilityRate" value={editedEvent.data.stretchFlexibilityRate} onChange={handleInputChange} /></p>
                <p>Time Spent: <input type="text" name="stretchTimeSpent" value={editedEvent.data.stretchTimeSpent} onChange={handleInputChange} /></p>
                <h5>Weights</h5>
                <p>Activity:  <input type="text" name="weightsActivity" value={editedEvent.data.weightsActivity} onChange={handleInputChange} /></p>
                <p>Reps:  <input type="text" name="weightsReps" value={editedEvent.data.weightsReps} onChange={handleInputChange} /></p>
                <p>Sets: <input type="text" name="weightsSets" value={editedEvent.data.weightsSets} onChange={handleInputChange} /></p>
                <p>Time Spent: <input type="text" name="weightsTimeSpent" value={editedEvent.data.weightsTimeSpent} onChange={handleInputChange} /></p>
              </>
            )}
            {editedEvent.type === 'nutrition' && (
              <>
                <u><h4>Nutrition</h4></u>
                <h5>Drink</h5>
                <p>Type: <input type="text" name="drink" value={editedEvent.data.drink} onChange={handleInputChange} /></p> 
                <p>Oz: <input type="text" name="drinkOunces" value={editedEvent.data.drinkOunces} onChange={handleInputChange} /></p>
                <p>Time: <input type="text" name="drinkTime" value={editedEvent.data.drinkTime} onChange={handleInputChange} /></p>
                <p>Calories: <input type="text" name="drinkCalories" value={editedEvent.data.drinkCalories} onChange={handleInputChange} /></p>
                <h5>Meal</h5>
                <p>Type: <input type="text" name="meal" value={editedEvent.data.meal} onChange={handleInputChange} /></p>
                <p>Oz: <input type="text" name="mealOunces" value={editedEvent.data.mealOunces} onChange={handleInputChange} /></p>
                <p>Time:  <input type="text" name="mealTime" value={editedEvent.data.mealTime} onChange={handleInputChange} /></p>
                <p>Calories:  <input type="text" name="mealCalories" value={editedEvent.data.mealCalories} onChange={handleInputChange} /></p>
                <h5>Snack</h5>
                <p>Type: <input type="text" name="snack" value={editedEvent.data.snack} onChange={handleInputChange} /></p>
                <p>Oz: <input type="text" name="snackOunces" value={editedEvent.data.snackOunces} onChange={handleInputChange} /></p>
                <p>Time: <input type="text" name="snackTime" value={editedEvent.data.snackTime} onChange={handleInputChange} /></p>
                <p>Calories: <input type="text" name="snackCalories" value={editedEvent.data.snackCalories} onChange={handleInputChange} /></p>
              </>
            )}
          </>
        ) : (
          <p>No data available.</p>
        )}
      </Modal.Body>
      <Modal.Footer className='modalbuttons'>
        <Button id='Delete' onClick={eventDelete}>Delete</Button>
        <Button id='Update' onClick={handleSaveChanges}>Update</Button>
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

    const getUser = async () => {
      try {
        const response = await axios.get('/currentUser');
        setCurrentUser(response.data);
    } catch (error) {
        console.error('Error fetching current user:', error);
    }
    console.log(currentUser)
    }

    const getData = async () => {
      try {
        const gymRes = await axios.get('http://localhost:3001/gyms');
        const nutritionRes = await axios.get('http://localhost:3001/nutrition');
        console.log(gymRes, nutritionRes)
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

const addNutrition = async (newNutrition) => {
  try {
      await axios.post('http://localhost:3001/nutrition', newNutrition);
      setNutrition([...nutrition, newNutrition]);
      setEvents([...events, {
          title: `Meal: ${newNutrition.meal} Snack: ${newNutrition.snack} Drink: ${newNutrition.drink}`,
          start: new Date(newNutrition.date),
          end: new Date(newNutrition.date),
          type: 'nutrition',
          data: newNutrition
      }]);
  } catch (error) {
      console.error('Error adding nutrition:', error);
  }
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
      {/* <header>
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
      </header> */}
      <main>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route path="/nutrition" element={<NutritionForm addNutrition={addNutrition} />} />
          <Route path="/gym" element={<Gym addGym={addGym} />} />
          <Route path="/calendar" element={<Calendar events={events} onEventClick={handleEventClick} />} />
          <Route path="/BMI" element={<BMI />} />
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

export default App
