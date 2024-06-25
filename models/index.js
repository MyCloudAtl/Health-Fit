const mongoose = require('mongoose')
const CalendarSchema = require('./calendar')
const GymSchema = require('./gym')
const NutritionSchema = require('./nutrition')
const UserSchema = require('./user')

const Calendar = mongoose.model('Calendar', CalendarSchema)
const Gym = mongoose.model('Gym', GymSchema)
const Nutrition = mongoose.model('Nutrition', NutritionSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
  Calendar,
  Gym,
  Nutrition,
  User
}