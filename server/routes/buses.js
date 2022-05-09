const express = require('express')
const route = express.Router()
const busSchema = require('../models/buses')

route.get('/', async(req, res) => {
    // let db_connect = dbo.getDb('trasn-vill')
    // db_connect.collection('buses').find({}).toArray((err, result) => {
    //     if(err) throw err;
    //     res.json(result)
    // })
    // const buses = await busSchema.find({})
    // res.send('your data' ,{buses})
})

module.exports = route