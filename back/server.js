const express = require("express");
const db = require("./config/db.js");
const routes = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

const port = process.env.PORT_BACK;

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log("db conected");
  });
});
