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
                break;
            } else if (uSelection === 'paper'){
                return 'You win this round';
                break;
            } else if (uSelection === 'scissors'){
                return 'Computer wins this round.';
                break;
            }
        case 'scissors':
            if (uSelection === 'scissors'){
                return "It's an tie!!!";
                break;
            } else if (uSelection === 'rock'){
                return 'You win this round';
                break;
            } else if (uSelection === 'paper'){
                return 'Computer wins this round.';
                break;
            }
        case 'paper':
            if (uSelection === 'paper'){
                return "It's an tie!!!";
                break;
            } else if (uSelection === 'scissors'){
                return 'You win this round';
                break;
            } else if (uSelection === 'rock'){
                return 'Computer wins this round.';
                break;
            }
        }
    }

const userChoiceButtons = document.querySelectorAll(".userChoiceButton");
const resultShow = document.querySelector("#results");
let computerChoice = getComputerChoice();
let playerChoice;
let result;

userChoiceButtons.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.textContent;
    result = game(computerChoice, playerChoice);
    resultShow.textContent = result;
}));

/*https://www.youtube.com/watch?v=n1_vHArDBRA*/