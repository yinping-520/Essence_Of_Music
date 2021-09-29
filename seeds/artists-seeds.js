const { Artists } = require('../models');

const artistData = [
    {
        artist: 'The Weeknd',
        genre_id: 1,
    },
    {
        artist: 'Miguel Bosé',
        genre_id: 4,
    },
];

const seedArtist = () => Artists.bulkCreate(artistData)

module.exports = seedArtist
