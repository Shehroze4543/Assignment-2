const express = require("express");

const app = express();

app.get("/greetings", (req, res) => {
  res.send(`<h1>Hello Stranger</h1>`);
});

app.get("/greetings/:name", (req, res) => {
  res.send(`Howdy!! ` + `${req.params.name}` + `. Its so good to see you.`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const bill = [req.params.total * (req.params.tipPercentage / 100) + []];
  res.send(...bill);
});

app.listen(3010, function () {
  console.log("Listening on Port 3010");
});
