const router = require('express').Router();




const userRoutes = require('../api/user-routes');
const genreRoutes = require('../api/genre');
const albumRoutes = require('../api/album');
const artistRoutes = require('../api/artists');
const favoriteRoutes = require('../api/favorites');
const songRoutes = require('../api/song');


router.use('/users', userRoutes);
router.use('/genre', genreRoutes);
router.use('/album', albumRoutes);

router.use('/artists', artistRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/song', songRoutes);


module.exports = router;