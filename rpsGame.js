// Script for Rock Paper Scissors Game

//Randomly return computers choice of rock, paper, or scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}

function playRound (playerSelection, computerSelction) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelction == "rock") {
            return "It's a tie!";
        } else if (computerSelction == "paper") {
            return "You lose! Paper beats Rock.";
        } else if (computerSelction == "scissors") {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelction == "rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelction == "paper") {
            return "It's a tie!";
        } else if (computerSelction == "scissors") {
            return "You lose! Scissors beats Paper";
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelction == "rock") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelction == "paper") {
            return "You win! Scissors beats Paper.";
        } else if (computerSelction == "scissors") {
            return "It's a tie!";
        }
    }
}

const playerSelection = "Paper";
const computerSelction = getComputerChoice();
console.log(playerSelection);
console.log(computerSelction);
console.log(playRound(playerSelection, computerSelction));