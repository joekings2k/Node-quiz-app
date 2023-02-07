const express = require("express")
const routerQuiz = express.Router()

const questionController= require("../controllers/questionControllers")


routerQuiz.get("/", questionController.getQuestions);

routerQuiz.post("/next",questionController.nextQuestions)

module.exports= routerQuiz