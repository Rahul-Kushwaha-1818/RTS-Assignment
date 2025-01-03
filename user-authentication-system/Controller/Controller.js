const UserData = require("../Model/UserModel/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Code for Login
const Login = async (req, res) => {
  const { email, password } = req.body; // Destructure email and password from request body

  try {
    // Check if the user exists
    const user = await UserData.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email or password." });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: "1h" } // Token expiry time
    );

    // Respond with the token
    res.status(200).json({
      message: "Login successful!",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    console.error("Error in Login function:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// Code for Register
const Register = async (req, res) => {
  const { name, email, phone, password } = req.body; // Destructure the request body

  try {
    // Check if the user already exists
    const existingUser = await UserData.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new UserData({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Respond to the client
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error in Register function:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// get all Data
const GetAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await UserData.find();

    // Respond with the list of users
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in GetAllUsers function:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

module.exports = { Login, Register, GetAllUsers };
