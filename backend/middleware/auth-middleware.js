const { User, AuthToken } = require("../models");

module.exports = async (req, res, next) => {
  const token = req.cookies.auth_token || req.headers.authorization;
  const user_id = req.headers.user_id;
  console.log(token);
  console.log(user_id);
  try {
    if (token) {
      const authToken = await AuthToken.findOne({
        where: { token, user_id }
      });
      // console.log(req.cookies.auth_token);
      if (authToken) {
        //req.user = authToken.User;
        return res.json("Usuário autorizado");
      }
    } else {
      res.json("Não Autorizado");
    }
    next();
  } catch (error) {
    res.json("Não foi possivel se conectar.");
  }
};
