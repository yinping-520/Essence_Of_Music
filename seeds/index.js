const seedGenre = require('./genre-seeds');
const seedArtists = require('./artists-seeds')
const seedAlbum = require('./album-seeds');
const seedSong = require('./song-seeds');
const seedFavorites = require('./favorites-seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force:true});
    console.log('\n--databased is synced---\n')

    await seedGenre();
    console.log('\n--genre is synced---\n')
    await seedArtists();
    console.log('\n--artist is synced---\n')
    await seedAlbum();
    console.log('\n--album is synced---\n')
    await seedSong();
    console.log('\n--song is synced---\n')
    await seedFavorites();
    console.log('\n--favorite is synced---\n')

    process.exit(0);
};

seedAll();