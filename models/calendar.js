const { Schema } = require('mongoose')

const Calendar = new Schema(
  {
    year: { type: String, required: true },
    month: { type: String, required: true },
    day: { type: Array, required: true },
  },
  { timestamps: true }
)

module.exports = Calendar