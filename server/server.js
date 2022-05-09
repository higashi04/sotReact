const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose')
require("dotenv").config({ path: "./config.env" });

const Users = require('./models/users')

const port = process.env.PORT || 8085;

const busesRoutes = require('./routes/buses')
const usersRoutes = require('./routes/users')


app.use(cors())
app.use(express.json())
// app.use(require("./routes/users"));
// get driver connection


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const sessionConfig = {
  // store: store,
  name: 'makalaniaTemple',
  secret: 'secretNotSoMuch',
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
app.get('/buses', async(req, res) => {
  // let db_connect = dbo.getDb('trasn-vill')
  // db_connect.collection('buses').find({}).toArray((err, result) => {
  //     if(err) throw err;
  //     res.json(result)
  // })
  // const buses = await busSchema.find({})
  // res.send('your data' ,{buses})
})