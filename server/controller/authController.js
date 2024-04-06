const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup Controller
const signupController = async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;

    // validation
    if (!name || !email || !password || !contact) {
      return res.status(400).json({ error: "All Fields Are Required..!" });
    }

    // email validation
    if (!email.includes("@")) {
      return res
        .status(400)
        .json({ error: "Please Enter Valid Credentials..!" });
    }

    // contact validation
    if (contact.length !== 10) {
      return res
        .status(400)
        .json({ error: "Please Enter Valid Contact Number..!" });
    }

    // find user if it allready exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User Already Exists..!" });
    }

    // Generate Salt
    const salt = await bcrypt.genSalt(10);

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, salt);

    // save user into database
    const newUser = await User({
      name,
      email,
      password: hashedPassword,
      contact,
    });

    await newUser.save();
    console.log(newUser);

    res.status(200).json({ success: "Signup Sucessfull!" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

// Login Controller
const loginController = async (req, res) => {
  // Data from Body
  const { email, password } = req.body;

  try {
    // validation
    if (!email || !password) {
      return res.status(400).json({ error: "Please Provide the Data..!" });
    }

    // email validation
    if (!email.includes("@")) {
      return res.status(400).json({ error: "Invalid Credentials..!" });
    }

    // find unique user with email
    const user = await User.findOne({ email });
    console.log(user);

    // if user not found
    if (!user) {
      return res.status(400).json({ error: "User Not Found..!" });
    }

    // compare user's password with hashedPassword using bcrypt.compare()
    const doMatch = await bcrypt.compare(password, user.password);
    console.log("Password Matched : " + doMatch);

    // if password matched then generate token for user
    if (doMatch) {
      const token = jwt.sign({ userId: user.id }, "" + process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.status(201).json({ user, token, success: "Login Successfull!" });
    } else {
      res.status(400).json({ error: "Invalid Email or Password..!" });
    }

    // end
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

// Get All Users from DB
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    // console.log(allUsers);
    res.send(allUsers);
    // console.log(allUsers.length);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

module.exports = {
  signupController,
  loginController,
  getAllUsers,
};
