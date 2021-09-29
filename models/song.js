const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Song extends Model {}

Song.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    song_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'album',
            key: 'id'
        }
    },
    lyrics: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    youtube: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "song",
  }
);

module.exports = Song;
