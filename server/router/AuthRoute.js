const express = require("express");
const passport = require("passport");
const route = express.Router();

const {
  handleGoogleAuthCallback,
} = require("../controller/handleGoogleAuthCallback");
const authController = require("../controller/AuthController");

// Route for handling Google OAuth callback
route.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/signin",
    session: false,
  }),
  handleGoogleAuthCallback
);
route.get("/status", authController.checkAuthStatus);
route.post("/signup", authController.register);
route.post("/signin", authController.signin);
route.post("/logout", authController.logout);

module.exports = route;
