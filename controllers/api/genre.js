
const router = require('express').Router();
const { Genre } = require('../../models');

  
router.use('/', async (req, res) => {
    try {
        const genreData = await Genre.findAll();
        const genres = JSON.parse(JSON.stringify(genreData));
    } catch (err){
        res.render(genres);
    }
})


module.exports = router;

