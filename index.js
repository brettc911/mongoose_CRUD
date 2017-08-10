const express = require('express')
const exphbs = require('express-handlebars')
const expressValidator = require('express-validator')
const session = require('express-session')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const home = require('./Routes/home')
const createCard = require('./Routes/createCard')
mongoose.Promise = require('bluebird')

const app = express()


// Configure view
app.engine('handlebars', exphbs())
app.set('views', './Views')
app.set('view engine', 'handlebars')
// Configure statc files/ directory
app.use(express.static('Public'))
// Configure parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
// Validate information
app.use(expressValidator())

// Session Middleware
app.use(session({
  secret: 'farts',
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  if (!req.session.users) {
    req.session.users = []
  }
  next()
})

// Routes
app.use('/', home)
app.use('/', createCard)

mongoose
  .connect('mongodb://localhost:27017/newdb', {useMongoClient: true})
  .then(()=> app.listen(3000, ()=> console.log('listening on port 3000...')))
