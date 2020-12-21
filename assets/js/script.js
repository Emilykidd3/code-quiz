// global variables
var startDiv = document.querySelector(".start-page-div");
var timerEl = document.querySelector('.timer');
var quizDiv = document.querySelector('#question-page-div');
var startButton = document.querySelector("#start-button");
var questionEl = document.querySelector("#question");
var answerOptionsEl = document.querySelector("#answers");
var answerFeedback = document.querySelector("#feedback");
var highScorePage = document.querySelector("#highscore-div");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var SubmitInitialsButton = document.querySelector("#submit-initials-button");

var currentQuestionIndex = 0;
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

// coundown for when startQuizButton is clicked
var countdown = function() {
    var timeInterval = setInterval(function() {
        if (currentQuestionIndex === quizQuestions.length || timeLeft === 0) {
            clearInterval(timeInterval);
            enterInitialsPage();
            quizDiv.setAttribute("class", "hide");
        }
        else {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
};

// runs countdown function and loads questions, removes start page div
var startQuiz = function() {
    countdown();
    getQuestion();
    startDiv.removeAttribute("class", "start-page-div");
    startDiv.setAttribute("class", "hide");
    quizDiv.removeAttribute("class");
}

// shows high score page with time left as score
var enterInitialsPage = function() {
    highScorePage.removeAttribute("class");
    finalScore.textContent = timeLeft;
}

// loops questions, subtracts time with wrong answer, and goes to next q
var getQuestion = function() {
    if (currentQuestionIndex === quizQuestions.length) {
        quizDiv.setAttribute("class", "hide");
    }
    else {
        questionEl.textContent = quizQuestions[currentQuestionIndex].question;
        for (var i = 0; i < quizQuestions[currentQuestionIndex].answers.length; i++) {
            var answerChoiceButton = document.createElement("button");
            answerChoiceButton.setAttribute("class", "button")
            answerChoiceButton.textContent = quizQuestions[currentQuestionIndex].answers[i];
    
            answerChoiceButton.addEventListener("click", function(event) {
                var userChoice = event.target.innerText;
                if (userChoice === quizQuestions[currentQuestionIndex].correctAnswer) {
                    // show they are correct
                    answerFeedback.textContent = "Correct!"
                } else {
                    // show they are wrong
                    answerFeedback.textContent = "Wrong!"
                    // subtract time
                    timeLeft -= 10;
                }
            currentQuestionIndex++;
            answerOptionsEl.textContent = "";
            return getQuestion();
            });
        answerOptionsEl.appendChild(answerChoiceButton);
        }
    }
};

// sends high score to local storage
var pushLocalStorage = function() {
    let highscoreArray = [];
    var previousScores = JSON.parse(localStorage.getItem('scores'));
    if (previousScores === null) {
        highscoreArray.push({score: timeLeft, initials: initials.value});
        localStorage.setItem('scores', JSON.stringify(highscoreArray));
    }
    else {
        highscoreArray = previousScores;
        highscoreArray.push({score: timeLeft, initials: initials.value});
        localStorage.setItem('scores', JSON.stringify(highscoreArray));
    }
}

// event listeners for start button and submit button
startButton.addEventListener("click", startQuiz);
SubmitInitialsButton.addEventListener("click", pushLocalStorage);