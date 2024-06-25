const db = require('../db')
const { Nutrition } = require('../models')
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

    const nutritions = [
      {
        user_id: user[0]._id,
        drink: '',
        drinkOunces: '',
        drinkTime: '',
        drinkCalories: '',
        meal: '',
        mealOunces: '',
        mealTime: '',
        mealCalories: '',
        snack: 'protein bar',
        snackOunces: '',
        snackTime: '',
        snackCalories: '',
        date: new Date("2024-06-06 10:30:30")
      },
      {
        user_id: user[1]._id,
        drink: 'water',
        drinkOunces: '',
        drinkTime: '',
        drinkCalories: '',
        meal: '',
        mealOunces: '',
        mealTime: '',
        mealCalories: '',
        snack: '',
        snackOunces: '',
        snackTime: '',
        snackCalories: '',
        date: new Date("2024-06-06 10:30:30")
      },
      {
        user_id: user[2]._id,
        drink: '',
        drinkOunces: '',
        drinkTime: '',
        drinkCalories: '',
        meal: 'sandwich',
        mealOunces: '',
        mealTime: '',
        mealCalories: '',
        snack: '',
        snackOunces: '',
        snackTime: '',
        snackCalories: '',
        date: new Date("2024-06-06 10:30:30")
      },
     
  ]
   
  await Nutrition.insertMany(nutritions)
  console.log('Created nutritions!')
  }
  
  const run = async () => {
  await main()
  db.close()
  }
  
  run()