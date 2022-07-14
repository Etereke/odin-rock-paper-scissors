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

function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let answer = "";
    switch(playerSelection){
        case "rock":
            if(computerSelection === "rock"){
                answer = "Tie!";
            }
            else if(computerSelection === "paper"){
                answer = "You lose!";
            }
            else if(computerSelection === "scissors"){
                answer = "You win!";
            }
            break;
        case "paper":
            if(computerSelection === "paper"){
                answer = "Tie!";
            }
            else if(computerSelection === "scissors"){
                answer = "You lose!";
            }
            else if(computerSelection === "rock"){
                answer = "You win!";
            }
            break;
        case "scissors":
            if(computerSelection === "scissors"){
                answer = "Tie!";
            }
            else if(computerSelection === "rock"){
                answer = "You lose!";
            }
            else if(computerSelection === "paper"){
                answer = "You win!";
            }
            break;
        default:
            answer = "Someone sent an invalid answer!"
    }
    return answer;
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

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){

        let playerChoice = getCorrectInput();
        let computerChoice = computerPlay();
        let result = singleRound(playerChoice, computerChoice);
        
        if(result.includes("win")){
            playerScore++;
        }
        else if(result.includes("lose")){
            computerScore++;
        }
        else{
            playerScore += 0.5;
            computerScore += 0.5;
        }
        console.log(`You chose: ${playerChoice}
                    The computer chose: ${computerChoice}
                    ${result}
                    Current Score: ${playerScore} - ${computerScore}`);
    }
    
    declareWinner(playerScore, computerScore);
}

game();