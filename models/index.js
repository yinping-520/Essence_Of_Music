const Artists = require('./artists');
const Album = require('./album');
const Genre = require('./genre');
const Song = require('./song');
const User = require('./user');
const Favorites = require('./favorites');

//association between user and artists
Artists.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorites,
    unique: false
  }
});
  
User.belongsToMany(Artists, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Favorites,
    unique: false
  }
});

//genre has many artists, artist belong to genre
Genre.hasMany(Artists, {
  foreignKey: 'genre_id',
  onDelete: 'CASCADE'
});

Artists.belongsTo(Genre, {
  foreignKey: 'genre_id'
});

//artists hasMany album, album belong to artists

Artists.hasMany(Album, {
  foreignKey: 'artist_id',
  onDelete: 'CASCADE'
});

Album.belongsTo(Artists, {
  foreignKey: 'artist_id'
});

//album hasMany song, song belong to album
Album.hasMany(Song, {
    foreignKey: 'song_id',
    onDelete: 'CASCADE'
});

Song.belongsTo(Album, {
    foreignKey: 'song_id'
});

//artist  has many favorite, favorite belong to artist
Artists.hasMany(Favorites, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE'
});

Favorites.belongsTo(Artists, {
    foreignKey: 'artist_id'
})

//users hasMany favorite, favorite belong to user
User.hasMany(Favorites, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Favorites.belongsTo(User, {
    foreignKey: 'user_id'
})


module.exports = { Artists, Album, Genre, Song , User ,Favorites};
