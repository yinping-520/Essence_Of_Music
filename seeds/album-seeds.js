const { Album } = require('../models');


const albumData = [
    {
        album: 'single',
        songs: 'Take My Breath',
        artist_id: 1,
    },
    {
        album: ['Bandido','placeholder'],
        songs: 'Amanete Bandido',
        artist_id: 2,
    },
];

const seedAlbum = () => Album.bulkCreate(albumData)

module.exports = seedAlbum