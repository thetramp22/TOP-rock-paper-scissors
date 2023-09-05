// Script for Rock Paper Scissors Game

//Randomly return computers choice of rock, paper, or scissors
function getComputerChoice() {
    let choice = Math.random(3);
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());