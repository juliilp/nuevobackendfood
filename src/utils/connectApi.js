async function connectApi() {
  try {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=79476450dbdc47bfbd26dcaa3731d6ac&addRecipeInformation=true&number=30"
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    throw error;
  }
}

module.exports = { connectApi };
