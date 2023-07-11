const playerShow = document.querySelector("#player");
const computerShow = document.querySelector("#computer");
const resultShow = document.querySelector("#results");
const userChoiceButtons = document.querySelectorAll(".userChoiceButton");

let computerChoice;
let playerChoice;
let result;

userChoiceButtons.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.textContent;
    //playerShow.textContent = playerChoice;
    console.log(playerChoice);
    computerChoice = getComputerChoice()
    //computerShow.textContent = computerChoice;
    console.log(computerChoice);
    result = game(computerChoice, playerChoice);
    console.log(result);
    //resultShow.textContent = result;
}));

function getComputerChoice() {
    choices = ['rock' , 'paper' , 'scissors'];
    index = Math.floor(Math.random()*choices.length);
    return choices[index];
    
};

function game(cSelection, uSelection){
    
    switch(cSelection){
        case 'rock':
            if (uSelection === 'rock'){
                return "It's an tie!!!";
            } else if (uSelection === 'paper'){
                return 'You win this round';
            } else if (uSelection === 'scissors'){
                return 'Computer wins this round.';
            }
            break;
        case 'scissors':
            if (uSelection === 'scissors'){
                return "It's an tie!!!";
            } else if (uSelection === 'rock'){
                return 'You win this round';
            } else if (uSelection === 'paper'){
                return 'Computer wins this round.';
            }
            break;
        case 'paper':
            if (uSelection === 'paper'){
                return "It's an tie!!!";
            } else if (uSelection === 'scissors'){
                return 'You win this round';
            } else if (uSelection === 'rock'){
                return 'Computer wins this round.';
            }
            break;
        }
    }

    /*
const userChoiceButtons = document.querySelectorAll(".userChoiceButton");
const playerShow = document.querySelector("#player");
const computerShow = document.querySelector("#computer");
const resultShow = document.querySelector("#results");
let computerChoice = getComputerChoice();
let playerChoice;
let result;

userChoiceButtons.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.textContent;
    playerShow.textContent = playerChoice;
    computerShow.textContent = computerChoice;
    result = game(computerChoice, playerChoice);
    resultShow.textContent = result;
}));

/*https://www.youtube.com/watch?v=n1_vHArDBRA*/