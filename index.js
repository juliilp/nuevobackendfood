const app = require("./src/app");
const connectDB = require("./src/utils/connectDB");
require("dotenv").config();

app.listen(process.env.PORT, () => {
  console.log("Backend levantado");
  connectDB();
});
