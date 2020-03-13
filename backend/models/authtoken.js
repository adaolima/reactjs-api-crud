"use strict";
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const AuthToken = sequelize.define(
    "AuthToken",
    {
      token: { type: DataTypes.STRING, allowNull: false },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: "User",
        referenceKey: "user_id"
      }
    },
    {}
  );
  AuthToken.associate = function(models) {
    AuthToken.belongsTo(models.User, {
      foreignKey: "user_id",
      unique: true,
      onDelete: "CASCADE"
    });
  };

  AuthToken.generate = async function(UserId) {
    if (!UserId) {
      throw new Error("Autenticação requer o id do usuário");
    }
    const token = jwt.sign({ id: UserId }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    return AuthToken.create({ token, user_id: UserId });
  };

  return AuthToken;
};
