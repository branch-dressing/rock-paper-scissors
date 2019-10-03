export const getThrowFromNumber = (throwNumber) => {
    if (throwNumber === 0) {
        document.getElementById('computer-selection-img').src = 'http://pixelartmaker.com/art/da268f06e621b21.png';
        return 'Rock';
    } else if (throwNumber === 1) {
        document.getElementById('computer-selection-img').src = 'http://pixelartmaker.com/art/5acc67294cb507c.png';
        return 'Paper';
    } else if (throwNumber === 2) {
        document.getElementById('computer-selection-img').src = 'https://pbs.twimg.com/media/D7mSLOMUIAAGYfa.png';
        return 'Scissors';
    }
};