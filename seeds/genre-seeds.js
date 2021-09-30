const { Genre } = require('../models');

const genreData = [
    {
        genre_name: 'Pop',
        image:''
    },
    {
        genre_name: 'Country',
        image:''
    },
    {
        genre_name: 'Hip Hop',
        image:''
    },
    {
        genre_name: 'Latin',
        image:''
    },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;