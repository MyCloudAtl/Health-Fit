const db = require('../db')
const { Calendar } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const calendars = [
    {
        year: '2024',
        month: 'June',
        day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
]
 
await Calendar.insertMany(calendars)
console.log('Created calendars!')
}

const run = async () => {
await main()
db.close()
}

run()