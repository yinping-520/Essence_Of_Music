const router = require('express').Router();
const { Genre, Favorite, Artist, Album, Song } = require('../../models');

  
router.get('/', async (req, res) => {
    try{
        const genreData = await Genre.findAll({
            include: [{
                model: Song, through: Artist, as: 'song_name'
            }]
        });
        res.status(200).json(genreData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const genreData = await Genre.findByPk(req.params.id, {
            include: [{
                model: Song, through: Artist, as: 'song_name'
            }]
        });
        if (!genreData){
            res.status(404),json({
                message: 'We will update in the future, Try another'
            });
            return;
        }
        res.status(200).json(genreData);
    } catch (err) {
        res.status(500),json (err);
    }
})


module.exports = router;


