import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Gym = ({addGym}) => {
  
    let navigate= useNavigate()

    const [newGym, setNewGym] = useState({
      cardioActivity: '',
      cardioHeartRate: '',
      cardioTimeSpent: '',
      stretchActivity: '',
      stretchFlexibilityRate: '',
      stretchTimeSpent: '',
      weightsActivity: '',
      weightsReps: '',
      weightsSets: '',
      weightsTimeSpent: '',
      date: new Date()
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
    //   addGym(newGym);
    //   navigate('/calendar');
    // };
    try {
      // Send newGym data to backend (assuming /api/gyms endpoint)
      await axios.post('/gyms', newGym);

      // Update local state and events
      addGym(newGym);

      // Redirect to calendar page after submission
      navigate('/calendar');
    } catch (error) {
      console.error('Error adding gym data:', error);
      // Handle error, show message to user, etc.
    }
  };
  
    const handleChange = (e) => {
      setNewGym({ ...newGym, [e.target.name]: e.target.value });
    };
    
    const handleDateChange = (date) => {
      setNewGym({ ...newGym, date });
  };

    return (
    <div>
    <h1>Gym Intake Form</h1>
        <form onSubmit={handleSubmit}>
          <h2>Date</h2>
          <DatePicker selected={newGym.date} onChange={handleDateChange} />
          <h2>Cardio</h2>
          <input type="text" value={newGym.cardioActivity} onChange={handleChange} name={'cardioActivity'} placeholder={'activity'} />
          <input type="text" value={newGym.cardioHeartRate} onChange={handleChange} name={'cardioHeartRate'} placeholder={'heartRate'} />
          <input type="text" value={newGym.cardioTimeSpent} onChange={handleChange} name={'cardioTimeSpent'} placeholder={'timeSpent'} />
          <h2>Stretches</h2>
          <input type="text" value={newGym.stretchActivity} onChange={handleChange} name={'stretchActivity'} placeholder={'activity'} />
          <input type="text" value={newGym.stretchFlexibilityRate} onChange={handleChange} name={'stretchFlexibilityRate'} placeholder={'flexibilityRate'} />
          <input type="text" value={newGym.stretchTimeSpent} onChange={handleChange} name={'stretchTimeSpent'} placeholder={'timeSpent'} />
          <h2>Weights</h2>
          <input type="text" value={newGym.weightsActivity} onChange={handleChange} name={'weightsActivity'} placeholder={'activity'} />
          <input type="text" value={newGym.weightsReps} onChange={handleChange} name={'weightsReps'} placeholder={'reps'} />
          <input type="text" value={newGym.weightsSets} onChange={handleChange} name={'weightsSets'} placeholder={'sets'} />
          <input type="text" value={newGym.weightsTimeSpent} onChange={handleChange} name={'weightsTimeSpent'} placeholder={'timeSpent'} />
          <button>Submit</button>
        </form>
    </div>
    );
}
    export default Gym