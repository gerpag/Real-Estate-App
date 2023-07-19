const Property = require("../models/Property.model");
const User = require("../models/User.model")

async function submitAdmin(location,price,category,description,imgsUrl,bathrooms,surface,operation,address,ambientes) {
  try {
    const property = await Property.create({ location,price,category,description,imgsUrl,bathrooms,surface,operation,address,ambientes });
    return property;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteAdmin(id){
  return await Property.destroy({
    where: {
      id: id,
    },
  });
};

async function getAllUser() {
  return User.findAll()
}


module.exports = {
  submitAdmin,deleteAdmin,getAllUser

};