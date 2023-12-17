const { Router } = require("express");
const {
  allRecipes,
  recipesById,
  createRecipes,
} = require("../controllers/allRecipes.controller");

const recipesRouter = Router();

recipesRouter.get("/", allRecipes);
recipesRouter.get("/:id", recipesById);
recipesRouter.post("/", createRecipes);

module.exports = recipesRouter;
