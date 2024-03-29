// IMPORT MODULES under test here:
// import example from '../src/example.js';
import didPlayerWin from '../did-player-win.js';

const test = QUnit.test;

test('should return "Tie" when compThrow is "Paper" and playerThrow is "Paper"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const compThrow = 'Paper';
    const playerThrow = 'Paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const results = didPlayerWin(compThrow, playerThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, 'Tie');
});

test('should return "Player Wins" when compThrow is "Rock" and playerThrow is "Paper"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerThrow = 'Paper';
    const compThrow = 'Rock';


    //Act 
    // Call the function you're testing and set the result to a const
    const results = didPlayerWin(playerThrow, compThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, 'Player Wins');
});

test('should return "Player Loses" when compThrow is "Rock" and playerThrow is "Scissors"', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerThrow = 'Scissors';
    const compThrow = 'Rock';


    //Act 
    // Call the function you're testing and set the result to a const
    const results = didPlayerWin(playerThrow, compThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, 'Player Loses');
});