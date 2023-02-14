//varibles for quiz
var timerEl = document.getElementById('countdown');
var startButton = document.querySelector(".start-quiz")
// start quiz

//timer

function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining ";

        if (timeLeft === 0) {
            clearInterval(timeInterval);

            displayMessage();
        }

    
  }, 1000);
}
countdown();
startButton.addEventListener("click", startQuiz);
// creating questions