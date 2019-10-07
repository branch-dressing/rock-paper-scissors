let tie = 0;
let wins = 0;
let losses = 0;


export const getGameResults = (playerThrow, compThrow) => {
    if (playerThrow === compThrow) {
        updateTies(++tie);
        return 'Tie';
    } else if ((playerThrow === 'Scissors' && compThrow === 'Paper') || (playerThrow === 'Rock' && compThrow === 'Scissors') || (playerThrow === 'Paper' && compThrow === 'Rock')) {
        updateWins(++wins);
        return 'Player Wins';
    } else {
        updateLosses(++losses);
        return 'Player Loses';
    }
};

export const resetAllStates = () => {
    tie = 0;
    wins = 0;
    losses = 0;
    
    document.getElementById('computer-selection-img').src = 'https://tr.rbxcdn.com/d49a1ed85c55f18e053de3dc8a65c831/420/420/Decal/Png';
    document.getElementById('player-selection-img').src = 'https://tr.rbxcdn.com/d49a1ed85c55f18e053de3dc8a65c831/420/420/Decal/Png';
    updateTies(tie);
    updateWins(wins);
    updateLosses(losses);
};

const updateWins = (winsCount) => {
    document.getElementById('wins').textContent = winsCount;
};

const updateLosses = (lossesCount) => {
    document.getElementById('losses').textContent = lossesCount;
};

const updateTies = (tiesCount) => {
    document.getElementById('ties').textContent = tiesCount;
};