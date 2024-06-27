import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calendar from './BigCalendar';
import Gym from './components/Gym';
import NutritionForm from './components/Nutrition';
import BMI from './components/BMI';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateNutrition from './components/UpdateNutrition';

function MyVerticallyCenteredModal({ show, onHide, event, updateNutrition }) {
  const [updatedEvent, setUpdatedEvent] = useState(event);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNutrition(updatedEvent);
    onHide();
  };

  useEffect(() => {
    setUpdatedEvent(event);
  }, [event]);

<<<<<<< HEAD
=======
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
    try {
      await axios.put(`http://localhost:3001/${editedEvent.type}/${editedEvent.data.id}`, editedEvent.data);
      onHide(); 
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

>>>>>>> 8d3299010a027ea847ccb4061aee66ab0335dfea
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
<<<<<<< HEAD
        {updatedEvent ? (
          updatedEvent.type === 'nutrition' && (
            <Form onSubmit={handleSubmit}>
              <h3>Nutrition</h3>
              <Form.Group controlId="formDrink">
                <Form.Label>Drink</Form.Label>
                <Form.Control
                  type="text"
                  name="drink"
                  value={updatedEvent.data.drink}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDrinkOunces">
                <Form.Label>Oz</Form.Label>
                <Form.Control
                  type="number"
                  name="drinkOunces"
                  value={updatedEvent.data.drinkOunces}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDrinkTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  name="drinkTime"
                  value={updatedEvent.data.drinkTime}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDrinkCalories">
                <Form.Label>Calories</Form.Label>
                <Form.Control
                  type="number"
                  name="drinkCalories"
                  value={updatedEvent.data.drinkCalories}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMeal">
                <Form.Label>Meal</Form.Label>
                <Form.Control
                  type="text"
                  name="meal"
                  value={updatedEvent.data.meal}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMealOunces">
                <Form.Label>Oz</Form.Label>
                <Form.Control
                  type="number"
                  name="mealOunces"
                  value={updatedEvent.data.mealOunces}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMealTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  name="mealTime"
                  value={updatedEvent.data.mealTime}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMealCalories">
                <Form.Label>Calories</Form.Label>
                <Form.Control
                  type="number"
                  name="mealCalories"
                  value={updatedEvent.data.mealCalories}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formSnack">
                <Form.Label>Snack</Form.Label>
                <Form.Control
                  type="text"
                  name="snack"
                  value={updatedEvent.data.snack}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formSnackOunces">
                <Form.Label>Oz</Form.Label>
                <Form.Control
                  type="number"
                  name="snackOunces"
                  value={updatedEvent.data.snackOunces}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formSnackTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  name="snackTime"
                  value={updatedEvent.data.snackTime}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit">Update</Button>
            </Form>
          )
=======
        {editedEvent ? (
          <>
            {editedEvent.type === 'gym' && (
              <>
                <h3>Gym</h3>
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
                <h3>Nutrition</h3>
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
>>>>>>> 8d3299010a027ea847ccb4061aee66ab0335dfea
        ) : (
          <p>No data available.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
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

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('http://localhost:3001/currentUser', { withCredentials: true });
        setCurrentUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getCurrentUser();
  }, []);

  useEffect(() => {
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

  const updateNutrition = async (updatedEvent) => {
    try {
      const { data } = updatedEvent;
      await axios.put(`http://localhost:3001/nutrition/${data.id}`, data);
      const updatedNutrition = nutrition.map(n =>
        n.id === data.id ? data : n
      );
      setNutrition(updatedNutrition);
      const updatedEvents = events.map(e =>
        e.data.id === data.id ? { ...e, data } : e
      );
      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error updating nutrition:', error);
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
      <main>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route path="/nutrition" element={<NutritionForm addNutrition={addNutrition} />} />
          <Route path="/gym" element={<Gym addGym={addGym} />} />
          <Route path="/calendar" element={<Calendar events={events} onEventClick={handleEventClick} />} />
          <Route path="/BMI" element={<BMI />} />
          <Route path='/update' element={<UpdateNutrition />} />
        </Routes>
      </main>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        event={selectedEvent}
        updateNutrition={updateNutrition}
      />
    </div>
  );
}

export default App;

