const User = require("../models").User;

module.exports = {
  async read(req, res) {
    const allUsers = await User.findAll({
      attributes: { exclude: ["password"] }
    });
    return res.json(allUsers);
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
      response.json(JsonError(req, res, "Não foi possível criar o usuário"));
    }
  }
};
