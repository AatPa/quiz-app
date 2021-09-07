var readlineSync = require("readline-sync");

var score = 0;

var username = readlineSync.question("Please tell you Name! ");

console.log("Hi " + username + " Welcome to the Endgame ");

var highScores = [
  {
    name: "Aatish",
    score: 3
  },

  {
    name:"Aj", 
    score: 2
  }
]

function endgame(ques,ans)
{
  var UserAns = readlineSync.question(ques);

  if(UserAns === ans)
  {
    console.log("Congo!! Right Answer ");
    score++;
  }
  else
  {
    console.log("Oops!! Wrong Answer ");
    score--;
  }
  console.log("Current Score : " + score);
}

var questions = [
{
  question:"Where do I live ", 
  answer :"Jabalpur"
}
,
{
  question:"What is my fav food ", 
  answer:"Pasta"
}
,
{
  question:"Where do I work ", 
  answer:"Cisco"
}
];


for(var i=0;i<questions.length;i++)
{
  var currentQuestion = questions[i];
  endgame(currentQuestion.question,currentQuestion.answer);
}

console.log("YAY!! ,Your final score is:    " + score);


//Highscore comparison
for(var i=0;i<highScores.length;i++)
{
  var allHS = highScores[i];
  if(score === allHS.score)
  {
    console.log("Congo!! You have equalled " + allHS.name+" score");
  }
  else
  if(score > allHS.score)
  {
    console.log("Congo!! You have beaten " + allHS.name+" score");
    console.log("Do send your screenshot of beating " + allHS.name);
  }

}
