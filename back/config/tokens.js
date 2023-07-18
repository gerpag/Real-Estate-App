const jwt = require("jsonwebtoken");

const SECRET = "stringRandom"; // agregar Luego VAriables entorno: const {SECRET} = require("./.envs")

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, {
    expiresIn: "2d",
  });

  return token;
};
const validateToken = (token) => {
  return jwt.verify(token, SECRET);
  //const { user } = decoded;

  //return user;
};

module.exports = { generateToken, validateToken };
