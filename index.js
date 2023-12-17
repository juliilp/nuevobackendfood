const app = require("./src/app");
const connectDB = require("./src/utils/connectDB");

app.listen(5001, () => {
  console.log("Backend levantado");
  connectDB();
});
