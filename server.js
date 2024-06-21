const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const express = require('express')
const gymController = require('./controllers/gymController')
const calendarContoller = require('./controllers/calendarController')



const logger = require('morgan')
const nutritionController = require('./controllers/nutritionController')

const PORT = process.env.PORT || 3001
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })

app.get('/', (req, res) => {
  res.send('This is our root page!')
})

module.exports = app

app.get('/gyms', gymController.getGyms)
app.get('/gyms/:id', gymController.getGym)

app.get('/calendar', calendarContoller.getCalendars)
app.get('/calendar/:id', calendarContoller.getCalendar)

app.get('/nutrition', nutritionController.getAllNutrition)
app.get('/nutrition/:id', nutritionController.getNutritionById)
app.post('/nutrition', nutritionController.createNutrition)
app.put('/nutrition/:id', nutritionController.updateNutrition)
app.delete('/nutrition/:id', nutritionController.deleteNutrition)


app.get('*', (req,res) => res.send('404 page not found'))