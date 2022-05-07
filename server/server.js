const express = require('express')
const app = express()
const cors = require('cors')
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8085;

const busesRoutes = require('./routes/buses')

app.use(cors())
app.use(express.json())
app.use(require("./routes/users"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('online')
})
app.get('/buses', async(req, res) => {
  let db_connect = dbo.getDb('trasn-vill')
  db_connect.collection('buses').find({}).toArray((err, result) => {
      if(err) throw err;
      res.json(result)
  })
  // const buses = await busSchema.find({})
  // res.send('your data' ,{buses})
})