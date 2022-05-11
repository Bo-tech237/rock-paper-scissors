const imageselections = document.querySelectorAll('.image');
const computerDisplay = document.querySelector('.computer');
const playerDisplay = document.querySelector('.player');
let currentScore = document.querySelector('.current-score');
const finalResult = document.querySelector('.final-result');
let button = document.querySelector('.btn');
let checkScoreP = 0;
let checkScoreC = 0;

function getComputerChoice() {
                index = Math.floor(Math.random()*3);
        if (index === 0) {
                computerDisplay.setAttribute('id', 'ROCK');
                return computerDisplay.getAttribute('id');
        } else if (index === 1) {
                computerDisplay.setAttribute('id', 'PAPER');
                return computerDisplay.getAttribute('id');
        } else if (index === 2) {
                computerDisplay.setAttribute('id', 'SCISSORS');
                return computerDisplay.getAttribute('id');
        }
}

function showCurrentScore(playerScore, computerScore) {


        if (playerScore === "ROCK" && computerScore === "SCISSORS" || playerScore === "PAPER" && computerScore === "ROCK" || playerScore === "SCISSORS" && computerScore == "PAPER") {
                checkScoreP += 1;
                console.log(checkScoreP);  
        } else if (playerScore === "ROCK" && computerScore === "PAPER" || playerScore === "PAPER" && computerScore === "SCISSORS" || playerScore === "SCISSORS" && computerScore === "ROCK") {
                checkScoreC += 1;
                console.log(checkScoreC);
        } 
    
        currentScore.textContent = `YOUR SCORE: ${checkScoreP} VS COMPUTER SCORE: ${checkScoreC}`;
               
}


function getPlayerChoice(e) {
        playerDisplay.setAttribute('id', e.target['id']);
        return playerDisplay.getAttribute('id');
        
}

function playRound(e) {
        if (!e.target['id']) return;
        getComputerChoice();
        getPlayerChoice(e);
        showCurrentScore(getPlayerChoice(e), getComputerChoice());
        showFinalResult();
        replayGame();
}

imageselections.forEach(imageselection => {
        imageselection.addEventListener('click', playRound);
});


function showFinalResult() {
        if (checkScoreP === 5) {
                finalResult.textContent = 'CONGRATULATION YOU WIN!';
                imageselections.forEach(imageselection => {
                        imageselection.removeEventListener('click', playRound);
                });
        } else if (checkScoreC === 5) {
                finalResult.textContent = 'SORRY YOU LOSE!';
                imageselections.forEach(imageselection => {
                        imageselection.removeEventListener('click', playRound);
                });
        }         
}

function replayGame() {

        if (checkScoreP === 5 || checkScoreC === 5) {
                button.setAttribute('class', 'display');
        }
}

