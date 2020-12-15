// EXPRESS APP
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// VARIABLES
const PORT = process.env.PORT || 3000; // PORT or SERVER?
const database = "workouts_db";
// const collections = ["Workouts"];

// DATABASE CONNECTION
const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || `mongodb://localhost/${database}`, { 
  useNewUrlParser: true, 
  useFindAndModify: false
});

// LOGGER
const logger = require("morgan");
app.use(logger("dev"));

// ROUTES
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// LISTEN
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});