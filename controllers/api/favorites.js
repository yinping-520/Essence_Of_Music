const router = require('express').Router();
const {Favorite} = require('../../models')


    router.post('/', async(req, res)=>{
        try{
        const playList = await Favorite.create({
            artist_id: req.body.artist_id,
            youtube: req.body.youtube
        })
        res.json(playList)}catch(err){res.json(err)}
    });

    




module.exports = router;