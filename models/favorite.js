const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Favorite extends Model {}

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: false,
      },
    },
    artist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "artist",
        key: "id",
        unique: true,
      },
    },
    song_name: {
      type: DataTypes.STRING,
      unique: true,
    },
    album_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "album",
        key: "id",
        unique: true,
      },
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "genre",
        key: "id",
      },
    },
    lyrics: {
      type: DataTypes.TEXT("long"),
    },
    youtube: {
      type: DataTypes.STRING,
    },
    audio: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "favorite",
  }
);

module.exports = Favorite;
