const express = require('express');
const router = express.Router();
const Recipe = require('.../models/Recipe');

//testing
// router.get('/', (req, res) => {
//     res.json({ message: "Welcome to RecipeHub API..."});
// });

//GET all: test
router.get('/', async (req, res) => {
    try 
    {
        const recipes = await Recipe.find();
        res.json(recipes);
    }
    catch(err) 
    {
        res.status(500).json({ error: "Server error"});
    }
});

//POST: add a new recipe
router.post('/', async (req, res) => {
    try
    {
        const { title, ingredients, instructions, cookingTime } = req.body;

        const newRecipe = new Recipe({
            title,
            ingredients,
            instructions,
            cookingTime
        });

        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    }
    catch (err)
    {
        res.status(400).json({ error: "Invalid recipe data"});
    }
});

module.exports = router;