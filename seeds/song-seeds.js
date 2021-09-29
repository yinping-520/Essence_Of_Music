const { Song } = require('../models');


const songData = [
    {
        song_id:1,
        lyrics:'I saw the fire in your eyes I saw the fire when I look into your eyes You tell me things you wanna try',
        youtube:'https://www.youtube.com/watch?v=rhTl_OyehF8',
        album_id: 1
    },
    {
        song_id:1,
        Lyrics:'Yo seré el viento que va Navegaré por tu oscuridadTu rocío, beso frío, que me quemará',
        youtube:'https://www.youtube.com/watch?v=lA9p_fpUxnY',
        album_id: 2
    },
];

const seedSong = () => Song.bulkCreate(songData)

module.exports = seedSong