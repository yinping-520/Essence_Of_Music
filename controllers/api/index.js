const router = require('express').Router();

const userRoutes = require('./user-routes');
const genreRoutes = require('./genre');
const albumRoutes = require('./album');
const artistRoutes = require('./artists');
const favoriteRoutes = require('./favorites');
const songRoutes = require('./song');



router.use('/users', userRoutes);
router.use('/genre', genreRoutes);
router.use('/album', albumRoutes);
router.use('/artist', artistRoutes);
router.use('/favorite', favoriteRoutes);
router.use('/song', songRoutes);


module.exports = router;