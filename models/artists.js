const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Artists extends Model {}

Artists.init(
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
    modelName: "artists",
  }
);

module.exports = Artists;