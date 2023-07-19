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

exports.deleteAdmin =async (req,res)=>{
  try {
    const id = req.params.id;
    await adminService.deleteAdmin(id);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

exports.getAllUser = async (req, res) => {
  try {
    const user = await adminService.getAllUser();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).json({ error: "Search failed" });
  }
};