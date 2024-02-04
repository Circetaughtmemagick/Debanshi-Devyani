let points = 0;
let sparxNumber;

function startGame() {
    sparxNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("instructions").innerText = "Sparx has a number between 1 and 10 in mind. Can you guess it?";
    document.getElementById("result").innerText = "";
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        return;
    }

    if (userGuess === sparxNumber) {
        document.getElementById("result").innerText = `Congratulations! You guessed Sparx's number (${sparxNumber}) correctly!`;
        points++;
    } else {
        document.getElementById("result").innerText = `Oops! Sparx's number was ${sparxNumber}. Try again!`;
    }

    document.getElementById("pointCount").innerText = points;
}

function playAgain() {
    startGame();
    document.getElementById("userGuess").value = "";
}
 
// Initialize the game on page load
startGame();
