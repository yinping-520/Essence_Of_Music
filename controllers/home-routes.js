const router = require('express').Router();
const { Genre, Artists } = require('../models');

router.get('/', async (req, res) => {
    try {
        const genreData = await Genre.findAll({
            include: [
                {
                    model: Artists,
                    attributes: ['song', 'artist'],
                },
            ],
        });

        const genres = genreData.map((genres) =>
            genres.get({ plain: true })
        );
        res.render('homepage', {
            genres,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/genre/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const genreData = await Genre.findByPk(req.params.id, {
                include: [
                    {
                        model: Artists,
                        attributes: [
                            'id',
                            'song',
                            'artist',
                            'genre'
                        ]
                    }
                ]
            });
            const genres = genreData.get({ plain: true });
            res.render('genres', { genres, loggedIn: req.session.loggedIn });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.get('/artist/:id', async (res, req) => {
    if (!req.session.loggedIn){
        res.redirect('/login');
    } else {
        try{
            const artistData = await Artists.findByPk(req.params.id);
            const artist = artistData.get({ plain: true });
            res.render('artist', { artist, loggedIn: req.session.loggedIn });
        } catch (err){
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;