const mongoose = require("mongoose");
const COLLECTION_NAME = "users_login";

const loginDetails = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String || Number,
    require: true,
  },
  phone: {
    type: Number,
  },
  created_on: {
    type: Number,
    default: parseInt(new Date().setDate(new Date().getDate()) / 1000),
  },
});

mongoose.model(COLLECTION_NAME, loginDetails);
module.exports = mongoose.model(COLLECTION_NAME);
