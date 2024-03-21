const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true, // Add an index
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    resetToken: {
      type: String,
    },
    resetTokenExpiration: {
      type: Date,
    },
  },
  { timestamps: true }
);
// userSchema.statics.findOrCreate = async function findOrCreate(condition, doc) {
//   const result = await this.findOne(condition);
//   if (result) {
//     return result;
//   } else {
//     return this.create(doc);
//   }
// };
const User = mongoose.model("User", userSchema);

module.exports = {
  User: User,
};
