function computerPlay(){
    let randomValue = Math.floor(Math.random() * 3) + 1;
    let hand = "";
    switch(randomValue){
        case 1:
            hand = "rock";
            break;
        case 2:
            hand = "paper";
            break;
        case 3:
            hand = "scissors";
            break;
    }
    return hand;
}

function getResultOfRound(playerSelection, computerSelection){
    let result = "";
    switch(playerSelection){
        case "rock":
            if(computerSelection === "rock"){
                result = "tie";
            }
            else if(computerSelection === "paper"){
                result = "loss";
            }
            else if(computerSelection === "scissors"){
                result = "win";
            }
            break;
        case "paper":
            if(computerSelection === "paper"){
                result = "tie";
            }
            else if(computerSelection === "scissors"){
                result = "loss";
            }
            else if(computerSelection === "rock"){
                result = "win";
            }
            break;
        case "scissors":
            if(computerSelection === "scissors"){
                result = "tie";
            }
            else if(computerSelection === "rock"){
                result = "loss";
            }
            else if(computerSelection === "paper"){
                result = "win";
            }
            break;
        default:
            result = "invalid";
    }
    return result;
}
function getResultsString(result){
    let resultString = "";
    switch(result){
        case "tie":
            resultString = "It's a tie!";
            break;
        case "win":
            resultString = "You win this round!";
            break;
        case "loss":
            resultString = "The computer wins this round";
            break;
    }
    return resultString;
}

function gameOver(whoWins){
    if(whoWins === "player"){
        winner.textContent = "Congratulations! You win!";
    }
    else{
        winner.textContent = "Shoot! The computer won this one!";
    }
    buttons.forEach(button => {
        button.disabled = true;
    });
    resetButton.hidden = false;
}

function updateScore(result){
    switch(result){
        case "win":
            playerScore++;
            break;
        case "loss":
            computerScore++;
            break;
    }
    score.textContent = `Your score: ${playerScore} Computer score: ${computerScore}`;
    if(playerScore === 5){
        gameOver("player");
    }
    else if(computerScore === 5){
        gameOver("computer");
    }
}

function playSingleRound(playerSelection, computerSelection){
    results.innerHTML = "";
    let yourMove = document.createElement('div');
    let computerMove = document.createElement('div');
    let resultOfRound = document.createElement('div');

    yourMove.textContent = `You played: ${playerSelection}`;
    computerMove.textContent = `The computer played: ${computerSelection}`;
    let result = getResultOfRound(playerSelection, computerSelection);
    resultOfRound.textContent = getResultsString(result);

    results.appendChild(yourMove);
    results.appendChild(computerMove);
    results.appendChild(resultOfRound);

    updateScore(result);

}

function declareWinner(playerScore, computerScore){
    if(playerScore > computerScore){
        console.log("Congrats! You win!")
    }
    else if(playerScore < computerScore){
        console.log("Uh-oh, you lost!")    
    }
    else {
        console.log("It's a tie!");
    }
}

function getCorrectInput(){
    let playerChoice = "";
    while(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        playerChoice = prompt("Your hand: ").toLowerCase();
    }
    return playerChoice;
}



let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.choice');
let results = document.querySelector('.result');
let score = document.querySelector(".score");
let winner = document.querySelector(".winner");
let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    resetButton.hidden = true;
    results.textContent = '';
    score.textContent = '';
    winner.textContent = '';
    buttons.forEach(button => {
        button.disabled = false;
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playSingleRound(button.id, computerPlay());
    });
});
