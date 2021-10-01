const { Song } = require('../models');


const songData = [
    {
        song:'Industry Baby',
        lyrics:'Baby back, ayy Couple racks, ayy Couple Grammys on him Couple plaques, ayy That\'s a fact, ayy Throw it back, ayy Throw it back, ayy',
        youtube:'https://www.youtube.com/watch?v=HCq1OcAEAm0',
        album_id: 1,
        genre_id: 1
    },
    {
        song:'Woman',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=2V_uAAAH-_Q',
        album_id: 2,
        genre_id: 1
        
    },
    {
        song:'Shivers',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=Il0S8BoucSA',
        album_id: 3,
        genre_id: 1
    },
    {
        song:'My Universe',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=3YqPKLZF_WU',
        album_id: 4,
        genre_id: 1
    },
    {
        song:'Have Mercy',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=FfesqRkdSEk',
        album_id: 5,
        genre_id: 1
    },
    {
        song:'Happier Than Ever',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=5GJWxDKyk3A',
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
        youtube:'https://www.youtube.com/watch?v=y8trd3gjJt0',
        album_id: 8,
        genre_id: 1
    },
    {
        song:'Love again',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=BC19kwABFwc',
        album_id: 9,
        genre_id: 1
    },
    {
        song:'Heat Wave',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=mRD0-GxqHVo',
        album_id: 10,
        genre_id: 1
    },
    {
        song:'Hurricane',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=bPjZmQAvk_8',
        album_id: 11,
        genre_id: 2
    },
    {
        song:'Kiss Somebody',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=GiAINTvAfrw',
        album_id: 12,
        genre_id: 2
    },
    {
        song:'Burn Out',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=YBCrkFB8nvc',
        album_id: 13,
        genre_id: 2
    },
    {
        song:'Achy Breaky Hearts',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=byQIPdHMpjc',
        album_id: 14,
        genre_id: 2
    },
    {
        song:'Tennesse Whisky',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=4zAThXFOy2c',
        album_id: 15,
        genre_id: 2
    },
    {
        song:'Get Along',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=-LI8X-GhFA8',
        album_id: 16,
        genre_id: 2
    },
    {
        song:'Loud and Heavy',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=8DkIPTy3KaA',
        album_id: 17,
        genre_id: 2
    },
    {
        song:'Hangin On',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=CwKp6Xhy3_4',
        album_id: 18,
        genre_id: 2
    },
    {
        song:'Drunk Me',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=BiA-7xHM8zc',
        album_id: 19,
        genre_id: 2
    },
    {
        song:'Best Shot',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=25ys0vc4tTI',
        album_id: 20,
        genre_id: 2
    },
    {
        song:'Knife Talk',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=XPmu8MS_VjE',
        album_id: 21,
        genre_id: 3
    },
    {
        song:'Sharing Locations',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=XCyIcifbOWE',
        album_id: 22,
        genre_id: 3
    },
    {
        song:'Lonely',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=pqydBaa1QR8',
        album_id: 23,
        genre_id: 3
    },
    {
        song:'Too Easy',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=IUgMyenK3l8',
        album_id: 24,
        genre_id: 3
    },
    {
        song:'Your Heart',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=nD-Zu6aayS0',
        album_id: 25,
        genre_id: 3
    },
    {
        song:'2055',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=y1xZ_kAhjMc',
        album_id: 26,
        genre_id: 3
    },
    {
        song:'Repeat it',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=5g4M_jwPHjg',
        album_id: 27,
        genre_id: 3
    },
    {
        song:'MoneyBagg Yo',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=6bN45f9NjlA',
        album_id: 28,
        genre_id: 3
    },
    {
        song:'Jail pt.2',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=7QL0A7SnSrM',
        album_id: 29,
        genre_id: 3
    },
    {
        song:'Dream Unfold',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=BVpRYDNOX0I',
        album_id: 30,
        genre_id: 3
    },
    {
        song:'Eres',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=98Akpf1ph2o',
        album_id: 31,
        genre_id: 4
    },
    {
        song:'Como te extraño mi amor',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=RmsICVbs8Z4',
        album_id: 32,
        genre_id: 4
    },
    {
        song:'Mi cucu',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=6AQSUBEkVHk',
        album_id: 33,
        genre_id: 4
    },
    {
        song:'Amor de mis Amores',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=GEU64HPZI8I',
        album_id: 33,
        genre_id: 4
    },
    {
        song:'El Viejo del Sombrerón',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=Y4DkbHSXqEw',
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
        youtube:'https://www.youtube.com/watch?v=rDIfSaMXwNc',
        album_id: 35,
        genre_id: 4
    },
    {
        song:'El último adiós',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=jNLU_A1d_60',
        album_id: 36,
        genre_id: 4
    },
    {
        song:'Despacito',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
        album_id: 37,
        genre_id: 4
    },
    {
        song:'Con Calma',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=DiItGE3eAyQ',
        album_id: 38,
        genre_id: 4
    },
    {
        song:'Shaky Shaky',
        lyrics:'',
        youtube:'https://www.youtube.com/watch?v=aKuivabiOns',
        album_id: 39,
        genre_id: 4
    },
];

const seedSong = () => Song.bulkCreate(songData)

module.exports = seedSong