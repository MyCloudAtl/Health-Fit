const db = require('../db')
const { Nutrition } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    
    const nutritions = [
      {
        calendar_id: { type: Schema.Types.ObjectId, ref: 'calendar_id' },
        mealType: 'Meals',
        calories: ['0-50', '50-100', '100-150', '150-200', '200-250', '250-300'],
      },
      {
        calendar_id: { type: Schema.Types.ObjectId, ref: 'calendar_id' },
        mealType: 'Drinks',
        calories: ['0-50', '50-100', '100-150', '150-200', '200-250', '250-300'],
      },
      {
        calendar_id: { type: Schema.Types.ObjectId, ref: 'calendar_id' },
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