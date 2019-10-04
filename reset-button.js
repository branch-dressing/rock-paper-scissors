import { tie, wins, losses } from './did-player-win.js';

export const resetAllStates = () => {
    tie = 0;
    wins = 0;
    losses = 0;
    
    document.getElementById('computer-selection-img').src = 'https://tr.rbxcdn.com/d49a1ed85c55f18e053de3dc8a65c831/420/420/Decal/Png';
    document.getElementById('player-selection-img').src = 'https://tr.rbxcdn.com/d49a1ed85c55f18e053de3dc8a65c831/420/420/Decal/Png';
};


