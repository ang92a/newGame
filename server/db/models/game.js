"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ Question, User }) {
      this.belongsTo(Question, { foreignKey: "question_id" });
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Game.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "cascade",
      },
      question_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Questions",
          key: "id",
        },
        onDelete: "cascade",
      },
      answerUser: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
