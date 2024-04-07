const express = require("express");
const authcontroller = require("../controller/authController");

const router = express.Router();

router.post("/signup", authcontroller.signupController);
router.post("/login", authcontroller.loginController);
router.get("/allusers", authcontroller.getAllUsers);
router.get('/getuser/:id', authcontroller.getUser)


module.exports = router;
