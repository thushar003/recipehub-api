const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: [String],
    instructions: {
        type: String,
        required: true,
    },
    cookingTime: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);