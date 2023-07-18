const User = require("../models/User.model");
const tokenService = require("../config/tokens");
const bcrypt = require("bcrypt");

async function registerUser(name, lastname, email, password) {
  try {
    const user = await User.create({ name, lastname, email, password });
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

module.exports = {
  registerUser,
  findUserByEmail,
  getUserById,
  validateUserPassword,
  generateToken,
  getUserProfile,
};
