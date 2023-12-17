const { Schema, model } = require("mongoose");

const Diet = new Schema({
  name: {
    type: String,
  },
  createInDb: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Diet", Diet);
