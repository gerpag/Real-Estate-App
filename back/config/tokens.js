const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.TOKEN_SECRET;

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, {
    expiresIn: "2d",
  });

  return token;
};
const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
