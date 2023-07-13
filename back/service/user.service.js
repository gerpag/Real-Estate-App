const User = require("../models/User");
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

async function validateUserPassword(user, password) {
  return bcrypt.compare(password, user.password);
}

function generateToken(payload) {
  return tokenService.generateToken(payload);
}

module.exports = {
  registerUser,
  findUserByEmail,
  validateUserPassword,
  generateToken,
};
