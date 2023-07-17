const userService = require("../service/user.service");

exports.registerUser = async (req, res) => {
  try {
    const { name, lastname, email, password, admin } = req.body;
    const user = await userService.registerUser(
      name,
      lastname,
      email,
      password,
      admin
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.sendStatus(401);
    }

    const isValid = await userService.validateUserPassword(
      password,
      user.password
    );
    if (!isValid) {
      return res.sendStatus(401);
    }

    const payload = {
      email: user.email,
      name: user.name,
      admin:user.admin
    };
    const token = userService.generateToken(payload);

    res.cookie("token", token);

    res.send(payload);
  } catch (error) {
    console.error("Error during login:", error);
    res.sendStatus(500);
  }
};

exports.getAuthenticatedUser = async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    console.error("Error during getting authenticated user:", error);
    res.sendStatus(500);
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie("token");
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: "Logout failed" });
  }
};

