const express = require("express");
const morgan = require("morgan");
const recipesRouter = require("./routes/recipes.route");
const cors = require("cors");
const dietsRoute = require("./routes/diets.route");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use("/recipes", recipesRouter);
app.use("/diets", dietsRoute);
module.exports = app;
