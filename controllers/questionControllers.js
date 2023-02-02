const quizModel = require("../model/quizModel")
const express= require("express")

module.exports ={
  addQuestion:(req,res,next)=>{

    
    const question=req.body.question,
        option1= req.body.option1,
        option2= req.body.option2,
        option3= req.body.option3,
        option4= req.body.option4,
        answer= Number(req.body.answer)

        const ooptions =[option1,option2,option3,option4]

        const insert = async()=>{
          try{
            const newQuestion= new quizModel({
              question:question,
              options:ooptions,
              answer:answer
            })
            await newQuestion.save()
            console.log(newQuestion)
            res.redirect("/addQuestion")
          }catch(err){
            console.log(err.message);
          }
        }
        insert()
  },
  getQuestions:(req,res)=>{
    const find =async()=>{
      try{
        let result=await quizModel.find()
        console.log(result)
        res.render("question", { question: result[0].question,options:result[0].options });
      }catch(err){
        console.log(err.message);
      }
      
    }
    find()
    
  }
}
