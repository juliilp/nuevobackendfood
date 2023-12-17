const search = require("../controllers/allApi");
const dietsModel = require("../models/diets.model");
const dietModel = require("../models/diets.model");
const allDiets = async (req, res) => {
  try {
    const diets = await dietModel.find({});
    if (diets.length) return res.status(200).json(diets);

    const call = search.results;
    const dietsFromApi = [];
    call.forEach((el) =>
      el.diets.forEach((nombre) => dietsFromApi.push(nombre))
    );

    const dietsfinal = new Set(dietsFromApi);

    // const array = Array.from(dietsfinal)
    const array2 = [];
    dietsfinal.forEach((el) => array2.push({ name: el }));
    const created = await dietsModel.insertMany(array2);

    res.status(200).send(created);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = allDiets;
