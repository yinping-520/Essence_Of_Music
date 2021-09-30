const { Song } = require('../models');


const songData = [
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 1
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 2
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 3
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 4
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 5
    },
    {
        song:'',
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
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 8
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 9
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 10
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 11
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 12
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 13
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 14
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 15
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 16
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 17
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 18
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 19
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 20
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 21
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 22
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 23
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 24
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 25
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 26
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 27
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 28
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 29
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 30
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 31
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 31
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 32
    },
    {
        song:'Amanete Bandido',
        lyrics:'Yo seré el viento que va Navegaré por tu oscuridadTu rocío, beso frío, que me quemará',
        youtube:'https://www.youtube.com/watch?v=lA9p_fpUxnY',
        album_id: 33
    },
    {
        song:'Thing',
        lyrics:'Yo seré el viento que va Navegaré por tu oscuridadTu rocío, beso frío, que me quemará',
        youtube:'https://www.youtube.com/watch?v=lA9p_fpUxnY',
        album_id: 33
    },
    {
        song:'',
        lyrics:'',
        youtube:'',
        album_id: 34
    },
];

const seedSong = () => Song.bulkCreate(songData)

module.exports = seedSong