// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}; 

//Loads Game 
function loadHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("game").style.display = "none";
}

function loadGame() {
  document.getElementById("game").style.display = "block";
}

//Variables used 
let playerImage = document.getElementById("player-image");
let computerImage = document.getElementById("computer-image");
let result = document.getElementById("results");

//variables for game options 
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");

//Add event listeners for player selection 
rock.addEventListener("click", () => runGame("rock"));
paper.addEventListener("click", () => runGame("paper"));
scissors.addEventListener("click", () => runGame("scissors"));
lizard.addEventListener("click", () => runGame("lizard"));
spock.addEventListener("click", () => runGame("spock"));

//Add number of rounds function so knows when to close game loop 
let currentRound = 1;
const totalRounds = 6; 
const displayedRounds = document.getElementById("total-rounds");

//Player and Computer Score 
let yourScore = 0;
let computerScore = 0; 
const yourScoreDisplay = document.getElementById("score");
const computerScoreDisplay = document.getElementById("incorrect");

//Game run function below 
function runGame(playerSelection) {

  displayedRounds.textContent = `${currentRound}`;

  let options = ["rock", "paper", "scissors", "lizard", "spock"];

  playerImage.src = `assets/images/${playerSelection}.webp`;
  playerImage.alt = options[playerSelection];

  let randomNumber = Math.floor(Math.random() * 5) +1;

    let computerSelection;

    switch(randomNumber) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
        case 4:
            computerSelection = "lizard";
            break;
        case 5:
            computerSelection = "spock";
            break;
    }

  computerImage.src = `assets/images/${computerSelection}.webp`;
  computerImage.alt = options[computerSelection];

  // Determines the results of each round of game played 
  if (playerSelection === computerSelection) {
    result.textContent = "Draw!";
    } else if (
        (playerSelection === "rock" && computerSelection === "lizard") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "spock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "lizard") ||
        (playerSelection === "lizard" && computerSelection === "spock") ||
        (playerSelection === "lizard" && computerSelection === "paper") ||
        (playerSelection === "spock" && computerSelection === "scissors") ||
        (playerSelection === "spock" && computerSelection === "rock") 
    ) {
        result.textContent = "You win!";
        yourScore ++; 
      } else {
        result.textContent = "You lose!";
        computerScore ++; 
    }  

    //Displays score for user
    yourScoreDisplay.textContent = `${yourScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
    
    //Increments number of rounds played 
    currentRound ++;

    //End of game at 5 rounds 
    if (currentRound === totalRounds){
      endGame();
    }

  }


//Reset game button function and variable

let reset = document.getElementById("reset-game");
reset.addEventListener("click", resetGame());

function resetGame() {

  displayedRounds.textContent = 0;
  yourScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  yourScore = 0;
  computerScore = 0;
  currentRound = 1;
  yourScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  result.textContent = "";
  playerImage.src = `assets/images/you.webp`;
  computerImage.src = `assets/images/computer.webp`;
  document.getElementById("game-buttons").style.display = "block";
}

//endGame function

function endGame() {

    if (yourScore >= 3){
      result.textContent = `Congratulations! You've won!`;
    } else if (yourScore <= 3){
        result.textContent = `Oh no! You lose! Try again!`;
    } else if (yourScore = 2) {
      result.textContent = `It's a draw!`;
    }

    document.getElementById("game-buttons").style.display = "none";
}

