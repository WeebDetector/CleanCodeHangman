import * as express from 'express';
import { FakeWordGateway } from './gateway/fakeWordGateway';
import { CreateGameController } from './controllers/createGameController';
import { CreateGameInteractor } from './Interactors/createGameInteractor';
import { FakePlayerGateway } from './gateway/fakePlayerGateway';
import { FakeGameGateway } from './gateway/fakeGameGateway';
const app = express();
const path = require('path');

app.listen(3000, () => console.log("Listening to app at 3000"));
app.use(express.static('src'));
app.use(express.json());

let wordGateway = new FakeWordGateway();
let playerGateway = new FakePlayerGateway();
let gameGateway = new FakeGameGateway();
let createGameUC = new CreateGameInteractor(wordGateway, playerGateway, gameGateway);
let createGameController = new CreateGameController(createGameUC)

app.post('/games', (req, resp) => {
    var playerIdAndGameWord = createGameController.execute();
    resp.json({
        playerId: playerIdAndGameWord.getPlayerId(),
        chosenWord: playerIdAndGameWord.getChosenWord(),
    })
})