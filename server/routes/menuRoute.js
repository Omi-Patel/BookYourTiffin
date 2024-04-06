const express = require("express");
const menuController = require("../controller/menuController");
// const fetchUser = require("../middleware/fetchUser");

const router = express.Router();

router.post("/createmenu", menuController.createMenu);
router.get("/getmenu", menuController.getMenu);
router.get("/getmenu/:id", menuController.getSingleMenu);

module.exports = router;
