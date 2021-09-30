const router = require("express").Router();
const { Genre, Song } = require('../../models');

router.get('/', async (req, res) => {
    try{
        const genreData = await Genre.findAll({
            include: [{model: Song}]
        })
        const genres = genreData.map(genre => {genre.get({plain: true})})
        console.log(genres)
        res.json(genres)

    } catch(err){res.status(500).json(err)}
    
})


module.exports = router;