const Order = require("../models/Order");
// const User = require("../models/User");

// Make an Order

const makeOrder = async (req, res) => {
  try {
    const { selectedMenu, orderedBy, location, totalBox } = req.body;

    // validation
    if (!location || !totalBox) {
      return res.status(400).json({ error: "All Fields Are Required..!" });
    }

    // save new Order to DB
    const newOrder = await Order({
      selectedMenu,
      orderedBy,
      location,
      totalBox,
    });

    await newOrder.save();
    console.log(newOrder);

    res
      .status(200)
      .json({ newOrder, success: "Order Created Successfully..!" });

    //end
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

// Get Orders
const getOrder = async (req, res) => {
  try {
    const resOrder = await Order.find()
      .populate("selectedMenu")
      .populate("orderedBy");
    console.log(resOrder);
    console.log(resOrder.length);
    res.send(resOrder);

    // end
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

// Get Single Order by ID
const singleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById({ _id: id }).populate("orderedBy");

    console.log(order);
    // console.log(order.length);

    if (order) {
      return res.status(200).json(order);
    } else {
      return res.status(404).json({ error: "Order Not Found..!" });
    }
    // end
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

module.exports = {
  makeOrder,
  getOrder,
  singleOrder,
};
