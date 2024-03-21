const express = require("express");
const route = express.Router();
const passport = require("passport");
const authRouter = require("./AuthRoute"); // Import AuthRouter

route.use("/api/auth", authRouter); // Use AuthRouter for all paths starting with /auth
route.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);
module.exports = route;
