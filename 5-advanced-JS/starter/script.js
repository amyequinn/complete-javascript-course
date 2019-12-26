
const Question = function(question, options, answer) {
  this.question = function() {
    console.log(question);
  }
  this.options = function() {
    for (let i = 0; i < options.length; i++) {
      console.log(i +  ': ' + options[i])
    }
  }
  this.answer = answer;
}


let question1 = new Question('What planet is closest to Earth?', ['Venus', "Mercury", "Mars"], 1);

let question2 = new Question('What is the smallest planet in the solar system?', ['Mercury', 'Neptune', 'Earth'], 0);

let question3 = new Question('What is the hottest planet in the solar system?', ['Mars', 'Jupiter', 'Venus'], 2);

let question4 = new Question('What planet is closest in size to Earth?', ['Neptune', 'Uranus', 'Venus'], 2);

let question5 = new Question('What planet is nicknamed the ‘Red Planet’?', ['Mercury', 'Mars', 'Earth'], 1);

let score = 0;
let currentQuestion = 0;
let allQuestions = [question1, question2, question3, question4, question5];
let current = allQuestions[currentQuestion]

function askQuestion(answer) {

  let selectAnswer = prompt("What is the correct answer? Please enter the number");

  if (selectAnswer == answer) {

    score += 1
    currentQuestion += 1;

    console.log("Correct!", "Your current score is " + score)
    console.log('...........................................')
    if (score >= 5) {
      console.log("Well done, you have completed the quiz! End of game!")

    } else {
      allQuestions[currentQuestion].question();
      allQuestions[currentQuestion].options();
      askQuestion(allQuestions[currentQuestion].answer)
    }
  } else if (selectAnswer == 'exit') {
    console.log("BYE BYE")
  } else {
    console.log("Incorrect, please try again!")
    askQuestion(answer)

  }
}

function init() {

  current.question()
  current.options()
  askQuestion(current.answer)

}

init();
