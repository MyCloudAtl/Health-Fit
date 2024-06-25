const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await User.deleteMany({});
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
  };

const main = async () => {

    resetCollections()

  const users = [
    {
        username: "liftBrother",
        email: "liftbrother@yahoo.com",
        password: "password"
    },
    {
        username: "liftsister",
        email: "liftsister@yahoo.com",
        password: "secret"
    },
    {
        username: "liftmama",
        email: "liftmama@yahoo.com",
        password: "secret"
    },
    {
        username: "liftpapa",
        email: "liftpapa@yahoo.com",
        password: "secret"
    },
]
 
await User.insertMany(users)
console.log('Created users!')
}

const run = async () => {
await main()
db.close()
}

run()

