const { GuessChecker } = require("../../src/guessChecker");

test('Tests if the guess checker works correctly', () => {
    var obj = new GuessChecker("table"); 
    expect(obj.isLetterInTheWord("b")).toBe(true);
});