const { Artist } = require('../models');

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

const seedArtist = () => Artist.bulkCreate(artistData)

module.exports = seedArtist
