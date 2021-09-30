const { Album } = require('../models');


const albumData = [
    {
        album: '',
        song: 'Industry Baby',
        artist_id: 1,
    },
    {
        album: '2',
        song: '2',
        artist_id: 2,
    },
    {
        album: '3',
        song: '3',
        artist_id: 3,
    },
    {
        album: '4',
        song: '4',
        artist_id: 4,
    },
    {
        album: '5',
        song: '5',
        artist_id: 5,
    },
    {
        album: '6',
        song: '65',
        artist_id: 6,
    },
    {
        album: 'single',
        song: 'Take My Breath',
        artist_id: 7,
    },
    {
        album: '',
        song: '',
        artist_id: 8,
    },
    {
        album: '',
        song: '',
        artist_id: 9,
    },
    {
        album: '',
        song: '',
        artist_id: 10,
    },
    {
        album: '',
        song: '',
        artist_id: 11,
    },
    {
        album: '',
        song: '',
        artist_id: 12,
    },
    {
        album: '',
        song: '',
        artist_id: 13,
    },
    {
        album: '',
        song: '',
        artist_id: 14,
    },
    {
        album: '',
        song: '',
        artist_id: 15,
    },
    {
        album: '',
        song: '',
        artist_id: 16,
    },
    {
        album: '',
        song: '',
        artist_id: 17,
    },
    {
        album: '',
        song: '',
        artist_id: 18,
    },
    {
        album: '',
        song: '',
        artist_id: 19,
    },
    {
        album: '',
        song: '',
        artist_id: 20,
    },
    {
        album: '',
        song: '',
        artist_id: 21,
    },
    {
        album: '',
        song: '',
        artist_id: 22,
    },
    {
        album: '',
        song: '',
        artist_id: 23,
    },
    {
        album: '',
        song: '',
        artist_id: 24,
    },
    {
        album: '',
        song: '',
        artist_id: 25,
    },
    {
        album: '',
        song: '',
        artist_id: 26,
    },
    {
        album: '',
        song: '',
        artist_id: 27,
    },
    {
        album: '',
        song: '',
        artist_id: 28,
    },
    {
        album: '',
        song: '',
        artist_id: 29,
    },
    {
        album: '',
        song: '',
        artist_id: 30,
    },
    {
        album: '',
        song: '',
        artist_id: 31,
    },
    {
        album: '',
        song: '',
        artist_id: 32,
    },
    {
        album: 'Bandido',
        song: 'Thing, Amanete Bandido',
        artist_id: 33,
    },
    {
        album: '',
        song: '',
        artist_id: 34,
    },
];

const seedAlbum = () => Album.bulkCreate(albumData)

module.exports = seedAlbum