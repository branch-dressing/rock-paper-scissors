import { getThrowFromNumber } from './get-throw.js';
import { getGameResults, resetAllStates } from './did-player-win.js';
import { changeImageToRock, changeImageToPaper, changeImageToScissors } from './change-images.js';

document.getElementById('rock-img').addEventListener('click', changeImageToRock);
document.getElementById('paper-img').addEventListener('click', changeImageToPaper);
document.getElementById('scissors-img').addEventListener('click', changeImageToScissors);

const fightButton = document.getElementById('fight');
const resetButton = document.getElementById('reset-button');

const rockPaperScissorsGo = () => {
    const playerSelection = document.querySelector('input:checked').value;
    const randomNumber = Math.floor(Math.random() * 3);
    const compSelection = getThrowFromNumber(randomNumber);
    const outcome = getGameResults(playerSelection, compSelection);
    document.getElementById('result').textContent = outcome;
};

fightButton.addEventListener('click', rockPaperScissorsGo);
resetButton.addEventListener('click', resetAllStates);