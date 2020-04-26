const express = require("express");
const logs = require("morgan");
const port = 3000;
const app = express();

app.use(logs("dev"));

app.get("/", (req, res) => {
  return res.status(201).send({ message: "Ok" });
});

app.listen(port, (req, res) => {
  console.log(`server running on port: ${port}`);
});
