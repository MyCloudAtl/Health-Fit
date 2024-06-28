import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Logout from "./Logout.jsx";
import axios from 'axios';


const Gym = () => {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [user_id, setUser_id] = useState(null)
  const [cardioActivity, setCardioActivity] = useState('')
  const [cardioHeartRate, setCardioHeartRate] = useState('')
  const [cardioTimeSpent, setCardioTimeSpent] = useState('')
  const [stretchActivity, setStretchActivity] = useState('')
  const [stretchFlexibilityRate, setStretchFlexibilityRate] = useState('')
  const [stretchTimeSpent, setStretchTimeSpent] = useState('')
  const [weightsActivity, setWeightsActivity] = useState('')
  const [weightsReps, setWeightsReps] = useState('')
  const [weightsSets, setWeightsSets] = useState('')
  const [weightsTimeSpent, setWeightsTimeSpent] = useState('')
  const [loading, setLoading] = useState(true)
  const [date, setDate] = useState(new Date())
  let navigate= useNavigate()


  useEffect(() => {
    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:3001/currentUser', { withCredentials: true });
            setUser_id(response.data._id)
            console.log(user_id)
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    getUser();
    
}, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGym = {
      user_id,
      cardioActivity,
      cardioHeartRate,
      cardioTimeSpent,
      stretchActivity,
      stretchFlexibilityRate,
      stretchTimeSpent,
      weightsActivity,
      weightsReps,
      weightsSets,
      weightsTimeSpent,
      date
  };

  if (currentUser) {
            newGym.user_id = currentUser._id;
        }

    try {
        const response = await axios.post('http://localhost:3001/gyms', newGym);
        navigate('/calendar');
    } catch (error) {
        console.log('error')
    }
    window.location.reload()
};

if (loading) {
    return <p>Loading...</p>;
}

return (
    <div>
    <h1>Gym Intake Form</h1>
        <form onSubmit={handleSubmit}>
          <h2>Date</h2>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
          <h2>Cardio</h2>
          <input type="text" value={cardioActivity}  onChange={(e) => setCardioActivity(e.target.value)} name={'cardioActivity'} placeholder={'activity'} />
          <input type="text" value={cardioHeartRate}  onChange={(e) => setCardioHeartRate(e.target.value)}  name={'cardioHeartRate'} placeholder={'heartRate'} />
          <input type="text" value={cardioTimeSpent}  onChange={(e) => setCardioTimeSpent(e.target.value)}  name={'cardioTimeSpent'} placeholder={'timeSpent'} />
          <h2>Stretches</h2>
          <input type="text" value={stretchActivity}  onChange={(e) => setStretchActivity(e.target.value)}  name={'stretchActivity'} placeholder={'activity'} />
          <input type="text" value={stretchFlexibilityRate}  onChange={(e) => setStretchFlexibilityRate(e.target.value)}  name={'stretchFlexibilityRate'} placeholder={'flexibilityRate'} />
          <input type="text" value={stretchTimeSpent}  onChange={(e) => setStretchTimeSpent(e.target.value)}  name={'stretchTimeSpent'} placeholder={'timeSpent'} />
          <h2>Weights</h2>
          <input type="text" value={weightsActivity}  onChange={(e) => setWeightsActivity(e.target.value)}  name={'weightsActivity'} placeholder={'activity'} />
          <input type="text" value={weightsReps}  onChange={(e) => setWeightsReps(e.target.value)}  name={'weightsReps'} placeholder={'reps'} />
          <input type="text" value={weightsSets}  onChange={(e) => setWeightsSets(e.target.value)}  name={'weightsSets'} placeholder={'sets'} />
          <input type="text" value={weightsTimeSpent}  onChange={(e) => setWeightsTimeSpent(e.target.value)}  name={'weightsTimeSpent'} placeholder={'timeSpent'} />
          <button>Submit</button>
        </form>
        <Logout />
    </div>
    );
}
    export default Gym