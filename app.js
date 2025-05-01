function getHumanChoice(){
    const input = prompt("Choose Rock, Paper or Scissors");
    return input.trim();
}

function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    if(choice === 0) return "Rock";
    if(choice === 1) return "Paper";
    return "Scissors"
}




function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if(humanChoice === computerChoice){
            console.log("Its a tie")
        } else if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChocie === "paper")
        ){
            console.log("You win the round!")
            humanScore++;
        }else{
            console.log("Computer wins the round")
            computerScore ++;
        }
        console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)
    }
    for(let i = 1; i <= 5; i++){
        console.log(`---Round ${i}----`)
        const human = getHumanChoice();
        const computer = getComputerChoice();
        playRound(human, computer)
    }

    console.log("\n--- Game Over ---")
    if(humanScore > computerScore){
        console.log("YOU BEAT THE DUMB BOT")
    } else if(computerScore > humanScore){
        console.log("LMAOO LOST TO A BOT")
    } else{
        console.log("OK you tied dweeb")
    }
    
}

playGame()
