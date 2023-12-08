const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
mongoose.connect(process.env.DATA_BASE_URL);
const foodmodel = require("./Schema/details");
const cors = require("cors");
app.use(cors());

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("database connected");
});

app.post("/add", async (req, res) => {
  const { item, price, best, nonveg } = req.body;

  const data = await foodmodel.insertMany({
    f_name: item,
    f_price: price,
    best: best,
    nonveg: nonveg,
  });
});

app.post("/order", (req, res) => {
    console.log("data rec")
})

app.get("/getdata", async (req, res) => {
  const data = await foodmodel.find();
  res.json({ data: data });
});

app.post("/login", async (req, res) => {
  const { mobileNumber } = req.body;
  const data = await foodmodel.find({ mobileNumber: mobileNumber });
  res.json({ data: data });
});

app.listen(port, () => {
  console.log(`app is running in ${port}`);
});

app.get("/", (req, res) => {
  console.log("user connected");
});
