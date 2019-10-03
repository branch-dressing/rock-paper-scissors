import { getThrowFromNumber, getThrow } from './get-throw.js';
import didPlayerWin from './did-player-win.js';
import { changeToRock, changeToPaper, changeToScissors } from './change-images.js';

document.getElementById('rock-img').addEventListener('click', changeToRock);
document.getElementById('paper-img').addEventListener('click', changeToPaper);
document.getElementById('scissors-img').addEventListener('click', changeToScissors);

const fightButton = document.getElementById('fight');
//const selectedRadioButton = document.querySelector('input:checked');

const rockPaperScissorsGo = () => {
    const playerSelection = document.querySelector('input:checked').value;
    const randomNumber = Math.floor(Math.random() * 3);
    const compSelection = getThrowFromNumber(randomNumber);
    const outcome = didPlayerWin(playerSelection, compSelection);
    document.getElementById('result').textContent = outcome;
};

fightButton.addEventListener('click', rockPaperScissorsGo);