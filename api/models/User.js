const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
