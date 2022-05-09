const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
require("dotenv").config();
require('./utils/jwtstrat')
require('./auth')

const Users = require('./models/users')

const port = process.env.PORT || 8085;
const dbUrl = process.env.DB_URL
const secret = process.env.SECRET

const busesRoutes = require('./routes/buses')
const usersRoutes = require('./routes/users');

app.use(cors())
app.use(express.json())
// app.use(require("./routes/users"));
// get driver connection

const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 3600,
  crypto: {
      secret: process.env.SECRET,
  }
});

store.on('error', (e)=>{
  console.log(e)
})

// app.use((req, res, next) =>{
//   if(!['/login','/logout','/register', '/'].includes(req.originalUrl)) {
//       req.session.returnTo = req.originalUrl
//   }
//   res.locals.currentUser = req.user;
//   res.locals.success = req.flash('success');
//   res.locals.error = req.flash('error');
//   res.locals.originalUrl = req.originalUrl
//   res.locals.domain = req.headers.host
//   next();
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const sessionConfig = {
  store: store,
  name: 'makalaniaTemple',
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      // secure: true,
      expires: Date.now() + 1000 * 60 * 60*24,
      maxAge: 1000 * 60 * 60*24
  }
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Users.authenticate()));
passport.serializeUser(Users.serializeUser()); //store user in session
passport.deserializeUser(Users.deserializeUser());//remove user from session

mongoose.connect('mongodb://localhost:27017/trasn-vill')
console.log('local db')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'console error:'));
db.once('open', ()=> {
    console.log('Database is operational')
})

app.use('/users', usersRoutes)
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('online')
})