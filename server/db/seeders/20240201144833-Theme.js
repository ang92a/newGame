"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          title: "Кино",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "География",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Спорт",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
