const { Schema } = require('mongoose')

const User = new Schema(
  {
    username: { type: String, required: true, unique: true },
    _id: {type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = User