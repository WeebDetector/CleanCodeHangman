import app from '../../src/app';

const supertest = require("supertest");

describe("Testing endpoints", () => {
    test("POST /games", async () => {
        const response = await supertest(app).post('/games').expect(200);
        expect(response.body.playerId).toBe(1);
        expect(response.body.chosenWord).toBeTruthy();
    })
})