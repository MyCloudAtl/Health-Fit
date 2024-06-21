const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const calendarController = require('./controllers/calendarController')
const gymController = require('./controllers/gymController')
const yearController = require('./controllers/yearController')
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/gyms', gymController.getGyms)
app.get('/gyms/:id', gymController.getGym)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})