"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("User", [
      {
        full_name: "John Foster",
        email: "example@example.com",
        phone: "5555-555",
        birth_date: new Date(1990, 1, 25),
        cpf: "000.000.000-00",
        password: "654321",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: "Maria Silva",
        email: "maria@example.com",
        phone: "5555-555",
        birth_date: new Date(1996, 12, 25),
        cpf: "000.000.000-00",
        password: "654321",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  }
};
