const express = require("express");
const db = require("./config/db.js");
const routes = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", routes);

db.sync({ force: false }).then(() => {
  console.log("db conected");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
