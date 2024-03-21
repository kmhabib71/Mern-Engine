// controllers/authController.js
const jwt = require("jsonwebtoken");
const { User } = require("../model/AuthModel");
const bcrypt = require("bcrypt");

const logout = (req, res) => {
  // Clear the token cookie
  res.cookie("mern_token", "", {
    expires: new Date(0), // Set the expiration date to a time in the past
    httpOnly: true,
  });

  // Send a response to the client indicating successful logout
  res.status(200).json({ message: "Logout successful" });
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verify email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ error: "INVALID_EMAIL", message: "Invalid email" });
    }

    // Find the user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "USER_NOT_FOUND", message: "User not found" });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ error: "INVALID_PASSWORD", message: "Invalid password" });
    }

    // Generate JWT token that expires in 7 days
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "7d", // 7 days
    });

    // Set cookie that expires in 7 days
    res.cookie("mern_token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }); // 7 days in milliseconds

    // Send a response to the client indicating successful sign in
    res.status(200).json({ message: "Sign in successful", token: token });
  } catch (error) {
    console.log("Error signing in user: ", error);
    return res.status(500).json({ error: "Failed to sign in user" });
  }
};
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash the password
    // verify email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ error: "INVALID_EMAIL", message: "Invalid email" });
    }
    // Check password requirements
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error: "INVALID_PASSWORD",
        message:
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //first check if the user already exists
    const existing = await User.findOne({ email });
    // Create a new user
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Generate JWT token that expires in 7 days
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "7d", // 7 days
    });

    // Set cookie that expires in 7 days
    res.cookie("mern_token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }); // 7 days in milliseconds
    console.log("token ", token);

    // Send a response to the client indicating that registration was successful
    res.status(200).json({ message: "Registration successful", token: token });
    // Return the token to the client
  } catch (error) {
    console.log("Error registering user: ", error);
    return res.status(500).json({ error: "Failed to register user" });
  }
};
const checkAuthStatus = async (req, res) => {
  // Get token from cookies
  console.log("from auth controller");
  console.log("req.cookies.token", req.cookies.mern_token);
  if (req.cookies.mern_token) {
    const token = req.cookies.mern_token;

    // Check if token exists
    if (!token) {
      return res.json({ isAuthenticated: false, isAuthorized: false });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, "your_secret_key");

      // Get the user ID from the decoded token
      const userId = decoded.userId;

      // Find the user in the database
      const user = await User.findById(userId);

      // Check if the user is an admin
      // const isAuthorized = user && user.isAdmin;
      if (user) {
        var isAuthorized = true;
      }

      console.log("User: ", user);
      console.log("isAuthorized: ", isAuthorized);
      return res.json({ isAuthenticated: !!user, user });
    } catch (error) {
      console.log("Error checking auth status: ", error);
      return res.json({ isAuthenticated: false, isAuthorized: false });
    }
  }
};

module.exports = {
  checkAuthStatus,
  register,
  signin,
  logout,
};
