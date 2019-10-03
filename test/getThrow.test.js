// IMPORT MODULES under test here:
// import example from '../src/example.js';
import getThrow from '../get-throw.js';

const test = QUnit.test;

test('should return "Rock" when throwNumber is 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const throwNumber = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const results = getThrow(throwNumber)
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, "Rock");
});

test('should return "Paper" when throwNumber is 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const throwNumber = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const results = getThrow(throwNumber)
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, "Paper");
});

test('should return "Scissors" when throwNumber is 2', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const throwNumber = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const results = getThrow(throwNumber)
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, "Scissors");
});
