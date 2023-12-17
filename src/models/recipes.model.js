const { Schema, model } = require("mongoose");

const Recipes = new Schema({
  name: {
    type: String,
  },
  dishSummary: {
    type: String,
  },
  healthScore: {
    type: String,
  },
  stepByStep: {
    type: String,
  },
  image: {
    type: String,
  },
  createInDb: {
    type: Boolean,
    default: false,
  },
  diets: {
    type: Array,
  },
});

module.exports = model("Recipes", Recipes);
