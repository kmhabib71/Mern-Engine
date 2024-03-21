const express = require("express");
// const session = require("express-session");
const cookieParser = require("cookie-parser");

const passport = require("passport");
require("./passport"); // Import Passport configuration
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./database/connection");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const app = express();
connectDB(); // Call the connectDB function
const port = 5000;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// Middleware
app.use(express.json());

// Passport middleware setup
app.use(passport.initialize());

// Routes setup
app.use(cookieParser());
const indexRoutes = require("./router/router");

app.use("/", indexRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
