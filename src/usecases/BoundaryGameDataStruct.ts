import { GameDataStruct } from "./gameDataStruct";

export class BoundaryGameDataStruct implements GameDataStruct {
    private readonly playerId : number
    private readonly chosenWord : string

    constructor(playerId : number, chosenWord : string) {
        this.playerId = playerId;
        this.chosenWord = chosenWord;
    }

    getPlayerId(): number {
        return this.playerId;
    }
    getChosenWord(): string {
        return this.chosenWord;
    }

}