const { validateToken } = require("../config/tokens");

function validateAuth(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  console.log(user);

  if (!user) return res.sendStatus(401);

  req.user = user;

  next();
}

const validateUserProfileAccess = (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;

  if (parseInt(id) !== userId) {
    return res
      .status(403)
      .json({ message: "No tienes permiso para acceder a este perfil" });
  }

  next();
};

module.exports = { validateAuth, validateUserProfileAccess };
