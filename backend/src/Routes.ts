import { Request, Response, Router } from "express";
import { CreateGameRoute } from "./rest/implementation/CreateGameRoute";
import { GuessRoute } from "./rest/implementation/GuessRoute";
import { GameGateway } from "./gateway/api/GameGateway";
import { PlayerGateway } from "./gateway/api/PlayerGateway";
import { WordGateway } from "./gateway/api/WordGateway";
import { CreateGameInteractor } from "./use_cases/implementation/CreateGameInteractor";
import { GuessInteractor } from "./use_cases/implementation/GuessInteractor";

const express = require('express');


export class Routes {
    private readonly createGameController : CreateGameRoute;
    private readonly guessController : GuessRoute;
    private readonly router : Router;

    constructor(wordGW: WordGateway, playerGW: PlayerGateway, gameGW: GameGateway) {
        const createGameUC = new CreateGameInteractor(wordGW, playerGW, gameGW);
        this.createGameController = new CreateGameRoute(createGameUC)
        const guessUC = new GuessInteractor(gameGW);
        this.guessController = new GuessRoute(guessUC);
        this.router = express.Router();
        this.init();
    }

    private init() : void {
        this.router.post('/games', (req: Request, res: Response) => {
            this.createGameController.execute(req, res);
        })
    
        this.router.post('/guesses', (req: Request, res: Response) => {
            this.guessController.isLetterInWord(req, res);
        })
    }

    getRouter() : Router {
        return this.router;
    }
}