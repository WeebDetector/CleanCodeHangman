import app from './TestApiRunner';
const supertest = require("supertest");

describe("Testing endpoints", () => {
    test("POST /games", async () => {
        const freshWordStateArray = [[0, '_'], [1, '_'], [2, '_'], [3, '_'], [4, '_']];

        const response = await supertest(app.getApp()).post('/games').expect(201);

        expect(response.body.playerId).toBe(1);
        expect(response.body.chosenWord).toStrictEqual(freshWordStateArray);
    })

    test("POST /guess", async () => {
        const data = {
            userId: 1,
            letterGuessed: "a"
        }
        const modifiedWordStateArray = [[0, '_'], [1, 'a'], [2, '_'], [3, '_'], [4, '_']];
        const expectedLettersGuessed = ['a'];

        const response = await supertest(app.getApp()).post('/guesses').send(data).expect(200);

        expect(response.body.isGuessCorrect).toBe(true);
        expect(response.body.stateDescription).toBe('in-progress');
        expect(response.body.wordState).toStrictEqual(modifiedWordStateArray);
        expect(response.body.lettersGuessed).toStrictEqual(expectedLettersGuessed);
        expect(response.body.missedGuesses).toBe(0);
    })
})