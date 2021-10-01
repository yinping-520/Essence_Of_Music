const { Genre } = require('../models');

const genreData = [
    {
        genre_name: 'Pop',
        image:'popmusic.jpeg'
    },
    {
        genre_name: 'Country',
        image:'countrymusic.jpg'
    },
    {
        genre_name: 'Hip Hop',
        image:'hiphopmusic.jpg'
    },
    {
        genre_name: 'Latin',
        image:'spanishmusic.jpg'
    },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;