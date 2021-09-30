const { Favorite } = require('../models');


const favoriteData = [
    {
        favorite:'My Favorite',
        

    },

];

const seedFavorite = () => Favorite.bulkCreate(favoriteData)

module.exports = seedFavorite