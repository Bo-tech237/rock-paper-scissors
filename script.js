// computer player
 const wordSelection = ["ROCK", "PAPER", "SCISSORS"];

 function randomWordSelect() {

    for (let i = 0; i < wordSelection.length; i++) {
        result = Math.floor(Math.random()*3);
    }
        return result;
 }

 function computerPlay() {
        return wordSelection[randomWordSelect()].toUpperCase();
 }


 // Anonymous player

 function player1() {
     choice = prompt("Enter either ROCK, PAPER or SCISSORS: ");
     return choice.toUpperCase();
 }

 // Play Round

 function playRound(playerSelection, computerSelection) {

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! " + playerSelection + " beats " + computerSelection;  
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "SCISSORS" && computerSelection == "PAPER") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "Draw game! " + playerSelection + " equals " + computerSelection;
    }
 }

 console.log(playRound(player1(), computerPlay()));