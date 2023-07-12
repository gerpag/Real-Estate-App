const User = require("../models/User");

exports.registerUser = async (name, lastname, email, password) => {
  try {
    const user = await User.create({ name, lastname, email, password });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
