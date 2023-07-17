const Admin = require("../models/Property.model");


async function submitAdmin(location,price,category,description,imgsUrl,bathrooms,surface,operation) {
  try {
    const admin = await Admin.create({ location,price,category,description,imgsUrl,bathrooms,surface,operation });
    return admin;
  } catch (error) {
    throw new Error(error.message);
  }
}



module.exports = {
  submitAdmin,

};