// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 


//Loads Game 

function loadHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("game").style.display = "none";
}

function loadGame() {
  document.getElementById("game").style.display = "block";
  document.getElementById("home").style.display = "none";
}

//Variables used 
let start = document.getElementById("start-game");
let buttons = document.getElementsByClassName("button-round");
let options = ["rock", "paper", "scissors", "lizard", "spock"];
/**let yourScore = document.getElementById("score");
let computerScore = document.getElementById("incorrect");*/
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
rock.addEventListener("click", runGame("rock"));
paper.addEventListener("click", runGame("paper"));
scissors.addEventListener("click", runGame("scissors"));
lizard.addEventListener("click", runGame("lizard"));
spock.addEventListener("click", runGame("spock"));

//Add number of rounds function so knows when to close game loop 
let currentRound = 1;
const totalRounds = 3; 
const displayedRounds = document.getElementById("total-rounds");

//Player and Computer Score 
let yourScore = 0; 
let computerScore = 0;
const yourScoreResult = document.getElementById("score");
const computerScoreResult = document.getElementById("incorrect");

//Game run function below 
function runGame(playerSelection) {

  displayedRounds.textContent = `${currentRound}`;

  playerImage.src = `assets/images/${options[playerSelection]}.webp`;
  playerImage.alt = options[playerSelection];

  let computerSelection = Math.floor((Math.random) * options.length);

  computerImage.src = `assets/images/${options[computerSelection]}.webp`;
  computerImage.alt = options[computerSelection];

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
        yourScore++; 
      } else {
        result.textContent = "You lose!";
        computerScore++; 
    }  

    yourScoreResult.textContent = `${yourScore}`;
    computerScoreResult.textContent = `${computerScore}`;

  }


//Add game finished and game over function in here 
function gameResult() {
  let playerWins = yourScore.value > computerScore.value;
  
  if (playerWins) {
    result.textContent = "Congratulations! You've won!";
  } else {
    result.textContent = "Oh no! You lose! Try again!";
  }
};


//Add reset button function in here 


//Add Event listener for button clicks 
/**for (let button of buttons) {
  button.addEventListener("click", function()) {
    let playerSelection = this.getAttribute("data-type");
    runGame(playerSelection);
  }
}
*/