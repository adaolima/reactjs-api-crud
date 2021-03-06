"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "AuthTokens", // name of Source model
      "user_id", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "User", // name of Target model
          key: "user_id" // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "AuthTokens", // name of Source model
      "user_id" // key we want to remove
    );
  }
};
