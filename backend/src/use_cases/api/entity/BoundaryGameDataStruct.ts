export class BoundaryGameDataStruct {
    private readonly playerId : number
    private readonly chosenWord : Map<number, string>

    constructor(playerId : number, chosenWord : Map<number, string>) {
        this.playerId = playerId;
        this.chosenWord = chosenWord;
    }

    getPlayerId(): number {
        return this.playerId;
    }
    getChosenWord(): Map<number, string> {
        return this.chosenWord;
    }
}