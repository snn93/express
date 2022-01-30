const express = require("express");
const res = require("express/lib/response");
const food = require("./food");
const app = express();

//get all food
app.get("/"),
  (req, res) => {
    console.log("hello");
    res.json({ song: "helloooooooooooo" });
  };

// get detail food (changing value)
app.get("/food/:id"),
  (req, res) => {
    const { id } = req.params;
    const foodOne = food.find((e) => e.id === +id);
    res.json(foodOne);
  };

app.listen(8080, () => {
  console.log("this app is running on 8080");
});
