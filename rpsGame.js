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

//takes in player choice and computer choice and plays 1 round
function playRound (playerSelection, computerSelction) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelction == "rock") {
            return "It's a tie!";
        } else if (computerSelction == "paper") {
            return "You lose! Paper beats Rock.";
        } else if (computerSelction == "scissors") {
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelction == "rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelction == "paper") {
            return "It's a tie!";
        } else if (computerSelction == "scissors") {
            return "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelction == "rock") {
            return "You lose! Rock beats Scissors.";
        } else if (computerSelction == "paper") {
            return "You win! Scissors beats Paper.";
        } else if (computerSelction == "scissors") {
            return "It's a tie!";
        }
    }
}

//main function to play multiple rounds and declare winner at end
function game() {
    let numRounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numRounds; i++) {
        let computerSelction = getComputerChoice();
        let playerSelection = prompt("Choose rock, paper, or scissors: ");

        
        /*   attempted to validate entry to save errors later, didn't work and not sure why, will revisit

        while(playerSelection.toLowerCase() !== "rock" || playerSelection.toLowerCase() !== "paper" || playerSelection.toLowerCase() !== "scissors") {
            playerSelection = prompt("Invalid entry. Choose rock, paper, or scissors: ")
        }

        */

        let result = playRound(playerSelection, computerSelction);
        console.log(result);

        if (result == "You win! Rock beats Scissors." || result == "You win! Paper beats Rock." || result == "You win! Scissors beats Paper.") {
            playerScore++;
        }
        if (result == "You lose! Paper beats Rock." || result == "You lose! Scissors beats Paper." || result == "You lose! Rock beats Scissors.") {
            computerScore++;
        }
    }

    console.log("Final Score:  Player: " + playerScore + ", Computer: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("You Lose!");
    }
}

game();

