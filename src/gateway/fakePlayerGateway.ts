import { PlayerGateway } from "./playerGateway";

export class FakePlayerGateway implements PlayerGateway {
    private readonly playerIds : number[];

    constructor() {
        this.playerIds = new Array();
    }

    addAPlayer() : number {
        var newPlayerId = this.getLastIndexOfArray() + 1;
        this.playerIds.push(newPlayerId);
        return newPlayerId;
    }

    private getLastIndexOfArray() : number {
        return this.playerIds.length;
    }
}