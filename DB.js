const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process?.env?.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connected Succesfully"))
  .catch((err) => console.log(`Unable to connect to DB - ${err}`));
