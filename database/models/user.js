const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  pasword: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema, "Users");

module.exports = User;
