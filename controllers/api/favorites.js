const router = require('express').Router();
const {Favorite} = require('../../models')


    router.post('/', async(req, res)=>{
        try{
        const playList = await Favorite.create({
            song_name: req.body.song_name,
            lyrics: req.body.lyrics,
            youtube: req.body.youtube,
            artist_id: req.body.artist_id,
            album_id: req.body.album_id,
            genre_id: req.body.genre_id,
            audio: req.body.audio
        })
        res.json(playList)}catch(err){res.json(err)}
    });

    router.delete('/:artist_id', async(req, res)=>{
        try{
        const deleteItem = await Favorite.destroy({
            where: {
                artist_id: req.params.artist_id,
            }
        })
        res.json(deleteItem)
    }catch(err){res.json(err)}
    })
    




module.exports = router;