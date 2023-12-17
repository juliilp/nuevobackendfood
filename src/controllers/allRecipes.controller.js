const axios = require("axios");
const modelRecipes = require("../models/recipes.model");
const allRecipeApi = require("./allRecipeApi");
const allRecipes = async (req, res) => {
  const { name } = req.query;
  const data = await allRecipeApi();
  console.log(data);
  const dbVacia = await modelRecipes.find({});

  if (dbVacia.length === 0) {
    const datosDefault = await modelRecipes.insertMany(data);
    return res.status(200).json(datosDefault);
  }

  if (!name) {
    const allRecipes = await modelRecipes.find({});
    return res.status(200).json(allRecipes);
  }

  const regex = new RegExp(name, "i");
  const recipesByName = await modelRecipes.find({ name: { $regex: regex } });
  res.status(200).json(recipesByName);
};

const createRecipes = async (req, res) => {
  try {
    const { name, dishSummary, healthScore, stepByStep, image } = req.body;

    const createRecipe = await modelRecipes.create({
      name,
      dishSummary,
      healthScore,
      stepByStep,
      image,
      createInDb: true,
    });

    res.status(200).json(createRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const recipesById = async (req, res) => {
  try {
    const { id } = req.params;
    const findRecipe = await modelRecipes.findById(id);

    if (!findRecipe)
      return res.status(404).json({ error: "No se encontro esa receta" });

    res.status(200).json(findRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { allRecipes, createRecipes, recipesById };
