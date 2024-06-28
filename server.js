const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const gymController = require('./controllers/gymController')
const userController = require('./controllers/userController')
const nutritionController = require('./controllers/nutritionController')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const app = express()
const { User } = require('./models')


app.use(cors({credentials: true, origin:'http://localhost:5173'}))


app.use(bodyParser.urlencoded({ extended: true }));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(logger('dev'))
app.use(bodyParser.json())

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })

app.get('/', (req, res) => {
  res.send('This is our root page!')
})


app.get('/users', userController.getAllUser)
app.get('/gyms', gymController.getGyms)
app.get('/nutrition', nutritionController.getAllNutrition)

app.get('/users/:id', userController.getUserById)
app.get('/nutrition/:id', nutritionController.getNutritionById)
app.get('/gyms/:id', gymController.getGym)
app.get('/nutrition/user/:user_id', nutritionController.getNutritionByUserId)
app.get('/gyms/user/:user_id', gymController.getGymByUserId)

app.post('/users', userController.createUser)
app.post('/nutrition', nutritionController.createNutrition)
app.post('/gyms', gymController.createGym)

app.put('/users/:id', userController.updateUser)
app.put('/nutrition/:id', nutritionController.updateNutrition)
app.put('/gym/:id', gymController.updateGym)

app.delete('/nutrition/:id', nutritionController.deleteNutrition)
app.delete('/gym/:id', gymController.deleteGym)


  app.get('/currentUser', (req, res) => {
    res.json(req.user);
  });

// Create or Register new user
  app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email });
        await User.register(user, password);
        res.status(201).send({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).send({ message: 'Registration failed', error });
    }
});

app.post('/logout', (req, res) => {
  req.logout((err) => {
      if (err) {
          return res.status(500).send({ message: 'Logout failed', error: err });
      }
      res.status(200).send({ message: 'Logout successful' });
  });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  console.log("Login successful")
  res.status(200).send({ message: 'Login successful' });
});

app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id
  const { username, password } = req.body;
  try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Failed to delete account', error });
  }
});

app.get('*', (req,res) => res.send('404 page not found'))


module.exports = app