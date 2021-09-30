const { Song } = require('../models');


const songData = [
    {
        song:'Industry Baby',
        lyrics:'',
        youtube:'',
        album_id: 1
    },
    {
        song:'Woman',
        lyrics:'',
        youtube:'',
        album_id: 2
    },
    {
        song:'Shivers',
        lyrics:'',
        youtube:'',
        album_id: 3
    },
    {
        song:'My Universe',
        lyrics:'',
        youtube:'',
        album_id: 4
    },
    {
        song:'Have Mercy',
        lyrics:'',
        youtube:'',
        album_id: 5
    },
    {
        song:'Happier Than Ever',
        lyrics:'',
        youtube:'',
        album_id: 6
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
        album_id: 8
    },
    {
        song:'Love again',
        lyrics:'',
        youtube:'',
        album_id: 9
    },
    {
        song:'Heat Wave',
        lyrics:'',
        youtube:'',
        album_id: 10
    },
    {
        song:'Hurricane',
        lyrics:'',
        youtube:'',
        album_id: 11
    },
    {
        song:'Kiss Somebody',
        lyrics:'',
        youtube:'',
        album_id: 12
    },
    {
        song:'Burn Out',
        lyrics:'',
        youtube:'',
        album_id: 13
    },
    {
        song:'Achy Breaky Hearts',
        lyrics:'',
        youtube:'',
        album_id: 14
    },
    {
        song:'Tennesse Whisky',
        lyrics:'',
        youtube:'',
        album_id: 15
    },
    {
        song:'Get Along',
        lyrics:'',
        youtube:'',
        album_id: 16
    },
    {
        song:'Loud and Heavy',
        lyrics:'',
        youtube:'',
        album_id: 17
    },
    {
        song:'Hangin On',
        lyrics:'',
        youtube:'',
        album_id: 18
    },
    {
        song:'Drunk Me',
        lyrics:'',
        youtube:'',
        album_id: 19
    },
    {
        song:'Best Shot',
        lyrics:'',
        youtube:'',
        album_id: 20
    },
    {
        song:'Knife Talk',
        lyrics:'',
        youtube:'',
        album_id: 21
    },
    {
        song:'Sharing Locations',
        lyrics:'',
        youtube:'',
        album_id: 22
    },
    {
        song:'Lonely',
        lyrics:'',
        youtube:'',
        album_id: 23
    },
    {
        song:'Too Easy',
        lyrics:'',
        youtube:'',
        album_id: 24
    },
    {
        song:'Your Heart',
        lyrics:'',
        youtube:'',
        album_id: 25
    },
    {
        song:'2055',
        lyrics:'',
        youtube:'',
        album_id: 26
    },
    {
        song:'Repeat it',
        lyrics:'',
        youtube:'',
        album_id: 27
    },
    {
        song:'MoneyBagg Yo',
        lyrics:'',
        youtube:'',
        album_id: 28
    },
    {
        song:'Jail pt.2',
        lyrics:'',
        youtube:'',
        album_id: 29
    },
    {
        song:'Dream Unfold',
        lyrics:'',
        youtube:'',
        album_id: 30
    },
    {
        song:'Eres',
        lyrics:'',
        youtube:'',
        album_id: 31
    },
    {
        song:'Como te extraño mi amor',
        lyrics:'',
        youtube:'',
        album_id: 32
    },
    {
        song:'Mi cucu',
        lyrics:'',
        youtube:'',
        album_id: 33
    },
    {
        song:'Amor de mis Amores',
        lyrics:'',
        youtube:'',
        album_id: 33
    },
    {
        song:'El Viejo del Sombrerón',
        lyrics:'',
        youtube:'',
        album_id: 33
    },
    {
        song:'Amanete Bandido',
        lyrics:'Yo seré el viento que va Navegaré por tu oscuridadTu rocío, beso frío, que me quemará',
        youtube:'https://www.youtube.com/watch?v=lA9p_fpUxnY',
        album_id: 34
    },
    {
        song:'Morena Mia',
        lyrics:'',
        youtube:'',
        album_id: 35
    },
    {
        song:'El último adiós',
        lyrics:'',
        youtube:'',
        album_id: 36
    },
    {
        song:'Despacito',
        lyrics:'',
        youtube:'',
        album_id: 37
    },
    {
        song:'Con Calma',
        lyrics:'',
        youtube:'',
        album_id: 38
    },
    {
        song:'Shaky Shaky',
        lyrics:'',
        youtube:'',
        album_id: 39
    },
];

const seedSong = () => Song.bulkCreate(songData)

module.exports = seedSong