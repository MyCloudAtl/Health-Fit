import { useNavigate } from 'react-router-dom'

const Gym = (props) => {
    
    let navigate= useNavigate()
    
    const handleSubmit = (e) => {
        props.addGym(e)
        navigate('/calendar')
    
      }
    
    const newGym = props.newGym
    
    return (
    <div>
    <h1>Gym Intake Form</h1>
        <form onSubmit={ handleSubmit }>
          <h2>Cardio</h2>
          <input type="text" value={newGym.activity} onChange={ props.handleChange} name={'activity'} placeholder={'activity'} />
          <input type="text" value={newGym.heartRate} onChange={ props.handleChange} name={'heartRate'} placeholder={'heartRate'} />
          <input type="text" value={newGym.timeSpent} onChange={ props.handleChange} name={'timeSpent'} placeholder={'timeSpent'} />
          <h2>Stretches</h2>
          <input type="text" value={newGym.activity} onChange={ props.handleChange} name={'activity'} placeholder={'activity'} />
          <input type="text" value={newGym.flexibiltyRate} onChange={ props.handleChange} name={'flexibiltyRate'} placeholder={'flexibiltyRate'} />
          <input type="text" value={newGym.timeSpent} onChange={ props.handleChange} name={'timeSpent'} placeholder={'timeSpent'} />
          <h2>Weights</h2>
          <input type="text" value={newGym.activity} onChange={ props.handleChange} name={'activity'} placeholder={'activity'} />
          <input type="text" value={newGym.reps} onChange={ props.handleChange} name={'reps'} placeholder={'reps'} />
          <input type="text" value={newGym.sets} onChange={ props.handleChange} name={'sets'} placeholder={'sets'} />
          <input type="text" value={newGym.timeSpent} onChange={ props.handleChange} name={'timeSpent'} placeholder={'timeSpent'} />
          <button>Submit</button>
        </form>
    </div>
    );
}
    export default Gym