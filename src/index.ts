import * as express from 'express';
import { InMemoryWordGateway } from './gateway/InMemoryWordGateway';
import { CreateGameController } from './controllers/CreateGameController';
import { CreateGameInteractor } from './interactors/CreateGameInteractor';
import { InMemoryPlayerGateway } from './gateway/InMemoryPlayerGateway';
import { InMemoryGameGateway } from './gateway/InMemoryGameGateway';
import { RandomGenerator } from './gateway/RandomGenerator';
const app = express();
const path = require('path');

app.listen(3000, () => console.log("Listening to app at 3000"));
app.use(express.static('src'));
app.use(express.json());

const generator = new RandomGenerator();
const wordGateway = new InMemoryWordGateway(generator);
const playerGateway = new InMemoryPlayerGateway();
const gameGateway = new InMemoryGameGateway();
const createGameUC = new CreateGameInteractor(wordGateway, playerGateway, gameGateway);
const createGameController = new CreateGameController(createGameUC)

app.post('/games', (req, resp) => {
    var playerIdAndGameWord = createGameController.execute();
    resp.json({
        playerId: playerIdAndGameWord.getPlayerId(),
        chosenWord: playerIdAndGameWord.getChosenWord(),
    })
})