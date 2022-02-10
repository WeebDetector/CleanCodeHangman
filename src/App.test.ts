import app from './TestApiRunner';
const supertest = require("supertest");

const FRESH_WORD_STATE_ARRAY = [[0, '_'], [1, '_'], [2, '_'], [3, '_'], [4, '_']]
const MODIFIED_WORD_STATE_ARRAY = [[0, '_'], [1, 'a'], [2, '_'], [3, '_'], [4, '_']]

describe("Testing endpoints", () => {
    test("POST /games", async () => {
        const response = await supertest(app.getApp()).post('/games').expect(201);

        expect(response.body.playerId).toBe(1);
        expect(response.body.chosenWord).toStrictEqual(FRESH_WORD_STATE_ARRAY);
    })

    test("POST /guess", async () => {
        const data = {
            userId: 1,
            letterGuessed: "a"
        }
        const response = await supertest(app.getApp()).post('/guess').send(data).expect(200);

        expect(response.body.isGuessCorrect).toBe(true);
        expect(response.body.stateDescription).toBe('in-progress');
        expect(response.body.wordState).toStrictEqual(MODIFIED_WORD_STATE_ARRAY);
    })
})