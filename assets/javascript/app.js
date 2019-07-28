// VARIABLES ===========================
var correct = 0;
var wrong = 0;
var unanswered = 0;

var question = document.getElementById("question");
var ansA = document.getElementById("answer1");
var ansB = document.getElementById("answer2");
var ansC = document.getElementById("answer3");
var ansD = document.getElementById("answer4");
var start = document.getElementById("startCard");
var game = document.getElementById("gameCard");

const triva = [
  {
    question: "The Simpsons originally appeared as a short on what TV show?",
    answers: {
      a: "Married With Children",
      b: "Matt Groening's American Family",
      c: "The Tracy Ullman Show",
      d: "Dr. N!godatu"
    },
    correctAnswer: "c"
  },
  {
    question: "What town to The Simpsons live in?",
    answers: {
      a: "Springfield",
      b: "Gotham City",
      c: "Stars Hollow",
      d: "Mayberry"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of the bar Homer goes to?",
    answers: {
      a: "McLaren's Pub",
      b: "Moe's Tavern",
      c: "The Drunken Clam",
      d: "Cheers"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the name of Homer's brother",
    answers: {
      a: "Hank Powell",
      b: "Henry Powell",
      c: "Harry Powell",
      d: "Herbert Powell"
    },
    correctAnswer: "d"
  },
  {
    question: "What was the name of the first Simpsons episode aired in the US?",
    answers: {
      a: "Some Enchanted Evening",
      b: "Bart the Genius",
      c: "Simpsons Roasting On An Open Fire",
      d: "The Call of the Simpsons"
    },
    correctAnswer: "c"
  },
];
// FUNCTIONS ===========================
//Display a start page
function startGame () {
// Hide start and show game
start.style.display = "none";
game.style.display = "grid";

// TODO On start, display first question

// TODO Display and start timer


}


// TODO If time is up, show time up screen
// TODO If answer is wrong, show wrong answer screen
// TODO If answer is wrong, add to wrong answers
// TODO If answer is right, show right answer screen
// TODO If answer is right, add to wrong answers
// TODO After a few seconds, go to next question
// TODO At end of all questions, show end screen and # of right/wrong
// TODO If time up, show end screen and # of right/wrong/unanswered

// CALL FUNCTIONS ======================
document.getElementById("start").addEventListener("click", startGame);


// * ansA.innerHTML = triva[0].answers.a
