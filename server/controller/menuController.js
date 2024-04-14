const Menu = require("../models/Menu");

// Create New Menu
const createMenu = async (req, res) => {
  try {
    const { dishName, item1, item2, image, special, price } = req.body;

    // validation
    if (!dishName || !item1 || !item2 || !image || !price) {
      return res.status(400).json({ error: "All Fields Are Required..!" });
    }

    // save new menu to DB
    const newMenu = await Menu({
      dishName,
      item1,
      item2,
      image,
      special,
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
const getMenu = async (req, res) => {
  try {
    const result = await Menu.find();
    console.log(result);
    console.log(result.length);
    res.send(result);

    // end
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

// Get single Menu By ID
const getSingleMenu = async (req, res) => {
  try {
    const { id } = req.params;

    const menu = await Menu.findById({ _id: id });
    console.log(menu);

    if (menu) {
      return res.status(200).json(menu);
    } else {
      return res.status(404).json({ error: "Not Found..!" });
    }

    //end
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

// Delete Menu By ID
const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMenu = await Menu.findByIdAndDelete({ _id: id });
    console.log(deletedMenu);

    if (deletedMenu) {
      return res.status(200).json(deletedMenu);
    } else {
      return res.status(404).json({ error: "Not Found..!" });
    }

    // end
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

module.exports = {
  createMenu,
  getMenu,
  getSingleMenu,
  deleteMenu,
};
