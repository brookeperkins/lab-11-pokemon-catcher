import '../data/pokemon.js';
import '../data/pokemon.js';
import { randomPokemon } from '../app.js';

const test = QUnit.test;

test('should return three random pokemon', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
