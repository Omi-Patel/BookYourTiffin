const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    selectedMenu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "menu",
    },

    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    location: {
      type: String,
      required: true,
    },

    totalBox: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;

//
