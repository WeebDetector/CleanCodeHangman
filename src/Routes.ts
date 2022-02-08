import { Router } from "express";
import { CreateGameController } from "./controllers/CreateGameController";
import { GuessController } from "./controllers/GuessController";
import { GameGateway } from "./gateway/GameGateway";
import { PlayerGateway } from "./gateway/PlayerGateway";
import { WordGateway } from "./gateway/WordGateway";
import { CreateGameInteractor } from "./interactors/CreateGameInteractor";
import { GuessInteractor } from "./interactors/GuessInteractor";

const express = require('express');


export class Routes {
    private readonly createGameController : CreateGameController;
    private readonly guessController : GuessController;
    private readonly router : Router;

    constructor(wordGW: WordGateway, playerGW: PlayerGateway, gameGW: GameGateway) {
        const createGameUC = new CreateGameInteractor(wordGW, playerGW, gameGW);
        this.createGameController = new CreateGameController(createGameUC)
        const guessUC = new GuessInteractor(gameGW);
        this.guessController = new GuessController(guessUC);
        this.router = express.Router();
        this.init();
    }

    private init() : void {
        this.router.post('/games', (req: any, res: any) => {
            const playerIdAndGameWord = this.createGameController.execute();
            res.json({
                playerId: playerIdAndGameWord.getPlayerId(),
                chosenWord: playerIdAndGameWord.getChosenWord(),
            })
        })
    
        this.router.post('/guess', (req: any, res: any) => {
            const data = req.body;
            const guessStatus = this.guessController.isLetterInWord(data.userId, data.letterGuessed);
            res.json({
                guessStatus: guessStatus.getGuessState(),
                gameState: guessStatus.getGameStateDescription(),  
            })
        })
    }

    getRouter() : Router {
        return this.router;
    }
}