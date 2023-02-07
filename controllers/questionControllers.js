const quizModel = require("../model/quizModel");


let correctAnswers = [],
  quizQuestions = [];
i = 0;

module.exports = {
  addQuestion: (req, res, next) => {
    const question = req.body.question,
      option1 = req.body.option1,
      option2 = req.body.option2,
      option3 = req.body.option3,
      option4 = req.body.option4,
      answer = Number(req.body.answer);

    const ooptions = [option1, option2, option3, option4];

    const insert = async () => {
      try {
        const newQuestion = new quizModel({
          question: question,
          options: ooptions,
          answer: answer,
        });
        await newQuestion.save();
        console.log(newQuestion);
        res.redirect("/addQuestion");
      } catch (err) {
        console.log(err.message);
      }
    };
    insert();
  },
  getQuestions: (req, res) => {
    const find = async () => {
      try {
        let result = await quizModel.find();
        quizQuestions = result;
        res.render("question", {
          question: quizQuestions[0].question,
          options: quizQuestions[0].options,
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    find();
  },
  nextQuestions: (req, res) => {
    i = i + 1;
    const { optradio } = req.body;
    if (optradio) {
      if (i <= quizQuestions.length) {
        correctAnswers.push(optradio);
      }
      if (i < quizQuestions.length) {
        res.render("question", {
          question: quizQuestions[i].question,
          options: quizQuestions[i].options,
        });
      }else{
        i = 0;
        let score = 0
        for (let j=0;j<quizQuestions.length;j++){
          if (quizQuestions[j].answer == correctAnswers[j]){
            score =score+1
          }
        }
        res.render("score",{score,total:quizQuestions.length})
      }
    }
  },
};
