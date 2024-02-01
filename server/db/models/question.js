"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme, Game }) {
      this.hasMany(Game, { foreignKey: "question_id" });
      this.belongsTo(Theme, { foreignKey: "theme_id" });
    }
  }
  Question.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      theme_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Themes",
          key: "id",
        },
        onDelete: "cascade",
      },
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
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
      modelName: "Question",
    }
  );
  return Question;
};
