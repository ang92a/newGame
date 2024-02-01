"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Jane Doe",
          password: await bcrypt.hash("123123", 10),
          email: "biba@babara.com",
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Smith",
          password: await bcrypt.hash("123123", 10),
          email: "boba@babara.com",
          score: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // добавьте больше пользователей по необходимости
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
