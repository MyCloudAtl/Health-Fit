const { Schema } = require('mongoose')

const Gym = new Schema(
  {
    calendar_id: { type: Schema.Types.ObjectId, ref: 'calendar_id' },
    sets: { type: String, required: false },
    reps: { type: String, required: false },
    workoutType: { type: String, required: true },
    duration: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = Gym