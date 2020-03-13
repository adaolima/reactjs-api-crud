const { User, AuthToken } = require("../models");

module.exports = async (req, res, next) => {
  const tokens = req.cookies.auth_token || req.headers.authorization;
  if (token) {
    const authToken = await AuthToken.find({
      where: { token },
      include: User
    });

    if (authToken) {
      req.user = authToken.User;
    }
  }
  next();
};
