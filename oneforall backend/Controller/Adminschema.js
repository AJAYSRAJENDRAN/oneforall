const mongoose = require("mongoose");

const adminschema = mongoose.Schema({
  name: { type: String },
  jobCategory: { type: String },
  experience: { type: String },
  address: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  about: { type: String },
  age: { type: String },
  password:{type:String}
});
const admin = mongoose.model("admin", adminschema);

module.exports = admin;
