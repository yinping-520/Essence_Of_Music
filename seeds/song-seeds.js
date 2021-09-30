const { Song } = require('../models');


const songData = [
    {
        song:'Industry Baby',
        lyrics:'',
        youtube:'',
        album_id: 1,
        genre_id: 1
    },
    {
        song:'Woman',
        lyrics:'',
        youtube:'',
        album_id: 2,
        genre_id: 1
        
    },
    {
        song:'Shivers',
        lyrics:'',
        youtube:'',
        album_id: 3,
        genre_id: 1
    },
    {
        song:'My Universe',
        lyrics:'',
        youtube:'',
        album_id: 4,
        genre_id: 1
    },
    {
        song:'Have Mercy',
        lyrics:'',
        youtube:'',
        album_id: 5,
        genre_id: 1
    },
    {
        song:'Happier Than Ever',
        lyrics:'',
        youtube:'',
        album_id: 6,
        genre_id: 1
    },
    {
        song:'Take My Breath Away',
        lyrics:'I saw the fire in your eyes I saw the fire when I look into your eyes You tell me things you wanna try',
        youtube:'https://www.youtube.com/watch?v=rhTl_OyehF8',
        album_id: 7
    },
    {
        song:'Peppas',
        lyrics:'',
        youtube:'',
        album_id: 8,
        genre_id: 1
    },
    {
        song:'Love again',
        lyrics:'',
        youtube:'',
        album_id: 9,
        genre_id: 1
    },
    {
        song:'Heat Wave',
        lyrics:'',
        youtube:'',
        album_id: 10,
        genre_id: 1
    },
    {
        song:'Hurricane',
        lyrics:'',
        youtube:'',
        album_id: 11,
        genre_id: 2
    },
    {
        song:'Kiss Somebody',
        lyrics:'',
        youtube:'',
        album_id: 12,
        genre_id: 2
    },
    {
        song:'Burn Out',
        lyrics:'',
        youtube:'',
        album_id: 13,
        genre_id: 2
    },
    {
        song:'Achy Breaky Hearts',
        lyrics:'',
        youtube:'',
        album_id: 14,
        genre_id: 2
    },
    {
        song:'Tennesse Whisky',
        lyrics:'',
        youtube:'',
        album_id: 15,
        genre_id: 2
    },
    {
        song:'Get Along',
        lyrics:'',
        youtube:'',
        album_id: 16,
        genre_id: 2
    },
    {
        song:'Loud and Heavy',
        lyrics:'',
        youtube:'',
        album_id: 17,
        genre_id: 2
    },
    {
        song:'Hangin On',
        lyrics:'',
        youtube:'',
        album_id: 18,
        genre_id: 2
    },
    {
        song:'Drunk Me',
        lyrics:'',
        youtube:'',
        album_id: 19,
        genre_id: 2
    },
    {
        song:'Best Shot',
        lyrics:'',
        youtube:'',
        album_id: 20,
        genre_id: 2
    },
    {
        song:'Knife Talk',
        lyrics:'',
        youtube:'',
        album_id: 21,
        genre_id: 3
    },
    {
        song:'Sharing Locations',
        lyrics:'',
        youtube:'',
        album_id: 22,
        genre_id: 3
    },
    {
        song:'Lonely',
        lyrics:'',
        youtube:'',
        album_id: 23,
        genre_id: 3
    },
    {
        song:'Too Easy',
        lyrics:'',
        youtube:'',
        album_id: 24,
        genre_id: 3
    },
    {
        song:'Your Heart',
        lyrics:'',
        youtube:'',
        album_id: 25,
        genre_id: 3
    },
    {
        song:'2055',
        lyrics:'',
        youtube:'',
        album_id: 26,
        genre_id: 3
    },
    {
        song:'Repeat it',
        lyrics:'',
        youtube:'',
        album_id: 27,
        genre_id: 3
    },
    {
        song:'MoneyBagg Yo',
        lyrics:'',
        youtube:'',
        album_id: 28,
        genre_id: 3
    },
    {
        song:'Jail pt.2',
        lyrics:'',
        youtube:'',
        album_id: 29,
        genre_id: 3
    },
    {
        song:'Dream Unfold',
        lyrics:'',
        youtube:'',
        album_id: 30,
        genre_id: 3
    },
    {
        song:'Eres',
        lyrics:'',
        youtube:'',
        album_id: 31,
        genre_id: 4
    },
    {
        song:'Como te extraño mi amor',
        lyrics:'',
        youtube:'',
        album_id: 32,
        genre_id: 4
    },
    {
        song:'Mi cucu',
        lyrics:'',
        youtube:'',
        album_id: 33,
        genre_id: 4
    },
    {
        song:'Amor de mis Amores',
        lyrics:'',
        youtube:'',
        album_id: 33,
        genre_id: 4
    },
    {
        song:'El Viejo del Sombrerón',
        lyrics:'',
        youtube:'',
        album_id: 33,
        genre_id: 4
    },
    {
        song:'Amanete Bandido',
        lyrics:'Yo seré el viento que va Navegaré por tu oscuridadTu rocío, beso frío, que me quemará',
        youtube:'https://www.youtube.com/watch?v=lA9p_fpUxnY',
        album_id: 34,
        genre_id: 4
    },
    {
        song:'Morena Mia',
        lyrics:'',
        youtube:'',
        album_id: 35,
        genre_id: 4
    },
    {
        song:'El último adiós',
        lyrics:'',
        youtube:'',
        album_id: 36,
        genre_id: 4
    },
    {
        song:'Despacito',
        lyrics:'',
        youtube:'',
        album_id: 37,
        genre_id: 4
    },
    {
        song:'Con Calma',
        lyrics:'',
        youtube:'',
        album_id: 38,
        genre_id: 4
    },
    {
        song:'Shaky Shaky',
        lyrics:'',
        youtube:'',
        album_id: 39,
        genre_id: 4
    },
];

const seedSong = () => Song.bulkCreate(songData)

module.exports = seedSong