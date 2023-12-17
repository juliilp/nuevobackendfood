const search = require("./allApi");
const allRecipeApi = async () => {
  const result = search.results.slice(0, 20);
  const infoData = result.map((recipe) => {
    return {
      id: recipe.id,
      name: recipe.title,
      healthScore: recipe.healthScore,
      dishSummary: recipe.summary,
      image: recipe.image,
      vegetarian: recipe.vegetarian,
      vegan: recipe.vegan,
      glutenFree: recipe.glutenFree,
      analyzedInstructions: recipe.analyzedInstructions.map((e) =>
        e.steps.map((e) => e.step)
      ),
      diets: recipe.diets.map((diet) => (diet = { name: diet })),
    };
  });
  return infoData;
};

module.exports = allRecipeApi;
