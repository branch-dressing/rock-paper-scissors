import { getThrowFromNumber } from '../get-throw.js';
const test = QUnit.test;

test('should return "Rock" when throwNumber is 0', function(assert) {
    const throwNumber = 0;
    const results = getThrowFromNumber(throwNumber);
    assert.equal(results, 'Rock');
});

test('should return "Paper" when throwNumber is 1', function(assert) {
    const throwNumber = 1;
    const results = getThrowFromNumber(throwNumber);
    assert.equal(results, 'Paper');
});

test('should return "Scissors" when throwNumber is 2', function(assert) {
    const throwNumber = 2;
    const results = getThrowFromNumber(throwNumber);
    assert.equal(results, 'Scissors');
});