const adminService = require("../services/admin.service");

exports.submitAdmin = async (req, res) => {
  try {
    const {
      location,
      price,
      category,
      description,
      imgsUrl,
      bathrooms,
      surface,
      operation,
      address,
      ambientes,
    } = req.body;
    const property = await adminService.submitAdmin(
      location,
      price,
      category,
      description,
      imgsUrl,
      bathrooms,
      surface,
      operation,
      address,
      ambientes
    );
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
