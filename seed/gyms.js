const db = require('../db')
const { Gym } = require('../models')
const { Calendar } = require('../models')
const { User } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
  try {
      await Gym.deleteMany({});
      console.log('All collection reset');
  } catch (error) {
      console.error('Error resetting collections:', error);
  }
};

const main = async () => {

  const user = await User.find({})

  await resetCollections()
  
    const gyms = [
      {
        user_id: user[0]._id,
        cardioActivity: 'running',
        cardioHeartRate: '',
        cardioTimeSpent: '',
        stretchActivity: '',
        stretchFlexibiltyRate: '',
        stretchTimeSpent: '',
        weightsActivity: '',
        weightsReps: '',
        weightsSets: '',
        weightsTimeSpent: '',
        date: new Date("2024-06-06 10:30:30"),
      },
      {
        user_id: user[1]._id,
        cardioActivity: '',
        cardioHeartRate: '',
        cardioTimeSpent: '',
        stretchActivity: 'stretching',
        stretchFlexibiltyRate: '',
        stretchTimeSpent: '',
        weightsActivity: '',
        weightsReps: '',
        weightsSets: '',
        weightsTimeSpent: '',
        date: new Date("2024-06-06 10:30:30"),
      },
      {
        user_id: user[2]._id,
        cardioActivity: '',
        cardioHeartRate: '',
        cardioTimeSpent: '',
        stretchActivity: '',
        stretchFlexibiltyRate: '',
        stretchTimeSpent: '',
        weightsActivity: 'lifting',
        weightsReps: '',
        weightsSets: '',
        weightsTimeSpent: '',
        date: new Date("2024-06-06 10:30:30"),
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