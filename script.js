'use strict';

// document.querySelector('.message').textContent = "🎉 Correct Number!";

// document.querySelector('.number').textContent = "14";
// document.querySelector('.score').textContent = "10";

// document.querySelector('.guess').value = "10";

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When there is no number
    if (!guess) {
        // document.querySelector('.message').textContent = ;
        displayMessage("⛔ No Number");

        // When player is win 
    } else if (guess === number) {
        // document.querySelector('.message').textContent = "🎉 Correct Numbmer";
        displayMessage("🎉 Correct Numbmer");

        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').textContent = number;
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }
    }
        else if (guess !== number) {
            if (score > 1) {
                // document.querySelector('.message').textContent = guess > number ? "☝ Too High" : "👇 Too Low";
                displayMessage(guess > number ? "☝ Too High" : "👇 Too Low");
                score--;
                document.querySelector('.score').textContent = score;
                // When player loss the game
            } else {
                // document.querySelector('.message').textContent = "😥 You loss the Game";
                displayMessage("😥 You loss the Game");

                document.querySelector(`body`).style.backgroundColor = "Red";
                document.querySelector('.score').textContent = 0;
            }
        }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    // number =  Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = "";

    document.querySelector('.number').textContent = "?";

    document.querySelector('body').style.backgroundColor = "rgb(6, 83, 97)";

})