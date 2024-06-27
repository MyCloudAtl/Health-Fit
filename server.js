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

//-------------------------Vladimir------------------------//
app.use(bodyParser.urlencoded({ extended: true }));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//-------------------------Vladimir------------------------//


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

//comment

app.get('/register', userController.createUser)

app.get('/users', userController.getAllUser)
app.get('/gyms', gymController.getGyms)
app.get('/nutrition', nutritionController.getAllNutrition)

app.get('/users/:id', userController.getUserById)
app.get('/nutrition/:id', nutritionController.getNutritionById)
app.get('/gyms/:id', gymController.getGym)

app.post('/users', userController.createUser)
app.post('/nutrition', nutritionController.createNutrition)
app.post('/gyms', userController.createUser)

app.put('/users/:id', userController.updateUser)
app.put('/nutrition/:id', nutritionController.updateNutrition)

app.delete('/nutrition/:id', nutritionController.deleteNutrition)


app.get('*', (req,res) => res.send('404 page not found'))

// //session setup
// app.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: true
// }))

// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(new LocalStrategy(
//     async (username, password, done) => {
//         try{
//             const user = await User.findOne({ username })
//             if (!user || user.password !== password) {
//                 return done(null, false, { message: 'incorrect username or password'})
//             }
//             return done(null, user)
//         } catch (error) {
//             return done(error)
//         }
//     }
// ))

// passport.serializeUser((user, done) => {
//     done(null, user.id)
// })

// passport.deserializeUser(async (id, done) => {
//     try {
//         const user = await User.findById(id)
//         done(null,user)
//     }catch (error) {
//         done(error)
//     }
// })

// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   }))

//   app.get('/logout', (req, res) => {
//     req.logout(err => {
//       if (err) { return next(err); }
//       res.redirect('/');
//     });
//   })

//   app.get('/currentUser', (req, res) => {
//     res.json(req.user);
//   });

//-------------------------Vladimir------------------------//

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
//-------------------------Vladimir------------------------//


module.exports = app