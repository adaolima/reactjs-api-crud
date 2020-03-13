"use strict";
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const AuthToken = sequelize.define(
    "AuthToken",
    {
      token: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  AuthToken.associate = function({ User }) {
    AuthToken.belongsTo(User);
  };

  AuthToken.generate = async function(UserId) {
    if (!UserId) {
      throw new Error("Autenticação requer o id do usuário");
    }
    const token = jwt.sign({ id: UserId }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    return AuthToken.create({ token, UserId });
  };

  return AuthToken;
};
