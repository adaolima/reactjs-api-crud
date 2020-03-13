"use strict";
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      full_name: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          is: ["^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$", "i"]
        }
      },
      phone: { type: DataTypes.STRING, allowNull: false },
      birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validade: {
          isDate: true,
          isBefore: new Date(Date.now()).toISOString().split("T")[0]
        }
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validade: {
          isIn: {
            args: [["^d{3}.d{3}.d{3}-d{2}$", "i"]],
            msg: "O Cpf precisa estar formatado no padrão."
          }
        }
      },
      password: { type: DataTypes.STRING, allowNull: false }
    },
    {
      freezeTableName: true
      // instanceMethods: {
      //   generateHash: function(password) {
      //     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
      //   },
      //   validPassword: function (password) {
      //     return bcrypt.compareSync(password, this.password)
      //   }
      // }
    }
  );
  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10)
    );
    user.password = hashedPassword;
  });

  User.associate = function(models) {
    User.hasMany(models.AuthToken);
  };

  User.prototype.authorize = async function() {
    const { AuthToken } = sequelize.models;
    const user = this;

    const authToken = await AuthToken.generate(this.user_id);
    await user.addAuthToken(authToken);

    return { user, authToken };
  };

  User.prototype.logout = async function(token) {
    sequelize.models.AuthToken.destroy({ where: { token } });
  };

  return User;
};
