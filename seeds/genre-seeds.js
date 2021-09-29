const { Genre } = require('../models');

const genreData = [
    {
        genre_name: 'Pop',
    },
    {
        genre_name: 'Country',
    },
    {
        genre_name: 'Hip Hop',
    },
    {
        genre_name: 'Latin',
    },
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;