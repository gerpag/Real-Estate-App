const db = require("./db");
const Property = require("../models/Property.model");

const propertiesData = [
  {
    location: "Ciudad Springfield",
    price: 150000,
    category: "Casa",
    description: "Hermosa casa en venta",
    imgsUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HgIop5lVbUTyBUjjY8WCvjN2d5XsRZtIcA&usqp=CAU",
    bathrooms: 2,
    surface: 200,
    operation: "Venta",
    address: "Calle Siempreviva 742",
    ambientes: 3,
  },
  {
    location: "Ciudad XYZ",
    price: 250000,
    category: "Departamento",
    description: "Amplio departamento en alquiler",
    imgsUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNTfXs_QA67KqKeOMtq_Dk7B61ArFt5UeYwzZQP_vUho2_CQtbZ_AHnMnKYfWdKRGz2I&usqp=CAU",
    bathrooms: 3,
    surface: 150,
    operation: "Alquiler",
    address: "Avenida Central 456",
    ambientes: 4,
  },
  {
    location: "Ciudad XYZ",
    price: 90000,
    category: "Apartamento",
    description: "Acogedor apartamento en venta",
    imgsUrl: "",
    bathrooms: 1,
    surface: 80,
    operation: "Venta",
    address: "Calle Secundaria 789",
    ambientes: 2,
  },
  {
    location: "Ciudad ABC",
    price: 350000,
    category: "Casa",
    description: "Espaciosa casa en alquiler",
    imgsUrl:
      "https://static.tokkobroker.com/pictures/5191455121106574509230395257378311135930760474388952071936392614080253730869.jpg",
    bathrooms: 4,
    surface: 300,
    operation: "Alquiler",
    address: "Avenida Principal 321",
    ambientes: 5,
  },
  {
    location: "Ciudad XYZ",
    price: 180000,
    category: "Departamento",
    description: "Departamento céntrico en venta",
    imgsUrl:
      "https://static.tokkobroker.com/water_pics/17804275442637575704715077075571277284942939857129218782957233411637961938258.jpg",
    bathrooms: 2,
    surface: 120,
    operation: "Venta",
    address: "Calle Central 654",
    ambientes: 3,
  },
  {
    location: "Ciudad ABC",
    price: 75000,
    category: "Apartamento",
    description: "Apartamento económico en alquiler",
    imgsUrl:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s670ee523413ea077/image/i2f73fd77ad911865/version/1493155142/image.jpg",
    bathrooms: 1,
    surface: 50,
    operation: "Alquiler",
    address: "Avenida Secundaria 987",
    ambientes: 1,
  },
];

async function seed() {
  try {
    await db.sync();

    await Property.bulkCreate(propertiesData);

    console.log(
      "Los datos se han insertado correctamente en la base de datos."
    );

    process.exit(0);
  } catch (error) {
    console.error("Error al insertar los datos:", error);
    process.exit(1);
  }
}

seed();
