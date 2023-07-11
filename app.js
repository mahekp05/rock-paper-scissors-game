const playerShow = document.querySelector(".player");
const computerShow = document.querySelector(".computer");
const resultShow = document.querySelector(".results");
const userChoiceButtons = document.querySelectorAll(".userChoiceButton");

let computerChoice;
let playerChoice;
let result;

userChoiceButtons.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.textContent;
    playerShow.innerHTML = playerChoice;
    computerChoice = getComputerChoice()
    computerShow.innerHTML = computerShow;
    result = game(computerChoice, playerChoice);
    resultShow.innerHTML = result;
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
