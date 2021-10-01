const { Album } = require('../models');


const albumData = [
    {
        album_name: 'Single',
        song: 'Industry Baby',
        artist_id: 1,
        image:'industry.jpg'
    },
    {
        album_name: 'Planet Her',
        song: 'Woman',
        artist_id: 2,
        image:'dojaPlanet.jpeg'
    },
    {
        album_name: 'Single',
        song: 'Shivers',
        artist_id: 3,
        image:'shivers.jpg'
    },
    {
        album_name: 'Single',
        song: 'My Universe',
        artist_id: 4,
        image:'coldAlbum1.jpg'
    },
    {
        album_name: 'Single',
        song: 'Have Mercy',
        artist_id: 5,
        image:'chloealbum.png'
    },
    {
        album_name: 'Happier Than Ever',
        song: 'Happier Than Ever',
        artist_id: 6,
        image:'billieAlbum.jpeg'
    },
    {
        album_name: 'Single',
        song: 'Take My Breath',
        artist_id: 7,
        image:'weekAlbum.jpg'
    },
    {
        album_name: 'Single',
        song: 'Peppas',
        artist_id: 8,
        image:'farrukoSingle.jpg'
    },
    {
        album_name: 'Future Nostalgia',
        song: 'Love again',
        artist_id: 9,
        image:'lipaAlbum.jpg'
    },
    {
        album_name: 'Dreamland',
        song: 'Heat Wave',
        artist_id: 10,
        image:'glassAlbum.jpg'
    },
    {
        album_name: 'This One\'s for you',
        song: 'Hurricane',
        artist_id: 11,
        image:'lukeAlbum.jpg'
    },
    {
        album_name: 'Things That We Drink To',
        song: 'Kiss Somebody',
        artist_id: 12,
        image:'morganAlbum.jpg'
    },
    {
        album_name: 'On The Rocks',
        song: 'Burn Out',
        artist_id: 13,
        image:'midlandAlbum.jpg'
    },
    {
        album_name: 'Some Gave All',
        song: 'Achy Breaky Hearts',
        artist_id: 14,
        image:'billyAlbum.jpg'
    },
    {
        album_name: 'Traveller',
        song: 'Tennesse Whisky',
        artist_id: 15,
        image:'chrisAlbum.jpg'
    },
    {
        album_name: 'Songs for the Saints',
        song: 'Get Along',
        artist_id: 16,
        image:'kennyAlbum.jpg'
    },
    {
        album_name: 'Adobe Sessions',
        song: 'Loud and Heavy',
        artist_id: 17,
        image:'codyAlbum.jpg'
    },
    {
        album_name: 'Losing Sleep',
        song: 'Hangin On',
        artist_id: 18,
        image:'youngAlbum.jpg'
    },
    {
        album_name: 'Telling All My Secrets',
        song: 'Drunk Me',
        artist_id: 19,
        image:'mitchelAlbum.jpg'
    },
    {
        album_name: 'Mercury Lane',
        song: 'Best Shot',
        artist_id: 20,
        image:'jimmieAlbum.jpg'
    },
    {
        album_name: 'Certified Lover Boy',
        song: 'Knife Talk',
        artist_id: 21,
        image:'drakeAlbum.png'
    },
    {
        album_name: 'Single',
        song: 'Sharing Locations',
        artist_id: 22,
        image:'meekAlbum.jpeg'
    },
    {
        album_name: 'Single',
        song: 'Lonely ',
        artist_id: 23,
        image:'dababyAlbum2.jpg'
    },
    {
        album_name: 'Single',
        song: 'Too Easy',
        artist_id: 24,
        image:'gunnaAlbum.jpg'
    },
    {
        album_name: 'Single',
        song: 'Your Heart',
        artist_id: 25,
        image:'jcoleAlbum.png'
    },
    {
        album_name: 'Single',
        song: '2055',
        artist_id: 26,
        image:'sleepyAlbum.jpeg'
    },
    {
        album_name: 'Single',
        song: 'Repeat it',
        artist_id: 27,
        image:'teccaAlbum.jpg'
    },
    {
        album_name: 'A Gangsta\'s Pain',
        song: 'Wokesha',
        artist_id: 28,
        image:'moneyAlbum.jpeg'
    },
    {
        album_name: 'Donda',
        song: 'Jail pt.2',
        artist_id: 29,
        image:'kanyeAlbum.png'
    },
    {
        album_name: 'Single',
        song: 'Dreams Unfold',
        artist_id: 30,
        image:'joynerAlbum.jpeg'
    },
    {
        album_name: 'Cuatro Caminos',
        song: 'Eres',
        artist_id: 31,
        image:'cuatro.jpg'
    },
    {
        album_name: 'Avalancha de Éxitos',
        song: 'Como te extraño mi amor' ,
        artist_id: 31,
        image:'ava.jpg'
    },
    {
        album_name: 'Amor de mis Amores ',
        song: 'Mi cucu, Amor de mis Amores, El Viejo del Sombrerón',
        artist_id: 32,
        image:'sonoraAlbum.jpg'
    },
    {
        album_name: 'Bandido',
        song: 'Amanete Bandido',
        artist_id: 33,
        image:'bandido.jpg'
    },
    {
        album_name: 'Sereno',
        song: 'Morena Mia',
        artist_id: 33,
        image:'serno.jpg'
    },
    {
        album_name: 'El último adiós',
        song: 'El último adiós',
        artist_id: 33,
        image:'ultimo.jpg'
    },
    {
        album_name: 'Vida',
        song: 'Despacito',
        artist_id: 34,
        image:'vida.jpg'
    },
    {
        album_name: 'Single',
        song: 'Con Calma',
        artist_id: 34,
        image:'conCalma.jpg'
    },
    {
        album_name: 'Single',
        song: 'Shaky Shaky',
        artist_id: 34,
        image:'shaky.jpg'
    },
];

const seedAlbum = () => Album.bulkCreate(albumData)

module.exports = seedAlbum