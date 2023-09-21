var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/listarRankingQuiz1", function(req,res){
    quizController.listarRankingQuiz1(req,res)
})
router.put("/insertPoints", function(req,res){
    quizController.insertPoints(req,res)
})
module.exports = router;