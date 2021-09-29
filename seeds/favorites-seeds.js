const { Favorites } = require('../models');


const favoritesData = [
    {
        favorites:'My Favorites',
        

    },

];

const seedFavorite = () => Favorites.bulkCreate(favoritesData)

module.exports = seedFavorite