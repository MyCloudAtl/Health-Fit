const db = require('../db')
const { Nutrition } = require('../models')
const { Calendar } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const currentYear = await Calendar.find({ year:'2024'})

    const nutritions = [
      {
        calendar_id: currentYear[0]._id,
        mealType: 'Meals',
        calories: ['0-50', '50-100', '100-150', '150-200', '200-250', '250-300'],
      },
      {
        calendar_id: currentYear[0]._id,
        mealType: 'Drinks',
        calories: ['0-50', '50-100', '100-150', '150-200', '200-250', '250-300'],
      },
      {
        calendar_id: currentYear[0]._id,
        mealType: 'Snacks',
        calories: ['0-50', '50-100', '100-150', '150-200', '200-250', '250-300'],
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