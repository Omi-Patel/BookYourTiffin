const User = require("../models/User");

const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All Fields Are Required..!" });
    }

    // email validation
    if (!email.includes("@")) {
      return res
        .status(400)
        .json({ error: "Please Enter Valid Credentials..!" });
    }

    // find user if it allready exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User Already Exists..!" });
    }

    // save user into database
    const newUser = await User({
      name,
      email,
      password,
    });

    await newUser.save();
    console.log(newUser);

    res.status(200).json({ success: "Signup Sucessfull!" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..!");
  }
};

const loginController = async (req, res) => {
  console.log("Login");
  res.send("Login");
};

module.exports = {
  signupController,
  loginController,
};
