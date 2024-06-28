
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = require('mongoose')

const User = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true }
  },
  { timestamps: true }
)

User.plugin(passportLocalMongoose)

module.exports = User