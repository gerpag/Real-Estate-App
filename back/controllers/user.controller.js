const userService = require("../service/user.service");

exports.registerUser = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;
    const user = await userService.registerUser(
      name,
      lastname,
      email,
      password
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
