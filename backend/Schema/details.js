const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
  f_name: String,
  f_price: Number,
  best: Boolean,
  nonveg: Boolean,
});

module.exports = mongoose.model("resto-webiste", foodSchema);
