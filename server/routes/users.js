const express = require('express')
const router = express.Router()
const passport = require('passport')
const dbo = require('../db/conn')
const ObjectId = require('mongodb').ObjectId
const User = require('../models/users')

const {getToken, getRefreshToken, COOKIE_OPTIONS} = require('../auth')
const _ = require('passport-local-mongoose')

router.get('/users', (req, res) => {
    // let db_connect = dbo.getDb('trasn-vill')
    // db_connect.collection('users').find({}).toArray((err, result) => {
    //     if(err) throw err;
    //     res.json(result)
    // })
})
router.get('/users/:id', (req, res) => {
    // let db_connect = dbo.getDb()
    // let query = {_id: ObjectId(req.params.id)};
    // db_connect.collection('users').findOne(query, (err, result) => {
    //     if (err) throw err;
    //     res.json(result)
    // })
})

router.post('/register', async(req, res)=>{
    try{
        const { email, username, password, firstName, lastName, puesto } = req.body;
        const user = new User({ email, username, firstName, lastName, puesto });
        await User.register(user, password);
        // req.flash('success', 'éxito')
        res.redirect('http://localhost:3000')
        console.log(User)
    }catch(e){
        // req.flash('error', 'Se produjo un problema al registrar al usuario')
        console.log(e)
   }
});

router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/'}), (req, res) => {
    // req.flash('success', 'Bienvenido.');
    console.log(req.body)
    res.redirect('http://localhost:3000')
})

module.exports = router


// route.post('/register', async(req, res)=>{
//     try{
//         if (!req.body.firstName) {
//             // res.statusCode = 500
//             // res.send({
//             //     name: 'Error en nombre',
//             //     message: 'Es necesario registrar el primer nombre.'
//             // })
//         } else {
//             User.register(
//             new User({ email: req.body.email, username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName, puesto: req.body.puesto }),
//             req.body.password,
//             (err, user) => {
//                 if (err) {
//                     // res.statusCode = 500
//                     // res.send(err)
//                 } else {
//                     const token = getToken({_id: user._id})
//                     const refreshToken = getRefreshToken({_id: user._id})
//                     user.refreshToken.push({ refreshToken })
//                     user.save((err, user) => {
//                         if(err) {
//                             // res.statusCode = 500
//                             // res.send(err)
//                         } else {
//                             res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS)
//                             res.send({ succes: true, token })
//                         }
//                     })
//                 }
//             })
//         }

//         // req.flash('success', 'éxito')
//         res.redirect('http://localhost:3000')
//     }catch(e){
//         // req.flash('error', 'Se produjo un problema al registrar al usuario')
//         console.log(e)
//    }
//});