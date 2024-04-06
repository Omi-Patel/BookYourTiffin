const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true,
  },
  item1: {
    type: String,
    required: true,
  },
  item2: {
    type: String,
    required: true,
  },
  special: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
});

const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu;
