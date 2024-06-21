const express = require('express')
const db = require('./db')
const cors = require('cors');
const bodyParser = require(`body-parser`)
const logger = require(`morgan`)
const PORT = process.env.PORT || 3001
const nutritionController = require('./controllers/nutritionController')


const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(logger(`dev`))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req,res) => res.send('This is our Health-Fit landing page!'))

app.get('/nutrition', nutritionController.getAllNutrition)

app.get('/nutrition/:id', nutritionController.getNutritionById)

app.post('/nutrition', nutritionController.createNutrition)

app.put('/nutrition/:id', nutritionController.updateNutrition)

app.delete('/nutrition/:id', nutritionController.deleteNutrition)

app.get('*', (req,res) => res.send('404 page not found'))