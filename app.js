const express = require("express");
const ejs = require("ejs");
const app = express();
const dbConnect= require("./dbconnect")
const quizRoutes =require("./routes/quizRoutes")
const addQuestionRoute= require("./routes/addQuestionsRoute")
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));


dbConnect()
app.get("/",(req,res)=>{
    res.render("index")
})

app.use("/question",quizRoutes)
app.use("/addQuestion",addQuestionRoute)




app.listen(3000, () => {
  console.log("server is runing on port 3000");
});
