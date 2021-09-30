const { Artist } = require('../models');

const artistData = [
    {
        artist: 'Lil Nas X',
        genre_id: 1,
        image:''
    },
    {
        artist: 'Doja Cat',
        genre_id: 1,
        image:''
    },
    {
        artist: 'Ed Sheeran',
        genre_id: 1,
        image:''
    },
    {
        artist: 'Coldplay',
        genre_id: 1,
        image:''
    },
    {
        artist: 'Chloe',
        genre_id: 1,
        image:''
    },
    {
        artist: 'Billie Ellish',
        genre_id: 1,
        image:''
    },
    {
        artist: 'The Weeknd',
        genre_id: 1,
        image:''
    },
    {
        artist: 'Farruko',
        genre_id: 1,
        image:''
    },
    {
        artist: 'Dua Lipa',
        genre_id: 1,
        image:''
    },
    {
        artist: 'Glass Animals',
        genre_id: 1,
        image:''
    },
    {
        artist: 'Luke Combs',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Morgan Evans',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Midland',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Billy Ray Cyrus',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Chris Stapleton',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Kenny Chesney',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Cody Jenkins',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Chris Young',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Mitchel Tempanny',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Jmmie Allen',
        genre_id: 2,
        image:''
    },
    {
        artist: 'Drake',
        genre_id: 3,
        image:''
    },
    {
        artist: 'Meek Mill',
        genre_id: 3,
        image:''
    },
    {
        artist: 'Dababy',
        genre_id: 3,
        image:''
    },
    {
        artist: 'Gunna',
        genre_id: 3,
        image:''
    },
    {
        artist: 'J.Cole',
        genre_id: 3,
        image:''
    },
    {
        artist: 'Sleepy Hallow',
        genre_id: 3,
        image:''
    },
    {
        artist: 'Lil tecca',
        genre_id: 3,
        image:''
    },
    {
        artist: 'Wokesha',
        genre_id: 3,
        image:''
    },
    {
        artist: 'Kanye West',
        genre_id: 3,
        image:''
    },
    {
        artist: 'Joyner Lucas',
        genre_id: 3,
        image:''
    },
    {
        artist: 'Café Tacuba',
        genre_id: 4,
        image:''
    },
    {
        artist: 'La Sonora Dinamita',
        genre_id: 4,
        image:''
    },
    {
        artist: 'Miguel Bosé',
        genre_id: 4,
        image:''
    },
    {
        artist: 'Daddy Yankee',
        genre_id: 4,
        image:''
    },
];

const seedArtist = () => Artist.bulkCreate(artistData)

module.exports = seedArtist
