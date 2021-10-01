const { Artist } = require('../models');

const artistData = [
    {
        artist: 'Lil Nas X',
        genre_id: 1,
        image:'nas.jpg'
    },
    {
        artist: 'Doja Cat',
        genre_id: 1,
        image:'doja.jpg'
    },
    {
        artist: 'Ed Sheeran',
        genre_id: 1,
        image:'ed'
    },
    {
        artist: 'Coldplay',
        genre_id: 1,
        image:'cold.jpg'
    },
    {
        artist: 'Chloe',
        genre_id: 1,
        image:'chloe.jpg'
    },
    {
        artist: 'Billie Ellish',
        genre_id: 1,
        image:'billie.jpg'
    },
    {
        artist: 'The Weeknd',
        genre_id: 1,
        image:'weeknd1.jpg'
    },
    {
        artist: 'Farruko',
        genre_id: 1,
        image:'farruko.jpg'
    },
    {
        artist: 'Dua Lipa',
        genre_id: 1,
        image:'lipa.jpg'
    },
    {
        artist: 'Glass Animals',
        genre_id: 1,
        image:'glass.jpeg'
    },
    {
        artist: 'Luke Combs',
        genre_id: 2,
        image:'luke.jpg'
    },
    {
        artist: 'Morgan Evans',
        genre_id: 2,
        image:'morgan.jpg'
    },
    {
        artist: 'Midland',
        genre_id: 2,
        image:'Midland.jpg'
    },
    {
        artist: 'Billy Ray Cyrus',
        genre_id: 2,
        image:'billy.jpg'
    },
    {
        artist: 'Chris Stapleton',
        genre_id: 2,
        image:'chris.jpg'
    },
    {
        artist: 'Kenny Chesney',
        genre_id: 2,
        image:'kenny.png'
    },
    {
        artist: 'Cody Jenkins',
        genre_id: 2,
        image:'cody.jpg'
    },
    {
        artist: 'Chris Young',
        genre_id: 2,
        image:'young.jpg'
    },
    {
        artist: 'Mitchel Tempanny',
        genre_id: 2,
        image:'mitchel.jpeg'
    },
    {
        artist: 'Jimmie Allen',
        genre_id: 2,
        image:'jimmie.jpg'
    },
    {
        artist: 'Drake',
        genre_id: 3,
        image:'drake.jpg'
    },
    {
        artist: 'Meek Mill',
        genre_id: 3,
        image:'meek.jpg'
    },
    {
        artist: 'Dababy',
        genre_id: 3,
        image:'dababy.jpg'
    },
    {
        artist: 'Gunna',
        genre_id: 3,
        image:'gunna.jpeg'
    },
    {
        artist: 'J.Cole',
        genre_id: 3,
        image:'jcole.jpg'
    },
    {
        artist: 'Sleepy Hallow',
        genre_id: 3,
        image:'sleepy.jpg'
    },
    {
        artist: 'Lil tecca',
        genre_id: 3,
        image:'tecca.jpg'
    },
    {
        artist: 'MoneyBagg Yo',
        genre_id: 3,
        image:'money.jpg'
    },
    {
        artist: 'Kanye West',
        genre_id: 3,
        image:'kanye3.jpg'
    },
    {
        artist: 'Joyner Lucas',
        genre_id: 3,
        image:'joyner.jpg'
    },
    {
        artist: 'Café Tacuba',
        genre_id: 4,
        image:'Cafe.jpg'
    },
    {
        artist: 'La Sonora Dinamita',
        genre_id: 4,
        image:'sonora.jpg'
    },
    {
        artist: 'Miguel Bosé',
        genre_id: 4,
        image:'miguel1.jpg'
    },
    {
        artist: 'Daddy Yankee',
        genre_id: 4,
        image:'DaddyYankee.jpg'
    },
];

const seedArtist = () => Artist.bulkCreate(artistData)

module.exports = seedArtist
