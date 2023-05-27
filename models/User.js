const mongoose = require("mongoose");

const User = new mongoose.Schema({
  email: String,
  pass: String,

  token: {
    type: String,
  },
  basic_cred: {
    name: String,
    age: Number,
    sex: String,
    phone: String,
  },
});

const Users = mongoose.model("users", User);
module.exports = Users;
