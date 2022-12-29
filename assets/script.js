//varibles for quiz
var timerEl = document.getElementById('countdown');
// start quiz

//timer

function countdown() {
    var timeLeft = 5;

var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining ";

    if (timeLeft === 0) {
      clearInterval(timeInterval);

      displayMessage();
    }

  }, 1000);

  countdown();
// creating questions