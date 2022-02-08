import { CreateGameController } from "./controllers/CreateGameController";
import { GuessController } from "./controllers/GuessController";
import { InMemoryGameGateway } from "./gateway/InMemoryGameGateway";
import { InMemoryPlayerGateway } from "./gateway/InMemoryPlayerGateway";
import { InMemoryWordGateway } from "./gateway/InMemoryWordGateway";
import { RandomIntGenerator } from "./gateway/RandomIntGenerator";
import { CreateGameInteractor } from "./interactors/CreateGameInteractor";
import { GuessInteractor } from "./interactors/GuessInteractor";

const express = require('express');
const router = express.Router();

const generator = new RandomIntGenerator();
const wordGateway = new InMemoryWordGateway(generator);
const playerGateway = new InMemoryPlayerGateway();
const gameGateway = new InMemoryGameGateway();
const createGameUC = new CreateGameInteractor(wordGateway, playerGateway, gameGateway);
const createGameController = new CreateGameController(createGameUC)
const guessUC = new GuessInteractor(gameGateway);
const guessController = new GuessController(guessUC);

router.post('/games', (req: any, res: any) => {
    const playerIdAndGameWord = createGameController.execute();
    res.json({
        playerId: playerIdAndGameWord.getPlayerId(),
        chosenWord: playerIdAndGameWord.getChosenWord(),
    })
})

router.post('/guess', (req: any, resp: any) => {
    const data = req.body;
    const guessStatus = guessController.isLetterInWord(data.userId, data.letterGuessed);
    resp.json({
        guessStatus: guessStatus,  
    })
})

export default router;