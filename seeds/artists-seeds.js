const { Artists } = require('../models');

const artistData = [
    {
        artist: 'Lil Nas X',
        genre_id: 1,
    },
    {
        artist: 'Doja Cat',
        genre_id: 1,
    },
    {
        artist: 'Ed Sheeran',
        genre_id: 1,
    },
    {
        artist: 'Coldplay',
        genre_id: 1,
    },
    {
        artist: 'Chloe',
        genre_id: 1,
    },
    {
        artist: 'Billie Ellish',
        genre_id: 1,
    },
    {
        artist: 'The Weeknd',
        genre_id: 1,
    },
    {
        artist: 'Farruko',
        genre_id: 1,
    },
    {
        artist: 'Dua Lipa',
        genre_id: 1,
    },
    {
        artist: 'Glass Animals',
        genre_id: 1,
    },
    {
        artist: 'Luke Combs',
        genre_id: 2,
    },
    {
        artist: 'Morgan Evans',
        genre_id: 2,
    },
    {
        artist: 'Midland',
        genre_id: 2,
    },
    {
        artist: 'Billy Ray Cyrus',
        genre_id: 2,
    },
    {
        artist: 'Chris Stapleton',
        genre_id: 2,
    },
    {
        artist: 'Kenny Chesney',
        genre_id: 2,
    },
    {
        artist: 'Cody Jenkins',
        genre_id: 2,
    },
    {
        artist: 'Chris Young',
        genre_id: 2,
    },
    {
        artist: 'Mitchel Tempanny',
        genre_id: 2,
    },
    {
        artist: 'Jmmie Allen',
        genre_id: 2,
    },
    {
        artist: 'Drake',
        genre_id: 3,
    },
    {
        artist: 'Meek Mill',
        genre_id: 3,
    },
    {
        artist: 'Dababy',
        genre_id: 3,
    },
    {
        artist: 'Gunna',
        genre_id: 3,
    },
    {
        artist: 'J.Cole',
        genre_id: 3,
    },
    {
        artist: 'Sleepy Hallow',
        genre_id: 3,
    },
    {
        artist: 'Lil tecca',
        genre_id: 3,
    },
    {
        artist: 'Wokesha',
        genre_id: 3,
    },
    {
        artist: 'Kanye West',
        genre_id: 3,
    },
    {
        artist: 'Joyner Lucas',
        genre_id: 3,
    },
    {
        artist: 'Café Tacuba',
        genre_id: 4,
    },
    {
        artist: 'La Sonora Dinamita',
        genre_id: 4,
    },
    {
        artist: 'Miguel Bosé',
        genre_id: 4,
    },
    {
        artist: 'Daddy Yankee',
        genre_id: 4,
    },
];

const seedArtist = () => Artists.bulkCreate(artistData)

module.exports = seedArtist
