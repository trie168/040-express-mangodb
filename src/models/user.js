var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
