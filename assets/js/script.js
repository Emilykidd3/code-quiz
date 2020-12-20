// global variables
var startDiv = document.querySelector(".start-page-div");
var timerEl = document.querySelector('.timer');
var quizDiv = document.querySelector('#question-page-div');
var startButton = document.querySelector("#start-button");
var questionEl = document.querySelector("#question");
var answerOptionsEl = document.querySelector("#answers");
var answerFeedback = document.querySelector("#feedback");

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

// create coundown for when startQuizButton is clicked
var countdown = function() {
    var timeInterval = setInterval(function() {
        if (currentQuestionIndex === quizQuestions.length || timeLeft === 0) {
            clearInterval(timeInterval);
        }
        else {
            timerEl.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
};

var startQuiz = function() {
    countdown();
    getQuestion();
    startDiv.removeAttribute("class", "start-page-div");
    startDiv.setAttribute("class", "hide");
    quizDiv.removeAttribute("class");
}

var endPage = function() {
    window.alert="done!"
}

// make for loop for questions with an array of objects containing question, options, and answer
var getQuestion = function() {
    if (currentQuestionIndex === quizQuestions.length) {
        endPage();
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



// show end page when time is up or all questions are answered

// show page with highscores saved in localstorage

startButton.addEventListener("click", startQuiz);