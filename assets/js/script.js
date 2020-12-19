// global variables
var startDiv = document.querySelector(".start-page-div");
var timerEl = document.querySelector('.timer');
var quizDiv = document.querySelector('#question-page-div');
var startButton = document.querySelector("#start-button");
var askQuestion = document.querySelector("#question");
var answerOptions = document.querySelector("#answers");
var timeLeft = 75;


// array of objects with questions/options/answer
var quizQuestions = [
    {   question: "Commonly used data types DO NOT include:",
        answers: ["Strings", "Booleans", "Alerts", "numbers"],
        correctAnswer: "Booleans"
    }, 
    {   question: "The condition in an if/else statement is inclosed within ________.",
        answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
        correctAnswer: "Parentheses"
    }, 
    {   question: "Arrays in JavaScript can be used to store ______.",
        answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        correctAnswer: "All of the above"
    }, 
    {   question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        correctAnswer: "Quotes"
    }, 
    {   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "Terminal/ bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    }
];

// create coundown for when startQuizButton is clicked
var countdown = function() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            // timerEl.innerHTML = "";
        }
    }, 1000);
};

var startQuiz = function() {
    countdown();
    runQuestions();
    startDiv.removeAttribute("class", "start-page-div");
    startDiv.setAttribute("class", "hide");
    quizDiv.removeAttribute("class");
}

// make for loop for questions with an array of objects containing question, options, and answer
var runQuestions = function() {
    for (var i = 0; i < quizQuestions.length; i++) {
        askQuestion.textContent = quizQuestions[i].question;
        for (var x = 0; x < quizQuestions[i].answers.length; x++) {
            var answerOptions = document.createElement("button");
            answerOptions.className = "answer-buttons";
            // i know this is not right but idk what to put LOL :/
            answerOptions.textContent = quizQuestions[i].answers[x];
            quizDiv.appendChild(answerOptions);
        }
    }
};

// make coundown subtract time when an answer is incorrect

// show end page when time is up or all questions are answered

// show page with highscores saved in localstorage

startButton.addEventListener("click", startQuiz);
