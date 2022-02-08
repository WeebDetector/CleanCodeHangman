import { GameGateway } from './gateway/GameGateway';
import { PlayerGateway } from './gateway/PlayerGateway';
import { WordGateway } from './gateway/WordGateway';
import { Routes } from './Routes';
const express = require('express');

export class App {
    private readonly app: any;
    private readonly port: number

    constructor(wordGW : WordGateway, playerGW : PlayerGateway, gameGW : GameGateway) {
        this.app = express();
        this.port = 3000;

        this.app.use(express.json());
        const router = new Routes(wordGW, playerGW, gameGW);
        this.app.use(router.getRouter());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening to app at 3000');
        })
    }

    getApp() : any {
        return this.app;
    }
}