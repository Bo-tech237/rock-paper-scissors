// computer player
 const wordSelection = ["ROCK", "PAPER", "SCISSORS"];

 function randomWordSelect() {

    for (let i = 0; i < wordSelection.length; i++) {
        result = Math.floor(Math.random()*3);
    }
        console.log(result);
        return result;
 }

 function computerPlay() {
        console.log(wordSelection[randomWordSelect()].toUpperCase());
        return wordSelection[randomWordSelect()].toUpperCase();
 }


 // Anonymous player

 function player1() {
     choice = prompt("Enter either ROCK, PAPER or SCISSORS: ");
     console.log(choice.toUpperCase());
     return choice.toUpperCase();
 }

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
     alert("Welcome to Rock Paper Scissors Game. Rock wins on Scissors, Paper wins on Rock and Scissors wins on Paper. GOOD LUCK!");
     let countWin = 0;
     let countLose = 0;
     let countDraw = 0;
     for (let i = 1; i <= 5; i++) {
         alert(playRound(player1(), computerPlay()));
         if (checkResults === "win") {
             countWin = countWin + i;
         } else if (checkResults === "lose") {
             countLose = countLose + i;
         } else {
             countDraw = countDraw + i;
         }
     }
     console.log("wins: " + countWin);
     console.log("loses: " + countLose);
     console.log("draws: " + countDraw);

     if (countWin > countLose) {
         alert("You are the CHAMPION!");
         console.log("You are a CHAMPION!");
     } else if (countWin < countLose) {
         alert("sorry you are DISQUALIFIED!");
         console.log("sorry you are DISQUALIFIED!");
     } else {
         alert("DRAW GAME");
         console.log("DRAW GAME");
     }

     alert("Reload the page to PLAY AGAIN!");
 }
 
 game();
