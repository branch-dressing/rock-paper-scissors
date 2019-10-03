function didPlayerWin(playerThrow, compThrow) {
    if (playerThrow === compThrow) {
        return 'Tie';
    } else if (playerThrow === 'Scissors' && compThrow === 'Paper') {
        return 'Player Wins';
    } else {return 'Player Loses'};
}

export default didPlayerWin;