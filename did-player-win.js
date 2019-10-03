let tie = 0;
let wins = 0;
let losses = 0;


function didPlayerWin(playerThrow, compThrow) {
    if (playerThrow === compThrow) {
        tie ++;
        document.getElementById('ties').textContent = tie;
        return 'Tie';
    } else if ((playerThrow === 'Scissors' && compThrow === 'Paper') || (playerThrow === 'Rock' && compThrow === 'Scissors') || (playerThrow === 'Paper' && compThrow === 'Rock')) {
        wins ++;
        document.getElementById('wins').textContent = wins;
        return 'Player Wins';
    } else {
        losses ++;
        document.getElementById('losses').textContent = losses;
        return 'Player Loses';
    }
}

export default didPlayerWin ;