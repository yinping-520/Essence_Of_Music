const { Genre } = require('../models');

const genreData = [
    {
        genre_name: 'Pop',
        JPG:''
    },
    {
        genre_name: 'Country',
        JPG:''
    },
    {
        genre_name: 'Hip Hop',
        JPG:''
    },
    {
        genre_name: 'Latin',
        JPG:''
    },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;