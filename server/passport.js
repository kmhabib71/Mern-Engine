// passport.js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("./model/Auth");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user exists in the database
        let user = await User.findOne({ googleId: profile.id });

        // If user doesn't exist, create a new user
        if (!user) {
          user = new User({
            email: profile.emails[0].value,
            googleId: profile.id,
            // You can add other fields specific to Google OAuth here
          });
          await user.save();
        }

        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);
