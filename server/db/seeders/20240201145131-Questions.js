"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          theme_id: 1,
          question:
            "Как зовут актёра, сыгравший Джека Доусона, в фильме Титаник?",
          answer: "Леонардо Ди Каприо",
          price: 100,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          question: "Кто выиграл больше всего золотых статуэток (Оскар)?",
          answer: "Уолт Дисней",
          price: 200,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          question: "Самый кассовый фильм российского производства?",
          answer: "Чебурашка",
          price: 300,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          question: "В каком фильме ужасов дебютировал Джонни Депп?",
          answer: "Кошмар на улице Вязов",
          price: 400,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          question: "Как назывался самый первый фильм?",
          answer: "Прибытие поезда на вокзал Ла-Сьота́",
          price: 500,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question: "Столица Северной Кореи?",
          answer: "Пхеньян",
          price: 100,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question: "Самая высокая точка в России это",
          answer: "Эльбрус",
          price: 200,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question: "В какой части света находится Россия?",
          answer: "Между Европой и Азией",
          price: 300,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question:
            "Горизонтальный математический угол, отсчитываемый от северного направления меридиана по ходу часовой стрелки до ориентируемой линии это",
          answer: "Азимут",
          price: 400,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          question: "Координаты Эльбрус-Буткемп в Спб",
          answer: "59 и 30",
          price: 500,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question: "За какой футбольный клуб болеют в Санкт-Петербурге?",
          answer: "Зенит",
          price: 100,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question: "Как зовут самого быстрого человека на планете?",
          answer: "Усэйн Болт",
          price: 200,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question: "В какой стране изобрели спорт?",
          answer: "Греция",
          price: 300,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question:
            "Какой баскетбольный клуб стал чемпионом НБА в прошлом году",
          answer: "Денвер Наггетс",
          price: 400,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          question: "Самый титулованный настольный теннисист",
          answer: "Ма Линь",
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
