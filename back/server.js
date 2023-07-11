const express = require("express");
const db = require("./config/db.js");

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


db.sync({ force: false }).then(() => {
  console.log("db conected");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})})
