const express = require("express");
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
mongoose.connect(process.env.DATA_BASE_URL)
const foodmodel = require('./Schema/details')


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("database connected");
});

app.get('/api/admin/additems', async (req, res) => {
    const { f_name, f_price } = req.body


    const data = await foodmodel.insertMany({
        f_name,
        f_price,
        best:true
    })
    
    
})

app.listen(port, () => {
    console.log(`app is running in ${port}`)
})


app.get('/', (req, res) => {
    console.log("user connected")
})