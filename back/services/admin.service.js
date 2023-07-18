const Admin = require("../models/Property.model");


async function submitAdmin(location,price,category,description,imgsUrl,bathrooms,surface,operation,address,ambientes) {
  try {
    const admin = await Admin.create({ location,price,category,description,imgsUrl,bathrooms,surface,operation,address,ambientes });
    return admin;
  } catch (error) {
    throw new Error(error.message);
  }
}



module.exports = {
  submitAdmin,

};