let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch(randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Pick rock, paper or scissors");

    switch(humanChoice.trim().toLowerCase()) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
        default:
            alert("Try again, invalid choice")
            humanChoice = getHumanChoice();
    }
    return humanChoice;
}

function playRound() {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

    if (humanSelection == 'rock' && computerSelection == 'scissors') {
        console.log('human wins!')
        humanScore++;
    }

    else if (humanSelection == 'paper' && computerSelection == 'rock') {
        console.log('human wins!')
        humanScore++;
    }

    else if (humanSelection == 'scissors' && computerSelection == 'paper') {
        console.log('human wins!')
        humanScore++;
    }
    
    else if (humanSelection == computerSelection) {
        console.log('tie!')
    }
    
    else {
        console.log('computer wins!')
        computerScore++;
        }

        console.log("You picked : " + humanSelection);
        console.log("Computer picked : " + computerSelection);

}

function playGame() {
    for(let rounds = 1; rounds <= 5; rounds++) {
        playRound();
        console.log("This is round " + rounds);
        console.log("Your score : " + humanScore + " | " + computerScore + " : Computer score");
    }
}

playGame();