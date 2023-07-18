const User = require("../models/User.model");
const tokenService = require("../config/tokens");
const bcrypt = require("bcrypt");

async function registerUser(name, lastname, email, password, admin) {
  try {
    const user = await User.create({ name, lastname, email, password, admin });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserByEmail(email) {
  return User.findOne({
    where: { email },
  });
}

async function getUserById(userId) {
  return User.findByPk(userId);
}

async function validateUserPassword(password, secondPassword) {
  return bcrypt.compare(password, secondPassword);
}

function generateToken(payload) {
  return tokenService.generateToken(payload);
}

async function getUserProfile(userId) {
  const userProfile = await User.findByPk(userId, {
    attributes: {
      exclude: ["password"],
      include: ["name", "lastname", "email"],
    },
  });
  return userProfile;
}

async function updateUserProfile(userId) {
  try {
    const user = User.findByPk(userId);

    //ver tema foto con Cloudinary

    user.name = profil.data.name;
    user.lastname = profil.data.lastname;
    user.phone = profil.data.phone;
    user.password = profil.data.password;

    return user;
  } catch (error) {
    throw new Error("Error al actualizar el perfil del usuario");
  }
}

module.exports = {
  registerUser,
  findUserByEmail,
  getUserById,
  validateUserPassword,
  generateToken,
  getUserProfile,
};
