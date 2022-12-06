const play = ["rock", "paper", "scissor"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = play[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        console.log("It's a tie");
        return 0;
    } else if (computerSelection == "paper" && playerSelection == "scissor") {
        console.log("Scissor beats Paper - You won that round");
        return 1;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("Paper beats Rock - You lost that round");
        return -1;
    } else if (computerSelection == "scissor" && playerSelection == "paper") {
        console.log("Scissor beats Paper - You lost that round");
        return -1;
    } else if (computerSelection == "scissor" && playerSelection == "rock") {
        console.log("Rock beats Scissor - You won that round");
        return 1;
    } else if (computerSelection == "rock" && playerSelection == "scissor") {
        console.log("Rock beats Scissor - You lost that round");
        return -1;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("Paper beats Rock - You won that round");
        return 1;
    }
}

function game() {
    let computerSelection;
    let counter = 0;

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Make your choice: ").toLowerCase();
        counter += playRound(playerSelection, computerSelection);
    }

    if (counter < 0) {
        return "You Lost the game!"
    } else if (counter > 0) {
        return "You Won the game!"
    } else {
        return "It's a Draw"
    }
}

console.log(game());