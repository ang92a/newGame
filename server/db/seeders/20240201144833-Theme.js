"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          title: "Об жизни",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Об любви",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Об стену",
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
