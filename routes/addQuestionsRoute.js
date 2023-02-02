const express = require("express");
const routerAddQuest = express.Router();
const questionController = require("../controllers/questionControllers");

routerAddQuest.get("/", (req, res) => {
  res.render("addQuestion");
});

routerAddQuest.post("/", questionController.addQuestion);



module.exports = routerAddQuest