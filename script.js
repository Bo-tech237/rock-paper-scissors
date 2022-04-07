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
 console.log(wordSelection[randomWordSelect()].toUpperCase());


 // Anonymous player

 function player1() {
     choice = prompt("Enter either ROCK, PAPER or SCISSORS: ");
     return choice.toUpperCase();
 }
 console.log(choice.toUpperCase());

 // Play Round

 function playRound(playerSelection, computerSelection) {

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        checkResults = "win";
        return "You win! " + playerSelection + " beats " + computerSelection;  
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        checkResults = "win";
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "SCISSORS" && computerSelection == "PAPER") {
        checkResults = "win";
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        checkResults = "lose";
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        checkResults = "lose";
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        checkResults = "lose";
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else {
        checkResults = "draw";
        return "Draw game! " + playerSelection + " equals " + computerSelection;
    }
 }


 // Play Game

 function game() {
     let countWin = 0;
     let countLose = 0;
     for (let i = 1; i <= 5; i++) {
         alert(playRound(player1(), computerPlay()));
         console.log(playRound(player1(), computerPlay()));
         if (checkResults === "win") {
             countWin = countWin + i;
         } else {
             countLose = countLose + i;
         }
     }

     if (countWin > countLose) {
         alert("You are the CHAMPION!");
         console.log("You are a CHAMPION!");
     } else {
         alert("sorry you are DISQUALIFIED!");
         console.log("sorry you are DISQUALIFIED!");
     }
 }
 
 game();
