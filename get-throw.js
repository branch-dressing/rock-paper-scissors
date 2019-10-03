const getThrowFromNumber = (throwNumber) => {
    if (throwNumber === 0) {
        return 'Rock';
    } else if (throwNumber === 1) {
        return 'Paper';
    } else if (throwNumber === 2) {
        return 'Scissors';
    }
};

const getThrow = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    getThrowFromNumber(randomNumber);
};

export default getThrowFromNumber;