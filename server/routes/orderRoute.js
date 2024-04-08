const express = require("express");

const orderController = require("../controller/orderController");

const router = express.Router();

router.post("/order", orderController.makeOrder);
router.get("/getorder", orderController.getOrder);
router.get("/oneorder/:id", orderController.singleOrder);

module.exports = router;
