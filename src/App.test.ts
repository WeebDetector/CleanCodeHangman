import app from './TestApiRunner';
const supertest = require("supertest");

function constructArray(word : string, letterGuessed : string) : [number, string][] {
    const arrayToExpect = new Array();
    for (let i = 0; i < word.length; i++)
        (letterGuessed == word[i]) ? arrayToExpect.push([i, letterGuessed]) : arrayToExpect.push([i, '_']);

    return arrayToExpect;
}

describe("Testing endpoints", () => {
    test("POST /games", async () => {
        const response = await supertest(app.getApp()).post('/games').expect(201);
        const responseArray = constructArray("table", '');

        expect(response.body.playerId).toBe(1);
        expect(response.body.chosenWord).toStrictEqual(responseArray);
    })

    test("POST /guess", async () => {
        const data = {
            userId: 1,
            letterGuessed: "a"
        }
        const wordStateArray = constructArray("table", data.letterGuessed);

        const response = await supertest(app.getApp()).post('/guess').send(data).expect(200);

        expect(response.body.isGuessCorrect).toBe(true);
        expect(response.body.stateDescription).toBe('in-progress');
        expect(response.body.wordState).toStrictEqual(wordStateArray);
    })
})