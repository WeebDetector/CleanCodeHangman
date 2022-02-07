import { PlayerGateway } from "./PlayerGateway";

export class InMemoryPlayerGateway implements PlayerGateway {
    private readonly playerIds : number[];

    constructor() {
        this.playerIds = new Array();
    }

    addPlayer() : number {
        const newPlayerId = this.getLastIndexOfArray() + 1;
        this.playerIds.push(newPlayerId);
        return newPlayerId;
    }

    private getLastIndexOfArray() : number {
        return this.playerIds.length;
    }
}