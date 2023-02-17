// player 2 - computer
function getComputerChoice () {
    let word = Math.floor(Math.random() * 3);
    if (word == 0) {
        word = 'rock';
    } else if (word == 1) {
        word = 'paper';
    } else if (word == 2) {
        word = 'scissors';
    }
    console.log(`Player 2: ${word}`);
    return word;
};

// scores
let userScore = parseInt(0);
let computerScore = parseInt(0);

// single round of the game
function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a tie!`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        userScore++;
        return `Player 1 wins! Rock beats Scissors!`;
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerScore++;
        return `Player 2 wins! Rock beats Scissors!`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        userScore++;
        return `Player 1 wins! Paper beats Rock!`;
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore++;
        return `Player 2 wins! Paper beats Rock!`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        userScore++;
        return `Player 1 wins! Scissors beats Paper!`;
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore++;
        return `Player 2 wins! Scissors beats Paper!`;
    } else {
        alert(`Can't define the value. Try again!`);
    }
}; 

// game
    for(let i = 0;i < 5; i++) {
        //player 1 - user
    let playerSelection = prompt("PLAYER 1: rock, paper or scissors?").toLowerCase();
    console.log(`Player 1: ${playerSelection}`);

    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection));

    console.log(`Player 1 score = ${userScore}`);

    console.log(`Player 2 score = ${computerScore}`);
};

// check winner
    if (userScore > computerScore) {
            console.log(`Congratulations Player 1 - you win!`);
        } else if (computerScore > userScore) {
            console.log(`Player 2 won! Try next time!`); 
        } else if (computerScore == userScore){
            console.log(`It;s a tie! You both are the winners!`);
        };