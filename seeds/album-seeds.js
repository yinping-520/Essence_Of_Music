const { Album } = require('../models');


const albumData = [
    {
        album: '',
        song: 'Industry Baby',
        artist_id: 1,
    },
    {
        album: '2',
        song: 'Woman',
        artist_id: 2,
    },
    {
        album: '3',
        song: 'Shivers',
        artist_id: 3,
    },
    {
        album: '4',
        song: 'My Universe',
        artist_id: 4,
    },
    {
        album: '5',
        song: 'Have Mercy',
        artist_id: 5,
    },
    {
        album: '6',
        song: ' Happier Than Ever',
        artist_id: 6,
    },
    {
        album: 'single',
        song: 'Take My Breath',
        artist_id: 7,
    },
    {
        album: '',
        song: 'Peppas',
        artist_id: 8,
    },
    {
        album: '',
        song: 'Love again',
        artist_id: 9,
    },
    {
        album: '',
        song: 'Heat Wave',
        artist_id: 10,
    },
    {
        album: '',
        song: 'Hurricane',
        artist_id: 11,
    },
    {
        album: '',
        song: 'Kiss Somebody',
        artist_id: 12,
    },
    {
        album: '',
        song: 'Burn OUt',
        artist_id: 13,
    },
    {
        album: '',
        song: 'Achy Breaky Heart',
        artist_id: 14,
    },
    {
        album: '',
        song: 'Tennesse WHisky',
        artist_id: 15,
    },
    {
        album: '',
        song: 'Get Along',
        artist_id: 16,
    },
    {
        album: '',
        song: 'Loud and Heavy',
        artist_id: 17,
    },
    {
        album: '',
        song: 'Hangin On',
        artist_id: 18,
    },
    {
        album: '',
        song: 'Drunk Me',
        artist_id: 19,
    },
    {
        album: '',
        song: 'Best Shot',
        artist_id: 20,
    },
    {
        album: '',
        song: 'Knife Talk',
        artist_id: 21,
    },
    {
        album: '',
        song: 'Sharing Locations',
        artist_id: 22,
    },
    {
        album: '',
        song: 'Lonely ',
        artist_id: 23,
    },
    {
        album: '',
        song: 'Too Easy',
        artist_id: 24,
    },
    {
        album: '',
        song: 'Your Heart',
        artist_id: 25,
    },
    {
        album: '',
        song: '2055',
        artist_id: 26,
    },
    {
        album: '',
        song: 'Repeat i',
        artist_id: 27,
    },
    {
        album: '',
        song: 'Wokesha',
        artist_id: 28,
    },
    {
        album: '',
        song: 'Jail pt.2',
        artist_id: 29,
    },
    {
        album: '',
        song: 'Dreams Unfold',
        artist_id: 30,
    },
    {
        album: 'Cuatro Caminos',
        song: 'Eres',
        artist_id: 31,
    },
    {
        album: 'Avalancha de Éxitos',
        song: 'Como te extraño mi amor' ,
        artist_id: 31,
    },
    {
        album: 'Amor de mis Amores ',
        song: 'Mi cucu, Amor de mis Amores, El Viejo del Sombrerón',
        artist_id: 32,
    },
    {
        album: 'Bandido',
        song: 'Amanete Bandido',
        artist_id: 33,
    },
    {
        album: 'Sereno',
        song: 'Morena Mia',
        artist_id: 33,
    },
    {
        album: 'El último adiós',
        song: 'El último adiós',
        artist_id: 33,
    },
    {
        album: 'Vida',
        song: 'Despacito',
        artist_id: 34,
    },
    {
        album: 'Single',
        song: 'Con Calma',
        artist_id: 34,
    },
    {
        album: 'Single',
        song: 'Shaky Shaky',
        artist_id: 34,
    },
];

const seedAlbum = () => Album.bulkCreate(albumData)

module.exports = seedAlbum