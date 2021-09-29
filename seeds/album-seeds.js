const { Album } = require('../models');


const albumData = [
    {
        album: 'single',
        song: 'Take My Breath',
        artist_id: 1,
    },
    {
        album: 'Bandido',
        song: 'Thing, Amanete Bandido',
        artist_id: 2,
    },
];

const seedAlbum = () => Album.bulkCreate(albumData)

module.exports = seedAlbum