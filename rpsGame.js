// Script for Rock Paper Scissors Game

let playerScore = 0;
let computerScore = 0;
let winner = "";

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

function playRound(playerSelection, computerSelection) {
    let winner = "";
    if(playerSelection === computerSelection){
        winner = "tie";
    }
    if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        winner = "player";
    }
    if(
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        winner = "computer";
    }
    return winner;
}

function isGameOver() {
    const winsNeeded = 3;
    return playerScore === winsNeeded || computerScore === winsNeeded;
}

//main function to play multiple rounds and declare winner at end
function playGame(playerSelection) {
    const numRounds = 5;

    let computerSelection = getComputerChoice();

    winner = playRound(playerSelection, computerSelection);

    updateResults(playerSelection, computerSelection, winner);

    updateScore(winner);

    if(isGameOver()) {
        updateFinalText();
    }    

    console.log("player " + playerScore + "  computer " + computerScore);
}

// UI

const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const resultDisplay = document.getElementById('result-display')
const playerScoreDisplay = document.getElementById('player-score-display');
const computerScoreDisplay = document.getElementById('computer-score-display');
const finalText = document.getElementById('final-text');

btnRock.addEventListener('click', () => playGame('rock'));
btnPaper.addEventListener('click', () => playGame('paper'));
btnScissors.addEventListener('click', () => playGame('scissors'));

function updateResults(playerSelection, computerSelection, winner) {
    switch (winner) {
        case "tie":
            resultDisplay.textContent = 
            "You are evenly matched. It's a tie.";
            break;
        case "player":
            resultDisplay.textContent = 
            `${playerSelection} is strong against ${computerSelection}. You win!`;
            break;
        case "computer": 
            resultDisplay.textContent = 
            `${playerSelection} is weak against ${computerSelection}. You lose.`;
            break;        
    }
}

function updateScore(winner) {
    switch (winner) {
        case "tie":
            break;
        case "player":
            playerScore++;
            playerScoreDisplay.textContent = `${playerScore}`;
            break;
        case "computer":
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            break;        
    }
}

function updateFinalText() {
    if (playerScore > computerScore) {
        finalText.textContent = "You are Victorious!";
    } else {
        finalText.textContent = "The Robot Masters are Victorious!";
    }
}



