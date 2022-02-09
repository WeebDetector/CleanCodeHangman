import app from './TestApiRunner';
const supertest = require("supertest");

describe("Testing endpoints", () => {
    test("POST /games", async () => {
        const response = await supertest(app.getApp()).post('/games').expect(201);
        expect(response.body.playerId).toBe(1);
        expect(response.body.chosenWord).toBe("table");
    })

    test("POST /guess", async () => {
        const data = {
            userId: 1,
            letterGuessed: "a"
        }

        const response = await supertest(app.getApp()).post('/guess').send(data).expect(200);

        expect(response.body.guessStatus).toBe(true);
        expect(response.body.gameState).toBe('in-progress');
    })
})