import * as express from 'express';
import { InMemoryWordGateway } from './gateway/InMemoryWordGateway';
import { CreateGameController } from './controllers/CreateGameController';
import { CreateGameInteractor } from './interactors/CreateGameInteractor';
import { InMemoryPlayerGateway } from './gateway/InMemoryPlayerGateway';
import { InMemoryGameGateway } from './gateway/InMemoryGameGateway';
import { RandomIntGenerator } from './gateway/RandomIntGenerator';
import { GuessInteractor } from './interactors/GuessInteractor';
import { GuessController } from './controllers/GuessController';
const app = express();
const path = require('path');

app.listen(3000, () => console.log("Listening to app at 3000"));
app.use(express.static('src'));
app.use(express.json());

const generator = new RandomIntGenerator();
const wordGateway = new InMemoryWordGateway(generator);
const playerGateway = new InMemoryPlayerGateway();
const gameGateway = new InMemoryGameGateway();
const createGameUC = new CreateGameInteractor(wordGateway, playerGateway, gameGateway);
const createGameController = new CreateGameController(createGameUC)
const guessUC = new GuessInteractor(gameGateway);
const guessController = new GuessController(guessUC);

app.post('/games', (req, resp) => {
    var playerIdAndGameWord = createGameController.execute();
    resp.json({
        playerId: playerIdAndGameWord.getPlayerId(),
        chosenWord: playerIdAndGameWord.getChosenWord(),
    })
})

app.post('/guess', (req, resp) => {
    const data = req.body;
    const guessStatus = guessController.isLetterInWord(data.userId, data.letterGuessed);
    resp.json({
        guessStatus: guessStatus,  
    })
})