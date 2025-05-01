let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.querySelector("#humanScoreDisplay")
const computerScoreDisplay = document.querySelector("#computerScoreDisplay")


function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    if(choice === 0) return "rock";
    if(choice === 1) return "paper";
    return "scissors"
}

function playRound(humanChoice, computerChoice){
    console.log(`You chose ${humanChoice} computer chose ${computerChoice}`)
    if(humanChoice === computerChoice){
        console.log("Its a tie")
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        console.log("You win the round!") 
        humanScore++;
        humanScoreDisplay.textContent = humanScore
    }else{
        console.log("Computer wins the round")
        computerScore ++;
        computerScoreDisplay.textContent = computerScore;
    }
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`)
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const humanChoice = button.value.toLowerCase();
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        if(humanScore + computerScore === 7){
            endGame();
        }
    })
})





function endGame(){
    console.log("\n--- Game Over ---")
    if(humanScore > computerScore){
        console.log("YOU BEAT THE DUMB BOT")
    } else if(computerScore > humanScore){
        console.log("LMAOO LOST TO A BOT")
    } else{
        console.log("OK you tied dweeb")
    }
    
}


// for(let i = 1; i <= 5; i++){
//     console.log(`---Round ${i}----`)
//     const human = getHumanChoice();
//     const computer = getComputerChoice();
//     playRound(human, computer)
// }
