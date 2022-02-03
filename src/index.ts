import * as express from 'express';
import { FakeWordGateway } from './gateway/fakeWordGateway';
import { CreateGameController } from './controllers/createGameController';
import { CreateGameInteractor } from './Interactors/createGameInteractor';
import { FakePlayerGateway } from './gateway/fakePlayerGateway';
const app = express();
const path = require('path');

app.listen(3000, () => console.log("Listening to app at 3000"));
app.use(express.static('src'));
app.use(express.json());

let wordGateway = new FakeWordGateway();
let playerGateway = new FakePlayerGateway();
let createGameUC = new CreateGameInteractor(wordGateway, playerGateway);
let createGameController = new CreateGameController(createGameUC)

app.get('/', (req, resp) => {
    console.log("Home page");
    resp.send("Hello world");
})

app.post('/games', (req, resp) => {
    var gameWord = createGameController.execute();
    resp.json({
        chosenWord: gameWord,
    })
})