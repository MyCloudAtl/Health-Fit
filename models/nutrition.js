const { Schema } = require('mongoose')

const Nutrition = new Schema(
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'User_id' },
        drink: { type: String, required: false },
        drinkOunces: { type: String, required: false },
        drinkTime: { type: String, required: false },
        drinkCalories: { type: String, required: false },
        meal: { type: String, required: false },
        mealOunces: { type: String, required: false },
        mealTime: { type: String, required: false },
        mealCalories: { type: String, required: false },
        snack: { type: String, required: false },
        snackOunces: { type: String, required: false },
        snackTime: { type: String, required: false },
        snackCalories: { type: String, required: false },
        date: { type: Date, required: true }
      },
  { timestamps: true }
)

module.exports = Nutrition