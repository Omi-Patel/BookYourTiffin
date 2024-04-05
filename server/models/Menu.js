const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  item1: {
    type: String,
    required: true,
  },
  item2: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
});

const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu;
