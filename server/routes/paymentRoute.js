const express = require("express");
const paymentController = require("../controller/paymentController");

const router = express.Router();

router.post("/checkout", paymentController.checkout);
router.post("/paymentvarification", paymentController.paymentVarification);

module.exports = router;
