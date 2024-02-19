const { connectApi } = require("../utils/connectApi");

const allRecipeApi = async () => {
  try {
    const apiData = await connectApi();

    const infoData = apiData.results.map((recipe) => {
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
        diets: recipe.diets.map((diet) => ({ name: diet })),
      };
    });

    return infoData;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error;
  }
};

module.exports = allRecipeApi;
