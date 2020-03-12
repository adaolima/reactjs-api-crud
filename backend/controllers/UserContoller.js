const User = require("../models").User;
const JsonError = require("../utils/JsonError");

module.exports = {
  async read(req, res) {
    try {
      const allUsers = await User.findAll({
        attributes: { exclude: ["password"] }
      });
      return res.json(allUsers);
    } catch (error) {
      res.status(500);
      res.json(JsonError(req, res, "Não foi possível listar os usuários"));
    }
  },

  async create(req, res) {
    try {
      const { full_name, email, phone, cpf, birth_date, password } = req.body;
      const addUser = await User.create({
        full_name,
        email,
        phone,
        cpf,
        birth_date,
        password
      });
      res.status(201);
      return res.json(addUser);
    } catch (error) {
      res.status(500);
      res.json(JsonError(req, res, "Não foi possível criar o usuário"));
    }
  },

  async update(req, res) {
    const { user_id } = req.headers;
    try {
      const userSelected = await User.findOne({ where: { user_id } });
      if (userSelected) {
        await userSelected.update(req.body);
        res.json({
          status: "200",
          message: "Dados do Usuário atualizados com sucesso"
        });
      } else {
        res.status(404);
        res.json(JsonError(req, res, "Usuário não encontrado"));
      }
    } catch (error) {
      res.status(500);
      res.json(JsonError(req, res, "Não foi possível atualizar o usuário"));
    }
  },

  async delete(req, res) {
    const { user_id } = req.headers;
    try {
      const userSelected = await User.findOne({ where: { user_id } });
      if (userSelected) {
        await user.destroy();
        res.json({ status: "200", message: "Usuário deletado com sucesso" });
      } else {
        res.status(404);
        res.json(json.JsonError(req, res, "Usuário não encontrado"));
      }
    } catch (error) {
      res.status(500);
      res.json(JsonError(req, res, "Não foi possível deletar o usuário"));
    }
  }
};
