import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

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
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      addGym(newGym);
      navigate('/');
    };
  
    const handleChange = (e) => {
      setNewGym({ ...newGym, [e.target.name]: e.target.value });
    };
    
    return (
    <div>
    <h1>Gym Intake Form</h1>
        <form onSubmit={ handleSubmit }>
          <h2>Date</h2>
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