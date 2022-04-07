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

 console.log(player1());