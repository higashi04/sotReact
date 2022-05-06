const express = require('express')
const route = express.Router()
const dbo = require('../db/conn')
const ObjectId = require('mongodb').ObjectId

route.get('/users', (req, res) => {
    let db_connect = dbo.getDb('trasn-vill')
    db_connect.collection('users').find({}).toArray((err, result) => {
        if(err) throw err;
        res.json(result)
    })
})
route.get('/users/:id', (req, res) => {
    let db_connect = dbo.getDb()
    let query = {_id: ObjectId(req.params.id)};
    db_connect.collection('users').findOne(query, (err, result) => {
        if (err) throw err;
        res.json(result)
    })
})
route.post('/login', (req, res) => {
    console.log('hi')
})
module.exports = route