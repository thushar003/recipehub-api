const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//Loads env variables from .env
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Setting up routes
const recipeRoutes = require('./routes/recipes');
app.use('/api/recipes', recipeRoutes);

//MongoDB connection + server start
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });