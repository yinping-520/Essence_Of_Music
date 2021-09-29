const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Catalog extends Model {}

Catalog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    song_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artist_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    album: {
        type: DataTypes.STRING,
        allowNull: false
    },
    youtube: {
        type: DataTypes.
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "catalog",
  }
);
