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

//variables for game and score 
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");
let yourScore = document.getElementById("you");
let computerScore = document.getElementById("computer");

//Add event listeners for player selection 
rock.addEventListener("click", runGame("rock"));
paper.addEventListener("click", runGame("paper"));
scissors.addEventListener("click", runGame("scissors"));
lizard.addEventListener("click", runGame("lizard"));
spock.addEventListener("click", runGame("spock"));


//Add number of rounds in here 
let currentRound = 1;
const maxRounds = 3;
const resultRounds = document.getElementById("total-rounds");

//Add game function in here 
function runGame () {
    if (currentRound <= maxRounds) {

    let playerSelection = ["rock", "paper", "scissors", "lizard", "spock"];
    let computerSelection = playerSelection[Math.floor(Math.random() * playerSelection.length)];

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
      yourScore++; 
    } else {
      computerScore++;
    }

}

//Need to add in your score and computer score function in so can reference in runGame function 


//Add game finished and game over function in here 
//Add reset button function in here 
