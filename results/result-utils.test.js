import { mungeCaptured, mungeNames } from '../results/results-utils';

const test = QUnit.test;

test('should return three random pokemon', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mungeCaptured(pokemonArray);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

//refactoring: rename and organize files and pathways in a way that makes sense