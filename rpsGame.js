// Script for Rock Paper Scissors Game

//Randomly return computers choice of rock, paper, or scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else if (choice == 2) {
        return "Scissors";
    }
}
let test = getComputerChoice();
console.log(test);