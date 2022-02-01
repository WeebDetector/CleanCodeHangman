const { WordSelector } = require("../../src/wordSelector");

test('Picks a random word and returns it', () => {
    let obj = new WordSelector(); 
    expect(obj.pickAWord()).toBeTruthy();
});