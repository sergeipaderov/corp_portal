const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  surName: {
    type: String
  },
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", schema);
