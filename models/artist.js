const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Artist extends Model {}

Artist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'genre',
          key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "artist",
  }
);

module.exports = Artist;