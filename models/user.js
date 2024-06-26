
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = require('mongoose')

const User = new Schema(
  {

//-------------------------Vladimir------------------------//

    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true }
//-------------------------Vladimir------------------------//

    // username: { type: String, required: true },
    // email: { type: String, required: true },
    // password: { type: String, required: true },
  },
  { timestamps: true }
)

User.plugin(passportLocalMongoose)

module.exports = User