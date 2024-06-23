import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Gym = ({addGym}) => {
    
    let navigate= useNavigate()
    
    const [newGym, setNewGym] = useState({
      cardioActivity: '',
      cardioHeartRate: '',
      cardioTimeSpent: '',
      stretchActivity: '',
      stretchFlexibiltyRate: '',
      stretchTimeSpent: '',
      weightsActivity: '',
      weightsReps: '',
      weightsSets: '',
      weightsTimeSpent: '',
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      addGym(newGym);
      navigate('/calendar');
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
          <input type="text" value={newGym.activity} onChange={handleChange} name={'cardioActivity'} placeholder={'activity'} />
          <input type="text" value={newGym.heartRate} onChange={handleChange} name={'cardioHeartRate'} placeholder={'heartRate'} />
          <input type="text" value={newGym.timeSpent} onChange={handleChange} name={'cardioTimeSpent'} placeholder={'timeSpent'} />
          <h2>Stretches</h2>
          <input type="text" value={newGym.activity} onChange={handleChange} name={'stretchActivity'} placeholder={'activity'} />
          <input type="text" value={newGym.flexibiltyRate} onChange={handleChange} name={'stretchFlexibiltyRate'} placeholder={'flexibiltyRate'} />
          <input type="text" value={newGym.timeSpent} onChange={handleChange} name={'stretchTimeSpent'} placeholder={'timeSpent'} />
          <h2>Weights</h2>
          <input type="text" value={newGym.activity} onChange={handleChange} name={'weightsActivity'} placeholder={'activity'} />
          <input type="text" value={newGym.reps} onChange={handleChange} name={'weightsReps'} placeholder={'reps'} />
          <input type="text" value={newGym.sets} onChange={handleChange} name={'weightsSets'} placeholder={'sets'} />
          <input type="text" value={newGym.timeSpent} onChange={handleChange} name={'weightsTimeSpent'} placeholder={'timeSpent'} />
          <button>Submit</button>
        </form>
    </div>
    );
}
    export default Gym