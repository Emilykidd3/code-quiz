var highscoreList = document.querySelector("#highscore-list");
var clearHighScoreArray = document.querySelector("#clear-high-scores")

var showHighscores = function() {
    var highScores = JSON.parse(localStorage.getItem('scores'));
    console.log(highScores);
    if (highScores === null) {
        return;
    }
    else {
        for (var i = 0; i < highScores.length; i++) {
            var highscoreListItem = document.createElement("li");
            highscoreListItem.textContent = highScores[i].initials + " - " + highScores[i].score;
            highscoreList.appendChild(highscoreListItem);
        };
    }
};

var clearLocalStorage = function() {
    localStorage.clear();
    location.reload();
}

showHighscores();
// clear high scores when this button is clicked
clearHighScoreArray.addEventListener("click", clearLocalStorage);