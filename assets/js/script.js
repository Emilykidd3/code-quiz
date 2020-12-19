// global variables
var startDiv = document.querySelector(".start-page-div");
var timerEl = document.getElementById('timer');


// array of objects with questions/options/answer
var quizQuestions = [
    {   question: "Commonly used data types DO NOT include:",
        answers: ["A. Strings", "B. Booleans", "C. Alerts", "D.numbers"],
        correctAnswer: "B. Booleans"
    }, {question: "The condition in an if/else statement is inclosed within ________.",
        answers: ["A. Quotes", "B. Curly brackets", "C. Parentheses", "D. Square brackets"],
        correctAnswer: "C. Parentheses"
    }
];

// add html for startup page (h1 h2 button)
// innerHTML deletes what was in the element, textContent is similar, but doesnt ignor new line characters&span elements
var startPage = function() {
    var title = document.createElement("h1");
    title.className = "start-page";
    title.textContent = "Coding Quiz Challenge";
    startDiv.appendChild(title);

    var h2 = document.createElement("h2");
    h2.className = "h2";
    h2.textContent = "Try to answer...";
    startDiv.appendChild(h2);

    var startButtonDiv = document.createElement("div");
    startButton.className = "start-button"
    startDiv.appendChild(startButtonDiv);
}

startPage();

// create coundown for when startQuizButton is clicked
var countdown = function() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.innerHTML = timeLeft;
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            timerEl.innerHTML = "";
        }
    }, 1000);
}

// make for loop for questions with an array of objects containing question, options, and answer
var runQuestions = function() {
    for (var i = 0; i < quizQuestions.length; i++) {
        
    }
}
// make coundown subtract time when an answer is incorrect

// show end page when time is up or all questions are answered

// show page with highscores saved in localstorage