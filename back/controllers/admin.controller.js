const adminService = require("../service/admin.service");


exports.submitAdmin = async (req, res) => {
  try {
    const { location,price,category,description,imgsUrl,bathrooms,surface,operation } = req.body;
    const user = await adminService.submitAdmin(
      location,price,category,description,imgsUrl,bathrooms,surface,operation
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};