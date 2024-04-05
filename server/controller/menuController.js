const Menu = require("../models/Menu");

// Create New Menu
const createMenu = async (req, res) => {
  try {
    const { item1, item2, description, price } = req.body;

    // validation
    if (!item1 || !item2 || !price) {
      return res.status(400).json({ error: "All Fields Are Required..!" });
    }

    // save new menu to DB
    const newMenu = await Menu({
      item1,
      item2,
      description,
      price,
    });

    await newMenu.save();
    console.log(newMenu);

    res.status(200).json({ success: "Menu Created Successfully..!" });

    // end
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

// Get Menu
const getMenu = () => {};

module.exports = {
  createMenu,
  getMenu,
};
