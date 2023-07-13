const express = require("express");
const db = require("./config/db.js");
const routes = require("./routes");

const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.use("/api/v1", routes);

db.sync({ force: false }).then(() => {
  console.log("db conected");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
