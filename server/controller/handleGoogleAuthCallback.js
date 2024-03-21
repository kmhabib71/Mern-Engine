// controllers/googleAuthController.js
const jwt = require("jsonwebtoken");
const { User } = require("../model/Auth");

const handleGoogleAuthCallback = async (req, res) => {
  try {
    // Assuming user data obtained from Google OAuth is available in req.user
    const { googleId, email, _id, createdAt } = req.user;
    console.log("User data from Google OAuth: ", req.user);

    // Check if the user already exists in the database
    let user = await User.findOne({ email: email });

    // If the user doesn't exist, create a new user
    if (!user) {
      user = new User({ email });
      await user.save();
    } else {
      console.log("User already exists");
    }

    const authUser = { _id: _id, email: email, googleId: googleId };

    // Generate JWT token that expires in 7 days
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "7d", // 7 days
    });

    // Set cookie that expires in 7 days
    res.cookie("mern_token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }); // 7 days in milliseconds
    res.redirect("http://localhost:3000/admin/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleGoogleAuthCallback,
};
