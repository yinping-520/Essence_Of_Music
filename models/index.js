const Artist = require('./artist');
const Album = require('./album');
const Genre = require('./genre');
const Song = require('./song');
const User = require('./user');
const Favorite = require('./favorite');

//association between user and artist
Artist.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorite,
    unique: false
  }
});
  
User.belongsToMany(Artist, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorite,
    unique: false
  }
});

//genre has many artist, artist belong to genre
Genre.hasMany(Artist, {
  foreignKey: 'genre_id',
  onDelete: 'CASCADE'
});

Artist.belongsTo(Genre, {
  foreignKey: 'genre_id'
});

//artist hasMany album, album belong to artist

Artist.hasMany(Album, {
  foreignKey: 'artist_id',
  onDelete: 'CASCADE'
});

Album.belongsTo(Artist, {
  foreignKey: 'artist_id'
});

//album hasMany song, song belong to album
Album.hasMany(Song, {
    foreignKey: 'album_id',
    onDelete: 'CASCADE'
});

Song.belongsTo(Album, {
    foreignKey: 'album_id'
});

Song.belongsTo(Genre, {
  foreignKey: 'genre_id'
});



module.exports = { Artist, Album, Genre, Song , User ,Favorite};
