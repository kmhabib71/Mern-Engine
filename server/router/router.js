const express = require("express");
const route = express.Router();
const passport = require("passport");
const authRouter = require("./AuthRoute"); // Import AuthRouter
const crudRoutes = require("./CrudRoute");

// Mount crud routes

route.use("/api/auth", authRouter); // Use AuthRouter for all paths starting with /auth
route.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);
route.use("/api/items", crudRoutes);
module.exports = route;
