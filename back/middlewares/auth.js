const { validateToken } = require("../config/tokens");
const User = require("../models/User.model");
const userService = require("../services/user.service");

function validateAuth(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  console.log(user);

  if (!user) return res.sendStatus(401);

  req.user = user;

  next();
}

// async function validateAuth(req, res, next) {
//   try {
//     const token = req.cookies.token;

//     if (!token) return res.sendStatus(401);

//     const { user } = validateToken(token);

//     if (!user) return res.sendStatus(401);
//     //Generar payload nuevo en lugar de req.user (Simil ruta del login)

//     try {
//       const updatedUser = await User.findByPk(user.id);
//       // const newPayload = //usar modelo de service de login (objeto )
//       //   (req.user = newPayload);

//       const isValid = await userService.validateUserPassword(
//         password,
//         user.password
//       );
//       if (!isValid) {
//         return res.sendStatus(401);
//       }

//       const newPayload = {
//         email: user.email,
//         name: user.name,
//         lastname: user.lastname,
//         phone: user.phone,
//         img_url: user.img_url,
//         id: user.id,
//         admin: user.admin,
//       };
//       const token = userService.generateToken(newPayload);

//       res.cookie("token", token);

//       res.send(newPayload);
//     } catch (error) {
//       console.error(error);
//       res.sendStatus(500);
//     }

//     next();
//   } catch (error) {
//     console.error(error);
//   }
// }

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
