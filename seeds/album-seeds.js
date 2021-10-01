const { Album } = require('../models');


const albumData = [
    {
        album: 'Single',
        song: 'Industry Baby',
        artist_id: 1,
        image:''
    },
    {
        album: 'Planet Her',
        song: 'Woman',
        artist_id: 2,
        image:''
    },
    {
        album: 'Single',
        song: 'Shivers',
        artist_id: 3,
        image:''
    },
    {
        album: 'Single',
        song: 'My Universe',
        artist_id: 4,
        image:''
    },
    {
        album: 'Single',
        song: 'Have Mercy',
        artist_id: 5,
        image:''
    },
    {
        album: 'Happier Than Ever',
        song: 'Happier Than Ever',
        artist_id: 6,
        image:''
    },
    {
        album: 'Single',
        song: 'Take My Breath',
        artist_id: 7,
        image:''
    },
    {
        album: 'Single',
        song: 'Peppas',
        artist_id: 8,
        image:''
    },
    {
        album: 'Future Nostalgia',
        song: 'Love again',
        artist_id: 9,
        image:''
    },
    {
        album: 'Dreamland',
        song: 'Heat Wave',
        artist_id: 10,
        image:''
    },
    {
        album: 'This One\'s for you',
        song: 'Hurricane',
        artist_id: 11,
        image:''
    },
    {
        album: 'Things That We Drink To',
        song: 'Kiss Somebody',
        artist_id: 12,
        image:''
    },
    {
        album: 'On The Rocks',
        song: 'Burn Out',
        artist_id: 13,
        image:''
    },
    {
        album: 'Some Gave All',
        song: 'Achy Breaky Hearts',
        artist_id: 14,
        image:''
    },
    {
        album: 'Traveller',
        song: 'Tennesse Whisky',
        artist_id: 15,
        image:''
    },
    {
        album: 'Songs for the Saints',
        song: 'Get Along',
        artist_id: 16,
        image:''
    },
    {
        album: 'Adobe Sessions',
        song: 'Loud and Heavy',
        artist_id: 17,
        image:''
    },
    {
        album: 'Losing Sleep',
        song: 'Hangin On',
        artist_id: 18,
        image:''
    },
    {
        album: 'Telling All My Secrets',
        song: 'Drunk Me',
        artist_id: 19,
        image:''
    },
    {
        album: 'Mercury Lane',
        song: 'Best Shot',
        artist_id: 20,
        image:''
    },
    {
        album: 'Certified Lover Boy',
        song: 'Knife Talk',
        artist_id: 21,
        image:''
    },
    {
        album: 'Single',
        song: 'Sharing Locations',
        artist_id: 22,
        image:''
    },
    {
        album: 'Single',
        song: 'Lonely ',
        artist_id: 23,
        image:''
    },
    {
        album: 'Single',
        song: 'Too Easy',
        artist_id: 24,
        image:''
    },
    {
        album: 'Single',
        song: 'Your Heart',
        artist_id: 25,
        image:''
    },
    {
        album: 'Single',
        song: '2055',
        artist_id: 26,
        image:''
    },
    {
        album: 'Single',
        song: 'Repeat it',
        artist_id: 27,
        image:''
    },
    {
        album: 'A Gangsta\'s Pain',
        song: 'MoneyBagg Yo',
        artist_id: 28,
        image:''
    },
    {
        album: 'Donda',
        song: 'Jail pt.2',
        artist_id: 29,
        image:''
    },
    {
        album: 'Single',
        song: 'Dreams Unfold',
        artist_id: 30,
        image:''
    },
    {
        album: 'Cuatro Caminos',
        song: 'Eres',
        artist_id: 31,
        image:''
    },
    {
        album: 'Avalancha de Éxitos',
        song: 'Como te extraño mi amor' ,
        artist_id: 31,
        image:''
    },
    {
        album: 'Amor de mis Amores ',
        song: 'Mi cucu, Amor de mis Amores, El Viejo del Sombrerón',
        artist_id: 32,
        image:''
    },
    {
        album: 'Bandido',
        song: 'Amanete Bandido',
        artist_id: 33,
        image:''
    },
    {
        album: 'Sereno',
        song: 'Morena Mia',
        artist_id: 33,
        image:''
    },
    {
        album: 'El último adiós',
        song: 'El último adiós',
        artist_id: 33,
        image:''
    },
    {
        album: 'Vida',
        song: 'Despacito',
        artist_id: 34,
        image:''
    },
    {
        album: 'Single',
        song: 'Con Calma',
        artist_id: 34,
        image:''
    },
    {
        album: 'Single',
        song: 'Shaky Shaky',
        artist_id: 34,
        image:''
    },
];

const seedAlbum = () => Album.bulkCreate(albumData)

module.exports = seedAlbum