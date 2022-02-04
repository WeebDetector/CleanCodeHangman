import * as express from 'express';
import { InMemoryWordGateway } from './gateway/InMemoryWordGateway';
import { CreateGameController } from './controllers/CreateGameController';
import { CreateGameInteractor } from './interactors/CreateGameInteractor';
import { InMemoryPlayerGateway } from './gateway/InMemoryPlayerGateway';
import { InMemoryGameGateway } from './gateway/InMemoryGameGateway';
const app = express();
const path = require('path');

app.listen(3000, () => console.log("Listening to app at 3000"));
app.use(express.static('src'));
app.use(express.json());

let wordGateway = new InMemoryWordGateway();
let playerGateway = new InMemoryPlayerGateway();
let gameGateway = new InMemoryGameGateway();
let createGameUC = new CreateGameInteractor(wordGateway, playerGateway, gameGateway);
let createGameController = new CreateGameController(createGameUC)

app.post('/games', (req, resp) => {
    var playerIdAndGameWord = createGameController.execute();
    resp.json({
        playerId: playerIdAndGameWord.getPlayerId(),
        chosenWord: playerIdAndGameWord.getChosenWord(),
    })
})