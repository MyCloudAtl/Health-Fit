const { Schema } = require('mongoose')

const Gym = new Schema(
  {
        user_id: { type: Schema.Types.ObjectId, ref: 'User_id' },
        cardioActivity: { type: String, required: false },
        cardioHeartRate: { type: String, required: false },
        cardioTimeSpent: { type: String, required: false },
        stretchActivity: { type: String, required: false },
        stretchFlexibiltyRate: { type: String, required: false },
        stretchTimeSpent: { type: String, required: false },
        weightsActivity: { type: String, required: false },
        weightsReps: { type: String, required: false },
        weightsSets: { type: String, required: false },
        weightsTimeSpent: { type: String, required: false },
        date: { type: Date, required: true },
  },
  { timestamps: true }
)

module.exports = Gym