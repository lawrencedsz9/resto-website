const express = require("express");
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`app is running in ${port}`)
})


app.get('/', (req, res) => {
    console.log("user connected")
})