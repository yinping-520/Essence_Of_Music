const { Artist } = require('../models');

const artistData = [
    {
        artist_name: 'Lil Nas X',
        genre_id: 1,
        image:'nas.jpg'
    },
    {
        artist_name: 'Doja Cat',
        genre_id: 1,
        image:'doja.jpg'
    },
    {
        artist_name: 'Ed Sheeran',
        genre_id: 1,
        image:'ed.jpg'
    },
    {
        artist_name: 'Coldplay',
        genre_id: 1,
        image:'cold.jpg'
    },
    {
        artist_name: 'Chloe',
        genre_id: 1,
        image:'chloe.jpg'
    },
    {
        artist_name: 'Billie Ellish',
        genre_id: 1,
        image:'billie.jpg'
    },
    {
        artist_name: 'The Weeknd',
        genre_id: 1,
        image:'weeknd1.jpg'
    },
    {
        artist_name: 'Farruko',
        genre_id: 4,
        image:'farruko.jpg'
    },
    {
        artist_name: 'Dua Lipa',
        genre_id: 1,
        image:'lipa.jpg'
    },
    {
        artist_name: 'Glass Animals',
        genre_id: 1,
        image:'glass.jpeg'
    },
    {
        artist_name: 'Luke Combs',
        genre_id: 2,
        image:'luke.jpg'
    },
    {
        artist_name: 'Morgan Evans',
        genre_id: 2,
        image:'morgan.jpg'
    },
    {
        artist_name: 'Midland',
        genre_id: 2,
        image:'Midland.jpg'
    },
    {
        artist_name: 'Billy Ray Cyrus',
        genre_id: 2,
        image:'billy.jpg'
    },
    {
        artist_name: 'Chris Stapleton',
        genre_id: 2,
        image:'chris.jpg'
    },
    {
        artist_name: 'Kenny Chesney',
        genre_id: 2,
        image:'kenny.png'
    },
    {
        artist_name: 'Cody Jinks',
        genre_id: 2,
        image:'cody.jpg'
    },
    {
        artist_name: 'Chris Young',
        genre_id: 2,
        image:'young.jpg'
    },
    {
        artist_name: 'Mitchell Tenpenny',
        genre_id: 2,
        image:'mitchel.jpeg'
    },
    {
        artist_name: 'Jimmie Allen',
        genre_id: 2,
        image:'jimmie.jpg'
    },
    {
        artist_name: 'Drake',
        genre_id: 3,
        image:'drake.jpg'
    },
    {
        artist_name: 'Meek Mill',
        genre_id: 3,
        image:'meek.jpg'
    },
    {
        artist_name: 'Dababy',
        genre_id: 3,
        image:'dababy.jpg'
    },
    {
        artist_name: 'Gunna',
        genre_id: 3,
        image:'gunna.jpeg'
    },
    {
        artist_name: 'J.Cole',
        genre_id: 3,
        image:'jcole.jpg'
    },
    {
        artist_name: 'Sleepy Hallow',
        genre_id: 3,
        image:'sleepy.jpg'
    },
    {
        artist_name: 'Lil tecca',
        genre_id: 3,
        image:'tecca.jpg'
    },
    {
        artist_name: 'MoneyBagg Yo',
        genre_id: 3,
        image:'money.jpg'
    },
    {
        artist_name: 'Kanye West',
        genre_id: 3,
        image:'kanye3.jpg'
    },
    {
        artist_name: 'Joyner Lucas',
        genre_id: 3,
        image:'joyner.jpg'
    },
    {
        artist_name: 'Café Tacvba',
        genre_id: 4,
        image:'Cafe.jpg'
    },
    {
        artist_name: 'La Sonora Dinamita',
        genre_id: 4,
        image:'sonora.jpg'
    },
    {
        artist_name: 'Miguel Bosé',
        genre_id: 4,
        image:'miguel1.jpg'
    },
    {
        artist_name: 'Daddy Yankee',
        genre_id: 4,
        image:'DaddyYankee.jpg'
    },
];

const seedArtist = () => Artist.bulkCreate(artistData)

module.exports = seedArtist
