const mongoose = require('mongoose')
const CalendarSchema = require('./calendar')
const GymSchema = require('./gym')
const NutritionSchema = require('./nutrition')

const Calendar = mongoose.model('Calendar', CalendarSchema)
const Gym = mongoose.model('Gym', GymSchema)
const Nutrition = mongoose.model('Nutrition', NutritionSchema)

module.exports = {
  Calendar,
  Gym,
  Nutrition,
}