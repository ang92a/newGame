"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          theme_id: 1,
          question: "Тема Об жизни. Вопрос 1",
          answer: "aa",
          price: 100,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          question: "Тема Об жизни. Вопрос 2",
          answer: "ab",
          price: 200,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          question: "Тема Об жизни. Вопрос 3",
          answer: "ac",
          price: 300,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          question: "Тема Об жизни. Вопрос 4",
          answer: "ad",
          price: 400,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          question: "Тема Об жизни. Вопрос 5",
          answer: "ae",
          price: 500,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question: "Тема Об любви. Вопрос 1",
          answer: "ba",
          price: 100,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question: "Тема Об любви. Вопрос 2",
          answer: "bb",
          price: 200,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question: "Тема Об любви. Вопрос 3",
          answer: "bc",
          price: 300,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question: "Тема Об любви. Вопрос 4",
          answer: "bd",
          price: 400,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question: "Тема Об любви. Вопрос 5",
          answer: "be",
          price: 500,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question: "Тема Об стол. Вопрос 1",
          answer: "ca",
          price: 100,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question: "Тема Об стол. Вопрос 2",
          answer: "cb",
          price: 200,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question: "Тема Об стол. Вопрос 3",
          answer: "cc",
          price: 300,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question: "Тема Об стол. Вопрос 4",
          answer: "cd",
          price: 400,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question: "Тема Об стол. Вопрос 5",
          answer: "ce",
          price: 500,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
