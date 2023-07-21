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

async function updateUserProfile(userId, profileData) {
  try {
    const user = await User.findByPk(userId, {
      attributes: {
        exclude: ["password"],
        include: ["name", "lastname", "email"],
      },
    });

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Verificar tema de foto con Cloudinary
    // ...

    user.name = profileData.name;
    user.lastname = profileData.lastname;
    user.phone = profileData.phone;
    user.password = profileData.password;

    await user.save();
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
  updateUserProfile,
};
