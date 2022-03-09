var questions = [
  {
    question: "Commonly used data types do NOT include:",
    choices: ["strings", "booleans", "numbers", "alerts"],
    answer: 3,
  },
  {
    question: "The condition in an if/else statement is enclosed in:",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: 2,
  },
  {
    question: "Arrays in Javascript can be used to store:",
    answer1: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: 3,
  },
]

var startBtnEl = document.getElementById("start")
var timerEl = document.getElementById("timer")
var quizBoxEl = document.getElementById("quiz-box")

var timeRemaining = 60

function timer() {
  timerEl.innerText = timeRemaining
  var countdown = setInterval(function () {
    if (timeRemaining > 0) {
      timeRemaining--
      timerEl.innerText = timeRemaining
    } else {
      clearInterval(countdown)
      gameEnd()
      return
    }
  }, 1000)
}

function gameStart() {
  timer()
  showQuestion()
}

function gameEnd() {
  console.log("Game has finished")
}

function showQuestion() {
  var qContainerEl = document
    .createElement("div")
    .setAttribute("id", "question-container")
  var qTextEl = document.createElement("h1").setAttribute("id", "question-text")

  quizBoxEl.append(qContainerEl)
  qTextEl.innerText = questions[0].question
  qContainerEl.appendChild(qTextEl)
}

startBtnEl.addEventListener("click", gameStart)
