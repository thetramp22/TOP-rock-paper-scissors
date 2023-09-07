# TOP-rock-paper-scissors
UPDATE

This branch is the revisited version of this project.  I have add  UI and refactored the javascript to fit.  This was a tricky one, I haven't integted javascript into html and css before this, and it was more challenging than I thought. I learned a lot and hope to come back an improve this more in the future.

Things to do:

1. properly reset the game after win condition.

2. better explantion of the round structure (best of 3, 5, etc.)

3. more "bells and whistles", animation, sound, etc.

================================================================

Rock Paper Scissors project for theodinproject Foundations course

Project: Rock Paper Scissors

Project started 9/5/2023 - 2pm

Assignment text:
-----------------------------------------------------------
Don’t forget to commit early & often! You can reference the Commit Message lesson here!

1. Start a new Git repo for your project.

2. Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.

3. Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

    - Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

5. Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

        function playRound(playerSelection, computerSelection) {
        // your code here!
        }
        
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

6. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

    - You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.

    - At this point you should be using console.log() to display the results of each round and the winner at the end.

    - Use prompt() to get input from the user. Read the docs here if you need to.

    - Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.

    - Feel free to create more “helper” functions if you think it would be useful.
-----------------------------------------------------------

Project Recap:

Went through most of the steps pretty smoothly.  Had to look up the Math functions to get the random whole numbers working with Math.floor().  I feel like there are many simpler ways to write the playRound function rather than write out every combination in if statements as I did, but my function seems to work as intended.  I attempted to validate the entry and have it prompt again if the user entered something other than rock, paper or scissors.  It returned invalid entry even when I entered something valid and I'm not sure why, but I intend to revisit this code later on and see if I can improve on it and get that working.

Just thinking about it now upon revisit I would change the return value of playRound() from a string to something to indicate which player won, and then generate the string in game().  I could probably make a separate function to capture and validate player input as well.