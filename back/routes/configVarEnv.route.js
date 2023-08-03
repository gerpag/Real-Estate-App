const express = require("express");
const Envrouter = express.Router();

Envrouter.get("/config", (req, res) => {
  const config = {
    apiBaseUrl: process.env.REACT_APP_BACKEND_URL,
  };
  res.json(config);
});

module.exports = Envrouter;
