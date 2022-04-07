// computer player
 const wordSelection = ["ROCK", "PAPER", "SCISSORS"];

 function selection() {
    for (let i = 0; i < wordSelection.length; i++) {
        result = Math.floor(Math.random()*3);
    }
        return result;
 }
 let computerPlayer = choice => wordSelection[choice].toUpperCase();

 console.log(computerPlayer(selection()));

 
 