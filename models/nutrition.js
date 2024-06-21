const { Schema } = require('mongoose')

const Nutrition = new Schema(
    {
        calendar_id: { type: Schema.Types.ObjectId, ref: 'calendar_id' },
        mealType: { type: String, required: true },
        calories: { type: Array, required: false },
      },
  { timestamps: true }
)

module.exports = Nutrition