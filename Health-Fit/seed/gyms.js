const db = require('../db')
const { Gym } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
    const gyms = [
      {
        calendar_id: { type: Schema.Types.ObjectId, ref: 'calendar_id' },
        sets: '',
        reps: '',
        workoutType: 'Cardio',
        duration: ['15', '30', '45', '60'],
      },
      {
        calendar_id: { type: Schema.Types.ObjectId, ref: 'calendar_id' },
        sets: '',
        reps: '',
        workoutType: 'Stretches',
        duration: ['15', '30', '45', '60'],
      },
      {
        calendar_id: { type: Schema.Types.ObjectId, ref: 'calendar_id' },
        sets: '',
        reps: '',
        workoutType: 'Weights',
        duration: ['15', '30', '45', '60'],
      },
      
     
  ]
   
  await Gym.insertMany(gyms)
  console.log('Created gyms!')
  }
  
  const run = async () => {
  await main()
  db.close()
  }
  
  run()