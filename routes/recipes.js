const express = require('express');
const router = express.Router();

//testing
router.get('/', (req, res) => {
    res.json({ message: "Welcome to RecipeHub API..."});
});

module.exports = router;