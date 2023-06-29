function getComputerChoice() {
    choices = ['rock' , 'paper' , 'scissors'];
    index = Math.floor(Math.random()*(4-1)+1) - 1;
    return choices[index];
    
};

function game(cSelection, uSelection){
    switch(cSelection){
        case 'rock':
            if (uSelection === 'rock'){
                return "It's an tie!!!";
            } else if (uSelection === 'papers'){
                return 'You win this round';
            } else if (uSelection === 'scissors'){
                return 'Computer wins this round.';
            }
        case 'scissors':
            if (uSelection === 'scissors'){
                return "It's an tie!!!";
            } else if (uSelection === 'rock'){
                return 'You win this round';
            } else if (uSelection === 'paper'){
                return 'Computer wins this round.';
            }
        case 'paper':
            if (uSelection === 'paper'){
                return "It's an tie!!!";
            } else if (uSelection === 'scissors'){
                return 'You win this round';
            } else if (uSelection === 'rock'){
                return 'Computer wins this round.';
            }
        }
    }


const prompt = require('prompt-sync')();

var computerSelection = getComputerChoice();

//prompt is used for html
//const userSelection = prompt('Ready to play rock-paper-scissors? COOL!! /n Make an selection: rock, paper, or scissors');
const userSelection = 'rock';

