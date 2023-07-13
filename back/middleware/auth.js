const { validateToken } = require("../config/tokens");

function validateAuth(req, res, next) {
  const { token } = req.cookies;
  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);
  res.send(user);
}

module.exports = { validateAuth };
