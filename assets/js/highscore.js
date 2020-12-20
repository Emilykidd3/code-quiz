var highscoreList = document.querySelector("#highscore-list");

var showHighscores = function() {
    highscoreList.textContent = JSON.parse(localStorage.getItem('scores'));
}

showHighscores();