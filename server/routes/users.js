const express = require('express')
const route = express.Router()
const passport = require('passport')
const dbo = require('../db/conn')
const ObjectId = require('mongodb').ObjectId
const User = require('../models/users')


route.get('/users', (req, res) => {
    // let db_connect = dbo.getDb('trasn-vill')
    // db_connect.collection('users').find({}).toArray((err, result) => {
    //     if(err) throw err;
    //     res.json(result)
    // })
})
route.get('/users/:id', (req, res) => {
    // let db_connect = dbo.getDb()
    // let query = {_id: ObjectId(req.params.id)};
    // db_connect.collection('users').findOne(query, (err, result) => {
    //     if (err) throw err;
    //     res.json(result)
    // })
})
route.post('/login', (req, res) => {
    console.log('hi')
})

route.post('/register', async(req, res)=>{
    try{
        const { email, username, password, firstName, lastName, puesto } = req.body;
        const user = new User({ email, username, firstName, lastName, puesto });
        await User.register(user, password);
        // req.flash('success', 'éxito')
        console.log(User)
    }catch(e){
        // req.flash('error', 'Se produjo un problema al registrar al usuario')
        console.log(e)
   }
});

module.exports = route