const app = require("./src/app")
const connectTodb = require("./src/config/database")
const mongoose = require("mongoose")
require("dotenv").config();



connectTodb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})